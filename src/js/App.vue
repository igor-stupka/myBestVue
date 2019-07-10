<template lang="pug">

	#app(:class="theme",
		 v-scroll="handleScroll")
		.container
			div(v-for="(t, langName) in $i18n.messages")
				label
					input(type="radio" v-model="I18N.locale" @change="changeLanguage" :value="langName")
					span  {{langName}}
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			br
			button(@click="changeTheme" v-click-outside="nobtn") {{ $t('changeTheme') }}

			go-to-top(link="#body", :offset="offsetik")
</template>

<script>
	import I18N from './multilang';
	import GoToTop from './components/GoToTop';
	import { Scroll } from './directives/scroll';
	import { ClickOutside } from './directives/clickOutside';

	export default {
		name: 'app',
		directives: {
			Scroll,
			ClickOutside
		},
		components: {
			GoToTop
		},
		data () {
			return {
				theme: 'light',
				I18N,
				offsetik: 0
			}
		},
		methods: {
			nobtn() {
				console.log('outsite')
			},
			loadTheme() {
				let darkOS = window.matchMedia('(prefers-color-scheme: dark)').matches; // dark OS theme

				if (darkOS) {
					this.theme = 'dark';
					alert('dark themeeeee!!!!!!');
				} else {
					// use previously theme
					if (localStorage.theme) this.theme = localStorage.theme;
				}
			},
			changeTheme() {
				this.theme === 'light' ? this.theme = 'dark' : this.theme = 'light';
			},
			loadLanguage() {
				if (localStorage.language) {
					this.I18N.locale = localStorage.language;
				} else {
					if (navigator) {
					    let browserLang = navigator.language.substr(0, 2).toLowerCase();
						for (let lang in this.I18N.messages) {
							if (browserLang === lang) this.I18N.locale = browserLang;
						}
					}
				}
				this.setLangAttr();
			},
			changeLanguage() {
				localStorage.language = this.I18N.locale;
				this.setLangAttr();
			},
			setLangAttr() {
				document.documentElement.setAttribute('lang', this.I18N.locale)
			},
			handleScroll() {
				this.offsetik = window.scrollY;
			}
		},
		mounted() {
			this.loadLanguage();
			this.loadTheme();
		},
		watch: {
			theme(newTheme) {
				// add selected theme to localStorage
				localStorage.theme = newTheme;
			}
		}
	}


</script>

<style lang="sass">
@import '../style/app'
</style>
