<script>
	import Navitem from "./Navitem.svelte";
</script>

<div class="nav">
	<div class="nav__left">
		<Navitem
			on:click={() => {
				window.location.href = "/";
			}}>Home</Navitem
		>
		<Navitem
			on:click={() => {
				window.location.href = "/download";
			}}>Download</Navitem
		>
		<Navitem on:click={() => (window.location.href = "/faq")}>FAQ</Navitem>
	</div>
	<div class="nav__right">
		<Navitem on:click={() => window.open("https://discord.gg/nP9SxVQGnu", "_blank")}
			>Discord Server</Navitem
		>
	</div>
</div>

<style>
	.nav {
		position: fixed;
		width: calc(100% - 2px);
		margin-left: 1px;
		height: 32px;
		background: linear-gradient(to bottom, #87b2c0 0%, #468a9e 50%, #105c77 50%, #529cab 100%);
		outline: solid thin rgba(0, 0, 0, 0.5);
		box-shadow:
			inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5),
			0px 0px 16px 0px rgb(1, 92, 95);
		color: white;
		display: flex;
		align-items: center;
		z-index: 9;
	}
	.nav__left,
	.nav__right {
		display: flex;
		box-sizing: border-box;
		padding: 0px 4px;
	}
	.nav__left {
		flex-grow: 1;
	}
</style>
