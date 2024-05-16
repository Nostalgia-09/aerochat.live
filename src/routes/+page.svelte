<script lang="ts">
	import screenshot1 from "$lib/assets/screenshot1.png";
	import { onMount } from "svelte";
	import CommandLink from "../components/CommandLink.svelte";
	let shouldFade = false;
	const fadeIn = "fade-in";
	const fadeOut = "fade-out";
	const fadeOutDelay = 1000;
	const text = [
		"AeroChat is a custom Discord client which looks like Windows Live Messenger 2009",
		"AeroChat has functional voice chat (sending and receiving voice data)",
		"AeroChat's free and open source",
		'AeroChat restores nudge functionality which you know and "love" from MSN/WLM \'09',
		"AeroChat's easy to use (most of the time)",
		"You can send files to your friends",
		"You can decide on AeroChat's future by contributing to it or by voting in polls",
		"AeroChat looks and feels just like WLM '09"
	];
	let currentText = 0;
	let currentText2 = 0;
	let top = 80;
	// interval
	function randomize() {
		currentText2 = currentText;
		currentText = Math.floor(Math.random() * text.length);
	}
	function refreshLayout() {
		const el = document.getElementById("fade-in");
		if (el) {
			top = el.getBoundingClientRect().height + 48;
			console.log(top);
		}
	}
	onMount(() => {
		refreshLayout();
		setInterval(() => {
			shouldFade = true;
			randomize();
			refreshLayout();
			setTimeout(() => {
				shouldFade = false;
			}, fadeOutDelay);
		}, 5000);
		window.addEventListener("resize", refreshLayout);
	});
</script>

<svelte:head>
	<title>AeroChat — Windows Live Messenger themed Discord client</title>
	<meta name="title" content="AeroChat — Windows Live Messenger themed Discord client" />
	<meta
		name="description"
		content="AeroChat is a new open source custom Discord client that looks 1-to-1 like Windows Live Messenger 2009. Download it here!"
	/>
</svelte:head>

<div class="content" style="--fade-out-delay: {fadeOutDelay / 1000}s">
	<div style="display: flex;">
		<img
			class="screenshot"
			src={screenshot1}
			alt="A screenshot of the main window of the application."
		/>
		<div class="info">
			<h1 class="pre">You should use AeroChat</h1>
			<div class="because">because...</div>
			<div class="why-container">
				<h1 class={`why will-fade-out ${shouldFade && fadeOut}`}>{text[currentText2]}</h1>
				<h1 id="fade-in" class={`why will-fade-in ${shouldFade && fadeIn}`}>
					{text[currentText]}
				</h1>
			</div>
			<article style={`margin-top: ${top}px; max-width: 550px; margin-left: 5px`}>
				<h1>What is AeroChat?</h1>
				<p>
					AeroChat (also known as "wlm-09-discord") is a total conversion for Discord to
					look and feel like Windows Live Messenger or MSN Messenger.
				</p>
				<h1>What can it do?</h1>
				<p>
					It has tons of features you know and love from the official client, such as
					voice chat, file transfers and more. It even restores some old features from
					Windows Live Messenger 2009, such as nudges.
				</p>
				<h1>What if I want a feature it doesn't have?</h1>
				<p>
					It's open source, so you can contribute if a feature you want isn't implemented
					yet, or if you want to fix a bug. The <a
						href="https://discord.gg/Jcg84hmSqM"
						target="_blank">Discord server</a
					>
					is also a great place to hang out and talk about the project, and even vote on future
					features and changes. For example, the name "AeroChat" was voted on by the community
					(it used to be called <code>wlm-09-discord</code>, how boring is that?!). This
					domain name (aerochat.live) was also voted on by the community.
				</p>
				<h1>Actions</h1>
				<CommandLink
					title="Download now"
					description="Navigate to the Download page"
					href="/download"
				/>
				<CommandLink title="Read more" description="Navigate to the FAQ page" href="/faq" />
			</article>
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
	@keyframes bounce-2 {
		0% {
			transform: perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);
		}
		50% {
			transform: perspective(960px) rotateX(12deg) rotateY(25deg) rotateZ(-6deg)
				translateY(-24px);
		}
	}
	.pre {
		margin-bottom: -20px;
		margin-left: 4px;
		font-style: italic;
		font-size: 24px;
		color: #359baf;
		text-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);
	}
	.content article > h1:first-child {
		margin-top: -8px;
	}

	.content article > h1 {
		margin-top: 16px;
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
	.screenshot {
		animation: bounce-2 4s infinite ease-in-out;
		border-radius: 6px;
		transform: perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);
		backdrop-filter: blur(1px);
		filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5));
		margin-left: -32px;
	}
	.because {
		font-size: 96px;
		color: #359aae;
		text-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);
		position: relative;
		width: fit-content;
		margin-left: -2px;
	}
	.because::after {
		width: fit-content;
		content: "because...";
		position: absolute;
		top: -45px;
		left: 0;
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
	.why-container > h1 {
		margin-top: 16px;
		font-size: 24px;
		font-weight: 400;
		color: #014f5e;
		text-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);
		box-sizing: border-box;
		opacity: 1;
		position: absolute;
		margin-left: 5px;
	}
	.why.fade-in {
		animation: fade-in var(--fade-out-delay) ease-in-out forwards;
	}
	.why.fade-out {
		animation: fade-out var(--fade-out-delay) ease-in-out forwards;
	}
	.why.will-fade-in {
		opacity: 1;
	}
	.why.will-fade-out {
		opacity: 0;
	}

	@media (max-width: 900px) {
		.screenshot {
			display: none;
		}
		.content {
			margin-top: -48px;
			margin-left: -20px;
			text-align: center;
		}
	}
</style>
