<script lang="ts">
	import Navbar from "../components/Navbar.svelte";
	import "../main.css";
	import embed from "$lib/assets/embed.png";
</script>

<svelte:head>
	<meta content={embed} property="og:image" />
</svelte:head>

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
