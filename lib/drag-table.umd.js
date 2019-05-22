(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["drag-table"] = factory(require("vue"));
	else
		root["drag-table"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "24c9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCom_vue_vue_type_style_index_0_id_5f04bc67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dbfa");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCom_vue_vue_type_style_index_0_id_5f04bc67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCom_vue_vue_type_style_index_0_id_5f04bc67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCom_vue_vue_type_style_index_0_id_5f04bc67_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "65d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.2.0
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports.default = Component$1;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "dbfa":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"2d1472b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/TableCom.vue?vue&type=template&id=5f04bc67&scoped=true&
var TableComvue_type_template_id_5f04bc67_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.myTable)?_c('div',{staticClass:"clearfix",staticStyle:{"position":"relative"},on:{"keydown":function($event){_vm.myTable.onKeyDown($event)},"keyup":function($event){_vm.myTable.onKeyUp($event)}}},[(_vm.myTable.hasLeftFixedTable && _vm.myTable.hasTopFixedTable)?_c('TopLeftFixTable',{attrs:{"inputTable":_vm.myTable}}):_vm._e(),(_vm.myTable.hasLeftFixedTable)?_c('LeftFixTable',{attrs:{"inputTable":_vm.myTable}}):_vm._e(),(_vm.myTable.hasTopFixedTable)?_c('TopFixTable',{attrs:{"inputTable":_vm.myTable}}):_vm._e(),_c('div',{staticClass:"main-table",style:(_vm.myTable.style.mainTable),attrs:{"scrollTop":_vm.myTable.style.scrollTop},on:{"scroll":function($event){_vm.myTable.onScroll($event)}}},[(_vm.myTable && _vm.myTable.$rowNumber[0] && _vm.myTable.$colNumber[0])?_c('table',{staticClass:"my-table",attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[(_vm.myTable.isShowColIndex)?_c('tr',[(_vm.myTable.isShowRowIndex)?_c('th',{staticClass:"rowNumber",style:({width:_vm.myTable.$rowNumber[0].style.width,height:_vm.myTable.$colNumber[0].style.height}),attrs:{"tabindex":"1"}},[_c('div',{style:({width:_vm.myTable.$rowNumber[0].style.width,height:_vm.myTable.$colNumber[0].style.height,lineHeight:_vm.myTable.$colNumber[0].style.height})},[_vm._v("\n            "+_vm._s(_vm.myTable.isTopLeftShow? _vm.myTable.topLeftValue:'')+"\n          ")])]):_vm._e(),_vm._l((_vm.myTable.$colNumber),function(th,i){return _c('th',{key:"col"+i,staticClass:"colNumber",style:([th.style]),on:{"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)},"mousedown":function($event){th.onMouseDown($event)},"mousemove":function($event){th.onMouseMove($event)},"mouseout":function($event){th.onMouseOut($event)}}},[_c('div',{style:([th.cell.style])},[_vm._v(_vm._s(th.cell.content))])])})],2):_vm._e(),_vm._l((_vm.myTable.$rowNumber),function(th,i){return _c('tr',{key:th.id},[(i < _vm.myTable.$tableHeadTop.length)?[(_vm.myTable.isShowRowIndex)?_c('th',{staticClass:"rowNumber",on:{"mousedown":function($event){th.onMouseDown($event)},"mousemove":function($event){th.onMouseMove($event)},"mouseout":function($event){th.onMouseOut($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)}}},[_c('div',{style:([th.cell.style])},[_vm._v("\n              "+_vm._s(_vm.myTable.hasLeftFixedTable ?'':th.cell.content)+"\n            ")])]):_vm._e(),(i===0 && _vm.myTable.$tableHeadLeft[0] && _vm.myTable.$tableHeadTop[0])?_c('th',{staticClass:"colNumber",style:([_vm.myTable.tableHeadTopLeft.style]),attrs:{"tabindex":"1","colspan":_vm.myTable.theadLeftEntity.side2,"rowspan":_vm.myTable.theadTopEntity.side2}},[_c('div',{style:([_vm.myTable.tableHeadTopLeft.cell.style])})]):_vm._e(),_vm._l((_vm.myTable.$tableHeadTop[i]),function(th,j){return _c('th',{key:th.id,style:([th.style]),attrs:{"colspan":th.span1,"rowspan":th.span2,"draggable":th.draggable,"tabindex":"1"},on:{"click":function($event){th.onClick($event)},"dragstart":function($event){th.dragStart($event)},"dragend":function($event){th.dragEnd($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)},"mousedown":function($event){th.onMouseDown($event)},"mousemove":function($event){th.onMouseMove($event)},"mouseout":function($event){th.onMouseOut($event)}}},[(th.treeContainer.show)?_c('svg',{style:(th.treeContainer.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){th.treeContainer.onClick($event)}}},_vm._l((th.treeContainer.svg[th.treeContainer.$openStatus].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e(),_vm._l((th.selfContainers),function(sc){return (sc.show)?_c('svg',{style:(sc.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){sc.onClick($event)}}},_vm._l((sc.svg[sc.type].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e()}),(th.cell.displayClass[th.cell.status].displayType == 'text')?_c('div',{style:([th.cell.style]),attrs:{"title":th.cell.title},on:{"dblclick":function($event){th.cell.onDbClick($event)}}},[_vm._v("\n              "+_vm._s(th.cell.content)+"\n            ")]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'input')?_c('div',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],style:([th.cell.style]),domProps:{"value":(th.cell.value)},on:{"mouseover":function($event){th.cell.onMouseOver($event)},"blur":function($event){th.cell.inputOnBlur($event,true)},"input":function($event){if($event.target.composing){ return; }_vm.$set(th.cell, "value", $event.target.value)}}})]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'button')?_c('div',[_c('button',{on:{"click":function($event){th.cell.onClick($event)}}},[_vm._v(_vm._s(th.cell.content))])]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'select')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],style:([th.cell.style]),attrs:{"tabindex":"1"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(th.cell, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){th.cell.onChange($event)}],"blur":function($event){th.cell.onBlur($event)}}},_vm._l((th.cell.select.optionList),function(option){return _c('option',{key:option.value,domProps:{"value":option.text}},[_vm._v(_vm._s(option.text))])})):_vm._e()],2)})]:[(_vm.myTable.isShowRowIndex)?_c('th',{staticClass:"rowNumber",style:(th.style),on:{"mousedown":function($event){th.onMouseDown($event)},"mouseout":function($event){th.onMouseOut($event)},"mousemove":function($event){th.onMouseMove($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)}}},[_c('div',{style:([th.cell.style])},[_vm._v("\n              "+_vm._s(th.cell.content)+"\n            ")])]):_vm._e(),_vm._l((_vm.myTable.$tableHeadLeft[i - _vm.myTable.$tableHeadTop.length]),function(th,j){return _c('th',{key:th+j,style:([th.style]),attrs:{"tabindex":"1","draggable":th.draggable,"colspan":th.span2,"rowspan":th.span1},on:{"click":function($event){th.onClick($event)},"blur":function($event){th.onBlur($event)},"dragstart":function($event){th.dragStart($event)},"dragend":function($event){th.dragEnd($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)},"mousedown":function($event){th.onMouseDown($event)},"mousemove":function($event){th.onMouseMove($event)},"mouseout":function($event){th.onMouseOut($event)}}},[(th.treeContainer.show)?_c('svg',{style:(th.treeContainer.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){th.treeContainer.onClick($event)}}},_vm._l((th.treeContainer.svg[th.treeContainer.$openStatus].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e(),_vm._l((th.selfContainers),function(sc){return (sc.show)?_c('svg',{style:(sc.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){sc.onClick($event)}}},_vm._l((sc.svg[sc.type].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e()}),(th.cell.displayClass[th.cell.status].displayType == 'text')?_c('div',{style:([th.cell.style]),attrs:{"title":th.cell.title},on:{"dblclick":function($event){th.cell.onDbClick()}}},[_vm._v("\n              "+_vm._s(th.cell.content)+"\n            ")]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'input')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],staticStyle:{"background-color":"#fff"},style:([th.cell.style]),domProps:{"value":(th.cell.value)},on:{"mouseover":function($event){th.cell.onMouseOver($event)},"blur":function($event){th.cell.inputOnBlur($event,true)},"input":function($event){if($event.target.composing){ return; }_vm.$set(th.cell, "value", $event.target.value)}}}):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'button')?_c('button',{style:([th.cell.style]),on:{"click":function($event){th.cell.onClick($event)}}},[_vm._v(_vm._s(th.cell.content))]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'select')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],style:([th.cell.style]),attrs:{"tabindex":"1"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(th.cell, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){th.cell.onChange($event)}],"blur":function($event){th.cell.onBlur($event)}}},_vm._l((th.cell.select.optionList),function(option){return _c('option',{key:option.value,domProps:{"value":option.text}},[_vm._v(_vm._s(option.text))])})):_vm._e()],2)}),_vm._l((_vm.myTable.$tableBody[i - _vm.myTable.$tableHeadTop.length]),function(td,j){return _c('td',{key:1 + j,style:([td.style]),attrs:{"tabindex":"1"},on:{"click":function($event){td.onClick($event)},"mousedown":function($event){td.onMouseDown($event)},"blur":function($event){td.onBlur($event)},"paste":function($event){td.onPaste($event)}}},[(td.cell.displayClass[td.cell.status].displayType == 'text')?_c('div',{style:([td.cell.style]),on:{"dblclick":function($event){td.cell.onDbClick($event)}}},[_vm._v(_vm._s(td.cell.content)+"\n            ")]):_vm._e(),(td.cell.displayClass[td.cell.status].displayType == 'input')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(td.cell.value),expression:"td.cell.value"}],style:([td.cell.style]),attrs:{"type":"text"},domProps:{"value":(td.cell.value)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.$set(td.cell, "value", $event.target.value)},function($event){td.cell.onInput($event)}],"mouseup":function($event){td.cell.onMouseUp($event)},"mouseover":function($event){td.cell.onMouseOver($event)},"focus":function($event){td.cell.onFocus($event)},"blur":function($event){td.cell.inputOnBlur($event,true)},"keydown":function($event){td.cell.onKeyDown($event)}}}):_vm._e(),(td.cell && td.cell.displayClass[td.cell.status].displayType == 'select')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(td.cell.value),expression:"td.cell.value"}],style:([td.cell.style]),attrs:{"tabindex":"1"},on:{"blur":function($event){td.cell.onBlur($event)},"mouseover":function($event){td.cell.onMouseOver($event)},"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(td.cell, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){td.cell.onChange($event)}]}},_vm._l((td.cell.select.optionList),function(option){return _c('option',{key:option.value,domProps:{"value":option.text}},[_vm._v(_vm._s(option.text))])})):_vm._e()])})]],2)})],2):_vm._e(),(_vm.myTable)?_c('SelectBox',{attrs:{"inputTable":_vm.myTable,"positionType":"main"}}):_vm._e()],1),_vm._m(0)],1):_vm._e()}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"rightMeu"}},[_c('ul')])}]


// CONCATENATED MODULE: ./packages/drag-table2.0/views/TableCom.vue?vue&type=template&id=5f04bc67&scoped=true&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("65d9");

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 7.0.0 MIT LICENSE copyright 2018 kaorun343 */




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (original.apply(this, args) !== false)
                this.$emit.apply(this, [event || key].concat(args));
        };
    };
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"2d1472b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/TopFixTable.vue?vue&type=template&id=1bc49ef3&
var TopFixTablevue_type_template_id_1bc49ef3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fix-top-table",style:(_vm.myTable.style.topTable),domProps:{"scrollLeft":_vm.myTable.style.scrollLeft}},[(_vm.myTable && _vm.myTable.$rowNumber[0] && _vm.myTable.$colNumber[0])?_c('table',{staticClass:"my-table",attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[(_vm.myTable.isShowColIndex)?_c('tr',[(_vm.myTable.isShowRowIndex)?_c('th',{staticClass:"rowNumber",style:({padding:_vm.myTable.$rowNumber[0].style.padding,
          background:_vm.myTable.$rowNumber[0].style.background}),attrs:{"tabindex":"1"}},[_c('div',{style:({width:_vm.myTable.$rowNumber[0].style.width,
          height:_vm.myTable.$colNumber[0].style.height,lineHeight:_vm.myTable.$colNumber[0].style.height})},[_vm._v("\n            "+_vm._s(_vm.myTable.isTopLeftShow? _vm.myTable.topLeftValue:'')+"\n          ")])]):_vm._e(),_vm._l((_vm.myTable.$colNumber),function(th,i){return _c('th',{key:"col"+i,staticClass:"colNumber",style:(th.style),attrs:{"tabindex":"1"},on:{"mousedown":function($event){th.onMouseDown($event)},"mouseout":function($event){th.onMouseOut($event)},"mousemove":function($event){th.onMouseMove($event)},"click":function($event){th.onClick($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)}}},[_c('div',{style:(th.cell.style)},[_vm._v(_vm._s(th.cell.content))])])})],2):_vm._e(),_vm._l((_vm.myTable.$tableHeadTop),function(tr,i){return _c('tr',{key:"tr"+i},[(_vm.myTable.isShowRowIndex)?_c('th',{staticClass:"rowNumber",style:(_vm.myTable.$rowNumber[i].style),attrs:{"tabindex":"1"},on:{"mousedown":function($event){_vm.myTable.$rowNumber[i].onMouseDown($event)},"mousemove":function($event){_vm.myTable.$rowNumber[i].onMouseMove($event)},"mouseout":function($event){_vm.myTable.$rowNumber[i].onMouseOut($event)},"dragover":function($event){_vm.myTable.$rowNumber[i].dragOver($event)},"dragleave":function($event){_vm.myTable.$rowNumber[i].dragLeave($event)},"dragenter":function($event){_vm.myTable.$rowNumber[i].dragEnter($event)},"drop":function($event){_vm.myTable.$rowNumber[i].drop($event)}}},[_c('div',{style:(_vm.myTable.$rowNumber[i].cell.style)},[_vm._v(_vm._s(_vm.myTable.$rowNumber[i].cell.content))])]):_vm._e(),(i===0 && _vm.myTable.$tableHeadLeft[0] && _vm.myTable.$tableHeadTop[0])?_c('th',{staticClass:"colNumber",style:(_vm.myTable.tableHeadTopLeft.style),attrs:{"tabindex":"1","colspan":_vm.myTable.theadLeftEntity.side2,"rowspan":_vm.myTable.theadTopEntity.side2}},[_c('div',{style:(_vm.myTable.tableHeadTopLeft.cell.style)})]):_vm._e(),_vm._l((tr),function(th,j){return _c('th',{key:th.id +j,staticClass:"top-th",style:(th.style),attrs:{"tabindex":"1","draggable":th.draggable,"colspan":th.span1,"rowspan":th.span2},on:{"blur":function($event){th.onBlur($event)},"click":function($event){th.onClick($event)},"dragstart":function($event){th.dragStart($event)},"dragend":function($event){th.dragEnd($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)},"mousedown":function($event){th.onMouseDown($event)},"mousemove":function($event){th.onMouseMove($event)},"mouseout":function($event){th.onMouseOut($event)}}},[(th.treeContainer.show)?_c('svg',{style:(th.treeContainer.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){th.treeContainer.onClick($event)}}},_vm._l((th.treeContainer.svg[th.treeContainer.$openStatus].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e(),_vm._l((th.selfContainers),function(sc){return (sc.show)?_c('svg',{style:(sc.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){sc.onClick($event)}}},_vm._l((sc.svg[sc.type].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e()}),(th.cell.displayClass[th.cell.status].displayType == 'text')?_c('div',{style:([th.cell.style]),attrs:{"title":th.cell.title},on:{"dblclick":function($event){th.cell.onDbClick()}}},[_vm._v("\n            "+_vm._s(th.cell.content)+"\n          ")]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'input')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],style:([th.cell.style]),domProps:{"value":(th.cell.value)},on:{"mouseover":function($event){th.cell.onMouseOver($event)},"blur":function($event){th.cell.inputOnBlur($event,true)},"input":function($event){if($event.target.composing){ return; }_vm.$set(th.cell, "value", $event.target.value)}}}):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'button')?_c('button',{style:([th.cell.style]),on:{"click":function($event){th.cell.onClick($event)}}},[_vm._v(_vm._s(th.cell.content))]):_vm._e()],2)})],2)})],2)]):_vm._e(),(_vm.myTable)?_c('SelectBox',{attrs:{"inputTable":_vm.myTable,"positionType":"top"}}):_vm._e()],1)}
var TopFixTablevue_type_template_id_1bc49ef3_staticRenderFns = []


// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/TopFixTable.vue?vue&type=template&id=1bc49ef3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/TopFixTable.vue?vue&type=script&lang=ts&

/* harmony default export */ var TopFixTablevue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("TopFixTable", {
    props: {
        inputTable: Object
    },
    data: function () {
        return {
            myTable: this.inputTable
        };
    },
    watch: {
        inputTable: function (val, oldVal) {
            this.myTable = val || oldVal;
        }
    }
}));

// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/TopFixTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var com_TopFixTablevue_type_script_lang_ts_ = (TopFixTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/TopFixTable.vue





/* normalize component */

var component = normalizeComponent(
  com_TopFixTablevue_type_script_lang_ts_,
  TopFixTablevue_type_template_id_1bc49ef3_render,
  TopFixTablevue_type_template_id_1bc49ef3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "TopFixTable.vue"
/* harmony default export */ var TopFixTable = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"2d1472b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/TopLeftFixTable.vue?vue&type=template&id=40f11108&
var TopLeftFixTablevue_type_template_id_40f11108_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fix-top-left-table"},[(_vm.myTable && _vm.myTable.$rowNumber[0] && _vm.myTable.$colNumber[0])?_c('table',{staticClass:"my-table left-top-table",attrs:{"cellspacing":"0","cellpadding":"0","border":"0"}},[_c('thead',[(_vm.myTable.isShowColIndex && _vm.myTable.isShowRowIndex)?_c('tr',[_c('th',{staticClass:"rowNumber",style:({padding:_vm.myTable.$rowNumber[0].style.padding,background:_vm.myTable.$rowNumber[0].style.background}),attrs:{"tabindex":"1"}},[_c('div',{style:({width:_vm.myTable.$rowNumber[0].style.width, height:_vm.myTable.$colNumber[0].style.height,lineHeight:_vm.myTable.$colNumber[0].style.height})},[_vm._v("\n            "+_vm._s(_vm.myTable.isTopLeftShow? _vm.myTable.topLeftValue:'')+"\n          ")])]),_vm._l((_vm.myTable.theadLeftEntity.$leafIndexList2),function(th,i){return _c('th',{staticClass:"colNumber",style:(_vm.myTable.$colNumber[i].style),attrs:{"tabindex":"1"},on:{"mousedown":function($event){_vm.myTable.$colNumber[i].onMouseDown($event)},"mouseout":function($event){_vm.myTable.$colNumber[i].onMouseOut($event)},"mousemove":function($event){_vm.myTable.$colNumber[i].onMouseMove($event)},"click":function($event){_vm.myTable.$colNumber[i].onClick($event)},"dragenter":function($event){_vm.myTable.$colNumber[i].dragEnter($event)},"dragleave":function($event){_vm.myTable.$colNumber[i].dragLeave($event)},"dragover":function($event){_vm.myTable.$colNumber[i].dragOver($event)},"drop":function($event){_vm.myTable.$colNumber[i].drop($event)}}},[_c('div',{style:(_vm.myTable.$colNumber[i].cell.style)},[_vm._v("\n            "+_vm._s(_vm.myTable.$colNumber[i].cell.content)+"\n          ")])])})],2):_vm._e(),_vm._l((_vm.myTable.$tableHeadTop),function(tr,i){return (_vm.myTable.isShowRowIndex)?_c('tr',{key:tr+i},[_c('th',{staticClass:"rowNumber",style:(_vm.myTable.$rowNumber[i].style),attrs:{"tabindex":"1"},on:{"click":function($event){_vm.myTable.$rowNumber[i].onClick($event)},"dragenter":function($event){_vm.myTable.$rowNumber[i].dragEnter($event)},"dragleave":function($event){_vm.myTable.$rowNumber[i].dragLeave($event)},"dragover":function($event){_vm.myTable.$rowNumber[i].dragOver($event)},"drop":function($event){_vm.myTable.$rowNumber[i].drop($event)},"mousedown":function($event){_vm.myTable.$rowNumber[i].onMouseDown($event)},"mouseout":function($event){_vm.myTable.$rowNumber[i].onMouseOut($event)},"mousemove":function($event){_vm.myTable.$rowNumber[i].onMouseMove($event)}}},[_c('div',{style:([_vm.myTable.$rowNumber[i].cell.style]),attrs:{"title":_vm.myTable.$rowNumber[i].cell.content}},[_vm._v("\n            "+_vm._s(_vm.myTable.$rowNumber[i].cell.content)+"\n          ")])]),(i === 0 && _vm.myTable.$tableHeadLeft[0] && _vm.myTable.$tableHeadTop[0])?_c('th',{staticClass:"colNumber",staticStyle:{"border-width":"1px"},style:(_vm.myTable.tableHeadTopLeft.style),attrs:{"tabindex":"1","colspan":_vm.myTable.theadLeftEntity.side2,"rowspan":_vm.myTable.theadTopEntity.side2}},[_c('div',{style:(_vm.myTable.tableHeadTopLeft.cell.style)})]):_vm._e()]):_vm._e()})],2)]):_vm._e(),(_vm.myTable)?_c('SelectBox',{attrs:{"inputTable":_vm.myTable,"positionType":"top-left"}}):_vm._e()],1)}
var TopLeftFixTablevue_type_template_id_40f11108_staticRenderFns = []


// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/TopLeftFixTable.vue?vue&type=template&id=40f11108&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/TopLeftFixTable.vue?vue&type=script&lang=ts&

/* harmony default export */ var TopLeftFixTablevue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("TopLeftFixTable", {
    props: {
        inputTable: Object
    },
    data: function () {
        return {
            myTable: this.inputTable
        };
    },
    watch: {
        inputTable: function (val, oldVal) {
            this.myTable = val || oldVal;
        }
    }
}));

// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/TopLeftFixTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var com_TopLeftFixTablevue_type_script_lang_ts_ = (TopLeftFixTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/TopLeftFixTable.vue





/* normalize component */

var TopLeftFixTable_component = normalizeComponent(
  com_TopLeftFixTablevue_type_script_lang_ts_,
  TopLeftFixTablevue_type_template_id_40f11108_render,
  TopLeftFixTablevue_type_template_id_40f11108_staticRenderFns,
  false,
  null,
  null,
  null
  
)

TopLeftFixTable_component.options.__file = "TopLeftFixTable.vue"
/* harmony default export */ var TopLeftFixTable = (TopLeftFixTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"2d1472b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/LeftFixTable.vue?vue&type=template&id=8c994d5e&
var LeftFixTablevue_type_template_id_8c994d5e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fix-left-table",style:(_vm.myTable.style.leftTable),domProps:{"scrollTop":_vm.myTable.style.scrollTop}},[(_vm.myTable && _vm.myTable.$rowNumber[0] && _vm.myTable.$colNumber[0])?_c('table',{staticClass:"my-table left-table"},[_c('thead',[(_vm.myTable.isShowColIndex)?_c('tr',[_c('th',{staticClass:"rowNumber",style:({padding:(_vm.myTable.$rowNumber[0]||_vm.myTable.$colNumber[0]||{}).style.padding,background:(_vm.myTable.$rowNumber[0]||_vm.myTable.$colNumber[0]||{}).style.background}),attrs:{"tabindex":"1"}},[_c('div',{style:({width:_vm.myTable.$rowNumber[0].style.width,height:_vm.myTable.$colNumber[0].style.height,lineHeight:_vm.myTable.$colNumber[0].style.height})},[_vm._v("\n            "+_vm._s(_vm.myTable.isTopLeftShow? _vm.myTable.topLeftValue:'')+"\n          ")])]),_vm._l((_vm.myTable.theadLeftEntity.$leafIndexList2),function(th,i){return _c('th',{staticClass:"colNumber",style:(_vm.myTable.$colNumber[i].style)},[_c('div',{style:(_vm.myTable.$colNumber[i].cell.style)},[_vm._v("\n            "+_vm._s(_vm.myTable.$colNumber[i].cell.content)+"\n          ")])])})],2):_vm._e(),_vm._l((_vm.myTable.$rowNumber),function(th,i){return _c('tr',{key:"row"+i},[(_vm.myTable.isShowRowIndex)?_c('th',{staticClass:"rowNumber",style:(th.style),attrs:{"tabindex":"1"},on:{"mousedown":function($event){th.onMouseDown($event)},"mouseout":function($event){th.onMouseOut($event)},"mousemove":function($event){th.onMouseMove($event)},"click":function($event){th.onClick($event)},"dragstart":function($event){th.dragStart($event)},"dragend":function($event){th.dragEnd($event)},"dragover":function($event){th.dragOver($event)},"dragleave":function($event){th.dragLeave($event)},"dragenter":function($event){th.dragEnter($event)},"drop":function($event){th.drop($event)}}},[_c('div',{style:([th.cell.style]),attrs:{"title":th.cell.content}},[_vm._v(_vm._s(th.cell.content))])]):_vm._e(),(i===0 && _vm.myTable.$tableHeadLeft[0]&&_vm.myTable.$tableHeadTop[0])?_c('th',{staticClass:"colNumber",style:(_vm.myTable.tableHeadTopLeft.style),attrs:{"tabindex":"1","colspan":_vm.myTable.theadLeftEntity.side2,"rowspan":_vm.myTable.theadTopEntity.side2},on:{"click":function($event){_vm.myTable.onClick($event)}}},[_c('div',{style:(_vm.myTable.tableHeadTopLeft.cell.style)})]):_vm._e(),_vm._l((_vm.myTable.$tableHeadLeft[i - _vm.myTable.theadTopEntity.side2]),function(th,j){return _c('th',{key:th+j,style:([th.style]),attrs:{"tabindex":"1","draggable":th.draggable,"colspan":th.span2,"rowspan":th.span1},on:{"click":function($event){th.onClick($event)},"blur":function($event){th.onBlur($event)},"dragstart":function($event){th.dragStart($event)},"dragover":function($event){th.dragOver($event)},"drop":function($event){th.drop($event)},"dragleave":function($event){th.dragLeave($event)},"mousedown":function($event){th.onMouseDown($event)},"mousemove":function($event){th.onMouseMove($event)},"mouseout":function($event){th.onMouseOut($event)}}},[(th.treeContainer.show)?_c('svg',{style:(th.treeContainer.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){th.treeContainer.onClick($event)}}},_vm._l((th.treeContainer.svg[th.treeContainer.$openStatus].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e(),_vm._l((th.selfContainers),function(sc){return (sc.show)?_c('svg',{style:(sc.style),attrs:{"viewBox":"0 0 1024 1024"},on:{"click":function($event){sc.onClick($event)}}},_vm._l((sc.svg[sc.type].paths),function(d){return _c('path',{attrs:{"d":d}})})):_vm._e()}),(th.cell.displayClass[th.cell.status].displayType == 'text')?_c('div',{style:([th.cell.style]),attrs:{"title":th.cell.title},on:{"dblclick":function($event){th.cell.onDbClick()}}},[_vm._v("\n\n            "+_vm._s(th.cell.content)+"\n          ")]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'input')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],staticStyle:{"background-color":"#fff"},style:([th.cell.style]),domProps:{"value":(th.cell.value)},on:{"mouseover":function($event){th.cell.onMouseOver($event)},"blur":function($event){th.cell.inputOnBlur($event,true)},"input":function($event){if($event.target.composing){ return; }_vm.$set(th.cell, "value", $event.target.value)}}}):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'button')?_c('button',{style:([th.cell.style]),on:{"click":function($event){th.cell.onClick($event)}}},[_vm._v(_vm._s(th.cell.content))]):_vm._e(),(th.cell.displayClass[th.cell.status].displayType == 'select')?_c('select',{directives:[{name:"model",rawName:"v-model",value:(th.cell.value),expression:"th.cell.value"}],style:([th.cell.style]),attrs:{"tabindex":"1"},on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(th.cell, "value", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){th.cell.onChange($event)}],"blur":function($event){th.cell.onBlur($event)}}},_vm._l((th.cell.select.optionList),function(option){return _c('option',{key:option.value,domProps:{"value":option.text}},[_vm._v(_vm._s(option.text))])})):_vm._e()],2)})],2)})],2)]):_vm._e(),(_vm.myTable)?_c('SelectBox',{attrs:{"inputTable":_vm.myTable,"positionType":"left"}}):_vm._e()],1)}
var LeftFixTablevue_type_template_id_8c994d5e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/LeftFixTable.vue?vue&type=template&id=8c994d5e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/LeftFixTable.vue?vue&type=script&lang=ts&

/* harmony default export */ var LeftFixTablevue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("LeftFixTable", {
    props: {
        inputTable: Object
    },
    data: function () {
        return {
            myTable: this.inputTable
        };
    },
    watch: {
        inputTable: function (val, oldVal) {
            this.myTable = val || oldVal;
        }
    }
}));

// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/LeftFixTable.vue?vue&type=script&lang=ts&
 /* harmony default export */ var com_LeftFixTablevue_type_script_lang_ts_ = (LeftFixTablevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/LeftFixTable.vue





/* normalize component */

var LeftFixTable_component = normalizeComponent(
  com_LeftFixTablevue_type_script_lang_ts_,
  LeftFixTablevue_type_template_id_8c994d5e_render,
  LeftFixTablevue_type_template_id_8c994d5e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

LeftFixTable_component.options.__file = "LeftFixTable.vue"
/* harmony default export */ var LeftFixTable = (LeftFixTable_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules//.cache//vue-loader","cacheIdentifier":"2d1472b6-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/SelectBox.vue?vue&type=template&id=44dc8f2e&
var SelectBoxvue_type_template_id_44dc8f2e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"position":"absolute","display":"contents"}},_vm._l((_vm.myTable.$selectBoxEntity.selectList),function(val,key){return (val.position.table === _vm.myTable.position.table && val.selectBoxType === _vm.positionType)?_c('div',{key:key,style:({
    position: 'absolute',
    top:val.style.top+'px',
    left:val.style.left+'px'
    })},[_c('span',[_c('div',{style:(val.topStyle)}),_c('div',{style:(val.rightStyle)}),_c('div',{style:(val.bottomStyle)}),_c('div',{style:(val.leftStyle)})])]):_vm._e()}))}
var SelectBoxvue_type_template_id_44dc8f2e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/SelectBox.vue?vue&type=template&id=44dc8f2e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/com/SelectBox.vue?vue&type=script&lang=ts&

/* harmony default export */ var SelectBoxvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("SelectBox", {
    props: {
        inputTable: Object,
        positionType: String
    },
    data: function () {
        return {
            myTable: this.inputTable
        };
    },
    watch: {
        inputTable: function (val, oldVal) {
            this.myTable = val || oldVal;
        }
    }
}));

// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/SelectBox.vue?vue&type=script&lang=ts&
 /* harmony default export */ var com_SelectBoxvue_type_script_lang_ts_ = (SelectBoxvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./packages/drag-table2.0/views/com/SelectBox.vue





/* normalize component */

var SelectBox_component = normalizeComponent(
  com_SelectBoxvue_type_script_lang_ts_,
  SelectBoxvue_type_template_id_44dc8f2e_render,
  SelectBoxvue_type_template_id_44dc8f2e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

SelectBox_component.options.__file = "SelectBox.vue"
/* harmony default export */ var SelectBox = (SelectBox_component.exports);
// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
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

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/clone.ts
function baseClone(Obj, excludeReg, keepReg, withFunction) {
    var buf;
    if (Obj instanceof Array) {
        buf = [];
        Obj.forEach(function (val, i) {
            buf[i] = baseClone(val, excludeReg, keepReg);
        });
        return buf;
    }
    else if (typeof Obj === 'function') {
        return Obj;
    }
    else if (Obj instanceof Object) {
        buf = {};
        for (var key in Obj) {
            if ((Obj.hasOwnProperty(key) || (typeof (Obj[key]) === 'function') && withFunction)) {
                var needContinue = excludeReg ? (excludeReg.test(key) ? true : false) : false;
                var needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
                if (needContinue) {
                    continue;
                }
                else {
                    if (needKeep) {
                        buf[key] = (Obj[key]);
                    }
                    else {
                        buf[key] = baseClone(Obj[key], excludeReg, keepReg, withFunction);
                    }
                }
            }
        }
        return buf;
    }
    else {
        // console.log('啥都不是:' + Obj);
        return Obj;
    }
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/config.ts
var UtilsConfig = /** @class */ (function () {
    function UtilsConfig() {
    }
    UtilsConfig.keepReg = /\$|userData/;
    return UtilsConfig;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/utils/keepClone.ts


function keepClone(obj, excludeReg, keepReg, withFunction) {
    keepReg = keepReg || UtilsConfig.keepReg;
    return baseClone(obj, excludeReg, keepReg, withFunction);
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/myObejctClone.ts

function myObejctClone(Obj, excludeReg, keepReg, withFunction) {
    var object = Object.create({});
    var _loop_1 = function (key) {
        if (Obj.hasOwnProperty(key) || (withFunction && typeof Obj[key] === 'function')) {
            if (key === '_value') {
                Object.defineProperty(object, 'value', {
                    get: function () {
                        return this._value;
                    },
                    set: function (value) {
                        this.$renderState.hasrendered = false;
                        this._value = value;
                    }
                });
            }
            var tmpObject = Obj[key];
            var val_1 = null;
            var needContinue = excludeReg ? (excludeReg.test(key) ? true : false) : false;
            var needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
            if (needContinue) {
                return "continue";
            }
            else if (needKeep) {
                val_1 = Obj[key];
            }
            else if (Array.isArray(tmpObject)) {
                val_1 = [];
                tmpObject.forEach(function (item) {
                    if (typeof item.clone === 'function') {
                        val_1.push(item.clone(excludeReg, keepReg, withFunction));
                    }
                    else {
                        val_1.push(keepClone(item, excludeReg, keepReg, withFunction));
                    }
                });
            }
            else if (typeof Obj[key] === 'object') {
                if (tmpObject && typeof tmpObject.clone === 'function') {
                    val_1 = tmpObject.clone(excludeReg, keepReg, withFunction);
                }
                else {
                    val_1 = (keepClone(tmpObject, excludeReg, keepReg, withFunction));
                }
            }
            else {
                val_1 = Obj[key];
            }
            object[key] = val_1;
        }
    };
    for (var key in Obj) {
        _loop_1(key);
    }
    return object;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/baseSlice.ts
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
    var index = -1;
    var length = array.length;
    start = start == null ? 0 : (+start || 0);
    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = (end === undefined || end > length) ? length : (+end || 0);
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
        result[index] = array[index + start];
    }
    return result;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/drop.ts

function drop(array, n) {
    var length = array == null ? 0 : array.length; // 数组长度
    if (!length) { // 如果为空数组，返回空数组
        return [];
    }
    n = n === undefined ? 1 : n;
    return baseSlice(array, n < 0 ? 0 : n, length); // 调用baseSlice对数组从n位置进行切割，并返回切好的数组
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/dropRight.ts

function dropRight(array, n) {
    var length = array == null ? 0 : array.length; // 数组长度
    if (!length) { // 如果为空数组，返回空数组
        return [];
    }
    n = n === undefined ? 1 : n;
    n = length - n;
    return baseSlice(array, 0, n < 0 ? 0 : n); // 调用baseSlice对数组从n位置进行切割，并返回切好的数组
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/first.ts
function first(array) {
    return array ? array[0] : undefined;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/last.ts
function last(array) {
    var length = array ? array.length : 0;
    return length ? array[length - 1] : undefined;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/guid.ts
function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
// Generate a pseudo-GUID by concatenating random hexadecimal.
function guid() {
    return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/objecSet.ts

function objectSet(targetObect, sourceObject, setType, keepReg) {
    var sourceObjectClone = baseClone(sourceObject, undefined, keepReg);
    setType = setType || 'intersection';
    if (targetObect && sourceObjectClone) {
        for (var key in sourceObjectClone) {
            if (targetObect.hasOwnProperty(key) || (setType === 'union' && sourceObjectClone.hasOwnProperty(key))) {
                var value = targetObect[key];
                var needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
                if (typeof value === 'object' && !Array.isArray(value) && !needKeep) {
                    objectSet(targetObect[key], sourceObjectClone[key], setType);
                }
                else if (sourceObjectClone[key] !== undefined) {
                    targetObect[key] = sourceObjectClone[key];
                }
            }
        }
    }
    return targetObect;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/replaceAll.ts
function replaceAll(targetString, oldStr, newStr) {
    var reg = new RegExp(oldStr, 'g');
    var res = targetString.replace(reg, newStr);
    return res;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/base/getA_Z.ts
/**
 * 将序号转换成A、B、C
 *
 * @private
 * @param {number} index
 * @returns {string}
 * @memberof DefaultTable
 */
function getA_Z(index) {
    var shang = Math.floor(index / 26);
    var yushu = index % 26;
    var res = '';
    if (shang > 0) {
        res += String.fromCharCode(shang + 65 - 1);
    }
    res += String.fromCharCode(yushu + 65);
    return res;
}

// CONCATENATED MODULE: ./packages/drag-table2.0/utils/index.ts













// CONCATENATED MODULE: ./packages/drag-table2.0/module/formula/Formula.ts

var Formula_Formula = /** @class */ (function () {
    function Formula() {
    }
    // 复杂的计算方法（包含括号）
    Formula.complexEval = function (str) {
        if (str == null) {
            return '';
        }
        if (typeof str !== 'string') { // 转化成字符串
            str = str + '';
        }
        str = (str + '').replace(/[\s]/g, '');
        var reg = '[\(][^\(]*?[\)]';
        var multObj = str.match(reg); // 匹配括号
        // 不断计算最底层括号的数据
        while (null != multObj) {
            var content = multObj[0] + '';
            var result = this.simpleEval(content.substr(1, content.length - 2));
            str = str.replace(multObj[0], result);
            multObj = str.match(reg);
        }
        return this.simpleEval(str);
    };
    // 简单的计算方法，只有加减乘除
    Formula.simpleEval = function (str) {
        if (str == null) {
            return '';
        }
        if (typeof str !== 'string') { // 转化成字符串
            str = str + '';
        }
        var valueArray = new Array(); // 值的数组
        var markArray = new Array(); // 符号的数组
        var tempValue = 0;
        var ch = str.split('');
        var isOper = false;
        // debugger 
        for (var i = 0; i < ch.length; i++) {
            if (ch[i] === '+' || ch[i] === '-' || ch[i] === '*' || ch[i] === '/') { // 符号
                var dv = tempValue * 1;
                if (isOper) {
                    var value = valueArray.pop();
                    var mark = markArray.pop();
                    dv = this.simpleTwoEval(mark, value, dv);
                }
                valueArray.push(dv);
                markArray.push(ch[i]);
                tempValue = 0;
                isOper = false;
                if (ch[i] === '*' || ch[i] === '/') {
                    isOper = true;
                }
            }
            else {
                tempValue += ch[i] + '';
                if (i === ch.length - 1) { // 最后一位
                    var dv = tempValue * 1;
                    if (isOper) {
                        var dv1 = valueArray.pop();
                        var mark = markArray.pop();
                        var result = this.simpleTwoEval(mark, dv1, tempValue);
                        dv = result;
                    }
                    valueArray.push(dv);
                }
            }
        }
        valueArray = this.reverseArray(valueArray);
        markArray = this.reverseArray(markArray);
        while (valueArray.length > 1) {
            var v1 = valueArray.pop();
            var v2 = valueArray.pop();
            var mark = markArray.pop();
            valueArray.push(this.simpleTwoEval(mark, v1, v2));
        }
        return valueArray[0] || 0;
    };
    // 两个数的加减乘除
    Formula.simpleTwoEval = function (mark, value1, value2) {
        var res = 0;
        if (mark === '+') {
            res = value1 + value2;
        }
        else if (mark === '-') {
            res = value1 - value2;
        }
        else if (mark === '*') {
            res = value1 * value2;
        }
        else if (mark === '/') {
            res = value1 / value2;
        }
        res = parseFloat(res.toFixed(10));
        return res;
    };
    // 反转数组
    Formula.reverseArray = function (oldArray) {
        var newArray = new Array();
        var size = oldArray.length;
        for (var i = 0; i < size; i++) {
            newArray.push(oldArray.pop());
        }
        return newArray;
    };
    /**
     * name
     */
    Formula.cellStr2Position = function (cellStr) {
        var res = {
            table: (/^[\u4e00-\u9fa5_a-zA-Z0-9_]+(?=\!)/.exec(cellStr) || [null])[0],
            colStr: (/[^!]?([A-Z])+/.exec(cellStr) || [null])[0],
            rowStr: (/[0-9]+$/.exec(cellStr) || [null])[0],
        };
        return res;
    };
    Formula.curlyBracesHandle = function (str, container) {
        var reg = '[\{][^\{]*?[\}]';
        var regObj = str.match(reg);
        while (null != regObj) {
            (regObj || []).forEach(function (item) {
                var rowNum = container.position.rowNum + '';
                if (/sr/.test(item)) {
                    var formula = item.replace(/sr/g, rowNum);
                    formula = formula.replace(/[{}]/g, '');
                    var res = Formula.complexEval(formula);
                    str = str.replace(item, res + 1);
                }
                else if (/sc/.test(item)) {
                    var selfCol = container.position.colNum + '';
                    var formula = item.replace(/sc/g, selfCol);
                    formula = formula.replace(/[{}]/g, '');
                    var res = Formula.complexEval(formula);
                    str = str.replace(item, getA_Z(res));
                }
            });
            regObj = str.match(reg);
        }
        return str;
    };
    Formula.percentHandle = function (str) {
        var percentReg = /(\d+(\.\d+)*)%/g;
        var res = str.replace(percentReg, function (match, group1) {
            return Number(group1) * 0.01 + '';
        });
        return res;
    };
    return Formula;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/config/BaseContainerConfig.ts
var BaseContainerConfig = /** @class */ (function () {
    function BaseContainerConfig() {
        this.style = {};
        this.config = {};
        this.userData = {};
        this.position = {
            table: 0,
            colNum: 0,
            rowNum: 0,
        };
    }
    return BaseContainerConfig;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/config/BaseCellConfig.ts


var BaseCellConfig_BaseCellConfig = /** @class */ (function (_super) {
    __extends(BaseCellConfig, _super);
    function BaseCellConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.oldValue = '';
        _this.content = ''; // 内容
        _this.selectionStart = 0;
        _this.title = '';
        _this.status = 'normal';
        _this.displayType = 'text';
        _this.style = {
            fontSize: 12,
            float: 'left',
            // padding:'0px 5px',
            color: '#000',
            textAlign: 'center',
            width: '110px',
            height: '28px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'block',
            userSelect: 'none',
        };
        _this.displayClass = {
            normal: {
                displayType: 'text',
            },
            dbclick: {
                displayType: 'input',
                select: {
                    optionList: [],
                },
            },
            readonly: {
                displayType: 'text'
            }
        };
        // 格式
        _this.formatter = '';
        // 验证
        _this.verification = {
            state: true,
            hasVerification: false,
            vTypes: [],
            message: {
                integer: '必须输入整型',
                notNull: '该项是必填项',
                number: '您好请输入数字类型:例如 123|32|3.5....',
                date: '您好请输入正确时间:例如 2019-01-01',
                decimal: '您好请输入正确数字'
            }
        };
        return _this;
    }
    return BaseCellConfig;
}(BaseContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/CellContainerConfig.ts



var CellContainerConfig_CellContainerConfig = /** @class */ (function (_super) {
    __extends(CellContainerConfig, _super);
    function CellContainerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.widthNum = 0;
        _this.heightNum = 0;
        _this.widthChildNum = 0;
        _this.heightChildNum = 0;
        _this.widthSelfNum = 110;
        _this.heightSelfNum = 38;
        _this.paddingLeftNum = 0;
        _this.children = new Array();
        _this.isRootParent = false;
        _this.$inSystem = false;
        _this.cell = new BaseCellConfig_BaseCellConfig();
        _this.hideType = 'visible';
        _this.$positionCheck = ['top', 'bottom', 'left', 'right', 'inner'];
        _this.side1 = 1;
        _this.side2 = 1;
        _this.span1 = 1;
        _this.span2 = 1;
        _this.style = {
            padding: '0px 0px',
            // width: '110px',
            // height: '38px',
            overflow: 'hidden',
            userSelect: 'text',
            boxSizing: 'border-box',
            position: 'relative'
        };
        return _this;
    }
    return CellContainerConfig;
}(BaseContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/TheadContainerConfig.ts



var TheadContainerConfig_TheadContainerConfig = /** @class */ (function (_super) {
    __extends(TheadContainerConfig, _super);
    function TheadContainerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.span1 = 1;
        _this.span2 = 1;
        _this.canSum = false;
        _this.canDragResize = false;
        _this.draggable = true; // 是否可以拖动
        _this.$resizeChildren = [];
        _this.selfContainers = [];
        _this.theadPosition = new Array();
        _this.tbodyConfig = {};
        _this.children = [];
        _this.style = objectSet(_this.style, {
            overflow: 'hidden',
            boxSizing: 'border-box',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            background: '#f5f7fa',
        }, 'union');
        return _this;
    }
    return TheadContainerConfig;
}(CellContainerConfig_CellContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/TreeContainerConfig.ts


var TreeContainerConfig_TreeContainerConfig = /** @class */ (function (_super) {
    __extends(TreeContainerConfig, _super);
    function TreeContainerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.widthSelfNum = 15;
        _this.heighSelftNum = 38;
        _this.allChildren = new Array();
        _this.$positionCheck = null;
        _this.style = {
            cursor: 'pointer',
            float: 'left',
            left: '0px',
            boxSizing: 'content-box',
            position: 'absolute'
        };
        _this.$openStatus = 'close';
        _this.svg = {
            close: {
                paths: [
                    'M815.2 911.7H210.8c-55.4 0-100.7-45.3-100.7-100.7V206.5c0-55.4 45.3-100.7 100.7-100.7h604.5c55.4 0 100.7 45.3 100.7 100.7V811c0 55.3-45.3 100.7-100.8 100.7zM210.8 156.1c-30.2 0-50.4 20.1-50.4 50.4V811c0 30.2 20.1 50.4 50.4 50.4h604.5c30.2 0 50.4-20.1 50.4-50.4V206.5c0-30.2-20.1-50.4-50.4-50.4H210.8z m0 0',
                    'M714.5 533.9h-403c-15.1 0-25.2-10.1-25.2-25.2s10.1-25.2 25.2-25.2h403c15.1 0 25.2 10.1 25.2 25.2s-10.1 25.2-25.2 25.2z m0 0',
                    'M513 735.4c-15.1 0-25.2-10.1-25.2-25.2v-403c0-15.1 10.1-25.2 25.2-25.2s25.2 10.1 25.2 25.2v403c0 15.1-10.1 25.2-25.2 25.2z m0 0'
                ]
            },
            open: {
                paths: [
                    'M815.2 911.7H210.8c-55.4 0-100.7-45.3-100.7-100.7V206.5c0-55.4 45.3-100.7 100.7-100.7h604.5c55.4 0 100.7 45.3 100.7 100.7V811c0 55.3-45.3 100.7-100.8 100.7zM210.8 156.1c-30.2 0-50.4 20.1-50.4 50.4V811c0 30.2 20.1 50.4 50.4 50.4h604.5c30.2 0 50.4-20.1 50.4-50.4V206.5c0-30.2-20.1-50.4-50.4-50.4H210.8z m0 0',
                    'M714.5 533.9h-403c-15.1 0-25.2-10.1-25.2-25.2s10.1-25.2 25.2-25.2h403c15.1 0 25.2 10.1 25.2 25.2s-10.1 25.2-25.2 25.2z m0 0',
                ]
            },
            loading: {
                paths: [
                    'M693.333333 650.325333q17.322667 0 29.994667 12.672l120.661333 120.661333q12.672 12.672 12.672 30.336 0 17.322667-12.672 29.994667t-29.994667 12.672q-17.664 0-30.336-12.672l-120.661333-120.661333q-12.330667-12.330667-12.330667-30.336 0-17.664 12.501333-30.165333t30.165333-12.501333zM331.008 650.325333q17.664 0 30.165333 12.501333t12.501333 30.165333-12.672 30.336l-120.661333 120.661333q-12.672 12.672-29.994667 12.672-17.664 0-30.165333-12.501333t-12.501333-30.165333q0-18.005333 12.330667-30.336l120.661333-120.661333q12.672-12.672 30.336-12.672zM85.333333 469.333333l170.666667 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-170.666667 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM512 725.333333q17.664 0 30.165333 12.501333t12.501333 30.165333l0 170.666667q0 17.664-12.501333 30.165333t-30.165333 12.501333-30.165333-12.501333-12.501333-30.165333l0-170.666667q0-17.664 12.501333-30.165333t30.165333-12.501333zM210.346667 167.338667q17.322667 0 29.994667 12.672l120.661333 120.661333q12.672 12.672 12.672 29.994667 0 17.664-12.501333 30.165333t-30.165333 12.501333q-18.005333 0-30.336-12.330667l-120.661333-120.661333q-12.330667-12.330667-12.330667-30.336 0-17.664 12.501333-30.165333t30.165333-12.501333zM768 469.333333l170.666667 0q17.664 0 30.165333 12.501333t12.501333 30.165333-12.501333 30.165333-30.165333 12.501333l-170.666667 0q-17.664 0-30.165333-12.501333t-12.501333-30.165333 12.501333-30.165333 30.165333-12.501333zM512 42.666667q17.664 0 30.165333 12.501333t12.501333 30.165333l0 170.666667q0 17.664-12.501333 30.165333t-30.165333 12.501333-30.165333-12.501333-12.501333-30.165333l0-170.666667q0-17.664 12.501333-30.165333t30.165333-12.501333zM813.994667 167.338667q17.322667 0 29.994667 12.672t12.672 29.994667q0 17.664-12.672 30.336l-120.661333 120.661333q-12.330667 12.330667-29.994667 12.330667-18.346667 0-30.506667-12.16t-12.16-30.506667q0-17.664 12.330667-29.994667l120.661333-120.661333q12.672-12.672 30.336-12.672z'
                ]
            }
        };
        return _this;
    }
    return TreeContainerConfig;
}(CellContainerConfig_CellContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/IndexContainerConfig.ts



var IndexContainerConfig_IndexContainerConfig = /** @class */ (function (_super) {
    __extends(IndexContainerConfig, _super);
    function IndexContainerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$positionCheck = new Array();
        _this.canSum = true;
        _this.style = objectSet(_this.style, { background: '#fff', }, 'union');
        return _this;
    }
    return IndexContainerConfig;
}(TheadContainerConfig_TheadContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/BaseTheadConfig.ts



var BaseTheadConfig_BaseTheadConfig = /** @class */ (function (_super) {
    __extends(BaseTheadConfig, _super);
    function BaseTheadConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.draggable = true; // 是否可以拖动
        _this.readonly = false; // 表头是否可以编辑
        _this.$leafIndexList = new Array();
        _this.$leafIndexList2 = new Array();
        _this.side1 = 0;
        _this.side2 = 0;
        _this.span1 = 0;
        _this.span2 = 0;
        _this.isRootParent = true;
        _this.style = objectSet(_this.style, {
            background: '#f5f7fa',
            cursor: 'pointer',
        }, 'union');
        return _this;
    }
    return BaseTheadConfig;
}(TheadContainerConfig_TheadContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/IndexTheadConfig.ts



var IndexTheadConfig_IndexTheadConfig = /** @class */ (function (_super) {
    __extends(IndexTheadConfig, _super);
    function IndexTheadConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.$leafIndexList = new Array();
        _this.$leafIndexList2 = new Array();
        _this.side1 = 0;
        _this.side2 = 0;
        _this.span1 = 0;
        _this.span2 = 0;
        _this.isRootParent = true;
        _this.style = objectSet(_this.style, {
            overflow: 'hidden',
            boxSizing: 'border-box',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            userSelect: 'none',
            background: '#fff',
            zIndex: 99
        }, 'union');
        return _this;
    }
    return IndexTheadConfig;
}(IndexContainerConfig_IndexContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/BaseTableConfig.ts


var BaseTableConfig_BaseTableConfig = /** @class */ (function (_super) {
    __extends(BaseTableConfig, _super);
    function BaseTableConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'table';
        _this.isTopLeftShow = false; // 左上角单元格是否显示表名
        _this.tableName = ''; // 表名
        _this.debugLevel = 0; // 1为调试模式 0是正常模式
        _this.isShowColIndex = true; // 是否显示 列标识：A、B、D、C
        _this.isShowRowIndex = true; // 是否显示 行标识：1、2、3、4
        _this.isOverflowX = false; // 超出宽X度是否出现滚动条
        _this.isOverflowY = false; // 超出高Y度是否出现滚动条
        _this.canDragResize = false; // 是否可以拖动 控制行列宽度
        _this.hasTopFixedTable = true; // 是否有上侧固定表头
        _this.hasLeftFixedTable = true; // 是否有左侧固定表头
        _this.maxWidth = '100%'; // 如果加滚动条 表格默认宽度
        _this.maxHeight = '400px'; // 如果加滚动条 表格默认高度
        _this.scrollBarWidth = '17px'; // 右侧滚动条宽度
        _this.scrollBarHeight = '17px'; // 底侧滚动条高度
        _this.defaultExpandedIds = []; // 默认展开树形容器节点id
        _this.style = {
            scrollTop: 0,
            scrollLeft: 0,
            mainTable: {},
            topTable: {},
            leftTable: {}
        };
        return _this;
    }
    return BaseTableConfig;
}(BaseContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/BaseTbodyConfig.ts



var BaseTbodyConfig_BaseTbodyConfig = /** @class */ (function (_super) {
    __extends(BaseTbodyConfig, _super);
    function BaseTbodyConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.topIndexList = new Array();
        _this.leftIndexList = new Array();
        _this.bodyData = {};
        _this.style = objectSet(_this.style, { background: '#fff', }, 'union');
        return _this;
    }
    return BaseTbodyConfig;
}(CellContainerConfig_CellContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/TbodyContainerConfig.ts



var TbodyContainerConfig_TbodyContainerConfig = /** @class */ (function (_super) {
    __extends(TbodyContainerConfig, _super);
    function TbodyContainerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.separator = '_';
        _this.style = objectSet(_this.style, {
            background: '#fff',
        }, 'union');
        return _this;
    }
    return TbodyContainerConfig;
}(CellContainerConfig_CellContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/SelfContainerConfig.ts


var SelfContainerConfig_SelfContainerConfig = /** @class */ (function (_super) {
    __extends(SelfContainerConfig, _super);
    function SelfContainerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.show = false;
        _this.type = 'tips';
        _this.widthSelfNum = 15;
        _this.rightNum = 5;
        _this.style = {
            float: 'right',
            right: '0px',
            width: '15px',
            boxSizing: 'content-box',
            position: 'absolute'
        };
        _this.svg = {
            tips: {
                paths: [
                    'M997.64736 819.1488l0-0.13824L577.84832 91.89888l-0.07168 0c-5.25312-19.3536-29.25056-33.87392-58.07104-33.87392-29.0304 0-52.94592 14.86848-57.99424 34.432L32.0256 836.608l0.35328 0.49152c-9.82016 9.74848-7.92576 32.89088 5.39648 54.49216 13.39904 22.02624 33.59232 34.29888 46.63808 29.24544l0.49152 0.768 869.75488 0 0.49152-1.11616c14.52032 2.24256 32.39936-10.52672 43.55072-33.24928C1011.74272 861.08672 1010.90304 831.63136 997.64736 819.1488L997.64736 819.1488zM458.83904 320.52224c0-32.18944 26.15808-58.27584 58.27584-58.27584 32.26112 0 58.28096 26.0864 58.28096 58.27584l0 300.36992c0 32.11264-26.01984 58.27584-58.28096 58.27584-32.11776 0-58.27584-26.15808-58.27584-58.27584L458.83904 320.52224 458.83904 320.52224zM517.12 844.81536c-34.9952 0-63.39584-28.40576-63.39584-63.46752 0-35.00032 28.40064-63.26272 63.39584-63.26272 34.9952 0 63.39072 28.26752 63.39072 63.26272C580.51072 816.33792 552.1152 844.81536 517.12 844.81536L517.12 844.81536z'
                ]
            }
        };
        return _this;
    }
    return SelfContainerConfig;
}(BaseContainerConfig));


// CONCATENATED MODULE: ./packages/drag-table2.0/config/DragTableConfig.ts












var DragTableConfig_DragTableConfig = /** @class */ (function () {
    function DragTableConfig() {
        // public renderEvent?= ['blur', 'change', 'paste', 'render', 'theadAdd', 'afterDrop'];
        this.BaseCellConfig = new BaseCellConfig_BaseCellConfig();
        this.BaseContainerConfig = new BaseContainerConfig();
        this.CellContainerConfig = new CellContainerConfig_CellContainerConfig();
        this.TheadContainerConfig = new TheadContainerConfig_TheadContainerConfig();
        this.TbodyContainerConfig = new TbodyContainerConfig_TbodyContainerConfig();
        this.TreeContainerConfig = new TreeContainerConfig_TreeContainerConfig();
        this.SelfContainerConfig = new SelfContainerConfig_SelfContainerConfig();
        this.IndexContainerConfig = new IndexContainerConfig_IndexContainerConfig();
        this.BaseTheadConfig = new BaseTheadConfig_BaseTheadConfig();
        this.IndexTheadConfig = new IndexTheadConfig_IndexTheadConfig();
        this.BaseTbodyConfig = new BaseTbodyConfig_BaseTbodyConfig();
        this.BaseTableConfig = new BaseTableConfig_BaseTableConfig();
        this.baseCell = {}; // Cell配置
        this.baseContainer = {}; // 基础容器
        this.cellContainer = {}; // 基础Cell容器
        this.topThead = {}; // 上表头theadTopEntity配置
        this.leftThead = {}; // 左表头theadLeftEntity配置
        this.topIndexThead = {}; // 上表头theadTopEntity配置
        this.leftIndexThead = {}; // 左表头theadLeftEntity配置
        this.theadContainer = {}; // 基础容器
        this.topIndexContainer = {}; // 行列标志容器
        this.leftIndexContainer = {
            style: {
                width: '80px'
            }
        }; // 行列标志容器
        this.treeContainer = {}; // 钻取容器
        this.selfContainer = {}; // 提示容器
        this.tbodyContainer = {}; // tbody配置
        this.baseTbody = {}; // tbody配置
        this.table = {}; // BaseTable类配置
    }
    /**
     * getInstance
     */
    DragTableConfig.getInstance = function (id) {
        var res;
        if (this.instances.hasOwnProperty(id)) {
            res = this.instances[id];
        }
        else {
            res = this.instances[id] = new DragTableConfig();
        }
        return res;
    };
    DragTableConfig.instances = {};
    return DragTableConfig;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/cell/BaseCell.ts



var BaseCell_BaseCell = /** @class */ (function () {
    function BaseCell(param) {
        this.nullReplace = '';
        // 用户自定义
        this.userData = {};
        // 公式
        this.formula = {
            hasFormula: false,
            tmpValue: '',
            canClickAdd: true,
        };
        // 样式
        this.style = {};
        // 选择框
        this.select = {
            selectOption: null,
            optionList: [],
        };
        // 配置文件
        this.config = {};
        this.$warningMessage = [];
        // 渲染状态
        this.$renderState = {
            inRender: false,
            hasrendered: false,
        };
        this.$ICObject = {}; // index-Container-对应;
        var paramClone = keepClone(param);
        this.initBeforeSetData(paramClone);
        // 设置一遍 默认配置config的参数
        objectSet(this, this.config, 'union');
        this.setCellData(paramClone);
    }
    Object.defineProperty(BaseCell.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this.$renderState.hasrendered = false;
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    BaseCell.prototype.initBeforeSetData = function (paramClone) {
        this.value = paramClone.value || '';
        this.$groupId = paramClone.$groupId;
        this.$parent = paramClone.$parent;
        this.$dragTableConfig = DragTableConfig_DragTableConfig.getInstance(this.$groupId);
        objectSet(this.config, this.$dragTableConfig.BaseCellConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.baseCell, 'union');
    };
    /**
     * 通用设置配置
     *
     * @param {*} config
     * @memberof BaseCellInterface
     */
    BaseCell.prototype.setConfig = function (config) {
        var configCopy = baseClone(config);
        try {
            if (configCopy) {
                objectSet(this.config, configCopy, 'union');
                objectSet(this.style, configCopy.style, 'union');
                objectSet(this, this.config); // 不加union
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * doVerify
     */
    BaseCell.prototype.doVerify = function () {
        var _this = this;
        this.$warningMessage = [];
        var res = true;
        this.verification.state = true;
        var content = this.content + '';
        var percentReg = /(^\d+(\.\d+)*)%$/;
        content = content.replace(percentReg, function (match, group1) {
            return Number(group1) * 0.01;
        });
        if (this.verification.hasVerification) {
            this.verification.vTypes.forEach(function (vType) {
                res = true;
                if (vType === 'number' && content) {
                    res = !isNaN(content);
                }
                else if (vType === 'date' && content) {
                    var reg = /((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)/;
                    res = reg.test(content);
                }
                else if (vType === 'integer' && content) {
                    var reg = /^[+]{0,1}(\d+)$/;
                    res = res && (reg.test(content));
                }
                else if (/decimal/.test(vType) && content) {
                    var mathObj = vType.match(/%[0-9]+/);
                    var num = 0;
                    if (mathObj !== null) {
                        num = Number(mathObj[0].replace('%', ''));
                    }
                    var reg = void 0;
                    if (num === 0) {
                        reg = /^\d+(\.\d+)*$/;
                    }
                    else {
                        reg = new RegExp('^\\d+(\\.\\d{1,' + num + '})?$');
                    }
                    res = res && (reg.test(content));
                    // 构造提示信息
                    {
                        var ex = '';
                        for (var i = 0; i < num; i++) {
                            ex += '1';
                        }
                        _this.verification.message[vType] = _this.verification.message[vType] || '您好请输入最多' + num + '位小数:例如 3.' + ex;
                    }
                }
                else if (vType === 'notNull') {
                    res = (content !== '' && content !== undefined && content !== null);
                }
                if (!res) {
                    _this.$warningMessage.push(vType);
                }
                _this.verification.state = _this.verification.state && res;
            });
        }
        return res;
    };
    /**
     * format
     */
    BaseCell.prototype.format = function () {
        var fType = this.formatter;
        var content = this.content + '';
        var res = true;
        var percentReg = /(^\d+(\.\d+)*)%$/;
        content = content.replace(percentReg, function (match, group1) {
            return /percent/.test(fType) ? group1 : Number(group1) * 0.01;
        });
        if (this.formatter && !isNaN(content) && content && this.verification.state) {
            if (fType === 'date') {
                var reg = /((?!0000)[0-9]{4}-((0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-8])|(0[13-9]|1[0-2])-(29|30)|(0[13578]|1[02])-31)|([0-9]{2}(0[48]|[2468][048]|[13579][26])|(0[48]|[2468][048]|[13579][26])00)-02-29)/;
                this.content = reg.test(content) ? content : '1990-01-01';
            }
            else if (fType === 'integer') {
                var reg = /^[+]{0,1}(\d+)$/;
                this.content = reg.test(content) ? content : Math.round(content);
            }
            else if (/decimal|percent/.test(fType)) {
                var mathObj = fType.match(/%[0-9]+/);
                var num = 0;
                if (mathObj !== null) {
                    var tmp = Number(mathObj[0].replace('%', ''));
                    num = tmp;
                }
                var reg = void 0;
                if (num === 0) {
                    reg = /^\d+(\.\d+)*$/;
                }
                else {
                    reg = new RegExp('^\\d+\\.\\d{' + num + '}$');
                }
                // content = /percent/.test(fType) ? Formula.simpleEval(content + '*100') + '' : content;
                res = reg.test(content);
                var repairRes = content;
                if (!res) {
                    var dotIndex = content.indexOf('.');
                    var zeroCount = 0;
                    if (dotIndex !== -1) {
                        var nowBit = content.split('.')[1].length;
                        zeroCount = num - nowBit;
                    }
                    else {
                        repairRes += (num === 0 ? '' : '.');
                        zeroCount = num;
                    }
                    if (zeroCount > 0) {
                        repairRes += new Array(zeroCount).fill(0).join('');
                    }
                    else {
                        repairRes = Math.round(content * Math.pow(10, num)) / (Math.pow(10, num) * 1.0);
                    }
                }
                this.content = /percent/.test(fType) ? repairRes + '%' : repairRes;
            }
        }
    };
    /**
     * 设置数据
     *
     * @param {BaseCellInterface} cellData
     * @memberof BaseCell
     */
    BaseCell.prototype.setCellData = function (cellData) {
        var self = this;
        for (var key in cellData) {
            // 2018/11/23将 if (containerData.hasOwnProperty(key))修改为 if (this.hasOwnProperty(key))
            if (this.hasOwnProperty(key) || key === 'value') {
                var _value = cellData[key];
                // 对私有属性(_)和不需要保存属性($)特殊处理
                if (key.indexOf('$') !== -1 || _value === undefined) {
                    continue;
                }
                else if (key === 'displayClass') {
                    objectSet(this.displayClass, _value, 'union');
                    objectSet(this, this.displayClass[this.status]);
                }
                else if (typeof _value === 'object' && !Array.isArray(_value)) {
                    objectSet(self[key], _value, 'union');
                }
                else {
                    this.setProperty(key, _value);
                }
            }
        }
    };
    /**
     * 设置属性
     *
     * @param {string} key
     * @param {*} val
     * @returns
     * @memberof BaseCell
     */
    BaseCell.prototype.setProperty = function (key, val) {
        if (val === undefined) {
            return;
        }
        this[key] = val;
        this.$renderState.hasrendered = false;
    };
    BaseCell.prototype.clone = function (excludeReg, keepReg, withFunction) {
        return myObejctClone(this, excludeReg, keepReg, withFunction);
    };
    /**
     * onFocus
     */
    BaseCell.prototype.onFocus = function (ev) {
        var res = this.checkHasFormula();
        this.checkLastCharStatus(ev);
    };
    /**
     * onMouseOver
     */
    BaseCell.prototype.onMouseOver = function (ev) {
        switch (this.displayType) {
            case 'input':
                ev.srcElement.focus();
                break;
        }
    };
    /**
     * click
     */
    BaseCell.prototype.onClick = function (ev) {
        ev.stopPropagation();
        var displayType = this.displayClass[this.status].displayType;
    };
    /**
     * onMouseUp
     */
    BaseCell.prototype.onMouseUp = function (ev) {
        this.checkLastCharStatus(ev);
    };
    /**
     * onBlur
     */
    BaseCell.prototype.inputOnBlur = function (ev, update) {
        var _this = this;
        // debugger
        this.status = 'normal';
        this.onBlur(ev);
        var parentContainer = this.$parent;
        this.render();
        if (!this.verification.state) {
            this.$warningMessage.forEach(function (vType) {
                _this.warning(_this.verification.message[vType]);
            });
        }
        if (parentContainer) {
            if (update) {
                var sourceContainer = parentContainer.getContainer(parentContainer.position);
                sourceContainer.setCell(this);
                sourceContainer.cell.render();
                parentContainer.$positionManager.canFocus = true;
                parentContainer.$positionManager.$editContainer = null;
            }
            parentContainer.rootParentSendMsg({
                ev_type: 'blur',
                render: true,
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }
    };
    /**
     * onInput
     */
    BaseCell.prototype.onInput = function (ev) {
        this.checkLastCharStatus(ev);
    };
    BaseCell.prototype.onDbClick = function (ev) {
        if (!(this.status === 'readonly')) {
            this.status = 'dbclick';
            objectSet(this, this.displayClass[this.status], 'union');
        }
        var parentContainer = this.$parent;
        if (parentContainer) {
            parentContainer.rootParentSendMsg({
                ev_type: 'dbclick',
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }
        // ev.target.focus();
    };
    /**
     * onBlur
     */
    BaseCell.prototype.onBlur = function (ev) {
        if (!(this.status === 'readonly')) {
            this.status = 'normal';
            this.oldValue = this._value;
            objectSet(this, this.displayClass[this.status]);
        }
    };
    /**
     * warning
     */
    BaseCell.prototype.warning = function (msg) {
        alert(msg);
    };
    /**
     * onKeyDown
     * 回车失去焦点
     */
    BaseCell.prototype.onKeyDown = function (ev) {
        // debugger
        if (ev.key === 'Enter') {
            ev.target.blur();
        }
        else if (ev.key === 'Escape') {
            this._value = this.oldValue;
            ev.target.blur();
        }
    };
    /**
     * onChange事件
     *
     * @param {*} e
     * @memberof BaseCell
     */
    BaseCell.prototype.onChange = function (ev) {
        if (!(this.status === 'readonly')) {
            this.status = 'normal';
        }
        this.$renderState.hasrendered = false;
        switch (this.displayType) {
            case 'select':
                var selectedIndex = ev.target.selectedIndex;
                this.select.selectOption = this.select.optionList[selectedIndex];
                break;
        }
        var parentContainer = this.$parent;
        if (parentContainer) {
            parentContainer.rootParentSendMsg({
                ev_type: 'change',
                render: true,
                event: ev,
                data: {
                    objectName: 'Cell',
                    object: this,
                },
            });
        }
    };
    /**
     * checkStatus
     */
    BaseCell.prototype.checkStatus = function () {
        var readonly = false;
        var parnetContainer = this.$parent;
        if (this.readonly !== undefined) {
            readonly = this.readonly;
        }
        else if (parnetContainer) {
            var rootParent = parnetContainer.$rootParent;
            if (parnetContainer.readonly !== undefined) {
                readonly = parnetContainer.readonly;
            }
            else if (rootParent) {
                if (rootParent.readonly !== undefined) {
                    readonly = rootParent.readonly;
                }
            }
        }
        if (readonly === true) {
            this.status = 'readonly';
        }
        else {
            this.status = 'normal';
        }
    };
    /**
     * render
     * 渲染
     */
    BaseCell.prototype.render = function () {
        var parentContainer = this.$parent;
        if (parentContainer) {
            this.style.width = parentContainer.widthSelfNum - 2 + 'px';
            this.style.height = parentContainer.heightSelfNum - 2 + 'px';
            this.style.lineHeight = parentContainer.style.height;
        }
        if (this.$renderState.hasrendered && !this.formula.hasFormula) {
            // debugger;
            return;
        }
        else if (this.$renderState.inRender) {
            this.content = 0;
            var position = parentContainer.position;
            console.error('重复引用:table' + position.table + '!' + position.colStr + position.rowStr);
        }
        else {
            this.$renderState.inRender = true;
            this.checkHasFormula();
            if (parentContainer && this.formula.hasFormula) {
                var posiitonReg = /([\u4e00-\u9fa5_a-zA-Z0-9_]+!)?[A-Z]+[0-9]+/g;
                var formulaContent_1 = this._value.replace(/^=/, ''); // 拷贝一份不带'='的，用于计算
                var valueBack_1 = this._value; // 拷贝一份带'='的，用于替换
                {
                    // 处理百分号计算
                    formulaContent_1 = Formula_Formula.percentHandle(formulaContent_1);
                    // 处理花括号计算
                    formulaContent_1 = Formula_Formula.curlyBracesHandle(formulaContent_1, parentContainer);
                }
                var ICObject_1 = {}; // 新建一个对象存储对应信息
                var regObj = formulaContent_1.match(posiitonReg);
                (regObj || []).forEach(function (item) {
                    // 获得position 如果没有table则默认为同表操作
                    var position = Formula_Formula.cellStr2Position(item);
                    position.table = position.table || parentContainer.position.table;
                    var tmpNameStr = position.table + '!' + position.colStr + position.rowStr;
                    var result;
                    // 2019/4/2因为时间不够 逻辑未明确 所以注释该语句，解决$ICObject所存数据未及时更新bug，但
                    // 产生的后果是，公式中单元格位置变动时，不能自动更新公式 
                    // ICObject = this.$ICObject;
                    if (ICObject_1.hasOwnProperty(tmpNameStr)) {
                        result = ICObject_1[tmpNameStr];
                        if (result) {
                            var newPositonStr = ((result.position.table === parentContainer.position.table) ? '' : result.position.table + '!') + result.position.colStr + result.position.rowStr;
                            ICObject_1[tmpNameStr] = result;
                            valueBack_1 = replaceAll(valueBack_1, item, 'back_' + tmpNameStr);
                            if (valueBack_1.search('back_' + tmpNameStr) !== -1) {
                                valueBack_1 = replaceAll(valueBack_1, 'back_' + tmpNameStr, newPositonStr);
                            }
                            else {
                                // debugger
                                // valueBack = _.replaceAll(valueBack, item, tmpNameStr);
                            }
                        }
                        else {
                            console.error('cell:render() result为空');
                        }
                    }
                    else {
                        result = parentContainer.getContainer(position);
                        ICObject_1[tmpNameStr] = result;
                    }
                    if (result && result.cell) {
                        result.cell.render();
                        formulaContent_1 = formulaContent_1.replace(item, result.cell.content || 0);
                        // console.log(formulaContent);
                    }
                });
                this._value = valueBack_1;
                this.$ICObject = ICObject_1;
                formulaContent_1 = Formula_Formula.complexEval(formulaContent_1);
                this.content = formulaContent_1;
            }
            else {
                this.content = (this._value === '' || this._value === null || this._value === undefined) ? this.nullReplace : this._value;
            }
            this.$renderState.inRender = false;
        }
        this.doVerify();
        this.format();
        this.checkStatus();
    };
    /**
     * check
     */
    BaseCell.prototype.checkLastCharStatus = function (ev) {
        this.selectionStart = ev.target.selectionStart;
        var lastCharIndex = this.selectionStart - 1;
        var char = (this._value + '').substr(lastCharIndex, 1);
        var parentContainer = this.$parent;
        console.log('char:' + char);
        if (/^[\+\-\*\/\=]$/.test(char)) {
            // debugger
            this.formula.canClickAdd = true;
            parentContainer.$positionManager.canFocus = false;
            parentContainer.$positionManager.$editContainer = parentContainer;
            this.formula.tmpValue = this._value;
        }
        else {
            this.formula.canClickAdd = false;
            parentContainer.$positionManager.canFocus = true;
            parentContainer.$positionManager.$editContainer = null;
        }
    };
    /**
     * checkHasFormula
     */
    BaseCell.prototype.checkHasFormula = function () {
        if (this.$parent) {
            var regStart = /^=/;
            if (regStart.test(this._value)) {
                this.formula.hasFormula = true;
                var regEnd = /[A-Z]+[0-9]+$/g;
                if (regEnd.test(this._value)) {
                    this.formula.canClickAdd = true;
                }
                else {
                    this.formula.canClickAdd = false;
                }
                this.formula.canClickAdd = true;
            }
            else {
                this.formula.hasFormula = false;
            }
        }
        return this.formula.hasFormula;
    };
    return BaseCell;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/module/positionManager/PositionManager.ts

var PositionManager_PositionManager = /** @class */ (function () {
    function PositionManager(type) {
        this.positionMap = {};
        this.treeContainerMap = new Map();
        this.hideContainerMap = new Map();
        this.$editContainer = null;
        this.canFocus = true; // 是否可以获得焦点
        this.type = type;
    }
    /**
     * getInstance
     */
    PositionManager.getInstance = function (type) {
        var instance = this.instances[type];
        if (!instance) {
            this.instances[type] = instance = new PositionManager(type);
        }
        return instance;
    };
    PositionManager.prototype.clearPositionMapById = function (key) {
        delete this.positionMap[key + 'clone'];
        delete this.positionMap[key + 'last'];
        delete this.positionMap[key + 'source'];
    };
    /**
     * getContainer
     */
    PositionManager.prototype.getContainer = function (position, type) {
        var res = null;
        try {
            if (position) {
                type = type || 'source';
                var copyPosition = baseClone(position);
                copyPosition.table = copyPosition.table + type;
                var tableObj = this.positionMap[copyPosition.table];
                if (tableObj) {
                    var colObj = tableObj[copyPosition.colStr];
                    if (colObj) {
                        res = colObj[copyPosition.rowStr];
                    }
                }
            }
        }
        catch (error) {
            console.error('getContainer发生错误');
            console.log(error);
        }
        return res;
    };
    PositionManager.prototype.getTopIndexContainer = function (position, type) {
        type = type || 'source';
        var cloneP = baseClone(position);
        cloneP.rowStr = 0;
        return this.getContainer(cloneP, type);
    };
    PositionManager.prototype.getLeftIndexContainer = function (position, type) {
        type = type || 'source';
        var cloneP = baseClone(position);
        cloneP.colStr = '@';
        return this.getContainer(cloneP, type);
    };
    /**
     * getColObj
     */
    PositionManager.prototype.getColObj = function (position, type) {
        type = type || 'source';
        var copyPosition = baseClone(position);
        copyPosition.table = copyPosition.table + type;
        var res = null;
        var tableObj = this.positionMap[copyPosition.table];
        if (tableObj) {
            var colObj = tableObj[copyPosition.colStr];
            res = colObj;
        }
        return res;
    };
    /**
     * getRowObj
     */
    PositionManager.prototype.getRowObj = function (position, type) {
        type = type || 'source';
        var copyPosition = baseClone(position);
        copyPosition.table = copyPosition.table + type;
        var res = null;
        var tableObj = this.positionMap[copyPosition.table];
        if (tableObj) {
            res = {};
            for (var colStr in tableObj) {
                if (tableObj.hasOwnProperty(colStr)) {
                    var colObj = tableObj[colStr];
                    res[colStr] = colObj[copyPosition.rowStr];
                }
            }
        }
        return res;
    };
    /**
     * setPositionMap
     */
    PositionManager.prototype.setPositionMap = function (position, container, type) {
        type = type || 'source';
        var copyPosition = baseClone(position);
        copyPosition.table = copyPosition.table + type;
        if (!this.positionMap.hasOwnProperty(copyPosition.table)) {
            this.positionMap[copyPosition.table] = {};
        }
        var tableObj = this.positionMap[copyPosition.table];
        if (!tableObj.hasOwnProperty(copyPosition.colStr)) {
            tableObj[copyPosition.colStr] = {};
        }
        var colObj = tableObj[copyPosition.colStr];
        colObj[copyPosition.rowStr] = container;
    };
    /**
     * saveLastPositionMap
     */
    PositionManager.prototype.saveLastPositionMap = function (position) {
        var copyPosition = baseClone(position);
        var tableClone = this.positionMap[copyPosition.table + 'source'];
        for (var colStr in tableClone) {
            if (tableClone.hasOwnProperty(colStr)) {
                var colObj = tableClone[colStr];
                for (var rowStr in colObj) {
                    if (colObj.hasOwnProperty(rowStr)) {
                        var container = colObj[rowStr];
                        var lastPosition = baseClone(copyPosition);
                        lastPosition.colStr = colStr;
                        lastPosition.rowStr = rowStr;
                        // debugger
                        this.setPositionMap(lastPosition, container.clone(), 'last');
                    }
                }
            }
        }
        return this.positionMap[copyPosition.table + 'last'];
    };
    PositionManager.instances = {};
    return PositionManager;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/communication/Subject.ts
var Subject = /** @class */ (function () {
    function Subject() {
        this.callbackList = new Array();
    }
    Subject.prototype.subscribe = function (callback, self) {
        this.callbackList.push({
            fun: callback,
            arg: self,
        });
    };
    Subject.prototype.unsubscribe = function (callback, self) {
        var index = -1;
        this.callbackList.forEach(function (item, i) {
            if (item === {
                fun: callback,
                arg: self,
            }) {
                index = i;
            }
        });
        // const index = this.callbackList.indexOf(callback);
        if (index > -1) {
            this.callbackList.splice(index, 1);
        }
    };
    Subject.prototype.sendMsg = function (msg) {
        return this.notify(msg);
    };
    Subject.prototype.notify = function (msg) {
        var resultList = [];
        this.callbackList.forEach(function (obj) {
            resultList.push(obj.fun.call(obj.arg, msg) || true);
        });
        return resultList;
    };
    return Subject;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/BaseContainer.ts





// 只有对于容器来说才有相对位置
var BaseContainer_BaseContainer = /** @class */ (function () {
    function BaseContainer(param) {
        this.$subject = new Subject(); //  订阅事件
        var paramClone = keepClone(param);
        // 1、预先初始化，包括默认配置config
        // 2、并将dragTableConfig融合到用户参数param里获得param2；
        this.initBeforeSetData(paramClone);
        // 设置一遍 默认配置config的参数
        objectSet(this, this.config, 'union');
        // 设置用户设置param
        this.setContainerData(paramClone);
        // this.config = null;
    }
    /**
     * initBeforeConstructor
     */
    BaseContainer.prototype.initBeforeSetData = function (paramClone) {
        // 初始化默认配置
        this.id = paramClone.id || 'def_' + guid();
        this.config = {};
        this.$groupId = paramClone.$groupId;
        this.$rootTable = paramClone.$rootTable;
        this.$positionManager = PositionManager_PositionManager.getInstance(this.$groupId);
        this.$dragTableConfig = DragTableConfig_DragTableConfig.getInstance(this.$groupId);
        // dragtable设置注入
        this.config = baseClone(this.$dragTableConfig.BaseContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.BaseContainerConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.baseContainer, 'union');
        this.type = paramClone.type || 'top';
    };
    /**
     * setContainerData
     */
    BaseContainer.prototype.setContainerData = function (containerData, containerData2, weight1, weight2, callBack) {
        var paramClone = keepClone(containerData);
        var paramClone2 = keepClone(containerData2);
        var self = this;
        try {
            for (var key in this) {
                if (this.hasOwnProperty(key)) {
                    // if(key === 'hideType'){
                    //     console.log(containerData.hideType);
                    // }
                    var value = this.getDataByWeight(key, paramClone, paramClone2, weight1, weight2);
                    if (value === null || value === undefined) {
                        this.setProperty(key, value);
                        continue;
                    }
                    else if (/(^\$)|cell|bodyData|Entity|treeContainer|tipContainer/.test(key)) {
                        // debugger
                        // do nothing; 
                    }
                    else if (typeof value === 'object' && !Array.isArray(value)) {
                        if (self[key] && typeof self[key].setContainerData === 'function') {
                            self[key].setContainerData(value);
                            continue;
                        }
                        else {
                            objectSet(self[key], value, 'union', /\$/);
                            continue;
                        }
                    }
                    else if (key === 'children') {
                        this.setChildren(value);
                        continue;
                    }
                    if (callBack && typeof callBack === 'function') {
                        callBack(key, value);
                    }
                    else {
                        this.setProperty(key, value);
                    }
                }
            }
        }
        catch (error) {
            console.error('setContainerData 中出现出错');
            console.error(error);
        }
    };
    /**
     * setChirldren
     */
    BaseContainer.prototype.setChildren = function (children) {
        var _this = this;
        this.children = new Array();
        children.forEach(function (item) {
            var child = _this.createContain(item);
            _this.addChild(child);
        });
    };
    /**
     * createContain
     */
    BaseContainer.prototype.createContain = function (data) {
        // do nothing
    };
    /**
     * addChild
     * 备注：添加子节点
     * @param child: BaseCell 要添加的子节点
     * @param targetIndex?: number 添加的位置
     */
    BaseContainer.prototype.addChild = function (child, targetIndex) {
        targetIndex = (targetIndex === undefined || targetIndex === null) ? this.children.length : targetIndex;
        this.children.splice(targetIndex, 0, child);
        child.$parent = this;
        return child.id;
    };
    /**
     * deletChild
     * 备注：删除子节点
     * @param count: number 要删除的个数 默认为1
     * @param targetIndex?: number 删除的位置
     * @param needDeleteItChildren?: boolean 是否连同该被 要删除的节点A 和A的子节点都删除
     */
    BaseContainer.prototype.deletChild = function (targetIndex, count, needDeleteItChildren) {
        var _this = this;
        var hasDeleteContainer = [];
        count = count == null ? 1 : count;
        if (needDeleteItChildren) {
            hasDeleteContainer = this.children.splice(targetIndex, count);
        }
        else {
            var childrenList = []; // 临时存被删除BaseTheadCell的孩子们
            var childrenStartIndex_1 = targetIndex + count;
            for (var index = targetIndex; index < targetIndex + count; index++) {
                this.children[index].children.forEach(function (child, i) {
                    _this.addChild(child, childrenStartIndex_1);
                    childrenStartIndex_1++;
                });
            }
            hasDeleteContainer = this.children.splice(targetIndex, count);
        }
        hasDeleteContainer.forEach(function (container) {
            container.$inSystem = false;
        });
    };
    /**
     * replaceChild
     * 备注：替换子节点
     * @param count: number 要删除的个数 默认为1
     * @param targetIndex?: number 删除的位置
     * @param needDeleteItChildren?: boolean 是否连同该被 要删除的节点A 和A的子节点都删除
     */
    BaseContainer.prototype.replaceChild = function (newChild, targetIndex, needDeleteItChildren) {
        if (!newChild.id) {
            newChild.id = 'def_' + guid();
        }
        if (targetIndex > this.children.length - 1) {
            this.addChild(newChild, targetIndex);
        }
        else {
            newChild.position = this.children[targetIndex].position;
            if (needDeleteItChildren) {
                this.children.splice(targetIndex, 1, newChild);
            }
            else {
                var childrenList_1 = []; // 临时存被删除BaseTheadCell的孩子们
                this.children[targetIndex].children.forEach(function (child, i) {
                    childrenList_1.push(child);
                });
                this.children.splice(targetIndex, 1, newChild);
                newChild.children = newChild.children.concat(childrenList_1);
            }
        }
        newChild.$parent = this;
    };
    /**
     * clone
     */
    BaseContainer.prototype.clone = function (excludeReg, keepReg, withFunction) {
        keepReg = keepReg || UtilsConfig.keepReg;
        // return _.myObejctClone(this, excludeReg, keepReg, withFunction);
        var object = Object.create({});
        var Obj = this;
        var _loop_1 = function (key) {
            if (Obj.hasOwnProperty(key) || (withFunction && typeof Obj[key] === 'function')) {
                var tmpObject = Obj[key];
                var val_1 = null;
                var needContinue = excludeReg ? (excludeReg.test(key) ? true : false) : false;
                var needKeep = keepReg ? (keepReg.test(key) ? true : false) : false;
                if (needContinue) {
                    return "continue";
                }
                else if (needKeep) {
                    val_1 = Obj[key];
                }
                else if (Array.isArray(tmpObject)) {
                    val_1 = [];
                    tmpObject.forEach(function (item) {
                        if (typeof item.clone === 'function') {
                            val_1.push(item.clone(excludeReg, keepReg, withFunction));
                        }
                        else {
                            val_1.push(keepClone(item, excludeReg, keepReg, withFunction));
                        }
                    });
                }
                else if (typeof Obj[key] === 'object') {
                    if (tmpObject && typeof tmpObject.clone === 'function') {
                        val_1 = tmpObject.clone(excludeReg, keepReg, withFunction);
                    }
                    else {
                        val_1 = (keepClone(tmpObject, excludeReg, keepReg, withFunction));
                    }
                }
                else {
                    val_1 = Obj[key];
                }
                object[key] = val_1;
            }
        };
        for (var key in Obj) {
            _loop_1(key);
        }
        return object;
    };
    /**
     * 通用设置配置
     *
     * @param {*} config
     * @memberof BaseContainer
     */
    BaseContainer.prototype.setConfig = function (config) {
        var configCopy = baseClone(config);
        try {
            if (configCopy) {
                objectSet(this, configCopy, 'union');
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * 设置属性
     *
     * @param {string} key
     * @param {*} val
     * @returns
     * @memberof BaseContainer
     */
    BaseContainer.prototype.setProperty = function (key, val) {
        if (val === undefined) {
            return;
        }
        this[key] = val;
    };
    BaseContainer.prototype.onClick = function (ev) {
        if (this.$rootTable) {
            this.$rootTable.subjectSend({
                ev_type: 'click',
                event: ev,
                data: {
                    objectName: 'BaseContainer',
                    object: this,
                },
            });
        }
    };
    /**
     * 鼠标按下
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    BaseContainer.prototype.onMouseDown = function (ev) {
        ev.stopPropagation();
        // 现代浏览器阻止默认事件
        if (ev && ev.preventDefault) {
            ev.preventDefault();
        }
        else {
            // 阻止IE
            window.event.returnValue = false;
        }
        return false;
    };
    /**
     * onBlur
     */
    BaseContainer.prototype.onBlur = function (ev) {
    };
    /**
     * 滚动事件 调整scrollTop scrollLeft
     *
     * @private
     * @param {*} ev
     * @memberof BaseTable
     */
    BaseContainer.prototype.onScroll = function (ev) {
        this.style.scrollTop = ev.srcElement.scrollTop;
        this.style.scrollLeft = ev.srcElement.scrollLeft;
    };
    /**
     * subjectSend
     */
    BaseContainer.prototype.subjectSend = function (msg) {
        return this.$subject.sendMsg(msg);
    };
    /** 获得容器
     * getContainer
     */
    BaseContainer.prototype.getContainer = function (position, type) {
        return this.$positionManager.getContainer(position, type);
    };
    /**
     * getTopIndexContainer
     */
    BaseContainer.prototype.getTopIndexContainer = function (position, type) {
        return this.$positionManager.getTopIndexContainer(position, type);
    };
    /**
     * getTopIndexContainer
     */
    BaseContainer.prototype.getLeftIndexContainer = function (position, type) {
        return this.$positionManager.getLeftIndexContainer(position, type);
    };
    /**
     * getTopIndexContainer
     */
    BaseContainer.prototype.getRowObj = function (position, type) {
        return this.$positionManager.getRowObj(position, type);
    };
    /**
     * getColObj
     */
    BaseContainer.prototype.getColObj = function (position, type) {
        return this.$positionManager.getColObj(position, type);
    };
    /**
     * saveLastPositionMap
     */
    BaseContainer.prototype.saveLastPositionMap = function (position) {
        return this.$positionManager.saveLastPositionMap(position);
    };
    /**
     * parpare
     */
    BaseContainer.prototype.getDataByWeight = function (key, data1, data2, weight1, weight2) {
        var dk1 = data1 ? (data1[key]) : undefined;
        var dk2 = data2 ? data2[key] : undefined;
        var wk1 = weight1 ? weight1[key] : undefined;
        var wk2 = weight2 ? weight2[key] : undefined;
        var resData;
        if (dk1 !== undefined && dk2 !== undefined) {
            if (wk1 && wk2) {
                if (!isNaN(wk1) && !isNaN(wk2)) {
                    resData = wk1 > wk2 ? dk1 : dk2;
                }
                else if (!isNaN(wk1) && isNaN(wk2)) {
                    resData = dk1;
                }
                else if (isNaN(wk1) && !isNaN(wk2)) {
                    resData = dk2;
                }
                else if (typeof wk1 === 'object' && typeof wk2 === 'object') {
                    resData = {};
                    for (var sonKey in dk1) {
                        if (dk1.hasOwnProperty(sonKey) && !resData.hasOwnProperty(sonKey)) {
                            var sonValue = this.getDataByWeight(sonKey, dk1, dk2, wk1, wk2);
                            resData[sonKey] = sonValue;
                        }
                    }
                    for (var sonKey in dk2) {
                        if (dk2.hasOwnProperty(sonKey) && !resData.hasOwnProperty(sonKey)) {
                            var sonValue = this.getDataByWeight(sonKey, dk1, dk2, wk1, wk2);
                            resData[sonKey] = sonValue;
                        }
                    }
                }
            }
            else if (wk1 && !wk2) {
                resData = dk1;
            }
            else if (!wk1 && wk2) {
                resData = dk2;
            }
            else if (!wk1 && !wk2) {
                resData = dk1;
            }
        }
        else if (dk1 === undefined && dk2 !== undefined) {
            resData = dk2;
        }
        else if (dk1 !== undefined && dk2 === undefined) {
            resData = dk1;
        }
        else if (dk1 === undefined && dk2 === undefined) {
            //
        }
        return resData;
    };
    return BaseContainer;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/CellContainer.ts




// 只有对于容器来说才有相对位置
var CellContainer_CellContainer = /** @class */ (function (_super) {
    __extends(CellContainer, _super);
    function CellContainer(param) {
        return _super.call(this, param) || this;
    }
    CellContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.cell = new BaseCell_BaseCell({ $parent: this });
        this.$rootParent = paramClone.$rootParent;
        this.paddingLeftNum = paramClone.paddingLeftNum;
        this.config = baseClone(this.$dragTableConfig.CellContainerConfig);
        objectSet(paramClone, this.$dragTableConfig.cellContainer, 'union');
    };
    CellContainer.prototype.setContainerData = function (containerData, containerData2, weight1, weight2, callBack) {
        var _this = this;
        var conditionHandle = function (key, value) {
            // debugger
            if (/^cell$/.test(key)) {
                _this.setCell(value);
                return;
            }
            if (callBack && typeof callBack === 'function') {
                callBack(key, value);
            }
            else {
                _this.setProperty(key, value);
            }
        };
        _super.prototype.setContainerData.call(this, containerData, containerData2, weight1, weight2, conditionHandle);
    };
    /**
     * checkStatus
     */
    CellContainer.prototype.checkStatus = function (key) {
        var result;
        var rootParent = this.$rootParent;
        if (this[key] !== undefined) {
            result = this[key];
        }
        else if (rootParent) {
            if (rootParent[key] !== undefined) {
                result = rootParent[key];
            }
        }
        return result;
    };
    /**
     *
     * 设置Cell
     * @param {BaseCell} cell
     * @memberof CellContainer
     */
    CellContainer.prototype.setCell = function (cell) {
        if (this.cell && typeof this.cell.setCellData === 'function') {
            this.cell.setCellData(cell);
        }
        else {
            cell.$parent = this;
            this.cell = new BaseCell_BaseCell(cell);
        }
    };
    /**
     * 点击事件
     *
     * @param {*} ev
     * @memberof CellContainer
     */
    CellContainer.prototype.onClick = function (ev) {
        this.rootParentSendMsg({
            ev_type: 'click',
            event: ev,
            data: {
                objectName: 'CellContainer',
                object: this,
            },
        });
    };
    /**
     * onMouseDown
     */
    CellContainer.prototype.onMouseDown = function (ev) {
        var msg = {
            ev_type: 'mouseDown',
            event: ev,
            data: {
                objectName: 'CellContainer',
                object: this,
            },
        };
        if (ev.which === 3) {
            msg.ev_type = 'rightClick';
            // // 屏蔽右键
            // document.oncontextmenu = () => {
            //     return false;
            // };
            this.rootParentSendMsg(msg);
        }
        else if (ev.which === 2) {
            msg.ev_type = 'middleClick';
            this.rootParentSendMsg(msg);
        }
        if (!this.$positionManager.canFocus && this.$positionManager.$editContainer !== this) {
            _super.prototype.onMouseDown.call(this, ev);
        }
    };
    /**
     * setWidthOrHeight
     */
    CellContainer.prototype.setWidthOrHeight = function (type, side1) {
        // debugger
        var indexContainer;
        for (var i = 0; i < this.side1; i++) {
            var position = baseClone(this.position);
            if (type === 'width') {
                position.colStr = getA_Z(position.colNum + i + 1);
                indexContainer = this.getTopIndexContainer(this.position, 'source');
            }
            else if (type === 'height') {
                position.rowStr = position.rowNum + i + 1;
                indexContainer = this.getLeftIndexContainer(this.position, 'source');
            }
            if (isNaN(side1) || !indexContainer) {
                return;
            }
            side1 = Number(side1);
            indexContainer.style[type] = side1 + 'px';
            indexContainer[type + 'SelfNum'] = indexContainer[type + 'Num'] = side1;
        }
        this.$positionManager.saveLastPositionMap(this.position);
        this.rootParentSendMsg({
            ev_type: 'beforeRender',
            render: true,
            event: null,
            data: {
                objectName: '',
                object: null
            }
        });
    };
    /**
     * delThisRow
     */
    CellContainer.prototype.delThisRow = function (delType) {
        this.$rootTable.delOneRowCol(delType, this);
    };
    /**
     * 粘贴事件
     *
     * @param {*} e
     * @param {*} container
     * @memberof BaseTable
     */
    CellContainer.prototype.onPaste = function (ev) {
        var pastedText;
        if (ev.clipboardData && ev.clipboardData.getData) { // IE
            pastedText = ev.clipboardData.getData('Text');
        }
        else {
            pastedText = ev.originalEvent.clipboardData.getData('Text'); // e.clipboardData.getData('text/plain');
        }
        if (this.cell) {
            this.cell.value = pastedText;
            var msg = {
                ev_type: 'paste',
                render: true,
                event: ev,
                data: {
                    objectName: 'CellContainer',
                    object: this,
                },
            };
            if (this.$rootParent) {
                this.rootParentSendMsg(msg);
            }
        }
        return pastedText;
    };
    /**
     * subjectSend
     */
    CellContainer.prototype.rootParentSendMsg = function (msg) {
        var resultList = [];
        if (this.$rootParent) {
            resultList = this.$rootParent.subjectSend(msg);
        }
        else if (this.$rootTable) {
            resultList = this.$rootTable.subjectSend(msg);
        }
        return resultList;
    };
    return CellContainer;
}(BaseContainer_BaseContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/style/Style.ts
var BaseStyle = /** @class */ (function () {
    function BaseStyle() {
    }
    BaseStyle.addBackgroundColor = function (dom, color) {
        dom.style['background-color'] = color;
    };
    BaseStyle.removeBackgroundColor = function (dom) {
        dom.style.removeProperty('background-color');
    };
    BaseStyle.addBorder = function (dom, borderBearing, width, borderColor) {
        var style = 'solid ';
        if (width) {
            style += width + 'px ';
        }
        if (borderColor) {
            style += borderColor + ' ';
        }
        dom.style['border-' + borderBearing] = style;
    };
    BaseStyle.removeBorder = function (dom) {
        dom.style.removeProperty('border-left');
        dom.style.removeProperty('border-right');
        dom.style.removeProperty('border-top');
        dom.style.removeProperty('border-bottom');
    };
    BaseStyle.checkBearing = function (ev, rule) {
        var res = 'inner';
        if (ev.currentTarget) {
            var dragoverTarget = ev.currentTarget;
            // const X1of4 = this.getOffsetLeftByBody(dragoverTarget) + dragoverTarget.offsetWidth * 0.25;
            // const X3of4 = this.getOffsetLeftByBody(dragoverTarget) + dragoverTarget.offsetWidth * 0.75;
            // const Y1of4 = this.getOffsetTopByBody(dragoverTarget) + dragoverTarget.offsetHeight * 0.25;
            // const Y3of4 = this.getOffsetTopByBody(dragoverTarget) + dragoverTarget.offsetHeight * 0.75;
            var xLeft = ev.target.offsetWidth * 0.25;
            var xright = ev.target.offsetWidth * 0.75;
            var yTop = ev.target.offsetHeight * 0.25;
            var yBottom = ev.target.offsetHeight * 0.75;
            // debugger
            if (rule) {
                xLeft = rule.left || xLeft;
                xright = ev.target.offsetWidth - rule.right || xright;
                yTop = rule.top || yTop;
                yBottom = ev.target.offsetHeight - rule.bottom || yBottom;
            }
            if (ev.offsetY < yTop) {
                res = 'top';
            }
            if (ev.offsetY > yBottom) {
                res = 'bottom';
            }
            if (ev.offsetX < xLeft) {
                res = 'left';
            }
            if (ev.offsetX > xright) {
                res = 'right';
            }
        }
        return res;
    };
    BaseStyle.getOffsetTopByBody = function (el) {
        var offsetTop = 0;
        while (el && el.tagName !== 'BODY') {
            offsetTop += el.offsetTop;
            el = el.offsetParent;
        }
        return offsetTop;
    };
    BaseStyle.getOffsetLeftByBody = function (el) {
        var offsetLeft = 0;
        while (el && el.tagName !== 'BODY') {
            offsetLeft += el.offsetLeft;
            el = el.offsetParent;
        }
        return offsetLeft;
    };
    return BaseStyle;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/SelfContainer.ts



// 只有对于容器来说才有相对位置
var SelfContainer_SelfContainer = /** @class */ (function (_super) {
    __extends(SelfContainer, _super);
    function SelfContainer(param) {
        return _super.call(this, param) || this;
    }
    /**
     * initBeforeSetData
     */
    SelfContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.$parent = paramClone.$parent;
        this.config = baseClone(this.$dragTableConfig.SelfContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.SelfContainerConfig, 'union');
    };
    SelfContainer.prototype.onClick = function (ev) {
        ev.stopPropagation();
        if (this.$rootTable) {
            this.$rootTable.subjectSend({
                ev_type: 'click',
                event: ev,
                data: {
                    objectName: this.type + 'Container',
                    object: this,
                },
            });
        }
    };
    SelfContainer.prototype.resize = function () {
        // debugger
        this.style.height = this.$parent.heightSelfNum + 'px';
        this.style.right = this.rightNum + 'px';
        this.widthNum = this.widthSelfNum + this.rightNum;
        this.style.lineHeight = this.$parent.heightSelfNum + 'px';
    };
    return SelfContainer;
}(BaseContainer_BaseContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/TreeContainer.ts




// 只有对于容器来说才有相对位置
var TreeContainer_TreeContainer = /** @class */ (function (_super) {
    __extends(TreeContainer, _super);
    function TreeContainer(param) {
        return _super.call(this, param) || this;
    }
    TreeContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.$parent = paramClone.$parent;
        objectSet(this.config, this.$dragTableConfig.TreeContainerConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.treeContainer, 'union');
    };
    /**
     * 点击事件
     *
     * @param {*} ev
     * @memberof CellContainer
     */
    TreeContainer.prototype.onClick = function (ev) {
        ev.stopPropagation();
        this.nextStatus = this.$openStatus === 'open' ? 'close' : 'open';
        try {
            var parnent = this.$parent;
            if (parnent) {
                parnent.rootParentSendMsg({
                    ev_type: this.nextStatus,
                    event: ev,
                    data: {
                        object: this,
                        objectName: 'TreeContainer',
                    },
                });
                if (this.$openStatus !== 'loading') {
                    this.$openStatus = this.nextStatus;
                    this.loop(this.$openStatus);
                    parnent.rootParentSendMsg({
                        ev_type: 'beforeRender',
                        render: true,
                        event: ev,
                        data: {
                            object: null,
                            objectName: 'innerContontainer',
                        },
                    });
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * loop
     */
    TreeContainer.prototype.loop = function (type) {
        if (type === 'close') {
            this.hideChildren();
        }
        else if (type === 'open') {
            this.checkAndChange();
        }
        this.children.forEach(function (child) {
            var childInnerContainer = child.treeContainer;
            if (childInnerContainer) {
                childInnerContainer.loop(type);
            }
        });
    };
    /**
     * 设置container属性 部分属性特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TheadContainer
     */
    TreeContainer.prototype.setContainerData = function (containerData, containerData2, weight1, weight2, callBack) {
        _super.prototype.setContainerData.call(this, containerData, containerData2, weight1, weight2, callBack);
    };
    /**
     * 自动递归计算容器长宽，以及span、theadPosition等属性值
     *
     * @param {any[]} [$leafIndexList]
     * @memberof TheadContainer
     */
    TreeContainer.prototype.resize = function () {
        var _this = this;
        var allChildren = new Array();
        var openChildrenCount = 0;
        var parent = this.$parent;
        // if (this.$parent.id == 'zdy') {
        //     debugger
        // }
        if (this.children.length !== 0) {
            this.show = true;
            this.children.forEach(function (child, i) {
                allChildren.push(child);
                var childInnerContainer = child.treeContainer;
                if (childInnerContainer) {
                    childInnerContainer.resize();
                    allChildren = allChildren.concat(childInnerContainer.allChildren);
                    openChildrenCount += childInnerContainer.$openStatus === 'open' ? childInnerContainer.children.length : 0;
                    openChildrenCount += child.treeContainer.openChildrenCount;
                    childInnerContainer.$treeParent = _this;
                }
            });
            this.widthNum = this.widthSelfNum + this.paddingLeftNum + 2;
        }
        else {
            this.widthNum = ((this.$treeParent || this.show) ? this.widthSelfNum : 0) + this.paddingLeftNum + 2;
        }
        this.style.paddingLeft = (this.paddingLeftNum) + 'px';
        this.style.width = this.widthSelfNum + 'px';
        this.heightSelfNum = this.$parent.heightSelfNum;
        this.style.height = this.heightSelfNum + 'px';
        if (this.$treeParent && parent) {
            if (/top/.test(this.$parent.type)) {
                // this.$positionCheck = ['bottom'];
                this.widthNum = this.widthSelfNum;
                this.style.paddingLeft = (0) + 'px';
                parent.cell.style.textAlign = parent.config.cell.style.textAlign;
            }
            else if (/left/.test(this.$parent.type)) {
                // this.$positionCheck = ['right'];
                parent.cell.style.textAlign = 'left';
            }
        }
        this.openChildrenCount = openChildrenCount;
        this.allChildren = allChildren;
    };
    /**
     * getContainerByTheadPositon
     */
    TreeContainer.prototype.getContainerByTheadPosition = function (position) {
        var res = this;
        (position || []).forEach(function (index) {
            res = res.children[index].treeContainer;
        });
        return res;
    };
    /**
     * check
     */
    TreeContainer.prototype.init = function () {
        var parnent = this.$parent;
        this.addChildren();
        this.openOrClose(this.$openStatus);
        this.$positionManager.treeContainerMap.set(parnent.id, this);
    };
    /**
     * name
     */
    TreeContainer.prototype.openOrClose = function (operation) {
        if (operation === 'open') {
            this.showAndHide(this.children.length + this.openChildrenCount, 'show');
        }
        else {
            this.showAndHide(this.children.length + this.openChildrenCount, 'hide');
        }
    };
    /**
     * name
     */
    TreeContainer.prototype.checkAndChange = function () {
        var _this = this;
        this.children.forEach(function (th) {
            th.hideType = _this.$openStatus === 'open' ? 'visible' : 'hideAll-tree';
        });
    };
    /**
     * check
     */
    TreeContainer.prototype.hideChildren = function () {
        this.children.forEach(function (child) {
            child.hideType = 'hideAll-tree';
        });
    };
    TreeContainer.prototype.addChildrenAsy = function (p) {
        var _this = this;
        this.$openStatus = 'loading';
        p.then(function (children) {
            _this.$openStatus = _this.nextStatus;
            _this.addChildren(children);
            _this.openOrClose(_this.$openStatus);
            var thisParent = _this.$parent;
            thisParent.rootParentSendMsg({
                ev_type: 'beforeRender',
                render: true,
                event: null,
                data: {
                    object: _this,
                    objectName: 'null',
                },
            });
        });
    };
    /**
     * 创建容器
     *
     * @private
     * @param {ContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    TreeContainer.prototype.createContain = function (data) {
        // debugger
        var dataClone = keepClone(data);
        var parent = this.$parent;
        var param = objectSet(dataClone, {
            treeContainer: {
                paddingLeftNum: this.paddingLeftNum + 15,
            },
            side1: 1,
            side2: 1,
            $groupId: this.$groupId,
            type: parent.type,
            $parent: this,
            $rootTable: parent.$rootTable,
            $rootParent: parent.$rootParent
        }, 'union', /\$/);
        var container = Factory_ContainerFactory.create('thead', param);
        return container;
    };
    /**
     * addAllChildren
     */
    TreeContainer.prototype.addChildren = function (children) {
        var _this = this;
        this.setContainerData({
            children: children
        });
        // debugger
        var thisParent = this.$parent;
        if (thisParent && thisParent.$parent) {
            var theadParent_1 = thisParent.$parent;
            var insertIndex_1 = theadParent_1.children.indexOf(thisParent) + 1;
            this.cleanChildrenInSystem();
            this.children.forEach(function (container, i) {
                var addContainer = thisParent.createContain(container);
                // addContainer.hide = true;
                addContainer.treeContainer.resize();
                var delCount = addContainer.treeContainer.allChildren.length;
                theadParent_1.addChild(addContainer, insertIndex_1 + i);
                insertIndex_1 += delCount;
                _this.children[i] = addContainer;
                addContainer.addByTree = true;
            });
        }
        this.resize();
    };
    TreeContainer.prototype.cleanChildrenInSystem = function () {
        var _this = this;
        this.children.forEach(function (container) {
            if (container.$inSystem) {
                _this.$rootTable.theadDelete({
                    type: container.type,
                    targetContainerPosition: container.theadPosition,
                    withChildren: true,
                });
            }
        });
    };
    /**
     * showAndHide
     */
    TreeContainer.prototype.showAndHide = function (count, type) {
        this.allChildren.forEach(function (th, i) {
            // debugger
            var hideType = type === 'hide' ? 'hideAll-tree' : 'visible';
            if (count > 0 && hideType !== th.hideType) {
                th.hideType = hideType;
                count--;
            }
        });
    };
    return TreeContainer;
}(SelfContainer_SelfContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/utils/Factory.ts




var Factory_ContainerFactory = /** @class */ (function () {
    function ContainerFactory() {
    }
    // 工厂方法
    ContainerFactory.create = function (type, param) {
        var paramClone = keepClone(param);
        var createContainer = null;
        if (/inner/.test(type)) {
            createContainer = new TreeContainer_TreeContainer(paramClone);
        }
        else if (/thead|Thead/.test(type)) {
            createContainer = new TheadContainer_TheadContainer(paramClone);
        }
        else if (/selfContainer/.test(type)) {
            createContainer = new SelfContainer_SelfContainer(paramClone);
        }
        else if (/treeContainer/.test(type)) {
            createContainer = new TreeContainer_TreeContainer(paramClone);
        }
        return createContainer;
    };
    return ContainerFactory;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/TheadContainer.ts





// 只有对于容器来说才有相对位置
var TheadContainer_TheadContainer = /** @class */ (function (_super) {
    __extends(TheadContainer, _super);
    function TheadContainer(param) {
        var _this = _super.call(this, param) || this;
        _this.$dragType = 'none'; // 拖拽重塑类型
        return _this;
    }
    TheadContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        var attachParam = {
            $parent: this,
            $rootParent: this.$rootParent,
            $rootTable: this.$rootTable,
            $groupId: this.$groupId
        };
        this.treeContainer = Factory_ContainerFactory.create('treeContainer', attachParam);
        this.config = baseClone(this.$dragTableConfig.TheadContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.TheadContainerConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.theadContainer, 'union');
        delete this.config.style.width;
        delete this.config.style.height;
    };
    /**
     * selfContainers
     */
    TheadContainer.prototype.setSelfContainers = function (selfContainers) {
        var _this = this;
        this.selfContainers = new Array();
        selfContainers.forEach(function (value) {
            // debugger
            var attachParam = {
                $parent: _this,
                $rootParent: _this.$rootParent,
                $rootTable: _this.$rootTable,
                $groupId: _this.$groupId
            };
            objectSet(value, attachParam, 'union', /\$/);
            var selfContainer = Factory_ContainerFactory.create('selfContainer', value);
            _this.selfContainers.push(selfContainer);
        });
    };
    /**
     * 设置container属性 部分属性特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TheadContainer
     */
    TheadContainer.prototype.setContainerData = function (containerData, containerData2, weight1, weight2, callBack) {
        var _this = this;
        var conditionHandle = function (key, value) {
            // debugger
            if (key === 'tbodyConfig') {
                _this.setProperty(key, value);
            }
            else if (key === 'treeContainer') {
                objectSet(value, _this.$dragTableConfig.treeContainer);
                if (_this.treeContainer && typeof _this.treeContainer.setContainerData === 'function') {
                    _this.treeContainer.setContainerData(value);
                }
                else {
                    _this.treeContainer = Factory_ContainerFactory.create('treeContainer', value);
                }
                return;
            }
            else if (key === 'selfContainers') {
                // debugger
                _this.setSelfContainers(value);
                return;
            }
            _this.setProperty(key, value);
        };
        _super.prototype.setContainerData.call(this, containerData, containerData2, weight1, weight2, conditionHandle);
        if (/^top/.test(this.type)) {
            this.side1Name = 'width';
            this.side2Name = 'height';
        }
        else if (/^left/.test(this.type)) {
            this.side1Name = 'height';
            this.side2Name = 'width';
        }
    };
    TheadContainer.prototype.addChild = function (child, targetIndex) {
        _super.prototype.addChild.call(this, child, targetIndex);
        if (child.treeContainer) {
            child.treeContainer.init();
        }
        return child.id;
    };
    /**
     * 自动递归计算容器长宽，以及span、theadPosition等属性值
     *
     * @param {any[]} [$leafIndexList]
     * @memberof TheadContainer
     */
    TheadContainer.prototype.resize = function () {
        var _this = this;
        if (!/visible|tree/.test(this.hideType)) {
            this.$positionManager.hideContainerMap.set(this.id, this);
        }
        // debugger
        var hideTypeTemporary = this.hideTypeTemporary || this.hideType;
        this.$inSystem = true;
        this.resetByIndexContainer();
        this.$resizeChildren = [];
        if (hideTypeTemporary === 'hideSelf') {
            // debugger
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            this[this.side1Name + 'Num'] = 0;
            this[this.side2Name + 'SelfNum'] = 0;
            this[this.side1Name + 'SelfNum'] = 0;
            // return;
        }
        else if (/hideAll/.test(hideTypeTemporary)) {
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            this[this.side1Name + 'Num'] = 0;
            // this[this.side2Name + 'SelfNum'] = 0;
            // this[this.side1Name + 'SelfNum'] = 0;
            return [];
        }
        else if (this.hideTypeTemporary === 'hideChildrenHeight') {
            this.span1 = 1;
            this.span2 = 0;
            this.side1 = 1;
            this.side2 = 0;
            this[this.side2Name + 'Num'] = 0;
            this[this.side2Name + 'SelfNum'] = 0;
        }
        if (this.isRootParent) {
            this.span1 = 0;
            this.span2 = 0;
            this.side1 = 0;
            this.side2 = 0;
            this[this.side2Name + 'SelfNum'] = 0;
        }
        var maxGridSide2 = 0; // 孩子的最大高度
        var maxStyleSide2 = 0; // 孩子的最大高度px   
        var sumGridSide1 = 0; // 孩子合计宽度
        var sumStyleSide1 = 0; // 孩子合计宽度px
        var resizeChildren = [];
        if (this.children.length !== 0) {
            this.children.forEach(function (child, i) {
                var childPosition = _this.theadPosition.concat(i);
                child.theadPosition = childPosition;
                if (hideTypeTemporary === 'hideChildrenHeight') {
                    child.hideTypeTemporary = 'hideChildrenHeight';
                }
                var res = child.resize();
                child.hideTypeTemporary = null;
                resizeChildren = resizeChildren.concat(res);
                sumGridSide1 += child.side1;
                maxGridSide2 = child.side2 > maxGridSide2 ? child.side2 : maxGridSide2;
                sumStyleSide1 += child[_this.side1Name + 'Num'];
                maxStyleSide2 = child[_this.side2Name + 'Num'] > maxStyleSide2 ? child[_this.side2Name + 'Num'] : maxStyleSide2;
            });
            // 宽度至少等于自己之前的宽度
            this.side1 = sumGridSide1 || this.side1;
            this[this.side1Name + 'Num'] = this[this.side1Name + 'SelfNum'] = this[this.side1Name + 'ChildNum'] = sumStyleSide1 || this[this.side1Name + 'SelfNum'];
            this.span1 = sumGridSide1;
            this.style[this.side1Name] = sumStyleSide1 + 'px';
            {
                this[this.side2Name + 'ChildNum'] = maxStyleSide2;
            }
            {
                this.side2 = maxGridSide2 + this.side2; // 孩子最大高度加上自己高度
                this[this.side2Name + 'Num'] = maxStyleSide2 + this[this.side2Name + 'SelfNum'];
            }
        }
        else {
        }
        this.style[this.side1Name] = this[this.side1Name + 'SelfNum'] + 'px';
        this.style[this.side2Name] = (this[this.side2Name + 'SelfNum']) + 'px';
        this.$resizeChildren = resizeChildren;
        this.makeChildrenSameSide2(maxGridSide2, maxStyleSide2);
        if (this.treeContainer) {
            this.innerContainerRender();
        }
        this.selfContainerRender();
        if (this.cell) {
            this.cell.render();
            this.cell.style.paddingLeft = this.paddingLeftNum + 'px';
            this.cell.style.paddingRight = this.paddingRightNum + 'px';
        }
        if (hideTypeTemporary === 'hideSelf') {
            return resizeChildren;
        }
        var otherRes = [this];
        if (resizeChildren.length === 0 && this.hideType !== 'hideChildrenHeight') {
            if (hideTypeTemporary === 'hideChildrenHeight') {
                otherRes = [];
            }
            if (this.$rootParent && !this.isRootParent && sumGridSide1 === 0) {
                this.$rootParent.$leafIndexList.push(this);
            }
        }
        return otherRes;
    };
    /**
     * changePro
     */
    TheadContainer.prototype.changeEveryChildProperty = function (containerData) {
        this.setContainerData(containerData);
        this.children.forEach(function (th) {
            th.changeEveryChildProperty(containerData);
        });
    };
    /**
     *  innerContainerRender
     */
    TheadContainer.prototype.innerContainerRender = function () {
        this.treeContainer.$parent = this;
        this.treeContainer.resize();
        this.paddingLeftNum = this.treeContainer.widthNum;
    };
    /**
     *  selfContainerRender
     */
    TheadContainer.prototype.selfContainerRender = function () {
        var _this = this;
        this.paddingRightNum = 0;
        this.selfContainers.forEach(function (sc) {
            sc.resize();
            if (sc.show) {
                _this.paddingRightNum = sc.widthNum > _this.paddingRightNum ? sc.widthNum : _this.paddingRightNum;
            }
        });
    };
    /**
     * getTopList
     * 备注：顶部表头转换为view数组函数
     * @param list?: any[]
     */
    TheadContainer.prototype.getTopList = function (list, p) {
        var _this = this;
        try {
            this.position = baseClone(p);
            this.position.colStr = getA_Z(p.colNum);
            this.position.rowStr = p.rowNum + 1;
            var container = this.clone(undefined, /\$|userData|treeContainer/, true); // 之前为什么要拷贝？因为要区分该源container与页面上显示的Container
            this.$positionManager.setPositionMap(this.position, this, 'source');
            this.$positionManager.setPositionMap(this.position, container, 'clone');
            list[0].push(container);
            var cloneP_1 = baseClone(p);
            if (this.$resizeChildren.length !== 0) {
                this.$resizeChildren.forEach(function (child) {
                    var tmpP = baseClone(p);
                    tmpP.rowNum = p.rowNum + _this.span2;
                    tmpP.colNum = cloneP_1.colNum;
                    child.getTopList(drop(list), tmpP);
                    cloneP_1.colNum += child.side1;
                });
            }
        }
        catch (error) {
            // do nothing
        }
    };
    /**
     * loop
     */
    TheadContainer.prototype.getLeftList = function (index, p) {
        // debugger
        var list = this.$rootParent.$tableHeadLeft;
        this.position = baseClone(p);
        this.position.colStr = getA_Z(p.colNum);
        this.position.rowStr = p.rowNum + 1;
        var container = this.clone(undefined, /\$|userData|treeContainer/, true);
        this.$positionManager.setPositionMap(this.position, this, 'source');
        this.$positionManager.setPositionMap(this.position, container, 'clone');
        list[index].push(container);
        var cloneP = baseClone(p);
        cloneP.colNum = cloneP.colNum + this.span2;
        this.$resizeChildren.forEach(function (child) {
            var tmpP = baseClone(cloneP);
            child.getLeftList(index, tmpP);
            cloneP.rowNum = cloneP.rowNum + child.side1;
            index += child.side1;
        });
    };
    /**
     * 创建容器
     *
     * @private
     * @param {ContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    TheadContainer.prototype.createContain = function (data) {
        // if(data.id === 'row1'){
        //     debugger
        // }
        var dataClone = baseClone(data, /\$/);
        objectSet(dataClone, {
            type: this.type,
            side1: 1,
            side2: 1,
            $rootTable: this.$rootTable,
            $rootParent: this.$rootParent,
            $groupId: this.$groupId,
        }, 'union', /\$/);
        var container = new TheadContainer(dataClone);
        return container;
    };
    /**
     * onMouseMove
     */
    TheadContainer.prototype.onMouseMove = function (ev) {
        if (this.$rootTable.canDragResize && this.$dragType === 'none') {
            var dom = ev.currentTarget;
            BaseStyle.removeBorder(dom);
            var bear = BaseStyle.checkBearing(ev, { bottom: 10, right: 10 });
            if (bear === 'right' && this.type !== 'left-index' && this.side1 === 1) {
                dom.style.cursor = 'e-resize';
                BaseStyle.addBorder(dom, bear);
                this.canDragResize = true;
                this.draggable = false;
            }
            else if (bear === 'bottom' && this.type !== 'top-index' && this.side2 === 1) {
                dom.style.cursor = 's-resize';
                BaseStyle.addBorder(dom, bear);
                this.canDragResize = true;
                this.draggable = false;
            }
            else {
                dom.style.cursor = 'auto';
                this.canDragResize = false;
                this.draggable = true;
            }
            dom = null;
        }
    };
    /**
     * 当鼠标划出单元格 取消边框和鼠标样子
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    TheadContainer.prototype.onMouseOut = function (ev) {
        ev.currentTarget.style.cursor = 'auto';
        BaseStyle.removeBorder(ev.currentTarget);
        this.canDragResize = false;
        this.draggable = true;
    };
    /**
     * 当鼠标按下时 开始拖拽控制大小
     *
     * @param {*} ev
     * @param {*} th
     * @memberof BaseTable
     */
    TheadContainer.prototype.onMouseDown = function (ev) {
        var _this = this;
        var currentTargetDom = ev.currentTarget;
        if (ev.which === 1 && this.$rootTable.canDragResize && this.canDragResize) {
            this.$dragType = currentTargetDom.style.cursor === 'e-resize' ? 'width' : 'height';
            this.draggable = false;
            this.$rootTable.$selectBoxEntity.clear();
            var targetDom_1 = {};
            targetDom_1.initMouseLeftX = ev.pageX; // 鼠标起始X位置
            targetDom_1.initMouseTopY = ev.pageY; // 鼠标起始Y位置
            targetDom_1.initWidth = ev.target.clientWidth; // dom原来的宽度
            targetDom_1.initHeight = ev.target.clientHeight; // dom原来的高度
            targetDom_1.initLeft = ev.pageX - targetDom_1.initWidth;
            targetDom_1.initTop = ev.pageY - targetDom_1.initHeight;
            targetDom_1.x = targetDom_1.initLeft;
            targetDom_1.y = targetDom_1.initTop;
            var delSide1_1 = 0;
            var oneColRowObj_1;
            var sideName_1 = this.$dragType === 'width' ? 'width' : 'height';
            // console.log(sideName);
            var mousemove_1 = function (e) {
                // debugger
                var x = (e.pageX - targetDom_1.initMouseLeftX);
                if (x * -1 > _this.style.minWidth) {
                    return;
                }
                var y = (e.pageY - targetDom_1.initMouseTopY);
                if (y * -1 > targetDom_1.initHeight) {
                    return;
                }
                if (_this.$dragType === 'width') {
                    delSide1_1 = x;
                    oneColRowObj_1 = _this.getColObj(_this.position, 'clone');
                }
                else if (_this.$dragType === 'height') {
                    // debugger
                    delSide1_1 = y;
                    oneColRowObj_1 = _this.getRowObj(_this.position, 'clone');
                }
                var _loop_1 = function (key) {
                    if (oneColRowObj_1.hasOwnProperty(key)) {
                        var container_1 = oneColRowObj_1[key];
                        if (container_1) {
                            // debugger
                            var oldSide = container_1[sideName_1 + 'SelfNum'];
                            container_1.style[sideName_1] = (oldSide + delSide1_1) + 'px';
                            container_1.cell.style[sideName_1] = (oldSide + delSide1_1) + 'px';
                            if (sideName_1 === 'height') {
                                container_1.cell.style.lineHeight = oldSide + delSide1_1 + 'px';
                                var treeContainer = container_1.treeContainer;
                                if (treeContainer) {
                                    treeContainer.style.height = container_1.cell.style.lineHeight;
                                }
                                (container_1.selfContainers || []).forEach(function (sc) {
                                    sc.style.height = container_1.cell.style.lineHeight;
                                });
                            }
                        }
                    }
                };
                for (var key in oneColRowObj_1) {
                    _loop_1(key);
                }
            };
            var mouseup_1 = function (e) {
                // debugger;
                document.removeEventListener('mouseup', mouseup_1);
                document.removeEventListener('mousemove', mousemove_1);
                var side1 = _this[_this.$dragType + 'SelfNum'] + delSide1_1;
                _this.setWidthOrHeight(_this.$dragType, side1);
                _this.draggable = true;
                _this.canDragResize = false;
                _this.$dragType = 'none';
                currentTargetDom.style.cursor = 'auto';
                currentTargetDom = null;
            };
            document.addEventListener('mousemove', mousemove_1);
            document.addEventListener('mouseup', mouseup_1);
        }
        _super.prototype.onMouseDown.call(this, ev);
    };
    /**
     * 通用dragStart
     *
     * @param {*} ev
     * @param {CellContainer} target
     * @memberof BaseThead
     */
    TheadContainer.prototype.dragStart = function (ev) {
        var dragStartData = {
            operationType: 'move',
            containerData: this,
        };
        var rootParent = this.$rootParent;
        var draggable = this.checkStatus('draggable');
        if (rootParent && draggable) {
            rootParent.dragStartData = dragStartData;
            ev.dataTransfer.setData('dragStartData', JSON.stringify(baseClone(dragStartData, /\$/)));
            this.rootParentSendMsg({
                ev_type: 'dragStart',
                event: ev,
                data: {
                    object: dragStartData,
                    objectName: 'dragStartData',
                },
            });
        }
    };
    /**
     * 通用dragover
     *
     * @param {*} ev
     * @param {target} th
     * @memberof BaseThead
     */
    TheadContainer.prototype.dragOver = function (ev) {
        var resultList = this.rootParentSendMsg({
            ev_type: 'dragOver',
            event: ev,
            data: {
                object: this,
                objectName: 'TheadContainer',
            },
        });
        if (/cancel/.test(resultList.join('-'))) {
            return;
        }
        var draggable = this.checkStatus('draggable');
        var rootParent = this.$rootParent;
        if (rootParent && draggable && (!rootParent.dragStartData || rootParent.dragStartData.containerData !== this)) {
            var targetDom = ev.currentTarget;
            this.resetDragOverStyle(targetDom);
            var bearing = BaseStyle.checkBearing(ev);
            if (this.$positionCheck.indexOf(bearing) !== -1) {
                if (bearing === 'inner') {
                    BaseStyle.addBackgroundColor(targetDom, 'red');
                }
                BaseStyle.addBorder(targetDom, bearing, 3, '#000');
                ev.preventDefault();
            }
        }
    };
    /**
     * 横表专用drop
     *
     * @param {*} ev
     * @param {CellContainer} item
     * @memberof BaseThead
     */
    TheadContainer.prototype.drop = function (ev) {
        // debugger
        var rootParent = this.$rootParent;
        try {
            var stringData = ev.dataTransfer.getData('dragStartData');
            var dragStartData = rootParent.dragStartData ? rootParent.dragStartData : JSON.parse(stringData || '{}');
            var dragTsData = void 0;
            var targetContainer = this;
            if (this.$positionCheck && this.$positionCheck.length !== 0) {
                var bear = BaseStyle.checkBearing(ev);
                targetContainer = this.getContainerByTheadPosition(this.theadPosition);
                dragTsData = {
                    target: {
                        containerData: targetContainer
                    },
                    targetBearing: bear,
                    source: {
                        containerData: dragStartData.containerData,
                        withChildren: dragStartData.withChildren,
                    },
                    operationType: dragStartData.operationType
                };
            }
            else {
                dragTsData = {
                    target: {
                        containerData: targetContainer
                    },
                    targetBearing: 'other',
                    source: {
                        containerData: dragStartData.containerData,
                    },
                    operationType: dragStartData.operationType
                };
            }
            var targetDom = ev.currentTarget;
            this.resetDragOverStyle(targetDom);
            this.rootParentSendMsg({
                ev_type: 'drop',
                event: ev,
                data: {
                    object: dragTsData,
                    objectName: 'DragTsData',
                },
            });
            rootParent.dragStartData = null;
            targetDom = null;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * dragEnd
     */
    TheadContainer.prototype.dragEnd = function (ev) {
        // debugger
        var rootParent = this.$rootParent;
        if (rootParent) {
            rootParent.dragStartData = null;
            this.rootParentSendMsg({
                ev_type: 'dragEnd',
                event: ev,
                data: {
                    object: this,
                    objectName: 'TheadContainer',
                },
            });
        }
    };
    TheadContainer.prototype.dragLeave = function (ev) {
        var resultList = this.rootParentSendMsg({
            ev_type: 'dragLeave',
            event: ev,
            data: {
                object: this,
                objectName: 'TheadContainer',
            },
        });
        if (/cancel/.test(resultList.join('-'))) {
            return;
        }
        var targetDom = ev.currentTarget;
        BaseStyle.addBackgroundColor(targetDom, this.style.background);
        this.resetDragOverStyle(targetDom);
    };
    TheadContainer.prototype.dragEnter = function (ev) {
        var resultList = this.rootParentSendMsg({
            ev_type: 'dragEnter',
            event: ev,
            data: {
                object: this,
                objectName: 'TheadContainer',
            },
        });
        if (/cancel/.test(resultList.join('-'))) {
            return;
        }
    };
    /**
     * getContainerByTheadPosition
     * 备注：获得子容器
     * @param position: Position 相对于根容器的位置
     *
     */
    TheadContainer.prototype.getContainerByTheadPosition = function (position) {
        var rootParent = this.$rootParent;
        if (rootParent) {
            var res_1 = rootParent;
            (position || []).forEach(function (index) {
                res_1 = res_1.children[index];
            });
            return res_1;
        }
    };
    TheadContainer.prototype.clone = function (excludeReg, keepReg, withFunction) {
        var obj = _super.prototype.clone.call(this, excludeReg, keepReg, withFunction);
        var children = [];
        obj.children.forEach(function (th) {
            if (!th.addByTree) {
                children.push(th);
            }
        });
        obj.children = children;
        return obj;
    };
    /**
     * resetByIndexContainer
     */
    TheadContainer.prototype.resetByIndexContainer = function () {
        if (this.id === 'top-left') {
            return;
        }
        var topIndexContainer = this.$positionManager.getTopIndexContainer(this.position, 'last');
        if (topIndexContainer) {
            this.widthNum = this.widthSelfNum = topIndexContainer.widthNum;
        }
        else {
            this.widthSelfNum = this.config.widthSelfNum;
            this.widthNum = this.widthSelfNum;
        }
        var leftIndexContainer = this.$positionManager.getLeftIndexContainer(this.position, 'last');
        if (leftIndexContainer) {
            this.heightNum = this.heightSelfNum = leftIndexContainer.heightNum;
        }
        else {
            this.heightSelfNum = this.config.heightSelfNum;
            this.heightNum = this.heightSelfNum;
        }
        this.span1 = this.config.span1;
        this.span2 = this.config.span2;
        this.side1 = this.config.side1;
        this.side2 = this.config.side2;
    };
    /**
     * increaseTheLastChildHeight
     * 备注：增加叶子节点BaseTheadCell的高度
     * @param diff: number 需要增加的高度
     */
    TheadContainer.prototype.increaseTheLeafChildHeight = function (diffGrid, diffStyle) {
        if (this.$resizeChildren.length !== 0) {
            this.$resizeChildren.forEach(function (child) {
                child.increaseTheLeafChildHeight(diffGrid, diffStyle);
            });
            this.side2 += diffGrid;
        }
        else if (this.side2 !== 0) {
            var selfStyleSide2 = Number(this.style[this.side2Name].replace('px', ''));
            this.style[this.side2Name] = selfStyleSide2 + diffStyle + 'px';
            this[this.side2Name + 'SelfNum'] = selfStyleSide2 + diffStyle;
            this[this.side2Name + 'Num'] = selfStyleSide2 + diffStyle;
            if (this.treeContainer) {
                this.innerContainerRender();
            }
            this.selfContainerRender();
            this.span2 += diffGrid;
            this.cell.render();
            this.side2 += diffGrid;
        }
    };
    /**
     * makeChildrenSameHeight
     * 备注：使所有自己的孩子BaseTheadCell 高度一致
     * @param maxHeight: number 孩子中最大高度
     */
    TheadContainer.prototype.makeChildrenSameSide2 = function (maxGridSide2, maxStyleSide2) {
        this.$resizeChildren.forEach(function (child) {
            var diffGrid = maxGridSide2 - child.side2;
            var diffStyle = maxStyleSide2 - child[child.side2Name + 'Num'];
            if (diffGrid > 0 || diffStyle > 0) {
                child.increaseTheLeafChildHeight(diffGrid, diffStyle);
            }
        });
    };
    TheadContainer.prototype.resetDragOverStyle = function (targetDom) {
        BaseStyle.removeBorder(targetDom);
        BaseStyle.removeBackgroundColor(targetDom);
        BaseStyle.addBackgroundColor(targetDom, this.style.background);
    };
    return TheadContainer;
}(CellContainer_CellContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/thead/BaseThead.ts



var BaseThead_BaseThead = /** @class */ (function (_super) {
    __extends(BaseThead, _super);
    function BaseThead(param) {
        var _this = _super.call(this, param) || this;
        _this.$tableHeadTop = new Array(); // 用于显示的上侧表头 直接用于左表头的渲染
        _this.$tableHeadLeft = new Array(); // 用于显示的左侧表头 直接用于左表头的渲染
        return _this;
    }
    /**
     * initBeforeSetData
     */
    BaseThead.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.cell = null;
        this.dragStartData = null;
        this.$rootParent = this;
        objectSet(this.config, this.$dragTableConfig.BaseTheadConfig, 'union');
        if (this.type === 'top') {
            objectSet(paramClone, this.$dragTableConfig.topThead, 'union');
        }
        else if (this.type === 'left') {
            objectSet(paramClone, this.$dragTableConfig.leftThead, 'union');
        }
    };
    /**
     * resize
     */
    BaseThead.prototype.resize = function () {
        this.$leafIndexList = [];
        this.$leafIndexList2 = [];
        _super.prototype.resize.call(this);
        var maxLayerContainer;
        this.$leafIndexList.forEach(function (th) {
            if (maxLayerContainer) {
                maxLayerContainer = (th.theadPosition.length > maxLayerContainer.theadPosition.length && th.span2 !== 0) ? th : maxLayerContainer;
            }
            else {
                maxLayerContainer = th;
            }
        });
        var canDo = true;
        if (maxLayerContainer) {
            do {
                if (maxLayerContainer.span2 == 1) {
                    this.$leafIndexList2.splice(0, 0, maxLayerContainer);
                }
                if (maxLayerContainer.$parent) {
                    maxLayerContainer = maxLayerContainer.$parent;
                }
                else {
                    canDo = false;
                }
            } while (canDo);
        }
    };
    /**
     *
     * 备注：容器转换横表
     * @param position: Position 相对于根容器的位置
     *
     */
    BaseThead.prototype.convert2TheadTopList = function (basePosition) {
        var _this = this;
        this.$tableHeadTop = [];
        for (var i = 0; i < this.side2; i++) {
            this.$tableHeadTop.push([]);
        }
        var p = baseClone(basePosition);
        this.$resizeChildren.forEach(function (child) {
            child.getTopList(_this.$tableHeadTop, p);
            p.rowNum = p.rowNum;
            p.colNum = p.colNum + child.side1;
        });
        return this.$tableHeadTop;
    };
    // 转换成纵表
    BaseThead.prototype.convert2TheadLeftList = function (basePosition) {
        // this.resize();
        var index = 0;
        this.$tableHeadLeft = [];
        for (var i = 0; i < this.side1; i++) {
            this.$tableHeadLeft.push([]);
        }
        var p = baseClone(basePosition);
        if (this.side1 > 0) {
            this.$resizeChildren.forEach(function (child, i) {
                child.getLeftList(index, p);
                p.rowNum = p.rowNum + child.side1;
                p.colNum = p.colNum;
                index += child.side1;
            });
        }
        return this.$tableHeadLeft;
    };
    return BaseThead;
}(TheadContainer_TheadContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/TbodyContainer.ts



// 只有对于容器来说才有相对位置
var TbodyContainer_TbodyContainer = /** @class */ (function (_super) {
    __extends(TbodyContainer, _super);
    function TbodyContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TbodyContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.config = baseClone(this.$dragTableConfig.TbodyContainerConfig);
        // _.objectSet(this.config, this.$dragTableConfig.TbodyContainerConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.tbodyContainer, 'union');
        this.renderByThead = true;
    };
    /**
     * 设置tbody属性 部分特殊处理
     *
     * @param {ContainerInterface} containerData
     * @memberof TbodyContainer
     */
    TbodyContainer.prototype.setContainerData = function (containerData, containerData2, weight1, weight2, callBack) {
        _super.prototype.setContainerData.call(this, containerData, containerData2, weight1, weight2, callBack);
    };
    return TbodyContainer;
}(CellContainer_CellContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/tbody/BaseTbody.ts



var BaseTbody_BaseTbody = /** @class */ (function (_super) {
    __extends(BaseTbody, _super);
    function BaseTbody(param) {
        var _this = _super.call(this, param) || this;
        _this.separator = '_';
        _this.$rootParent = _this;
        _this.cell = null;
        return _this;
    }
    BaseTbody.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        objectSet(this.config, this.$dragTableConfig.BaseTbodyConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.baseTbody, 'union');
    };
    /**
     * 添加一行数据
     *
     * @param {any[]} rowData
     * @returns
     * @memberof BaseTbody
     */
    BaseTbody.prototype.setRowData = function (leftId, rowData) {
        var _this = this;
        try {
            // console.log(this.topIndexList);
            leftId = leftId ? leftId : 'tbody_' + guid();
            var item = rowData || {};
            if (Array.isArray(item)) {
                item.forEach(function (value, j) {
                    if (!_this.topIndexList[j]) {
                        return;
                    }
                    else {
                        var topId = _this.topIndexList[j].renderId;
                        _this.setData(leftId + _this.separator + topId, value);
                    }
                });
            }
            else if (typeof item === 'object') {
                for (var topId in item) {
                    if (item.hasOwnProperty(topId)) {
                        var value = item[topId];
                        this.setData(leftId + this.separator + topId, value);
                    }
                }
            }
            return leftId;
        }
        catch (error) {
            console.error('setRowData数据有误');
            console.error(error);
            return null;
        }
    };
    /**
     * addCol
     */
    BaseTbody.prototype.setColData = function (topId, colData) {
        var _this = this;
        try {
            topId = topId ? topId : 'tbody_' + guid();
            var item = colData || {};
            if (Array.isArray(item)) {
                item.forEach(function (value, j) {
                    if (!_this.leftIndexList[j]) {
                        return;
                    }
                    var leftId = _this.leftIndexList[j].renderId;
                    _this.setData(leftId + _this.separator + topId, value);
                });
            }
            else if (typeof item === 'object') {
                // debugger
                for (var leftId in item) {
                    if (item.hasOwnProperty(leftId)) {
                        var value = item[leftId];
                        this.setData(leftId + this.separator + topId, value);
                    }
                }
            }
            return topId;
        }
        catch (error) {
            console.error('setColData');
            console.error(error);
            return null;
        }
    };
    /**
     * setTBodyData
     */
    BaseTbody.prototype.setTbodyData = function (data) {
        var _this = this;
        this.$rootTable.render();
        try {
            if (Array.isArray(data)) {
                data.forEach(function (rowData, i) {
                    if (!_this.leftIndexList[i]) {
                        _this.$rootTable.addOneRow({
                            data: rowData,
                            render: false
                        });
                    }
                    else {
                        var leftId = _this.leftIndexList[i].renderId;
                        _this.setRowData(leftId, rowData);
                    }
                });
            }
            else if (typeof data === 'object') {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        var value = data[key];
                        this.setData(key, value);
                    }
                }
            }
        }
        catch (error) {
            console.error(error);
            console.error('输入数据格式有误');
        }
        this.subjectSend({
            ev_type: 'beforeRender',
            render: true,
            event: null,
            data: {
                objectName: 'setTbodyData',
                object: null
            }
        });
    };
    /**
     * setContainer
     */
    BaseTbody.prototype.setData = function (keyString, containerData) {
        var container;
        try {
            if (this.bodyData.hasOwnProperty(keyString)) {
                container = this.bodyData[keyString];
            }
            else {
                container = this.createContain();
            }
            if (['string', 'number'].indexOf(typeof containerData) !== -1) {
                container.cell.value = containerData;
            }
            else if (typeof containerData === 'object') {
                container.setContainerData(containerData);
            }
        }
        catch (error) {
            console.error(error);
        }
        return container;
    };
    /**
     * 设置tbody属性 部分特殊处理
     *
     * @param {CellContainerInterface} containerData
     * @memberof TbodyContainer
     */
    BaseTbody.prototype.setContainerData = function (containerData, containerData2, weight1, weight2, callBack) {
        var _this = this;
        var conditionHandle = function (key, value) {
            // debugger
            if (key === 'bodyData') {
                _this.setTbodyData(value);
                return;
            }
            _this.setProperty(key, value);
        };
        _super.prototype.setContainerData.call(this, containerData, containerData2, weight1, weight2, conditionHandle);
        // debugger
        for (var key in containerData) {
            if (containerData.hasOwnProperty(key)) {
                var value = containerData[key];
                if (key === 'bodyData') {
                    for (var leftThId in value) {
                        if (value.hasOwnProperty(leftThId)) {
                            var rowData = value[leftThId];
                            this.setRowData(leftThId, rowData);
                        }
                    }
                }
                else if (typeof value === 'object' && !Array.isArray(value) && key.indexOf('$') === -1) {
                    objectSet(this[key], value, 'union');
                }
                else {
                    this.setProperty(key, value);
                }
            }
        }
    };
    /**
     * resize
     */
    BaseTbody.prototype.resize = function () {
        this.side1 = this.topIndexList.length;
        this.side2 = this.leftIndexList.length;
    };
    /**
     * 创建容器
     *
     * @private
     * @param {CellContainerInterface} data
     * @returns
     * @memberof BaseThead
     */
    BaseTbody.prototype.createContain = function (data) {
        var $groupId = this.$groupId;
        var container = new TbodyContainer_TbodyContainer({
            type: 'tbody',
            side1: 1,
            side2: 1,
            $groupId: $groupId,
            $rootTable: this.$rootTable,
            $rootParent: this,
            config: this.$rootParent.config
        });
        if (data) {
            container.setContainerData(data);
        }
        return container;
    };
    /**
     * render
     */
    BaseTbody.prototype.render = function () {
        var _this = this;
        var leftIndexList = this.leftIndexList;
        var topIndexList = this.topIndexList;
        this.resize();
        leftIndexList.forEach(function (leftIndexTh) {
            topIndexList.forEach(function (topIndexTh) {
                var keyString = leftIndexTh.renderId + _this.separator + topIndexTh.renderId;
                var container = _this.createContain();
                if (_this.bodyData.hasOwnProperty(keyString)) {
                    container = _this.bodyData[keyString];
                }
                else {
                    _this.bodyData[keyString] = container;
                }
                container.position = {
                    table: _this.$rootTable.position.table,
                    colNum: topIndexTh.theadPosition[0],
                    rowNum: leftIndexTh.theadPosition[0],
                    colStr: getA_Z(topIndexTh.theadPosition[0]),
                    rowStr: leftIndexTh.theadPosition[0] + 1,
                };
                container.id = keyString;
                _this.$positionManager.setPositionMap(container.position, container, 'source');
                var leftThead = leftIndexTh.$theadContainer;
                var topThead = topIndexTh.$theadContainer;
                var leftThTbdoyConfig = leftIndexTh.tbodyConfig.container || {};
                var topThTbdoyConfig = topIndexTh.tbodyConfig.container || {};
                // debugger
                var sumContainer;
                if (/sum/.test(leftIndexTh.renderId)) {
                    topThTbdoyConfig = {};
                    sumContainer = leftThead;
                }
                else if (/sum/.test(topIndexTh.renderId)) {
                    leftThTbdoyConfig = {};
                    sumContainer = topThead;
                }
                if ((/sum/.test(topIndexTh.renderId) || /sum/.test(leftIndexTh.renderId)) && ((leftIndexTh.canSum || topThead === undefined) && (topIndexTh.canSum || leftThead === undefined))) {
                    // const sumContainer = leftIndexTh.id.indexOf('sum') !== -1 ? leftIndexTh.$theadContainer : topIndexTh.$theadContainer;
                    var parentContainer = sumContainer.$rootParent.getContainerByTheadPosition(dropRight(sumContainer.theadPosition));
                    var containerList = new Array();
                    var count = 0;
                    for (var i = 0; i < last(sumContainer.theadPosition); i++) {
                        count += parentContainer.children[i].side1;
                    }
                    for (var i = 0; i < count; i++) {
                        if (sumContainer.type === 'top' && i) {
                            var stringPosition = getA_Z(sumContainer.position.colNum - (i) - 1) + container.position.rowStr;
                            containerList.push(stringPosition);
                        }
                        else {
                            var stringPosition = container.position.colStr + (sumContainer.position.rowNum - i);
                            containerList.push(stringPosition);
                        }
                    }
                    if (container.renderByThead) {
                        // container.cell.setProperty('value', ('=' + containerList.join('+')));
                        container.cell.value = ('=' + containerList.join('+'));
                    }
                }
                // if (container.id === 'none-zj') {
                //     debugger
                // }
                var renderByThead = _this.getDataByWeight('renderByThead', leftThTbdoyConfig, topThTbdoyConfig, leftIndexTh.tbodyConfig.weight, topIndexTh.tbodyConfig.weight);
                container.renderByThead = renderByThead === undefined ? container.renderByThead : renderByThead;
                if (container.renderByThead == true) {
                    container.setContainerData(leftThTbdoyConfig, topThTbdoyConfig, leftIndexTh.tbodyConfig.weight, topIndexTh.tbodyConfig.weight);
                }
                container.style.width = topIndexTh.style.width;
                container.style.height = leftIndexTh.style.height;
                container.widthSelfNum = topIndexTh.widthNum;
                container.heightSelfNum = topIndexTh.heightNum;
                container.cell.render();
            });
            // this.bodyData[leftIndexTh.renderId] = tmpTr;
        });
    };
    BaseTbody.prototype.convert = function () {
        var _this = this;
        var bodyData = new Array();
        this.leftIndexList.forEach(function (leftIndexTh) {
            var trData = new Array();
            _this.topIndexList.forEach(function (topIndexTh) {
                var keyString = leftIndexTh.renderId + _this.separator + topIndexTh.renderId;
                if (_this.bodyData.hasOwnProperty(keyString)) {
                    var td = _this.bodyData[keyString];
                    trData.push(td);
                    _this.$positionManager.setPositionMap(td.position, td, 'clone');
                }
            });
            bodyData.push(trData);
        });
        return bodyData;
    };
    /**
     * 普通 list套object的输出
     *
     * @returns
     * @memberof BaseTbody
     */
    BaseTbody.prototype.output = function (valueType) {
        var _this = this;
        var objectData = {};
        var arrayObjectData = [];
        var arrayArrayData = [];
        this.leftIndexList.forEach(function (leftIndexTh) {
            var trObject = {};
            var trArray = [];
            _this.topIndexList.forEach(function (topIndexTh) {
                var keyString = leftIndexTh.renderId + _this.separator + topIndexTh.renderId;
                if (_this.bodyData.hasOwnProperty(keyString)) {
                    var container = _this.bodyData[keyString];
                    if (valueType === 'content') {
                        objectData[keyString] = container.cell.content;
                        trObject[topIndexTh.renderId] = container.cell.content;
                        trArray.push(container.cell.content);
                    }
                    else if (valueType === 'container') {
                        objectData[keyString] = container;
                        trObject[topIndexTh.renderId] = container;
                        trArray.push(container);
                    }
                }
            });
            arrayObjectData.push(trObject);
            arrayArrayData.push(trArray);
        });
        return {
            objectData: objectData,
            arrayObjectData: arrayObjectData,
            arrayArrayData: arrayArrayData
        };
    };
    /**
     * 用于序列化中的导出
     *
     * @returns
     * @memberof BaseTbody
     */
    BaseTbody.prototype.outputByObject = function () {
        var _this = this;
        var res = {};
        this.leftIndexList.forEach(function (leftIndexTh) {
            if (_this.bodyData.hasOwnProperty(leftIndexTh.renderId)) {
                var tmpTr_1 = _this.bodyData[leftIndexTh.renderId];
                var trData_1 = {};
                _this.topIndexList.forEach(function (topIndexTh) {
                    if (tmpTr_1.hasOwnProperty(topIndexTh.renderId)) {
                        trData_1[topIndexTh.renderId] = tmpTr_1[topIndexTh.renderId].clone();
                    }
                });
                res[leftIndexTh.renderId] = (trData_1);
            }
        });
        return res;
    };
    /**
     * cleanTbody
     */
    BaseTbody.prototype.cleanTimeOutTbody = function () {
        var _this = this;
        var newData = {};
        this.leftIndexList.forEach(function (leftIndexTh) {
            _this.topIndexList.forEach(function (topIndexTh) {
                var keyString = leftIndexTh.renderId + _this.separator + topIndexTh.renderId;
                if (_this.bodyData.hasOwnProperty(keyString)) {
                    newData[keyString] = _this.bodyData[keyString];
                }
            });
        });
        this.bodyData = newData;
    };
    BaseTbody.prototype.clone = function (excludeReg, keepReg, withFunction) {
        this.cleanTimeOutTbody();
        return _super.prototype.clone.call(this, excludeReg, keepReg, withFunction);
    };
    return BaseTbody;
}(TbodyContainer_TbodyContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/IndexContainer.ts



var IndexContainer_IndexContainer = /** @class */ (function (_super) {
    __extends(IndexContainer, _super);
    function IndexContainer(param) {
        var _this = _super.call(this, param) || this;
        _this.treeContainer = null;
        return _this;
    }
    IndexContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.config = baseClone(this.$dragTableConfig.IndexContainerConfig);
        if (/top-index/.test(this.type)) {
            objectSet(paramClone, this.$dragTableConfig.topIndexContainer, 'union');
        }
        else if (/left-index/.test(this.type)) {
            objectSet(paramClone, this.$dragTableConfig.leftIndexContainer, 'union');
        }
    };
    /**
     * setSystemData
     */
    IndexContainer.prototype.update = function (th) {
        if (!th) {
            return;
        }
        this.tbodyConfig = th.tbodyConfig;
        this.canSum = th.canSum;
        this.renderId = th.id;
        this.$theadContainer = th;
        if (/left/.test(this.type)) {
            this.style.height = th.style.height;
            this.heightNum = this.heightSelfNum = th.heightSelfNum;
            if (/top/.test(th.type)) {
                this.style.zIndex = 100;
            }
        }
        else if (/top/.test(this.type)) {
            // debugger;
            this.style.width = th.style.width;
            this.widthNum = this.widthSelfNum = th.widthSelfNum;
            if (/left/.test(th.type)) {
                this.style.zIndex = 100;
            }
        }
    };
    /**
     * resetByIndexContainer
     */
    IndexContainer.prototype.resetByIndexContainer = function () {
        if (this.id === 'top-left') {
            return;
        }
        this.widthNum = this.widthSelfNum;
        this.heightNum = this.heightSelfNum;
        this.span1 = this.config.span1;
        this.span2 = this.config.span2;
        this.side1 = this.config.side1;
        this.side2 = this.config.side2;
    };
    return IndexContainer;
}(TheadContainer_TheadContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/thead/IndexThead.ts




var IndexThead_IndexThead = /** @class */ (function (_super) {
    __extends(IndexThead, _super);
    function IndexThead(param) {
        return _super.call(this, param) || this;
    }
    /**
     * initBeforeSetData
     */
    IndexThead.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        this.cell = null;
        this.$rootParent = this;
        objectSet(this.config, this.$dragTableConfig.IndexTheadConfig, 'union');
        if (/top-index/.test(this.type)) {
            objectSet(paramClone, this.$dragTableConfig.topIndexThead, 'union');
        }
        else if (/left-index/.test(this.type)) {
            objectSet(paramClone, this.$dragTableConfig.leftIndexThead, 'union');
            this.config.style.width = '80px';
        }
    };
    /**
     * resize
     */
    IndexThead.prototype.resize = function () {
        this.$leafIndexList = [];
        this.$leafIndexList2 = [];
        _super.prototype.resize.call(this);
    };
    /**
     * replaceChild
     */
    IndexThead.prototype.replaceChild = function (newChild, targetIndex, needDeleteItChildren) {
        _super.prototype.replaceChild.call(this, newChild, targetIndex, needDeleteItChildren);
        this.$positionManager.setPositionMap(newChild.position, newChild, 'last');
    };
    /**
     * render
     */
    IndexThead.prototype.render = function () {
        var _this = this;
        this.resize();
        this.children.forEach(function (th, i) {
            th.position.table = _this.$rootTable.position.table;
            if (th.cell) {
                if (th.type.indexOf('top') !== -1) {
                    th.position.colNum = i;
                    th.position.colStr = getA_Z(i);
                    th.position.rowStr = 0;
                    th.cell.value = getA_Z(i);
                }
                else if (th.type.indexOf('left') !== -1) {
                    // debugger
                    th.position.colStr = '@';
                    th.position.rowNum = i;
                    th.position.rowStr = i + 1;
                    th.cell.value = i + 1;
                }
                // debugger
                th.id = th.cell.value;
                if (_this.$rootTable.debugLevel === 1) {
                    th.cell.value = th.renderId;
                }
                else if (_this.$rootTable.debugLevel === 0) {
                }
                _this.$positionManager.setPositionMap(th.position, th, 'source');
                th.cell.render();
            }
        });
    };
    /**
     * 创建容器
     *
     * @private
     * @param {DragStartData} data
     * @returns
     * @memberof BaseThead
     */
    IndexThead.prototype.createContain = function (data) {
        // 此处是 IndexContainer 区别与TheadContaner;
        var $groupId = this.$groupId;
        var container = new IndexContainer_IndexContainer({
            type: this.type,
            side1: 1, side2: 1,
            $rootParent: this.$rootParent,
            $rootTable: this.$rootTable,
            $groupId: $groupId
        });
        // container.setConfig(this.$rootParent.config);
        if (data) {
            container.setContainerData(data);
        }
        if (!container.cell) {
            var cell = new BaseCell_BaseCell({ $parent: container });
            container.setCell(cell);
        }
        return container;
    };
    IndexThead.prototype.fastAddChild = function () {
        var container = this.createContain();
        this.addChild(container);
    };
    /**
     * convert
     */
    IndexThead.prototype.convert = function () {
        var _this = this;
        var res = new Array();
        this.children.forEach(function (th) {
            var copyTh = th.clone(undefined, undefined, true);
            _this.$positionManager.setPositionMap(copyTh.position, copyTh, 'clone');
            res.push(copyTh);
        });
        return res;
    };
    return IndexThead;
}(IndexContainer_IndexContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/container/TableContainer.ts


var TableContainer_TableContainer = /** @class */ (function (_super) {
    __extends(TableContainer, _super);
    function TableContainer(param) {
        var _this = _super.call(this, param) || this;
        _this.tableName = ''; // 表格名称
        _this.$colNumber = new Array(); //  列标识：最上面'A', 'B', 'C', 'D'.....
        _this.$rowNumber = new Array(); // 行标识: 最左边面1, 2, 3, 4, 5.....
        _this.$tableHeadTop = new Array(); // 用于显示的上侧表头 直接用于上表头的渲染
        _this.$tableHeadLeft = new Array(); // 用于显示的左侧表头 直接用于左表头的渲染
        _this.$tableBody = new Array(); // 用于显示的表内容
        _this.$keyDownSet = new Set(); // 键盘按键按下状态的Set
        return _this;
    }
    TableContainer.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
    };
    /**
     * 按键抬起
     *
     * @param {*} ev
     * @memberof BaseTable
     */
    TableContainer.prototype.onKeyUp = function (ev) {
        this.$keyDownSet.delete(ev.key);
    };
    /**
     * 按键按下
     *
     * @param {*} ev
     * @memberof BaseTable
     */
    TableContainer.prototype.onKeyDown = function (ev) {
        this.$keyDownSet.add(ev.key);
    };
    /**
     * onClick
     */
    TableContainer.prototype.onClick = function (ev) {
        this.subjectSend({
            ev_type: 'click',
            event: ev,
            data: {
                objectName: 'TableContainer',
                object: this,
            },
        });
    };
    /**
     * 获得表头实体
     *
     * @protected
     * @param {string} type
     * @returns
     *
     */
    TableContainer.prototype.getEntity = function (type) {
        switch (type) {
            case 'top': return this.theadTopEntity;
            case 'left': return this.theadLeftEntity;
            case 'top-index': return this.theadTopIndexEntity;
            case 'left-index': return this.theadLeftIndexEntity;
            case 'tbody': return this.tbodyEntity; // 双击编辑表格时 为了统一失去焦点后的函数
            default:
                console.log('getEntity-default');
                return this.theadTopEntity;
        }
    };
    return TableContainer;
}(BaseContainer_BaseContainer));


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/selectBox/SelectBox.ts
var SelectBox_SelectBox = /** @class */ (function () {
    function SelectBox(type, $TableContainer) {
        this.selectMap = new Map();
        this.selectList = new Array();
        this.size = 0;
        this.stlye = {
            position: 'absolute',
            zIndex: 98,
        };
        this.type = type;
        this.$TableContainer = $TableContainer;
    }
    /**
     * getInstance
     */
    SelectBox.getInstance = function (type, baseTable) {
        var instance = this.instances[type];
        if (!instance) {
            this.instances[type] = instance = new SelectBox(type, baseTable);
        }
        return instance;
    };
    /**
     * createSelectCell
     */
    SelectBox.prototype.createSelectContainer = function (dom, cellContainer) {
        // debugger;
        // const container: any = cellContainer.clone([], ['$', 'userData'], true);
        var rootTable = cellContainer.$rootTable;
        var container = cellContainer.clone();
        container.selectBoxType = 'main';
        var zIndex = 98;
        switch (cellContainer.type) {
            case 'top':
            case 'top-index':
                zIndex = 100;
                container.selectBoxType = rootTable.hasTopFixedTable ? 'top' : 'main';
                if (rootTable.hasTopFixedTable && rootTable.hasLeftFixedTable) {
                    var theadContainer = cellContainer.$theadContainer;
                    if (theadContainer && !new RegExp(theadContainer.type).test(cellContainer.type)) {
                        container.selectBoxType = 'top-left';
                        zIndex = 101;
                    }
                }
                break;
            case 'left':
            case 'left-index':
                zIndex = 100;
                container.selectBoxType = rootTable.hasLeftFixedTable ? 'left' : 'main';
                if (rootTable.hasTopFixedTable && rootTable.hasLeftFixedTable) {
                    var theadContainer = cellContainer.$theadContainer;
                    if (theadContainer && !new RegExp(theadContainer.type).test(cellContainer.type)) {
                        container.selectBoxType = 'top-left';
                        zIndex = 101;
                    }
                }
                break;
            case 'tbody':
                zIndex = 96;
                container.selectBoxType = 'main';
                break;
        }
        var width = dom.offsetWidth - 2;
        var height = dom.clientHeight - 2;
        container.topStyle = {
            position: 'absolute',
            left: 0 + 'px',
            top: 0 + 'px',
            width: width + 'px',
            borderBottom: '2px solid blue',
            boxSizing: 'border-box',
            zIndex: zIndex,
        };
        container.bottomStyle = {
            position: 'absolute',
            left: 0 + 'px',
            top: height + 'px',
            width: width + 'px',
            boxSizing: 'border-box',
            borderTop: '2px solid blue',
            zIndex: zIndex,
        };
        container.leftStyle = {
            position: 'absolute',
            left: 0 + 'px',
            top: 0 + 'px',
            height: height + 'px',
            borderLeft: '2px solid blue',
            boxSizing: 'border-box',
            zIndex: zIndex,
        };
        container.rightStyle = {
            position: 'absolute',
            left: (width - 1) + 'px',
            top: 0 + 'px',
            height: height + 'px',
            borderLeft: '2px solid blue',
            boxSizing: 'border-box',
            zIndex: zIndex,
        };
        var style = container.style = {};
        style.left = dom.offsetLeft;
        style.top = dom.offsetTop;
        style.position = 'relative';
        style.zIndex = zIndex;
        return container;
    };
    /**
     * add
     */
    SelectBox.prototype.add = function (container) {
        this.currentCotanier = container;
        var res = this.selectMap.set(container.id, container);
        this.render();
        return res;
    };
    /**
     * has
     */
    SelectBox.prototype.has = function (container) {
        var hasSet = false;
        this.selectList.forEach(function (sc) {
            if (JSON.stringify(sc.id) === JSON.stringify(container.id)) {
                hasSet = true;
            }
        });
        return hasSet;
    };
    /**
     * delete
     */
    SelectBox.prototype.delete = function (container) {
        var res = this.selectMap.delete(container.id);
        this.render();
        return res;
    };
    SelectBox.prototype.clear = function () {
        this.currentCotanier = null;
        var res = this.selectMap.clear();
        this.render();
        return res;
    };
    /**
     * forEach
     */
    SelectBox.prototype.forEach = function (callbackfn, thisArg) {
        this.selectMap.forEach(callbackfn, thisArg);
    };
    /**
     * render
     */
    SelectBox.prototype.render = function () {
        var _this = this;
        // debugger
        this.selectList = [];
        this.selectMap.forEach(function (val, key) {
            _this.selectList.push(val);
        });
        this.size = this.selectMap.size;
        // console.log( this.size );
    };
    /**
     * convert
     */
    SelectBox.prototype.convert = function () {
        return this.selectList;
    };
    SelectBox.instances = {};
    return SelectBox;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/viewModule/table/BaseTable.ts









var BaseTable_BaseTable = /** @class */ (function (_super) {
    __extends(BaseTable, _super);
    function BaseTable(param) {
        var _this = _super.call(this, param) || this;
        _this.setExpandedContainer();
        return _this;
    }
    /**
     * setDefaultExpanded
     */
    BaseTable.prototype.setExpandedContainer = function (defaultExpandedIds) {
        this.defaultExpandedIds = defaultExpandedIds || this.defaultExpandedIds;
        var treeContainerMap = this.$positionManager.treeContainerMap;
        treeContainerMap.forEach(function (value, key) {
            value.$openStatus = 'close';
        });
        this.defaultExpandedIds.forEach(function (id) {
            var canDo = true;
            var treeContainer = treeContainerMap.get(id);
            if (treeContainer) {
                do {
                    treeContainer.$openStatus = 'open';
                    treeContainer.$treeParent;
                    if (treeContainer.$treeParent) {
                        treeContainer = treeContainer.$treeParent;
                    }
                    else {
                        canDo = false;
                    }
                } while (canDo);
                treeContainer.resize();
                treeContainer.loop(treeContainer.$openStatus);
            }
        });
        this.render();
    };
    BaseTable.prototype.getAllHideContainer = function () {
        return this.$positionManager.hideContainerMap;
    };
    BaseTable.prototype.initBeforeSetData = function (paramClone) {
        _super.prototype.initBeforeSetData.call(this, paramClone);
        objectSet(this.config, this.$dragTableConfig.BaseTableConfig, 'union');
        objectSet(paramClone, this.$dragTableConfig.table, 'union');
        var $groupId = this.$groupId;
        this.$selectBoxEntity = SelectBox_SelectBox.getInstance(this.$groupId, this);
        // debugger
        // this.tableHeadTopLeft = ContainerFactory.create('TheadContainer', { style: { backgroundColor: '#fff' } });
        this.tableHeadTopLeft = new TheadContainer_TheadContainer({ id: 'top-left', side1: 1, side2: 1, style: { backgroundColor: '#fff' }, $groupId: $groupId, $rootTable: this }); // 左上角空白单元格长宽
        this.theadTopEntity = new BaseThead_BaseThead({ id: 'topThead', type: 'top', $groupId: $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.theadLeftEntity = new BaseThead_BaseThead({ id: 'leftThead', type: 'left', $groupId: $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.theadTopIndexEntity = new IndexThead_IndexThead({ id: 'topIndexThead', type: 'top-index', $groupId: $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.theadLeftIndexEntity = new IndexThead_IndexThead({ id: 'leftIndexThead', type: 'left-index', $groupId: $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.tbodyEntity = new BaseTbody_BaseTbody({ id: 'baseTbody', type: 'tbody', $groupId: $groupId, $rootTable: this, side1: 0, side2: 0 });
        this.initSubject(this);
    };
    /**
     * setConfig
     */
    BaseTable.prototype.setConfig = function (tableConfig) {
        objectSet(this.config, tableConfig.table, 'union');
        objectSet(this.theadTopEntity.config, tableConfig.topThead, 'union');
        objectSet(this.theadLeftEntity.config, tableConfig.leftThead, 'union');
        objectSet(this.theadTopIndexEntity.config, tableConfig.topIndexThead, 'union');
        objectSet(this.theadLeftIndexEntity.config, tableConfig.leftIndexThead, 'union');
        objectSet(this.tbodyEntity.config, tableConfig.baseTbody, 'union');
        this.render();
    };
    /**
     * setContainerData 反序列化
     */
    BaseTable.prototype.setContainerData = function (param) {
        var _this = this;
        try {
            var copyJson = keepClone(param);
            var conditionHandle = function (key, value) {
                if (key === 'theadTopEntity') {
                    objectSet(value, _this.$dragTableConfig.topThead);
                    _this.theadTopEntity.setContainerData(value);
                    return;
                }
                else if (key === 'theadLeftEntity') {
                    objectSet(value, _this.$dragTableConfig.leftThead);
                    _this.theadLeftEntity.setContainerData(value);
                    return;
                }
                else if (key === 'theadTopIndexEntity') {
                    objectSet(value, _this.$dragTableConfig.topIndexThead);
                    _this.theadTopIndexEntity.setContainerData(value);
                    return;
                }
                else if (key === 'theadLeftIndexEntity') {
                    objectSet(value, _this.$dragTableConfig.leftIndexThead);
                    _this.theadLeftIndexEntity.setContainerData(value);
                    return;
                }
                else if (key === 'tbodyEntity') {
                    objectSet(value, _this.$dragTableConfig.baseTbody);
                    _this.tbodyEntity.setContainerData(value);
                    return;
                }
                _this.setProperty(key, value);
            };
            _super.prototype.setContainerData.call(this, copyJson, undefined, undefined, undefined, conditionHandle);
        }
        catch (error) {
            console.error('setContainerData 中出现出错');
            console.error(error);
        }
        this.initAfterSetData();
        this.subjectSend({
            ev_type: 'beforeRender',
            render: true,
            event: null,
            data: {
                objectName: 'setContainerData',
                object: this
            }
        });
    };
    /**
     * onDestroy
     */
    BaseTable.prototype.onDestroy = function () {
        var self = this;
        self.theadTopEntity.$subject.unsubscribe(self.onReceiveMsg, self);
        self.theadLeftEntity.$subject.subscribe(self.onReceiveMsg, self);
        self.tbodyEntity.$subject.subscribe(self.onReceiveMsg, self);
    };
    /**
     * initTable 初始化表格
     *
     * @param {number} width
     * @memberof BaseTable
     */
    BaseTable.prototype.initTable = function (width, height) {
        for (var colIndex = 0; colIndex < width; colIndex++) {
            this.theadTopIndexEntity.fastAddChild();
            this.theadAdd({
                type: 'top',
                targetParentPosition: [],
            });
        }
        height = height === undefined ? 1 : height;
        for (var i = 0; i < height; i++) {
            this.addOneRow();
        }
        this.render();
    };
    /**
     * addOneRow 添加一行数据
     *
     * @param {*} [rowData]
     * @memberof BaseTable
     */
    BaseTable.prototype.addOneRow = function (params) {
        var param = params ? params.param : undefined;
        var rowData = params ? params.data : undefined;
        var render = params ? params.render : undefined;
        var id = null;
        var needAddThead = false;
        var paramTheadAdd;
        var lastSelectContainer = this.$selectBoxEntity.currentCotanier;
        if (param) {
            paramTheadAdd = {
                type: 'left',
                targetParentPosition: param.targetParentPosition,
                insertIndex: param.insertIndex,
                sourceContainerData: param.sourceContainerData,
            };
            needAddThead = true;
        }
        else if (this.$tableHeadLeft.length !== 0) {
            needAddThead = true;
        }
        if (lastSelectContainer) {
            var lastSCParam = void 0;
            if (/^left$/.test(lastSelectContainer.type)) {
                lastSCParam = {
                    type: 'left',
                    targetParentPosition: dropRight(lastSelectContainer.theadPosition),
                    insertIndex: last(lastSelectContainer.theadPosition) + 1
                };
            }
            else {
                var leftIndexContainer = this.getLeftIndexContainer(lastSelectContainer.position);
                if (leftIndexContainer && leftIndexContainer.$theadContainer) {
                    var leftContainer = leftIndexContainer.$theadContainer;
                    lastSCParam = {
                        type: 'left',
                        targetParentPosition: dropRight(leftContainer.theadPosition),
                        insertIndex: last(leftContainer.theadPosition) + 1
                    };
                }
            }
            paramTheadAdd = objectSet(lastSCParam, paramTheadAdd, 'union');
        }
        else {
            var defParam = {
                type: 'left',
                targetParentPosition: [],
            };
            paramTheadAdd = objectSet(defParam, paramTheadAdd, 'union');
        }
        // addTbody
        if (needAddThead) {
            var addContainer = this.theadAdd(paramTheadAdd);
            id = addContainer.id;
        }
        var container = this.theadLeftIndexEntity.createContain();
        this.theadLeftIndexEntity.addChild(container);
        id = this.tbodyEntity.setRowData(id, rowData || {});
        container.renderId = id;
        if (render !== false) {
            this.render();
        }
        return id;
    };
    /**
     * addOneCol 添加一列数据
     *
     * @param {*} [data]
     * @memberof BaseTable
     */
    BaseTable.prototype.addOneCol = function (params) {
        var param = params ? params.param : undefined;
        var colData = params ? params.data : undefined;
        var render = params ? params.render : undefined;
        var id = null;
        var needAddThead = false;
        var paramTheadAdd;
        var lastSelectContainer = this.$selectBoxEntity.currentCotanier;
        if (param) {
            paramTheadAdd = {
                type: 'top',
                targetParentPosition: param.targetParentPosition,
                insertIndex: param.insertIndex,
                sourceContainerData: param.sourceContainerData,
            };
            needAddThead = true;
        }
        else if (this.$tableHeadTop.length !== 0) {
            needAddThead = true;
        }
        if (lastSelectContainer) {
            var lastSCParam = void 0;
            if (/^top$/.test(lastSelectContainer.type)) {
                lastSCParam = {
                    type: 'top',
                    targetParentPosition: dropRight(lastSelectContainer.theadPosition),
                    insertIndex: last(lastSelectContainer.theadPosition) + 1
                };
            }
            else if (/^tbody$/.test(lastSelectContainer.type)) {
                var topIndexContainer = this.getTopIndexContainer(lastSelectContainer.position);
                if (topIndexContainer && topIndexContainer.$theadContainer) {
                    var topContainer = topIndexContainer.$theadContainer;
                    lastSCParam = {
                        type: 'top',
                        targetParentPosition: dropRight(topContainer.theadPosition),
                        insertIndex: last(topContainer.theadPosition) + 1
                    };
                }
            }
            paramTheadAdd = objectSet(lastSCParam, paramTheadAdd, 'union');
        }
        else {
            var defParam = {
                type: 'top',
                targetParentPosition: [],
            };
            paramTheadAdd = objectSet(defParam, paramTheadAdd, 'union');
        }
        if (needAddThead) {
            var addContainer = this.theadAdd(paramTheadAdd);
            id = addContainer.id;
        }
        var container = this.theadTopIndexEntity.createContain();
        id = this.tbodyEntity.setColData(id, colData || {});
        container.renderId = id;
        this.theadTopIndexEntity.addChild(container);
        if (render !== false) {
            this.render();
        }
        return id;
    };
    /**
     * setTBodyData
     */
    BaseTable.prototype.setTbodyData = function (data) {
        this.tbodyEntity.setTbodyData(data);
    };
    /**
     * 表头添加并替换
     *
     * @param {ParamTheadAddReplace} param
     * @memberof BaseTable
     */
    BaseTable.prototype.theadAddReplace = function (param, render) {
        var targetContainerPosition = param.targetContainerPosition;
        var targetThead = this.getEntity(param.type);
        var targetIndexPosition = last(targetContainerPosition);
        var targetParentPosition = dropRight(targetContainerPosition);
        var targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition);
        if (param.sourceContainerData) {
            if (param.withChildren == false) {
                param.sourceContainerData.children = new Array();
            }
            var tmpContainer = targetThead.createContain(param.sourceContainerData);
            targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, param.targetWithChildren);
        }
        if (param.sourceContainerData) {
            var tmpContainer = targetThead.createContain(param.sourceContainerData);
            targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, param.withChildren);
        }
        this.onReceiveMsg({
            ev_type: 'theadAddReplace',
            event: null,
            render: render,
            data: {
                objectName: 'ParamTheadAddReplace',
                object: param
            }
        });
    };
    /**
     * 表头添加
     *
     * @param {ParamTheadAdd} param
     * @memberof BaseTable
     */
    BaseTable.prototype.theadAdd = function (param, render) {
        // debugger
        var id = null;
        var addContainer;
        try {
            if (!param.sourceContainerData) {
                param.sourceContainerData = {
                    cell: {
                        value: '',
                    },
                };
            }
            if (param.withChildren == false) {
                param.sourceContainerData.children = new Array();
            }
            var targetThead = this.getEntity(param.type);
            var targetParentContainer = targetThead.getContainerByTheadPosition(param.targetParentPosition);
            addContainer = targetThead.createContain(param.sourceContainerData);
            id = targetParentContainer.addChild(addContainer, param.insertIndex);
            // targetThead.resize();
            this.onReceiveMsg({
                ev_type: 'theadAdd',
                event: null,
                render: render,
                data: {
                    objectName: 'ParamTheadAdd',
                    object: param
                }
            });
        }
        catch (error) {
            console.error(error);
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'error',
                    object: error
                }
            });
        }
        return addContainer;
    };
    /**
     * 表头移动
     *
     * @param {ParamTheadMove} param
     * @memberof BaseTable
     */
    BaseTable.prototype.theadMove = function (param, render) {
        try {
            var souceIndexPosition = last(param.sourceContainerData.theadPosition);
            var souceParentPosition = dropRight(param.sourceContainerData.theadPosition);
            if (param.sourceContainerData) {
                var targetThead = this.getEntity(param.type);
                var targetParentContainer = targetThead.getContainerByTheadPosition(param.targetParentPosition);
                var sourceThead = this.getEntity(param.sourceContainerData.type);
                var sourceParentContainer = sourceThead.getContainerByTheadPosition(souceParentPosition);
                // const tmpContainer = sourceThead.createContain(param.sourceContainerData);
                var sourceContainer = sourceThead.getContainerByTheadPosition(param.sourceContainerData.theadPosition);
                if (JSON.stringify(souceParentPosition) === JSON.stringify(param.targetParentPosition) && souceIndexPosition > param.insertIndex) {
                    // 如果目标容器和源容器在同一个父级容器下，且源容器index小于目标容器index 则先删除源容器 再添加源容器的拷贝
                    sourceParentContainer.deletChild(souceIndexPosition, 1, param.withChildren);
                    targetParentContainer.addChild(sourceContainer, param.insertIndex);
                }
                else {
                    // 反之先添加源容器的拷贝 再删除除源容器
                    targetParentContainer.addChild(sourceContainer, param.insertIndex);
                    sourceParentContainer.deletChild(souceIndexPosition, 1, param.withChildren);
                }
                if (!param.withChildren) {
                    sourceContainer.children = new Array();
                }
                targetThead.resize();
                sourceThead.resize();
            }
            this.onReceiveMsg({
                ev_type: 'theadMove',
                render: render,
                event: null,
                data: {
                    objectName: 'ParamTheadMove',
                    object: param
                }
            });
        }
        catch (error) {
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'theadMove',
                    object: error
                }
            });
        }
    };
    /**
     * 表头删除
     *
     * @param {ParamTheadDelete} param
     * @memberof BaseTable
     */
    BaseTable.prototype.theadDelete = function (param, render) {
        try {
            var targetContainerPosition = void 0;
            var targetIndexPosition = void 0;
            var targetParentPosition = void 0;
            var theadType = void 0;
            var withChildren = false;
            var canDel = false;
            var lastSelectContainer = this.$selectBoxEntity.currentCotanier;
            if (param) {
                targetIndexPosition = last(param.targetContainerPosition);
                targetParentPosition = dropRight(param.targetContainerPosition);
                targetContainerPosition = param.targetContainerPosition;
                theadType = param.type;
                withChildren = param.withChildren;
                canDel = true;
            }
            if (lastSelectContainer) {
                targetIndexPosition = targetIndexPosition !== undefined ? targetIndexPosition : last(lastSelectContainer.theadPosition);
                targetParentPosition = targetParentPosition !== undefined ? targetParentPosition : dropRight(lastSelectContainer.theadPosition);
                targetContainerPosition = targetContainerPosition !== undefined ? targetContainerPosition : lastSelectContainer.theadPosition;
                theadType = theadType || lastSelectContainer.type;
                canDel = true;
            }
            // addTbody
            if (canDel) {
                var targetThead = this.getEntity(theadType);
                var deleteContainer = targetThead.getContainerByTheadPosition(targetContainerPosition);
                var targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition);
                targetParentContainer.deletChild(targetIndexPosition, 1, withChildren);
                targetThead.resize();
                this.onReceiveMsg({
                    ev_type: 'theadDelete',
                    render: render,
                    event: null,
                    data: {
                        objectName: 'ParamTheadDelete',
                        object: param
                    }
                });
            }
            else {
                console.error('theadDelete 未传入参数');
            }
        }
        catch (error) {
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'theadDelete',
                    object: error
                }
            });
        }
    };
    /**
     * 表头移动并覆盖
     *
     * @param {ParamTheadMoveReplace} param
     * @memberof BaseTable
     */
    BaseTable.prototype.theadMoveReplace = function (param, render) {
        try {
            var targetContainerPosition = param.targetContainerPosition;
            var targetIndexPosition = last(targetContainerPosition);
            var targetParentPosition = dropRight(targetContainerPosition);
            var targetThead = this.getEntity(param.type);
            var targetParentContainer = targetThead.getContainerByTheadPosition(targetParentPosition);
            var souceIndexPosition = last(param.sourceContainerData.theadPosition);
            var souceParentPosition = dropRight(param.sourceContainerData.theadPosition);
            var sourceThead = this.getEntity(param.sourceContainerData.type);
            var sourceParentContainer = sourceThead.getContainerByTheadPosition(souceParentPosition);
            if (param.sourceContainerData) {
                if (!param.withChildren) {
                    param.sourceContainerData.children = new Array();
                }
                var tmpContainer = targetThead.createContain(param.sourceContainerData);
                targetParentContainer.replaceChild(tmpContainer, targetIndexPosition, false);
                sourceParentContainer.deletChild(souceIndexPosition, 1, param.withChildren);
                targetThead.resize();
                if (sourceThead !== targetThead) {
                    sourceThead.resize();
                }
                this.onReceiveMsg({
                    ev_type: 'theadMoveReplace',
                    event: null,
                    render: render,
                    data: {
                        objectName: 'ParamTheadMoveReplace',
                        object: param
                    }
                });
            }
        }
        catch (error) {
            this.onReceiveMsg({
                ev_type: 'error',
                event: null,
                data: {
                    objectName: 'theadMoveReplace',
                    object: error
                }
            });
        }
    };
    /**
     * addSum
     */
    BaseTable.prototype.addSum = function (newParentContainData, param) {
        var mustContainerData = {
            tbodyConfig: {
                container: {
                    cell: {
                        displayClass: {
                            normal: {
                                displayType: 'text',
                            },
                            dbclick: {
                                displayType: 'text',
                            }
                        }
                    }
                }
            },
            id: 'sum' + '_' + guid(),
            canSum: true,
        };
        var addParam = {
            sourceContainerData: {
                cell: {
                    value: '合计',
                }
            }
        };
        objectSet(addParam.sourceContainerData, newParentContainData, 'union');
        if (param) {
            objectSet(addParam, param, 'union');
        }
        var lastSelectContainer = this.$selectBoxEntity.currentCotanier;
        if ((lastSelectContainer && /^top$|^left$/.test(lastSelectContainer.type))) {
            var lSCParam = {
                type: lastSelectContainer.type,
                targetParentPosition: dropRight(lastSelectContainer.theadPosition),
                sourceContainerData: addParam.sourceContainerData,
            };
            objectSet(addParam, lSCParam, 'union');
        }
        objectSet(addParam.sourceContainerData, mustContainerData, 'union');
        this.theadAdd(addParam);
        this.subjectSend({
            ev_type: 'beforeRender',
            render: true,
            event: null,
            data: {
                objectName: 'addSum',
                object: null
            }
        });
    };
    /**
     *
     *
     * @param {CellContainer} contianer
     * @param {string} delType  'row' | 'col'
     * @memberof BaseTable
     */
    BaseTable.prototype.delOneRowCol = function (delType, container) {
        var _this = this;
        var lastSelectContainer = this.$selectBoxEntity.currentCotanier;
        container = container || lastSelectContainer;
        var delContainerWithParentWhoHasNoChild = function (delContainer) {
            var Entity = _this.getEntity(delContainer.type);
            var parentContainer = Entity.getContainerByTheadPosition(dropRight(delContainer.theadPosition));
            _this.theadDelete({
                type: delContainer.type,
                targetContainerPosition: delContainer.theadPosition,
                withChildren: true
            });
            if (parentContainer.children.length === 0 && !parentContainer.isRootParent) {
                delContainerWithParentWhoHasNoChild(parentContainer);
            }
        };
        var needDelTheadContainer;
        var type = delType === 'row' ? 'left' : 'top';
        if (container.type === 'tbody') {
            var tbodyContainer = this.getContainer(container.position);
            // 删除index
            var delIndex = type === 'left' ? tbodyContainer.position.rowNum : tbodyContainer.position.colNum;
            var IndexEntity = this.getEntity(type + '-index');
            var indexContainer = IndexEntity.getContainerByTheadPosition([delIndex]);
            needDelTheadContainer = indexContainer.$theadContainer;
            if (!needDelTheadContainer) {
                this.theadDelete({
                    type: (type + '-index'),
                    targetContainerPosition: indexContainer.theadPosition
                });
            }
        }
        else {
            needDelTheadContainer = container;
            var position = container.position;
            var colObj = this.$positionManager.getColObj(position);
            for (var rowStr in colObj) {
                if (colObj.hasOwnProperty(rowStr)) {
                    // const parentPosition = _.dropRight(delContainer.theadPosition);
                    // this.processThead(type, 'delete', [], undefined, position.colNum);
                }
            }
            var topIndexContainer = needDelTheadContainer.getTopIndexContainer(needDelTheadContainer.position);
            var leftIndexContainer = needDelTheadContainer.getLeftIndexContainer(needDelTheadContainer.position);
            if (topIndexContainer && delType === 'col') {
                this.theadDelete({
                    type: ('top-index'),
                    targetContainerPosition: topIndexContainer.theadPosition
                });
            }
            if (leftIndexContainer && delType === 'row') {
                this.theadDelete({
                    type: ('left-index'),
                    targetContainerPosition: leftIndexContainer.theadPosition
                });
            }
        }
        if (needDelTheadContainer) {
            delContainerWithParentWhoHasNoChild(needDelTheadContainer);
        }
        this.subjectSend({
            ev_type: 'delOneRowCol',
            event: null,
            render: true,
            data: {
                objectName: 'delOneRowCol',
                object: null
            }
        });
    };
    /**
     * getTbodyData 根据outPutType输出tbody数据
     *
     * @param {number} [outPutType]
     * @returns
     * @memberof BaseTable
     */
    BaseTable.prototype.getTbodyData = function (outPutType, valueType) {
        outPutType = outPutType || 'arrayObjectData';
        valueType = valueType || 'content';
        var res = this.tbodyEntity.output(valueType)[outPutType];
        return res;
    };
    /**
     * 渲染表格渲染
     *
     * @memberof BaseTable
     */
    BaseTable.prototype.render = function () {
        // debugger
        // console.log('render');
        this.$positionManager.hideContainerMap.clear();
        this.resizeTable();
        this.indexTheadRender();
        var theadTopHeight = this.theadTopEntity.side2;
        var theadLeftWidth = this.theadLeftEntity.side2;
        if (this.theadTopEntity) {
            var topBasePosition = baseClone(this.position);
            topBasePosition.colNum = theadLeftWidth;
            topBasePosition.rowNum = 0;
            this.$tableHeadTop = this.theadTopEntity.convert2TheadTopList(topBasePosition);
        }
        if (this.theadLeftEntity) {
            var leftBasePosition = baseClone(this.position);
            leftBasePosition.colNum = 0;
            leftBasePosition.rowNum = theadTopHeight;
            this.$tableHeadLeft = this.theadLeftEntity.convert2TheadLeftList(leftBasePosition);
        }
        var topLeftCell = new BaseCell_BaseCell({ value: this.id, $parent: this.tableHeadTopLeft });
        // debugger
        this.tableHeadTopLeft.widthSelfNum = this.theadLeftEntity.widthNum;
        this.tableHeadTopLeft.heightSelfNum = this.theadTopEntity.heightNum;
        this.tableHeadTopLeft.resize();
        this.tableHeadTopLeft.setCell(topLeftCell);
        topLeftCell.render();
        if (theadTopHeight > 0 && theadLeftWidth > 0) {
            this.$positionManager.setPositionMap(this.tableHeadTopLeft.position, this.tableHeadTopLeft, 'source');
            this.$positionManager.setPositionMap(this.tableHeadTopLeft.position, this.tableHeadTopLeft, 'clone');
        }
        this.renderTBody();
        this.$selectBoxEntity.clear();
        // debugger
        this.saveLastPositionMap(this.position);
    };
    /**
     * serialize 序列化
     */
    BaseTable.prototype.clone = function () {
        var Table = {};
        try {
            Table = _super.prototype.clone.call(this, /\$/, /userData/);
        }
        catch (error) {
            console.error('clone 中出现出错');
            console.error(error);
        }
        return Table;
    };
    /**
     *  添加父级
     *
     * @returns
     * @memberof BaseTable
     */
    BaseTable.prototype.addParent = function (newParentContainData) {
        var _this = this;
        var fristContainer;
        var containerList = this.$selectBoxEntity.selectList;
        this.onReceiveMsg({
            ev_type: 'addParent',
            event: null,
            data: {
                objectName: 'selectContainer',
                object: containerList
            }
        });
        if (this.$selectBoxEntity.size > 0) {
            fristContainer = containerList[0];
            var isSameParent = this.isSameParent(containerList);
            if (isSameParent && fristContainer) {
                var theadEntity = this.getEntity(fristContainer.type);
                if (theadEntity === null) {
                    return;
                }
                var sourceContainerList_1 = new Array();
                this.$selectBoxEntity.forEach(function (th) {
                    sourceContainerList_1.push(_this.getContainer(th.position));
                });
                // 按position从大到小排序 目的是先删除position大的
                sourceContainerList_1.sort(function (a, b) {
                    return last(b.theadPosition) - last(a.theadPosition);
                });
                // console.log(sourceContainerList);
                // 添加在第一个选中th位置上
                // debugger
                fristContainer = last(sourceContainerList_1);
                var targetParentPosition = dropRight(fristContainer.theadPosition, 1);
                newParentContainData = newParentContainData || {
                    cell: {
                        value: '新建合计',
                        data: '',
                    },
                };
                var tmpContainer_1 = theadEntity.createContain(newParentContainData);
                sourceContainerList_1.forEach(function (th) {
                    tmpContainer_1.addChild(th, 0);
                    _this.theadDelete({
                        type: fristContainer.type,
                        targetContainerPosition: th.theadPosition,
                        withChildren: true
                    });
                });
                this.theadAdd({
                    type: fristContainer.type,
                    targetParentPosition: targetParentPosition,
                    insertIndex: last(fristContainer.theadPosition),
                    sourceContainerData: tmpContainer_1,
                });
                // debugger
                this.subjectSend({
                    ev_type: 'beforeRender',
                    render: true,
                    event: null,
                    data: {
                        objectName: 'addParent',
                        object: this
                    }
                });
            }
        }
        this.$selectBoxEntity.clear();
    };
    /**
     * 获得叶子节点1
     */
    BaseTable.prototype.getTheadLeavesList1 = function (theadType) {
        var res = null;
        try {
            var Entity = this.getEntity(theadType);
            Entity.resize();
            res = Entity.$leafIndexList;
        }
        catch (error) {
            console.error('获取错误');
        }
        return res;
    };
    /**
     * 合并单元格
     *
     * @protected
     * @memberof BaseTable
     */
    BaseTable.prototype.merge = function () {
        var _this = this;
        if (this.canMerge()) {
            var r = window.confirm('合并单元格时只保留左上单元格，删除其他单元格，确定合并？');
            if (r === true) {
                this.$selectBoxEntity.selectList.sort(function (pre, lat) {
                    return last(lat.theadPosition) - last(pre.theadPosition);
                });
                this.$selectBoxEntity.selectList.forEach(function (container, i) {
                    if (i < _this.$selectBoxEntity.selectList.length - 1) {
                        _this.theadDelete({
                            targetContainerPosition: container.theadPosition,
                            type: container.type
                        });
                    }
                });
                this.subjectSend({
                    ev_type: 'beforeRender',
                    render: true,
                    event: null,
                    data: {
                        objectName: 'merge',
                        object: this
                    }
                });
            }
            else {
                return;
            }
        }
    };
    /**
     * 拆分单元格
     *
     * @protected
     * @memberof BaseTable
     */
    BaseTable.prototype.disMerge = function () {
    };
    /**
     * 判断是否符合合并要求
     *
     * @private
     * @returns
     * @memberof BaseTable
     */
    BaseTable.prototype.canMerge = function () {
        var containerList = this.$selectBoxEntity.selectList;
        var isSameParent = this.isSameParent(containerList);
        return isSameParent;
    };
    /**
     * 渲染表格内容
     *
     * @memberof DefaultTable
     */
    BaseTable.prototype.renderTBody = function () {
        this.tbodyEntity.topIndexList = this.$colNumber.slice(0 + this.theadLeftEntity.side2, this.$colNumber.length);
        this.tbodyEntity.leftIndexList = this.$rowNumber.slice(0 + this.theadTopEntity.side2, this.$rowNumber.length);
        this.tbodyEntity.render();
        this.$tableBody = this.tbodyEntity.convert();
    };
    /**
     * 保证table 表头与表内容长宽高一致 并且创建行、列标志数组
     *
     * @memberof DefaultTable
     */
    BaseTable.prototype.resizeTable = function () {
        var _this = this;
        this.theadTopEntity.resize();
        this.theadLeftEntity.resize();
        this.theadTopIndexEntity.resize();
        this.theadLeftIndexEntity.resize();
        var maxWidth;
        var maxHeight;
        var theadTopWidth = this.theadTopEntity.side1;
        var theadTopHeight = this.theadTopEntity.side2;
        var theadLeftHeight = this.theadLeftEntity.side1;
        var theadLeftWidth = this.theadLeftEntity.side2;
        var topIndexWidth = this.theadTopIndexEntity.side1;
        var leftIndexHeight = this.theadLeftIndexEntity.side1;
        var resizeTableWidth = function () {
            if (theadTopWidth > 0) {
                _this.theadTopIndexEntity.deletChild(theadLeftWidth, topIndexWidth, true);
                _this.theadTopIndexEntity.resize();
                topIndexWidth = _this.theadTopIndexEntity.side1;
                _this.theadTopEntity.$leafIndexList.forEach(function (th, i) {
                    var index = i + theadLeftWidth;
                    var container = _this.theadTopIndexEntity.createContain();
                    var thContainer = _this.theadTopEntity.getContainerByTheadPosition(th.theadPosition);
                    container.update(th);
                    thContainer.$IndexContainer = container;
                    if (index + 1 > topIndexWidth) {
                        _this.theadTopIndexEntity.addChild(container);
                    }
                    else {
                        _this.theadTopIndexEntity.replaceChild(container, index);
                    }
                });
            }
            else {
                // console.log(this.theadTopIndexEntity.children);
                _this.theadTopIndexEntity.children.forEach(function (th, i) {
                    if (i + 1 <= theadLeftWidth) {
                        var theadContainer = _this.theadLeftEntity.$leafIndexList2[i];
                        var container = _this.theadTopIndexEntity.createContain();
                        container.update(theadContainer);
                        if (/tbody/.test(th.renderId)) {
                            _this.theadTopIndexEntity.addChild(container, i);
                        }
                        else {
                            _this.theadTopIndexEntity.replaceChild(container, i);
                        }
                    }
                    else if ((i + 1) > theadLeftWidth && !/tbody/.test(th.renderId)) {
                        _this.theadTopIndexEntity.deletChild(i, 1, true);
                    }
                });
            }
        };
        var resizeTableHeight = function () {
            if (theadLeftHeight > 0) {
                _this.theadLeftIndexEntity.deletChild(theadTopHeight, leftIndexHeight, true);
                _this.theadLeftIndexEntity.resize();
                leftIndexHeight = _this.theadLeftIndexEntity.side1;
                // console.log(this.theadLeftEntity);
                _this.theadLeftEntity.$leafIndexList.forEach(function (th, i) {
                    var index = i + theadTopHeight;
                    var container = _this.theadLeftIndexEntity.createContain();
                    // console.log(this.theadLeftEntity);
                    var thContainer = _this.theadLeftEntity.getContainerByTheadPosition(th.theadPosition);
                    thContainer.$IndexContainer = container;
                    container.update(th);
                    if (index + 1 > leftIndexHeight) {
                        _this.theadLeftIndexEntity.addChild(container);
                    }
                    else {
                        _this.theadLeftIndexEntity.replaceChild(container, index);
                    }
                });
            }
            else {
                _this.theadLeftIndexEntity.children.forEach(function (th, i) {
                    if (i + 1 <= theadTopHeight) {
                        var theadContainer = _this.theadTopEntity.$leafIndexList2[i];
                        var container = _this.theadLeftIndexEntity.createContain();
                        container.update(theadContainer);
                        if (/tbody/.test(th.renderId)) {
                            _this.theadLeftIndexEntity.addChild(container, i);
                        }
                        else {
                            _this.theadLeftIndexEntity.replaceChild(container, i);
                        }
                    }
                    else if ((i + 1) > theadTopHeight && !/tbody/.test(th.renderId)) {
                        _this.theadLeftIndexEntity.deletChild(i, 1, true);
                    }
                });
            }
        };
        // 如果列标识数小于左表头宽度+上表头宽度 例如：添加了单元格
        if (topIndexWidth <= theadTopWidth + theadLeftWidth) {
            maxWidth = theadTopWidth + theadLeftWidth;
            if (maxWidth) {
                for (var colIndex = 0; colIndex < theadLeftWidth; colIndex++) {
                    var originalColTh = this.theadTopIndexEntity.getContainerByTheadPosition([colIndex]);
                    var thContainer = this.theadLeftEntity.$leafIndexList2[colIndex];
                    var container = this.theadTopIndexEntity.createContain();
                    container.update(thContainer);
                    if (colIndex + 1 > topIndexWidth || /tbody/.test(originalColTh.renderId)) {
                        this.theadTopIndexEntity.addChild(container, colIndex);
                    }
                    else {
                        this.theadTopIndexEntity.replaceChild(container, colIndex);
                        // this.$positionManager.setPositionMap(container.position, container, 'last');
                    }
                }
                resizeTableWidth();
            }
        }
        else { // 如果列标识数大于左表头宽度+上表头宽度 例如：删除了单元格
            maxWidth = topIndexWidth;
            resizeTableWidth();
        }
        this.theadLeftIndexEntity.render();
        leftIndexHeight = this.theadLeftIndexEntity.side1;
        if (leftIndexHeight <= theadLeftHeight + theadTopHeight) {
            maxHeight = theadLeftHeight + theadTopHeight;
            if (maxHeight) {
                for (var rowIndex = 0; rowIndex < theadTopHeight; rowIndex++) {
                    var originalRowTh = this.theadLeftIndexEntity.getContainerByTheadPosition([rowIndex]);
                    var thContainer = this.theadTopEntity.$leafIndexList2[rowIndex];
                    var container = this.theadLeftIndexEntity.createContain();
                    container.update(thContainer);
                    if (rowIndex + 1 > leftIndexHeight || /tbody/.test(originalRowTh.renderId)) {
                        this.theadLeftIndexEntity.addChild(container, rowIndex);
                    }
                    else {
                        this.theadLeftIndexEntity.replaceChild(container, rowIndex);
                    }
                }
                resizeTableHeight();
            }
        }
        else {
            maxHeight = leftIndexHeight;
            resizeTableHeight();
        }
    };
    /**
     * 当拖拽形成表格后 操作
     *
     * @private
     * @param {*} msg
     * @returns
     * @memberof BaseTable
     */
    BaseTable.prototype.dropHandle = function (msg) {
        var _this = this;
        if (msg) {
            var position_1 = [];
            var insertIndex_1 = null;
            var targetWithChildren_1 = msg.target.withChildren;
            var sourceWithChildren_1 = msg.source.withChildren;
            var targetContainer_1 = msg.target.containerData;
            var sourceContainer_1 = msg.source.containerData;
            var operationType_1 = msg.operationType;
            if (sourceWithChildren_1 === undefined && sourceContainer_1.children && sourceContainer_1.children.length !== 0) {
                var r = window.confirm('整组移动？');
                if (r === true) {
                    sourceWithChildren_1 = true;
                }
                else {
                    sourceWithChildren_1 = false;
                }
            }
            // 处理inner情况
            var handleInner = function () {
                if (/replace/.test(operationType_1)) {
                    // do nothing
                }
                else if (targetContainer_1.cell && targetContainer_1.cell.value) {
                    var r = window.confirm('该单元格已有数据,替换请按确定，放弃请按取消');
                    if (r === true) {
                        operationType_1 += '-replace';
                    }
                    else {
                        return false;
                    }
                }
                else {
                    operationType_1 += '-replace';
                }
                if (targetWithChildren_1 === undefined && targetContainer_1.children && targetContainer_1.children.length > 0) {
                    var r = window.confirm('是否删除该单元格的子节点');
                    if (r === true) {
                        targetWithChildren_1 = true;
                    }
                    else {
                        return;
                    }
                }
                position_1 = dropRight(targetContainer_1.theadPosition, 1);
                insertIndex_1 = last(targetContainer_1.theadPosition);
            };
            var handleTop = function () {
                var targetContainer1Position = baseClone(targetContainer_1.theadPosition);
                var sourceContainerSource = _this.getContainer(sourceContainer_1.position, 'source');
                position_1 = dropRight(targetContainer_1.theadPosition, 1);
                insertIndex_1 = last(targetContainer_1.theadPosition);
                var targetParentPosition1 = dropRight(targetContainer_1.theadPosition, 1);
                var targetContainerIndex = last(targetContainer_1.theadPosition);
                // 先将sourceContainer添加或移动到targetContainer位置,得到sourceContainer2,和targetParentPosition2
                {
                    _this.processThead({
                        operationType: operationType_1,
                        param: {
                            type: targetContainer_1.type,
                            targetParentPosition: targetParentPosition1,
                            insertIndex: targetContainerIndex,
                            withChildren: sourceWithChildren_1,
                            sourceContainerData: sourceContainer_1,
                        }
                    });
                }
                // this.render();
                // return;
                _this.getEntity(targetContainer_1.type).resize();
                // 再将targetContainer移动到sourceContainer2或者sourceContainer2根节点下面
                var source2ParentPosition = sourceContainerSource ? sourceContainerSource.theadPosition : targetContainer1Position;
                if (sourceWithChildren_1) {
                    var tmpChild = sourceContainer_1;
                    if (tmpChild) {
                        var hasChild = (tmpChild.children || []).length > 0;
                        while (hasChild) {
                            tmpChild = tmpChild.children[0];
                            hasChild = (tmpChild.children || []).length > 0;
                            source2ParentPosition.push(0);
                        }
                    }
                }
                {
                    operationType_1 = 'move';
                    position_1 = source2ParentPosition;
                    sourceContainer_1 = targetContainer_1;
                    insertIndex_1 = 0;
                    sourceWithChildren_1 = true;
                    // this.theadMove({
                    //     type: targetContainer.type,
                    //     targetParentPosition: source2ParentPosition,
                    //     sourceContainerData: targetContainer,
                    //     insertIndex: 0,  // ?
                    //     withChildren: true
                    // }, false);
                }
            };
            if (/top/.test(targetContainer_1.type)) {
                switch (msg.targetBearing) {
                    case 'left':
                        position_1 = dropRight(targetContainer_1.theadPosition, 1);
                        insertIndex_1 = last(targetContainer_1.theadPosition);
                        break;
                    case 'right':
                        position_1 = dropRight(targetContainer_1.theadPosition, 1);
                        insertIndex_1 = last(targetContainer_1.theadPosition) + 1;
                        break;
                    case 'top':
                        handleTop();
                        // return;
                        break;
                    case 'bottom':
                        position_1 = targetContainer_1.theadPosition;
                        insertIndex_1 = null;
                        break;
                    case 'inner':
                        var res = handleInner();
                        if (false === res) {
                            return;
                        }
                        break;
                    default:
                        targetContainer_1 = this.theadTopEntity;
                        position_1 = targetContainer_1.theadPosition;
                        insertIndex_1 = null;
                        break;
                }
            }
            else if (/left/.test(targetContainer_1.type)) {
                switch (msg.targetBearing) {
                    case 'top':
                        position_1 = dropRight(targetContainer_1.theadPosition, 1);
                        insertIndex_1 = last(targetContainer_1.theadPosition);
                        break;
                    case 'bottom':
                        position_1 = dropRight(targetContainer_1.theadPosition, 1);
                        insertIndex_1 = last(targetContainer_1.theadPosition) + 1;
                        break;
                    case 'left':
                        handleTop();
                        // return;
                        break;
                    case 'right':
                        position_1 = targetContainer_1.theadPosition;
                        insertIndex_1 = null;
                        break;
                    case 'inner':
                        var res = handleInner();
                        if (false === res) {
                            return;
                        }
                        break;
                    default:
                        targetContainer_1 = this.theadLeftEntity;
                        position_1 = targetContainer_1.theadPosition;
                        insertIndex_1 = null;
                        break;
                }
            }
            this.processThead({
                operationType: operationType_1,
                param: {
                    type: targetContainer_1.type,
                    insertIndex: insertIndex_1,
                    withChildren: sourceWithChildren_1,
                    targetWithChildren: targetWithChildren_1,
                    targetParentPosition: position_1,
                    sourceContainerData: sourceContainer_1,
                    targetContainerPosition: targetContainer_1.theadPosition
                }
            });
            this.onReceiveMsg({
                ev_type: 'beforeRender',
                event: null,
                render: true,
                data: {
                    objectName: 'BaseTable',
                    object: this
                }
            });
        }
    };
    /**
     * 批量粘贴 截止2018-10-9还未使用
     *
     * @param {*} e
     * @memberof BaseTable
     */
    BaseTable.prototype.mutiPaste = function (e) {
        // console.log(1111);
    };
    /**
     * 判断选中的selectBoxEntity 是否是同一个父容器下
     *
     * @returns
     * @memberof BaseTable
     */
    BaseTable.prototype.isSameParent = function (containerList) {
        var lastContainer;
        var isSameParentSet = true;
        containerList.forEach(function (th) {
            if (!lastContainer) {
                lastContainer = th;
            }
            else {
                if (lastContainer.type !== th.type) {
                    isSameParentSet = false;
                }
                else if (JSON.stringify(dropRight(th.theadPosition, 1)) !== JSON.stringify(dropRight(lastContainer.theadPosition, 1))) {
                    isSameParentSet = false;
                }
            }
        });
        return isSameParentSet;
    };
    /**
     * indexTheadRender 渲染行列标识列
     *
     * @private
     * @memberof BaseTable
     */
    BaseTable.prototype.indexTheadRender = function () {
        this.theadLeftIndexEntity.render();
        this.theadTopIndexEntity.render();
        this.$colNumber = this.theadTopIndexEntity.convert();
        this.$rowNumber = this.theadLeftIndexEntity.convert();
    };
    /**
     * 表头改变事件
     *
     * @param {*} msg
     * @memberof BaseTable
     */
    BaseTable.prototype.onReceiveMsg = function (msg) {
        var resultList = this.subjectSend(msg);
        if (/cancel/.test(resultList.join('-'))) {
            return resultList;
        }
        if (!this.$parent && msg.render) {
            this.render();
        }
        switch (msg.ev_type) {
            case 'drop':
                this.dropHandle(msg.data.object);
                break;
            case 'click':
                this.afterContainerClick(msg.event, msg.data.object);
                break;
            case 'rightClick':
                this.afterContainerRClick(msg.event, msg.data.object);
                break;
            default:
        }
        return resultList;
    };
    /**
     * 通用表头处理方法
     *
     * @private
     * @param {string} theadType
     * @param {string} operationType
     * @param {number[]} targetParentPostion
     * @param {(TheadContainer | null)} [sourceContainerData]
     * @param {number} [operationIndex]
     * @memberof BaseTable
     */
    BaseTable.prototype.processThead = function (processTheadData) {
        var param = processTheadData.param;
        switch (processTheadData.operationType) {
            case 'add':
                this.theadAdd(param, false);
                break;
            case 'move':
                this.theadMove(param, false);
                break;
            case 'add-replace':
                this.theadAddReplace(param, false);
                break;
            case 'move-replace':
                this.theadMoveReplace(param, false);
                break;
            case 'delete':
                this.theadDelete(param, false);
                break;
            default:
        }
    };
    BaseTable.prototype.afterContainerClick = function (ev, th) {
        // debugger
        var dom = ev.currentTarget;
        var container = this.$selectBoxEntity.createSelectContainer(dom, th);
        if (!this.$keyDownSet.has('Control')) {
            this.$selectBoxEntity.clear();
        }
        this.$selectBoxEntity.add(container);
        var editContainer = this.$positionManager.$editContainer;
        // console.log(editContainer);
        if (editContainer && editContainer.cell && editContainer.cell.formula.canClickAdd && editContainer.id !== th.id) {
            var oldValue = editContainer.cell.formula.tmpValue;
            var valueArr = oldValue.split('');
            var addValue = '';
            if (this.$positionManager.$editContainer.position.table !== this.position.table) {
                addValue = th.position.table + '!';
            }
            addValue += th.position.colStr + th.position.rowStr;
            valueArr.splice(editContainer.cell.selectionStart, 0, addValue);
            // this.$positionManager.$editContainer.cell.value = valueArr.join('');
            var elInput = document.activeElement;
            editContainer.cell.value = valueArr.join('');
            elInput.value = valueArr.join('');
            elInput.selectionStart = editContainer.cell.selectionStart + addValue.length;
            elInput.selectionEnd = editContainer.cell.selectionStart + addValue.length;
        }
        focus();
    };
    BaseTable.prototype.afterContainerRClick = function (ev, th) {
        // debugger
        var dom = ev.currentTarget;
        var container = this.$selectBoxEntity.createSelectContainer(dom, th);
        if (this.$selectBoxEntity.has(container)) {
            // 已选中自己 doNoting
        }
        else {
            this.$selectBoxEntity.clear();
            this.$selectBoxEntity.add(container);
        }
        focus();
    };
    /**
     * 初始化订阅事件 订阅表头变化
     *
     * @param {*} self
     * @memberof BaseTable
     */
    BaseTable.prototype.initSubject = function (self) {
        self = self || this;
        if (self.theadTopEntity) {
            self.theadTopEntity.$subject.subscribe(self.onReceiveMsg, self);
        }
        if (self.theadLeftEntity) {
            self.theadLeftEntity.$subject.subscribe(self.onReceiveMsg, self);
        }
        if (self.tbodyEntity) {
            self.tbodyEntity.$subject.subscribe(self.onReceiveMsg, self);
        }
        self.theadTopIndexEntity.$subject.subscribe(self.onReceiveMsg, self);
        self.theadLeftIndexEntity.$subject.subscribe(self.onReceiveMsg, self);
    };
    BaseTable.prototype.initAfterSetData = function () {
        this.position.table = this.id;
        var topLeftPositon = {
            table: this.position.table,
            colStr: 'A',
            rowStr: 1,
        };
        this.tableHeadTopLeft.position = topLeftPositon;
        var style = {
            // 主表样式
            mainTable: {
                position: 'relative',
                float: 'left',
                overflowX: this.isOverflowX ? 'auto' : 'visible',
                overflowY: this.isOverflowY ? 'auto' : 'visible',
                maxWidth: !this.isOverflowX ? 'auto' : this.maxWidth,
                maxHeight: !this.isOverflowY ? 'auto' : this.maxHeight,
            },
            leftTable: {
                position: 'absolute',
                // zIndex: 100,
                overflowX: this.isOverflowX ? 'hidden' : 'visible',
                overflowY: this.isOverflowY ? 'hidden' : 'visible',
                maxHeight: !this.isOverflowY ? 'auto' : 'calc(' + this.maxHeight + ' - ' + this.scrollBarHeight + ')',
            },
            // 上侧表头
            topTable: {
                overflowX: this.isOverflowX ? 'hidden' : 'visible',
                overflowY: this.isOverflowY ? 'hidden' : 'visible',
                maxWidth: !this.isOverflowX ? 'auto' : 'calc(' + this.maxWidth + ' - ' + this.scrollBarWidth + ')',
            },
        };
        objectSet(this.style, style, 'union');
    };
    return BaseTable;
}(TableContainer_TableContainer));


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./packages/drag-table2.0/views/TableCom.vue?vue&type=script&lang=ts&






/* harmony default export */ var TableComvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component("MyTable", {
    components: {
        TopLeftFixTable: TopLeftFixTable,
        TopFixTable: TopFixTable,
        LeftFixTable: LeftFixTable,
        SelectBox: SelectBox
    },
    props: {
        inputTable: Object
    },
    data: function () {
        return {
            myTable: this.inputTable || new BaseTable_BaseTable({ id: "test" })
        };
    },
    watch: {
        inputTable: function (val, oldVal) {
            this.myTable = val || oldVal;
        }
    },
    created: function () {
        console.log(this.myTable.id);
    }
}));

// CONCATENATED MODULE: ./packages/drag-table2.0/views/TableCom.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_TableComvue_type_script_lang_ts_ = (TableComvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./packages/drag-table2.0/views/TableCom.vue?vue&type=style&index=0&id=5f04bc67&scoped=true&lang=css&
var TableComvue_type_style_index_0_id_5f04bc67_scoped_true_lang_css_ = __webpack_require__("24c9");

// CONCATENATED MODULE: ./packages/drag-table2.0/views/TableCom.vue






/* normalize component */

var TableCom_component = normalizeComponent(
  views_TableComvue_type_script_lang_ts_,
  TableComvue_type_template_id_5f04bc67_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "5f04bc67",
  null
  
)

TableCom_component.options.__file = "TableCom.vue"
/* harmony default export */ var TableCom = (TableCom_component.exports);
// CONCATENATED MODULE: ./packages/drag-table2.0/DragTable.ts





var DragTable_DragTable = /** @class */ (function () {
    function DragTable(id, defConfig) {
        this.id = null;
        this.$subject = new Subject();
        this.$config = {}; // 总体设置
        this.version = '0.2.6';
        this.tableList = [];
        this.tableMap = new Map();
        this.id = id;
        this.$config = DragTableConfig_DragTableConfig.getInstance(id);
        this.setConfig(defConfig);
        this.$positionManager = PositionManager_PositionManager.getInstance(id);
    }
    /**
     * addTable
     */
    DragTable.prototype.addTable = function (table) {
        if (this.tableMap.has(table.id)) {
            this.deleteTable(table.id);
            console.log('重复表格id:' + table.id);
        }
        table.$groupId = this.id;
        this.tableMap.set(table.id, table);
        table.$parent = this;
        this.currentTable = table;
        this.resize();
        table.$subject.subscribe(this.ontableChange, this);
        return table.position;
    };
    /**
     * createTable
     */
    DragTable.prototype.createTable = function (param) {
        var unionParam = keepClone(param);
        unionParam.$groupId = this.id;
        objectSet(unionParam, this.$config.table);
        var table = new BaseTable_BaseTable(unionParam);
        return table;
    };
    /**
     * deleteTable
     */
    DragTable.prototype.deleteTable = function (key) {
        try {
            this.tableMap.delete(key);
            this.$positionManager.clearPositionMapById(key);
        }
        catch (error) {
            console.error(error);
        }
        this.resize();
    };
    /**
     * setConfig
     */
    DragTable.prototype.setConfig = function (config) {
        try {
            if (config) {
                objectSet(this.$config, config, 'union');
            }
        }
        catch (error) {
            console.error('initDefaultConfig error');
        }
    };
    /**
     * render
     */
    DragTable.prototype.render = function () {
        this.tableList.forEach(function (tmpTable) {
            tmpTable.render();
        });
    };
    /**
     * serialize
     */
    DragTable.prototype.serialize = function () {
        var jsonList = new Array();
        this.tableList.forEach(function (table, i) {
            jsonList.push(table.clone());
        });
        return jsonList;
    };
    /**
     * deserialize
     */
    DragTable.prototype.deserialize = function (jsonList) {
        var _this = this;
        jsonList.forEach(function (table, i) {
            var tmpTable = _this.createTable(table);
            _this.addTable(tmpTable);
        });
    };
    /** 获得容器
     * getContainer
     */
    DragTable.prototype.getContainer = function (position, type) {
        return this.$positionManager.getContainer(position, type);
    };
    /**
     * getTopIndexContainer
     */
    DragTable.prototype.getTopIndexContainer = function (position, type) {
        return this.$positionManager.getTopIndexContainer(position, type);
    };
    /**
     * getTopIndexContainer
     */
    DragTable.prototype.getLeftIndexContainer = function (position, type) {
        return this.$positionManager.getLeftIndexContainer(position, type);
    };
    /**
     * getTopIndexContainer
     */
    DragTable.prototype.getRowObj = function (position, type) {
        return this.$positionManager.getRowObj(position, type);
    };
    /**
     * getColObj
     */
    DragTable.prototype.getColObj = function (position, type) {
        return this.$positionManager.getColObj(position, type);
    };
    /**
     * saveLastPositionMap
     */
    DragTable.prototype.saveLastPositionMap = function (position) {
        return this.$positionManager.saveLastPositionMap(position);
    };
    /**
     * ontableChange
     */
    DragTable.prototype.ontableChange = function (msg) {
        if (msg.render) {
            this.render();
        }
        return this.$subject.sendMsg(msg);
    };
    /**
     * resize
     */
    DragTable.prototype.resize = function () {
        var _this = this;
        this.tableList = [];
        this.tableMap.forEach(function (table, i) {
            _this.tableList.push(table);
        });
    };
    return DragTable;
}());


// CONCATENATED MODULE: ./packages/drag-table2.0/index.js






// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport TableCom */__webpack_require__.d(__webpack_exports__, "TableCom", function() { return TableCom; });
/* concated harmony reexport DragTable */__webpack_require__.d(__webpack_exports__, "DragTable", function() { return DragTable_DragTable; });




/***/ })

/******/ });
});
//# sourceMappingURL=drag-table.umd.js.map