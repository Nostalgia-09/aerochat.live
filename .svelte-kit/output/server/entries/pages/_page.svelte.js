import { c as create_ssr_component, e as escape, b as add_attribute, v as validate_component, f as null_to_empty } from "../../chunks/ssr.js";
import { C as CommandLink } from "../../chunks/CommandLink.js";
const screenshot1 = "/_app/immutable/assets/screenshot1.UCVs9hkb.png";
const css = {
  code: '@keyframes svelte-364u6m-fade-in{from{opacity:0}to{opacity:1}}@keyframes svelte-364u6m-fade-out{from{opacity:1}to{opacity:0}}@keyframes svelte-364u6m-bounce-2{0%{transform:perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg)}50%{transform:perspective(960px) rotateX(12deg) rotateY(25deg) rotateZ(-6deg)\n				translateY(-24px)}}.pre.svelte-364u6m.svelte-364u6m.svelte-364u6m{margin-bottom:-20px;margin-left:4px;font-style:italic;font-size:24px;color:#359baf;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754)}.content.svelte-364u6m article.svelte-364u6m>h1.svelte-364u6m:first-child{margin-top:-8px}.content.svelte-364u6m article.svelte-364u6m>h1.svelte-364u6m{margin-top:16px}.content.svelte-364u6m.svelte-364u6m.svelte-364u6m{display:flex;position:absolute;top:0;left:0;width:calc(100vw - 2%);height:100vh;align-items:center;justify-content:center}.screenshot.svelte-364u6m.svelte-364u6m.svelte-364u6m{animation:svelte-364u6m-bounce-2 4s infinite ease-in-out;border-radius:6px;transform:perspective(960px) rotateX(8deg) rotateY(20deg) rotateZ(-4deg);backdrop-filter:blur(1px);filter:drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.5));margin-left:-32px}.because.svelte-364u6m.svelte-364u6m.svelte-364u6m{font-size:96px;color:#359aae;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);position:relative;width:fit-content;margin-left:-2px}.because.svelte-364u6m.svelte-364u6m.svelte-364u6m::after{width:fit-content;content:"because...";position:absolute;top:-45px;left:0;transform-origin:bottom center;transform:scaleY(-1);mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		);-webkit-mask-image:linear-gradient(\n			to top,\n			rgba(0, 0, 0, 0.5),\n			rgba(0, 0, 0, 0.1) 30%,\n			rgba(0, 0, 0, 0) 50%\n		)}.info.svelte-364u6m.svelte-364u6m.svelte-364u6m{margin-left:64px}.why-container.svelte-364u6m>h1.svelte-364u6m.svelte-364u6m{margin-top:16px;font-size:24px;font-weight:400;color:#014f5e;text-shadow:0px 0px 24px rgba(49, 183, 220, 0.754);box-sizing:border-box;opacity:1;position:absolute;margin-left:5px}.why.fade-in.svelte-364u6m.svelte-364u6m.svelte-364u6m{animation:svelte-364u6m-fade-in var(--fade-out-delay) ease-in-out forwards}.why.fade-out.svelte-364u6m.svelte-364u6m.svelte-364u6m{animation:svelte-364u6m-fade-out var(--fade-out-delay) ease-in-out forwards}.why.will-fade-in.svelte-364u6m.svelte-364u6m.svelte-364u6m{opacity:1}.why.will-fade-out.svelte-364u6m.svelte-364u6m.svelte-364u6m{opacity:0}@media(max-width: 900px){.screenshot.svelte-364u6m.svelte-364u6m.svelte-364u6m{display:none}.content.svelte-364u6m.svelte-364u6m.svelte-364u6m{margin-top:-48px;margin-left:-20px;text-align:center}}',
  map: null
};
const fadeOutDelay = 1e3;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let shouldFade = false;
  const text = [
    "AeroChat is a custom Discord client which looks like Windows Live Messenger 2009",
    "AeroChat has functional voice chat (sending and receiving voice data)",
    "AeroChat's free and open source",
    `AeroChat restores nudge functionality which you know and "love" from MSN/WLM '09`,
    "AeroChat's easy to use (most of the time)",
    "You can send files to your friends",
    "You can decide on AeroChat's future by contributing to it or by voting in polls",
    "AeroChat looks and feels just like WLM '09"
  ];
  let currentText = 0;
  let currentText2 = 0;
  let top = 80;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-sn3x8c_START -->${$$result.title = `<title>AeroChat — Windows Live Messenger themed Discord client</title>`, ""}<meta name="title" content="AeroChat — Windows Live Messenger themed Discord client"><meta name="description" content="AeroChat is a new open source custom Discord client that looks 1-to-1 like Windows Live Messenger 2009. Download it here!"><!-- HEAD_svelte-sn3x8c_END -->`, ""} <div class="content svelte-364u6m" style="${"--fade-out-delay: " + escape(fadeOutDelay / 1e3, true) + "s"}"><div style="display: flex;"><img class="screenshot svelte-364u6m"${add_attribute("src", screenshot1, 0)} alt="A screenshot of the main window of the application."> <div class="info svelte-364u6m"><h1 class="pre svelte-364u6m" data-svelte-h="svelte-aoep6w">You should use AeroChat</h1> <div class="because svelte-364u6m" data-svelte-h="svelte-6jcie3">because...</div> <div class="why-container svelte-364u6m"><h1 class="${escape(null_to_empty(`why will-fade-out ${shouldFade}`), true) + " svelte-364u6m"}">${escape(text[currentText2])}</h1> <h1 id="fade-in" class="${escape(null_to_empty(`why will-fade-in ${shouldFade}`), true) + " svelte-364u6m"}">${escape(text[currentText])}</h1></div> <article${add_attribute("style", `margin-top: ${top}px; max-width: 550px; margin-left: 5px`, 0)} class="svelte-364u6m"><h1 class="svelte-364u6m" data-svelte-h="svelte-phcej4">What is AeroChat?</h1> <p data-svelte-h="svelte-k66yv7">AeroChat (also known as &quot;wlm-09-discord&quot;) is a total conversion for Discord to
					look and feel like Windows Live Messenger or MSN Messenger.</p> <h1 class="svelte-364u6m" data-svelte-h="svelte-gq8lj7">What can it do?</h1> <p data-svelte-h="svelte-l8mx5v">It has tons of features you know and love from the official client, such as
					voice chat, file transfers and more. It even restores some old features from
					Windows Live Messenger 2009, such as nudges.</p> <h1 class="svelte-364u6m" data-svelte-h="svelte-1qxpo5j">What if I want a feature it doesn&#39;t have?</h1> <p data-svelte-h="svelte-1nyu9v6">It&#39;s open source, so you can contribute if a feature you want isn&#39;t implemented
					yet, or if you want to fix a bug. The <a href="https://discord.com/invite/nP9SxVQGnu" target="_blank">Discord server</a>
					is also a great place to hang out and talk about the project, and even vote on future
					features and changes. For example, the name &quot;AeroChat&quot; was voted on by the community
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
