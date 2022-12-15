import { createStore } from "vuex";
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/request/index.js';

const store = createStore({
    modules:{
        coachlist:coachesModule,
        requestlist:requestModule,
    },
    

});
export default store;