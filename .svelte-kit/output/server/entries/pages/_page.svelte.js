import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, f as null_to_empty } from "../../chunks/ssr.js";
import { C as CommandLink } from "../../chunks/CommandLink.js";
const screenshot1 = "/_app/immutable/assets/screenshot1.BuHlpXsk.png";
const css = {
  code: '@keyframes svelte-364u6m-fade-in{from{opacity:0}to{opacity:1}}@keyframes svelte-364u6m-fade-out{from{opacity:1}to{opacity:0}}@keyframes svelte-364u6m-bounce-2{0%{transform:perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg)}50%{transform:perspective(960px) rotateX(12deg) rotateY(25deg) rotateZ(-6deg)\n				translateY(-24px)}}.pre.svelte-364u6m.svelte-364u6m.svelte-364u6m{margin-bottom:-20px;margin-left:4px;font-style:italic;font-size:24px;color:#359baf;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754)}.content.svelte-364u6m article.svelte-364u6m>h1.svelte-364u6m:first-child{margin-top:-8px}.content.svelte-364u6m article.svelte-364u6m>h1.svelte-364u6m{margin-top:16px}.content.svelte-364u6m.svelte-364u6m.svelte-364u6m{display:flex;position:absolute;top:0;left:0;width:calc(100vw - 2%);height:100vh;align-items:center;justify-content:center}.screenshot.svelte-364u6m.svelte-364u6m.svelte-364u6m{animation:svelte-364u6m-bounce-2 4s infinite ease-in-out;border-radius:6px;transform:perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);backdrop-filter:blur(1px);filter:drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5));margin-left:-32px}.because.svelte-364u6m.svelte-364u6m.svelte-364u6m{font-size:96px;color:#359aae;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);position:relative;width:fit-content;margin-left:-2px}.because.svelte-364u6m.svelte-364u6m.svelte-364u6m::after{width:fit-content;content:"because...";position:absolute;top:-45px;left:0;transform-origin:bottom center;transform:scaleY(-1);mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		);-webkit-mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		)}.info.svelte-364u6m.svelte-364u6m.svelte-364u6m{margin-left:64px}.why-container.svelte-364u6m>h1.svelte-364u6m.svelte-364u6m{margin-top:16px;font-size:24px;font-weight:400;color:#014f5e;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);box-sizing:border-box;opacity:1;position:absolute;margin-left:5px}.why.fade-in.svelte-364u6m.svelte-364u6m.svelte-364u6m{animation:svelte-364u6m-fade-in var(--fade-out-delay) ease-in-out forwards}.why.fade-out.svelte-364u6m.svelte-364u6m.svelte-364u6m{animation:svelte-364u6m-fade-out var(--fade-out-delay) ease-in-out forwards}.why.will-fade-in.svelte-364u6m.svelte-364u6m.svelte-364u6m{opacity:1}.why.will-fade-out.svelte-364u6m.svelte-364u6m.svelte-364u6m{opacity:0}@media(max-width: 900px){.screenshot.svelte-364u6m.svelte-364u6m.svelte-364u6m{display:none}.content.svelte-364u6m.svelte-364u6m.svelte-364u6m{margin-top:-48px;margin-left:-20px;text-align:center}}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import screenshot1 from \\"$lib/assets/screenshot1.png\\";\\nimport { onMount } from \\"svelte\\";\\nimport CommandLink from \\"../components/CommandLink.svelte\\";\\nlet shouldFade = false;\\nconst fadeIn = \\"fade-in\\";\\nconst fadeOut = \\"fade-out\\";\\nconst fadeOutDelay = 1e3;\\nconst text = [\\n  \\"Aerochat is a custom Discord client which looks like Windows Live Messenger 2009\\",\\n  \\"Aerochat\'s free and open source\\",\\n  `Aerochat restores nudge functionality which you know and \\"love\\" from MSN/WLM \'09`,\\n  \\"Aerochat\'s easy to use (most of the time)\\",\\n  \\"You can decide on Aerochat\'s future by contributing to it or by voting in polls\\",\\n  \\"Aerochat looks and feels just like WLM \'09\\"\\n];\\nlet currentText = 0;\\nlet currentText2 = 0;\\nlet top = 80;\\nfunction randomize() {\\n  currentText2 = currentText;\\n  currentText = Math.floor(Math.random() * text.length);\\n}\\nfunction refreshLayout() {\\n  const el = document.getElementById(\\"fade-in\\");\\n  if (el) {\\n    top = el.getBoundingClientRect().height + 48;\\n    console.log(top);\\n  }\\n}\\nonMount(() => {\\n  refreshLayout();\\n  setInterval(() => {\\n    shouldFade = true;\\n    randomize();\\n    refreshLayout();\\n    setTimeout(() => {\\n      shouldFade = false;\\n    }, fadeOutDelay);\\n  }, 5e3);\\n  window.addEventListener(\\"resize\\", refreshLayout);\\n});\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>Aerochat — Windows Live Messenger themed Discord client</title>\\n\\t<meta name=\\"title\\" content=\\"Aerochat — Windows Live Messenger themed Discord client\\" />\\n\\t<meta\\n\\t\\tname=\\"description\\"\\n\\t\\tcontent=\\"Aerochat is a new open source custom Discord client that looks 1-to-1 like Windows Live Messenger 2009. Download it here!\\"\\n\\t/>\\n</svelte:head>\\n\\n<div class=\\"content\\" style=\\"--fade-out-delay: {fadeOutDelay / 1000}s\\">\\n\\t<div style=\\"display: flex;\\">\\n\\t\\t<img\\n\\t\\t\\tclass=\\"screenshot\\"\\n\\t\\t\\tsrc={screenshot1}\\n\\t\\t\\talt=\\"A screenshot of the main window of the application.\\"\\n\\t\\t/>\\n\\t\\t<div class=\\"info\\">\\n\\t\\t\\t<h1 class=\\"pre\\">You should use Aerochat</h1>\\n\\t\\t\\t<div class=\\"because\\">because...</div>\\n\\t\\t\\t<div class=\\"why-container\\">\\n\\t\\t\\t\\t<h1 class={`why will-fade-out ${shouldFade && fadeOut}`}>{text[currentText2]}</h1>\\n\\t\\t\\t\\t<h1 id=\\"fade-in\\" class={`why will-fade-in ${shouldFade && fadeIn}`}>\\n\\t\\t\\t\\t\\t{text[currentText]}\\n\\t\\t\\t\\t</h1>\\n\\t\\t\\t</div>\\n\\t\\t\\t<article style={`margin-top: ${top}px; max-width: 550px; margin-left: 5px`}>\\n\\t\\t\\t\\t<h1>What is Aerochat?</h1>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tAerochat (also known as \\"wlm-09-discord\\") is a total conversion for Discord to\\n\\t\\t\\t\\t\\tlook and feel like Windows Live Messenger or MSN Messenger.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<h1>What can it do?</h1>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tIt has tons of features you know and love from the official client, such as\\n\\t\\t\\t\\t\\tservers and emojis. It even restores some old features from Windows Live\\n\\t\\t\\t\\t\\tMessenger 2009, such as nudges.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<h1>What if I want a feature it doesn\'t have?</h1>\\n\\t\\t\\t\\t<p>\\n\\t\\t\\t\\t\\tIt\'s open source, so you can contribute if a feature you want isn\'t implemented\\n\\t\\t\\t\\t\\tyet, or if you want to fix a bug. The <a\\n\\t\\t\\t\\t\\t\\thref=\\"https://discord.gg/Jcg84hmSqM\\"\\n\\t\\t\\t\\t\\t\\ttarget=\\"_blank\\">Discord server</a\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\tis also a great place to hang out and talk about the project, and even vote on future\\n\\t\\t\\t\\t\\tfeatures and changes. For example, the name \\"Aerochat\\" was voted on by the community\\n\\t\\t\\t\\t\\t(it used to be called <code>wlm-09-discord</code>, how boring is that?!). This\\n\\t\\t\\t\\t\\tdomain name (aerochat.live) was also voted on by the community.\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t<h1>Actions</h1>\\n\\t\\t\\t\\t<CommandLink\\n\\t\\t\\t\\t\\ttitle=\\"Download now\\"\\n\\t\\t\\t\\t\\tdescription=\\"Navigate to the Download page\\"\\n\\t\\t\\t\\t\\thref=\\"/download\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t\\t<CommandLink title=\\"Read more\\" description=\\"Navigate to the FAQ page\\" href=\\"/faq\\" />\\n\\t\\t\\t</article>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t@keyframes fade-in {\\n\\t\\tfrom {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t}\\n\\t@keyframes fade-out {\\n\\t\\tfrom {\\n\\t\\t\\topacity: 1;\\n\\t\\t}\\n\\t\\tto {\\n\\t\\t\\topacity: 0;\\n\\t\\t}\\n\\t}\\n\\t@keyframes bounce-2 {\\n\\t\\t0% {\\n\\t\\t\\ttransform: perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);\\n\\t\\t}\\n\\t\\t50% {\\n\\t\\t\\ttransform: perspective(960px) rotateX(12deg) rotateY(25deg) rotateZ(-6deg)\\n\\t\\t\\t\\ttranslateY(-24px);\\n\\t\\t}\\n\\t}\\n\\t.pre {\\n\\t\\tmargin-bottom: -20px;\\n\\t\\tmargin-left: 4px;\\n\\t\\tfont-style: italic;\\n\\t\\tfont-size: 24px;\\n\\t\\tcolor: #359baf;\\n\\t\\ttext-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);\\n\\t}\\n\\t.content article > h1:first-child {\\n\\t\\tmargin-top: -8px;\\n\\t}\\n\\n\\t.content article > h1 {\\n\\t\\tmargin-top: 16px;\\n\\t}\\n\\t.content {\\n\\t\\tdisplay: flex;\\n\\t\\tposition: absolute;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: calc(100vw - 2%);\\n\\t\\theight: 100vh;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: center;\\n\\t}\\n\\t.screenshot {\\n\\t\\tanimation: bounce-2 4s infinite ease-in-out;\\n\\t\\tborder-radius: 6px;\\n\\t\\ttransform: perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);\\n\\t\\tbackdrop-filter: blur(1px);\\n\\t\\tfilter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5));\\n\\t\\tmargin-left: -32px;\\n\\t}\\n\\t.because {\\n\\t\\tfont-size: 96px;\\n\\t\\tcolor: #359aae;\\n\\t\\ttext-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);\\n\\t\\tposition: relative;\\n\\t\\twidth: fit-content;\\n\\t\\tmargin-left: -2px;\\n\\t}\\n\\t.because::after {\\n\\t\\twidth: fit-content;\\n\\t\\tcontent: \\"because...\\";\\n\\t\\tposition: absolute;\\n\\t\\ttop: -45px;\\n\\t\\tleft: 0;\\n\\t\\ttransform-origin: bottom center;\\n\\t\\ttransform: scaleY(-1);\\n\\t\\tmask-image: linear-gradient(\\n\\t\\t\\tto top,\\n\\t\\t\\trgba(0, 0, 0, 0.5),\\n\\t\\t\\trgba(0, 0, 0, 0.1) 30%,\\n\\t\\t\\trgba(0, 0, 0, 0) 50%\\n\\t\\t);\\n\\t\\t-webkit-mask-image: linear-gradient(\\n\\t\\t\\tto top,\\n\\t\\t\\trgba(0, 0, 0, 0.5),\\n\\t\\t\\trgba(0, 0, 0, 0.1) 30%,\\n\\t\\t\\trgba(0, 0, 0, 0) 50%\\n\\t\\t);\\n\\t}\\n\\t.info {\\n\\t\\tmargin-left: 64px;\\n\\t}\\n\\t.why-container > h1 {\\n\\t\\tmargin-top: 16px;\\n\\t\\tfont-size: 24px;\\n\\t\\tfont-weight: 400;\\n\\t\\tcolor: #014f5e;\\n\\t\\ttext-shadow: 0px 0px 24px rgba(49, 183, 220, 0.754);\\n\\t\\tbox-sizing: border-box;\\n\\t\\topacity: 1;\\n\\t\\tposition: absolute;\\n\\t\\tmargin-left: 5px;\\n\\t}\\n\\t.why.fade-in {\\n\\t\\tanimation: fade-in var(--fade-out-delay) ease-in-out forwards;\\n\\t}\\n\\t.why.fade-out {\\n\\t\\tanimation: fade-out var(--fade-out-delay) ease-in-out forwards;\\n\\t}\\n\\t.why.will-fade-in {\\n\\t\\topacity: 1;\\n\\t}\\n\\t.why.will-fade-out {\\n\\t\\topacity: 0;\\n\\t}\\n\\n\\t@media (max-width: 900px) {\\n\\t\\t.screenshot {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t\\t.content {\\n\\t\\t\\tmargin-top: -48px;\\n\\t\\t\\tmargin-left: -20px;\\n\\t\\t\\ttext-align: center;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const fadeOutDelay = 1e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldFade = false;
  const text = [
    "Aerochat is a custom Discord client which looks like Windows Live Messenger 2009",
    "Aerochat's free and open source",
    `Aerochat restores nudge functionality which you know and "love" from MSN/WLM '09`,
    "Aerochat's easy to use (most of the time)",
    "You can decide on Aerochat's future by contributing to it or by voting in polls",
    "Aerochat looks and feels just like WLM '09"
  ];
  let currentText = 0;
  let currentText2 = 0;
  let top = 80;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-u9g17g_START -->${$$result.title = `<title>Aerochat — Windows Live Messenger themed Discord client</title>`, ""}<meta name="title" content="Aerochat — Windows Live Messenger themed Discord client"><meta name="description" content="Aerochat is a new open source custom Discord client that looks 1-to-1 like Windows Live Messenger 2009. Download it here!"><!-- HEAD_svelte-u9g17g_END -->`, ""} <div class="content svelte-364u6m" style="${"--fade-out-delay: " + escape(fadeOutDelay / 1e3, true) + "s"}"><div style="display: flex;"><img class="screenshot svelte-364u6m"${add_attribute("src", screenshot1, 0)} alt="A screenshot of the main window of the application."> <div class="info svelte-364u6m"><h1 class="pre svelte-364u6m" data-svelte-h="svelte-3tbc8">You should use Aerochat</h1> <div class="because svelte-364u6m" data-svelte-h="svelte-6jcie3">because...</div> <div class="why-container svelte-364u6m"><h1 class="${escape(null_to_empty(`why will-fade-out ${shouldFade}`), true) + " svelte-364u6m"}">${escape(text[currentText2])}</h1> <h1 id="fade-in" class="${escape(null_to_empty(`why will-fade-in ${shouldFade}`), true) + " svelte-364u6m"}">${escape(text[currentText])}</h1></div> <article${add_attribute("style", `margin-top: ${top}px; max-width: 550px; margin-left: 5px`, 0)} class="svelte-364u6m"><h1 class="svelte-364u6m" data-svelte-h="svelte-1sbwe7k">What is Aerochat?</h1> <p data-svelte-h="svelte-1jyd8gz">Aerochat (also known as &quot;wlm-09-discord&quot;) is a total conversion for Discord to
					look and feel like Windows Live Messenger or MSN Messenger.</p> <h1 class="svelte-364u6m" data-svelte-h="svelte-gq8lj7">What can it do?</h1> <p data-svelte-h="svelte-obqz91">It has tons of features you know and love from the official client, such as
					servers and emojis. It even restores some old features from Windows Live
					Messenger 2009, such as nudges.</p> <h1 class="svelte-364u6m" data-svelte-h="svelte-1qxpo5j">What if I want a feature it doesn&#39;t have?</h1> <p data-svelte-h="svelte-1v1ozsa">It&#39;s open source, so you can contribute if a feature you want isn&#39;t implemented
					yet, or if you want to fix a bug. The <a href="https://discord.gg/Jcg84hmSqM" target="_blank">Discord server</a>
					is also a great place to hang out and talk about the project, and even vote on future
					features and changes. For example, the name &quot;Aerochat&quot; was voted on by the community
					(it used to be called <code>wlm-09-discord</code>, how boring is that?!). This
					domain name (aerochat.live) was also voted on by the community.</p> <h1 class="svelte-364u6m" data-svelte-h="svelte-opy7b3">Actions</h1> ${validate_component(CommandLink, "CommandLink").$$render(
    $$result,
    {
      title: "Download now",
      description: "Navigate to the Download page",
      href: "/download"
    },
    {},
    {}
  )} ${validate_component(CommandLink, "CommandLink").$$render(
    $$result,
    {
      title: "Read more",
      description: "Navigate to the FAQ page",
      href: "/faq"
    },
    {},
    {}
  )}</article></div></div> </div>`;
});
export {
  Page as default
};