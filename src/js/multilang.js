import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'en', // current language
    fallbackLocale: 'en',
    messages: {
        'en': require('./locales/en.json'),
        'ru': require('./locales/ru.json'),
        'uk': require('./locales/uk.json')
    }
});

export default i18n