if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>i(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/IelRtdmluCGEzV1GWBsjo/_buildManifest.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/IelRtdmluCGEzV1GWBsjo/_middlewareManifest.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/IelRtdmluCGEzV1GWBsjo/_ssgManifest.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/382-9a022f7ee1e2094c.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/main-911cae6bf66273c0.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/pages/_app-ef41a120d03219a0.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/pages/index-c000c8aba89dd0b0.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/pages/works/blisset-0f58295807ce098e.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/pages/works/comlink-7431e964b7ed7827.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/pages/works/mount-eden-050ec13cb548f8f0.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/_next/static/chunks/webpack-9cac972b79d0fd5d.js",revision:"IelRtdmluCGEzV1GWBsjo"},{url:"/img/bg_hero.png",revision:"cc9e85bcb31f2681cf01ece19f4a366b"},{url:"/img/blisset.jpg",revision:"5208580015e5ce035bc17e649031460e"},{url:"/img/hero-device.png",revision:"ffb5256d49bc14a85a8ce66423074c36"},{url:"/img/logo.svg",revision:"659f7b4a86c6d337f62e2c6a6459618b"},{url:"/img/matt.jpg",revision:"9015cd938a8c9a68473bd7bd9e45cc76"},{url:"/img/memoji.png",revision:"a0d09f725c0d055e41db6f396314da6e"},{url:"/img/works/blisset/blisset-1.jpg",revision:"4e4cbd4dfdf2754d9036399c90366994"},{url:"/img/works/blisset/blisset-2.jpg",revision:"73c5ee22d2e05329d75026b4e86557fd"},{url:"/img/works/blisset/blisset-3.jpg",revision:"1429897737870461105f6de02b553bca"},{url:"/img/works/blisset/blisset-4.jpg",revision:"726e5c7f57ef237adfac7b010779f3e5"},{url:"/img/works/blisset/thumb.jpg",revision:"2be3a05ab37f44cb8ea4b31d43ee1248"},{url:"/img/works/comlink/comlink-1.jpg",revision:"7b150bd0a8dd047276043ff1984d82fc"},{url:"/img/works/comlink/comlink-2.jpg",revision:"71974d7b0b4f98f1c9ac6c36dda7b442"},{url:"/img/works/comlink/comlink-3.jpg",revision:"391f22f5c3d57881da0d3ba49f829d92"},{url:"/img/works/comlink/comlink-4.jpg",revision:"20d568822411c46b92b9bd1e19178eea"},{url:"/img/works/comlink/comlink-5.jpg",revision:"45d597a217d198472a6707102d25bf23"},{url:"/img/works/comlink/thumb.jpg",revision:"aca56d37976068292bbbbd2c954ecf38"},{url:"/img/works/mount-eden/mt-eden1.jpg",revision:"b4c1cd8f4146b0377eef0222e17800cd"},{url:"/img/works/mount-eden/mt-eden2.jpg",revision:"6e92635946d1a49007e511a1ec00dee7"},{url:"/img/works/mount-eden/mt-eden3.jpg",revision:"e2a3ab46adf9844a68ca8276efdedeb4"},{url:"/img/works/mount-eden/mt-eden4.jpg",revision:"e57530c3dcd0a77ae76f1d6427f61ba4"},{url:"/img/works/mount-eden/thumb.jpg",revision:"db652dd5bae34a9e14daadfed1188b4b"},{url:"/manifest.json",revision:"a43a09e6e534240bd4b8be19d3e74975"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
