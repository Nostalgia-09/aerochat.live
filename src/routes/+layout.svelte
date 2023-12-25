<script>
	import Navbar from "../components/Navbar.svelte";
	import "../main.css";
</script>

<Navbar />
<div class="content">
	<slot />
</div>

<style>
	.content {
		box-sizing: border-box;
		padding-top: 60px;
	}
</style>
