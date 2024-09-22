export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/atproto-did","embed.png","favicon.ico","robots.txt","sitemap.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CYzDRzkC.js","app":"_app/immutable/entry/app.DSXPbwI0.js","imports":["_app/immutable/entry/start.CYzDRzkC.js","_app/immutable/chunks/entry.ByPG9Zzj.js","_app/immutable/chunks/scheduler.DOjC0atF.js","_app/immutable/entry/app.DSXPbwI0.js","_app/immutable/chunks/scheduler.DOjC0atF.js","_app/immutable/chunks/index.D13opEun.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
