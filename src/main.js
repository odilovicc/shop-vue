import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Primevue from "primevue/config";
import Aura from "@primevue/themes/aura";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import store from "./store";
import router from "./router/index.js";
import BadgeDirective from "primevue/badgedirective";
import Badge from "primevue/badge";
import Card from "primevue/card";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Popover from "primevue/popover";
import Divider from "primevue/divider";
import OverlayBadge from "primevue/overlaybadge";
import Tag from "primevue/tag";

createApp(App)
  .use(Primevue, {
    theme: {
      preset: Aura,
    },
  })
  .use(store)
  .use(router)
  .use(ToastService)
  .directive("badge", BadgeDirective)
  .component("Badge", Badge)
  .component("Button", Button)
  .component("Card", Card)
  .component("Toast", Toast)
  .component("Tag", Tag)
  .component("Popover", Popover)
  .component("OverlayBadge", OverlayBadge)
  .component("Divider", Divider)
  .mount("#app");
