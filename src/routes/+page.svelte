<script lang="ts">
	import screenshot1 from "$lib/assets/screenshot1.png";
	import { onMount } from "svelte";
	let shouldFade = false;
	const fadeIn = "fade-in";
	const fadeOut = "fade-out";
	const fadeOutDelay = 1000;
	const text = [
		"It has the old-school Aero design, straight from Windows 7",
		"It has functional voice chat (sending and receiving voice data)",
		"It's free and open source",
		'It restores nudge functionality which you know and "love" from MSN/WLM \'09',
		"It's easy to use (most of the time)",
		"You can send files to your friends",
		"You can decide on the project's future by contributing to it or by voting in polls",
		"It looks and feels just like WLM '09"
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
	<title>AeroChat — WLM '09 themed Discord client</title>
	<meta
		name="title"
		content="AeroChat — Discord client in the style of Windows Live Messenger 2009"
	/>
	<meta
		name="description"
		content="AeroChat is a new open source custom Discord client that looks 1-to-1 like WLM 2009. Download it here!"
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
			<div class="because">because...</div>
			<div class="why-container">
				<p class={`why will-fade-out ${shouldFade && fadeOut}`}>{text[currentText2]}</p>
				<p id="fade-in" class={`why will-fade-in ${shouldFade && fadeIn}`}>
					{text[currentText]}
				</p>
			</div>
			<div style={`margin-top: ${top}px; max-width: 550px; margin-left: 5px`}>
				<p>
					AeroChat is a free and open source Discord client for Windows. It's designed to
					look and feel just like Windows Live Messenger 2009, with custom designs for
					anything which wasn't originally in WLM '09.
				</p>
				<p>
					It has tons of features you know and love from the official client, such as
					voice chat, file transfers and more. It even restores some old features from
					Windows Live Messenger 2009, such as nudges.
				</p>
				<p>
					Furthermore, it's open source, so you can contribute if a feature you want isn't
					implemented yet, or if you want to fix a bug. The <a
						href="https://discord.com/invite/nP9SxVQGnu"
						target="_blank">Discord server</a
					>
					is also a great place to hang out and talk about the project, and even vote on future
					features and changes. For example, the name "AeroChat" was voted on by the community
					(it used to be called <code>wlm-09-discord</code>, how boring is that?!). This
					domain name (aerochat.live) was also voted on by the community.
				</p>
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
	@keyframes bounce-2 {
		0% {
			transform: perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);
		}
		50% {
			transform: perspective(960px) rotateX(12deg) rotateY(25deg) rotateZ(-6deg)
				translateY(-24px);
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
	.why-container > p {
		font-size: 24px;
		font-weight: 400;
		color: #014f5e;
		text-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);
		box-sizing: border-box;
		opacity: 1;
		position: absolute;
		margin-left: 7px;
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
