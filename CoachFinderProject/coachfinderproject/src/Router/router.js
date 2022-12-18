import { createRouter, createWebHistory } from "vue-router";
import CoachHome from '../component/Coaches/CoachHome.vue';
import RequestHome from '../component/Request/RequestHome.vue';
import RequestList from '../component/Request/RequestList.vue';
import HomePage from '../component/Home/HomePage.vue';
import ErrorPathName from '../component/ErrorMessage/ErrorPathName.vue';
import CoachForm from '../component/Coaches/CoachForm.vue';
import CoachDetail from '../component/Coaches/CoachDetail.vue';
import UserLogIn from '../component/UserLogIn/UserLogIn.vue';
import UserRegister from '../component/UserRegister/UserRegister.vue';
import UserPage from '../component/UserPage/UserPage.vue';
import auth from "@/store/modules/auth";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        
        {
            path:'/', components:{default:HomePage}
        },
        {
            path:'/coaches', components:{default: CoachHome,},
        },
        {
            path:'/coaches/:id', components:{default: CoachDetail,},props:true,
            
        },
        {
            path:'/coachregister', components:{default:CoachForm}
        },
        {
            path:'/request', components:{default:RequestHome,}
        },
        {
            path:'/requestlist', components:{default:RequestList,}, 
        },
        {path:'/:notFound(.*)',component:{default:ErrorPathName}},
        {
            path:'/login', components:{default:UserLogIn}
        },
        {
            path:'/userregister', components:{default:UserRegister}
        },
        {
            path:'/userpage', components:{default:UserPage}
        },
    ]
});

router.beforeEach((to,from,next) => {
    if(to.path==='/login' && auth.currentUser){
        next('/userpage')
        return
    }
    if(to.matched.some(record => record.meta.requireAuth) && !auth.currnetUser){
        next('/login')
        return
    }
    next();
})

export default router;