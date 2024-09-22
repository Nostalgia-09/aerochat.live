<svelte:head>
	<title>Frequently Asked Questions — Aerochat</title>
	<meta name="title" content="Frequently Asked Questions — Aerochat" />
	<meta
		name="description"
		content="Here are some frequently asked questions about Aerochat. Aerochat is an open source Discord client inspired by WLM 2009."
	/>
</svelte:head>

<div class="content">
	<div class="faq">
		<h1>FAQ</h1>
		<h2>What is Aerochat?</h2>
		<p>
			Aerochat is a chat client for Discord, styled to look like Windows Live Messenger 2009.
		</p>
		<h2>Why does it exist?</h2>
		<p>
			Aerochat exists simply because of a lack of options. A lot of people have great looking
			Windows themes, but then go and use Discord which looks completely out of place.
			Aerochat aims to fix that.
		</p>
		<h2>Is my token safe?</h2>
		<p>
			Yes. Aerochat stores your token using the system's keychain, which guarantees
			encryption. Aerochat refuses to store the token if encryption is unavailable. Neither I,
			nor any other contributors, can access your token.
		</p>
		<h2>Is Aerochat open source?</h2>
		<p>
			Yes. You can view the source code on <a
				href="https://github.com/not-nullptr/Aerochat"
				target="_blank">GitHub</a
			>.
		</p>
		<h2>What functionality is missing compared to the official client?</h2>
		<p>
			Aerochat is still in early development, so there are a few features missing. However,
			the most important features are implemented, such as servers, DMs and more. If any of
			these features are important to you, feel free to contribute to the Aerochat project or
			not use Aerochat:
		</p>
		<ul>
			<li>Callingpeople</li>
			<li>Emoji picker</li>
			<li>Setting statuses (available but buggy)</li>
			<li>Any and all moderation features</li>
			<li>
				Most user customization (scenes are implemented, but only for other users of the
				client)
			</li>
		</ul>
		<h2>Is Aerochat worth using?</h2>
		<p>
			It depends on what your use case is. <b
				>Discord's Terms of Service prohibits against the usage of third-party clients</b
			> (like Aerochat), so if you value your Discord account, you should not install Aerochat.
			Aerochat is still in early development, which means there are features missing that would
			be considered standard in something like Discord.
		</p>
	</div>
</div>

<style>
	.content {
		width: 100vw;
		display: flex;
		justify-content: center;
	}
	.faq {
		max-width: 650px;
		width: 100%;
		box-sizing: border-box;
		padding: 8px 32px;
		margin-top: -12px;
	}
	h2 {
		margin-top: 24px;
	}
</style>
