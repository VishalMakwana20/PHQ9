'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "23bddd36658ed4334f3e3d11326054b9",
"index.html": "77d1e11b07f32b2214429633ef697333",
"/": "77d1e11b07f32b2214429633ef697333",
"main.dart.js": "b458e13ff1155b6818bf7c70ea0aa938",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "59b2b246e5ea826bdcdd929472abd558",
"assets/AssetManifest.json": "15def235f19d595ab8a76ed992ce3de6",
"assets/NOTICES": "13f96e2286b4dd2e33bf242312735a96",
"assets/FontManifest.json": "928eefaa4a8a5e1b66026f97cde82e10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4834b01eaa830c4e885331dc2e576503",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/nutrition_small.png": "1a8b892c921073d4300fd9165bad521c",
"assets/assets/images/health_check.png": "721640dc7c0c45b952a77dfb637e272a",
"assets/assets/images/dashboard.png": "1c4d1c8f9d1eede7744ac129f76fa149",
"assets/assets/images/ic_delete.svg": "355f37cccfefc4a94bc34a6db7d13c02",
"assets/assets/images/sleep.png": "6efa498c7e8d41bb788abe218a849610",
"assets/assets/images/ic_shuffle.svg": "4c784af4b1a1374158162d3af5ff58b9",
"assets/assets/images/meditation.png": "8ce5fda50c30c2af65e431782aed8bef",
"assets/assets/images/recipes.png": "180bef2912efb08e68aa8cea1f5e00a3",
"assets/assets/images/male.png": "6fb7b8900bca02a501ffeebd8b967fc3",
"assets/assets/images/tick.svg": "f935d84c3d75d2665cc7b1b524f33994",
"assets/assets/images/plus.svg": "b22a69dd041e9d65e485fdbd1cf4dd23",
"assets/assets/images/eating_goals.svg": "7a37140904d9f35b13d3baf2872d4842",
"assets/assets/images/close.svg": "8c07afe345c499d7ac7f3a4895bd5413",
"assets/assets/images/female.png": "75fb32aa07ee3a07bef1cd746e471d5d",
"assets/assets/images/close_icon.svg": "abb65a7083730c017e8a354351878c42",
"assets/assets/images/coin.svg": "b09b0647ff0db3897851a4480bf3da0a",
"assets/assets/images/sleep_small.png": "215f468419fa5eaecaf8edce628ab5c4",
"assets/assets/images/nutrition_goals.svg": "9e62b98e2df265a5dd95c9eb59f23ab6",
"assets/assets/images/edit.svg": "3ad17934c61105b8a8c174b256d56869",
"assets/assets/images/user_pic.png": "2b72f601861471bbda9165165bfb5388",
"assets/assets/images/back_button.svg": "99370d358ea7be93bf8f7952398ad651",
"assets/assets/images/delete.svg": "0b9e88381dcf154604f4f44718aa5c2f",
"assets/assets/images/dropdown.svg": "a89894a29d11b38edefa29d734d93237",
"assets/assets/images/nutrition.png": "b1267602403d94989db5d7e6feef12d1",
"assets/assets/images/physical_health_small.png": "53be57894cf2a86d870d19796d0c09e4",
"assets/assets/images/physical_health.png": "704dcb355cb78309166ab477c6df661c",
"assets/assets/images/self_care_goals.svg": "58b085d543e91df1c2404c3d01d3a9b0",
"assets/assets/images/meditation_small.png": "f0bb2010583f7eaeb049c0c251dd62d2",
"assets/assets/images/art_board.svg": "43c468ee2d4049687430ef5edf861267",
"assets/assets/fonts/Proxima%2520Nova%2520Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/ProximaNova-Medium.ttf": "2fc129b2c9fa5a773145162c3ff99ad2",
"assets/assets/fonts/Proxima%2520Nova%2520Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/ProximaNova-Semibold.ttf": "abe562b0a733326d39fd4179f261df91",
"assets/assets/fonts/Proxima%2520Nova%2520Black.otf": "f401366193520cdf512c7ade98260e27",
"assets/assets/fonts/Proxima%2520Nova%2520Extrabold.otf": "b4f9eb8ce027016ab9b9860817451d07",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
