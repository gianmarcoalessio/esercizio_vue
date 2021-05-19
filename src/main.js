import { createApp } from 'vue'
import App from './App.vue'
import { strDate, strTime, strDatetime, strWeekday, validDate, toDate, validDateTime, toEuro } from "@eng/utils.js"
import '@css/style.css'

// componenti
import dWarning from "@eng/dwarning.vue";
import dGroup from "@eng/dgroup.vue";
import dMsg from "@eng/dmsg.vue";
import dTab from "@eng/dtab.vue";
import dStars from "@eng/dstars.vue";
import svgClose from "@svg/close.vue"

if (!Date.prototype.toInt) {
    Date.prototype.toInt = function () {
        return this.getDate() + (this.getMonth() + 1) * 100 + this.getFullYear() * 10000
    }
}

if (!Date.prototype.toFloat) {
    Date.prototype.toFloat = function () {
        return Math.floor(this.getDate() * 10000 + (this.getMonth() + 1) * 1000000 + this.getFullYear() * 100000000 + (this.getHours()) * 100 + this.getMinutes() + .5) / 10000
    }
}

const app = createApp(App)
// registrazione componenti globali
app.component("d-warning", dWarning);
app.component("d-stars", dStars);
app.component("d-group", dGroup);
app.component("d-msg", dMsg);
app.component("d-tab", dTab);

// registrazione svg
app.component("svg-close", svgClose);


// filtri
app.config.globalProperties.$$ = {
    currencyUSD(value) {
        return '$' + value
    },
    euro(value, valuta = '') {
        if (!value) return ''
        return toEuro(value);
    },
    number(value, valuta = '') {
        if (!value) return ''
        return valuta + ' ' + new Intl.NumberFormat('it').format(value)
    },
    ggmm(value) {
        if (!value) return ''
        var r = new Date(value);
        var pad = x => { return ('0' + x).substr(-2) }
        return `${pad(r.getDate())}/${pad(r.getMonth() + 1)}`
    },
    ggmmaa(value) {
        return strDate(value);
    },
    date(value) {
        return strDate(parseFloat(value));
    },
    datetime(value) {
        return strDatetime(value);
    },
    time(value) {
        return strTime(value);
    },
    weekday(value) {
        return strWeekday(value);
    }
}





// fine
app.mount('#app');

