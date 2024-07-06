import {createStore} from "vuex";
import homePage from "./modules/homePage.js";

const store = createStore({
    modules: {
        homePage: homePage
    }
})

export default store