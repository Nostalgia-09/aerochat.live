<script lang="ts">
	import screenshot2 from "$lib/assets/screenshot2.png";
	import screenshot3 from "$lib/assets/screenshot3.png";
	import { onMount } from "svelte";
	import CommandLink from "../../components/CommandLink.svelte";
	// make a request to https://api.github.com/repos/Nostalgia-09/AeroChat/tags
	// get [0].name
	// fetch https://api.github.com/repos/Nostalgia-09/AeroChat/releases/tags/{name}
	// get assets[0].browser_download_url
	// window.open(url, "_self")
	let url = "";
	async function fetchLatestRelease() {
		const tags = await fetch("https://api.github.com/repos/not-nullptr/Aerochat/tags");
		const tagsJson = await tags.json();
		const latestTag = tagsJson[0].name;
		const release = await fetch(
			`https://api.github.com/repos/not-nullptr/Aerochat/releases/tags/${latestTag}`
		);
		const releaseJson = await release.json();
		const downloadUrl = releaseJson.assets[0].browser_download_url;
		url = downloadUrl;
	}
	onMount(() => {
		fetchLatestRelease();
	});
</script>

<svelte:head>
	<title>Download AeroChat — AeroChat</title>
	<meta name="title" content="Download AeroChat — AeroChat" />
	<meta
		name="description"
		content="Download any version of AeroChat here! Currently supports Windows 10 and Windows 11. AeroChat is an open source Discord client inspired by WLM 2009."
	/>
</svelte:head>

<div class="content">
	<div style="display: flex;">
		<div class="screenshots">
			<img
				class="screenshot screenshot2"
				src={screenshot2}
				alt="A screenshot of AeroChat's main window."
			/>
			<img
				class="screenshot screenshot3"
				src={screenshot3}
				alt="A screenshot of AeroChat's server chat window."
			/>
		</div>
		<div class="info">
			<div class="because">join the club</div>
			<div class="why-container">
				<p>Download AeroChat for Windows:</p>
				<!-- <a href={url}>Latest release</a>
				<a href="https://github.com/Nostalgia-09/AeroChat/releases">All releases</a> -->
				<CommandLink
					title="Download the latest version of AeroChat"
					description="This will download the latest tag from AeroChat's GitHub repository directly."
					href={url}
					target="_self"
				/>
				<CommandLink
					title="View all releases"
					description="This will open AeroChat's GitHub respository and view all public releases."
					href="https://github.com/not-nullptr/Aerochat/releases"
					target="_blank"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fade-out {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	.content {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		width: calc(100vw - 2%);
		height: 100vh;
		align-items: center;
		justify-content: center;
	}
	@keyframes bounce-1 {
		0% {
			transform: perspective(960px) rotateX(4deg) rotateY(8deg) rotateZ(-3deg);
		}
		50% {
			transform: perspective(750px) translateY(5px) rotateX(6deg) rotateY(10deg)
				rotateZ(-4deg);
		}
		100% {
			transform: perspective(960px) rotateX(4deg) rotateY(8deg) rotateZ(-3deg);
		}
	}
	@keyframes bounce-2 {
		0% {
			transform: perspective(720px) translate3d(0px, 50px, 80px) rotateX(12deg) rotateY(-8deg)
				rotateZ(3deg);
		}
		50% {
			transform: perspective(720px) translate3d(0px, 42px, 80px) rotateX(8deg) rotateY(-6deg)
				rotateZ(5deg);
		}
		100% {
			transform: perspective(720px) translate3d(0px, 50px, 80px) rotateX(12deg) rotateY(-8deg)
				rotateZ(3deg);
		}
	}
	.screenshot2 {
		transform: perspective(960px) rotateX(4deg) rotateY(14deg) rotateZ(-3deg);
		animation: bounce-1 4s infinite ease-in-out;
		margin-left: -32px;
	}
	.screenshot3 {
		transform: perspective(720px) translate3d(0px, 50px, 80px) rotateX(12deg) rotateY(-8deg)
			rotateZ(3deg);
		margin-top: 128px;
		margin-left: -250px;
		animation: bounce-2 7s infinite ease-in-out;
	}
	.screenshot {
		border-radius: 6px;
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 1);
	}
	.screenshots {
		width: 400px;
		height: 670px;
		transform-style: preserve-3d;
	}
	.screenshots > img {
		position: absolute;
	}
	.because {
		font-size: 96px;
		color: #359aae;
		text-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);
		position: relative;
		width: fit-content;
	}
	.because::after {
		width: fit-content;
		content: "oin the club";
		width: 100%;
		position: absolute;
		top: -48px;
		left: 23px;
		transform-origin: bottom center;
		transform: scaleY(-1);
		mask-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.1) 30%,
			rgba(0, 0, 0, 0) 50%
		);
		-webkit-mask-image: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0.1) 30%,
			rgba(0, 0, 0, 0) 50%
		);
	}
	.info {
		margin-left: 64px;
	}
	.why-container {
		margin-left: -12px;
		display: flex;
		flex-direction: column;
	}
	.why-container > p {
		font-size: 24px;
		font-weight: 400;
		color: #014f5e;
		text-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);
		box-sizing: border-box;
		opacity: 1;
		max-width: 450px;
	}
	@media (max-width: 1600px) {
		.screenshots {
			display: none;
		}
	}
</style>
