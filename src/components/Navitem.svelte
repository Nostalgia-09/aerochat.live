<script lang="ts">
	export let href: string = "/";
</script>

<a draggable="false" class="nav__item" {href}>
	<span><slot /></span>
</a>

<style>
	.nav__item {
		cursor: default;
		display: flex;
		text-align: center;
		vertical-align: middle;
		line-height: 23px; /* The same as your div height */
		height: 24px;
		padding: 0px 12px;
		border-radius: 2px;
		background: transparent;
		border: none;
		color: white;
		-webkit-user-drag: none;
	}
	.nav__item:hover {
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0.25) 0%,
			rgba(255, 255, 255, 0.4) 50%,
			rgba(255, 255, 255, 0.25) 50%,
			rgba(255, 255, 255, 0.1) 100%
		);
		text-decoration: none;
		outline: solid thin rgba(0, 0, 0, 0.5);
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);
	}
	.nav__item:active {
		outline: solid thin rgba(0, 0, 0, 0.75);
		box-shadow:
			inset 0px 0px 8px 0px rgb(0, 87, 91),
			inset 0px 0px 0px 1px rgba(255, 255, 255, 0.75);
		background: rgba(234, 234, 234, 0.298);
	}
	.nav__item:active > span {
		transform: translate(1px, 1px);
	}
	.nav__item {
		margin-left: 2px;
		margin-right: 2px;
	}
</style>
