'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js_24.part.js": "a8fe2f80a320f573d5ea67ee36075ef6",
"version.json": "4fa301afbb24efa9fbe54b0fc3db44f7",
"main.dart.js_7.part.js": "d93ca9b86aa5972f7b4138840cc4963d",
"main.dart.js_12.part.js": "abc67700edb4c5ed41a043c572710943",
"main.dart.js_6.part.js": "b2f281a7b194563784280f44a113ef0f",
"index.html": "e1b66eda73a6ea14d77c8a896348974d",
"/": "e1b66eda73a6ea14d77c8a896348974d",
"main.dart.js_13.part.js": "868c5946a86807279854d2f461097ea3",
"main.dart.js_11.part.js": "d849bba7371df5198c7e344c83328a0f",
"main.dart.js_4.part.js": "a9bc5e51e9aabcdc871990ad924b2fa4",
"main.dart.js": "e8441d66b00953d94a4d79c8967d0fa1",
"main.dart.js_18.part.js": "72e1005e71047a51206e6ff08edfb76e",
"main.dart.js_19.part.js": "b1f29945491167d2612df84660687a3d",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js_10.part.js": "e1b33c2e159580cef138a9bff27f20d4",
"main.dart.js_5.part.js": "a3e3514b71e6430216018aba705613d6",
"main.dart.js_15.part.js": "bd7dad9178d96a479894ff1543e6b146",
"favicon.png": "39d6f49c6529691566a763be0592b785",
"main.dart.js_23.part.js": "1496c7dccf25212df3a0d142a87d4a96",
"main.dart.js_9.part.js": "93f24d5cdf6758a1da0afa32fac75627",
"main.dart.js_22.part.js": "69752e108c54826ff0cdb7f287c4db8b",
"main.dart.js_8.part.js": "eb4389ebdb9c46560807d9513729295a",
"icons/Icon-192.png": "b97444b193a3c69075e0514c8dbdbccf",
"icons/Icon-maskable-192.png": "186c4a253fbe20cfb533c3c8d23eb358",
"icons/Icon-maskable-512.png": "0eabc91960991a926a963439f887f9f2",
"icons/Icon-512.png": "c8464016953610327c5db193771ba49d",
"manifest.json": "e084c8491dcbe56d255e90a3664591d0",
"main.dart.js_14.part.js": "ec313580b9430fb495abaf3a82ec9b71",
"main.dart.js_1.part.js": "73a0742e6626d8b05ee516f1756c7fee",
"main.dart.js_20.part.js": "2f366decdd8ac46532b8634bbafe6997",
"main.dart.js_3.part.js": "126759ffd27859938e0567827daf42dc",
"main.dart.js_16.part.js": "4714c9f8476207c7618debba20cf5802",
"assets/AssetManifest.json": "88791090858420f31583b0fd9ef4ca6d",
"assets/NOTICES": "f44729c5a1f8878b8d3f99221f919435",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/separator-down.png": "dc71d4c0b43da657cb359fb74b8df148",
"assets/assets/bg-cloud-2-flip.png": "686161649cd4a879eaf27e4ef5774992",
"assets/assets/bg-leaf.webp": "5f1375628ad3a04ed18872be1c518b85",
"assets/assets/end-floral-right.png": "7491e81affeef470002f40d5d3b55579",
"assets/assets/bg-cloud.webp": "ed38c0a0d10eed554ca1dab254630d6e",
"assets/assets/prewed_min/IMG_0511-min.jpg": "f4a6560ada999fd6dfc267d26c63bb02",
"assets/assets/prewed_min/00.jpg": "3c88e8aba14952dbfb30375d359a4a1a",
"assets/assets/prewed_min/14.jpg": "b4a6d4b4deea5567932d1dce69f0b58a",
"assets/assets/prewed_min/15.jpg": "7f2ee12f637705e2deabf9fde60c5c85",
"assets/assets/prewed_min/01.jpg": "a7d856249de8b2e5be867da953faaf6a",
"assets/assets/prewed_min/17.jpg": "7149f40a3dba45a36e1a23881b6a7f5f",
"assets/assets/prewed_min/03.jpg": "b79d3027080c75f1f05ea187c435945a",
"assets/assets/prewed_min/16.jpg": "605d01a6cf4db8a41430ae6ceee415a4",
"assets/assets/prewed_min/12.jpg": "68b44a8dd53d60a1e975f3ac078e1ece",
"assets/assets/prewed_min/06.jpg": "cb68c0a14aa6828b07204c82e0f3ebdd",
"assets/assets/prewed_min/13.jpg": "faff6237d69a5fd74c456c3287a0e7f2",
"assets/assets/prewed_min/05.jpg": "a358d57a686e16c5dbecd7dcb6ff8390",
"assets/assets/prewed_min/11.jpg": "736a5744fd47c9bb585d2ed7fb2bbdd7",
"assets/assets/prewed_min/07'.jpg": "0385e63ea28fb68af0b36fdb23cc9294",
"assets/assets/prewed_min/10.jpg": "6500a54d750918d821cf6dc38ffc9a96",
"assets/assets/prewed_min/04.jpg": "50740cdcc7784428577e57aa980580a7",
"assets/assets/prewed_min/09.jpg": "c22449921f0f9df680fc70480ab135bc",
"assets/assets/prewed_min/08.jpg": "12c26e5b0311c726f909a4ff79c77d9f",
"assets/assets/prewed_min/23.jpg": "d981efe406b0b8ccbf2964ebad528876",
"assets/assets/prewed_min/27.jpg": "72a5aa4d7d066a99fdfffff6ad1f71d7",
"assets/assets/prewed_min/26.jpg": "775605d7f5a2449e8f88b44d1ca23ef6",
"assets/assets/prewed_min/18.jpg": "4da15ded5a24d86cfa0e7e227aea493d",
"assets/assets/prewed_min/24.jpg": "937c1db25b8cbf0248a9e492a1003491",
"assets/assets/prewed_min/25.jpg": "5724668e8a0be0c6c19216e02191fc8d",
"assets/assets/edelweis.png": "370bc64981229552da857d45803fd4b0",
"assets/assets/floral3.png": "4f827876233bedc8d0705a4a16b635cc",
"assets/assets/music.mp3": "8fda0220dd3fe53a162f5136875cadac",
"assets/assets/floral2.png": "2aa3efa3b7155c5573648377fc99ab5c",
"assets/assets/profile/alif.jpg": "396eb4ff998a3c10512f7564ab68bb00",
"assets/assets/profile/vidya.jpg": "a7ec1d7f7cf168c09f85ddda9c5c1c00",
"assets/assets/floral1.png": "4f23ad5a92650344d2f8a8114342edd3",
"assets/assets/assalamualaikum.png": "e017669dc9d873b72351d88dfa47fb3e",
"assets/assets/bg-cloud-2.png": "ed75e5497a293631a8d8f453470ce288",
"assets/assets/separator-up.png": "124e48622a6644eed596a1fb866294ee",
"assets/assets/bg-cloud-3.png": "9fac9b4e39a23a8a80c6b7bb829cbd0a",
"assets/assets/bg-cloud-1.png": "28a4b46bcb940e7125221c36601d1485",
"assets/assets/bg-cloud-4.png": "b1e6a3c07b8622d0a575ccff8dacf30b",
"assets/assets/end-floral-left.png": "7194894a606eeb010dda423e9e6229b4",
"assets/assets/protokol/tangan.svg": "04ae683eca5697036c0b525259e0132c",
"assets/assets/protokol/masker.svg": "02a207a2443b6600884915a7f65c6ffe",
"assets/assets/protokol/suhu.png": "e8801e23d519e2dd4f6ec9555edf5bfa",
"assets/assets/protokol/suhu.svg": "3d2b9017fb85ad849f242acd4fa7e8ea",
"assets/assets/protokol/masker.png": "0b988739bf59dd6c600af071078a6bfb",
"assets/assets/protokol/tangan.png": "77dd5eaed4ebf5515bbe7378f0c3ef57",
"assets/assets/protokol/jarak.svg": "70be276a3944595f4b3660bdc1c54f13",
"assets/assets/protokol/jarak.png": "734fa388d94dd085901abf6705b53ec9",
"assets/assets/ic-location.png": "b1998fc59de5f955e852c8c408a8ade0",
"assets/google_fonts/Vollkorn-OFL.txt": "ca38b112a7543b0a8652b894e1ec695b",
"assets/google_fonts/Vollkorn-Bold.ttf": "7ede211f1658597225e9dd57c5a97039",
"assets/google_fonts/Cookie-OFL.txt": "357109319ebe72329ef6c1c8f03fa199",
"assets/google_fonts/Cookie-Regular.ttf": "a7d2f8c19f31471e38c936a06615f64c",
"assets/google_fonts/Vollkorn-BoldItalic.ttf": "e8c883ab885c1a97dad9874d9c6c375c",
"assets/google_fonts/Comfortaa-Regular.ttf": "31aefe19554b85e0e5c1232daebc158e",
"assets/google_fonts/Comfortaa-OFL.txt": "11bffad5e11322af2e8b54132a46330f",
"main.dart.js_2.part.js": "831825fe27a73518ce05196e1472c9e2",
"main.dart.js_17.part.js": "4ff95a5fc7c7663645b9b0002a9fcf69",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
