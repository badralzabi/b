'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d4a62664e2a5ca77da19deb236ad63ba",
".git/config": "ef7eae30bb91e5c0152750be9f75bfa2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f4cc77c19fc4b897e414f11a8bed9417",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8ab4164481d422948ed3b85e4df24f7",
".git/logs/refs/heads/main": "37199cf13a18c638b9a2223179854cef",
".git/logs/refs/remotes/origin/main": "bbe581e99119d2c8eee26fa2bd6fe525",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/06a7c6e85630666c19411bdf4d8ea6d61b796a": "bfe020ba7164dc91e3ef4ad2b8f0f572",
".git/objects/09/399c63c41b294ce3d3053aa83a39b0f5fb7dd1": "0488e606545aa821fe0a9e8e9db10400",
".git/objects/09/3c21a59af3293a0f8add48be2e6ba8bf56b02b": "bec738ccbb995c0fea9822b6c3907464",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/19/7db09e4e5ba2834a3b272fbbd0aaa375f12f7d": "8ae206f5735fde9953059cfad7a898ef",
".git/objects/19/eccdde0bfc7d7895f9e65960c470f29189c6f7": "b5ac040995e7259d7cc93bd3aacba1c0",
".git/objects/1a/20e2311ed810801947081370a9fd4b1a726bfc": "6605d06783a062b818189b0784d33ec1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/ef3a209e744b9b1e9e1940a4c0d272e6ac1126": "24f03882358e06dbe40f3759b708fa63",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/26/170e8c12a0bfb16c7205ab996856ce40b17309": "6e73cf7a85163e1dcac68a284d117acd",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2a/38e5cfde2f83f4756e11c7aadc307011c55fa9": "15cd33185fc1bac3c1ab098b3e050ef6",
".git/objects/2a/729911797868ed5494ee021ae099cceeee0726": "bd0a15af2a156e0e2bd302f860c097e7",
".git/objects/30/699d88cc990adfbf724706afc4629e4336e027": "aae695c8907400b105fbed3e3652a06c",
".git/objects/32/c80dde12e90c12ac442db57d0802b267526c58": "88a48d3c7e137476d97f6e849daafc38",
".git/objects/37/26daa8740876984ac742a87e798eaebeb91ab8": "04be0d38cf73395443231115ae80cf8e",
".git/objects/37/653cf38071c61fa17074ab9e81881eb2827422": "b3c34005238f65dba3b7461e0c6216c5",
".git/objects/37/a99b15b2940d45985a4f1fcb4bdcfa8fc7bccd": "1075b19203b666dde4e033efbb84f036",
".git/objects/38/dc963b4fe008a08445033de611ef27af18605c": "5fc9f304ddf2610cbc2f5105ca836edf",
".git/objects/3b/48cd234408b7abec738138bf3067d2c140033b": "4f57c73a82abc4ac1213624faca88f48",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/41/68aefdff5935a122133e373490a797e39dd5a2": "082963f5c13372a3ed71990f0ecbf852",
".git/objects/41/d42b0862ae919f0099c2bcbabb0ed688cab529": "16b13a68bcf45f8b83e8307e7718602b",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/3dd89e938080e5411240c0e22bebfb9e071ff9": "a65012f547ac214e13d905c4099611b0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/7644807683405f4e3309ad8ddc76dc68553fb9": "cd3d1b8c08f5726fb41854517c90eaf4",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4f/4729a2daecb3bfa0c9f140a2e008b158b9987d": "c0922e389360204a5320aa67b13ab16a",
".git/objects/4f/b5e050e6beb2c5088dd029bf930947b58d2cc5": "e6dc204f785f8997bcc2eb69a583d262",
".git/objects/52/de128288cd18360d5ffc8b57fd91608e8d6143": "025bb1afbca8ebd6cf5eb72fbbcb6762",
".git/objects/55/9eaea84294b9f5170b75503f8b9915992467c1": "4d8904a20e093b421a7a7f8948c4ca59",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/68/04a4db732b794029ac25398e7ff9bce2983420": "666184c15b45cdb2694a4b18596bdb43",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6a/1cfdf158a86f0f6318117708639a364ceec7a3": "0928827aa416e67a11335b2f745dbfac",
".git/objects/6b/4bbdcda51c059029852617bfd39db4f5b2f65d": "ba4d718200d4b19f483f3ca4bf6d3266",
".git/objects/6c/8712955da126c385c13065516f1c848c981658": "a45b6acd387e2a85a51cefd84c760e54",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/9be5c0cc179573ead65928220a5bbceda33e09": "13f8f9a6af61ffc47dcb6a57223fd1eb",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/84/485d40eed56d10bdc00eeab93c1d14bf0cb8cd": "ac688fd410a5780e8f750fd300ba5363",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/924eeedb2c14c8d2bad48c9e9452a2c276c2c8": "cff38468dc69fede5e4aa68012df58d7",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/ab7271d8819abb37da9b2195b127f337c60f21": "d1df846869a360b6b17f0eaf3d355760",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9a/1ab72b5fe7b3f1aaacfa27d5be7ec9b87ef326": "4d6130a6df75900d706bd8abe050e875",
".git/objects/9b/dbfb0313ec3b28481174257fdf9043ca29916c": "424e367bd1e01770cec6c476c2c52367",
".git/objects/9c/1fd2446a9d3a0978c92adcc9b6372731363562": "73898851367509dd0a7f9e1701040504",
".git/objects/a6/49744844b3e7501751c145a31076fb0e0f65ff": "31af0a9cf633767fa00bf1a6a03641e6",
".git/objects/aa/572920b50a99c699628546e99b7f745a8fc107": "9521a99fa283443a67a4c3fe0e23c5f6",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/a0ee7dbf30b10c9888d4bf9eca8f4d58d3e31d": "64d92b0da6b103c1a88819966a679fdc",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/f04ac3ac89fa609916689178b6a42fc45fe19c": "8a4075ebe0e9f5ea59f0707af38b68b0",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/03dd3b2eca0a40cbdc4af7f60b7a54bb8eb247": "89900ad3b30bc75e84ac7530e3e98820",
".git/objects/d0/d61db894f223fd5c17ceaf41f0a0f7d22af237": "b8ef1389c4bfc2f41569614cfe6f3a2e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/dc0146cdddb01b9097204945fce07c29a8ac98": "5b8383d7c7584bd77c422740b7cc503b",
".git/objects/dd/a858018aa4ed249a45da30aa4c8e96bfa0d0da": "96accba351556d5027c823717edd7c2d",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e2/10b1fc39fd41431231a96016484406dbb5345a": "2d79b64db2379bb619fe2d19ee76eff2",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/39016bed9fb55c61b2af747d119935dcc2ea85": "d04ee471edbdc7a2b6bd6f18a8242d46",
".git/objects/fb/8c96894cf5ba6c68fddb4549b85ce86de04f86": "59af5dfbe171ecf10e1c7e654177e14b",
".git/refs/heads/main": "2d5fb1d444e93e7857855500c4163b95",
".git/refs/remotes/origin/main": "2d5fb1d444e93e7857855500c4163b95",
"assets/AssetManifest.bin": "ef76739fb1d9aa5769d1e72f224902bc",
"assets/AssetManifest.bin.json": "81febd463f6a431ebf5295f69933577b",
"assets/AssetManifest.json": "4afaf28813f33f79fcb285ab0bc426a6",
"assets/assets/Astronaut.glb": "f3152ab191c5a7dedad016c9b16308f3",
"assets/assets/Buddy/Cat.svg": "d381b969336352aff908f415c3502134",
"assets/assets/Buddy/Rabbit.svg": "3a559270096fe4e78a8052ab33f77396",
"assets/assets/Buddy/Spark.svg": "1d0f1a98b9137b9e62fbb08fa4330e85",
"assets/assets/Gift/favorites.lottie": "607929c16558cf3de5d9a4f4f8678f10",
"assets/assets/icon.jpg": "cbc0c44ec83642b3f38e14c2eab16454",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7d1f095daf8e057b09cf0934dd0a50a0",
"assets/NOTICES": "52a911e308d5fa8ca9939e4b7cfbadab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "a9dc98f8bf360be897a0898a7395f905",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "ff57ad90efb561f72a55d45424af1f12",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9666d8a3143584da5a2a385da56af661",
"icons/Icon-192.png": "be932324780bf458383358d0fea0bee1",
"icons/Icon-512.png": "e8a7148797dabd9d86b4d6add0401dc1",
"icons/Icon-maskable-192.png": "be932324780bf458383358d0fea0bee1",
"icons/Icon-maskable-512.png": "e8a7148797dabd9d86b4d6add0401dc1",
"index.html": "44b6849a6c9d4d10661bb50342a3bea1",
"/": "44b6849a6c9d4d10661bb50342a3bea1",
"main.dart.js": "e519b19c0f7fba2a7af470d9c73f650e",
"manifest.json": "37797cd7b9c41a8fccbacd9a02535f88",
"version.json": "cfc876c943e26456f93ba27e420b8b3e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
