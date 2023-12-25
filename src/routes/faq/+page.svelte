<svelte:head>
	<title>Frequently Asked Questions — AeroChat</title>
	<meta name="title" content="Frequently Asked Questions — AeroChat" />
	<meta
		name="description"
		content="Here are some frequently asked questions about AeroChat. AeroChat is an open source Discord client inspired by WLM 2009."
	/>
</svelte:head>

<div class="content">
	<div class="faq">
		<h1>FAQ</h1>
		<h2>What is AeroChat?</h2>
		<p>
			AeroChat is a chat client for Discord, styled to look like Windows Live Messenger 2009.
		</p>
		<h2>Why does it exist?</h2>
		<p>
			Simply because of a lack of options. A lot of people have great looking Windows themes,
			but then go and use Discord which looks completely out of place. AeroChat aims to fix
			that.
		</p>
		<h2>Is my token safe?</h2>
		<p>
			Yes. AeroChat stores your token using the system's keychain, which guarantees
			encryption, and refuses to store the token if encryption is unavailable. Neither I, nor
			any other contributors, can access your token.
		</p>
		<h2>Is AeroChat open source?</h2>
		<p>
			Yes. You can view the source code on <a
				href="https://github.com/Nostalgia-09/AeroChat"
				target="_blank">GitHub</a
			>.
		</p>
		<h2>What functionality is missing compared to the official client?</h2>
		<p>
			AeroChat is still in early development, so there are a few features missing. However,
			the most important features are implemented, such as voice chat, file transfers, and
			more. If any of these features are important to you, feel free to contribute or not use
			AeroChat:
		</p>
		<ul>
			<li>Calling friends/group chats (voice chats in servers work fine)</li>
			<li>Emoji picker</li>
			<li>Setting statuses (available but buggy)</li>
			<li>Any and all moderation features</li>
			<li>
				User customization (changing the following is unimplemented: profile picture,
				username, global name)
			</li>
		</ul>
		<h2>Is this worth using?</h2>
		<p>
			It depends on what your use case is. I don't recommend using AeroChat as your main
			client, as it's still in early development and is missing a lot of features. However, if
			you want to use it for the aesthetic, or just want to try it out (especially if you
			don't use the above features), then go ahead!
		</p>
		<h2>I received an error, what do I do?!</h2>
		<p>
			If you received an error, please join our <a
				href="https://discord.gg/nP9SxVQGnu"
				target="_blank">Discord server</a
			>
			and report it in the <code>#aerochat-help</code> channel. Include all info which the error
			screen shows you.
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
