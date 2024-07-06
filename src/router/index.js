import {createWebHistory, createRouter} from "vue-router";
import Market from '../pages/index.vue'
import Checkout from "../pages/checkout/Checkout.vue";
import {useStore} from "vuex";

const routes = [
    {
        name: "Market",
        path: "/",
        component: Market
    },
    {
        name: "Checkout",
        path: "/checkout",
        component: Checkout
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const store = useStore();
    const userCart = store.state.homePage.userCart;

    if (to.name === "Checkout" && userCart.length === 0) {
        next({ name: "Market" });
    } else {
        next();
    }
})

export default router;
