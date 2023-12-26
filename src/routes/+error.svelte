<script lang="ts">
	import { page } from "$app/stores";
	import CommandLink from "../components/CommandLink.svelte";
</script>

<div class="content">
	<div class="error">
		<h1>An error has occured</h1>
		<p>Unfortunately, an error was encountered whilst trying to process your request.</p>
		<p>
			If you believe this is a mistake, please contact us on our <a
				href="https://discord.gg/nP9SxVQGnu"
				target="_blank">Discord server</a
			>.
		</p>
		<p class="error__info">
			Error code: {$page.status}
			Error message: {$page.error?.message}
			Route: {$page.url.pathname}
		</p>
		<CommandLink title="Go home" href="/" />
	</div>
</div>

<style>
	.content {
		width: calc(100vw);
		display: flex;
		justify-content: center;
	}
	.error {
		max-width: 450px;
		width: 100%;
		box-sizing: border-box;
		padding: 12px;
	}
	.error__info {
		white-space: pre-line;
		outline: solid thin rgba(0, 0, 0, 0.5);
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.5);
		background: linear-gradient(to bottom, #edfff9 0%, #e2eeeb 100%);
		width: fit-content;
		padding: 4px 8px;
		border-radius: 2px;
		color: rgb(0, 0, 0);
		text-shadow:
			0px 0px 2px rgb(255, 255, 255, 0.5),
			0px 0px 4px rgb(255, 255, 255, 0.5),
			0px 0px 6px rgb(255, 255, 255, 0.5),
			0px 0px 8px rgb(255, 255, 255, 0.5);
	}
</style>
