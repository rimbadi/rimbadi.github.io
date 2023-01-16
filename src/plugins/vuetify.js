import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa'||'md'||'mdi'
    },
    theme:{
        themes:{
            dark:{
                background: '#111111'
            },
            light:{
                background: '#FFFFFF'
            }
        }
    }
});
