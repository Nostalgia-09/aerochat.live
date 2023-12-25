<!-- <div className={styles.commandLink} onClick={props.onClick}>
			<div className={styles.commandLinkIcon} />
			<div className={styles.commandLinkText}>
				<h1 className={styles.commandLinkTitle}>{props.title}</h1>
				<div className={styles.commandLinkDescription}>
					{props.description}
				</div>
			</div>
		</div> -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script>
	export let title = "";
	export let description = "";
</script>

<div class="commandLink" on:click>
	<div class="commandLinkIcon" />
	<div class="commandLinkText">
		<h1 class="commandLinkTitle">{title}</h1>
		<div class="commandLinkDescription">
			{description}
		</div>
	</div>
</div>

<style>
	.commandLink {
		--hover-enter-length: 0.25s;
		--hover-leave-length: 1s;
		--active-enter-length: 0s;
		--active-leave-length: 0.5s;
		margin: 2px 0px;
		width: calc(100% - 16px);
		height: fit-content;
		padding: 8px 16px 12px 0px;
		border-radius: 2px;
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0);
		color: #151c55;
		text-shadow: 0px 0px 0.5px #151c5552;
		transition: var(--hover-leave-length) linear;
		outline: solid thin rgba(255, 255, 255, 0);
		transition-property: box-shadow, color, text-shadow, outline;
		z-index: 1;
		position: relative;
	}

	.commandLink::before {
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: linear-gradient(to bottom, #fff 0%, #f6f6f6 100%);
		z-index: -1;
		transition: opacity linear;
		transition-duration: var(--hover-enter-length);
		opacity: 0;
		border-radius: 2px;
	}

	.commandLink:not(:hover)::before {
		transition-duration: var(--hover-leave-length);
	}

	.commandLink:not(:disabled):hover::before {
		opacity: 1;
	}

	.commandLink::after {
		box-shadow: inset 0px 0px 2px 2px #ccc;
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #f2f3f3;
		z-index: -1;
		transition: opacity linear;
		transition-duration: var(--active-leave-length);
		opacity: 0;
		border-radius: 2px;
	}

	.commandLink:active::after {
		transition-duration: var(--active-enter-length);
	}

	.commandLink:not(:disabled):active::after {
		opacity: 1;
	}

	.commandLink:hover {
		outline: solid thin #c6c6c6;
		transition-duration: var(--hover-enter-length);
	}

	.commandLink:active {
		outline: solid thin #7a9ecc;
	}

	.commandLink h1 {
		margin: 0;
		padding: 0;
		font-size: 12pt;
		font-weight: 400;
		color: unset;
		padding-left: 44px;
		transform: translateX(-12px);
	}

	.commandLinkIcon {
		float: left;
		position: relative;
		margin-top: 3px;
		margin-right: 16px;
		margin-left: 4px;
		width: 20px;
		height: 18px;
		background-position-y: -3px;
		background-image: url($lib/assets/arrows.png);
		transition: var(--hover-leave-length) linear filter;
		filter: brightness(1);
	}

	.commandLink:hover {
		color: #074ae5 !important;
	}

	.commandLink:hover > .commandLinkIcon {
		filter: brightness(1.2);
		transition-duration: var(--hover-enter-length);
	}

	.commandLink:active > .commandLinkIcon {
		filter: brightness(1);
		transition-duration: var(--active-enter-length);
	}

	.commandLinkDescription {
		width: 100%;
		box-sizing: border-box;
		padding-left: 34px;
		margin-top: 2px;
	}

	/* .commandLink:hover > .commandLinkIcon,
.commandLink:active > .commandLinkIcon {
	background-position-y: -23px;
} */
</style>
