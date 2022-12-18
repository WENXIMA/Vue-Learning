import router from "@/Router/router";
import {auth} from '@/firebase/firebase.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from 'firebase/auth'
export default {
    async login( context , payload) {
        const { email, password } = payload
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                case 'auth/wrong-password':
                    alert('wrong passowrd')
                    break
                default:
                    alert('something goes wrong')
            }
            return
        }
        context.commit('setUser', auth.currentUser)
        router.push('/userpage')
    },
    async register( context , payload) {
        const { email, password } = payload
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert('User not found');
                    break;
                case 'auth/invalid-email':
                    alert("Invalid Email");
                    break
                default:
                    alert('something goes wrong')
            }
            return
        }
        context.commit('setUser', auth.currentUser)
        router.push('/userpage')
    },
    async logout(context ) {
        await signOut(auth)
        context.commit('clearUser')
        router.push('/login')
    },
    fetchUser (context){
        auth.onAuthStateChanged(async user => {
            if(user ===null){
                context.commit('clearUser')
            } else{
                context.commit('setUser',user)

                if(router.isReady() && router.currentRoute.value.path==='/login'){
                    router.push('/')
                }
            }
            
        })
    }
}