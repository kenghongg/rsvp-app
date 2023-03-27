/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
import VueCountdown from "@chenfengyuan/vue-countdown";
import Countdown from "vue3-flip-countdown";
// import { promisifyMap } from 'map-promisified';

// import VueDatePicker from '@vuepic/vue-datepicker';
// import VPikaday from "@ohmygodvt95/vue3-pikaday";
import { TroisJSVuePlugin } from "troisjs";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(Countdown);
  app
    .use(TroisJSVuePlugin)
    // .component('VueDatePicker', VueDatePicker)
    // .use(VPikaday)
    .component(VueCountdown.name, VueCountdown);
}
