export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "https://github.com/JakePaulKelly/portfolio-website.git/_app",
	assets: new Set([".nojekyll","Big-Cloud.png","cloud.png","example.pdf","favicon.png","grass.png","grass2.png","grass3.png","grass4.png","grass5.png","house.png","house.svg","pavel.png","placeholder.jpg","portfolio.png","seagul.gif","sketch logo-w-g-2.png","sketch logo-w-g.png","sketch logo-w-modal.png","sketch logo-w.png","speech.png","thumbs up.png","Villager_accept1.ogg","Villager_accept2.ogg","Villager_accept3.ogg","Villager_idle3.ogg"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".svg":"image/svg+xml",".jpg":"image/jpeg",".gif":"image/gif",".ogg":"audio/ogg"},
	_: {
		client: {start:"_app/immutable/entry/start.CvICmM0l.js",app:"_app/immutable/entry/app.D0DMPk8r.js",imports:["_app/immutable/entry/start.CvICmM0l.js","_app/immutable/chunks/B33j7f3a.js","_app/immutable/chunks/BZ7QCYPa.js","_app/immutable/chunks/BFs4XBpc.js","_app/immutable/chunks/NGfUTNpW.js","_app/immutable/entry/app.D0DMPk8r.js","_app/immutable/chunks/BZ7QCYPa.js","_app/immutable/chunks/bmR7N-DJ.js","_app/immutable/chunks/CWF5TRWV.js","_app/immutable/chunks/DVBPvFQY.js","_app/immutable/chunks/OxzKQIxu.js","_app/immutable/chunks/NGfUTNpW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
