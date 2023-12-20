'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "360fbb75e330616e0f31a75ebdd5f47e",
"index.html": "1be6c1c6a79d6b2cd7fdc9c480a24ae9",
"/": "1be6c1c6a79d6b2cd7fdc9c480a24ae9",
"main.dart.js": "2f9ce8f68240e7d0f54acb5b21a84552",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d8cef8a31a68e8a56c5fe47bccde6074",
".git/config": "0da4d3627c021d1fcb95afede7cc0285",
".git/objects/95/42c03e6e249136435cf45ffd749c9e621fe501": "d131f0c3f713e785fdc5f153cf634779",
".git/objects/95/b77886a2e0eefb5bbe02485bbf163dbff3986f": "eba3c19580b1b6af34f75b455ad59995",
".git/objects/0c/6e5dc9d7fbb4a280e6ad0dda56bfebca3657ca": "15d54c0d7449054d914cef7d11bde851",
".git/objects/3e/8bc9e37d245cb5c0c11e9c1856814df071a641": "337f95aef9013c165e3ac69f783b77bd",
".git/objects/50/32a2795b88b5693887e597bffb258b80e78658": "b91c35c9ec535ce0ccb73a349a005cb6",
".git/objects/57/bd7c989889e68f59766af5af62e22a10214aa5": "881031e055c84aad448c284f11ac3b91",
".git/objects/3b/036707736eacfb4e54cbce51f252021b25fa68": "891f066452fb0d57fbd03a813b54f244",
".git/objects/6f/168e72ffde19abb5cb1d67e2b8dc6ce4513765": "7f24aa6a281db5a426be277e2f05b6d4",
".git/objects/6f/55153ab61d3836320870b23af76e04991704a2": "fd1e9db49445f81354c03458c64675f8",
".git/objects/9b/5a990b3d8fcfc19266f930c92664f0904bc4cb": "e26b9680b82e5073ccb324691327176e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/0b91afa60387024752f0842b5426fc1beef0c9": "3d9ca32629f03375aa61eeca42af891c",
".git/objects/04/522e4057c1bebdd9e31f29129be32750790a19": "2132b2f90f8fa96bd1e0bd8ac57f11bf",
".git/objects/6a/12b9364753878d3585ef01988b66c50541814c": "b44449dec8dc9f959e000ada1f3c831f",
".git/objects/35/74ace16c816d9cd75825e1b57a309a308926ee": "e953f9f7b8113004d1d42a3fae7a73d0",
".git/objects/69/2aebb48a859c9da7902592d4d97ccdcffb3c75": "adb3405713d3db7c816c13fe6f3bb114",
".git/objects/3d/245a78e40b6013ddbeb7c3cab3055b51ddd9ea": "f273b736ba4ca930c96d21cf696dd265",
".git/objects/3d/abd07286879a8de965e79762375dfcd2472efc": "144dec41312408d86f0a207ab5fbcdc7",
".git/objects/67/de39836155dd3aa493ff4ca7be7097c7c03a58": "cfbf7ecac7483133c9bab5a428732e8f",
".git/objects/67/1d77fcf54c7a5b501552a93a73bb3b74f21d1a": "830935a590efcdf3d291d9877afa5867",
".git/objects/0b/2792257a32a9e33aa2c2edc585a13a5b34eba6": "da1487b69bd2406067d11df24dfb07e9",
".git/objects/93/40385358b8dd0c9a5fac0c2a6693d2572abe61": "aecfd081d29557590600cbe72e68da1d",
".git/objects/60/12ff55b0f097a55f3ba4a3eb44b42c56324176": "66c911a21d32872a29f8561726e8fc4a",
".git/objects/5f/c6615c9804bc59a5bcc5e1300a37944eb32b5e": "a4dc791355346f2e97f31beef1ce1fd4",
".git/objects/05/fb836589c8aff8448e9a498fd07818d363e2d6": "eb85924c7555f29d6c97e96bd102f89d",
".git/objects/b2/da213f1287dc55d0e838f96ea01b12f6e2755e": "2e1ecc1d6e94144151e5e234a58fc647",
".git/objects/ac/ac4572717ae8e8b985fd195723a71adb6b7d10": "a959e0d5f71e18446a0d1b2d404d28c2",
".git/objects/ac/a0ea3e9aadf9cc57489f11ed50162dfab40ece": "57f4c9fb4bff3e92590484782de3697e",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/f73eb1744c14018cbfe17e10e122c0bacf75a6": "a97fdffaf7792f7d2e2254d4fbde2deb",
".git/objects/b3/3819935179f94aac67ab19a9071348a81b620c": "0f91ce155cf7be20d5288d86cfa9a668",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/0f2ec0f76dfadc20ec0665dac15a3fb328b66b": "70bb1afeb877e6f28d03c1eb4ef86dbf",
".git/objects/bd/cef0427fd73d7c49a640de544c9680136261d2": "b7f576a722b23cc89e4599cde6b40f0c",
".git/objects/d1/b0064e5e86809c55b9a65d758df1f7b26f4b20": "cf2dfc72965dd4741335e9ca85a13410",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/0aa659e84f4dc3acafc00badd28de3f0389bfa": "4196917edc48a905f098eea6d6b16407",
".git/objects/ae/cefe0b67c021ef7b8e810a61e8b23a15f230e4": "f1a9c84c80812bafb0e10867a71f9fed",
".git/objects/e2/51e45dad03104aa62f441eccfc075de37b2622": "cc7399a4f278b584397130acec734202",
".git/objects/f3/b096f202fda06821dd130adc766145f6ea4807": "f7553a8f2cb621de564015a770e311ca",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cde5c12a26db1566c828adaf00f1f673890d18": "fd18812fb35ab65909e0e1698ef35eb1",
".git/objects/c0/5f4790d9a5c6282da8a94565894c57eb2a0989": "c84299cd4594404a80064237c0390782",
".git/objects/c9/4056ec49f70689abad1575dd332b34d295f6cd": "e1414b321c0a3e91a31e22ff40bd6e67",
".git/objects/fd/f118b6192c43197e138391c0226b0b7c56068d": "90a9a8099f211486fa6f21e37c282143",
".git/objects/f2/10eb249ff70aa7519d41fe2360cbb112acb860": "d304f68423ce6ed873833df9a3a56c8d",
".git/objects/e3/5fcd4ca4a81abc83d9067b1d62ee58388b5244": "3ef498fb8c0438ce78e6e417062a7fcf",
".git/objects/ca/82f282b5150b8e6ac7c9158c45fae97a167107": "7bead3357dfdacf0b127b1123e1733ed",
".git/objects/e4/f58f1bbd1253c44ca24301f727fac4076dbf6e": "758050491d487d0261adc16032bb4520",
".git/objects/c8/7efafedd5175597597d82d0c98d8d3f6b91f07": "a0ab9c506b43cf6a7653564346beb58c",
".git/objects/c1/a9bf09a98bf54d7c9afa4993545a9bfcd25edd": "00419ffe392a4a7283a509130e5f573d",
".git/objects/4e/cfd86f5ad6f6a7a5105ba06b5748651f25e788": "976ec9680a57c0a581b20a45ebd55631",
".git/objects/20/a9c4236a8e88a3a9c0bc2895df4d4b6e7a09d9": "aaec702f484d930f75cc415b80ee5a49",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/2e56a680ff681fee83dc61d3f497d23b8caaa3": "65fd4e76c32fd498b57fe82028439268",
".git/objects/7d/a8ecfd1c5e322f8b2dfcad9961ba7c2f3f6784": "48cac175ba4554f1ec10b133dab4de82",
".git/objects/29/76be1557dd77495595e99dc1e64f9ed80bed5d": "9be24a72ef968bdbc886285596ce40a2",
".git/objects/1f/fa4ebccbf2bd348f3ca0459565d23234fb2789": "833ff71f44beb0eee169f5ffb111e2d8",
".git/objects/73/8186f4b6585099b242465ef66fbff50ac742ad": "5f9d1df80afa6100c8d774604ac9b97e",
".git/objects/74/525703e1a852838dcdb18b92c65e4d6adba3ac": "1176bc7cd4a1b7f1e900af68e1fd3b17",
".git/objects/1a/3be26d987a6a89784fc4865cab55b591444153": "032510e236deb994842b07ba2256058f",
".git/objects/17/025bf1c4c45511a0adacb705397b239c9be4a4": "7930316da927c72f6456e7b6bd7aaeb7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/294409d4be8f3e976f40de50a1525d31c0cd44": "a8bc1ed8285914c6f941d880c4b7d941",
".git/objects/10/852e957846fe63ce2087f4f00613687fd8d496": "3d44e84e130fe808e696b600ef2b2e44",
".git/objects/81/8d9b531247a2692ab22e0a56bcc6d033577455": "c3ae187e3187d2157c7d021c53f0aff8",
".git/objects/81/936e6e13977db07199a3ffc02eadf009c4d72b": "a3cefce8dd9ec88d05cd2f6108f11d2d",
".git/objects/86/e903ea251f7f52c347526a2fe458b27bd77442": "2e2865d992cebd259e8de4af48e75d0d",
".git/objects/86/12894594e77ab1fdf5a8d519e583dd585d6c8b": "9f3e924b5b2234fa5d74c6b1af377f0a",
".git/objects/86/e60096915a746a77a9b1de78d2d09a96ab5409": "4772e9ad2e37ca5165675545258ced04",
".git/objects/2a/434ecf5db8bfa39b214a6ee27bdb7a0832719c": "c20e53582d3b3886d6a25ff100c35c26",
".git/objects/2a/e3d490e5542981510025c0d7014aa61f8f4f88": "77e68b58376efb1354e7df0035cb857e",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/596c5dcc24985973918ca0db472fd99512ef6d": "1f87eb7a82423bac1eca1366d883c854",
".git/objects/38/396e71c5ac3d413a97741d3a97922f1c1d9aad": "17f936409bf401f80b42f0026d1f2af1",
".git/objects/00/ae120d515244980174039bdc34452fccf1ab35": "79521c7e33fc22e17c8fa79728e018d8",
".git/objects/9a/39202af381d58e38b1bb7ebb46642c35300ce1": "adaea8fc286434219427059aeb42adf7",
".git/objects/36/2b5c49ad3877abd6bf11f5ee62b62a2f220bc1": "75f5c47099397f8f3b13d7a703e11d36",
".git/objects/36/c90f1f19d48729c60cc6694e52c63ffa4116a3": "20a508e52765cd0754c77aa56a717cce",
".git/objects/09/f85aec8e9f48c833046a49fa6e583814ff257c": "889fe0b085e257036b2de1dbf7e8d9b6",
".git/objects/5d/87d8686e677a806649ae7eaa3d2f5035860bae": "a14a2de3e1c71519324f29193501a6f5",
".git/objects/53/7c94fb3dc48a25f4c9ebb3dc1066058873ec64": "e602ba04e5e5dce7f910fd42f55a2a69",
".git/objects/53/14cfc38d2a0537bdca22e75028675ea4181703": "c89b32da675788d02f4a81822095ca31",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/313fe0cb8a492784ba6842c56a1c3ec2134807": "2c19a341f56b593a766d958a4e41502e",
".git/objects/5e/c84cb33317c3ef3d1179d1136601da4535f800": "b7f49c234ea2bcd6bd2d3c2afc2cf8db",
".git/objects/5e/d01c37111197440db91c1e8329e263e1a63030": "0d5776894e4d3a1f445ec506b316d1e8",
".git/objects/5b/b581230da027bec74c1693e47270dc81778ffe": "87991400dfd152235e2585b3d71335c1",
".git/objects/01/20772ac0405e4bad9d11b9a6ca81c6c1aef627": "81f2853dbb2d3ef31be9df3ed7679437",
".git/objects/39/0d080c923df14d04f223ba026a1424f8205697": "2fecd98345f3842f83d3c6778f3ec7e6",
".git/objects/63/ebfda48cbf79b3ead2db48800f11ecb703cd47": "ce26034379ff3f57ad5e8fec4baebb44",
".git/objects/0a/2ad3a8946718e5da80b8b36f3a970f9203bb41": "493becadfb3c0f3d60727bde4e9f1614",
".git/objects/90/fbefdcfb520c0cd442511f3d233e83ac268acc": "715683abdab5e23c0ef7c1dcc613ebac",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/a7/8c63655cac719924213517ed108a6ea635bade": "84cc649e5fef371ea39fb8f2029ba992",
".git/objects/dc/a6ca1c378977e0253cf6fc09be8789aff6830a": "af561172568c440d9489c8451ce9bf8f",
".git/objects/dc/6b8c9e8aa51065d28bc9b43bfc831a2ac3d20b": "fc6981d6f89b15042050652b2dfeb5ae",
".git/objects/b6/e8ecb23f36abbcc2ee1018116af72d9ffb780e": "121b5491015558a0fa8d50657faf3f2c",
".git/objects/d2/9c9a73eecfcc0a3b5058f38d3ddac41d35af34": "39c755e16c1be5be51967a5d116d6810",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f4d28b2cf2a6e8989032daa8c5c31192a1e0fa": "241d7bfd65c09221b13f853f395fe698",
".git/objects/db/5019497e9651f070f9295dde8b32c4b4fc091a": "2e960fff69a121cc157ed2f0d4a570c1",
".git/objects/a8/7f52089c0b45e6d1fa683eb8a659f3d53c9a9e": "002dcd31886b8328c3c184d64f445252",
".git/objects/a8/090c1fd8eae676bbbc25966d7d08117865bfe9": "5f0a83382e3d52ba510aac453913d20d",
".git/objects/b0/3667fabfee3b86d6e48d3c211fbffb05e842ab": "f34c6d270bc245ef93a048305fbb3b49",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/c4948c1c5096fb94b85c896e4475e117091bc1": "870b8f904dbabce24910cebf8e0ab099",
".git/objects/c4/66647a8555e253fea2667232e91865cc79184c": "a9d2a633952bbbdf25f8cca48fdd09a0",
".git/objects/ea/2592e70ecc5c70747cce663d61b45e2f009c67": "36e6315a66f660eb2ba3c5356996eb01",
".git/objects/cc/e00d9170ba3dc7bb32f44bb27cc2d7127c4810": "ee5bfa3c85d1d6bf5652cfed1aba081e",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/05ba37c8b85ab153e5271d18053d7225e3b25d": "71dbfd7f039ac2e7b8a838753b8a970b",
".git/objects/f7/c78964c199d7c326366f018c2bc992a1ff4f1e": "fda42071b814fd84697acdc85f42099e",
".git/objects/f7/bca3ec71b8263d89b091c40ca4ebf6f9464fd3": "a15bd3a4fb91b8eb10cbcfb4394bc52f",
".git/objects/e8/f730b9c2644984a7ce6f7a990f99323e30e671": "266a39bfd5c3b2d59ee0d51a0b651242",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/f6/c25631bf3cbe1e5ed979755346a8e9b8109d06": "cd5aeefa787077030eab69ee570b9fa6",
".git/objects/f1/a3cc0899bf3570a576c380daad79052dd80350": "fa654ec09f355c23e3d36d40125fed26",
".git/objects/f8/28c44e27ec6c620a993dadab70cb9249d7acf9": "2db0a800b30dc2b83443d9699fe455ea",
".git/objects/e0/7f5c97c75a08b7344ca9314a08d9d5076904d0": "aae25f107e400c0236bba2fdd5638eee",
".git/objects/46/39308f237ffe56a8f374872dcf83b2bd71dd45": "ab38b88e009ef7446256b3acd1e0a23d",
".git/objects/79/203e29425316f8e5751755aab9e34be9c873dc": "8c61ead80ffe27122d3ca772cb70b350",
".git/objects/79/2aed12781bd93242e83a06da6b27fbab395db9": "004e91fb9186d1d16fd01378c07ac6b6",
".git/objects/2d/eaff551e5fa8ca805df04d194feede5c28d9b8": "7896ba243fe5aa12a885f96295aff8ba",
".git/objects/2d/bc672d239251d50d5acd499c08b3cd6c0746fe": "9cfd452b26275520e5fba185fa4f44b9",
".git/objects/83/2e6d6f40d4d44c4a88470eed361e8f06f64ad6": "ae14c9efd4e1a931ad7ccc862720ced1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/2376449d6dba8143a4215085f389de4f4ca13c": "4b6f28c500518982e0160006eb21fa98",
".git/objects/4a/770e5681ffb50d62a750903ce3fb18021ef7b6": "8b90ac48cf4c26a56d84e0983dc8f3b7",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/8e83c3c92f26f01c56e4ed8e93090983d365ef": "6df84739e4dd64bc34adea45147c82c3",
".git/objects/8c/6bca06d58928f310f2c5e1ed8b8791686cedea": "ceda0d5954306be9a0b8f34ca80e903e",
".git/objects/71/22f2b26150aeb1c1a6562577c5e14bf3b43042": "5b15cf0f739fb3db131b228510395694",
".git/objects/71/44b383e12b0ee666ec3066a991ce142c05e2b6": "35f0af73dd21f7bf87042a3920ae583d",
".git/objects/40/8d1161fb142fb4a7c3af3631d3e3f89a5a19ae": "b948ed0fb282aabbbe890c8052c5b239",
".git/objects/2b/0211a1335e3db3051f60b97394397f5fdc96dd": "53f5ae8b9b0650f07d3328740b55ae88",
".git/objects/47/40401d7db32f74008870cbbe05e13bd3411a80": "dd0cd7ab8ebb98340bf2dc5e711bf8bc",
".git/objects/13/c647652c451b8f588e46913de2f1b1d53458c2": "7894f032c6978debafa355d3e9eb6a08",
".git/objects/25/554b56a8d303cacfcedb20a9537a03fbf98fb8": "e31429df1b1531bb274bcc47ab969079",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "0dec1e05e591fc37c43146a3968d0498",
".git/logs/refs/heads/main": "58afa05c4b1d977d4bb78f46019ca9f6",
".git/logs/refs/remotes/origin/HEAD": "755ac5a46af9e1d970ed7a14d684caf8",
".git/logs/refs/remotes/origin/main": "2b847d8b7572a6a65ba691162cec3c77",
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
".git/refs/heads/main": "78002d06d0a293b5d8664c389b753b83",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "78002d06d0a293b5d8664c389b753b83",
".git/index": "263de7a45db77a01d59564c0f7be9b41",
".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/FETCH_HEAD": "6ff3bf32c04c102264fb4c4b85b21a86",
"assets/AssetManifest.json": "d9eb422e223dc2b24043827c345f90eb",
"assets/NOTICES": "58ec68540b67e4f5c59344bea380c87a",
"assets/FontManifest.json": "1691653e2bdcf3490cbd7503728d75c4",
"assets/AssetManifest.bin.json": "7311360fd35745de85bd19a561a63db8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "3723a7a90770abce289eb2e142e3f043",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/checkmark.svg": "0f3e8d3d27425be9799754ff0057a76c",
"assets/assets/images/persons.svg": "24d01aded3083461b4f33aa6d696a310",
"assets/assets/images/instagram.svg": "012095fb63d482cd5b710cca67b263a0",
"assets/assets/images/mail.svg": "839351110835dc735a713c9bffe64139",
"assets/assets/images/hero.svg": "ff801fafd091c0e51e3bd0fa9fe37168",
"assets/assets/images/time.svg": "2cfb0eb689c9afbce5a45c3611024c4e",
"assets/assets/images/care.svg": "30dfa74104cfbd901e7cf993649653b4",
"assets/assets/images/background.png": "f91e54c8477240525d302c932500af72",
"assets/assets/images/xmark.svg": "13a7862c311937cae704c17b3c47fdd6",
"assets/assets/images/abwab.png": "f8f497ad6b323941e6b58a7cda86a08b",
"assets/assets/images/abwab-icon.png": "29e24c683580ed2e5655e67c15d365db",
"assets/assets/images/phone.svg": "72b5d09085335d597e8b717a18462b00",
"assets/assets/images/twitter.svg": "e099629a92e5c60b71c1c9bafbd73ed3",
"assets/assets/images/menu.svg": "4f64ffe8cde42154902015752f57e596",
"assets/assets/images/price.svg": "0b8fd7bda8b58ac2bbce0112012fbc45",
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
