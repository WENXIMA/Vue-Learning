import { createRouter, createWebHistory } from "vue-router";
import CoachHome from '../component/Coaches/CoachHome.vue';
import RequestHome from '../component/Request/RequestHome.vue';
import RequestList from '../component/Request/RequestList.vue';
import HomePage from '../component/Home/HomePage.vue';
import ErrorPathName from '../component/ErrorMessage/ErrorPathName.vue';
import CoachForm from '../component/Coaches/CoachForm.vue';
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
            path:'/register', components:{default:CoachForm}
        },
        {
            path:'/request', components:{default:RequestHome,}
        },
        {
            path:'/requestlist', components:{default:RequestList,}
        },
        {path:'/:notFound(.*)',component:ErrorPathName}
    ]
});

export default router;