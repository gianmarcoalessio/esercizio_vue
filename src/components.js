import dWarning from "@eng/dwarning.vue";
import dGroup from "@eng/dgroup.vue";
import dMsg from "@eng/dmsg.vue";
import dTab from "@eng/dtab.vue";
import dStars from "@eng/dstars.vue";
import dScrollmanager from "@eng/dscrollmanager.vue";
import svgClose from "@svg/close.vue"
import svgTwitter from "@svg/twitter.vue";

export default {
    install: (app, options) => {
        app.component("d-warning", dWarning);
        app.component("d-stars", dStars);
        app.component("d-group", dGroup);
        app.component("d-msg", dMsg);
        app.component("d-tab", dTab);
        app.component("dScrollmanager", dScrollmanager);

        // registrazione svg
        app.component("svg-close", svgClose);
        app.component("svg-twitter", svgTwitter);
    }
}