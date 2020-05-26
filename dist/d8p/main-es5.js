function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages */
    "./src/app/pages/index.ts"); //import Components


    var routes = [{
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    }, {
      path: "login",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }, {
      path: "loginPwd",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["LoginPwdComponent"]
    }, {
      path: "dashboard",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    }, {
      path: "transfer",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["TransferComponent"]
    }, {
      path: "transfer-details",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["TransactionDetailsComponent"]
    }, {
      path: "bankload",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["BankloadComponent"]
    }, {
      path: "bankload-details",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["BankloadDetailsComponent"]
    }, {
      path: "withdraw",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["WithdrawComponent"]
    }, {
      path: "withdraw-details",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["WithdrawDetailsComponent"]
    }, {
      path: "recent-transactions",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["RecentTransactionsComponent"]
    }, {
      path: "**",
      component: _pages__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'D8P-System';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _pages_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/login/login.component.ngfactory */
    "./src/app/pages/login/login.component.ngfactory.js");
    /* harmony import */


    var _pages_login_pwd_login_pwd_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/login-pwd/login-pwd.component.ngfactory */
    "./src/app/pages/login-pwd/login-pwd.component.ngfactory.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component.ngfactory */
    "./src/app/pages/dashboard/dashboard.component.ngfactory.js");
    /* harmony import */


    var _pages_transfer_transfer_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/transfer/transfer.component.ngfactory */
    "./src/app/pages/transfer/transfer.component.ngfactory.js");
    /* harmony import */


    var _pages_transaction_details_transaction_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/transaction-details/transaction-details.component.ngfactory */
    "./src/app/pages/transaction-details/transaction-details.component.ngfactory.js");
    /* harmony import */


    var _pages_bankload_bankload_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/bankload/bankload.component.ngfactory */
    "./src/app/pages/bankload/bankload.component.ngfactory.js");
    /* harmony import */


    var _pages_bankload_details_bankload_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/bankload-details/bankload-details.component.ngfactory */
    "./src/app/pages/bankload-details/bankload-details.component.ngfactory.js");
    /* harmony import */


    var _pages_withdraw_withdraw_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/withdraw/withdraw.component.ngfactory */
    "./src/app/pages/withdraw/withdraw.component.ngfactory.js");
    /* harmony import */


    var _pages_withdraw_details_withdraw_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/withdraw-details/withdraw-details.component.ngfactory */
    "./src/app/pages/withdraw-details/withdraw-details.component.ngfactory.js");
    /* harmony import */


    var _pages_recent_transactions_recent_transactions_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/recent-transactions/recent-transactions.component.ngfactory */
    "./src/app/pages/recent-transactions/recent-transactions.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _pages_services_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/services/service */
    "./src/app/pages/services/service.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_login_pwd_login_pwd_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/login-pwd/login-pwd.component */
    "./src/app/pages/login-pwd/login-pwd.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/transfer/transfer.component */
    "./src/app/pages/transfer/transfer.component.ts");
    /* harmony import */


    var _pages_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/transaction-details/transaction-details.component */
    "./src/app/pages/transaction-details/transaction-details.component.ts");
    /* harmony import */


    var _pages_bankload_bankload_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/bankload/bankload.component */
    "./src/app/pages/bankload/bankload.component.ts");
    /* harmony import */


    var _pages_bankload_details_bankload_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/bankload-details/bankload-details.component */
    "./src/app/pages/bankload-details/bankload-details.component.ts");
    /* harmony import */


    var _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/withdraw/withdraw.component */
    "./src/app/pages/withdraw/withdraw.component.ts");
    /* harmony import */


    var _pages_withdraw_details_withdraw_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/withdraw-details/withdraw-details.component */
    "./src/app/pages/withdraw-details/withdraw-details.component.ts");
    /* harmony import */


    var _pages_recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/recent-transactions/recent-transactions.component */
    "./src/app/pages/recent-transactions/recent-transactions.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _pages_login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _pages_login_pwd_login_pwd_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["LoginPwdComponentNgFactory"], _pages_dashboard_dashboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["DashboardComponentNgFactory"], _pages_transfer_transfer_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TransferComponentNgFactory"], _pages_transaction_details_transaction_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["TransactionDetailsComponentNgFactory"], _pages_bankload_bankload_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["BankloadComponentNgFactory"], _pages_bankload_details_bankload_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["BankloadDetailsComponentNgFactory"], _pages_withdraw_withdraw_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["WithdrawComponentNgFactory"], _pages_withdraw_details_withdraw_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["WithdrawDetailsComponentNgFactory"], _pages_recent_transactions_recent_transactions_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RecentTransactionsComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_17__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_19__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_21__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _pages_services_service__WEBPACK_IMPORTED_MODULE_25__["Services"], _pages_services_service__WEBPACK_IMPORTED_MODULE_25__["Services"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_b"](), _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwRegistrationOptions"], {
        enabled: false
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_c"](p2_0, p2_1, p2_2, p2_3), _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_i"](p3_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"], {
        paramsInheritanceStrategy: "always"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_15__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], function () {
        return [[{
          path: "",
          redirectTo: "login",
          pathMatch: "full"
        }, {
          path: "login",
          component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]
        }, {
          path: "loginPwd",
          component: _pages_login_pwd_login_pwd_component__WEBPACK_IMPORTED_MODULE_27__["LoginPwdComponent"]
        }, {
          path: "dashboard",
          component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"]
        }, {
          path: "transfer",
          component: _pages_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_29__["TransferComponent"]
        }, {
          path: "transfer-details",
          component: _pages_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_30__["TransactionDetailsComponent"]
        }, {
          path: "bankload",
          component: _pages_bankload_bankload_component__WEBPACK_IMPORTED_MODULE_31__["BankloadComponent"]
        }, {
          path: "bankload-details",
          component: _pages_bankload_details_bankload_details_component__WEBPACK_IMPORTED_MODULE_32__["BankloadDetailsComponent"]
        }, {
          path: "withdraw",
          component: _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_33__["WithdrawComponent"]
        }, {
          path: "withdraw-details",
          component: _pages_withdraw_details_withdraw_details_component__WEBPACK_IMPORTED_MODULE_34__["WithdrawDetailsComponent"]
        }, {
          path: "recent-transactions",
          component: _pages_recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_35__["RecentTransactionsComponent"]
        }, {
          path: "**",
          component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]
        }], [{
          path: "",
          redirectTo: "login",
          pathMatch: "full"
        }, {
          path: "login",
          component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]
        }, {
          path: "loginPwd",
          component: _pages_login_pwd_login_pwd_component__WEBPACK_IMPORTED_MODULE_27__["LoginPwdComponent"]
        }, {
          path: "dashboard",
          component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"]
        }, {
          path: "transfer",
          component: _pages_transfer_transfer_component__WEBPACK_IMPORTED_MODULE_29__["TransferComponent"]
        }, {
          path: "transfer-details",
          component: _pages_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_30__["TransactionDetailsComponent"]
        }, {
          path: "bankload",
          component: _pages_bankload_bankload_component__WEBPACK_IMPORTED_MODULE_31__["BankloadComponent"]
        }, {
          path: "bankload-details",
          component: _pages_bankload_details_bankload_details_component__WEBPACK_IMPORTED_MODULE_32__["BankloadDetailsComponent"]
        }, {
          path: "withdraw",
          component: _pages_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_33__["WithdrawComponent"]
        }, {
          path: "withdraw-details",
          component: _pages_withdraw_details_withdraw_details_component__WEBPACK_IMPORTED_MODULE_34__["WithdrawDetailsComponent"]
        }, {
          path: "recent-transactions",
          component: _pages_recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_35__["RecentTransactionsComponent"]
        }, {
          path: "**",
          component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_36__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_36__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_20__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_37__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_15__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_41__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_43__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatLineModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_38__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_divider__WEBPACK_IMPORTED_MODULE_44__["MatDividerModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_44__["MatDividerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_list__WEBPACK_IMPORTED_MODULE_45__["MatListModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_45__["MatListModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_46__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_47__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_47__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_48__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["A11yModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_39__["HighContrastModeDetector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__["MatTabsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_49__["MatTabsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/components/bank-details/bank-details.component.ngfactory.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/bank-details/bank-details.component.ngfactory.js ***!
    \*****************************************************************************/

  /*! exports provided: RenderType_BankDetailsComponent, View_BankDetailsComponent_0, View_BankDetailsComponent_Host_0, BankDetailsComponentNgFactory */

  /***/
  function srcAppComponentsBankDetailsBankDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BankDetailsComponent", function () {
      return RenderType_BankDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BankDetailsComponent_0", function () {
      return View_BankDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BankDetailsComponent_Host_0", function () {
      return View_BankDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankDetailsComponentNgFactory", function () {
      return BankDetailsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _bank_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./bank-details.component */
    "./src/app/components/bank-details/bank-details.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BankDetailsComponent = [];

    var RenderType_BankDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_BankDetailsComponent,
      data: {}
    });

    function View_BankDetailsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-correct1.png"]], null, null, null, null, null))], null, null);
    }

    function View_BankDetailsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-correct2.png"]], null, null, null, null, null))], null, null);
    }

    function View_BankDetailsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-login2.png"]], null, null, null, null, null))], null, null);
    }

    function View_BankDetailsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-login1.png"]], null, null, null, null, null))], null, null);
    }

    function View_BankDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 88, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 5, "div", [["class", "col-12 subtitlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["BANKLOAD: RM 100.00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "d-flex max-width-100"], ["src", "assets/icons-img/linewhite2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Effective 24 AUG 2020 (Today)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 20, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 19, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 18, "div", [["class", "bankdetailview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 17, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 8, "div", [["class", "col-7 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 7, "div", [["class", "transaction-box flex-align-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 6, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "span", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "img", [["class", "wh-20-20"], ["src", "assets/icons-img/icon-info3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "div", [["class", "summary-currency-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-creditsmall2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" RM 100.05 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "div", [["class", "col-2 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-debitbig2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 4, "div", [["class", "col-3 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold mb-1 line-height-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MAY BANK ACCOUNT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/logomaybank1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 3, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 2, "div", [["class", "col-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Username"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 24, "div", [["class", "row no-gutters justify-content-center mt-4 pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 23, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 22, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 37).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 17, "div", [["class", "formfield max-width-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 16, "div", [["class", "input-group mb-3 group-input-border-radius"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 8, "input", [["aria-describedby", "basic-addon2"], ["aria-label", "username"], ["class", "form-control d8p-input border-grey min-height-60"], ["maxlength", "10"], ["name", "username"], ["pattern", "\\d*"], ["placeholder", "Ex: 123456"], ["type", "text"]], [[1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.username = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], [], {
        pattern: [0, "pattern"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 5, "span", [["class", "input-group-text group-input-icon-field"], ["id", "basic-addon2"], ["routerLink", "/transfer"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 53).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BankDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BankDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 3, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 2, "div", [["class", "col-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Password"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 26, "div", [["class", "row no-gutters justify-content-center mt-4 pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 25, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 22, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 66).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 17, "div", [["class", "formfield max-width-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 16, "div", [["class", "input-group mb-3 group-input-border-radius"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 8, "input", [["aria-describedby", "basic-addon2"], ["aria-label", "Recipient's username"], ["autocomplete", "new-password"], ["class", "form-control d8p-input border-grey min-height-60"], ["maxlength", "6"], ["name", "pwd"], ["pattern", "\\d*"], ["placeholder", "Password"], ["type", "password"]], [[1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 72)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.pwd = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], [], {
        pattern: [0, "pattern"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 5, "span", [["class", "input-group-text group-input-icon-field"], ["id", "basic-addon2"], ["routerLink", "/dashboard"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BankDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_BankDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](86, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 1, "p", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Your internet banking credentials are secured by D-8P System Decentralized A.I. Kernel"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_16 = "10";

        _ck(_v, 44, 0, currVal_16);

        var currVal_17 = "\\d*";

        _ck(_v, 45, 0, currVal_17);

        var currVal_18 = "username";
        var currVal_19 = _co.username;

        _ck(_v, 48, 0, currVal_18, currVal_19);

        var currVal_20 = "/transfer";

        _ck(_v, 53, 0, currVal_20);

        var currVal_21 = _co.username;

        _ck(_v, 55, 0, currVal_21);

        var currVal_22 = !_co.username;

        _ck(_v, 57, 0, currVal_22);

        var currVal_39 = "6";

        _ck(_v, 73, 0, currVal_39);

        var currVal_40 = "\\d*";

        _ck(_v, 74, 0, currVal_40);

        var currVal_41 = "pwd";
        var currVal_42 = _co.pwd;

        _ck(_v, 77, 0, currVal_41, currVal_42);

        var currVal_43 = "/dashboard";

        _ck(_v, 82, 0, currVal_43);

        var currVal_44 = _co.pwd;

        _ck(_v, 84, 0, currVal_44);

        var currVal_45 = !_co.pwd;

        _ck(_v, 86, 0, currVal_45);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPending;

        _ck(_v, 35, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).maxlength : null;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).pattern : null;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 50).ngClassPending;

        _ck(_v, 42, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassUntouched;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassTouched;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassPristine;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassDirty;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassValid;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassInvalid;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassPending;

        _ck(_v, 64, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 73).maxlength : null;
        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).pattern : null;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassUntouched;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassTouched;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassPristine;

        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassDirty;

        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassValid;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassInvalid;

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).ngClassPending;

        _ck(_v, 71, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38);
      });
    }

    function View_BankDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-bank-details", [], null, null, null, View_BankDetailsComponent_0, RenderType_BankDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _bank_details_component__WEBPACK_IMPORTED_MODULE_4__["BankDetailsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BankDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-bank-details", _bank_details_component__WEBPACK_IMPORTED_MODULE_4__["BankDetailsComponent"], View_BankDetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/bank-details/bank-details.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/bank-details/bank-details.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BankDetailsComponent */

  /***/
  function srcAppComponentsBankDetailsBankDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankDetailsComponent", function () {
      return BankDetailsComponent;
    });

    var BankDetailsComponent = /*#__PURE__*/function () {
      function BankDetailsComponent() {
        _classCallCheck(this, BankDetailsComponent);
      }

      _createClass(BankDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BankDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js ***!
    \*************************************************************************************/

  /*! exports provided: RenderType_DashboardHeaderComponent, View_DashboardHeaderComponent_0, View_DashboardHeaderComponent_Host_0, DashboardHeaderComponentNgFactory */

  /***/
  function srcAppComponentsDashboardHeaderDashboardHeaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DashboardHeaderComponent", function () {
      return RenderType_DashboardHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardHeaderComponent_0", function () {
      return View_DashboardHeaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardHeaderComponent_Host_0", function () {
      return View_DashboardHeaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponentNgFactory", function () {
      return DashboardHeaderComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/tabs/index.ngfactory */
    "./node_modules/@angular/material/tabs/index.ngfactory.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/fesm2015/tabs.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-header.component */
    "./src/app/components/dashboard-header/dashboard-header.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DashboardHeaderComponent = [];

    var RenderType_DashboardHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_DashboardHeaderComponent,
      data: {}
    });

    function View_DashboardHeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 55, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 16, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "div", [["class", "col-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 14, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 13, "div", [["class", "dashboard-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 2, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "img", [["class", "w-50 mt-3"], ["routerLink", "/login"], ["src", "assets/icons-img/logod8p2.png"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 2, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "img", [["class", "mt-3 mr-1"], ["routerLink", "/recent-transactions"], ["src", "assets/icons-img/notification-icon.png"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 6, "div", [["class", "text-right"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 5, "div", [["class", "headergoldbox d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 4, "div", [["class", "gram-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "div", [["class", "font-arial color-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["7."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "div", [["class", "font-arial color-white pt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["2528g"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 37, "div", [["class", "row no-gutters min-height-132"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "div", [["class", "col-1 d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "img", [["class", "max-width-40 pt-5"], ["src", "assets/icons-img/icon-left1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 32, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "img", [["class", "max-width-100 vertical-align-bottom"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 29, "mat-tab-group", [["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTabGroup_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTabGroup"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 3325952, null, 1, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TABS_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allTabs: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"], null, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabGroup"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 16777216, null, null, 19, "mat-tab", [["class", "min-height-132"], ["label", "MYR"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
        textLabel: [0, "textLabel"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        templateLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, {
        _explicitContent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, 0, 6, "div", [["class", "d-flex justify-content-between align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 3, "div", [["class", "d8p-h6 font-arial text-center mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["RM "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 1, "span", [["class", "font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["250.70"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 1, "div", [["class", "d8p-normal-text font-arial text-right mt-2 color-lightgrey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["812342289912"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, 0, 8, "div", [["class", "flex-align-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 3, "div", [["class", "summary-currency-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-creditsmall2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" RM 100.05 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 3, "div", [["class", "summary-gold-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-creditsmall1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 0.0001g Gold "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 16777216, null, null, 5, "mat-tab", [["label", "QR"]], null, null, null, _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatTab_0"], _node_modules_angular_material_tabs_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatTab"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 770048, [[1, 4]], 2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTab"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], [2, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MAT_TAB_GROUP"]]], {
        textLabel: [0, "textLabel"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, {
        templateLabel: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 5, {
        _explicitContent: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, 0, 1, "div", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 0, "img", [["class", "max-width-30 pt-3"], ["src", "assets/icons-img/qrcode1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "div", [["class", "col-1 d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 0, "img", [["class", "max-width-40 pt-5"], ["src", "assets/icons-img/icon-right1.png"]], null, null, null, null, null))], function (_ck, _v) {
        var currVal_0 = "/login";

        _ck(_v, 7, 0, currVal_0);

        var currVal_1 = "/recent-transactions";

        _ck(_v, 10, 0, currVal_1);

        var currVal_4 = "MYR";

        _ck(_v, 29, 0, currVal_4);

        var currVal_5 = "QR";

        _ck(_v, 49, 0, currVal_5);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).dynamicHeight;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25).headerPosition === "below";

        _ck(_v, 24, 0, currVal_2, currVal_3);
      });
    }

    function View_DashboardHeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-dashboard-header", [], null, null, null, View_DashboardHeaderComponent_0, RenderType_DashboardHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__["DashboardHeaderComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var DashboardHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-dashboard-header", _dashboard_header_component__WEBPACK_IMPORTED_MODULE_5__["DashboardHeaderComponent"], View_DashboardHeaderComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/dashboard-header/dashboard-header.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/dashboard-header/dashboard-header.component.ts ***!
    \***************************************************************************/

  /*! exports provided: DashboardHeaderComponent */

  /***/
  function srcAppComponentsDashboardHeaderDashboardHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardHeaderComponent", function () {
      return DashboardHeaderComponent;
    });

    var DashboardHeaderComponent = /*#__PURE__*/function () {
      function DashboardHeaderComponent() {
        _classCallCheck(this, DashboardHeaderComponent);
      }

      _createClass(DashboardHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardHeaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/otpcard/otpcard.component.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./src/app/components/otpcard/otpcard.component.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: RenderType_OtpcardComponent, View_OtpcardComponent_0, View_OtpcardComponent_Host_0, OtpcardComponentNgFactory */

  /***/
  function srcAppComponentsOtpcardOtpcardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_OtpcardComponent", function () {
      return RenderType_OtpcardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_OtpcardComponent_0", function () {
      return View_OtpcardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_OtpcardComponent_Host_0", function () {
      return View_OtpcardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpcardComponentNgFactory", function () {
      return OtpcardComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _otpcard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./otpcard.component */
    "./src/app/components/otpcard/otpcard.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_OtpcardComponent = [];

    var RenderType_OtpcardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_OtpcardComponent,
      data: {}
    });

    function View_OtpcardComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-correct1.png"]], null, null, null, null, null))], null, null);
    }

    function View_OtpcardComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-correct2.png"]], null, null, null, null, null))], null, null);
    }

    function View_OtpcardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 49, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 3, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Authenication Method"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 12, "div", [["class", "row justify-content-center mt-3 pb-4 border-bottom-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 3, "div", [["class", "col-3 flex-align-center flex-column border-right-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "div", [["class", "text-right w-100 pb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-smsotp1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 3, "div", [["class", "col-3 flex-align-center flex-column border-right-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "text-right w-100 pb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-oobpush1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 3, "div", [["class", "col-3 flex-align-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "div", [["class", "text-right w-100 pb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-face1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 3, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 2, "div", [["class", "col-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SMS OTP"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 27, "div", [["class", "row no-gutters justify-content-center mt-4 pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 26, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 25, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 17, "div", [["class", "formfield max-width-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 16, "div", [["class", "input-group mb-3 group-input-border-radius"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 8, "input", [["aria-describedby", "basic-addon2"], ["aria-label", "otp"], ["class", "form-control d8p-input border-grey min-height-60"], ["maxlength", "10"], ["name", "otp"], ["pattern", "\\d*"], ["placeholder", "Ex: 123456"], ["type", "text"]], [[1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.otp = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"], [], {
        pattern: [0, "pattern"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](37, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 5, "span", [["class", "input-group-text group-input-icon-field"], ["id", "basic-addon2"], ["routerLink", "/dashboard"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 42).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](42, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_OtpcardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_OtpcardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 2, "div", [["class", "color-lightgrey text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" SMS OTP has been to xxx-xxxxxx02 (24 AUG 2020 08:00:00). Insert above and confirm. "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_16 = "10";

        _ck(_v, 33, 0, currVal_16);

        var currVal_17 = "\\d*";

        _ck(_v, 34, 0, currVal_17);

        var currVal_18 = "otp";
        var currVal_19 = _co.otp;

        _ck(_v, 37, 0, currVal_18, currVal_19);

        var currVal_20 = "/dashboard";

        _ck(_v, 42, 0, currVal_20);

        var currVal_21 = _co.otp;

        _ck(_v, 44, 0, currVal_21);

        var currVal_22 = !_co.otp;

        _ck(_v, 46, 0, currVal_22);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending;

        _ck(_v, 24, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 33).maxlength : null;
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).pattern : null;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).ngClassPending;

        _ck(_v, 31, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
      });
    }

    function View_OtpcardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-otpcard", [], null, null, null, View_OtpcardComponent_0, RenderType_OtpcardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _otpcard_component__WEBPACK_IMPORTED_MODULE_4__["OtpcardComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var OtpcardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-otpcard", _otpcard_component__WEBPACK_IMPORTED_MODULE_4__["OtpcardComponent"], View_OtpcardComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/otpcard/otpcard.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/otpcard/otpcard.component.ts ***!
    \*********************************************************/

  /*! exports provided: OtpcardComponent */

  /***/
  function srcAppComponentsOtpcardOtpcardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtpcardComponent", function () {
      return OtpcardComponent;
    });

    var OtpcardComponent = /*#__PURE__*/function () {
      function OtpcardComponent() {
        _classCallCheck(this, OtpcardComponent);
      }

      _createClass(OtpcardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OtpcardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/transaction-view/transaction-view.component.ngfactory.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/transaction-view/transaction-view.component.ngfactory.js ***!
    \*************************************************************************************/

  /*! exports provided: RenderType_TransactionViewComponent, View_TransactionViewComponent_0, View_TransactionViewComponent_Host_0, TransactionViewComponentNgFactory */

  /***/
  function srcAppComponentsTransactionViewTransactionViewComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TransactionViewComponent", function () {
      return RenderType_TransactionViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransactionViewComponent_0", function () {
      return View_TransactionViewComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransactionViewComponent_Host_0", function () {
      return View_TransactionViewComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionViewComponentNgFactory", function () {
      return TransactionViewComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _transaction_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./transaction-view.component */
    "./src/app/components/transaction-view/transaction-view.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_TransactionViewComponent = [];

    var RenderType_TransactionViewComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TransactionViewComponent,
      data: {}
    });

    function View_TransactionViewComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 34, "div", [["class", "container-fluid p-0 transactionview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 33, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 6, "div", [["class", "col-3 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold color-white mb-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["SENDER"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 0, "img", [["src", "assets/icons-img/sender.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 1, "div", [["class", "d8p-h6 line-height-15 color-white mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ahamed Hannan"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [["class", "col-2 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-debitbig1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 22, "div", [["class", "col-7 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 21, "div", [["class", "transaction-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 6, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 3, "div", [["class", "transact-amt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-debitsmall1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" RM 100.05 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 1, "span", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 0, "img", [["class", "wh-20-20"], ["src", "assets/icons-img/icon-info2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 6, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 3, "div", [["class", "transact-amt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-debitsmall1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" RM 00.05 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 1, "span", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 0, "img", [["class", "wh-20-20"], ["src", "assets/icons-img/icon-info2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 6, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 3, "div", [["class", "gold-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-creditsmall1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" 0.0001g Gold "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "span", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 0, "img", [["class", "wh-20-20"], ["src", "assets/icons-img/icon-info4.png"]], null, null, null, null, null))], null, null);
    }

    function View_TransactionViewComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transaction-view", [], null, null, null, View_TransactionViewComponent_0, RenderType_TransactionViewComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _transaction_view_component__WEBPACK_IMPORTED_MODULE_1__["TransactionViewComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TransactionViewComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-transaction-view", _transaction_view_component__WEBPACK_IMPORTED_MODULE_1__["TransactionViewComponent"], View_TransactionViewComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/transaction-view/transaction-view.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/transaction-view/transaction-view.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TransactionViewComponent */

  /***/
  function srcAppComponentsTransactionViewTransactionViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionViewComponent", function () {
      return TransactionViewComponent;
    });

    var TransactionViewComponent = /*#__PURE__*/function () {
      function TransactionViewComponent() {
        _classCallCheck(this, TransactionViewComponent);
      }

      _createClass(TransactionViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionViewComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/transfer-recipient/transfer-recipient.component.ngfactory.js":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/transfer-recipient/transfer-recipient.component.ngfactory.js ***!
    \*****************************************************************************************/

  /*! exports provided: RenderType_TransferRecipientComponent, View_TransferRecipientComponent_0, View_TransferRecipientComponent_Host_0, TransferRecipientComponentNgFactory */

  /***/
  function srcAppComponentsTransferRecipientTransferRecipientComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TransferRecipientComponent", function () {
      return RenderType_TransferRecipientComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransferRecipientComponent_0", function () {
      return View_TransferRecipientComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransferRecipientComponent_Host_0", function () {
      return View_TransferRecipientComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferRecipientComponentNgFactory", function () {
      return TransferRecipientComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _transfer_recipient_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./transfer-recipient.component */
    "./src/app/components/transfer-recipient/transfer-recipient.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_TransferRecipientComponent = [];

    var RenderType_TransferRecipientComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TransferRecipientComponent,
      data: {}
    });

    function View_TransferRecipientComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 30, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 5, "div", [["class", "col-12 subtitlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["TRANSFER: RM 100.00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "d-flex max-width-100"], ["src", "assets/icons-img/linewhite2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Effective 24 AUG 2020 (Today)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 22, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 21, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 20, "div", [["class", "recipientview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 19, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 8, "div", [["class", "col-7 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 7, "div", [["class", "transaction-box flex-align-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 6, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "span", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "img", [["class", "wh-20-20"], ["src", "assets/icons-img/icon-info3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "div", [["class", "summary-currency-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-creditsmall2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" RM 100.05 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "div", [["class", "col-2 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-creditbig1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 6, "div", [["class", "col-3 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold mb-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["RECIPIENT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "img", [["src", "assets/icons-img/recipient.jpg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "div", [["class", "d8p-h6 line-height-15 mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Abd Wahid"]))], null, null);
    }

    function View_TransferRecipientComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transfer-recipient", [], null, null, null, View_TransferRecipientComponent_0, RenderType_TransferRecipientComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _transfer_recipient_component__WEBPACK_IMPORTED_MODULE_1__["TransferRecipientComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TransferRecipientComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-transfer-recipient", _transfer_recipient_component__WEBPACK_IMPORTED_MODULE_1__["TransferRecipientComponent"], View_TransferRecipientComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/transfer-recipient/transfer-recipient.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/transfer-recipient/transfer-recipient.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: TransferRecipientComponent */

  /***/
  function srcAppComponentsTransferRecipientTransferRecipientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferRecipientComponent", function () {
      return TransferRecipientComponent;
    });

    var TransferRecipientComponent = /*#__PURE__*/function () {
      function TransferRecipientComponent() {
        _classCallCheck(this, TransferRecipientComponent);
      }

      _createClass(TransferRecipientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransferRecipientComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ngfactory.js":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ngfactory.js ***!
    \***********************************************************************************************/

  /*! exports provided: RenderType_WithdrawBankDetailsComponent, View_WithdrawBankDetailsComponent_0, View_WithdrawBankDetailsComponent_Host_0, WithdrawBankDetailsComponentNgFactory */

  /***/
  function srcAppComponentsWithdrawBankDetailsWithdrawBankDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_WithdrawBankDetailsComponent", function () {
      return RenderType_WithdrawBankDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WithdrawBankDetailsComponent_0", function () {
      return View_WithdrawBankDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WithdrawBankDetailsComponent_Host_0", function () {
      return View_WithdrawBankDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawBankDetailsComponentNgFactory", function () {
      return WithdrawBankDetailsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _withdraw_bank_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./withdraw-bank-details.component */
    "./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_WithdrawBankDetailsComponent = [];

    var RenderType_WithdrawBankDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_WithdrawBankDetailsComponent,
      data: {}
    });

    function View_WithdrawBankDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 30, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 5, "div", [["class", "col-12 subtitlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["WITHDRAW: RM 100.00"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 0, "img", [["class", "d-flex max-width-100"], ["src", "assets/icons-img/linewhite2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Effective 24 AUG 2020 (Today)"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 22, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 21, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 20, "div", [["class", "bankdetailview"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 19, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 8, "div", [["class", "col-7 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 7, "div", [["class", "transaction-box flex-align-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 6, "div", [["class", "d-flex flex-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "span", [["class", "mt-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 0, "img", [["class", "wh-20-20"], ["src", "assets/icons-img/icon-info3.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 3, "div", [["class", "summary-currency-view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 1, "span", [["class", "mr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 0, "img", [["src", "assets/icons-img/icon-creditsmall2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" RM 100.05 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "div", [["class", "col-2 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 1, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-creditbig1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 6, "div", [["class", "col-3 flex-align-center text-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold mb-1 line-height-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["MAY BANK ACCOUNT"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/logomaybank1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 1, "div", [["class", "d8p-h6 mb-1 line-height-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ahmad Hannan"]))], null, null);
    }

    function View_WithdrawBankDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-withdraw-bank-details", [], null, null, null, View_WithdrawBankDetailsComponent_0, RenderType_WithdrawBankDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _withdraw_bank_details_component__WEBPACK_IMPORTED_MODULE_1__["WithdrawBankDetailsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var WithdrawBankDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-withdraw-bank-details", _withdraw_bank_details_component__WEBPACK_IMPORTED_MODULE_1__["WithdrawBankDetailsComponent"], View_WithdrawBankDetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: WithdrawBankDetailsComponent */

  /***/
  function srcAppComponentsWithdrawBankDetailsWithdrawBankDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawBankDetailsComponent", function () {
      return WithdrawBankDetailsComponent;
    });

    var WithdrawBankDetailsComponent = /*#__PURE__*/function () {
      function WithdrawBankDetailsComponent() {
        _classCallCheck(this, WithdrawBankDetailsComponent);
      }

      _createClass(WithdrawBankDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WithdrawBankDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/bankload-details/bankload-details.component.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/bankload-details/bankload-details.component.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: RenderType_BankloadDetailsComponent, View_BankloadDetailsComponent_0, View_BankloadDetailsComponent_Host_0, BankloadDetailsComponentNgFactory */

  /***/
  function srcAppPagesBankloadDetailsBankloadDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BankloadDetailsComponent", function () {
      return RenderType_BankloadDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BankloadDetailsComponent_0", function () {
      return View_BankloadDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BankloadDetailsComponent_Host_0", function () {
      return View_BankloadDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankloadDetailsComponentNgFactory", function () {
      return BankloadDetailsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/transaction-view/transaction-view.component.ngfactory */
    "./src/app/components/transaction-view/transaction-view.component.ngfactory.js");
    /* harmony import */


    var _components_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/transaction-view/transaction-view.component */
    "./src/app/components/transaction-view/transaction-view.component.ts");
    /* harmony import */


    var _components_bank_details_bank_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/bank-details/bank-details.component.ngfactory */
    "./src/app/components/bank-details/bank-details.component.ngfactory.js");
    /* harmony import */


    var _components_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/bank-details/bank-details.component */
    "./src/app/components/bank-details/bank-details.component.ts");
    /* harmony import */


    var _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/otpcard/otpcard.component.ngfactory */
    "./src/app/components/otpcard/otpcard.component.ngfactory.js");
    /* harmony import */


    var _components_otpcard_otpcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/otpcard/otpcard.component */
    "./src/app/components/otpcard/otpcard.component.ts");
    /* harmony import */


    var _bankload_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./bankload-details.component */
    "./src/app/pages/bankload-details/bankload-details.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BankloadDetailsComponent = [];

    var RenderType_BankloadDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_BankloadDetailsComponent,
      data: {}
    });

    function View_BankloadDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transaction-view", [], null, null, null, _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TransactionViewComponent_0"], _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TransactionViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _components_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_2__["TransactionViewComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "app-bank-details", [], null, null, null, _components_bank_details_bank_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_BankDetailsComponent_0"], _components_bank_details_bank_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_BankDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _components_bank_details_bank_details_component__WEBPACK_IMPORTED_MODULE_4__["BankDetailsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "app-otpcard", [], null, null, null, _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_OtpcardComponent_0"], _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_OtpcardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _components_otpcard_otpcard_component__WEBPACK_IMPORTED_MODULE_6__["OtpcardComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);

        _ck(_v, 5, 0);
      }, null);
    }

    function View_BankloadDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-bankload-details", [], null, null, null, View_BankloadDetailsComponent_0, RenderType_BankloadDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _bankload_details_component__WEBPACK_IMPORTED_MODULE_7__["BankloadDetailsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BankloadDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-bankload-details", _bankload_details_component__WEBPACK_IMPORTED_MODULE_7__["BankloadDetailsComponent"], View_BankloadDetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/bankload-details/bankload-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/bankload-details/bankload-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BankloadDetailsComponent */

  /***/
  function srcAppPagesBankloadDetailsBankloadDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankloadDetailsComponent", function () {
      return BankloadDetailsComponent;
    });

    var BankloadDetailsComponent = /*#__PURE__*/function () {
      function BankloadDetailsComponent() {
        _classCallCheck(this, BankloadDetailsComponent);
      }

      _createClass(BankloadDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BankloadDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/bankload/bankload.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/pages/bankload/bankload.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_BankloadComponent, View_BankloadComponent_0, View_BankloadComponent_Host_0, BankloadComponentNgFactory */

  /***/
  function srcAppPagesBankloadBankloadComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BankloadComponent", function () {
      return RenderType_BankloadComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BankloadComponent_0", function () {
      return View_BankloadComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BankloadComponent_Host_0", function () {
      return View_BankloadComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankloadComponentNgFactory", function () {
      return BankloadComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/list/index.ngfactory */
    "./node_modules/@angular/material/list/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component.ngfactory */
    "./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component */
    "./src/app/components/dashboard-header/dashboard-header.component.ts");
    /* harmony import */


    var _bankload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./bankload.component */
    "./src/app/pages/bankload/bankload.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BankloadComponent = [];

    var RenderType_BankloadComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_BankloadComponent,
      data: {}
    });

    function View_BankloadComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 108, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "button", [["class", "d8p-handburger mat-focus-indicator"], ["fxHide.gt-sm", ""], ["fxShow", "true"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).toggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 102, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 12, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 3325952, [[1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 10, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, 0, 4, "div", [["class", "mt-4"], ["mat-list-item", ""], ["routerLink", "/recent-transactions"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-inbox.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recent transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 3, "div", [["class", "mt-2"], ["mat-list-item", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-logout.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 1, 84, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, 0, 82, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "dashboard-header-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "app-dashboard-header", [], null, null, null, _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DashboardHeaderComponent_0"], _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DashboardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 114688, null, 0, _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__["DashboardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 76, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 75, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 74, "div", [["class", "dashboard-content-box pb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 12, "div", [["class", "container-fluid quicklinkbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 11, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 10, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 9, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" BANK LOAD "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 5, "div", [["class", "row no-gutters mt-2 mt-xl-4 pb-xl-4 mb-3 mb-xl-5 flex-valign-75"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 2, "div", [["class", "col-3 flex-align-center flex-column border-right-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-bankload2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "div", [["class", "col-9 pl-3 color-white font-size-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Funds residing in my internet banking account will be used to load my D-8P Acc. MYR e-Wallet. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Amount (RM) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "transfer-amount"], ["placeholder", "Ex: 100"], ["type", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 25, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 24, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 23, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 22, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Internet Banking Channels "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 18, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 2, "div", [["class", "col-4 border-right-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "div", [["class", "height-60 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 0, "img", [["class", "max-width-40"], ["src", "assets/icons-img/logomaybank1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 2, "div", [["class", "col-4 border-right-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 1, "div", [["class", "height-60 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/logocimbbank1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 2, "div", [["class", "col-4 flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 1, "div", [["class", "height-60 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/logorhbbank1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 2, "div", [["class", "col-4 border-top-grey border-right-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "div", [["class", "height-60 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/logobankrakyat1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 2, "div", [["class", "col-4 border-top-grey border-right-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 1, "div", [["class", "height-60 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/logopublicbank1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 2, "div", [["class", "col-4 border-top-grey"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 1, "div", [["class", "height-60 flex-align-center text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/logobankmuamalat1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Reference "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "reference number"], ["placeholder", "Ex: May transfer"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 14, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 13, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 12, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 11, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Confirmation "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 7, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 6, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 5, "div", [["class", "button-container text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 4, "button", [["class", "d8p-btn-default"], ["routerLink", "/bankload-details"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 105).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](105, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Confirm "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 0, "img", [["class", "p-1 max-width-25-px"], ["src", "assets/icons-img/icon-correct2.png"]], null, null, null, null, null))], function (_ck, _v) {
        _ck(_v, 4, 0);

        _ck(_v, 7, 0);

        var currVal_15 = "/recent-transactions";

        _ck(_v, 16, 0, currVal_15);

        _ck(_v, 25, 0);

        _ck(_v, 31, 0);

        var currVal_18 = "/bankload-details";

        _ck(_v, 105, 0, currVal_18);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._backdropOverride;

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).position === "end";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "over";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "push";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "side";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).opened;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedTopGap : null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedBottomGap : null;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationState;

        _ck(_v, 11, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.left;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.right;

        _ck(_v, 24, 0, currVal_16, currVal_17);
      });
    }

    function View_BankloadComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-bankload", [], null, null, null, View_BankloadComponent_0, RenderType_BankloadComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _bankload_component__WEBPACK_IMPORTED_MODULE_18__["BankloadComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BankloadComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-bankload", _bankload_component__WEBPACK_IMPORTED_MODULE_18__["BankloadComponent"], View_BankloadComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/bankload/bankload.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/bankload/bankload.component.ts ***!
    \******************************************************/

  /*! exports provided: BankloadComponent */

  /***/
  function srcAppPagesBankloadBankloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankloadComponent", function () {
      return BankloadComponent;
    });

    var BankloadComponent = /*#__PURE__*/function () {
      function BankloadComponent() {
        _classCallCheck(this, BankloadComponent);
      }

      _createClass(BankloadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BankloadComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ngfactory.js":
  /*!******************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ngfactory.js ***!
    \******************************************************************/

  /*! exports provided: RenderType_DashboardComponent, View_DashboardComponent_0, View_DashboardComponent_Host_0, DashboardComponentNgFactory */

  /***/
  function srcAppPagesDashboardDashboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_DashboardComponent", function () {
      return RenderType_DashboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_0", function () {
      return View_DashboardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_DashboardComponent_Host_0", function () {
      return View_DashboardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponentNgFactory", function () {
      return DashboardComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/list/index.ngfactory */
    "./node_modules/@angular/material/list/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component.ngfactory */
    "./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component */
    "./src/app/components/dashboard-header/dashboard-header.component.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_DashboardComponent = [];

    var RenderType_DashboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_DashboardComponent,
      data: {
        "animation": [{
          type: 7,
          name: "fadeInAnimation",
          definitions: [{
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 1
                },
                offset: null
              },
              timings: ".3s"
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_DashboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 187, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "button", [["class", "d8p-handburger mat-focus-indicator"], ["fxHide.gt-sm", ""], ["fxShow", "true"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).toggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 181, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 12, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 3325952, [[1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 10, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, 0, 4, "div", [["class", "mt-4"], ["mat-list-item", ""], ["routerLink", "/recent-transactions"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-inbox.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recent transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 3, "div", [["class", "mt-2"], ["mat-list-item", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-logout.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 1, 163, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, 0, 161, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "dashboard-header-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "app-dashboard-header", [], null, null, null, _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DashboardHeaderComponent_0"], _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DashboardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 114688, null, 0, _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__["DashboardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 155, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 154, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 153, "div", [["class", "dashboard-content-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 29, "div", [["class", "container-fluid quicklinkbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 28, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 27, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 26, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Quick Links "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 22, "div", [["class", "row no-gutters mt-2 mt-xl-4 pb-xl-4 mb-3 mb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 5, "div", [["class", "col-3 flex-align-center flex-column border-right-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 2, "div", [["class", "height-60 text-center"], ["routerLink", "/transfer"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-transfer2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 4, "div", [["class", "col-3 flex-align-center flex-column border-right-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-utilities2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 5, "div", [["class", "col-3 flex-align-center flex-column border-right-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 2, "div", [["class", "height-60 text-center"], ["routerLink", "/bankload"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-bankload2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 4, "div", [["class", "col-3 flex-align-center flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-buygold2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 40, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 39, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 38, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 37, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Transfer "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 33, "div", [["class", "row no-gutters mt-2 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 5, "div", [["class", "col-4 flex-align-center flex-column border-right-grey pb-4 pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 2, "div", [["class", "height-60 text-center"], ["routerLink", "/bankload"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 77).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-bankload1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 5, "div", [["class", "col-4 flex-align-center flex-column border-right-grey pb-4 pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](82, 0, null, null, 2, "div", [["class", "height-60 text-center"], ["routerLink", "/transfer"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 83).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-transfer1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 4, "div", [["class", "col-4 flex-align-center flex-column pb-4 pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-buygold1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 5, "div", [["class", "col-4 flex-align-center flex-column border-top-grey border-right-grey pt-2 pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 2, "div", [["class", "height-60 text-center"], ["routerLink", "/withdraw"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 94).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](94, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-withdraw1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 4, "div", [["class", "col-4 flex-align-center flex-column border-top-grey border-right-grey pt-2 pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-remitgold1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 4, "div", [["class", "col-4 flex-align-center flex-column border-top-grey pt-2 pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 0, "img", [["class", "max-width-30"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-sellgold1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 27, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 26, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 25, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](109, 0, null, null, 24, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Payment "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 20, "div", [["class", "row no-gutters mt-2 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 4, "div", [["class", "col-3 flex-align-center flex-column border-right-grey pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 0, "img", [["class", "max-width-40"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-salaryfew1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 4, "div", [["class", "col-3 flex-align-center flex-column border-right-grey pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 0, "img", [["class", "max-width-40"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-salarybig1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](124, 0, null, null, 4, "div", [["class", "col-3 flex-align-center flex-column border-right-grey pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 0, "img", [["class", "max-width-40"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 0, "img", [["class", "max-width-50"], ["src", "assets/icons-img/icon-utilities1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 4, "div", [["class", "col-3 flex-align-center flex-column pb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](130, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](131, 0, null, null, 0, "img", [["class", "max-width-40"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](132, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 0, "img", [["class", "max-width-50"], ["src", "assets/icons-img/icon-donate1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 17, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 16, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 15, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](137, 0, null, null, 14, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](138, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Advanced Gold Services "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](141, 0, null, null, 10, "div", [["class", "row no-gutters mt-2 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](142, 0, null, null, 4, "div", [["class", "col-6 flex-align-center flex-column border-right-grey pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](143, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 0, "img", [["class", "max-width-20"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](145, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](146, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-redeem.png"], ["width", "120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, null, 4, "div", [["class", "col-6 flex-align-center flex-column pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](148, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](149, 0, null, null, 0, "img", [["class", "max-width-20"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](150, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](151, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-pledge.png"], ["width", "120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](152, 0, null, null, 17, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 0, null, null, 16, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](154, 0, null, null, 15, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](155, 0, null, null, 14, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](156, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](157, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Market Place "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](159, 0, null, null, 10, "div", [["class", "row no-gutters mt-2 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 4, "div", [["class", "col-6 flex-align-center flex-column border-right-grey pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](161, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](162, 0, null, null, 0, "img", [["class", "max-width-20"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](163, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](164, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-buynear.png"], ["width", "120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](165, 0, null, null, 4, "div", [["class", "col-6 flex-align-center flex-column pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](166, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](167, 0, null, null, 0, "img", [["class", "max-width-20"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](168, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](169, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-buyglobal.png"], ["width", "160"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](170, 0, null, null, 17, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](171, 0, null, null, 16, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](172, 0, null, null, 15, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](173, 0, null, null, 14, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](174, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](175, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Invest "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](177, 0, null, null, 10, "div", [["class", "row no-gutters mt-2 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](178, 0, null, null, 4, "div", [["class", "col-6 flex-align-center flex-column border-right-grey pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](179, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](180, 0, null, null, 0, "img", [["class", "max-width-20"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](181, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](182, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/myr_D8PMM.png"], ["width", "120"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](183, 0, null, null, 4, "div", [["class", "col-6 flex-align-center flex-column pb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](184, 0, null, null, 1, "div", [["class", "text-right w-100 pr-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](185, 0, null, null, 0, "img", [["class", "max-width-20"], ["src", "assets/icons-img/icon-info1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](186, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](187, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/myr_D8PETF.png"], ["width", "120"]], null, null, null, null, null))], function (_ck, _v) {
        _ck(_v, 4, 0);

        _ck(_v, 7, 0);

        var currVal_15 = "/recent-transactions";

        _ck(_v, 16, 0, currVal_15);

        _ck(_v, 25, 0);

        _ck(_v, 31, 0);

        var currVal_18 = "/transfer";

        _ck(_v, 47, 0, currVal_18);

        var currVal_19 = "/bankload";

        _ck(_v, 58, 0, currVal_19);

        var currVal_20 = "/bankload";

        _ck(_v, 77, 0, currVal_20);

        var currVal_21 = "/transfer";

        _ck(_v, 83, 0, currVal_21);

        var currVal_22 = "/withdraw";

        _ck(_v, 94, 0, currVal_22);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._backdropOverride;

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).position === "end";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "over";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "push";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "side";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).opened;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedTopGap : null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedBottomGap : null;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationState;

        _ck(_v, 11, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.left;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.right;

        _ck(_v, 24, 0, currVal_16, currVal_17);
      });
    }

    function View_DashboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-dashboard", [], [[40, "@fadeInAnimation", 0]], null, null, View_DashboardComponent_0, RenderType_DashboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var DashboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-dashboard", _dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"], View_DashboardComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/index.ts":
  /*!********************************!*\
    !*** ./src/app/pages/index.ts ***!
    \********************************/

  /*! exports provided: LoginComponent, LoginPwdComponent, DashboardComponent, TransferComponent, TransactionDetailsComponent, BankloadComponent, BankloadDetailsComponent, WithdrawComponent, WithdrawDetailsComponent, RecentTransactionsComponent */

  /***/
  function srcAppPagesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
    });
    /* harmony import */


    var _login_pwd_login_pwd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login-pwd/login-pwd.component */
    "./src/app/pages/login-pwd/login-pwd.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginPwdComponent", function () {
      return _login_pwd_login_pwd_component__WEBPACK_IMPORTED_MODULE_1__["LoginPwdComponent"];
    });
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"];
    });
    /* harmony import */


    var _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfer/transfer.component */
    "./src/app/pages/transfer/transfer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TransferComponent", function () {
      return _transfer_transfer_component__WEBPACK_IMPORTED_MODULE_3__["TransferComponent"];
    });
    /* harmony import */


    var _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./transaction-details/transaction-details.component */
    "./src/app/pages/transaction-details/transaction-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function () {
      return _transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_4__["TransactionDetailsComponent"];
    });
    /* harmony import */


    var _bankload_bankload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bankload/bankload.component */
    "./src/app/pages/bankload/bankload.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BankloadComponent", function () {
      return _bankload_bankload_component__WEBPACK_IMPORTED_MODULE_5__["BankloadComponent"];
    });
    /* harmony import */


    var _bankload_details_bankload_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bankload-details/bankload-details.component */
    "./src/app/pages/bankload-details/bankload-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BankloadDetailsComponent", function () {
      return _bankload_details_bankload_details_component__WEBPACK_IMPORTED_MODULE_6__["BankloadDetailsComponent"];
    });
    /* harmony import */


    var _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./withdraw/withdraw.component */
    "./src/app/pages/withdraw/withdraw.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
      return _withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawComponent"];
    });
    /* harmony import */


    var _withdraw_details_withdraw_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./withdraw-details/withdraw-details.component */
    "./src/app/pages/withdraw-details/withdraw-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "WithdrawDetailsComponent", function () {
      return _withdraw_details_withdraw_details_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawDetailsComponent"];
    });
    /* harmony import */


    var _recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./recent-transactions/recent-transactions.component */
    "./src/app/pages/recent-transactions/recent-transactions.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RecentTransactionsComponent", function () {
      return _recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_9__["RecentTransactionsComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/login-pwd/login-pwd.component.ngfactory.js":
  /*!******************************************************************!*\
    !*** ./src/app/pages/login-pwd/login-pwd.component.ngfactory.js ***!
    \******************************************************************/

  /*! exports provided: RenderType_LoginPwdComponent, View_LoginPwdComponent_0, View_LoginPwdComponent_Host_0, LoginPwdComponentNgFactory */

  /***/
  function srcAppPagesLoginPwdLoginPwdComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginPwdComponent", function () {
      return RenderType_LoginPwdComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginPwdComponent_0", function () {
      return View_LoginPwdComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginPwdComponent_Host_0", function () {
      return View_LoginPwdComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPwdComponentNgFactory", function () {
      return LoginPwdComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_pwd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-pwd.component */
    "./src/app/pages/login-pwd/login-pwd.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_LoginPwdComponent = [];

    var RenderType_LoginPwdComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_LoginPwdComponent,
      data: {
        "animation": [{
          type: 7,
          name: "fadeInAnimation",
          definitions: [{
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 1
                },
                offset: null
              },
              timings: ".3s"
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_LoginPwdComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-login2.png"]], null, null, null, null, null))], null, null);
    }

    function View_LoginPwdComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-login1.png"]], null, null, null, null, null))], null, null);
    }

    function View_LoginPwdComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 43, "div", [["class", "container-fluid common-cls loginpg grey-gradient p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 42, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 41, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 40, "div", [["class", "login-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "div", [["class", "d8p-main-back-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "img", [["class", "max-width-40 mb-4"], ["routerLink", "/login"], ["src", "assets/icons-img/logod81.png"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 32, "div", [["class", "login-container max-width-100 overflow-hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 3, "div", [["class", "text-center mt-xl-4 mb-4 pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "img", [["class", "mt-lg-5 pt-lg-5"], ["src", "assets/icons-img/logod8p2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "d8p-h4 color-cyan"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["WEALTH. UMMAH.SECURE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 27, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 17, "div", [["class", "formfield max-width-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 16, "div", [["class", "input-group mb-3 group-input-border-radius"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 8, "input", [["aria-describedby", "basic-addon2"], ["aria-label", "Recipient's username"], ["autocomplete", "new-password"], ["class", "form-control d8p-input min-height-60"], ["maxlength", "6"], ["name", "pwd"], ["pattern", "\\d*"], ["placeholder", "Password"], ["type", "password"]], [[1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.pwd = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], {
        pattern: [0, "pattern"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 5, "span", [["class", "input-group-text group-input-icon-field"], ["id", "basic-addon2"], ["routerLink", "/dashboard"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginPwdComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginPwdComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 4, "div", [["class", "button-container text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 3, "button", [["class", "d8p-btn-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Signup "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 0, "img", [["class", "max-width-25-px"], ["src", "assets/icons-img/icon-signup1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 2, "div", [["class", "sponsored text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 0, "img", [["class", "max-width-40 mr-2 mr-xl-4"], ["src", "assets/icons-img/logod8s1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 0, "img", [["class", "max-width-40 ml-2 ml-xl-4"], ["src", "assets/icons-img/logokomeps.png"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "/login";

        _ck(_v, 6, 0, currVal_0);

        var currVal_17 = "6";

        _ck(_v, 22, 0, currVal_17);

        var currVal_18 = "\\d*";

        _ck(_v, 23, 0, currVal_18);

        var currVal_19 = "pwd";
        var currVal_20 = _co.pwd;

        _ck(_v, 26, 0, currVal_19, currVal_20);

        var currVal_21 = "/dashboard";

        _ck(_v, 31, 0, currVal_21);

        var currVal_22 = _co.pwd;

        _ck(_v, 33, 0, currVal_22);

        var currVal_23 = !_co.pwd;

        _ck(_v, 35, 0, currVal_23);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 13, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).maxlength : null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).pattern : null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending;

        _ck(_v, 20, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
      });
    }

    function View_LoginPwdComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-login-pwd", [], [[40, "@fadeInAnimation", 0]], null, null, View_LoginPwdComponent_0, RenderType_LoginPwdComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _login_pwd_component__WEBPACK_IMPORTED_MODULE_4__["LoginPwdComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var LoginPwdComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-login-pwd", _login_pwd_component__WEBPACK_IMPORTED_MODULE_4__["LoginPwdComponent"], View_LoginPwdComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/login-pwd/login-pwd.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/login-pwd/login-pwd.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginPwdComponent */

  /***/
  function srcAppPagesLoginPwdLoginPwdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPwdComponent", function () {
      return LoginPwdComponent;
    });

    var LoginPwdComponent = /*#__PURE__*/function () {
      function LoginPwdComponent() {
        _classCallCheck(this, LoginPwdComponent);
      }

      _createClass(LoginPwdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginPwdComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/pages/login/login.component.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: RenderType_LoginComponent, View_LoginComponent_0, View_LoginComponent_Host_0, LoginComponentNgFactory */

  /***/
  function srcAppPagesLoginLoginComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_LoginComponent", function () {
      return RenderType_LoginComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_0", function () {
      return View_LoginComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_LoginComponent_Host_0", function () {
      return View_LoginComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponentNgFactory", function () {
      return LoginComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_LoginComponent = [];

    var RenderType_LoginComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_LoginComponent,
      data: {
        "animation": [{
          type: 7,
          name: "fadeInAnimation",
          definitions: [{
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 1
                },
                offset: null
              },
              timings: ".3s"
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_LoginComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-correct1.png"]], null, null, null, null, null))], null, null);
    }

    function View_LoginComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "button", [["class", "d8p-transparent-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/icon-correct2.png"]], null, null, null, null, null))], null, null);
    }

    function View_LoginComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 43, "div", [["class", "container-fluid common-cls loginpg grey-gradient p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 42, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 41, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 40, "div", [["class", "login-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "div", [["class", "d8p-main-back-btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "img", [["class", "max-width-40 mb-4"], ["routerLink", "/login"], ["src", "assets/icons-img/logod81.png"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 32, "div", [["class", "login-container max-width-100 overflow-hidden"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 3, "div", [["class", "text-center mt-xl-4 mb-4 pt-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 0, "img", [["class", "mt-lg-5 pt-lg-5"], ["src", "assets/icons-img/logod8p2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "d8p-h4 color-cyan"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["WEALTH. UMMAH.SECURE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 27, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 17, "div", [["class", "formfield max-width-100"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 16, "div", [["class", "input-group mb-3 group-input-border-radius"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 8, "input", [["aria-describedby", "basic-addon2"], ["aria-label", "Recipient's username"], ["class", "form-control d8p-input min-height-60"], ["maxlength", "10"], ["name", "mobileno"], ["pattern", "\\d*"], ["placeholder", "Mobile Number"], ["type", "text"]], [[1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 21)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.mobileno = $event) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], {
        maxlength: [0, "maxlength"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], {
        pattern: [0, "pattern"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) {
        return [p0_0, p1_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], {
        name: [0, "name"],
        model: [1, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 6, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 5, "span", [["class", "input-group-text group-input-icon-field"], ["id", "basic-addon2"], ["routerLink", "/loginPwd"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 31).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_LoginComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 4, "div", [["class", "button-container text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 3, "button", [["class", "d8p-btn-default"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Signup "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 0, "img", [["class", "max-width-25-px"], ["src", "assets/icons-img/icon-signup1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 2, "div", [["class", "sponsored text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 0, "img", [["class", "max-width-40 mr-2 mr-xl-4"], ["src", "assets/icons-img/logod8s1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 0, "img", [["class", "max-width-40 ml-2 ml-xl-4"], ["src", "assets/icons-img/logokomeps.png"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "/login";

        _ck(_v, 6, 0, currVal_0);

        var currVal_17 = "10";

        _ck(_v, 22, 0, currVal_17);

        var currVal_18 = "\\d*";

        _ck(_v, 23, 0, currVal_18);

        var currVal_19 = "mobileno";
        var currVal_20 = _co.mobileno;

        _ck(_v, 26, 0, currVal_19, currVal_20);

        var currVal_21 = "/loginPwd";

        _ck(_v, 31, 0, currVal_21);

        var currVal_22 = _co.mobileno;

        _ck(_v, 33, 0, currVal_22);

        var currVal_23 = !_co.mobileno;

        _ck(_v, 35, 0, currVal_23);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 13, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).maxlength : null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).pattern : null;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending;

        _ck(_v, 20, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16);
      });
    }

    function View_LoginComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-login", [], [[40, "@fadeInAnimation", 0]], null, null, View_LoginComponent_0, RenderType_LoginComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    var LoginComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-login", _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], View_LoginComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/recent-transactions/recent-transactions.component.ngfactory.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/recent-transactions/recent-transactions.component.ngfactory.js ***!
    \**************************************************************************************/

  /*! exports provided: RenderType_RecentTransactionsComponent, View_RecentTransactionsComponent_0, View_RecentTransactionsComponent_Host_0, RecentTransactionsComponentNgFactory */

  /***/
  function srcAppPagesRecentTransactionsRecentTransactionsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_RecentTransactionsComponent", function () {
      return RenderType_RecentTransactionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RecentTransactionsComponent_0", function () {
      return View_RecentTransactionsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_RecentTransactionsComponent_Host_0", function () {
      return View_RecentTransactionsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentTransactionsComponentNgFactory", function () {
      return RecentTransactionsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/list/index.ngfactory */
    "./node_modules/@angular/material/list/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component.ngfactory */
    "./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component */
    "./src/app/components/dashboard-header/dashboard-header.component.ts");
    /* harmony import */


    var _recent_transactions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./recent-transactions.component */
    "./src/app/pages/recent-transactions/recent-transactions.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_RecentTransactionsComponent = [];

    var RenderType_RecentTransactionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_RecentTransactionsComponent,
      data: {}
    });

    function View_RecentTransactionsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 96, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "button", [["class", "d8p-handburger mat-focus-indicator"], ["fxHide.gt-sm", ""], ["fxShow", "true"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).toggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 90, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 12, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 3325952, [[1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 10, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, 0, 4, "div", [["class", "mt-4"], ["mat-list-item", ""], ["routerLink", "/recent-transactions"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-inbox.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recent transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 3, "div", [["class", "mt-2"], ["mat-list-item", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-logout.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 1, 72, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, 0, 70, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "dashboard-header-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "app-dashboard-header", [], null, null, null, _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DashboardHeaderComponent_0"], _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DashboardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 114688, null, 0, _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__["DashboardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 64, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 63, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 62, "div", [["class", "dashboard-content-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 61, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 60, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 59, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 58, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Recent Transactions "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 54, "div", [["class", "row no-gutters mt-2 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 53, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 52, "div", [["class", "d8p-transaction-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 51, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 16, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["20 May"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 13, "ul", [["class", "d8p-txn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 12, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 11, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 10, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "div", [["class", "col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 0, "img", [["src", "assets/icons-img/dollar-icon-green.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 4, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "div", [["class", "d8p-normal-text font-weight-bold color-black"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Rosli"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 1, "div", [["class", "d8p-normal-text overflow-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You just received RM 1000 conversion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 2, "div", [["class", "col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 1, "div", [["class", "d8p-smaller-text font-weight-bold text-right whitespace-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["06: 00 : AM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 16, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["18 Apr"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 13, "ul", [["class", "d8p-txn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 12, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 11, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 10, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 1, "div", [["class", "col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 0, "img", [["src", "assets/icons-img/dollar-icon-green.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 4, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 1, "div", [["class", "d8p-normal-text font-weight-bold color-black"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Rosli"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 1, "div", [["class", "d8p-normal-text overflow-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You just received RM 1000 conversion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 2, "div", [["class", "col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "div", [["class", "d8p-smaller-text font-weight-bold text-right whitespace-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["06: 00 : AM"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 16, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 1, "div", [["class", "d8p-h6 font-weight-bold"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["24 Mar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 13, "ul", [["class", "d8p-txn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 12, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 11, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 10, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 1, "div", [["class", "col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 0, "img", [["src", "assets/icons-img/dollar-icon-green.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 4, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 1, "div", [["class", "d8p-normal-text font-weight-bold color-black"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Rosli"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 1, "div", [["class", "d8p-normal-text overflow-dots"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You just received RM 1000 conversion"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 2, "div", [["class", "col-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 1, "div", [["class", "d8p-smaller-text font-weight-bold text-right whitespace-nowrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["06: 00 : AM"]))], function (_ck, _v) {
        _ck(_v, 4, 0);

        _ck(_v, 7, 0);

        var currVal_15 = "/recent-transactions";

        _ck(_v, 16, 0, currVal_15);

        _ck(_v, 25, 0);

        _ck(_v, 31, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._backdropOverride;

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).position === "end";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "over";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "push";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "side";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).opened;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedTopGap : null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedBottomGap : null;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationState;

        _ck(_v, 11, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.left;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.right;

        _ck(_v, 24, 0, currVal_16, currVal_17);
      });
    }

    function View_RecentTransactionsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-recent-transactions", [], null, null, null, View_RecentTransactionsComponent_0, RenderType_RecentTransactionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _recent_transactions_component__WEBPACK_IMPORTED_MODULE_18__["RecentTransactionsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var RecentTransactionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-recent-transactions", _recent_transactions_component__WEBPACK_IMPORTED_MODULE_18__["RecentTransactionsComponent"], View_RecentTransactionsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/recent-transactions/recent-transactions.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/recent-transactions/recent-transactions.component.ts ***!
    \****************************************************************************/

  /*! exports provided: RecentTransactionsComponent */

  /***/
  function srcAppPagesRecentTransactionsRecentTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentTransactionsComponent", function () {
      return RecentTransactionsComponent;
    });

    var RecentTransactionsComponent = /*#__PURE__*/function () {
      function RecentTransactionsComponent() {
        _classCallCheck(this, RecentTransactionsComponent);
      }

      _createClass(RecentTransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RecentTransactionsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/services/service.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/services/service.ts ***!
    \*******************************************/

  /*! exports provided: Services */

  /***/
  function srcAppPagesServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Services", function () {
      return Services;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Services = /*#__PURE__*/function () {
      function Services(http) {
        _classCallCheck(this, Services);

        this.http = http;
        this.authorizationData = 'Basic ' + btoa('rosli' + ':' + 'rosli');
        this.headerOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            Authorization: this.authorizationData
          })
        };
      }

      _createClass(Services, [{
        key: "getAccountBalance",
        value: function getAccountBalance() {
          return this.http.get('/rest/accounts/info', this.headerOptions);
        }
      }, {
        key: "getAccountTransactionList",
        value: function getAccountTransactionList() {
          return this.http.get('/rest/accounts/default/history', this.headerOptions);
        }
      }, {
        key: "getProfileData",
        value: function getProfileData() {
          return this.http.get('rest/members/me', this.headerOptions);
        }
      }, {
        key: "getTransferTypes",
        value: function getTransferTypes() {
          return this.http.get('/rest/transferTypes', this.headerOptions);
        }
      }]);

      return Services;
    }();

    Services.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      factory: function Services_Factory() {
        return new Services(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      },
      token: Services,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/pages/transaction-details/transaction-details.component.ngfactory.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/transaction-details/transaction-details.component.ngfactory.js ***!
    \**************************************************************************************/

  /*! exports provided: RenderType_TransactionDetailsComponent, View_TransactionDetailsComponent_0, View_TransactionDetailsComponent_Host_0, TransactionDetailsComponentNgFactory */

  /***/
  function srcAppPagesTransactionDetailsTransactionDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TransactionDetailsComponent", function () {
      return RenderType_TransactionDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransactionDetailsComponent_0", function () {
      return View_TransactionDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransactionDetailsComponent_Host_0", function () {
      return View_TransactionDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponentNgFactory", function () {
      return TransactionDetailsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/transaction-view/transaction-view.component.ngfactory */
    "./src/app/components/transaction-view/transaction-view.component.ngfactory.js");
    /* harmony import */


    var _components_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/transaction-view/transaction-view.component */
    "./src/app/components/transaction-view/transaction-view.component.ts");
    /* harmony import */


    var _components_transfer_recipient_transfer_recipient_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/transfer-recipient/transfer-recipient.component.ngfactory */
    "./src/app/components/transfer-recipient/transfer-recipient.component.ngfactory.js");
    /* harmony import */


    var _components_transfer_recipient_transfer_recipient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/transfer-recipient/transfer-recipient.component */
    "./src/app/components/transfer-recipient/transfer-recipient.component.ts");
    /* harmony import */


    var _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/otpcard/otpcard.component.ngfactory */
    "./src/app/components/otpcard/otpcard.component.ngfactory.js");
    /* harmony import */


    var _components_otpcard_otpcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/otpcard/otpcard.component */
    "./src/app/components/otpcard/otpcard.component.ts");
    /* harmony import */


    var _transaction_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./transaction-details.component */
    "./src/app/pages/transaction-details/transaction-details.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_TransactionDetailsComponent = [];

    var RenderType_TransactionDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TransactionDetailsComponent,
      data: {}
    });

    function View_TransactionDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transaction-view", [], null, null, null, _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TransactionViewComponent_0"], _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TransactionViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _components_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_2__["TransactionViewComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "app-transfer-recipient", [], null, null, null, _components_transfer_recipient_transfer_recipient_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_TransferRecipientComponent_0"], _components_transfer_recipient_transfer_recipient_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_TransferRecipientComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _components_transfer_recipient_transfer_recipient_component__WEBPACK_IMPORTED_MODULE_4__["TransferRecipientComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "app-otpcard", [], null, null, null, _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_OtpcardComponent_0"], _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_OtpcardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _components_otpcard_otpcard_component__WEBPACK_IMPORTED_MODULE_6__["OtpcardComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);

        _ck(_v, 5, 0);
      }, null);
    }

    function View_TransactionDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transaction-details", [], null, null, null, View_TransactionDetailsComponent_0, RenderType_TransactionDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _transaction_details_component__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TransactionDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-transaction-details", _transaction_details_component__WEBPACK_IMPORTED_MODULE_7__["TransactionDetailsComponent"], View_TransactionDetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/transaction-details/transaction-details.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/transaction-details/transaction-details.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TransactionDetailsComponent */

  /***/
  function srcAppPagesTransactionDetailsTransactionDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function () {
      return TransactionDetailsComponent;
    });

    var TransactionDetailsComponent = /*#__PURE__*/function () {
      function TransactionDetailsComponent() {
        _classCallCheck(this, TransactionDetailsComponent);
      }

      _createClass(TransactionDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransactionDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/transfer/transfer.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/pages/transfer/transfer.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_TransferComponent, View_TransferComponent_0, View_TransferComponent_Host_0, TransferComponentNgFactory */

  /***/
  function srcAppPagesTransferTransferComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_TransferComponent", function () {
      return RenderType_TransferComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransferComponent_0", function () {
      return View_TransferComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_TransferComponent_Host_0", function () {
      return View_TransferComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferComponentNgFactory", function () {
      return TransferComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/list/index.ngfactory */
    "./node_modules/@angular/material/list/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component.ngfactory */
    "./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component */
    "./src/app/components/dashboard-header/dashboard-header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _transfer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./transfer.component */
    "./src/app/pages/transfer/transfer.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_TransferComponent = [];

    var RenderType_TransferComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_TransferComponent,
      data: {}
    });

    function View_TransferComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 117, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "button", [["class", "d8p-handburger mat-focus-indicator"], ["fxHide.gt-sm", ""], ["fxShow", "true"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).toggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 111, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 12, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 3325952, [[1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 10, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, 0, 4, "div", [["class", "mt-4"], ["mat-list-item", ""], ["routerLink", "/recent-transactions"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-inbox.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recent transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 3, "div", [["class", "mt-2"], ["mat-list-item", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-logout.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 1, 93, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, 0, 91, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "dashboard-header-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "app-dashboard-header", [], null, null, null, _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DashboardHeaderComponent_0"], _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DashboardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 114688, null, 0, _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__["DashboardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 85, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 84, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 83, "div", [["class", "dashboard-content-box pb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 12, "div", [["class", "container-fluid quicklinkbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 11, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 10, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 9, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" TRANSFER "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 5, "div", [["class", "row no-gutters mt-2 mt-xl-4 pb-xl-4 mb-3 mb-xl-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 2, "div", [["class", "col-3 flex-align-center flex-column border-right-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-transfer2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "div", [["class", "col-9 pl-3 color-white font-size-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Funds residing in my D-8P Account MYR e-Wallet will be transferred to another recipient's D-8P Account MYR e-Wallet. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Amount (RM) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "transfer-amount"], ["placeholder", "Ex: 100"], ["type", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 24, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 23, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 22, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 21, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Recipient's Account Number "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "recipient-accountno"], ["placeholder", "Ex: 1234567890"], ["type", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 14, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 13, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](70, 0, null, null, 12, "select", [["class", "d8p-select arrowstyle"], ["name", "Choose Favorite"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](73, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["choose favorite"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](77, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Amar"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Rosli"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Reference "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](91, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "reference number"], ["placeholder", "Ex: May transfer"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Effective Date "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 0, "input", [["class", "d8p-input-normal w-100 text-transform-uppercase"], ["name", "transfer date"], ["placeholder", "Choose Transfer Date"], ["type", "Date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 14, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 13, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 12, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 11, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Confirmation "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 7, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 6, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 5, "div", [["class", "button-container text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 4, "button", [["class", "d8p-btn-default"], ["routerLink", "/transfer-details"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 114).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](114, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Confirm "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 0, "img", [["class", "p-1 max-width-25-px"], ["src", "assets/icons-img/icon-correct2.png"]], null, null, null, null, null))], function (_ck, _v) {
        _ck(_v, 4, 0);

        _ck(_v, 7, 0);

        var currVal_15 = "/recent-transactions";

        _ck(_v, 16, 0, currVal_15);

        _ck(_v, 25, 0);

        _ck(_v, 31, 0);

        var currVal_18 = "/transfer-details";

        _ck(_v, 114, 0, currVal_18);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._backdropOverride;

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).position === "end";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "over";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "push";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "side";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).opened;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedTopGap : null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedBottomGap : null;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationState;

        _ck(_v, 11, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.left;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.right;

        _ck(_v, 24, 0, currVal_16, currVal_17);
      });
    }

    function View_TransferComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transfer", [], null, null, null, View_TransferComponent_0, RenderType_TransferComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _transfer_component__WEBPACK_IMPORTED_MODULE_19__["TransferComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var TransferComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-transfer", _transfer_component__WEBPACK_IMPORTED_MODULE_19__["TransferComponent"], View_TransferComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/transfer/transfer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/transfer/transfer.component.ts ***!
    \******************************************************/

  /*! exports provided: TransferComponent */

  /***/
  function srcAppPagesTransferTransferComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransferComponent", function () {
      return TransferComponent;
    });

    var TransferComponent = /*#__PURE__*/function () {
      function TransferComponent() {
        _classCallCheck(this, TransferComponent);
      }

      _createClass(TransferComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransferComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/withdraw-details/withdraw-details.component.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/withdraw-details/withdraw-details.component.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: RenderType_WithdrawDetailsComponent, View_WithdrawDetailsComponent_0, View_WithdrawDetailsComponent_Host_0, WithdrawDetailsComponentNgFactory */

  /***/
  function srcAppPagesWithdrawDetailsWithdrawDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_WithdrawDetailsComponent", function () {
      return RenderType_WithdrawDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WithdrawDetailsComponent_0", function () {
      return View_WithdrawDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WithdrawDetailsComponent_Host_0", function () {
      return View_WithdrawDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawDetailsComponentNgFactory", function () {
      return WithdrawDetailsComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/transaction-view/transaction-view.component.ngfactory */
    "./src/app/components/transaction-view/transaction-view.component.ngfactory.js");
    /* harmony import */


    var _components_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/transaction-view/transaction-view.component */
    "./src/app/components/transaction-view/transaction-view.component.ts");
    /* harmony import */


    var _components_withdraw_bank_details_withdraw_bank_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/withdraw-bank-details/withdraw-bank-details.component.ngfactory */
    "./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ngfactory.js");
    /* harmony import */


    var _components_withdraw_bank_details_withdraw_bank_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/withdraw-bank-details/withdraw-bank-details.component */
    "./src/app/components/withdraw-bank-details/withdraw-bank-details.component.ts");
    /* harmony import */


    var _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/otpcard/otpcard.component.ngfactory */
    "./src/app/components/otpcard/otpcard.component.ngfactory.js");
    /* harmony import */


    var _components_otpcard_otpcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/otpcard/otpcard.component */
    "./src/app/components/otpcard/otpcard.component.ts");
    /* harmony import */


    var _withdraw_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./withdraw-details.component */
    "./src/app/pages/withdraw-details/withdraw-details.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_WithdrawDetailsComponent = [];

    var RenderType_WithdrawDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_WithdrawDetailsComponent,
      data: {}
    });

    function View_WithdrawDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-transaction-view", [], null, null, null, _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_TransactionViewComponent_0"], _components_transaction_view_transaction_view_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_TransactionViewComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _components_transaction_view_transaction_view_component__WEBPACK_IMPORTED_MODULE_2__["TransactionViewComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "app-withdraw-bank-details", [], null, null, null, _components_withdraw_bank_details_withdraw_bank_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_WithdrawBankDetailsComponent_0"], _components_withdraw_bank_details_withdraw_bank_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_WithdrawBankDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _components_withdraw_bank_details_withdraw_bank_details_component__WEBPACK_IMPORTED_MODULE_4__["WithdrawBankDetailsComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "app-otpcard", [], null, null, null, _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_OtpcardComponent_0"], _components_otpcard_otpcard_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_OtpcardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, null, 0, _components_otpcard_otpcard_component__WEBPACK_IMPORTED_MODULE_6__["OtpcardComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);

        _ck(_v, 3, 0);

        _ck(_v, 5, 0);
      }, null);
    }

    function View_WithdrawDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-withdraw-details", [], null, null, null, View_WithdrawDetailsComponent_0, RenderType_WithdrawDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _withdraw_details_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawDetailsComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var WithdrawDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-withdraw-details", _withdraw_details_component__WEBPACK_IMPORTED_MODULE_7__["WithdrawDetailsComponent"], View_WithdrawDetailsComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/withdraw-details/withdraw-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/withdraw-details/withdraw-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: WithdrawDetailsComponent */

  /***/
  function srcAppPagesWithdrawDetailsWithdrawDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawDetailsComponent", function () {
      return WithdrawDetailsComponent;
    });

    var WithdrawDetailsComponent = /*#__PURE__*/function () {
      function WithdrawDetailsComponent() {
        _classCallCheck(this, WithdrawDetailsComponent);
      }

      _createClass(WithdrawDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WithdrawDetailsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/withdraw/withdraw.component.ngfactory.js":
  /*!****************************************************************!*\
    !*** ./src/app/pages/withdraw/withdraw.component.ngfactory.js ***!
    \****************************************************************/

  /*! exports provided: RenderType_WithdrawComponent, View_WithdrawComponent_0, View_WithdrawComponent_Host_0, WithdrawComponentNgFactory */

  /***/
  function srcAppPagesWithdrawWithdrawComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_WithdrawComponent", function () {
      return RenderType_WithdrawComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WithdrawComponent_0", function () {
      return View_WithdrawComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_WithdrawComponent_Host_0", function () {
      return View_WithdrawComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponentNgFactory", function () {
      return WithdrawComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/button/index.ngfactory */
    "./node_modules/@angular/material/button/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/icon/index.ngfactory */
    "./node_modules/@angular/material/icon/index.ngfactory.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/sidenav/index.ngfactory */
    "./node_modules/@angular/material/sidenav/index.ngfactory.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/list/index.ngfactory */
    "./node_modules/@angular/material/list/index.ngfactory.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component.ngfactory */
    "./src/app/components/dashboard-header/dashboard-header.component.ngfactory.js");
    /* harmony import */


    var _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../components/dashboard-header/dashboard-header.component */
    "./src/app/components/dashboard-header/dashboard-header.component.ts");
    /* harmony import */


    var _withdraw_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./withdraw.component */
    "./src/app/pages/withdraw/withdraw.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_WithdrawComponent = [];

    var RenderType_WithdrawComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_WithdrawComponent,
      data: {}
    });

    function View_WithdrawComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 127, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 4, "button", [["class", "d8p-handburger mat-focus-indicator"], ["fxHide.gt-sm", ""], ["fxShow", "true"], ["mat-icon-button", ""]], [[1, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).toggle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_MatButton_0"], _node_modules_angular_material_button_index_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MatIcon_0"], _node_modules_angular_material_icon_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MAT_ICON_LOCATION"]], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["menu"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 121, "mat-sidenav-container", [["class", "mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ViewportRuler"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        _allDrawers: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        _content: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"], null, [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, 0, 12, "mat-sidenav", [["class", "mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-drawer-opened", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"], [40, "@transform", 0]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) {
        var ad = true;

        if ("component:@transform.start" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationStartListener($event) !== false;
          ad = pd_0 && ad;
        }

        if ("component:@transform.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationDoneListener($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 3325952, [[1, 4], ["sidenav", 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_11__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_12__["DOCUMENT"]], [2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["ɵangular_material_src_material_sidenav_sidenav_a"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, 0, 10, "mat-nav-list", [["class", "mat-nav-list mat-list-base"], ["role", "navigation"]], null, null, null, _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatNavList_0"], _node_modules_angular_material_list_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatNavList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 704512, null, 0, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatNavList"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, 0, 4, "div", [["class", "mt-4"], ["mat-list-item", ""], ["routerLink", "/recent-transactions"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](18, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-inbox.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Recent transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, 0, 3, "div", [["class", "mt-2"], ["mat-list-item", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 1, "small", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 0, "img", [["class", "m-2 max-width-20"], ["src", "assets/icons-img/d8p-logout.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Logout"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, 1, 103, "mat-sidenav-content", [["class", "mat-drawer-content mat-sidenav-content"], ["fxFlexFill", ""]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, 0, 101, "div", [["class", "container-fluid p-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 4, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 2, "div", [["class", "dashboard-header-box"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "app-dashboard-header", [], null, null, null, _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_DashboardHeaderComponent_0"], _components_dashboard_header_dashboard_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_DashboardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 114688, null, 0, _components_dashboard_header_dashboard_header_component__WEBPACK_IMPORTED_MODULE_17__["DashboardHeaderComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 95, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 94, "div", [["class", "col-12 col-xl-9"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 93, "div", [["class", "dashboard-content-box pb-5"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 12, "div", [["class", "container-fluid quicklinkbg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 11, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 10, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 9, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" WITHDRAW "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](42, 0, null, null, 5, "div", [["class", "row no-gutters mt-2 mt-xl-4 pb-xl-4 mb-3 mb-xl-5 flex-valign-75"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 2, "div", [["class", "col-3 flex-align-center flex-column border-right-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](44, 0, null, null, 1, "div", [["class", "height-60 text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 0, "img", [["class", "max-width-60"], ["src", "assets/icons-img/icon-withdraw2.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "div", [["class", "col-9 pl-3 color-white font-size-15"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Funds residing in my D-8P Acc. MYR e-Wallet will be withdrawn to my bank account. "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Amount (RM) "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "transfer-amount"], ["placeholder", "Ex: 100"], ["type", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 34, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 33, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 32, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 31, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Bank Account Details "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](65, 0, null, null, 6, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 5, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 1, "div", [["class", "d8p-h6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bank Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 1, "div", [["class", "d8p-h6 text-right color-cyan "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["May bank"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](71, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](72, 0, null, null, 6, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 5, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](74, 0, null, null, 1, "div", [["class", "d8p-h6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bank Country"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](76, 0, null, null, 1, "div", [["class", "d8p-h6 text-right color-cyan "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Malaysia"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 6, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 5, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 1, "div", [["class", "d8p-h6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bank Account Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 1, "div", [["class", "d8p-h6 text-right color-cyan "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["KOMEPS ENTERPRISE"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](85, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 6, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 5, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 1, "div", [["class", "d8p-h6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Bank Account Number"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](90, 0, null, null, 1, "div", [["class", "d8p-h6 text-right color-cyan "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["5233223113223"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](92, 0, null, null, 0, "img", [["class", "max-width-100"], ["src", "assets/icons-img/linegrey1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](93, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](94, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](95, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Reference "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](101, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 0, "input", [["class", "d8p-input-normal"], ["name", "reference number"], ["placeholder", "Ex: May transfer"], ["type", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](103, 0, null, null, 9, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 8, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](105, 0, null, null, 7, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 6, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](107, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Effective Date "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](110, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 1, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](112, 0, null, null, 0, "input", [["class", "d8p-input-normal w-100 text-transform-uppercase"], ["name", "transfer date"], ["placeholder", "Choose Transfer Date"], ["type", "Date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 14, "div", [["class", "container-fluid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](114, 0, null, null, 13, "div", [["class", "row no-gutters"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](115, 0, null, null, 12, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](116, 0, null, null, 11, "div", [["class", "container-fluid p-0 menu-grid"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 2, "div", [["class", "row no-gutters justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](118, 0, null, null, 1, "div", [["class", "col-12 col-xl-9 titlebg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Confirmation "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 7, "div", [["class", "row no-gutters justify-content-center mt-4 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 6, "div", [["class", "col-10"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 5, "div", [["class", "button-container text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](123, 0, null, null, 4, "button", [["class", "d8p-btn-default"], ["routerLink", "/withdraw-details"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 124).onClick() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](124, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_15__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], {
        routerLink: [0, "routerLink"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" Confirm "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](127, 0, null, null, 0, "img", [["class", "p-1 max-width-25-px"], ["src", "assets/icons-img/icon-correct2.png"]], null, null, null, null, null))], function (_ck, _v) {
        _ck(_v, 4, 0);

        _ck(_v, 7, 0);

        var currVal_15 = "/recent-transactions";

        _ck(_v, 16, 0, currVal_15);

        _ck(_v, 25, 0);

        _ck(_v, 31, 0);

        var currVal_18 = "/withdraw-details";

        _ck(_v, 124, 0, currVal_18);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent" && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn";

        _ck(_v, 3, 0, currVal_2, currVal_3);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7)._backdropOverride;

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).position === "end";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "over";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "push";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).mode === "side";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).opened;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedTopGap : null;
        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).fixedBottomGap : null;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12)._animationState;

        _ck(_v, 11, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.left;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 25)._container._contentMargins.right;

        _ck(_v, 24, 0, currVal_16, currVal_17);
      });
    }

    function View_WithdrawComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "app-withdraw", [], null, null, null, View_WithdrawComponent_0, RenderType_WithdrawComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _withdraw_component__WEBPACK_IMPORTED_MODULE_18__["WithdrawComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var WithdrawComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("app-withdraw", _withdraw_component__WEBPACK_IMPORTED_MODULE_18__["WithdrawComponent"], View_WithdrawComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/withdraw/withdraw.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/withdraw/withdraw.component.ts ***!
    \******************************************************/

  /*! exports provided: WithdrawComponent */

  /***/
  function srcAppPagesWithdrawWithdrawComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function () {
      return WithdrawComponent;
    });

    var WithdrawComponent = /*#__PURE__*/function () {
      function WithdrawComponent() {
        _classCallCheck(this, WithdrawComponent);
      }

      _createClass(WithdrawComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WithdrawComponent;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\project-own\D8p-old\d8p-system\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map