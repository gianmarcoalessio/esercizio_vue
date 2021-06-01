import { post } from "@eng/post"
import { bus } from "@eng/bus"
import { strDate, strTime, strDatetime, strWeekday, validDate, toDate, validDateTime, toEuro } from "@eng/utils.js"




export default {

  install: (app, options) => {
    app.config.globalProperties.$fetch = (add, param) => {
      return post.post(add, param);
    }
    app.config.globalProperties.$post=post;
    app.config.globalProperties.$bus=bus;
    app.config.globalProperties.$globalemit = (key, param) => {
      return bus.emit(key, param);
    }
    app.config.globalProperties.$globalon = (key, fn) => {
      return bus.on(key, fn);
    }
    app.config.globalProperties.$globaloff = (key, fn) => {
      return bus.off(key, fn);
    }
    app.config.globalProperties.filtro = {
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
    app.mixin({
      data() {
        return {
          post
        }
      },
      methods: {
        windowBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
        },
        logga(a) {
            alert(a);
        },
        fetch(indirizzo,param) {
          return post.post(indirizzo,param);
        }
      }
    })


    /*
app.mixin({
    mounted() {
        if (this.autoreload) this.autoreload(this.$route.params);
    },
    beforeRouteUpdate(to, from, next) {
        console.log("to",to.params);
        if (this.autoreload) this.autoreload(to.params);
        next();
    },
    beforeRouteLeave(to, from, next) {
        if (this.autoquit) this.autoquit(this.$route.params)
        next();
    }
})
*/



  }
}