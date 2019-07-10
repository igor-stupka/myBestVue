<template lang="pug">
	a(:href="link", :class="offset < 100 ? 'hide': ''").js-goTo.gototopbutton
</template>

<script>
	import SmoothScroll from "../classes/smoothScroll";

	export default {
		props: {
			link: {
				type: String,
				required: true
			},
			offset: {
				default: 0,
				type: Number
			}
		},
		data () {
			return {
				SmoothScroll,
			}
		}
	}
</script>

<style lang="sass">
.gototopbutton
	position: fixed
	right: 30px
	bottom: 30px
	height: 50px
	width: 50px
	background-color: var(--pink)
	-webkit-border-radius: 50%
	-moz-border-radius: 50%
	border-radius: 50%
	padding: 22px 0 0 20px
	transform: rotate(0deg) scale(1)
	transition: transform .4s ease, visibility 0s 0s
	visibility: visible
	&::before
		content: ''
		width: 10px
		height: 10px
		border-left: 2px solid var(--bg)
		border-top: 2px solid var(--bg)
		transform: rotate(45deg)
		display: block
	&.hide
		transform: rotate(-70deg) scale(0)
		visibility: hidden
		transition: transform .4s ease, visibility 0s .4s

</style>
