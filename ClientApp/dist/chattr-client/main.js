(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <nav class=\"navbar navbar-light bg-light\">\r\n    <a routerLink=\"/\" class=\"navbar-brand\">ChattR!</a>\r\n    <ul *ngIf=\"user != null\" class=\"nav justify-content-end\">\r\n      <li class=\"nav-item\" ngbDropdown>\r\n        <a class=\"nav-link dropdown-toggle\" routerLink ngbDropdownToggle>Hello, {{user.name}}!</a>\r\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n          <a (click)=\"logout()\" class=\"btn btn-default w-100\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.dropdownVisible = false;
        this.signingOut = false;
        userService.user$.subscribe(function (u) { return _this.user = u; });
    }
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.signingOut = true;
        var req = this.userService.signOut();
        req.subscribe(function () {
            _this.signingOut = false;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/lobby/lobby.component */ "./src/app/components/lobby/lobby.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/components/room/room.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _services_authorize_guard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authorize-guard.service */ "./src/app/services/authorize-guard.service.ts");
/* harmony import */ var _components_chat_stream_chat_stream_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat-stream/chat-stream.component */ "./src/app/components/chat-stream/chat-stream.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_7__["LobbyComponent"],
                _components_room_room_component__WEBPACK_IMPORTED_MODULE_8__["RoomComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"],
                _components_chat_stream_chat_stream_component__WEBPACK_IMPORTED_MODULE_11__["ChatStreamComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: "", canActivate: [_services_authorize_guard_service__WEBPACK_IMPORTED_MODULE_10__["AuthorizeGuardService"]], children: [
                            { path: "", pathMatch: "full", component: _components_lobby_lobby_component__WEBPACK_IMPORTED_MODULE_7__["LobbyComponent"] },
                            { path: "room/:id", component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_8__["RoomComponent"] }
                        ]
                    },
                    { path: "signin", component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_9__["SignInComponent"] }
                ]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chat-stream/chat-stream.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/chat-stream/chat-stream.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/chat-stream/chat-stream.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-stream/chat-stream.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messages != null; else loadingMessage\" class=\"message-stream\">\r\n  <div *ngFor=\"let message of messages\" class=\"message {{isOwnMessage(message) ? 'recieved text-right' : 'sent'}}\">\r\n    <div class=\"message-sender font-weight-light text-secondary\" *ngIf=\"!isOwnMessage(message)\">\r\n      {{message.senderName}}\r\n    </div>\r\n    <div class=\"h4\">\r\n      <span class=\"rounded px-3 {{isOwnMessage(message) ? 'text-info bg-dark' : 'text-primary bg-light'}}\">\r\n        {{message.text}}\r\n      </span>\r\n    </div>\r\n    <div class=\"message-sent-date font-weight-light text-muted\">\r\n      {{message.postedDate | date: 'MMM dd HH:mm'}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #loadingMessage>\r\n  <h2 class=\"text-center\">[ l o a d i n g . . . ]</h2>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/components/chat-stream/chat-stream.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-stream/chat-stream.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatStreamComponent", function() { return ChatStreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatStreamComponent = /** @class */ (function () {
    function ChatStreamComponent(userService) {
        this.userService = userService;
    }
    ChatStreamComponent.prototype.isOwnMessage = function (message) {
        return message.senderId === (this.userService.user && this.userService.user.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChatStreamComponent.prototype, "messages", void 0);
    ChatStreamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-stream',
            template: __webpack_require__(/*! ./chat-stream.component.html */ "./src/app/components/chat-stream/chat-stream.component.html"),
            styles: [__webpack_require__(/*! ./chat-stream.component.css */ "./src/app/components/chat-stream/chat-stream.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ChatStreamComponent);
    return ChatStreamComponent;
}());



/***/ }),

/***/ "./src/app/components/lobby/lobby.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/lobby/lobby.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/lobby/lobby.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/lobby/lobby.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8\" style=\"height: calc(100vh - 72px); overflow-y: auto\">\r\n    <form class=\"form-group row\" (ngSubmit)=\"sendMessage()\" #sendMessageForm=\"ngForm\">\r\n      <input required class=\"form-control col-8\" [(ngModel)]=\"chatMessage\" name=\"chatMessage\" autocomplete=\"off\" />\r\n      <button [disabled]=\"!sendMessageForm.valid\" class=\"btn btn-primary col-4\" type=\"submit\">Send</button>\r\n    </form>\r\n    <app-chat-stream [messages]=\"lobbyMessages\"></app-chat-stream>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col\">\r\n        <a class=\"btn btn-primary w-100 rounded-0\" [class.active]=\"activeTab === 'peeps'\" (click)=\"activeTab='peeps'\">Peeps ({{peeps === undefined ? '...' : peeps.length}})</a>\r\n      </div>\r\n      <div class=\"col\">\r\n        <a class=\"btn btn-primary w-100 rounded-0\" [class.active]=\"activeTab === 'rooms'\" (click)=\"activeTab='rooms'\">Rooms ({{rooms === undefined ? '...' : rooms.length}})</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"card\">\r\n          <ul class=\"list-group list-group-flush\">\r\n            <ng-container *ngIf=\"activeTab === 'peeps'\">\r\n              <li *ngFor=\"let person of peeps\" class=\"list-group-item\">{{person.username}}</li>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"activeTab === 'rooms'\">\r\n              <li *ngFor=\"let room of rooms\" class=\"list-group-item\">{{room.name}}</li>\r\n            </ng-container>\r\n          </ul>\r\n          <div *ngIf=\"activeTab === 'rooms'\">\r\n            <hr />\r\n            <form class=\"text-center\" #newRoomForm=\"ngForm\" (ngSubmit)=\"createRoom()\">\r\n              <div class=\"form-group\">\r\n                <label for=\"newRoomName\">Create your own room!</label>\r\n                <input required class=\"form-control\" placeholder=\"Give a fancy name for the room...\" [(ngModel)]=\"newRoomName\" name=\"newRoomName\" id=\"newRoomName\" />\r\n              </div>\r\n              <div class=\"form-group form-check\">\r\n                <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"newRoomIsPrivate\" name=\"newRoomIsPrivate\" id=\"newRoomIsPrivate\" />\r\n                <label for=\"newRoomIsPrivate\">...but is it <i>private</i>?</label>\r\n              </div>\r\n              <div *ngIf=\"newRoomIsPrivate\" class=\"form-group\">\r\n                <label for=\"newRoomPasskey\">Provide the secret passkey, then!</label>\r\n                <input required class=\"form-control\" placeholder=\"Only who know the secret can enter...\" [(ngModel)]=\"newRoomPasskey\" name=\"newRoomPasskey\" id=\"newRoomPasskey\" />\r\n              </div>\r\n              <button type=\"submit\" [disabled]=\"!newRoomForm.valid\" class=\"btn btn-success w-100 m-1\">Create it!</button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/lobby/lobby.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/lobby/lobby.component.ts ***!
  \*****************************************************/
/*! exports provided: LobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyComponent", function() { return LobbyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hub_builder_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/hub-builder.service */ "./src/app/services/hub-builder.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LobbyComponent = /** @class */ (function () {
    function LobbyComponent(hubBuilder) {
        var _this = this;
        this.activeTab = 'peeps';
        this.newRoomIsPrivate = false;
        this.lobbyLoading = false;
        this.connection = hubBuilder.getConnection();
        this.connection.on("SetUsers", function (users) { return _this.setUsers(users); });
        this.connection.on("UserEntered", function (user) { return _this.userEntered(user); });
        this.connection.on("UserLeft", function (userId) { return _this.userLeft(userId); });
        this.connection.on("SetMessages", function (messages) { return _this.setMessages(messages); });
        this.connection.on("RecieveMessage", function (message) { return _this.recieveMessage(message); });
        this.connection.on("SendMessages", function (_) { return _this.sendMessage(); });
        this.connection.on("CreateRoom", function (room) { return _this.createRoom(room); });
        this.peeps = [];
        this.lobbyMessages = [];
        this.rooms = [];
        this.connection.start().then(function () {
            _this.connection.invoke("EnterLobby");
        });
    }
    LobbyComponent.prototype.ngOnInit = function () {
    };
    LobbyComponent.prototype.ngOnDestroy = function () {
        // When the component is destroyed (e.g. in the case of navigation), close the connection.
        // Do not forget to unsubscribe the event handler, otherwise we will have memory leak!
        this.connection.off("SetUsers");
        this.connection.off("UserEntered");
        this.connection.off("UserLeft");
        this.connection.off("SetMessages");
        this.connection.off("RecieveMessage");
        this.connection.off("SendMessages");
        this.connection.off("CreateRoom");
        this.connection.stop(); // The stop() function is actually asynchronous, it returns a Promise.
    };
    LobbyComponent.prototype.recieveMessage = function (message) {
        this.lobbyMessages.splice(0, 0, message);
    };
    LobbyComponent.prototype.userEntered = function (user) {
        this.peeps.push(user);
    };
    LobbyComponent.prototype.userLeft = function (userId) {
        var _this = this;
        this.peeps.forEach(function (user, index) {
            if (user.id == userId)
                _this.peeps.splice(index, 1);
        });
    };
    LobbyComponent.prototype.setUsers = function (users) {
        this.peeps = users;
    };
    LobbyComponent.prototype.setMessages = function (messages) {
        this.lobbyMessages = messages;
    };
    LobbyComponent.prototype.sendMessage = function () {
        // We can send message to the server with the call of invoke function.
        this.connection.invoke("SendMessageToLobby", this.chatMessage);
        // Also, the request is a Promise, so event handlers could subscribe for it, which is fired when
        // the server confirmed the request (or an error was occured). The methods of the server can
        // return Task<T> instead of Task, in this case we get the answer object itself in the event ekkor
        // handler of the answer:
        // this.connection.invoke("SendMessageToLobby", this.chatMessage)
        // .then((t: T) => {
        // console.log(t);
        // })
        // .catch(console.error);
        this.chatMessage = "";
    };
    LobbyComponent.prototype.createRoom = function (room) {
        // TODO: szoba létrehozása szerveren, majd navigáció a szoba útvonalára, szükség esetén megadni a passkey-t
      this.connection.invoke("CreateRoom", this.newRoomName);
      this.rooms.push(room);
      this.newRoomName = "";
    };
    LobbyComponent.prototype.roomCreated = function (room) {
        // TODO: szobalista frissítése
    };
    LobbyComponent.prototype.roomAbandoned = function (roomName) {
        // TODO: szobalista frissítése
    };
    LobbyComponent.prototype.enterRoom = function (room) {
        // TODO: navigáció a szoba útvonlára, figyelve, hogy kell-e megadni passkey-t
    };
    LobbyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lobby',
            template: __webpack_require__(/*! ./lobby.component.html */ "./src/app/components/lobby/lobby.component.html"),
            styles: [__webpack_require__(/*! ./lobby.component.css */ "./src/app/components/lobby/lobby.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hub_builder_service__WEBPACK_IMPORTED_MODULE_1__["HubBuilderService"]])
    ], LobbyComponent);
    return LobbyComponent;
}());



/***/ }),

/***/ "./src/app/components/room/room.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/room/room.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/room/room.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/room/room.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  room works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/room/room.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/room/room.component.ts ***!
  \***************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomComponent = /** @class */ (function () {
    function RoomComponent(route) {
        var _this = this;
        this.route = route;
        route.params.subscribe(function (p) {
            _this.id = p["id"];
        });
    }
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/components/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\r\n  <form (ngSubmit)=\"signin()\" #form=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"username\">Username</label>\r\n      <input class=\"form-control\" autocomplete=\"off\" name=\"username\" id=\"username\" [(ngModel)]=\"username\" required />\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"password\">Password</label>\r\n      <input class=\"form-control\" type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" required #passwordModel=\"ngModel\" />\r\n    </div>\r\n\r\n    <button [disabled]=\"loading || !form.valid\" class=\"w-100 btn btn-primary\" type=\"submit\">Sign {{signUpVisible ? \"up\" : \"in\"}} to ChattR</button>\r\n\r\n    <ng-container *ngIf=\"signUpVisible;else:signUp\">\r\n      <button [disabled]=\"loading\" type=\"button\" class=\"w-100 my-2 btn btn-light\" (click)=\"signUpVisible = false; errors = null\">Have an account? Sign in here!</button>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"!signUpVisible\" #signUp>\r\n      <button [disabled]=\"loading\" type=\"button\" class=\"w-100 my-2 btn btn-light\" (click)=\"signUpVisible = true; errors = null\">No account? Sign up here!</button>\r\n    </ng-container>\r\n\r\n    <div *ngIf=\"errors\" class=\"text-center\">\r\n      Sorry, an error occured. Please, try again.\r\n      <div class=\"text-danger\" *ngFor=\"let error of errors\">\r\n        {{error}}\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService) {
        this.userService = userService;
        this.signUpVisible = false;
        this.loading = false;
        this.errors = undefined;
    }
    SignInComponent.prototype.signin = function () {
        var _this = this;
        var call = this.signUpVisible ? this.userService.signUp : this.userService.signIn;
        this.loading = true;
        this.errors = undefined;
        call.bind(this.userService)(this.username, this.password).subscribe(function () {
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
            if (error.error instanceof Array) {
                _this.errors = error.error;
            }
            else
                _this.errors = [error.statusText];
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/components/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/services/authorize-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/authorize-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthorizeGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuardService", function() { return AuthorizeGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorizeGuardService = /** @class */ (function () {
    function AuthorizeGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthorizeGuardService.prototype.canActivate = function () {
        var _this = this;
        if (this.userService.user)
            return true;
        return this.userService.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (!user) {
                _this.router.navigate(["/signin"]);
            }
            return !!user;
        }));
    };
    AuthorizeGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthorizeGuardService);
    return AuthorizeGuardService;
}());



/***/ }),

/***/ "./src/app/services/hub-builder.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/hub-builder.service.ts ***!
  \*************************************************/
/*! exports provided: HubBuilderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubBuilderService", function() { return HubBuilderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // We store all symbols (classes, constants, etc)
// exported from the package in the signalR object.
var HubBuilderService = /** @class */ (function () {
    function HubBuilderService() {
    }
    HubBuilderService.prototype.getConnection = function () {
        return new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl("/chattrhub")
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["LogLevel"].Information)
            .build();
    };
    HubBuilderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], HubBuilderService);
    return HubBuilderService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.gettingUser = false;
        this.userSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.userSubject$.subscribe(function (u) { return _this._user = u; });
        this._user$ = this.userSubject$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.tryGetUser();
    }
    Object.defineProperty(UserService.prototype, "user$", {
        get: function () { return this._user$; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "user", {
        get: function () { return this._user; },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.tryGetUser = function () {
        var _this = this;
        if (!this._user && !this.gettingUser) {
            this.gettingUser = true;
            this.http.get("/api/user").subscribe(function (user) {
                _this.gettingUser = false;
                _this.userSubject$.next(user);
                _this.onSignedIn(user);
            }, function (err) {
                console.error(err);
                _this.gettingUser = false;
                _this.userSubject$.next(undefined);
            });
        }
        return this._user$;
    };
    UserService.prototype.onSignedIn = function (user) {
        this.userSubject$.next(user);
        this.router.navigate(["/"]);
    };
    UserService.prototype.signIn = function (userName, password) {
        var _this = this;
        var req = this.http.post("/api/user/signin", { userName: userName, password: password }, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        req.subscribe(function (user) {
            _this.onSignedIn(user.body);
        }, console.error);
        return req;
    };
    UserService.prototype.signOut = function () {
        var _this = this;
        var req = this.http.post("api/user/signout", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        req.subscribe(function () {
            _this.userSubject$.next(undefined);
            _this.router.navigate(["/signin"]);
        }, console.error);
        return req;
    };
    UserService.prototype.signUp = function (userName, password) {
        var _this = this;
        var req = this.http.post("/api/user/signup", { userName: userName, password: password }, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        req.subscribe(function (user) {
            _this.onSignedIn(user.body);
        }, console.error);
        return req;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserService);
    return UserService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\sol\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
