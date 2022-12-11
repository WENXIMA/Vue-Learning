import { createRouter, createWebHistory } from "vue-router";
import CoachHome from '../component/Coaches/CoachHome.vue';
import RequestHome from '../component/Request/RequestHome.vue';
import HomePage from '../component/Home/HomePage.vue';
import ErrorPathName from '../component/ErrorMessage/ErrorPathName.vue';
import CoachRegister from '../component/Coaches/CoachRegister.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/', components:{default:HomePage}
        },
        {
            path:'/coaches', components:{default: CoachHome,},
            children:[
                {
                   
                    path:'register',
                    components:{default:CoachRegister}
                }
            ]
        },
        {
            path:'/request', components:{default:RequestHome,}
        },
        {path:'/:notFound(.*)',component:ErrorPathName}
    ]
});

export default router;