(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-biblioteca/v-biblioteca.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-biblioteca/v-biblioteca.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--First navbar mobil-->\n<div class=\"banner bg-dark d-md-none\">\n    <img class=\"spotifyLogo mt-3 mb-3 ml-5\" routerLink=\"\" src=\"./assets/logo.png\" alt=\"SpotifyLogo\">\n</div>\n\n<!-- Vertical navbar pc -->\n<div class=\"vertical-nav\" id=\"sidebar\">\n    <div class=\"py-4 px-3 mb-4\">\n        <div class=\"media d-flex align-items-center\">\n            <img src=\"./assets/logo.png\" alt=\"SpotifyLogo\" width=\"135\" style=\"cursor:pointer\" routerLink=\"\">\n            <div class=\"media-body\">\n            </div>\n        </div>\n    </div>\n\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\" routerLink=\"\"><i\n            class=\"fas fa-home\"></i> Inicio</p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-search\"></i> Buscador\n    </p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-book\"></i> Biblioteca\n    </p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-star\"></i> Favoritos\n    </p>\n\n    <p class=\"text-gray text-uppercase px-3 medium py-4 mb-0 navbarCategories\"><i class=\"fas fa-plus-square\"\n            style=\"font-size: 2rem;\"></i> <span style=\"vertical-align: .4rem\"> Playlist</span></p>\n\n    <div class=\"nav flex-column mb-0\">\n        <li class=\"nav-item\" *ngFor=\"let song of songList\">\n            <span class=\"text-gray small font-weight-bold ml-3 mt-5 navbarSongs\"\n                routerLink=\"/player/{{song['id']}}\">{{song[\"title\"]}}</span>\n        </li>\n    </div>\n</div>\n\n\n<!--Perque ocupi la pagina restant a la vertical navbar-->\n<!--Horitzontal navbar pc-->\n<div class=\"page-content\" id=\"content\">\n    <nav class=\"navbar navbarBackground d-none d-md-block\">\n        <div class=\"text-center navbarItems\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Seleccionados</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Podcasts</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Listas de éxitos</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Géneros y estados de\n                ánimo</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Novedades</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Descubrir</span>\n        </div>\n    </nav>\n    <!--Song cards-->\n    <div class=\"banner songListBackground\">\n        <div class=\"container\">\n            <h1 class=\"SLTitle\">All your songs</h1>\n            <div class=\"row songsRow\">\n                <div *ngFor=\"let song of songList\" class=\"col-4 col-lg-2\" style=\"margin-bottom: 20%\">\n                    <div class=\"songCard text-center pt-5\" routerLink=\"/player/{{song['id']}}\">\n                        <img class=\"frontSong\" src=\"./assets/{{song['cover']}}\" alt=\"\">\n                        <p class=\"pt-2 mb-0 text-gray font-weight-bold SCText\">{{song[\"title\"]}}</p>\n                        <p class=\"pt-1 mb-0 text-gray SCText\">{{song[\"autor\"]}}</p>\n                        <small class=\"pt-1 mb-0 text-gray SCText\">{{song[\"album\"]}}</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"d-none d-md-block\">\n    <div class=\"row rowPlayer\">\n        <audio id=\"player\" src=\"./assets/{{song['song']}}\"></audio>\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-5\" style=\"display: contents\">\n                    <img class=\"m-3\" style=\"cursor: pointer\" src=\"./assets/{{song['cover']}}\" width=\"80vw\">\n                </div>\n                <div class=\"col-7 p-0\">\n                    <p class=\"font-weight-bold medium mb-0 playerSongTitle\">{{song[\"title\"]}}</p>\n                    <p class=\"text-gray small mb-0 playerSongAutor\">{{song[\"autor\"]}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').play()\" class=\"m-0 float-right\"><i\n                    class=\"far fa-play-circle text-gray playIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').pause()\" class=\"m-0 float-left\"><i\n                    class=\"far fa-pause-circle text-gray pauseIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-2\">\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume += 0.1\" class=\"m-0 float-right\"><i\n                    class=\"fas fa-plus text-gray plusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume -= 0.1\" class=\"m-0 float-left\"><i\n                    class=\"fas fa-minus text-gray minusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n        </div>\n    </div>\n</div>\n<!--second horitzontal navbar mobil-->\n<div class=\"banner bg-dark d-md-none footerNavBanner\">\n    <div class=\"row footerNav\">\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-search\"></i>\n                Buscador</span>\n        </div>\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-book\"></i>\n                Biblioteca</span>\n        </div>\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-star\"></i>\n                Favoritos</span>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-player/v-player.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-player/v-player.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--First navbar mobil-->\n<div class=\"banner bg-dark d-md-none\">\n    <img class=\"spotifyLogo mt-3 mb-3 ml-5\" routerLink=\"\" src=\"./assets/logo.png\" alt=\"SpotifyLogo\">\n</div>\n\n<!-- Vertical navbar pc -->\n<div class=\"vertical-nav\" id=\"sidebar\">\n    <div class=\"py-4 px-3 mb-4\">\n        <div class=\"media d-flex align-items-center\">\n            <img src=\"./assets/logo.png\" alt=\"SpotifyLogo\" width=\"135\" style=\"cursor:pointer\" routerLink=\"\">\n            <div class=\"media-body\">\n            </div>\n        </div>\n    </div>\n\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\" routerLink=\"\"><i\n            class=\"fas fa-home\"></i> Inicio</p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-search\"></i> Buscador\n    </p>\n    <p routerLink=\"/biblio\" class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-book\"></i> Biblioteca\n    </p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-star\"></i> Favoritos\n    </p>\n\n    <p class=\"text-gray text-uppercase px-3 medium py-4 mb-0 navbarCategories\"><i class=\"fas fa-plus-square\"\n            style=\"font-size: 2rem;\"></i> <span style=\"vertical-align: .4rem\"> Playlist</span></p>\n\n    <div class=\"nav flex-column mb-0\">\n        <li class=\"nav-item\" *ngFor=\"let song of songList\">\n            <span class=\"text-gray small font-weight-bold ml-3 mt-5 navbarSongs\"\n                routerLink=\"/player/{{song['id']}}\">{{song[\"title\"]}}</span>\n        </li>\n    </div>\n</div>\n\n\n<!--Perque ocupi la pagina restant a la vertical navbar-->\n<!--Horitzontal navbar pc-->\n<div class=\"page-content\" id=\"content\">\n    <nav class=\"navbar navbarBackground d-none d-md-block\">\n        <div class=\"text-center navbarItems\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Seleccionados</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Podcasts</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Listas de éxitos</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Géneros y estados de\n                ánimo</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Novedades</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Descubrir</span>\n        </div>\n    </nav>\n\n    <!--Player background-->\n    <div class=\"banner songListBackground\" style=\"height: 77vh\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-12 col-md-6\">\n                    <div class=\"songView text-center mb-3\">\n                        <img class=\"songViewImg\" src=\"./assets/{{song['cover']}}\" alt=\"\">\n                        <div class=\"mt-3 mb-3\">\n                            <h3 class=\"text-gray font-weight-bolder songViewText songViewTitle\">{{song[\"title\"]}} </h3>\n                            <h6 class=\"text-gray small songViewText\">{{song[\"autor\"]}}</h6>\n                        </div>\n                    </div>\n                    <button onclick=\"document.getElementById('player').play()\" type=\"button\"\n                        class=\"btn btn-success playButton d-none d-md-block\">Reproducir</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Reproductor pc-->\n<div class=\"d-none d-md-block\">\n    <div class=\"row rowPlayer\">\n        <audio id=\"player\" src=\"./assets/{{song['song']}}\"></audio>\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-5\" style=\"display: contents\">\n                    <img class=\"m-3\" style=\"cursor: pointer\" src=\"./assets/{{song['cover']}}\" width=\"80vw\">\n                </div>\n                <div class=\"col-7 p-0\">\n                    <p class=\"font-weight-bold medium mb-0 playerSongTitle\">{{song[\"title\"]}}</p>\n                    <p class=\"text-gray small mb-0 playerSongAutor\">{{song[\"autor\"]}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').play()\" class=\"m-0 float-right\"><i\n                    class=\"far fa-play-circle text-gray playIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').pause()\" class=\"m-0 float-left\"><i\n                    class=\"far fa-pause-circle text-gray pauseIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-2\">\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume += 0.1\" class=\"m-0 float-right\"><i\n                    class=\"fas fa-plus text-gray plusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume -= 0.1\" class=\"m-0 float-left\"><i\n                    class=\"fas fa-minus text-gray minusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n        </div>\n    </div>\n</div>\n\n<div class=\"progress\">\n    <span id=\"progress-amount\"></span>\n</div>\n\n<!--Reproductor mobil-->\n<div class=\"d-block d-md-none d-lg-none\">\n    <div class=\"row rowPlayer rowPlayerMp\">\n        <audio id=\"player\" src=\"./assets/{{song['song']}}\"></audio>\n        <div class=\"col-5\">\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').play()\" class=\"m-0 float-right\"><i\n                    class=\"far fa-play-circle text-gray playIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').pause()\" class=\"m-0 float-left\"><i\n                    class=\"far fa-pause-circle text-gray pauseIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-2\">\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume += 0.1\" class=\"m-0 float-right\"><i\n                    class=\"fas fa-plus text-gray plusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume -= 0.1\" class=\"m-0 float-left\"><i\n                    class=\"fas fa-minus text-gray minusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n        </div>\n    </div>\n</div>\n\n<!--second horitzontal navbar mobil-->\n<div class=\"banner bg-dark d-md-none footerNavBanner\">\n    <div class=\"row footerNav\">\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-search\"></i>\n                Buscador</span>\n        </div>\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span routerLink=\"/biblio\" class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-book\"></i>\n                Biblioteca</span>\n        </div>\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-star\"></i>\n                Favoritos</span>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-song-list/v-song-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-song-list/v-song-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--First navbar mobil-->\n<div class=\"banner bg-dark d-md-none\">\n    <img class=\"spotifyLogo mt-3 mb-3 ml-5\" routerLink=\"\" src=\"./assets/logo.png\" alt=\"SpotifyLogo\">\n</div>\n\n<!-- Vertical navbar pc -->\n<div class=\"vertical-nav\" id=\"sidebar\">\n    <div class=\"py-4 px-3 mb-4\">\n        <div class=\"media d-flex align-items-center\">\n            <img src=\"./assets/logo.png\" alt=\"SpotifyLogo\" width=\"135\" style=\"cursor:pointer\" routerLink=\"\">\n            <div class=\"media-body\">\n            </div>\n        </div>\n    </div>\n\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\" routerLink=\"\"><i\n            class=\"fas fa-home\"></i> Inicio</p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-search\"></i> Buscador\n    </p>\n    <p routerLink=\"/biblio\" class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-book\"></i> Biblioteca\n    </p>\n    <p class=\"text-gray font-weight-bold px-3 medium pb-4 mb-0 navbarCategories\"><i class=\"fas fa-star\"></i> Favoritos\n    </p>\n\n    <p class=\"text-gray text-uppercase px-3 medium py-4 mb-0 navbarCategories\"><i class=\"fas fa-plus-square\"\n            style=\"font-size: 2rem;\"></i> <span style=\"vertical-align: .4rem\"> Playlist</span></p>\n\n    <div class=\"nav flex-column mb-0\">\n        <li class=\"nav-item\" *ngFor=\"let song of songList\">\n            <span class=\"text-gray small font-weight-bold ml-3 mt-5 navbarSongs\"\n                routerLink=\"/player/{{song['id']}}\">{{song[\"title\"]}}</span>\n        </li>\n    </div>\n</div>\n\n\n<!--Perque ocupi la pagina restant a la vertical navbar-->\n<!--Horitzontal navbar pc-->\n<div class=\"page-content\" id=\"content\">\n    <nav class=\"navbar navbarBackground d-none d-md-block\">\n        <div class=\"text-center navbarItems\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Seleccionados</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Podcasts</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Listas de éxitos</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Géneros y estados de\n                ánimo</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Novedades</span>\n            <span class=\"text-gray font-weight-bold small text-uppercase m-3 navbarItem\">Descubrir</span>\n        </div>\n    </nav>\n    <!--Song cards-->\n    <div class=\"banner songListBackground\">\n        <div class=\"container\">\n            <h1 class=\"SLTitle\">Recently played</h1>\n            <div class=\"row songsRow\">\n                <div *ngFor=\"let song of songList\" class=\"col-4 col-lg-2\">\n                    <div class=\"songCard text-center pt-5\" routerLink=\"/player/{{song['id']}}\">\n                        <img class=\"frontSong\" src=\"./assets/{{song['cover']}}\" alt=\"\">\n                        <p class=\"pt-2 mb-0 text-gray font-weight-bold SCText\">{{song[\"title\"]}}</p>\n                        <p class=\"pt-1 mb-0 text-gray SCText\">{{song[\"autor\"]}}</p>\n                        <small class=\"pt-1 mb-0 text-gray SCText\">{{song[\"album\"]}}</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"banner songListBackground\">\n        <div class=\"container\">\n            <h1 class=\"SLTitle\">Your heavy rotation</h1>\n            <div class=\"row songsRow\">\n                <div *ngFor=\"let song of songList\" class=\"col-4 col-lg-2\" style=\"margin-bottom: 20%\">\n                    <div class=\"songCard text-center pt-5\" routerLink=\"/player/{{song['id']}}\">\n                        <img class=\"frontSong\" src=\"./assets/{{song['cover']}}\" alt=\"\">\n                        <p class=\"pt-2 mb-0 text-gray font-weight-bold SCText\">{{song[\"title\"]}}</p>\n                        <p class=\"pt-1 mb-0 text-gray SCText\">{{song[\"autor\"]}}</p>\n                        <small class=\"pt-1 mb-0 text-gray SCText\">{{song[\"album\"]}}</small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"d-none d-md-block\">\n    <div class=\"row rowPlayer\">\n        <audio id=\"player\" src=\"./assets/{{song['song']}}\"></audio>\n        <div class=\"col-5\">\n            <div class=\"row\">\n                <div class=\"col-5\" style=\"display: contents\">\n                    <img class=\"m-3\" style=\"cursor: pointer\" src=\"./assets/{{song['cover']}}\" width=\"80vw\">\n                </div>\n                <div class=\"col-7 p-0\">\n                    <p class=\"font-weight-bold medium mb-0 playerSongTitle\">{{song[\"title\"]}}</p>\n                    <p class=\"text-gray small mb-0 playerSongAutor\">{{song[\"autor\"]}}</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').play()\" class=\"m-0 float-right\"><i\n                    class=\"far fa-play-circle text-gray playIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').pause()\" class=\"m-0 float-left\"><i\n                    class=\"far fa-pause-circle text-gray pauseIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-2\">\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume += 0.1\" class=\"m-0 float-right\"><i\n                    class=\"fas fa-plus text-gray plusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n            <p onclick=\"document.getElementById('player').volume -= 0.1\" class=\"m-0 float-left\"><i\n                    class=\"fas fa-minus text-gray minusIcon playerIcon\"></i></p>\n        </div>\n        <div class=\"col-1 pt-3 mt-3 mb-3\">\n        </div>\n    </div>\n</div>\n<!--second horitzontal navbar mobil-->\n<div class=\"banner bg-dark d-md-none footerNavBanner\">\n    <div class=\"row footerNav\">\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-search\"></i>\n                Buscador</span>\n        </div>\n        <div class=\"col-4 text-center p-0 footerNavCol\" routerLink=\"/biblio\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-book\"></i>\n                Biblioteca</span>\n        </div>\n        <div class=\"col-4 text-center p-0 footerNavCol\">\n            <span class=\"text-gray font-weight-bold small text-uppercase m-0 navbarItem\"><i class=\"fas fa-star\"></i>\n                Favoritos</span>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angularSpotify';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _v_song_list_v_song_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./v-song-list/v-song-list.component */ "./src/app/v-song-list/v-song-list.component.ts");
/* harmony import */ var _v_player_v_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v-player/v-player.component */ "./src/app/v-player/v-player.component.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _v_biblioteca_v_biblioteca_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./v-biblioteca/v-biblioteca.component */ "./src/app/v-biblioteca/v-biblioteca.component.ts");









const routerConfig = [
    { "path": "", "component": _v_song_list_v_song_list_component__WEBPACK_IMPORTED_MODULE_4__["VSongListComponent"] },
    { "path": "songList", "component": _v_song_list_v_song_list_component__WEBPACK_IMPORTED_MODULE_4__["VSongListComponent"] },
    { "path": "player/:id", "component": _v_player_v_player_component__WEBPACK_IMPORTED_MODULE_5__["VPlayerComponent"] },
    { "path": "biblio", "component": _v_biblioteca_v_biblioteca_component__WEBPACK_IMPORTED_MODULE_8__["VBibliotecaComponent"] },
    { "path": "**", "component": _v_song_list_v_song_list_component__WEBPACK_IMPORTED_MODULE_4__["VSongListComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _v_song_list_v_song_list_component__WEBPACK_IMPORTED_MODULE_4__["VSongListComponent"],
            _v_player_v_player_component__WEBPACK_IMPORTED_MODULE_5__["VPlayerComponent"],
            _v_biblioteca_v_biblioteca_component__WEBPACK_IMPORTED_MODULE_8__["VBibliotecaComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routerConfig, { useHash: true })
        ],
        providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DataService = class DataService {
    constructor() {
        this.songList = [
            { "title": "Un nuevo sol", "autor": "Vita Imana", "album": "Ulbum (2012)", "cover": "vitaimana.jpg", "song": "unnuevosol.mp3", "id": 1 },
            { "title": "Psychosocial", "autor": "Slipknot", "album": "All Hope Is Gone", "cover": "slipknot.jpg", "song": "psychosocial.mp3", "id": 2 },
            { "title": "Time", "autor": "Pink Floyd", "album": "Dark Side of The Moon", "cover": "pinkfloyd.jpg", "song": "time.mp3", "id": 3 },
            { "title": "The Unforgiven", "autor": "Metallica", "album": "Black Album (1973)", "cover": "metallica.jpg", "song": "theunforgiven.mp3", "id": 4 },
            { "title": "Octubres rotos", "autor": "Desakato", "album": "Con el viento en la cara (2008)", "cover": "desakato.jpg", "song": "octubresrotos.mp3", "id": 5 },
            { "title": "Corbelles", "autor": "ZOO Pose", "album": "Tempestes vénen del sud", "cover": "zoo.jpg", "song": "corbelles.mp3", "id": 6 },
        ];
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/v-biblioteca/v-biblioteca.component.css":
/*!*********************************************************!*\
  !*** ./src/app/v-biblioteca/v-biblioteca.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spotifyLogo{\r\n    width: 30%;\r\n    cursor: pointer;\r\n}\r\n#sidebarCollapse {\r\n    width: 40px;\r\n    height: 40px;\r\n    background:black;\r\n}\r\n.vertical-nav {\r\n  min-width: 17rem;\r\n  width: 17rem;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.4s;\r\n  background-color: black;\r\n}\r\n.page-content {\r\n  width: calc(100% - 17rem);\r\n  margin-left: 17rem;\r\n  transition: all 0.4s;\r\n}\r\n/* for toggle behavior */\r\n#sidebar.active {\r\n  margin-left: -17rem;\r\n}\r\n#content.active {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n@media (max-width: 765px) {\r\n  #sidebar {\r\n    margin-left: -17rem;\r\n  }\r\n  #sidebar.active {\r\n    margin-left: 0;\r\n  }\r\n  #content {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n  #content.active {\r\n    margin-left: 17rem;\r\n    width: calc(100% - 17rem);\r\n  }\r\n}\r\nbody {\r\n  background:black;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n.text-uppercase {\r\n  letter-spacing: 0.1em;\r\n}\r\n.text-gray {\r\n  color: #aaa;\r\n}\r\n.navbarBackground, .songListBackground{\r\n    background-color: rgb(24,24,24);\r\n}\r\n.navbarItems{\r\n    margin: 2% auto !important;   \r\n}\r\n.navbarItem:hover{\r\n    color:white;\r\n}\r\n.SLTitle{\r\n    font-weight: bolder;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color:white;\r\n    padding-top: 5%;\r\n}\r\n.songsRow{\r\n    width: 95%;\r\n    text-align: left;\r\n    margin-left: 1%;\r\n}\r\n.frontSong{\r\n    width: 100%;\r\n    transition: .5s;\r\n}\r\n.frontSong:hover{\r\n  opacity: .4;\r\n}\r\n.songCard{\r\n  cursor: pointer;\r\n}\r\n.SCText{\r\n  transition: .5s;\r\n}\r\n.SCText:hover{\r\n  color: white;\r\n}\r\n.navbarCategories{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.navbarCategories:hover{\r\n  color: white;\r\n}\r\n.navbarSongs{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.navbarSongs:hover{\r\n  color: white;\r\n}\r\n.rowPlayer{\r\n  background-color: #444;\r\n  position: fixed;\r\n  width: 100%;\r\n  margin: 0%;\r\n  bottom: 0;\r\n  line-height: 7vh;\r\n}\r\n.playIcon{\r\n  font-size: 2.5rem;\r\n}\r\n.pauseIcon{\r\n  font-size: 2.5rem;\r\n}\r\n.playerSongTitle{\r\n  position: absolute;\r\n  top: 21%;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerSongAutor{\r\n  position: absolute;\r\n  top: 41%;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerSongTitle:hover{\r\n  text-decoration: underline;\r\n}\r\n.playerSongAutor:hover{\r\n  color:white;\r\n}\r\n.playerIcon{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerIcon:hover{\r\n  color: white;\r\n}\r\n.songViewTitle{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.playButton{\r\n  border-radius: 1.2rem;\r\n  width: 15vw;\r\n  position: relative;\r\n  left: 30%;\r\n  margin-top: 3%;\r\n  margin-bottom: 120%;\r\n}\r\n.footerNavCol{\r\n  line-height: 15vh;\r\n}\r\n.footerNavBanner{\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n.footerNav{\r\n  height: 15vh;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n.navbarItem{\r\n  transition: .5s;\r\n  cursor: pointer;\r\n  font-size: .7rem;\r\n}\r\n.navbarItem:hover{\r\n  color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1iaWJsaW90ZWNhL3YtYmlibGlvdGVjYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCwyQ0FBMkM7RUFDM0Msb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQSx3QkFBd0I7QUFFeEI7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1g7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsU0FBUztFQUNYO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQyxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3YtYmlibGlvdGVjYS92LWJpYmxpb3RlY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcG90aWZ5TG9nb3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI3NpZGViYXJDb2xsYXBzZSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbn1cclxuLnZlcnRpY2FsLW5hdiB7XHJcbiAgbWluLXdpZHRoOiAxN3JlbTtcclxuICB3aWR0aDogMTdyZW07XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3cmVtKTtcclxuICBtYXJnaW4tbGVmdDogMTdyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbi8qIGZvciB0b2dnbGUgYmVoYXZpb3IgKi9cclxuXHJcbiNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcclxufVxyXG5cclxuI2NvbnRlbnQuYWN0aXZlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjVweCkge1xyXG4gICNzaWRlYmFyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTdyZW07XHJcbiAgfVxyXG4gICNzaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgI2NvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICNjb250ZW50LmFjdGl2ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xyXG4gIH1cclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDpibGFjaztcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLnRleHQtdXBwZXJjYXNlIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbi50ZXh0LWdyYXkge1xyXG4gIGNvbG9yOiAjYWFhO1xyXG59XHJcblxyXG4ubmF2YmFyQmFja2dyb3VuZCwgLnNvbmdMaXN0QmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwyNCwyNCk7XHJcbn1cclxuLm5hdmJhckl0ZW1ze1xyXG4gICAgbWFyZ2luOiAyJSBhdXRvICFpbXBvcnRhbnQ7ICAgXHJcbn1cclxuLm5hdmJhckl0ZW06aG92ZXJ7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4uU0xUaXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLnNvbmdzUm93e1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuLmZyb250U29uZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5mcm9udFNvbmc6aG92ZXJ7XHJcbiAgb3BhY2l0eTogLjQ7XHJcbn1cclxuLnNvbmdDYXJke1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uU0NUZXh0e1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4uU0NUZXh0OmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFyQ2F0ZWdvcmllc3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5uYXZiYXJDYXRlZ29yaWVzOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubmF2YmFyU29uZ3N7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ubmF2YmFyU29uZ3M6aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yb3dQbGF5ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDd2aDtcclxufVxyXG4ucGxheUljb257XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbn1cclxuLnBhdXNlSWNvbntcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG4ucGxheWVyU29uZ1RpdGxle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDIxJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ucGxheWVyU29uZ0F1dG9ye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQxJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5wbGF5ZXJTb25nVGl0bGU6aG92ZXJ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLnBsYXllclNvbmdBdXRvcjpob3ZlcntcclxuICBjb2xvcjp3aGl0ZTtcclxufVxyXG4ucGxheWVySWNvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5wbGF5ZXJJY29uOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uc29uZ1ZpZXdUaXRsZXtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wbGF5QnV0dG9ue1xyXG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcclxuICB3aWR0aDogMTV2dztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMzAlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEyMCU7XHJcbn1cclxuLmZvb3Rlck5hdkNvbHtcclxuICBsaW5lLWhlaWdodDogMTV2aDtcclxufVxyXG4uZm9vdGVyTmF2QmFubmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9vdGVyTmF2e1xyXG4gIGhlaWdodDogMTV2aDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5uYXZiYXJJdGVte1xyXG4gIHRyYW5zaXRpb246IC41cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAuN3JlbTtcclxufVxyXG4ubmF2YmFySXRlbTpob3ZlcntcclxuICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/v-biblioteca/v-biblioteca.component.ts":
/*!********************************************************!*\
  !*** ./src/app/v-biblioteca/v-biblioteca.component.ts ***!
  \********************************************************/
/*! exports provided: VBibliotecaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBibliotecaComponent", function() { return VBibliotecaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



let VBibliotecaComponent = class VBibliotecaComponent {
    constructor(_data) {
        this._data = _data;
        this.songList = this._data.songList;
    }
    ngOnInit() {
    }
};
VBibliotecaComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
VBibliotecaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-v-biblioteca',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-biblioteca.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-biblioteca/v-biblioteca.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-biblioteca.component.css */ "./src/app/v-biblioteca/v-biblioteca.component.css")).default]
    })
], VBibliotecaComponent);



/***/ }),

/***/ "./src/app/v-player/v-player.component.css":
/*!*************************************************!*\
  !*** ./src/app/v-player/v-player.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spotifyLogo{\r\n    width: 30%;\r\n    cursor: pointer;\r\n}\r\n#sidebarCollapse {\r\n    width: 40px;\r\n    height: 40px;\r\n    background:black;\r\n}\r\n.vertical-nav {\r\n  min-width: 17rem;\r\n  width: 17rem;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.4s;\r\n  background-color: black;\r\n}\r\n.page-content {\r\n  width: calc(100% - 17rem);\r\n  margin-left: 17rem;\r\n  transition: all 0.4s;\r\n}\r\n/* for toggle behavior */\r\n#sidebar.active {\r\n  margin-left: -17rem;\r\n}\r\n#content.active {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n@media (max-width: 765px) {\r\n  #sidebar {\r\n    margin-left: -17rem;\r\n  }\r\n  #sidebar.active {\r\n    margin-left: 0;\r\n  }\r\n  #content {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n  #content.active {\r\n    margin-left: 17rem;\r\n    width: calc(100% - 17rem);\r\n  }\r\n}\r\nbody {\r\n  background:black;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n.text-uppercase {\r\n  letter-spacing: 0.1em;\r\n}\r\n.text-gray {\r\n  color: #aaa;\r\n}\r\n.navbarBackground, .songListBackground{\r\n    background-color: rgb(24,24,24);\r\n}\r\n.navbarItems{\r\n    margin: 2% auto !important;   \r\n}\r\n.SLTitle{\r\n    font-weight: bolder;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color:white;\r\n    padding-top: 5%;\r\n}\r\n.songsRow{\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n.frontSong{\r\n    width: 100%;\r\n    height: 30vh;\r\n    transition: .5s;\r\n}\r\n.frontSong:hover{\r\n  opacity: .4;\r\n}\r\n.songCard{\r\n  cursor: pointer;\r\n}\r\n.SCText{\r\n  transition: .5s;\r\n}\r\n.SCText:hover{\r\n  color: white;\r\n}\r\n.navbarCategories{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.navbarCategories:hover{\r\n  color: white;\r\n}\r\n.navbarSongs{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.navbarSongs:hover{\r\n  color: white;\r\n}\r\n.songViewImg{\r\n  width: 50%;\r\n}\r\n.songView{\r\n    margin-top: 6%;\r\n}\r\n.songViewText{\r\n    cursor: pointer;\r\n    transition: .5s;\r\n}\r\n.songViewText:hover{\r\n    color: white;\r\n}\r\n.rowPlayer{\r\n  background-color: #444;\r\n  position: fixed;\r\n  width: 100%;\r\n  margin: 0%;\r\n  bottom: 0;\r\n  line-height: 7vh;\r\n}\r\n.playerSongTitle{\r\n  position: absolute;\r\n  top: 21%;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerSongAutor{\r\n  position: absolute;\r\n  top: 41%;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerSongTitle:hover{\r\n  text-decoration: underline;\r\n}\r\n.playerSongAutor:hover{\r\n  color:white;\r\n}\r\n.playerIcon{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerIcon:hover{\r\n  color: white;\r\n}\r\n.songViewTitle{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.playButton{\r\n  border-radius: 1.2rem;\r\n  width: 15vw;\r\n  position: relative;\r\n  left: 30%;\r\n  margin-top: 3%;\r\n  margin-bottom: 5%;\r\n}\r\n.footerNavCol{\r\n  line-height: 15vh;\r\n}\r\n.footerNavBanner{\r\n  position:fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n.footerNav{\r\n  height: 15vh;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n.navbarItem{\r\n  transition: .5s;\r\n  cursor: pointer;\r\n  font-size: .7rem;\r\n}\r\n.navbarItem:hover{\r\n  color:white;\r\n}\r\n.rowPlayerMp{\r\n    background-color:rgb(24,24,24);\r\n    position: fixed;\r\n    width: 100%;\r\n    margin: 0%;\r\n    bottom: 0;\r\n    line-height: 7vh;\r\n    top: 70%;\r\n}\r\n.progress {\r\n  position: absolute;\r\n  top: 96%;\r\n  width: 50vw;\r\n  height: 1vh;\r\n  left: 30%;\r\n  background: rgb(24,24,24);\r\n}\r\n#progress-amount {\r\n  display: block;\r\n  height: 100%;\r\n  background-color: white;\r\n  width: 0%;\r\n}\r\n.playIcon{\r\n  font-size: 2rem;\r\n}\r\n.pauseIcon{\r\n  font-size: 2rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1wbGF5ZXIvdi1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsMkNBQTJDO0VBQzNDLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUEsd0JBQXdCO0FBRXhCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92LXBsYXllci92LXBsYXllci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwb3RpZnlMb2dve1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jc2lkZWJhckNvbGxhcHNlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxufVxyXG4udmVydGljYWwtbmF2IHtcclxuICBtaW4td2lkdGg6IDE3cmVtO1xyXG4gIHdpZHRoOiAxN3JlbTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3JlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLyogZm9yIHRvZ2dsZSBiZWhhdmlvciAqL1xyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE3cmVtO1xyXG59XHJcblxyXG4jY29udGVudC5hY3RpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NXB4KSB7XHJcbiAgI3NpZGViYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAjY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgI2NvbnRlbnQuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4udGV4dC11cHBlcmNhc2Uge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5uYXZiYXJCYWNrZ3JvdW5kLCAuc29uZ0xpc3RCYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LDI0LDI0KTtcclxufVxyXG4ubmF2YmFySXRlbXN7XHJcbiAgICBtYXJnaW46IDIlIGF1dG8gIWltcG9ydGFudDsgICBcclxufVxyXG4uU0xUaXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuLnNvbmdzUm93e1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5mcm9udFNvbmd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG4uZnJvbnRTb25nOmhvdmVye1xyXG4gIG9wYWNpdHk6IC40O1xyXG59XHJcbi5zb25nQ2FyZHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLlNDVGV4dHtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLlNDVGV4dDpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXJDYXRlZ29yaWVze1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLm5hdmJhckNhdGVnb3JpZXM6aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXZiYXJTb25nc3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5uYXZiYXJTb25nczpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNvbmdWaWV3SW1ne1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuLnNvbmdWaWV3e1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbn1cclxuLnNvbmdWaWV3VGV4dHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG4uc29uZ1ZpZXdUZXh0OmhvdmVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yb3dQbGF5ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBib3R0b206IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDd2aDtcclxufVxyXG5cclxuLnBsYXllclNvbmdUaXRsZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMSU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLnBsYXllclNvbmdBdXRvcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MSU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ucGxheWVyU29uZ1RpdGxlOmhvdmVye1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5wbGF5ZXJTb25nQXV0b3I6aG92ZXJ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuLnBsYXllckljb257XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG4ucGxheWVySWNvbjpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNvbmdWaWV3VGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGxheUJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAxLjJyZW07XHJcbiAgd2lkdGg6IDE1dnc7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG4uZm9vdGVyTmF2Q29se1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXZoO1xyXG59XHJcbi5mb290ZXJOYXZCYW5uZXJ7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcbi5mb290ZXJOYXZ7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm5hdmJhckl0ZW17XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IC43cmVtO1xyXG59XHJcbi5uYXZiYXJJdGVtOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5yb3dQbGF5ZXJNcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0LDI0LDI0KTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3dmg7XHJcbiAgICB0b3A6IDcwJTtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDk2JTtcclxuICB3aWR0aDogNTB2dztcclxuICBoZWlnaHQ6IDF2aDtcclxuICBsZWZ0OiAzMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI0LDI0LDI0KTtcclxufVxyXG5cclxuI3Byb2dyZXNzLWFtb3VudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAwJTtcclxufVxyXG4ucGxheUljb257XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5wYXVzZUljb257XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/v-player/v-player.component.ts":
/*!************************************************!*\
  !*** ./src/app/v-player/v-player.component.ts ***!
  \************************************************/
/*! exports provided: VPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VPlayerComponent", function() { return VPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




let VPlayerComponent = class VPlayerComponent {
    constructor(_path, _data) {
        this._path = _path;
        this._data = _data;
        this.player = document.getElementById("player");
        function playOrPause() {
            if (this.player.paused) {
                this.player.play();
                document.querySelector(".body > app-root > app-v-player > div.d-none.d-md-block > div > div:nth-child(3) > p > i").className = "far fa-pause-circle text-gray pauseIcon playerIcon";
            }
            else {
                this.player.pause();
                document.querySelector(".body > app-root > app-v-player > div.d-none.d-md-block > div > div:nth-child(3) > p > i").className = "far fa-play-circle text-gray playIcon playerIcon";
            }
        }
        function changeColor() {
            document.querySelector("#prueba").className = "btn btn-success";
        }
    }
    ngOnInit() {
        this._path.url.subscribe(url => {
            // Code to get the new notification data 
            // and display it
            this.id = this._path.snapshot.params.id;
            this.songList = this._data.songList;
            for (let song of this.songList) {
                if (song["id"] == this.id) {
                    this.song = song;
                }
            }
        });
        this.player.addEventListener('timeupdate', function () {
            var duration = this.player.duration;
            if (duration > 0) {
                document.getElementById('progress-amount').style.width = ((this.player.currentTime / duration) * 100) + "%";
            }
        });
    }
    ngOnChanges() {
        //   this.player.addEventListener('timeupdate', function () {
        //     var duration = this.player.duration;
        //     if (duration > 0) {
        //       document.getElementById('progress-amount').style.width = ((this.player.currentTime / duration) * 100) + "%";
        //     }
        //   });
        // }
    }
};
VPlayerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
VPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-v-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-player/v-player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-player.component.css */ "./src/app/v-player/v-player.component.css")).default]
    })
], VPlayerComponent);



/***/ }),

/***/ "./src/app/v-song-list/v-song-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/v-song-list/v-song-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spotifyLogo{\r\n    width: 30%;\r\n    cursor: pointer;\r\n}\r\n#sidebarCollapse {\r\n    width: 40px;\r\n    height: 40px;\r\n    background:black;\r\n}\r\n.vertical-nav {\r\n  min-width: 17rem;\r\n  width: 17rem;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\r\n  transition: all 0.4s;\r\n  background-color: black;\r\n}\r\n.page-content {\r\n  width: calc(100% - 17rem);\r\n  margin-left: 17rem;\r\n  transition: all 0.4s;\r\n}\r\n/* for toggle behavior */\r\n#sidebar.active {\r\n  margin-left: -17rem;\r\n}\r\n#content.active {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n@media (max-width: 765px) {\r\n  #sidebar {\r\n    margin-left: -17rem;\r\n  }\r\n  #sidebar.active {\r\n    margin-left: 0;\r\n  }\r\n  #content {\r\n    width: 100%;\r\n    margin: 0;\r\n  }\r\n  #content.active {\r\n    margin-left: 17rem;\r\n    width: calc(100% - 17rem);\r\n  }\r\n}\r\nbody {\r\n  background:black;\r\n  min-height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n.text-uppercase {\r\n  letter-spacing: 0.1em;\r\n}\r\n.text-gray {\r\n  color: #aaa;\r\n}\r\n.navbarBackground, .songListBackground{\r\n    background-color: rgb(24,24,24);\r\n}\r\n.navbarItems{\r\n    margin: 2% auto !important;   \r\n}\r\n.navbarItem:hover{\r\n    color:white;\r\n}\r\n.SLTitle{\r\n    font-weight: bolder;\r\n    font-family: 'Montserrat', sans-serif;\r\n    color:white;\r\n    padding-top: 5%;\r\n}\r\n.songsRow{\r\n    width: 95%;\r\n    text-align: left;\r\n    margin-left: 1%;\r\n}\r\n.frontSong{\r\n    width: 100%;\r\n    transition: .5s;\r\n}\r\n.frontSong:hover{\r\n  opacity: .4;\r\n}\r\n.songCard{\r\n  cursor: pointer;\r\n}\r\n.SCText{\r\n  transition: .5s;\r\n}\r\n.SCText:hover{\r\n  color: white;\r\n}\r\n.navbarCategories{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.navbarCategories:hover{\r\n  color: white;\r\n}\r\n.navbarSongs{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.navbarSongs:hover{\r\n  color: white;\r\n}\r\n.rowPlayer{\r\n  background-color: #444;\r\n  position: fixed;\r\n  width: 100%;\r\n  margin: 0%;\r\n  bottom: 0;\r\n  line-height: 7vh;\r\n}\r\n.playIcon{\r\n  font-size: 2.5rem;\r\n}\r\n.pauseIcon{\r\n  font-size: 2.5rem;\r\n}\r\n.playerSongTitle{\r\n  position: absolute;\r\n  top: 21%;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerSongAutor{\r\n  position: absolute;\r\n  top: 41%;\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerSongTitle:hover{\r\n  text-decoration: underline;\r\n}\r\n.playerSongAutor:hover{\r\n  color:white;\r\n}\r\n.playerIcon{\r\n  cursor: pointer;\r\n  transition: .5s;\r\n}\r\n.playerIcon:hover{\r\n  color: white;\r\n}\r\n.songViewTitle{\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n.playButton{\r\n  border-radius: 1.2rem;\r\n  width: 15vw;\r\n  position: relative;\r\n  left: 30%;\r\n  margin-top: 3%;\r\n  margin-bottom: 120%;\r\n}\r\n.footerNavCol{\r\n  line-height: 15vh;\r\n}\r\n.footerNavBanner{\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n.footerNav{\r\n  height: 15vh;\r\n  width: 90%;\r\n  margin: 0 auto;\r\n}\r\n.navbarItem{\r\n  transition: .5s;\r\n  cursor: pointer;\r\n  font-size: .7rem;\r\n}\r\n.navbarItem:hover{\r\n  color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1zb25nLWxpc3Qvdi1zb25nLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsMkNBQTJDO0VBQzNDLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUEsd0JBQXdCO0FBRXhCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYO0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC92LXNvbmctbGlzdC92LXNvbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwb3RpZnlMb2dve1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jc2lkZWJhckNvbGxhcHNlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxufVxyXG4udmVydGljYWwtbmF2IHtcclxuICBtaW4td2lkdGg6IDE3cmVtO1xyXG4gIHdpZHRoOiAxN3JlbTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMTdyZW0pO1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3JlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG5cclxuLyogZm9yIHRvZ2dsZSBiZWhhdmlvciAqL1xyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICBtYXJnaW4tbGVmdDogLTE3cmVtO1xyXG59XHJcblxyXG4jY29udGVudC5hY3RpdmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2NXB4KSB7XHJcbiAgI3NpZGViYXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xN3JlbTtcclxuICB9XHJcbiAgI3NpZGViYXIuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuICAjY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgI2NvbnRlbnQuYWN0aXZlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxN3JlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxN3JlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4udGV4dC11cHBlcmNhc2Uge1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLnRleHQtZ3JheSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbn1cclxuXHJcbi5uYXZiYXJCYWNrZ3JvdW5kLCAuc29uZ0xpc3RCYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LDI0LDI0KTtcclxufVxyXG4ubmF2YmFySXRlbXN7XHJcbiAgICBtYXJnaW46IDIlIGF1dG8gIWltcG9ydGFudDsgICBcclxufVxyXG4ubmF2YmFySXRlbTpob3ZlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbi5TTFRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG4uc29uZ3NSb3d7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4uZnJvbnRTb25ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLmZyb250U29uZzpob3ZlcntcclxuICBvcGFjaXR5OiAuNDtcclxufVxyXG4uc29uZ0NhcmR7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5TQ1RleHR7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5TQ1RleHQ6aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXZiYXJDYXRlZ29yaWVze1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLm5hdmJhckNhdGVnb3JpZXM6aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXZiYXJTb25nc3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5uYXZiYXJTb25nczpob3ZlcntcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJvd1BsYXllcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsaW5lLWhlaWdodDogN3ZoO1xyXG59XHJcbi5wbGF5SWNvbntcclxuICBmb250LXNpemU6IDIuNXJlbTtcclxufVxyXG4ucGF1c2VJY29ue1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcbi5wbGF5ZXJTb25nVGl0bGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjElO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5wbGF5ZXJTb25nQXV0b3J7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDElO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLnBsYXllclNvbmdUaXRsZTpob3ZlcntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4ucGxheWVyU29uZ0F1dG9yOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5wbGF5ZXJJY29ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLnBsYXllckljb246aG92ZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zb25nVmlld1RpdGxle1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnBsYXlCdXR0b257XHJcbiAgYm9yZGVyLXJhZGl1czogMS4ycmVtO1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTIwJTtcclxufVxyXG4uZm9vdGVyTmF2Q29se1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXZoO1xyXG59XHJcbi5mb290ZXJOYXZCYW5uZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mb290ZXJOYXZ7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLm5hdmJhckl0ZW17XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IC43cmVtO1xyXG59XHJcbi5uYXZiYXJJdGVtOmhvdmVye1xyXG4gIGNvbG9yOndoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/v-song-list/v-song-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/v-song-list/v-song-list.component.ts ***!
  \******************************************************/
/*! exports provided: VSongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSongListComponent", function() { return VSongListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");



let VSongListComponent = class VSongListComponent {
    constructor(_data) {
        this._data = _data;
        this.songList = this._data.songList;
    }
    ngOnInit() {
    }
};
VSongListComponent.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
VSongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-v-song-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-song-list/v-song-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-song-list.component.css */ "./src/app/v-song-list/v-song-list.component.css")).default]
    })
], VSongListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\agnes\Desktop\projectes\angularSpotify\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map