'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "360fbb75e330616e0f31a75ebdd5f47e",
"index.html": "9b3b3068b2a8087f0696f601d0311581",
"/": "9b3b3068b2a8087f0696f601d0311581",
"main.dart.js": "9efd1bbefd98d024e875bae33a5ee33a",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d8cef8a31a68e8a56c5fe47bccde6074",
".git/config": "0da4d3627c021d1fcb95afede7cc0285",
".git/objects/3e/8bc9e37d245cb5c0c11e9c1856814df071a641": "337f95aef9013c165e3ac69f783b77bd",
".git/objects/50/32a2795b88b5693887e597bffb258b80e78658": "b91c35c9ec535ce0ccb73a349a005cb6",
".git/objects/3b/036707736eacfb4e54cbce51f252021b25fa68": "891f066452fb0d57fbd03a813b54f244",
".git/objects/6f/168e72ffde19abb5cb1d67e2b8dc6ce4513765": "7f24aa6a281db5a426be277e2f05b6d4",
".git/objects/6f/55153ab61d3836320870b23af76e04991704a2": "fd1e9db49445f81354c03458c64675f8",
".git/objects/9b/5a990b3d8fcfc19266f930c92664f0904bc4cb": "e26b9680b82e5073ccb324691327176e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/0b91afa60387024752f0842b5426fc1beef0c9": "3d9ca32629f03375aa61eeca42af891c",
".git/objects/69/2aebb48a859c9da7902592d4d97ccdcffb3c75": "adb3405713d3db7c816c13fe6f3bb114",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/abd07286879a8de965e79762375dfcd2472efc": "144dec41312408d86f0a207ab5fbcdc7",
".git/objects/67/de39836155dd3aa493ff4ca7be7097c7c03a58": "cfbf7ecac7483133c9bab5a428732e8f",
".git/objects/93/40385358b8dd0c9a5fac0c2a6693d2572abe61": "aecfd081d29557590600cbe72e68da1d",
".git/objects/05/fb836589c8aff8448e9a498fd07818d363e2d6": "eb85924c7555f29d6c97e96bd102f89d",
".git/objects/b2/da213f1287dc55d0e838f96ea01b12f6e2755e": "2e1ecc1d6e94144151e5e234a58fc647",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/0f2ec0f76dfadc20ec0665dac15a3fb328b66b": "70bb1afeb877e6f28d03c1eb4ef86dbf",
".git/objects/bd/cef0427fd73d7c49a640de544c9680136261d2": "b7f576a722b23cc89e4599cde6b40f0c",
".git/objects/d1/b0064e5e86809c55b9a65d758df1f7b26f4b20": "cf2dfc72965dd4741335e9ca85a13410",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/cefe0b67c021ef7b8e810a61e8b23a15f230e4": "f1a9c84c80812bafb0e10867a71f9fed",
".git/objects/e2/51e45dad03104aa62f441eccfc075de37b2622": "cc7399a4f278b584397130acec734202",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/5f4790d9a5c6282da8a94565894c57eb2a0989": "c84299cd4594404a80064237c0390782",
".git/objects/fd/f118b6192c43197e138391c0226b0b7c56068d": "90a9a8099f211486fa6f21e37c282143",
".git/objects/ca/82f282b5150b8e6ac7c9158c45fae97a167107": "7bead3357dfdacf0b127b1123e1733ed",
".git/objects/e4/f58f1bbd1253c44ca24301f727fac4076dbf6e": "758050491d487d0261adc16032bb4520",
".git/objects/c1/a9bf09a98bf54d7c9afa4993545a9bfcd25edd": "00419ffe392a4a7283a509130e5f573d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/29/76be1557dd77495595e99dc1e64f9ed80bed5d": "9be24a72ef968bdbc886285596ce40a2",
".git/objects/1f/fa4ebccbf2bd348f3ca0459565d23234fb2789": "833ff71f44beb0eee169f5ffb111e2d8",
".git/objects/74/525703e1a852838dcdb18b92c65e4d6adba3ac": "1176bc7cd4a1b7f1e900af68e1fd3b17",
".git/objects/1a/3be26d987a6a89784fc4865cab55b591444153": "032510e236deb994842b07ba2256058f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/852e957846fe63ce2087f4f00613687fd8d496": "3d44e84e130fe808e696b600ef2b2e44",
".git/objects/2a/e3d490e5542981510025c0d7014aa61f8f4f88": "77e68b58376efb1354e7df0035cb857e",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/ae120d515244980174039bdc34452fccf1ab35": "79521c7e33fc22e17c8fa79728e018d8",
".git/objects/9a/39202af381d58e38b1bb7ebb46642c35300ce1": "adaea8fc286434219427059aeb42adf7",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/53/14cfc38d2a0537bdca22e75028675ea4181703": "c89b32da675788d02f4a81822095ca31",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/313fe0cb8a492784ba6842c56a1c3ec2134807": "2c19a341f56b593a766d958a4e41502e",
".git/objects/5e/c84cb33317c3ef3d1179d1136601da4535f800": "b7f49c234ea2bcd6bd2d3c2afc2cf8db",
".git/objects/01/20772ac0405e4bad9d11b9a6ca81c6c1aef627": "81f2853dbb2d3ef31be9df3ed7679437",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/63/ebfda48cbf79b3ead2db48800f11ecb703cd47": "ce26034379ff3f57ad5e8fec4baebb44",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/d2/9c9a73eecfcc0a3b5058f38d3ddac41d35af34": "39c755e16c1be5be51967a5d116d6810",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/7f52089c0b45e6d1fa683eb8a659f3d53c9a9e": "002dcd31886b8328c3c184d64f445252",
".git/objects/a8/090c1fd8eae676bbbc25966d7d08117865bfe9": "5f0a83382e3d52ba510aac453913d20d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/c4948c1c5096fb94b85c896e4475e117091bc1": "870b8f904dbabce24910cebf8e0ab099",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/05ba37c8b85ab153e5271d18053d7225e3b25d": "71dbfd7f039ac2e7b8a838753b8a970b",
".git/objects/f7/c78964c199d7c326366f018c2bc992a1ff4f1e": "fda42071b814fd84697acdc85f42099e",
".git/objects/f7/bca3ec71b8263d89b091c40ca4ebf6f9464fd3": "a15bd3a4fb91b8eb10cbcfb4394bc52f",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f1/a3cc0899bf3570a576c380daad79052dd80350": "fa654ec09f355c23e3d36d40125fed26",
".git/objects/79/203e29425316f8e5751755aab9e34be9c873dc": "8c61ead80ffe27122d3ca772cb70b350",
".git/objects/2d/eaff551e5fa8ca805df04d194feede5c28d9b8": "7896ba243fe5aa12a885f96295aff8ba",
".git/objects/2d/bc672d239251d50d5acd499c08b3cd6c0746fe": "9cfd452b26275520e5fba185fa4f44b9",
".git/objects/83/2e6d6f40d4d44c4a88470eed361e8f06f64ad6": "ae14c9efd4e1a931ad7ccc862720ced1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/2376449d6dba8143a4215085f389de4f4ca13c": "4b6f28c500518982e0160006eb21fa98",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/8e83c3c92f26f01c56e4ed8e93090983d365ef": "6df84739e4dd64bc34adea45147c82c3",
".git/objects/71/22f2b26150aeb1c1a6562577c5e14bf3b43042": "5b15cf0f739fb3db131b228510395694",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/47/40401d7db32f74008870cbbe05e13bd3411a80": "dd0cd7ab8ebb98340bf2dc5e711bf8bc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "73d8e3e4a4bae4f90961f803a8325fc9",
".git/logs/refs/heads/main": "47931095cb6779971b1a9dbd676819c8",
".git/logs/refs/remotes/origin/HEAD": "9bcdcc6de702822247a467ef67488a3c",
".git/logs/refs/remotes/origin/main": "5ea15a3b0fcb327d178e52e34d6d6941",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "02f4e7daa319663a015f36e3abb56c61",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "02f4e7daa319663a015f36e3abb56c61",
".git/index": "212aa7941969873e43fb9d274243a259",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/FETCH_HEAD": "221a209451060695d3290856dbec4696",
"assets/AssetManifest.json": "5b8fe5f140444b721d31891717ce5cee",
"assets/NOTICES": "7861d1c8d89b2e92d922d4b525d2afe6",
"assets/FontManifest.json": "1691653e2bdcf3490cbd7503728d75c4",
"assets/AssetManifest.bin.json": "50c729c86ffea7ba98f19002c7c845bb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "30dea865f0cda1d8c53c42be548a64a7",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/care.png": "b4becab79371b15e8b4f3ef97917861a",
"assets/assets/images/time.png": "0d61e1701510774d3f54926058076e44",
"assets/assets/images/hero.png": "acdcd564453107ac79003b1b09cf7a41",
"assets/assets/images/mail.png": "79778e7111b7107971c78f52760e5730",
"assets/assets/images/instagram.png": "3fa4c4f929ccd32221caabab57b67ed6",
"assets/assets/images/persons.png": "37f92ae6af44cb5ed0c30e84236bf424",
"assets/assets/images/background.png": "f91e54c8477240525d302c932500af72",
"assets/assets/images/price.png": "8c8965a125558c13665472464430c047",
"assets/assets/images/menu.png": "74ce0257254105ae06a7e05e4dce9e8a",
"assets/assets/images/twitter.png": "6232c0b354a29e66a6bc6e97cd223041",
"assets/assets/images/abwab.png": "f8f497ad6b323941e6b58a7cda86a08b",
"assets/assets/images/abwab-icon.png": "29e24c683580ed2e5655e67c15d365db",
"assets/assets/images/phone.png": "0ef79a85ea84f9c3d2ea22df39e0ffbd",
"assets/assets/images/checkmark_circle.png": "7a3c40c6e73c9eca669869a5b713a48d",
"assets/assets/images/facebook.png": "d4c01e34ac25d5ecc03bea6823266f1d",
"assets/assets/images/close.png": "596f148171148025b5e655cf82ab561e",
"assets/assets/fonts/Almarai/Almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/Almarai/Almarai-ExtraBold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/assets/fonts/Almarai/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
