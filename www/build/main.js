webpackJsonp([0],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/**
 * Created by laixiangran on 2016/8/7.
 * homepage：http://www.laixiangran.cn
 * 请求服务
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RequestService = /** @class */ (function () {
    function RequestService(http, appCtrl, tips, authService, config) {
        this.http = http;
        this.appCtrl = appCtrl;
        this.tips = tips;
        this.authService = authService;
        this.config = config;
        this.alertAlert = null;
    }
    /**
     * post请求
     * @param {string} url 请求路径
     * @param {*} body body
     * @param {boolean} [showLoader=true] 是否显示加载动画
     * @param {boolean} [isMock=false] 是否模拟请求
     * @returns {Observable<any>}
     */
    RequestService.prototype.post = function (url, body, showLoader, isMock) {
        var _this = this;
        if (body === void 0) { body = null; }
        if (showLoader === void 0) { showLoader = true; }
        if (isMock === void 0) { isMock = false; }
        var loader;
        if (showLoader) {
            loader = this.tips.loader();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.token || ''
        }), options = { headers: headers }, requesUrl = (isMock ? this.config.mockDomain : this.config.domain) + url;
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (subscriber) {
            _this.http.post(requesUrl, body && JSON.stringify(body), options).subscribe(function (serverData) {
                var id = setTimeout(function () {
                    clearTimeout(id);
                    _this.tips.dismiss(loader);
                });
                subscriber.next(serverData);
                subscriber.complete();
            }, function (error) {
                var id = setTimeout(function () {
                    clearTimeout(id);
                    _this.tips.dismiss(loader);
                });
                _this.handlerError('post', error, url, body, showLoader, isMock, subscriber);
            });
        });
    };
    /**
     * get请求
     * @param {string} url 请求路径
     * @param {boolean} [showLoader=true] 是否显示加载动画
     * @param {boolean} [isMock=false] 是否模拟请求
     * @returns {Observable<any>}
     */
    RequestService.prototype.get = function (url, showLoader, isMock) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        if (isMock === void 0) { isMock = false; }
        var loader;
        if (showLoader) {
            loader = this.tips.loader();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.token || ''
        }), options = { headers: headers }, requesUrl = (isMock ? this.config.mockDomain : this.config.domain) + url;
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (subscriber) {
            _this.http.get(requesUrl, options).subscribe(function (serverData) {
                var id = setTimeout(function () {
                    clearTimeout(id);
                    _this.tips.dismiss(loader);
                });
                subscriber.next(serverData);
                subscriber.complete();
            }, function (error) {
                var id = setTimeout(function () {
                    clearTimeout(id);
                    _this.tips.dismiss(loader);
                });
                _this.handlerError('get', error, url, null, showLoader, isMock, subscriber);
            });
        });
    };
    /**
     * delete请求
     * @param {string} url 请求路径
     * @param {boolean} [showLoader=true] 是否显示加载动画
     * @param {boolean} [isMock=false] 是否模拟请求
     * @returns {Observable<any>}
     */
    RequestService.prototype.delete = function (url, showLoader, isMock) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        if (isMock === void 0) { isMock = false; }
        var loader;
        if (showLoader) {
            loader = this.tips.loader();
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': this.authService.token || ''
        }), options = { headers: headers }, requesUrl = (isMock ? this.config.mockDomain : this.config.domain) + url;
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (subscriber) {
            _this.http.delete(requesUrl, options).subscribe(function (serverData) {
                var id = setTimeout(function () {
                    clearTimeout(id);
                    _this.tips.dismiss(loader);
                });
                subscriber.next(serverData);
                subscriber.complete();
            }, function (error) {
                var id = setTimeout(function () {
                    clearTimeout(id);
                    _this.tips.dismiss(loader);
                });
                _this.handlerError('delete', error, url, null, showLoader, isMock, subscriber);
            });
        });
    };
    /**
     * 请求出错之后的处理
     * @param {string} type 请求类型（post or get）
     * @param {HttpErrorResponse} error 错误对象
     * @param {string} url 请求路径
     * @param {any} obj 请求body
     * @param {boolean} showLoader 是否显示加载动画
     * @param {boolean} isMock 是否模拟请求
     * @param {Subscriber} subscriber 当前请求的订阅对象
     */
    RequestService.prototype.handlerError = function (type, error, url, obj, showLoader, isMock, subscriber) {
        var _this = this;
        var alertOptions = null;
        if (error.status === 0) {
            alertOptions = {
                title: '连接超时',
                message: '请检查网络是否已经断开了！',
                buttons: ['确定']
            };
        }
        else if (error.status === 401) {
            alertOptions = {
                title: '未登录',
                message: '马上去登录！',
                buttons: [{
                        text: '确定',
                        handler: function () {
                            _this.authService.removeToken().then(function () {
                                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
                            });
                        }
                    }]
            };
        }
        else if (error.status === 404) {
            alertOptions = {
                title: '请求未找到',
                message: '请求路径出错了，请联系开发人员！',
                buttons: ['确定']
            };
            if (!isMock) {
                if (this.config.isDev || this.config.isTest) {
                    isMock = true;
                    if (type === 'post') {
                        this.post(url, obj, showLoader, isMock).subscribe(function (data) {
                            subscriber.next(data);
                            subscriber.complete();
                        });
                    }
                    else if (type === 'get') {
                        this.get(url, showLoader, isMock).subscribe(function (data) {
                            subscriber.next(data);
                            subscriber.complete();
                        });
                    }
                    else if (type === 'delete') {
                        this.delete(url, showLoader, isMock).subscribe(function (data) {
                            subscriber.next(data);
                            subscriber.complete();
                        });
                    }
                    return;
                }
            }
        }
        else {
            alertOptions = {
                title: '系统出错了',
                message: error.message || 'Server Error',
                buttons: ['确定']
            };
        }
        if (this.alertAlert) {
            this.alertAlert.dismiss().then(function () {
                _this.alertAlert = _this.tips.alert(alertOptions);
            });
        }
        else {
            this.alertAlert = this.tips.alert(alertOptions);
        }
        subscriber.error(error);
        subscriber.complete();
        throw error;
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_4__tips_service__["a" /* TipsService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__config_service__["a" /* ConfigService */]])
    ], RequestService);
    return RequestService;
}());

//# sourceMappingURL=request.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(40);
/**
 * Created by laixiangran on 2016/8/7.
 * homepage：http://www.laixiangran.cn
 * 管理令牌与用户信息服务
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(storage, config) {
        this.storage = storage;
        this.config = config;
        this.userInfoItemName = this.config.userInfoItemName; // 保存用户信息的key
        this.tokenItemName = this.config.tokenItemName; // 保存令牌的key
        Promise.all([this.getUserInfo(), this.getToken()]).then(function () { });
    }
    AuthService.prototype.setToken = function (value) {
        this.token = value;
        return this.storage.set(this.tokenItemName, value);
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        return this.storage.get(this.tokenItemName).then(function (value) {
            _this.token = value;
            return _this.token;
        });
    };
    AuthService.prototype.removeToken = function () {
        this.token = null;
        return this.storage.remove(this.tokenItemName);
    };
    AuthService.prototype.setUserInfo = function (value) {
        this.userInfo = value;
        return this.storage.set(this.userInfoItemName, value);
    };
    AuthService.prototype.getUserInfo = function () {
        var _this = this;
        return this.storage.get(this.userInfoItemName).then(function (value) {
            _this.userInfo = value;
            return _this.userInfo;
        });
    };
    AuthService.prototype.removeUserInfo = function () {
        this.userInfo = null;
        return this.storage.remove(this.userInfoItemName);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* ConfigService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_config_service__ = __webpack_require__(40);
/**
 * Created by laixiangran on 2016/8/6.
 * homepage：http://www.laixiangran.cn
 * 登录页面（组件）
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, platform, network, statusBar, config, loginService, tips, authService, menu) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.network = network;
        this.statusBar = statusBar;
        this.config = config;
        this.loginService = loginService;
        this.tips = tips;
        this.authService = authService;
        this.menu = menu;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menu.enable(false); // 禁用侧边菜单栏
        this.statusBar.backgroundColorByHexString(this.config.loginStatusBarColor);
        // 监听键盘显示/隐藏事件
        this.content.setScrollElementStyle('overflow-y', 'hidden');
        window.addEventListener('native.keyboardshow', function (e) {
            _this.content.setScrollElementStyle('overflow-y', 'auto');
            _this.content.scrollToBottom();
        });
        window.addEventListener('native.keyboardhide', function (e) {
            _this.content.setScrollElementStyle('overflow-y', 'hidden');
            _this.content.scrollToTop();
        });
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.login = function (isValid) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        // if (isValid) {
        // 	if (this.config.network) {
        // 		this.loginService.login({
        // 			username: this.user.username,
        // 			password: Md5.hashStr(this.user.password)
        // 		}).subscribe((serverData: ServerData) => {
        // 			if (serverData.code === 'ok') {
        // 				Promise.all([this.authService.setToken(serverData.result.token), this.authService.setUserInfo(serverData.result.user)]).then(() => {
        // 					this.navCtrl.setRoot(TabsPage);
        // 				});
        // 			} else {
        // 				this.tips.alert({
        // 					title: '登录失败',
        // 					message: serverData.info,
        // 					buttons: ['确定']
        // 				});
        // 			}
        // 		}, (error: any) => {
        // 			this.tips.alert({
        // 				title: '登录失败',
        // 				message: error,
        // 				buttons: ['确定']
        // 			});
        // 		});
        // 	} else {
        // 		this.tips.alert({
        // 			title: '无网络连接',
        // 			message: '请检查网络是否断开了！',
        // 			buttons: ['确定']
        // 		});
        // 	}
        // } else {
        // 	this.tips.alert({
        // 		title: '温馨提示',
        // 		message: '必须输入用户名和密码！',
        // 		buttons: ['确定']
        // 	});
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], LoginPage.prototype, "content", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\login\login.html"*/'<ion-content>\n	<div class="login-content">\n		<div class="logo">\n			<img src="assets/images/login/logo.png" width="50%">\n		</div>\n		<div class="formDiv">\n			<form novalidate #loginForm="ngForm" autocomplete="off">\n				<ion-list>\n					<ion-item>\n						<ion-label color="primary">\n							<ion-icon name="md-person"></ion-icon>\n						</ion-label>\n						<ion-input type="text"\n						           name="name"\n						           #username="ngModel"\n						           [(ngModel)]="user.username"\n						           required></ion-input>\n					</ion-item>\n					<ion-item>\n						<ion-label color="primary">\n							<ion-icon name="md-lock"></ion-icon>\n						</ion-label>\n						<ion-input type="password"\n						           name="password"\n						           autocomplete="new-password"\n						           #password="ngModel"\n						           [(ngModel)]="user.password"\n						           required></ion-input>\n					</ion-item>\n				</ion-list>\n			</form>\n		</div>\n		<div class="loginBtnDiv">\n			<button ion-button full color="light" (click)="login(username.valid && password.valid)">登录</button>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_5__services_tips_service__["a" /* TipsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__(123);
/**
 * Created by laixiangran on 2016/8/6.
 * homepage：http://www.laixiangran.cn
 * 登录服务
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(requestService) {
        this.requestService = requestService;
    }
    /**
     * 登录
     * @param access
     * @returns {Observable<ServerData>}
     */
    LoginService.prototype.login = function (access) {
        return this.requestService.post('/UserController/login', access);
    };
    /**
     * 登出
     * @returns {Observable<ServerData>}
     */
    LoginService.prototype.logout = function () {
        return this.requestService.post('/UserController/logout');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules_rules__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tools_tools__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__patrol_patrol__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(statusBar, config) {
        this.statusBar = statusBar;
        this.config = config;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__rules_rules__["a" /* RulesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__tools_tools__["a" /* ToolsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_7__patrol_patrol__["a" /* PatrolPage */];
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.statusBar.backgroundColorByHexString(this.config.mainStatusBarColor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Tabs"])
    ], TabsPage.prototype, "mainTabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\tabs\tabs.html"*/'<!--  tab页面  -->\n<ion-tabs #mainTabs selectedIndex="0">\n	<ion-tab [root]="tab1Root" tabTitle="人脸对比" tabIcon="map"></ion-tab>\n	<ion-tab [root]="tab3Root" tabTitle="适配规则" tabIcon="cube"></ion-tab>\n	<ion-tab [root]="tab5Root" tabTitle="我的巡查" tabIcon="build"></ion-tab>\n	<ion-tab [root]="tab4Root" tabTitle="常用工具" tabIcon="build"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_config_service__["a" /* ConfigService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 238;

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 279;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(menu) {
        this.menu = menu;
    }
    SettingsPage.prototype.ngOnInit = function () {
        this.menu.enable(false);
        // StatusBar.backgroundColorByHexString("#4DC6F3");
    };
    SettingsPage.prototype.ngOnDestroy = function () {
        this.menu.enable(true);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\settings\settings.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>设置</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	this is settings page!\n\n</ion-content>\n\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = /** @class */ (function () {
    function MapPage(config, camera, http) {
        this.config = config;
        this.camera = camera;
        this.http = http;
        this.pictures = [];
        this.count = 0;
        // this.handlerPicture().then(() => {
        // 	this.getFace();
        // });
        // this.handlerPicture();
    }
    /**
     * 拍摄照片（使用 cordova-plugin-camera）
     */
    MapPage.prototype.getPicture = function () {
        var _this = this;
        this.count++;
        this.camera.getPicture().then(function (path) {
            _this.pictures.push({ path: path });
            if (_this.count === 2) {
                _this.handlerPicture();
            }
        }, function (err) {
            console.error(err);
        });
    };
    MapPage.prototype.handlerPicture = function () {
        var _this = this;
        var img1 = new Image();
        img1.src = this.pictures[0].path;
        img1.onload = function () {
            img1.width = 240;
            img1.height = 240;
            _this.image1 = _this.getBase64Image(img1);
        };
        var img2 = new Image();
        img2.src = this.pictures[1].path;
        img2.onload = function () {
            img2.width = 240;
            img2.height = 240;
            _this.image2 = _this.getBase64Image(img2);
        };
    };
    MapPage.prototype.getBase64Image = function (img) {
        console.log(this.canvas);
        var canvas = this.canvas.nativeElement;
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
        var dataURL = canvas.toDataURL('image/' + ext).replace('data:image/png;base64,', '');
        return dataURL;
    };
    MapPage.prototype.getFace = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8101',
            'Access-Control-Allow-Credentials': 'true'
        });
        var option = { headers: headers };
        var body = [
            {
                'image': this.image1,
                'image_type': 'BASE64',
                'face_type': 'LIVE',
                'quality_control': 'NONE'
            },
            {
                'image': this.image2,
                'image_type': 'BASE64',
                'face_type': 'IDCARD',
                'quality_control': 'NONE'
            }
        ];
        var params = JSON.stringify(body);
        this.http.post('https://aip.baidubce.com/rest/2.0/face/v3/match?access_token=24.bea83832ad385aedb1eeccb54ac5aa2b.2592000.1548384907.282335-15271148', params).subscribe(function (data) {
            _this.result = data.error_msg;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('canvas'),
        __metadata("design:type", Object)
    ], MapPage.prototype, "canvas", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-map',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\map\map.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="contact"></ion-icon>\n		</button>\n		<ion-title>人脸对比</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<div class="picture">\n		<button ion-button small (click)="getPicture()">拍照</button>\n	</div>\n	<div *ngIf="pictures.length> 0">\n		<ng-container *ngFor="let pic of pictures">\n			<img [src]="pic.path" alt="照片">\n		</ng-container>\n	</div>\n	<div>{{result}}</div>\n	<canvas #canvas style="display: none;"></canvas>\n	<button ion-button small (click)="getFace()">对比脸型</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClient"]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RulesPage = /** @class */ (function () {
    function RulesPage(tips, http, camera) {
        this.tips = tips;
        this.http = http;
        this.camera = camera;
        this.pictures = [];
        this.items = [
            {
                name: '天气预报',
                icon: 'partly-sunny',
                color: '#EA5854'
            },
            {
                name: '通讯录',
                icon: 'person',
                color: '#4FDDD1'
            }
        ];
    }
    /**
     * 拍摄照片（使用 cordova-plugin-camera）
     */
    RulesPage.prototype.getPicture = function () {
        var _this = this;
        this.camera.getPicture().then(function (path) {
            _this.pictures.push({ path: path });
        }, function (err) {
            console.error(err);
        });
    };
    /**
     * 删除图片
     * */
    RulesPage.prototype.deletePicture = function () {
        var _this = this;
        this.tips.confirm({
            message: "\u786E\u5B9A\u5220\u9664\u8BE5\u7167\u7247\u5417\uFF1F",
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.pictures.pop();
                    }
                }
            ]
        });
    };
    RulesPage.prototype.getToken = function () {
        console.log(1);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:8101',
            'Access-Control-Allow-Credentials': 'true'
        });
        var option = { headers: headers };
        this.http.post('https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=ewLZnPElfi25sAfG7a4ORcs0&client_secret=GIn9aMIsNdtbO8Y4fdtkGs5aZitNxKFg', null).subscribe(function (data) {
            console.log(data);
        });
    };
    RulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-rules',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\rules\rules.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="contact"></ion-icon>\n		</button>\n		<ion-title>\n			硬件测试\n		</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<button ion-button small (click)="getToken()">获取Access Token</button>\n	<a href="https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=ewLZnPElfi25sAfG7a4ORcs0&client_secret=GIn9aMIsNdtbO8Y4fdtkGs5aZitNxKFg">获取</a>\n	<button ion-button small>对比脸型</button>\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\rules\rules.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_tips_service__["a" /* TipsService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["HttpClient"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], RulesPage);
    return RulesPage;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subpages_weatherReport_weatherReport__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subpages_realTimeTraffic_realTimeTraffic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subpages_radarMap_radar_map__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subpages_satelliteCloud_satellite_cloud__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolsPage = /** @class */ (function () {
    function ToolsPage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.items = [
            {
                name: '天气预报',
                icon: 'partly-sunny',
                color: '#EA5854',
                component: __WEBPACK_IMPORTED_MODULE_2__subpages_weatherReport_weatherReport__["a" /* WeatherReportPage */]
            },
            {
                name: '实时交通',
                icon: 'subway',
                color: '#FC9300',
                component: __WEBPACK_IMPORTED_MODULE_3__subpages_realTimeTraffic_realTimeTraffic__["a" /* RealTimeTrafficPage */]
            },
            {
                name: '雷达图',
                icon: 'analytics',
                color: '#27ea71',
                component: __WEBPACK_IMPORTED_MODULE_4__subpages_radarMap_radar_map__["a" /* RadarMapPage */]
            },
            {
                name: '卫星云图',
                icon: 'cloudy',
                color: '#3eb1fc',
                component: __WEBPACK_IMPORTED_MODULE_5__subpages_satelliteCloud_satellite_cloud__["a" /* SatelliteCloudPage */]
            }
        ];
    }
    ToolsPage.prototype.itemSelected = function (item) {
        this.navCtrl.push(item.component);
    };
    ToolsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tools',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\tools\tools.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-buttons>\n\n			<button ion-button menuToggle>\n\n				<ion-icon name="contact"></ion-icon>\n\n			</button>\n\n		</ion-buttons>\n\n		<ion-title>\n\n			常用工具\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n	<div class="tools_itme" *ngFor="let item of items;" (click)="itemSelected(item)">\n\n		<span class="item_icon" [style.background-color]="item.color">\n\n			<span>\n\n				<ion-icon [name]="item.icon"></ion-icon>\n\n			</span>\n\n		</span>\n\n		<span>{{item.name}}</span>\n\n		<span>\n\n			<ion-icon name="arrow-forward"></ion-icon>\n\n		</span>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\tools\tools.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], ToolsPage);
    return ToolsPage;
}());

//# sourceMappingURL=tools.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_request_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_e_ngx_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_e_ngx_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_e_ngx_services__);
/**
 * Created by laixiangran on 2017/3/22.
 * homepage：http://www.laixiangran.cn
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeatherReportPage = /** @class */ (function () {
    function WeatherReportPage(rs, changeDetector, menu, statusBar, config, amapWebService, geolocationService, transform) {
        this.rs = rs;
        this.changeDetector = changeDetector;
        this.menu = menu;
        this.statusBar = statusBar;
        this.config = config;
        this.amapWebService = amapWebService;
        this.geolocationService = geolocationService;
        this.transform = transform;
        this.weatherType = 'fine';
        this.dayType = 'day';
        this.weekArr = ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
    }
    WeatherReportPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.menu.enable(false);
        // 简单判断白天及黑夜，18：00 - 6：00算黑夜
        if (new Date().getHours() >= 6 && new Date().getHours() < 18) {
            this.dayType = 'day';
        }
        else {
            this.dayType = 'night';
        }
        this.statusBar.backgroundColorByHexString('#0f69bd');
        var options = {
            enableHighAccuracy: true
        };
        this.geolocationService.getCurrentPosition(options).subscribe(function (positionResult) {
            if (positionResult.code === 'ok') {
                var currLocation = _this.transform.gcj2wgs(positionResult.result.position.coords.longitude, positionResult.result.position.coords.latitude);
                _this.currentPosition = currLocation.lng + "," + currLocation.lat;
                _this.amapWebService.regeocode({ location: _this.currentPosition }).subscribe(function (cityInfoResult) {
                    if (cityInfoResult.status === '1') {
                        _this.cityInfo = cityInfoResult.regeocode;
                        _this.amapWebService.weatherInfo({ city: _this.cityInfo.addressComponent.adcode, extensions: 'all' }).subscribe(function (weatherInfoResult) {
                            if (weatherInfoResult.status === '1') {
                                _this.weatherReport = weatherInfoResult.forecasts[0];
                                _this.live = _this.weatherReport.casts[0];
                                _this.forecasts = _this.weatherReport.casts.slice(1);
                                if (_this.live[_this.dayType + "weather"].indexOf('晴') >= 0) {
                                    _this.weatherType = 'fine';
                                    _this.statusBar.backgroundColorByHexString('#0f69bd');
                                }
                                else {
                                    _this.weatherType = 'cloudy';
                                    _this.statusBar.backgroundColorByHexString('#4b5967');
                                }
                                _this.changeDetector.detectChanges();
                            }
                        });
                    }
                });
            }
        });
    };
    WeatherReportPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
        this.statusBar.backgroundColorByHexString(this.config.mainStatusBarColor);
    };
    WeatherReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weather-report',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\tools\subpages\weatherReport\weatherReport.html"*/'<ion-header no-border>\n    <ion-navbar [color]="\'weather-\' + weatherType"></ion-navbar>\n</ion-header>\n<ion-content [class]="\'weather-\' + weatherType">\n    <header>\n        <p class="city">\n            {{weatherReport ? weatherReport.city : \'--\'}}\n        </p>\n        <p class="weather">\n            {{live ? live[dayType + \'weather\'] : \'--\'}}\n        </p>\n        <p class="temp">\n            &nbsp;{{live ? live[dayType + \'temp\'] + \'°\' : \'--°\'}}\n        </p>\n        <p class="elseInfo">\n            <span class="weathertime">\n                {{live ? live.date : \'--\'}}&nbsp;\n                {{live ? weekArr[live.week] : \'--\'}}&nbsp;\n                今天\n            </span>\n            <span class="weathertemp">\n                <span [style.color]="dayType != \'day\' ? \'rgba(255,255,255,0.6)\' : \'\'">\n                    {{live ? live.daytemp : \'--\'}}\n                </span>\n                &nbsp;&nbsp;\n                <span [style.color]="dayType != \'night\' ? \'rgba(255,255,255,0.6)\' : \'\'">\n                    {{live ? live.nighttemp : \'--\'}}\n                </span>\n            </span>\n        </p>\n    </header>\n    <article padding>\n        <p>\n            <ion-row *ngFor="let fore of forecasts;">\n                <ion-col width-25>\n                    <span>\n                        {{fore.date}}\n                    </span>\n                </ion-col>\n                <ion-col width-25>\n                    <span>\n                        {{weekArr[fore.week]}}\n                    </span>\n                </ion-col>\n                <ion-col width-25>\n                    <span>\n                         {{fore[dayType + \'weather\']}}\n                    </span>\n                </ion-col>\n                <ion-col width-25>\n                    <span [style.color]="dayType != \'day\' ? \'rgba(255,255,255,0.6)\' : \'\'">\n                        {{fore.daytemp}}\n                    </span>\n                    &nbsp;&nbsp;\n                    <span [style.color]="dayType != \'night\' ? \'rgba(255,255,255,0.6)\' : \'\'">\n                        {{fore.nighttemp}}\n                    </span>\n                </ion-col>\n            </ion-row>\n        </p>\n    </article>\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\tools\subpages\weatherReport\weatherReport.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_request_service__["a" /* RequestService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_5_e_ngx_services__["AMapWebService"],
            __WEBPACK_IMPORTED_MODULE_5_e_ngx_services__["GeolocationService"],
            __WEBPACK_IMPORTED_MODULE_5_e_ngx_services__["TransformService"]])
    ], WeatherReportPage);
    return WeatherReportPage;
}());

//# sourceMappingURL=weatherReport.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_is_debug__ = __webpack_require__(327);
/**
 * Created by laixiangran on 2016/7/2
 * homepage：http://www.laixiangran.cn
 * 配置服务
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(appVersion, isDebug) {
        this.appVersion = appVersion;
        this.isDebug = isDebug;
        /**
         * login界面标题
         * */
        this.loginTitle = '阜南智慧河长信息管理系统';
        /**
         * 百度定位返回的地址替换文本
         * @type {string}
         */
        this.replaceText = '中国安徽省阜阳市阜南县';
        /**
         * app是否运行在浏览器上
         * @type {boolean}
         */
        this.isDev = !window.hasOwnProperty('cordova');
        /**
         * app运行在设备上的版本是否是debug版
         * @type {boolean}
         */
        this.isTest = true;
        /**
         * 模拟的api域名（请根据实际项目进行修改）
         * @type {string}
         */
        this.mockDomain = '/mockjsdata/16';
        /**
         * 浏览器开发的api域名（请根据实际项目进行修改）
         * @type {string}
         */
        this.devDomain = '';
        /**
         * 真实设备上测试的api域名（请根据实际项目进行修改）
         * @type {string}
         */
        this.testDomain = 'http://124.205.32.214:801';
        /**
         * 真实设备上生产的api域名（请根据实际项目进行修改）
         * @type {string}
         */
        this.prodDomain = 'http://demo.fycard.cn/apps/rcs';
        /**
         * 根据环境确定的api域名
         * @type {string}
         */
        this.domain = this.devDomain;
        /**
         * storage保存用户信息对应的key（请根据实际项目进行修改，规则：xxx_USERINFO）
         * @type {string}
         */
        this.userInfoItemName = 'FN_RCS_USERINFO';
        /**
         * storage保存令牌对应的key（请根据实际项目进行修改，规则：xxx_URMS_LOGIN_TOKEN）
         * @type {string}
         */
        this.tokenItemName = 'FN_RCS_URMS_LOGIN_TOKEN';
        /**
         * 当前网络是否连接
         * @type {boolean}
         */
        this.network = true;
        /**
         * APP启动时是否通过服务器检查了更新
         * @type {boolean}
         */
        this.isCheckNewVersion = false;
        /**
         * APP名称（请根据实际项目进行修改）
         * @type {any}
         */
        this.appName = 'fnrcsApp';
        /**
         * APP包名称（请根据实际项目进行修改）
         * @type {any}
         */
        this.packageName = 'fn.rcsApp.essence';
        /**
         * APP版本编码
         * @type {any}
         */
        this.versionCode = 10000;
        /**
         * APP版本号
         * @type {any}
         */
        this.versionNumber = '99.99.99';
        /**
         * 登录页面的状态栏颜色（请根据实际项目进行修改）
         * @type {string}
         */
        this.loginStatusBarColor = '#FFFFFF';
        /**
         * 主页的状态栏颜色（请根据实际项目进行修改）
         * @type {string}
         */
        this.mainStatusBarColor = '#1f3559';
        /**
         * 几何服务路径
         * @type {string}
         */
        this.geoUrl = 'http://124.205.32.214:6080/arcgis/rest/services/Utilities/Geometry/GeometryServer';
        /**
         * 乡级河道图层
         * @type {string}
         */
        this.villageRiversMapServer = 'http://124.205.32.214:6080/arcgis/rest/services/FUNAN10/MapServer/1';
        /**
         * 区县级河道图层
         * @type {string}
         */
        this.countyRiversMapServer = 'http://124.205.32.214:6080/arcgis/rest/services/FUNAN10/MapServer/2';
        /**
         * arcgis javascript API路径
         * @type {string}
         */
        this.gisApiUrl = 'http://124.205.32.214:8/arcgis_api/3.x/init.js';
        /**
         * esri.css路径
         * @type {string}
         */
        this.esriCSSUrl = 'http://124.205.32.214:8/arcgis_api/3.x/esri/css/esri.css';
        /**
         * 上传附件路径。最后拼接附件组id，AttachFileAction/upload/{groupId}
         * @type {string}
         */
        this.attachFileUploadUrl = this.domain + "/AttachFileAction/upload";
        /**
         * 预览文件
         * @type {string}
         */
        this.previewUrl = this.domain + "/AttachFileAction/preview";
        /**
         * 新版APP下载路径，实际使用时将 version 替换为最新版本号
         * @type {string}
         */
        this.newAppUrl = this.domain + "/assets/apk/app_version.apk";
        /**
         * 高德地图api key
         * @type {string}
         */
        this.amapApiKey = '3fe20cdb4d2c77b4892e665f7b8ee8cc';
        /**
         * 高德地图web key
         * @type {string}
         */
        this.amapWebApiKey = '55f909211b9950837fba2c71d0488db9';
        /**
         * 河长办负责人角色id
         */
        this.RCS_CHARGE_ROLE = 'dbba106fe8f944b6b9269f0690bc497c';
        /**
         * 河长办督查人角色id
         */
        this.RCS_SUP_ROLE = '9d1e3071f4d14819bfb9234d4aa6b373';
        /**
         * 河长角色id
         * @type {string}
         */
        this.CHIEF_ROLE = '602d95dfa9074556ad1f28554de19e1a';
        /**
         * 巡查员角色id
         */
        this.CHECK_ROLE = '1453adbdabcf463085fc73ad1c6eee3f';
        /**
         *  阜南县单位id
         * @type {string}
         */
        this.countyUnitId = '1';
        /**
         * 新消息事件主题（名称）
         * @type {string}
         */
        this.newMessageTopic = 'newMessage';
        /**
         * 更新消息事件主题（名称）
         * @type {string}
         */
        this.updateMessageTopic = 'updateMessage';
        /**
         * 改变x菜单事件主题（名称）
         */
        this.changeTabxTopic = 'changeTabx';
        /**
         * 消息本地缓存的key
         * @type {string}
         */
        this.messageCacheKey = 'messageCache';
        /**
         * 地图初始范围
         */
        this.mapArea = { xmax: 115.9588970000001, xmin: 115.26998200000003, ymax: 32.91169700000008, ymin: 32.40576700000005 };
        /**
         * 定位无效的数值
         * @type {number}
         */
        this.invalidLocation = 5e-324;
        /**
         * 百度人脸识别
         * @type {string}
         */
        this.baiduFace = 'https://aip.baidubce.com/rest/2.0/face/v3/match';
        /**
         * 百度 api
         * @type {string}
         */
        this.baiduAPI = 'ewLZnPElfi25sAfG7a4ORcs0';
        /**
         * 百度 Secret Key
         * @type {string}
         */
        this.SecretKey = 'GIn9aMIsNdtbO8Y4fdtkGs5aZitNxKFg ';
        this.access_token = '24.bea83832ad385aedb1eeccb54ac5aa2b.2592000.1548384907.282335-15271148';
    }
    /**
     * 获取APP基本信息
     * @memberof ConfigService
     */
    ConfigService.prototype.initAppInfo = function () {
        var _this = this;
        // 在虚拟机器或者真机上有效
        if (!this.isDev) {
            return Promise.all([
                this.appVersion.getAppName().then(function (appName) {
                    _this.appName = appName;
                }),
                this.appVersion.getPackageName().then(function (packageName) {
                    _this.packageName = packageName;
                }),
                this.appVersion.getVersionCode().then(function (versionCode) {
                    _this.versionCode = versionCode;
                }),
                this.appVersion.getVersionNumber().then(function (versionNumber) {
                    _this.versionNumber = versionNumber;
                }),
                // 监测是否在debug环境
                this.isDebug.getIsDebug().then(function (isDebug) {
                    _this.isTest = isDebug;
                    if (_this.isTest) {
                        _this.domain = _this.testDomain;
                    }
                    else {
                        _this.domain = _this.prodDomain;
                        _this.geoUrl = 'http://demo.fycard.cn/apps/arcgis/rest/services/Utilities/Geometry/GeometryServer';
                        _this.villageRiversMapServer = 'http://demo.fycard.cn/apps/arcgis/rest/services/FUNAN10/MapServer/1';
                        _this.countyRiversMapServer = 'http://demo.fycard.cn/apps/arcgis/rest/services/FUNAN10/MapServer/2';
                        _this.gisApiUrl = 'http://demo.fycard.cn/apps/arcgis_api/3.x/init.js';
                        _this.esriCSSUrl = 'http://demo.fycard.cn/apps/arcgis_api/3.x/esri/css/esri.css';
                    }
                    _this.newAppUrl = _this.domain + "/assets/apk/app_version.apk";
                    _this.attachFileUploadUrl = _this.domain + "/AttachFileAction/upload";
                    _this.previewUrl = _this.domain + "/AttachFileAction/preview";
                })
            ]);
        }
        else {
            return Promise.resolve(this.isDev);
        }
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_is_debug__["a" /* IsDebug */]])
    ], ConfigService);
    return ConfigService;
}());

//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealTimeTrafficPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/**
 * Created by laixiangran on 2017/3/22.
 * homepage：http://www.laixiangran.cn
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RealTimeTrafficPage = /** @class */ (function () {
    function RealTimeTrafficPage(config, menu) {
        this.config = config;
        this.menu = menu;
    }
    RealTimeTrafficPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    RealTimeTrafficPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
    };
    RealTimeTrafficPage.prototype.amapReady = function (amapComponent) { };
    RealTimeTrafficPage.prototype.amapDestroy = function ($event) { };
    RealTimeTrafficPage.prototype.amapLocation = function ($event) { };
    RealTimeTrafficPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-realtime-traffic',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\tools\subpages\realTimeTraffic\realTimeTraffic.html"*/'<ion-header>\n	<ion-navbar color="primary"></ion-navbar>\n</ion-header>\n<ion-content>\n	<essence-ion-amap\n			[apiKey]="config.amapApiKey"\n			[webApiKey]="config.amapWebApiKey"\n			[options]="amapOpts"\n			[showTraffic]="true"\n			[showCurrentLocation]="true"\n			(location)="amapLocation($event)"\n			(ready)="amapReady($event)"\n			(destroy)="amapDestroy($event)">\n	</essence-ion-amap>\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\tools\subpages\realTimeTraffic\realTimeTraffic.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"]])
    ], RealTimeTrafficPage);
    return RealTimeTrafficPage;
}());

//# sourceMappingURL=realTimeTraffic.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadarMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_e_ngx_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_e_ngx_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_e_ngx_services__);
/**
 * Created by monica on 2017/5/4.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RadarMapPage = /** @class */ (function () {
    function RadarMapPage(params, menu, datetimeService, tipsService) {
        this.params = params;
        this.menu = menu;
        this.datetimeService = datetimeService;
        this.tipsService = tipsService;
        this.nowDate = new Date();
        this.dataList = [];
        this.DateTime = this.nowDate.getFullYear() + (this.nowDate.getMonth() < 9 ? '-0' : '-') + (this.nowDate.getMonth() + 1) + (this.nowDate.getDate() < 10 ? '-0' : '-') + this.nowDate.getDate();
        this.maxDate = JSON.parse(JSON.stringify(this.DateTime));
        this.urlObj = {
            'qg': 'achn',
            'db': 'anec',
            'hb': 'ancn',
            'xb': 'anwc',
            'xn': 'aswc',
            'hz': 'accn',
            'hd': 'aecn',
            'hn': 'ascn' // 华南
        };
        this.httpUrl = "http://pi.weather.com.cn/i/product/pic/l/sevp_aoc_rdcp_sldas_ebref_" + this.urlObj.qg + "_l88_pi_";
        this.curStep = 0;
        this.playBoolean = false;
        this.operateText = '播放';
        this.fullImg = false;
        var curTime = new Date();
        curTime.setHours(curTime.getHours() - 1);
        this.initData(curTime);
        this.curImg = this.dataList[0];
        this.curImgTime = this.curImg.time;
    }
    RadarMapPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    RadarMapPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * 初始化数据
     */
    RadarMapPage.prototype.initData = function (curTime) {
        this.dataList = [];
        for (var i = 0; i < 24; i++) {
            for (var j = 9; j >= 0; j--) {
                curTime.setMinutes(j * 6);
                var date = new Date(curTime);
                date.setHours(date.getHours() - 8);
                var filename = this.datetimeService.dateFormat(date, 'yyyyMMddhhmm00') + '001.png';
                this.dataList.unshift({ url: filename, time: this.datetimeService.dateFormat(curTime, 'yyyy-MM-dd hh:mm') });
            }
            curTime.setHours(curTime.getHours() - 1);
        }
    };
    /**
     * 日期选择
     */
    RadarMapPage.prototype.selectDate = function () {
        var curTime = new Date(this.DateTime);
        curTime.setHours(new Date().getHours() - 1);
        curTime.setMinutes(new Date().getMinutes());
        this.initData(curTime);
        this.curImg = this.dataList[0];
    };
    /**
     * 点击事件
     */
    RadarMapPage.prototype.mouseOperate = function () {
        if (!this.playBoolean) {
            this.fullImg = true;
            this.operateText = '暂停';
            this.playBoolean = true;
            this.curStep++;
            this.curImg = this.dataList[this.curStep];
        }
        else {
            this.operateText = '播放';
            this.playBoolean = false;
            if (this.timer === null) {
                return;
            }
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * 上一张按钮点击事件
     */
    RadarMapPage.prototype.preImg = function () {
        this.curStep--;
        this.curImg = this.dataList[this.curStep];
    };
    /**
     * 下一张按钮点击事件
     */
    RadarMapPage.prototype.nextImg = function () {
        this.curStep++;
        this.curImg = this.dataList[this.curStep];
    };
    /**
     * 图片加载好之后
     * @param $event
     */
    RadarMapPage.prototype.imgLoad = function () {
        var _this = this;
        this.curImgTime = this.curImg.time;
        if (this.playBoolean) {
            this.curStep++;
            clearTimeout(this.timer);
            this.timer = null;
            if (this.curStep === this.dataList.length) {
                this.curStep = 0;
                this.playBoolean = false;
                this.tipsService.alert({ subTitle: '播放结束', enableBackdropDismiss: true });
                this.curImg = this.dataList[this.curStep];
            }
            else {
                this.timer = window.setTimeout(function () {
                    _this.curImg = _this.dataList[_this.curStep];
                }, 600);
            }
        }
    };
    RadarMapPage.prototype.fullView = function (isFull) {
        this.fullImg = isFull;
    };
    RadarMapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-radar-map',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\tools\subpages\radarMap\radar-map.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>雷达图</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div class="imgContainer">\n\n		<img [src]="httpUrl + curImg.url" alt="雷达图" (load)="imgLoad()" (click)="fullView(true)"/>\n\n	</div>\n\n	<div class="btnContainer">\n\n		<div class="dateBtnContainer">\n\n			<button ion-button small color="light" class="date">\n\n				<ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="DateTime" [max]="maxDate" cancelText="取消" doneText="确定" (ionChange)="selectDate()"></ion-datetime>\n\n			</button>\n\n			<button ion-button small (click)="mouseOperate()" class="play" [class.stop]="playBoolean">{{operateText}}</button>\n\n		</div>\n\n		<div class="checkBtnContainer" text-center>\n\n			<span (click)="preImg()" *ngIf="curStep !== 0" class="clickBtn">\n\n				<img src="./assets/images/tools/left.png">\n\n			</span>\n\n			<span  *ngIf="curStep == 0" disabled class="clickBtn">\n\n				<img src="./assets/images/tools/left.png">\n\n			</span>\n\n			<button ion-button round small color="light" class="date">\n\n				<span>{{curImgTime}}</span>\n\n			</button>\n\n			<span *ngIf="curStep !== dataList.length" (click)="nextImg()" class="clickBtn">\n\n				<img src="./assets/images/tools/right.png">\n\n			</span>\n\n			<span  *ngIf="curStep === dataList.length" disabled class="clickBtn">\n\n				<img src="./assets/images/tools/right.png">\n\n			</span>\n\n		</div>\n\n	</div>\n\n	<div *ngIf="fullImg" class="full_img" (click)="fullView(false)">\n\n		<ion-slides [zoom]="true">\n\n			<ion-slide>\n\n				<h1>{{curImgTime}}</h1>\n\n				<img [src]="httpUrl + curImg.url" alt="雷达图">\n\n			</ion-slide>\n\n		</ion-slides>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\tools\subpages\radarMap\radar-map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_3_e_ngx_services__["DateTimeService"],
            __WEBPACK_IMPORTED_MODULE_2__services_tips_service__["a" /* TipsService */]])
    ], RadarMapPage);
    return RadarMapPage;
}());

//# sourceMappingURL=radar-map.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SatelliteCloudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_e_ngx_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_e_ngx_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_e_ngx_services__);
/**
 * Created by monica on 2017/5/4.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SatelliteCloudPage = /** @class */ (function () {
    function SatelliteCloudPage(params, menu, datetimeService, tipsService) {
        this.params = params;
        this.menu = menu;
        this.datetimeService = datetimeService;
        this.tipsService = tipsService;
        this.nowDate = new Date();
        this.dataList = [];
        this.DateTime = this.nowDate.getFullYear() + (this.nowDate.getMonth() < 9 ? '-0' : '-') + (this.nowDate.getMonth() + 1) + (this.nowDate.getDate() < 10 ? '-0' : '-') + this.nowDate.getDate();
        this.maxDate = JSON.parse(JSON.stringify(this.DateTime));
        this.httpUrl = 'http://pi.weather.com.cn/i/product/pic/l/sevp_nsmc_wxcl_asc_e99_achn_lno_py_';
        this.curStep = 0;
        this.playBoolean = false;
        this.operateText = '播放';
        this.fullImg = false;
        var curTime = new Date();
        curTime.setHours(curTime.getHours() - 1);
        this.initData(curTime);
        this.curImg = this.dataList[0];
        this.curImgTime = this.curImg.time;
    }
    SatelliteCloudPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    SatelliteCloudPage.prototype.ionViewDidLeave = function () {
        this.menu.enable(true);
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * 初始化数据
     */
    SatelliteCloudPage.prototype.initData = function (curTime) {
        this.dataList = [];
        for (var i = 0; i < 24; i++) {
            for (var j = 1; j >= 0; j--) {
                if (j === 1) {
                    curTime.setMinutes(45);
                }
                else {
                    curTime.setMinutes(15);
                }
                var date = new Date(curTime);
                date.setHours(date.getHours() - 8);
                var filename = this.datetimeService.dateFormat(date, 'yyyyMMddhhmm00') + '000.jpg';
                this.dataList.unshift({ url: filename, time: this.datetimeService.dateFormat(curTime, 'yyyy-MM-dd hh:mm') });
            }
            curTime.setHours(curTime.getHours() - 1);
        }
    };
    /**
     * 日期选择
     */
    SatelliteCloudPage.prototype.selectDate = function () {
        var curTime = new Date(this.DateTime);
        curTime.setHours(new Date().getHours() - 1);
        curTime.setMinutes(new Date().getMinutes());
        this.initData(curTime);
        this.curImg = this.dataList[0];
    };
    /**
     * 点击事件
     */
    SatelliteCloudPage.prototype.mouseOperate = function () {
        if (!this.playBoolean) {
            this.fullImg = true;
            this.operateText = '暂停';
            this.playBoolean = true;
            this.curStep++;
            this.curImg = this.dataList[this.curStep];
        }
        else {
            this.operateText = '播放';
            this.playBoolean = false;
            if (this.timer === null) {
                return;
            }
            clearTimeout(this.timer);
            this.timer = null;
        }
    };
    /**
     * 上一张按钮点击事件
     */
    SatelliteCloudPage.prototype.preImg = function () {
        this.curStep--;
        this.curImg = this.dataList[this.curStep];
    };
    /**
     * 下一张按钮点击事件
     */
    SatelliteCloudPage.prototype.nextImg = function () {
        this.curStep++;
        this.curImg = this.dataList[this.curStep];
    };
    /**
     * 图片加载好之后
     * @param $event
     */
    SatelliteCloudPage.prototype.imgLoad = function () {
        var _this = this;
        this.curImgTime = this.curImg.time;
        if (this.playBoolean) {
            this.curStep++;
            clearTimeout(this.timer);
            this.timer = null;
            if (this.curStep === this.dataList.length) {
                this.curStep = 0;
                this.playBoolean = false;
                this.tipsService.alert({ subTitle: '播放结束', enableBackdropDismiss: true });
                this.curImg = this.dataList[this.curStep];
            }
            else {
                this.timer = window.setTimeout(function () {
                    _this.curImg = _this.dataList[_this.curStep];
                }, 600);
            }
        }
    };
    SatelliteCloudPage.prototype.fullView = function (isFull) {
        this.fullImg = isFull;
    };
    SatelliteCloudPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-satellite-cloud',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\tools\subpages\satelliteCloud\satellite-cloud.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n		<ion-title>卫星云图</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div class="imgContainer">\n\n		<img [src]="httpUrl + curImg.url" alt="卫星云图" (load)="imgLoad()" (click)="fullView(true)"/>\n\n	</div>\n\n	<div class="btnContainer">\n\n		<div class="dateBtnContainer">\n\n			<button ion-button small color="light" class="date">\n\n				<ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="DateTime" [max]="maxDate" cancelText="取消" doneText="确定" (ionChange)="selectDate()"></ion-datetime>\n\n			</button>\n\n			<button ion-button small (click)="mouseOperate()" class="play" [class.stop]="playBoolean">{{operateText}}</button>\n\n		</div>\n\n		<div class="checkBtnContainer" text-center>\n\n			<span (click)="preImg()" *ngIf="curStep !== 0" class="clickBtn">\n\n				<img src="./assets/images/tools/left.png">\n\n			</span>\n\n			<span  *ngIf="curStep === 0" disabled class="clickBtn">\n\n				<img src="./assets/images/tools/left.png">\n\n			</span>\n\n			<button ion-button round small color="light" class="date">\n\n				<span>{{curImgTime}}</span>\n\n			</button>\n\n			<span *ngIf="curStep !== dataList.length" (click)="nextImg()" class="clickBtn">\n\n				<img src="./assets/images/tools/right.png">\n\n			</span>\n\n			<span  *ngIf="curStep === dataList.length" disabled class="clickBtn">\n\n				<img src="./assets/images/tools/right.png">\n\n			</span>\n\n		</div>\n\n	</div>\n\n	<div *ngIf="fullImg" class="full_img" (click)="fullView(false)">\n\n		<ion-slides [zoom]="true">\n\n			<ion-slide>\n\n				<h1>{{curImgTime}}</h1>\n\n				<img [src]="httpUrl + curImg.url" alt="卫星云图">\n\n			</ion-slide>\n\n		</ion-slides>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\tools\subpages\satelliteCloud\satellite-cloud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_3_e_ngx_services__["DateTimeService"],
            __WEBPACK_IMPORTED_MODULE_2__services_tips_service__["a" /* TipsService */]])
    ], SatelliteCloudPage);
    return SatelliteCloudPage;
}());

//# sourceMappingURL=satellite-cloud.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatrolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subpages_patrol_record_patrol_record__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_config_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PatrolPage = /** @class */ (function () {
    function PatrolPage(navCtrl, config) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.items = [
            {
                name: '天气预报',
                icon: 'partly-sunny',
                color: '#EA5854'
            },
            {
                name: '通讯录',
                icon: 'person',
                color: '#4FDDD1'
            }
        ];
        this.problemListHeight = 0;
    }
    PatrolPage.prototype.onMapReady = function (event) {
    };
    /**
     * 展示巡查记录
     */
    PatrolPage.prototype.showPatrolRecord = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__subpages_patrol_record_patrol_record__["a" /* PatrolRecordPage */], 123);
    };
    /**
     * 展示问题列表
     */
    PatrolPage.prototype.showProblemList = function () {
        if (this.problemListHeight === 0) {
            this.problemListHeight = this.content.contentHeight - 82;
        }
        else {
            this.problemListHeight = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], PatrolPage.prototype, "content", void 0);
    PatrolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-patrol',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\patrol\patrol.html"*/'<ion-header>\n	<ion-navbar color="dark">\n		<button ion-button menuToggle icon-only>\n			<ion-icon name=\'wode\'></ion-icon>\n		</button>\n		<ion-buttons end>\n			<button type="button" ion-button>\n				历史巡查\n			</button>\n		</ion-buttons>\n		<ion-title>当前巡查</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="curr-patrol-info" (click)="showPatrolRecord()">\n		<ion-grid>\n			<ion-row>\n				<ion-col>\n					<div class="info-item">\n						<div>\n							<div class="info-item-num">\n								12<span>km</span>\n							</div>\n							<div class="info-item-text">\n								巡查里程\n							</div>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col>\n					<div class="info-item">\n						<div>\n							<div class="info-item-num">\n								123<span>次</span>\n							</div>\n							<div class="info-item-text">\n								打卡次数\n							</div>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col>\n					<div class="info-item">\n						<div>\n							<div class="info-item-num">\n								32321<span>h</span>\n							</div>\n							<div class="info-item-text">\n								巡查时长\n							</div>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col>\n					<div class="info-item">\n						<div>\n							<div class="info-item-num" style="color: #dc5815;">\n								2012-12\n							</div>\n							<div class="info-item-text">\n								截至日期\n							</div>\n						</div>\n					</div>\n				</ion-col>\n				<ion-col col-1>\n					<div class="info-item">\n						<div>\n							<ion-icon name="arrow-forward"></ion-icon>\n						</div>\n					</div>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n	<div class="curr-patrol-problem-num"\n		 (click)="showProblemList()">\n		<div class="problem-title">\n			当前巡查上报问题<span>3</span>个&nbsp;&nbsp;\n			<ion-icon name="md-arrow-dropup"></ion-icon>\n		</div>\n	</div>\n\n	<div class="curr-patrol-problem-list"\n		 [style.height]="problemListHeight + \'px\'" (pan)="showProblemList()">\n		<ul>\n			<li>\n				大家好\n			</li>\n		</ul>\n	</div>\n	<div class="to-patrol-btn active"  (click)="creatPatrol()">\n		<span>\n			新建巡查\n		</span>\n	</div>\n	<e-ngx-esrimap\n				   [mapType]="\'tdt\'"\n				   [mapUrl]="[\'img\',\'cia\']"\n				   [enableNavigation]="false"\n				   [initExtent]="config.mapArea"\n				   [gisApiUrl]="config.gisApiUrl"\n				   [geoUrl]="config.geoUrl"\n				   [esriCSSUrl]="config.esriCSSUrl"\n				   (mapReady)="onMapReady($event)">\n	</e-ngx-esrimap>\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\patrol\patrol.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__services_config_service__["a" /* ConfigService */]])
    ], PatrolPage);
    return PatrolPage;
}());

//# sourceMappingURL=patrol.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatrolRecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PatrolRecordPage = /** @class */ (function () {
    function PatrolRecordPage(navCtrl, menuCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
    }
    PatrolRecordPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
        this.currentTask = this.navParams.data.task;
        this.riverGra = this.navParams.data.riverGra;
        this.getPatrolRecords();
        console.log(this.navParams);
    };
    PatrolRecordPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    /**
     * 获取该任务所有的巡查记录
     */
    PatrolRecordPage.prototype.getPatrolRecords = function () {
    };
    /**
     * 查询巡查记录详情
     * @param currentRecord
     */
    PatrolRecordPage.prototype.changePatrolDetails = function (currentRecord) {
        this.currentRecord = currentRecord;
    };
    PatrolRecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-patrol-record',template:/*ion-inline-start:"E:\myProject\startApp\src\app\pages\patrol\subpages\patrol-record\patrol-record.html"*/'<ion-header>\n	<ion-navbar color="dark">\n		<ion-title>巡查记录</ion-title>\n	</ion-navbar>\n</ion-header>\n<ion-content>\n	<div>大家好，我是巡查记录</div>\n</ion-content>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\pages\patrol\subpages\patrol-record\patrol-record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PatrolRecordPage);
    return PatrolRecordPage;
}());

//# sourceMappingURL=patrol-record.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(450);



if (window.hasOwnProperty('cordova')) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_opener__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_map_map__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_rules_rules__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_request_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_login_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tools_tools__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tools_subpages_realTimeTraffic_realTimeTraffic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tools_subpages_weatherReport_weatherReport__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_essence_ionic__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_essence_ionic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_essence_ionic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_screen_orientation__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_is_debug__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tools_subpages_satelliteCloud_satellite_cloud__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_tools_subpages_radarMap_radar_map__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_e_ngx_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_e_ngx_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_e_ngx_services__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_background_mode__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_android_permissions__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_patrol_patrol__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_patrol_subpages_patrol_record_patrol_record__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_e_ngx_esrimap__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_e_ngx_esrimap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_e_ngx_esrimap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */], {
                    mode: 'ios',
                    iconMode: 'ios',
                    backButtonText: '返回',
                    tabsHideOnSubPages: 'true',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25_essence_ionic__["EssenceIonicModule"],
                __WEBPACK_IMPORTED_MODULE_30_e_ngx_services__["ENgxServicesModule"],
                __WEBPACK_IMPORTED_MODULE_35_e_ngx_esrimap__["ENgxEsriMapModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_patrol_patrol__["a" /* PatrolPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tools_tools__["a" /* ToolsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tools_subpages_realTimeTraffic_realTimeTraffic__["a" /* RealTimeTrafficPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tools_subpages_weatherReport_weatherReport__["a" /* WeatherReportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tools_subpages_satelliteCloud_satellite_cloud__["a" /* SatelliteCloudPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tools_subpages_radarMap_radar_map__["a" /* RadarMapPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_patrol_subpages_patrol_record_patrol_record__["a" /* PatrolRecordPage */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_rules_rules__["a" /* RulesPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_patrol_patrol__["a" /* PatrolPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tools_tools__["a" /* ToolsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tools_subpages_realTimeTraffic_realTimeTraffic__["a" /* RealTimeTrafficPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tools_subpages_weatherReport_weatherReport__["a" /* WeatherReportPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_tools_subpages_satelliteCloud_satellite_cloud__["a" /* SatelliteCloudPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_tools_subpages_radarMap_radar_map__["a" /* RadarMapPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_patrol_subpages_patrol_record_patrol_record__["a" /* PatrolRecordPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_19__services_config_service__["a" /* ConfigService */],
                __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__services_tips_service__["a" /* TipsService */],
                __WEBPACK_IMPORTED_MODULE_21__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_18__services_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_is_debug__["a" /* IsDebug */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tips_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_config_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_login_service__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_service__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_permissions__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_e_ngx_services__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_e_ngx_services___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_e_ngx_services__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppComponent = /** @class */ (function () {
    function AppComponent(platform, network, events, keyboard, ionicApp, file, fileOperationService, fileOpener, loginService, tips, backgroundMode, config, appService, androidPermissions, authService) {
        var _this = this;
        this.platform = platform;
        this.network = network;
        this.events = events;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.file = file;
        this.fileOperationService = fileOperationService;
        this.fileOpener = fileOpener;
        this.loginService = loginService;
        this.tips = tips;
        this.backgroundMode = backgroundMode;
        this.config = config;
        this.appService = appService;
        this.androidPermissions = androidPermissions;
        this.authService = authService;
        this.rootPage = null;
        this.backButtonPressed = false; // 用于判断返回键是否触发
        this.pages = [
            { code: 'setting', title: '设置', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] },
            { code: 'notice', title: '通知', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
        ];
        // （通过 URL Scheme 打开 APP）定义 handleOpenURL 方法，用于获取 URL 上的数据
        window['handleOpenURL'] = function (schemeUrl) {
            _this.schemeUrl = schemeUrl;
        };
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.config.initAppInfo().then(function () {
                _this.requestPermissions();
                _this.checkDisConnect();
                _this.registerBackButtonAction();
                // this.checkLatestVersion();
                // this.isLogin();
                // // 启用后台模式
                // this.backgroundMode.enable();
                // this.backgroundMode.setDefaults({
                // 	title: `${this.config.appName}正在后台运行`,
                // 	text: ''
                // });
            });
        });
    };
    /**
     * 提前获取部分权限（android） 查看所有权限：https://developer.android.com/reference/android/Manifest.permission.html
     */
    AppComponent.prototype.requestPermissions = function () {
        var permissions = [
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
            this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION // GPS定位权限
        ];
        this.androidPermissions.requestPermissions(permissions);
    };
    /**
     * 注册返回按键事件
     */
    AppComponent.prototype.registerBackButtonAction = function () {
        var _this = this;
        this.platform.registerBackButtonAction(function () {
            // 如果键盘开启则隐藏键盘
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            // 隐藏加载动画
            var activePortal = _this.ionicApp._loadingPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
                activePortal.onDidDismiss();
                return;
            }
            // 根据当前导航进行不同的处理（mainTabs对象是在TabsPage定义的ion-tabs，instantTabs对象是在InstantCommPage定义的ion-tabs）
            var mainTabs = _this.nav.getActive().instance.mainTabs;
            if (mainTabs) {
                var mainNav = mainTabs.getSelected();
                var instantTabs = mainNav.getActive().instance.instantTabs;
                if (instantTabs) {
                    var instantNav = instantTabs.getSelected();
                    instantNav.canGoBack() ? instantNav.pop() : mainNav.pop();
                }
                else {
                    mainNav.canGoBack() ? mainNav.pop() : _this.showExit();
                }
            }
            else {
                // this.showExit() 为退出 APP，如果不退出 APP 而是让 APP 后台运行可使用 this.backgroundMode.moveToBackground()
                _this.nav.canGoBack() ? _this.nav.pop() : _this.showExit();
            }
        }, 1);
    };
    /**
     * 双击退出提示框
     */
    AppComponent.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.tips.toast({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            });
            this.backButtonPressed = true;
            // 2秒内没有再次点击返回则将触发标志标记为false
            var id_1 = setTimeout(function () {
                clearTimeout(id_1);
                _this.backButtonPressed = false;
            }, 2000);
        }
    };
    /**
     * 验证是否已经登录
     */
    AppComponent.prototype.isLogin = function () {
        var _this = this;
        this.authService.getToken().then(function (token) {
            if (token) {
                _this.authService.getUserInfo().then(function (userInfo) {
                    if (userInfo) {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
                    }
                });
            }
            else {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    AppComponent.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.tips.confirm({
            message: "\u786E\u5B9A\u9000\u51FA\u5F53\u524D\u7528\u6237\u5417\uFF1F",
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '确定',
                    handler: function () {
                        _this.loginService.logout().subscribe(function (serverData) {
                            _this.authService.removeToken().then(function () {
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
                            });
                        });
                    }
                }
            ]
        });
    };
    /**
     * 检测新版本
     */
    AppComponent.prototype.checkLatestVersion = function () {
        var _this = this;
        this.appService.checkLatestVersion().subscribe(function (serverData) {
            if (serverData.code === 'ok') {
                _this.newVersion = serverData.result;
                var hasNew = +_this.newVersion.split('.').join('') - +_this.config.versionNumber.split('.').join('') > 0;
                if (hasNew) {
                    var message = void 0;
                    if (_this.network.type === 'wifi') {
                        message = '是否确认升级？';
                    }
                    else {
                        message = '建议您在WIFI条件下进行升级，是否确认升级？';
                    }
                    _this.tips.confirm({
                        title: "\u53D1\u73B0\u65B0\u7248\u672C" + _this.newVersion,
                        message: message,
                        buttons: [
                            {
                                text: '取消'
                            },
                            {
                                text: '升级',
                                handler: function () {
                                    var id = setTimeout(function () {
                                        clearTimeout(id);
                                        _this.downloadNewVersion();
                                    });
                                }
                            }
                        ]
                    });
                }
            }
        });
    };
    /**
     * 下载新版本APP
     */
    AppComponent.prototype.downloadNewVersion = function () {
        var _this = this;
        var path = this.file.externalDataDirectory || this.file.dataDirectory;
        var fileName = "temp_app_" + this.config.versionNumber + "_" + new Date().getTime() + ".apk";
        var fileOperationObject = this.fileOperationService.create();
        var downloadAlert = this.tips.alert({
            title: '下载中...',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        fileOperationObject.abort();
                    }
                }
            ]
        });
        var scale = '0%';
        var intervalId = setInterval(function () {
            downloadAlert.setTitle("\u5DF2\u4E0B\u8F7D" + scale);
        }, 500);
        fileOperationObject.download(this.config.newAppUrl.replace('version', this.newVersion), {
            onProgress: function (event) {
                var val = Math.floor((event.loaded / event.total) * 100) + '%';
                if (scale !== val) {
                    scale = val;
                }
            }
        }).then(function (result) {
            clearInterval(intervalId);
            _this.file.writeFile(path, fileName, result.response, { replace: true }).then(function () {
                _this.fileOpener.open(path + fileName, _this.fileOperationService.getMimeType('apk')).then(function () {
                    _this.tips.dismiss(downloadAlert);
                }).catch(function (e) {
                    console.error('Error openening file', e);
                });
            });
        }, function (err) {
            clearInterval(intervalId);
            _this.tips.dismiss(downloadAlert);
            if (err.code) {
                _this.tips.alert({
                    title: '下载失败，请重试！',
                    buttons: [
                        {
                            text: '取消'
                        },
                        {
                            text: '重试',
                            handler: function () {
                                var id = setTimeout(function () {
                                    clearTimeout(id);
                                    _this.downloadNewVersion();
                                });
                            }
                        }
                    ]
                });
            }
            else {
                _this.tips.toast({
                    message: '下载已取消！',
                    duration: 3000,
                    position: 'top'
                });
            }
        });
    };
    /**
     * 检查网络是否断开
     */
    AppComponent.prototype.checkDisConnect = function () {
        var _this = this;
        this.network.onDisconnect().subscribe(function () {
            _this.config.network = false;
            _this.events.publish('network', _this.config.network);
            _this.checkConnect();
        });
    };
    /**
     * 检查网络是否重新连接
     */
    AppComponent.prototype.checkConnect = function () {
        var _this = this;
        var connectSubscription = this.network.onConnect().subscribe(function () {
            connectSubscription.unsubscribe();
            _this.config.network = true;
            _this.events.publish('network', _this.config.network);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], AppComponent.prototype, "nav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"E:\myProject\startApp\src\app\app.html"*/'<ion-menu [content]="content">\n	<ion-content>\n		<div class="menu_content">\n			<div class="userInfo">\n				<ion-icon name="ios-contact"></ion-icon>\n				<p>\n					{{authService.userInfo?.realName}}\n				</p>\n			</div>\n			<div class="pageTab">\n				<ion-row>\n					<ion-col width-50 *ngFor="let p of pages" (click)="openPage(p)">\n						<div>\n							<ion-icon *ngIf="p.code == \'setting\'" name="ios-settings"></ion-icon>\n							<ion-icon *ngIf="p.code == \'notice\'" name="ios-notifications"></ion-icon>\n						</div>\n						<div>\n							{{p.title}}\n						</div>\n					</ion-col>\n				</ion-row>\n			</div>\n			<div class="logoutBtn" padding>\n				<button ion-button full color="danger" (click)="logout()">退出登录</button>\n			</div>\n			<div class="appVersionInfo">\n				—&nbsp;{{config.appName}}&nbsp;v{{config.versionNumber}}&nbsp;—\n			</div>\n		</div>\n	</ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content [swipeBackEnabled]="false"></ion-nav>\n'/*ion-inline-end:"E:\myProject\startApp\src\app\app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Keyboard"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_15_e_ngx_services__["FileOperationService"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_11__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_9__services_tips_service__["a" /* TipsService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_10__services_config_service__["a" /* ConfigService */],
            __WEBPACK_IMPORTED_MODULE_12__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/**
 * Created by laixiangran on 2017/3/24.
 * homepage：http://www.laixiangran.cn
 * Alert、Loading、Toast、ActionSheet统一管理服务
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipsService = /** @class */ (function () {
    function TipsService(alertCtrl, actionSheetCtrl, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    /**
     * 隐藏控件
     * @param currentViewer
     */
    TipsService.prototype.dismiss = function (currentViewer) {
        return new Promise(function (resolve, reject) {
            if (currentViewer) {
                return currentViewer.dismiss();
            }
            else {
                resolve(null);
            }
        });
    };
    /**
     * 弹出警告框
     * @param alertOptions
     * @param callback
     * @returns {Alert}
     */
    TipsService.prototype.alert = function (alertOptions, callback) {
        if (typeof alertOptions.enableBackdropDismiss === 'undefined') {
            alertOptions.enableBackdropDismiss = false; // 默认点击背景不隐藏
        }
        var currentAlert = this.alertCtrl.create(alertOptions);
        currentAlert.present().then(function () {
            if (callback) {
                callback();
            }
        });
        return currentAlert;
    };
    /**
     * 弹出确认框
     * @param alertOptions
     * @param callback
     * @returns {Alert}
     */
    TipsService.prototype.confirm = function (alertOptions, callback) {
        if (typeof alertOptions.enableBackdropDismiss === 'undefined') {
            alertOptions.enableBackdropDismiss = false; // 默认点击背景不隐藏
        }
        var currentConfirm = this.alertCtrl.create(alertOptions);
        currentConfirm.present().then(function () {
            if (callback) {
                callback();
            }
        });
        return currentConfirm;
    };
    /**
     * 工作表控件
     * @param actionSheetOptions
     * @param callback
     * @returns {ActionSheet}
     */
    TipsService.prototype.actionSheet = function (actionSheetOptions, callback) {
        var currentActionSheet = this.actionSheetCtrl.create(actionSheetOptions);
        currentActionSheet.present().then(function () {
            if (callback) {
                callback();
            }
        });
        return currentActionSheet;
    };
    /**
     * 加载控件
     * @param loadingOptions
     * @param callback
     * @returns {Loading}
     */
    TipsService.prototype.loader = function (loadingOptions, callback) {
        if (loadingOptions === void 0) { loadingOptions = {}; }
        if (typeof loadingOptions.showBackdrop === 'undefined') {
            loadingOptions.showBackdrop = false; // 默认不显示背景
        }
        var currentLoader = this.loadingCtrl.create(loadingOptions);
        currentLoader.present().then(function () {
            if (callback) {
                callback();
            }
        });
        return currentLoader;
    };
    /**
     * 提示横幅
     * @param toastOptions
     * @param callback
     * @returns {Toast}
     */
    TipsService.prototype.toast = function (toastOptions, callback) {
        var currentToast = this.toastCtrl.create(toastOptions);
        currentToast.present().then(function () {
            if (callback) {
                callback();
            }
        });
        return currentToast;
    };
    TipsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], TipsService);
    return TipsService;
}());

//# sourceMappingURL=tips.service.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_request_service__ = __webpack_require__(123);
/**
 * Created by laixiangran on 2017/5/20.
 * homepage：http://www.laixiangran.cn
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(rs) {
        this.rs = rs;
    }
    /**
     * 检测服务器最新的APP版本号
     * @returns {Observable<ServerData>}
     */
    AppService.prototype.checkLatestVersion = function () {
        return this.rs.post('/appVersionAction/getLatestVersion', null, false);
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_request_service__["a" /* RequestService */]])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ })

},[430]);
//# sourceMappingURL=main.js.map