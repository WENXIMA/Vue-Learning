import { createStore } from "vuex";
import coachesModule from './modules/coaches/index.js';
import requestModule from './modules/request/index.js';
import authModule from'./modules/auth/index.js';
const store = createStore({
    modules:{
        coachlist:coachesModule,
        requestlist:requestModule,
        auth:authModule,
    },
    state(){
        return{
            userId:'c3'
        }
    },
    getters: {
        userId(state) {
          return state.userId;
        }
      }

});
export default store;