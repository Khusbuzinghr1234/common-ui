"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name in all2)
    __defProp(target, name, { get: all2[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// node_modules/react-dom/cjs/react-dom.production.js
var require_react_dom_production = __commonJS({
  "node_modules/react-dom/cjs/react-dom.production.js"(exports2) {
    "use strict";
    var React18 = require("react");
    function formatProdErrorMessage(code) {
      var url = "https://react.dev/errors/" + code;
      if (1 < arguments.length) {
        url += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var i = 2; i < arguments.length; i++)
          url += "&args[]=" + encodeURIComponent(arguments[i]);
      }
      return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function noop() {
    }
    var Internals = {
      d: {
        f: noop,
        r: function() {
          throw Error(formatProdErrorMessage(522));
        },
        D: noop,
        C: noop,
        L: noop,
        m: noop,
        X: noop,
        S: noop,
        M: noop
      },
      p: 0,
      findDOMNode: null
    };
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    function createPortal$1(children, containerInfo, implementation) {
      var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: REACT_PORTAL_TYPE,
        key: null == key ? null : "" + key,
        children,
        containerInfo,
        implementation
      };
    }
    var ReactSharedInternals = React18.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function getCrossOriginStringAs(as, input) {
      if ("font" === as) return "";
      if ("string" === typeof input)
        return "use-credentials" === input ? input : "";
    }
    exports2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
    exports2.createPortal = function(children, container) {
      var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
        throw Error(formatProdErrorMessage(299));
      return createPortal$1(children, container, null, key);
    };
    exports2.flushSync = function(fn) {
      var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
      try {
        if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
      } finally {
        ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
      }
    };
    exports2.preconnect = function(href, options) {
      "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
    };
    exports2.prefetchDNS = function(href) {
      "string" === typeof href && Internals.d.D(href);
    };
    exports2.preinit = function(href, options) {
      if ("string" === typeof href && options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
        "style" === as ? Internals.d.S(
          href,
          "string" === typeof options.precedence ? options.precedence : void 0,
          {
            crossOrigin,
            integrity,
            fetchPriority
          }
        ) : "script" === as && Internals.d.X(href, {
          crossOrigin,
          integrity,
          fetchPriority,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0
        });
      }
    };
    exports2.preinitModule = function(href, options) {
      if ("string" === typeof href)
        if ("object" === typeof options && null !== options) {
          if (null == options.as || "script" === options.as) {
            var crossOrigin = getCrossOriginStringAs(
              options.as,
              options.crossOrigin
            );
            Internals.d.M(href, {
              crossOrigin,
              integrity: "string" === typeof options.integrity ? options.integrity : void 0,
              nonce: "string" === typeof options.nonce ? options.nonce : void 0
            });
          }
        } else null == options && Internals.d.M(href);
    };
    exports2.preload = function(href, options) {
      if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
        var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
        Internals.d.L(href, as, {
          crossOrigin,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0,
          nonce: "string" === typeof options.nonce ? options.nonce : void 0,
          type: "string" === typeof options.type ? options.type : void 0,
          fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
          referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
          imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
          imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
          media: "string" === typeof options.media ? options.media : void 0
        });
      }
    };
    exports2.preloadModule = function(href, options) {
      if ("string" === typeof href)
        if (options) {
          var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
          Internals.d.m(href, {
            as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0
          });
        } else Internals.d.m(href);
    };
    exports2.requestFormReset = function(form) {
      Internals.d.r(form);
    };
    exports2.unstable_batchedUpdates = function(fn, a) {
      return fn(a);
    };
    exports2.useFormState = function(action, initialState, permalink) {
      return ReactSharedInternals.H.useFormState(action, initialState, permalink);
    };
    exports2.useFormStatus = function() {
      return ReactSharedInternals.H.useHostTransitionStatus();
    };
    exports2.version = "19.2.4";
  }
});

// node_modules/react-dom/cjs/react-dom.development.js
var require_react_dom_development = __commonJS({
  "node_modules/react-dom/cjs/react-dom.development.js"(exports2) {
    "use strict";
    "production" !== process.env.NODE_ENV && (function() {
      function noop() {
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function createPortal$1(children, containerInfo, implementation) {
        var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        try {
          testStringCoercion(key);
          var JSCompiler_inline_result = false;
        } catch (e) {
          JSCompiler_inline_result = true;
        }
        JSCompiler_inline_result && (console.error(
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          "function" === typeof Symbol && Symbol.toStringTag && key[Symbol.toStringTag] || key.constructor.name || "Object"
        ), testStringCoercion(key));
        return {
          $$typeof: REACT_PORTAL_TYPE,
          key: null == key ? null : "" + key,
          children,
          containerInfo,
          implementation
        };
      }
      function getCrossOriginStringAs(as, input) {
        if ("font" === as) return "";
        if ("string" === typeof input)
          return "use-credentials" === input ? input : "";
      }
      function getValueDescriptorExpectingObjectForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : 'something with type "' + typeof thing + '"';
      }
      function getValueDescriptorExpectingEnumForWarning(thing) {
        return null === thing ? "`null`" : void 0 === thing ? "`undefined`" : "" === thing ? "an empty string" : "string" === typeof thing ? JSON.stringify(thing) : "number" === typeof thing ? "`" + thing + "`" : 'something with type "' + typeof thing + '"';
      }
      function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
        );
        return dispatcher;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React18 = require("react"), Internals = {
        d: {
          f: noop,
          r: function() {
            throw Error(
              "Invalid form element. requestFormReset must be passed a form that was rendered by React."
            );
          },
          D: noop,
          C: noop,
          L: noop,
          m: noop,
          X: noop,
          S: noop,
          M: noop
        },
        p: 0,
        findDOMNode: null
      }, REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal"), ReactSharedInternals = React18.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      "function" === typeof Map && null != Map.prototype && "function" === typeof Map.prototype.forEach && "function" === typeof Set && null != Set.prototype && "function" === typeof Set.prototype.clear && "function" === typeof Set.prototype.forEach || console.error(
        "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
      );
      exports2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
      exports2.createPortal = function(children, container) {
        var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType)
          throw Error("Target container is not a DOM element.");
        return createPortal$1(children, container, null, key);
      };
      exports2.flushSync = function(fn) {
        var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
        try {
          if (ReactSharedInternals.T = null, Internals.p = 2, fn)
            return fn();
        } finally {
          ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f() && console.error(
            "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
          );
        }
      };
      exports2.preconnect = function(href, options) {
        "string" === typeof href && href ? null != options && "object" !== typeof options ? console.error(
          "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : null != options && "string" !== typeof options.crossOrigin && console.error(
          "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
          getValueDescriptorExpectingObjectForWarning(options.crossOrigin)
        ) : console.error(
          "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        "string" === typeof href && (options ? (options = options.crossOrigin, options = "string" === typeof options ? "use-credentials" === options ? options : "" : void 0) : options = null, Internals.d.C(href, options));
      };
      exports2.prefetchDNS = function(href) {
        if ("string" !== typeof href || !href)
          console.error(
            "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
            getValueDescriptorExpectingObjectForWarning(href)
          );
        else if (1 < arguments.length) {
          var options = arguments[1];
          "object" === typeof options && options.hasOwnProperty("crossOrigin") ? console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          ) : console.error(
            "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
            getValueDescriptorExpectingEnumForWarning(options)
          );
        }
        "string" === typeof href && Internals.d.D(href);
      };
      exports2.preinit = function(href, options) {
        "string" === typeof href && href ? null == options || "object" !== typeof options ? console.error(
          "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
          getValueDescriptorExpectingEnumForWarning(options)
        ) : "style" !== options.as && "script" !== options.as && console.error(
          'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
          getValueDescriptorExpectingEnumForWarning(options.as)
        ) : console.error(
          "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          getValueDescriptorExpectingObjectForWarning(href)
        );
        if ("string" === typeof href && options && "string" === typeof options.as) {
          var as = options.as, crossOrigin = getCrossOriginStringAs(as, options.crossOrigin), integrity = "string" === typeof options.integrity ? options.integrity : void 0, fetchPriority = "string" === typeof options.fetchPriority ? options.fetchPriority : void 0;
          "style" === as ? Internals.d.S(
            href,
            "string" === typeof options.precedence ? options.precedence : void 0,
            {
              crossOrigin,
              integrity,
              fetchPriority
            }
          ) : "script" === as && Internals.d.X(href, {
            crossOrigin,
            integrity,
            fetchPriority,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0
          });
        }
      };
      exports2.preinitModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "script" !== options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingEnumForWarning(options.as) + ".");
        if (encountered)
          console.error(
            "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
            encountered
          );
        else
          switch (encountered = options && "string" === typeof options.as ? options.as : "script", encountered) {
            case "script":
              break;
            default:
              encountered = getValueDescriptorExpectingEnumForWarning(encountered), console.error(
                'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
                encountered,
                href
              );
          }
        if ("string" === typeof href)
          if ("object" === typeof options && null !== options) {
            if (null == options.as || "script" === options.as)
              encountered = getCrossOriginStringAs(
                options.as,
                options.crossOrigin
              ), Internals.d.M(href, {
                crossOrigin: encountered,
                integrity: "string" === typeof options.integrity ? options.integrity : void 0,
                nonce: "string" === typeof options.nonce ? options.nonce : void 0
              });
          } else null == options && Internals.d.M(href);
      };
      exports2.preload = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        null == options || "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : "string" === typeof options.as && options.as || (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
          encountered
        );
        if ("string" === typeof href && "object" === typeof options && null !== options && "string" === typeof options.as) {
          encountered = options.as;
          var crossOrigin = getCrossOriginStringAs(
            encountered,
            options.crossOrigin
          );
          Internals.d.L(href, encountered, {
            crossOrigin,
            integrity: "string" === typeof options.integrity ? options.integrity : void 0,
            nonce: "string" === typeof options.nonce ? options.nonce : void 0,
            type: "string" === typeof options.type ? options.type : void 0,
            fetchPriority: "string" === typeof options.fetchPriority ? options.fetchPriority : void 0,
            referrerPolicy: "string" === typeof options.referrerPolicy ? options.referrerPolicy : void 0,
            imageSrcSet: "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
            imageSizes: "string" === typeof options.imageSizes ? options.imageSizes : void 0,
            media: "string" === typeof options.media ? options.media : void 0
          });
        }
      };
      exports2.preloadModule = function(href, options) {
        var encountered = "";
        "string" === typeof href && href || (encountered += " The `href` argument encountered was " + getValueDescriptorExpectingObjectForWarning(href) + ".");
        void 0 !== options && "object" !== typeof options ? encountered += " The `options` argument encountered was " + getValueDescriptorExpectingObjectForWarning(options) + "." : options && "as" in options && "string" !== typeof options.as && (encountered += " The `as` option encountered was " + getValueDescriptorExpectingObjectForWarning(options.as) + ".");
        encountered && console.error(
          'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
          encountered
        );
        "string" === typeof href && (options ? (encountered = getCrossOriginStringAs(
          options.as,
          options.crossOrigin
        ), Internals.d.m(href, {
          as: "string" === typeof options.as && "script" !== options.as ? options.as : void 0,
          crossOrigin: encountered,
          integrity: "string" === typeof options.integrity ? options.integrity : void 0
        })) : Internals.d.m(href));
      };
      exports2.requestFormReset = function(form) {
        Internals.d.r(form);
      };
      exports2.unstable_batchedUpdates = function(fn, a) {
        return fn(a);
      };
      exports2.useFormState = function(action, initialState, permalink) {
        return resolveDispatcher().useFormState(action, initialState, permalink);
      };
      exports2.useFormStatus = function() {
        return resolveDispatcher().useHostTransitionStatus();
      };
      exports2.version = "19.2.4";
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/react-dom/index.js
var require_react_dom = __commonJS({
  "node_modules/react-dom/index.js"(exports2, module2) {
    "use strict";
    function checkDCE() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
        return;
      }
      if (process.env.NODE_ENV !== "production") {
        throw new Error("^_^");
      }
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        console.error(err);
      }
    }
    if (process.env.NODE_ENV === "production") {
      checkDCE();
      module2.exports = require_react_dom_production();
    } else {
      module2.exports = require_react_dom_development();
    }
  }
});

// node_modules/@tamagui/timer/dist/esm/index.mjs
var esm_exports = {};
__export(esm_exports, {
  timer: () => timer
});
function timer() {
  let runs = 0;
  const typesOfRuns = /* @__PURE__ */ new Set(), timings = {};
  function print() {
    const typeRuns = runs / typesOfRuns.size;
    let totalTime = 0;
    const out = [`Ran ${typeRuns} per-type, ${runs} total`, ...[...typesOfRuns].map((name) => {
      if (name.endsWith("(ignore)")) return;
      const avg = `avg ${`${timings[name] / typeRuns}`.slice(0, 9).padEnd(9)}ms`, total = timings[name];
      return totalTime += total, `${name.slice(0, 30).padStart(31)} | ${avg} | total ${total}ms`;
    }), `                                    total ${totalTime}ms`].join(`
`);
    return console.info(out), out;
  }
  return {
    start(opts) {
      var _a2;
      const quiet = (_a2 = opts == null ? void 0 : opts.quiet) != null ? _a2 : true;
      function time3(strings, ...vars) {
        var _a3;
        const elapsed = performance.now() - start, tag = templateToString(strings, ...vars);
        if (typesOfRuns.add(tag), runs++, (_a3 = timings[tag]) != null ? _a3 : timings[tag] = 0, timings[tag] += elapsed, !quiet) {
          let result = "";
          strings.forEach((str, i) => {
            result += `${str}${i === strings.length - 1 ? "" : vars[i]}`;
          }), console.info(`${`${elapsed}ms`.slice(0, 6).padStart(7)} |`, result);
        }
        start = performance.now();
      }
      let start = performance.now();
      return time3.print = print, time3;
    },
    profile() {
      return {
        timings,
        runs
      };
    },
    print
  };
}
function templateToString(strings, ...vars) {
  return strings.reduce((result, str, i) => result + str + (vars[i] !== void 0 ? vars[i] : ""), "");
}
var init_esm = __esm({
  "node_modules/@tamagui/timer/dist/esm/index.mjs"() {
    "use strict";
  }
});

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AppProvider: () => AppProvider,
  Button: () => Button2,
  Card: () => Card,
  TextField: () => TextField,
  tamaguiConfig: () => tamagui_config_default
});
module.exports = __toCommonJS(index_exports);

// node_modules/@tamagui/web/dist/esm/contexts/ComponentContext.mjs
var import_react2 = require("react");

// node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.mjs
var import_react = __toESM(require("react"), 1);

// node_modules/@tamagui/web/dist/esm/helpers/pseudoDescriptors.mjs
var pseudoDescriptorsBase = {
  // order of keys here important! in priority order
  hoverStyle: {
    name: "hover",
    priority: 2
  },
  pressStyle: {
    name: "active",
    stateKey: "press",
    priority: 3
  },
  focusVisibleStyle: {
    name: "focus-visible",
    priority: 4,
    stateKey: "focusVisible"
  },
  focusStyle: {
    name: "focus",
    priority: 4
  },
  focusWithinStyle: {
    name: "focus-within",
    priority: 4,
    stateKey: "focusWithin"
  },
  disabledStyle: {
    name: "disabled",
    priority: 5,
    stateKey: "disabled"
  }
};
var pseudoPriorities = {
  hover: pseudoDescriptorsBase.hoverStyle.priority,
  press: pseudoDescriptorsBase.pressStyle.priority,
  focus: pseudoDescriptorsBase.focusStyle.priority,
  focusVisible: pseudoDescriptorsBase.focusVisibleStyle.priority,
  focusWithin: pseudoDescriptorsBase.focusWithinStyle.priority,
  disabled: pseudoDescriptorsBase.disabledStyle.priority
};
var pseudoDescriptors = {
  ...pseudoDescriptorsBase,
  enterStyle: {
    name: "enter",
    selector: ".t_unmounted",
    priority: 4
  },
  exitStyle: {
    name: "exit",
    priority: 5
  }
};
var defaultMediaImportance = Object.keys(pseudoDescriptors).length;

// node_modules/@tamagui/web/dist/esm/helpers/mergeProps.mjs
var mergeProps = (defaultProps, props) => {
  const out = {};
  for (const key in defaultProps) key in props || (out[key] = defaultProps[key]);
  for (const key in props) mergeProp(out, defaultProps, props, key);
  return out;
};
var mergeComponentProps = (defaultProps, contextProps, props) => {
  let overriddenContext = null;
  if (!defaultProps && !contextProps) return [props, overriddenContext];
  if (defaultProps && !contextProps) return [mergeProps(defaultProps, props), overriddenContext];
  const out = {};
  for (const key in defaultProps) key in props || (out[key] = defaultProps[key]);
  for (const key in contextProps) {
    if (key in props) continue;
    const contextValue = contextProps[key];
    contextValue !== void 0 && (out[key] = contextValue);
  }
  for (const key in props) mergeProp(out, defaultProps, props, key), contextProps && key in contextProps && (overriddenContext || (overriddenContext = {}), overriddenContext[key] = props[key]);
  return [out, overriddenContext];
};
function mergeProp(out, defaultProps, props, key) {
  let val = props[key];
  if (defaultProps && key in defaultProps && (key in pseudoDescriptors || key[0] === "$") && val && typeof val == "object") {
    const defaultVal = defaultProps[key];
    defaultVal && typeof defaultVal == "object" && (val = mergeProps(defaultVal, val));
  }
  out[key] = val;
}

// node_modules/@tamagui/web/dist/esm/helpers/objectIdentityKey.mjs
function objectIdentityKey(obj) {
  let k = "";
  for (const key in obj) {
    k += key;
    const arg = obj[key];
    let type = typeof arg;
    if (!arg || type !== "object" && type !== "function") k += type + arg;
    else if (cache.has(arg)) k += cache.get(arg);
    else {
      let v = Math.random();
      cache.set(arg, v), k += v;
    }
  }
  return k;
}
var cache = /* @__PURE__ */ new WeakMap();

// node_modules/@tamagui/web/dist/esm/helpers/createStyledContext.mjs
var import_jsx_runtime = require("react/jsx-runtime");
function createStyledContext(defaultValues, namespace = "") {
  "use no memo";
  const createReactContext = import_react.default[Math.random(), "createContext"], useReactMemo = import_react.default[Math.random(), "useMemo"], useReactContext = import_react.default[Math.random(), "useContext"], OGContext = createReactContext(defaultValues), OGProvider2 = OGContext.Provider, Context = OGContext, scopedContexts = /* @__PURE__ */ new Map(), LastScopeInNamespace = createReactContext(namespace);
  function getOrCreateScopedContext(scope) {
    let ScopedContext = scopedContexts.get(scope);
    return ScopedContext || (ScopedContext = createReactContext(defaultValues), scopedContexts.set(scope, ScopedContext)), ScopedContext;
  }
  const getNamespacedScope = (scope) => namespace ? `${namespace}--${scope}` : scope, Provider = ({
    children,
    scope: scopeIn,
    // performance: avoid creating objects
    __disableMergeDefaultValues,
    ...values
  }) => {
    const scope = getNamespacedScope(scopeIn), next = useReactMemo(() => __disableMergeDefaultValues ? values : mergeProps(defaultValues, values), [objectIdentityKey(values)]);
    let ScopedProvider = OGProvider2;
    return scope && (ScopedProvider = getOrCreateScopedContext(scope).Provider), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LastScopeInNamespace.Provider, {
      value: scope,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScopedProvider, {
        value: next,
        children
      })
    });
  }, useStyledContext = (scopeIn = "") => {
    const lastScopeInNamespace = useReactContext(LastScopeInNamespace), scope = namespace ? scopeIn ? getNamespacedScope(scopeIn) : lastScopeInNamespace : scopeIn, context2 = scope ? getOrCreateScopedContext(scope) : OGContext;
    return useReactContext(context2);
  };
  return Context.Provider = Provider, Context.props = defaultValues, Context.context = OGContext, Context.useStyledContext = useStyledContext, Context;
}

// node_modules/@tamagui/web/dist/esm/contexts/ComponentContext.mjs
var ComponentContext = createStyledContext({
  disableSSR: void 0,
  inText: false,
  language: null,
  animationDriver: null,
  setParentFocusState: null,
  insets: null
});

// node_modules/@tamagui/web/dist/esm/contexts/GroupContext.mjs
var import_react3 = require("react");
var GroupContext = (0, import_react3.createContext)(null);

// node_modules/@tamagui/is-equal-shallow/dist/esm/index.mjs
var import_react4 = require("react");
function useCreateShallowSetState(setter, debug) {
  return (0, import_react4.useCallback)((stateOrGetState) => {
    setter((prev) => {
      const next = typeof stateOrGetState == "function" ? stateOrGetState(prev) : stateOrGetState, update = mergeIfNotShallowEqual(prev, next);
      return process.env.NODE_ENV === "development" && debug && update !== prev && (console.groupCollapsed("setStateShallow CHANGE", "=>", update), console.info("previously", prev), console.trace(), console.groupEnd()), update;
    });
  }, [setter, debug]);
}
function mergeIfNotShallowEqual(prev, next) {
  return !prev || !next || isEqualShallow(prev, next) ? prev || next : {
    ...prev,
    ...next
  };
}
function isEqualShallow(prev, next) {
  for (const key in next) if (prev[key] !== next[key]) return false;
  return true;
}

// node_modules/@tamagui/constants/dist/esm/constants.mjs
var import_react5 = require("react");
var isWeb = true;
var isBrowser = typeof window < "u";
var isServer = isWeb && !isBrowser;
var isClient = isWeb && isBrowser;
var useIsomorphicLayoutEffect = isServer ? import_react5.useEffect : import_react5.useLayoutEffect;
var isChrome = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var isWebTouchable = isClient && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
var isAndroid = false;
var isIos = process.env.TEST_NATIVE_PLATFORM === "ios";
var currentPlatform = "web";

// node_modules/@tamagui/web/dist/esm/hooks/useMedia.mjs
var import_react6 = require("react");

// node_modules/@tamagui/web/dist/esm/constants/constants.mjs
var viewDefaultStyles = {};
var webViewFlexCompatStyles = {
  display: "flex",
  alignItems: "stretch",
  flexDirection: "column",
  flexBasis: "auto",
  boxSizing: "border-box",
  minHeight: 0,
  minWidth: 0,
  flexShrink: 0
};
Object.assign(viewDefaultStyles, webViewFlexCompatStyles);
var MISSING_THEME_MESSAGE = process.env.NODE_ENV === "development" ? `Can't find Tamagui configuration.
    
Most of the time this is due to having mis-matched versions of Tamagui dependencies, or bundlers somehow duplicating them.
First step is to ensure every "tamagui" and "@tamagui/*" dependency is on the same version, we have a CLI tool to help: 

  npx @tamagui/cli check
` : "Missing theme.";

// node_modules/@tamagui/web/dist/esm/config.mjs
var conf;
var setConfigCalledByThisInstance = false;
var haventCalledErrorMessage = process.env.NODE_ENV === "development" ? `
Haven't called createTamagui yet. ${MISSING_THEME_MESSAGE}
` : "\u274C Error 001";
var getConfigFromGlobalOrLocal = () => conf || (globalThis.__tamaguiConfig ? (process.env.NODE_ENV === "development" && !globalThis.__tamaguiHasWarnedGlobalFallback && !globalThis.__tamaguiPendingCheck && (globalThis.__tamaguiPendingCheck = true, setTimeout(() => {
  !setConfigCalledByThisInstance && !globalThis.__tamaguiHasWarnedGlobalFallback && (globalThis.__tamaguiHasWarnedGlobalFallback = true, console.warn("Tamagui: Using global config fallback. This may indicate duplicate tamagui instances (e.g., from Vite SSR bundling). This is handled automatically, but may cause issues.")), globalThis.__tamaguiPendingCheck = false;
}, 500)), globalThis.__tamaguiConfig) : null);
var getSetting = (key) => {
  var _a2;
  const config2 = getConfigFromGlobalOrLocal();
  if (process.env.NODE_ENV === "development" && !config2) throw new Error(haventCalledErrorMessage);
  return (_a2 = config2.settings[key]) != null ? _a2 : (
    // @ts-expect-error
    config2[key]
  );
};
var getConfig = () => {
  const config2 = getConfigFromGlobalOrLocal();
  if (!config2) throw new Error(process.env.NODE_ENV !== "production" ? "Missing tamagui config, you either have a duplicate config, or haven't set it up. Be sure createTamagui is called before rendering. Also, make sure all of your tamagui dependencies are on the same version (`tamagui`, `@tamagui/package-name`, etc.) not just in your package.json, but in your lockfile." : "Err0");
  return config2;
};
var getConfigMaybe = () => getConfigFromGlobalOrLocal();
var tokensMerged;
var getTokens = ({
  prefixed
} = {}) => {
  const config2 = getConfigFromGlobalOrLocal();
  if (process.env.NODE_ENV === "development" && !config2) throw new Error(haventCalledErrorMessage);
  const {
    tokens: tokens3,
    tokensParsed
  } = config2;
  return prefixed === false ? tokens3 : prefixed === true ? tokensParsed : tokensMerged;
};
var getTokenObject = (value, group) => {
  var _a2, _b2, _c;
  return (_c = getConfigFromGlobalOrLocal().specificTokens[value]) != null ? _c : group ? (_a2 = tokensMerged[group]) == null ? void 0 : _a2[value] : (_b2 = tokensMerged[Object.keys(tokensMerged).find((cat) => tokensMerged[cat][value]) || ""]) == null ? void 0 : _b2[value];
};
var getToken = (value, group, useVariable = isWeb) => {
  const token = getTokenObject(value, group);
  return useVariable ? token == null ? void 0 : token.variable : token == null ? void 0 : token.val;
};
var getTokenValue = (value, group) => {
  if (!(value === "unset" || value === "auto")) return getToken(value, group, false);
};
var devConfig;

// node_modules/@tamagui/web/dist/esm/helpers/mediaObjectToString.mjs
function camelToHyphen(str) {
  return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`).toLowerCase();
}
var cache2 = /* @__PURE__ */ new WeakMap();
function mediaObjectToString(query) {
  if (typeof query == "string") return query;
  if (cache2.has(query)) return cache2.get(query);
  const res = Object.entries(query).map(([feature, value]) => (feature = camelToHyphen(feature), typeof value == "string" ? `(${feature}: ${value})` : (typeof value == "number" && /[height|width]$/.test(feature) && (value = `${value}px`), `(${feature}: ${value})`))).join(" and ");
  return cache2.set(query, res), res;
}

// node_modules/@tamagui/web/dist/esm/helpers/mediaState.mjs
var mediaState = (
  // development only safeguard
  process.env.NODE_ENV === "development" ? new Proxy({}, {
    get(target, key) {
      if (typeof key == "string" && key[0] === "$" && // dont error on $$typeof
      key[1] !== "$") throw new Error(`Access mediaState should not use "$": ${key}`);
      return Reflect.get(target, key);
    }
  }) : {}
);
var mediaQueryConfig = {};
var getMedia = () => mediaState;
var mediaKeys = /* @__PURE__ */ new Set();

// node_modules/@tamagui/web/dist/esm/helpers/getGroupPropParts.mjs
function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}
function isValidPseudo(str) {
  return str ? kebabToCamel(str) in pseudoPriorities : false;
}
function getGroupPropParts(groupProp) {
  const m = getMedia(), [_, name, a, b, c] = groupProp.split("-"), m2 = a && b ? `${a}-${b}` : "", media2 = m2 && m2 in m && m2 || a && a in m && a || void 0;
  let pseudoCandidate = media2 ? media2 === m2 ? c : b ? `${b}${c ? `-${c}` : ""}` : void 0 : a ? `${a}${b ? `-${b}` : ""}${c ? `-${c}` : ""}` : void 0;
  return pseudoCandidate && !isValidPseudo(pseudoCandidate) && (process.env.NODE_ENV === "development" && console.warn(`Unknown group prop part "${pseudoCandidate}" in "${groupProp}". If this is a media query, ensure it's defined in your tamagui config.`), pseudoCandidate = void 0), {
    name,
    pseudo: pseudoCandidate,
    media: media2
  };
}

// node_modules/@tamagui/web/dist/esm/helpers/createMediaStyle.mjs
var MEDIA_SEP = "_";
var prefixes = null;
var selectors = null;
var groupPseudoToPseudoCSSMap = {
  press: "active",
  focusVisible: "focus-visible",
  focusWithin: "focus-within"
};
var specificities = new Array(5).fill(0).map((_, i) => new Array(i).fill(":root").join(""));
function getThemeOrGroupSelector(name, styleInner, isGroup, groupParts, isTheme = false, precedenceImportancePrefix = "") {
  const selectorStart = styleInner.lastIndexOf(":root") + 5, selectorEnd = styleInner.lastIndexOf("{"), selector = styleInner.slice(selectorStart, selectorEnd), precedenceSpace = getSetting("addThemeClassName") !== false && isTheme ? "" : " ", pseudoSelectorName = groupParts.pseudo ? groupPseudoToPseudoCSSMap[groupParts.pseudo] || groupParts.pseudo : void 0, pseudoSelector = pseudoSelectorName ? `:${pseudoSelectorName}` : "", presedencePrefix = `:root${precedenceImportancePrefix}${precedenceSpace}`, mediaSelector = `.t_${isGroup ? "group_" : ""}${name}${pseudoSelector}`;
  return [selector, `${presedencePrefix}${mediaSelector} ${selector.replaceAll(":root", "")}`];
}
var createMediaStyle = (styleObject, mediaKeyIn, mediaQueries, type, negate, priority) => {
  const [property, , identifier, pseudoIn, rules] = styleObject, isTheme = type === "theme", isPlatform = type === "platform", isGroup = type === "group", isNonWindowMedia = isTheme || isPlatform || isGroup, negKey = negate ? "0" : "", ogPrefix = identifier.slice(0, identifier.indexOf("-") + 1), id = `${ogPrefix}${MEDIA_SEP}${mediaKeyIn.replace("-", "")}${negKey}${MEDIA_SEP}`;
  let styleRule = "", groupPriority = "", groupMediaKey, containerName, nextIdentifier = identifier.replace(ogPrefix, id), styleInner = rules.map((rule) => rule.replaceAll(identifier, nextIdentifier)).join(";"), isHover = false;
  if (isNonWindowMedia) {
    let specificity = (priority || 0) + (isGroup || isPlatform ? 1 : 0);
    if (isTheme || isGroup) {
      const groupParts = getGroupPropParts(isTheme ? "theme-" + mediaKeyIn : mediaKeyIn), {
        name,
        media: media2,
        pseudo
      } = groupParts;
      groupMediaKey = media2, isGroup && (containerName = name), (pseudo === "press" || pseudoIn === "active") && (specificity += 2), pseudo === "hover" && (isHover = true);
      const [selector, nextSelector] = getThemeOrGroupSelector(name, styleInner, isGroup, groupParts, isTheme, specificities[specificity]);
      styleRule = styleInner.replace(selector, nextSelector);
    } else styleRule = `${specificities[specificity]}${styleInner}`;
  }
  if (!isNonWindowMedia || groupMediaKey) {
    if (!selectors) {
      const mediaKeys2 = Object.keys(mediaQueries);
      selectors = Object.fromEntries(mediaKeys2.map((key) => [key, mediaObjectToString(mediaQueries[key])])), prefixes = Object.fromEntries(mediaKeys2.map((k, index) => [k, new Array(index + 1).fill(":root").join("")]));
    }
    const mediaKey = groupMediaKey || mediaKeyIn, mediaSelector = selectors[mediaKey], mediaQuery = `${negate ? "not all and " : ""}${mediaSelector}`, precedenceImportancePrefix = groupMediaKey ? groupPriority : prefixes[mediaKey], prefix = groupMediaKey ? `@container ${containerName}` : "@media";
    groupMediaKey && (styleInner = styleRule), styleInner.includes(prefix) ? styleRule = styleInner.replace("{", ` and ${mediaQuery} {`).replace("and screen and", "and") : styleRule = `${prefix} ${mediaQuery}{${precedenceImportancePrefix}${styleInner}}`, groupMediaKey && (styleRule = `@supports (contain: ${getSetting("webContainerType") || "inline-size"}) {${styleRule}}`);
  }
  return isHover && (styleRule = `@media (hover:hover){${styleRule}}`), [property, void 0, nextIdentifier, void 0, [styleRule]];
};

// node_modules/@tamagui/web/dist/esm/hooks/useMedia.mjs
var mediaKeyRegex = /\$(platform|theme|group)-/;
var isMediaKey = (key) => key[0] !== "$" ? false : !!(mediaKeys.has(key) || mediaKeyRegex.test(key));
var getMediaKey = (key) => {
  if (key[0] !== "$") return false;
  if (mediaKeys.has(key)) return true;
  const match = key.match(mediaKeyRegex);
  return match ? match[1] : false;
};
var initState;
var mediaKeysOrdered;
var getMediaKeyImportance = (key) => {
  if (process.env.NODE_ENV === "development" && key[0] === "$") throw new Error("use short key");
  return mediaKeysOrdered.indexOf(key) + 100;
};
var listeners = /* @__PURE__ */ new Set();
var States = /* @__PURE__ */ new WeakMap();
function setMediaShouldUpdate(ref, enabled, keys) {
  const cur = States.get(ref);
  (!cur || cur.enabled !== enabled || keys) && States.set(ref, {
    ...cur,
    enabled,
    keys
  });
}
function subscribe(subscriber) {
  return listeners.add(subscriber), () => {
    listeners.delete(subscriber);
  };
}
function useMedia(componentContext, debug) {
  const componentState = componentContext ? States.get(componentContext) : null, internalRef = (0, import_react6.useRef)(null);
  internalRef.current || (internalRef.current = {
    keys: /* @__PURE__ */ new Set(),
    lastState: getMedia()
  }), internalRef.current.pendingState && (internalRef.current.lastState = internalRef.current.pendingState, internalRef.current.pendingState = void 0);
  const {
    keys
  } = internalRef.current;
  keys.size && keys.clear();
  const state2 = (0, import_react6.useSyncExternalStore)(subscribe, () => {
    const curKeys2 = (componentState == null ? void 0 : componentState.keys) || keys, {
      lastState,
      pendingState
    } = internalRef.current;
    if (!curKeys2.size) return lastState;
    const ms = getMedia();
    for (const key of curKeys2) if (ms[key] !== (pendingState || lastState)[key]) return process.env.NODE_ENV === "development" && debug && console.warn("useMedia() \u270D\uFE0F", key, lastState[key], "=>", ms[key]), (componentContext == null ? void 0 : componentContext.mediaEmit) ? (componentContext.mediaEmit(ms), internalRef.current.pendingState = ms, lastState) : (internalRef.current.lastState = ms, ms);
    return lastState;
  }, getServerSnapshot);
  return new Proxy(state2, {
    get(_, key) {
      return !disableMediaTouch && typeof key == "string" && keys.add(key), Reflect.get(state2, key);
    }
  });
}
var getServerSnapshot = () => initState;
var disableMediaTouch = false;
function _disableMediaTouch(val) {
  disableMediaTouch = val;
}
function getMediaState(mediaGroups, layout) {
  disableMediaTouch = true;
  let res;
  try {
    res = Object.fromEntries([...mediaGroups].map((mediaKey) => [mediaKey, mediaKeyMatch(mediaKey, layout)]));
  } finally {
    disableMediaTouch = false;
  }
  return res;
}
var getMediaImportanceIfMoreImportant = (mediaKey, key, styleState, isSizeMedia) => {
  const importance = isSizeMedia ? getMediaKeyImportance(mediaKey) : defaultMediaImportance, usedKeys = styleState.usedKeys;
  return !usedKeys[key] || importance > usedKeys[key] ? importance : null;
};
function mediaKeyMatch(key, dimensions) {
  const mediaQueries = mediaQueryConfig[key];
  return Object.keys(mediaQueries).every((query) => {
    const expectedVal = +mediaQueries[query], isMax = query.startsWith("max"), isWidth = query.endsWith("Width"), givenVal = dimensions[isWidth ? "width" : "height"];
    return isMax ? givenVal < expectedVal : givenVal > expectedVal;
  });
}

// node_modules/@tamagui/web/dist/esm/hooks/useTheme.mjs
var import_react8 = require("react");

// node_modules/@tamagui/simple-hash/dist/esm/index.mjs
var cache3 = /* @__PURE__ */ new Map();
var cacheSize = 0;
var simpleHash = (strIn, hashMin = 10) => {
  if (cache3.has(strIn)) return cache3.get(strIn);
  let str = strIn;
  str[0] === "v" && str.startsWith("var(") && (str = str.slice(6, str.length - 1));
  let hash = 0, valids = "", added = 0;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    if (hashMin !== "strict" && added <= hashMin) {
      const char = str.charCodeAt(i);
      if (char === 46) {
        valids += "--";
        continue;
      }
      if (isValidCSSCharCode(char)) {
        added++, valids += str[i];
        continue;
      }
    }
    hash = hashChar(hash, str[i]);
  }
  const res = valids + (hash ? Math.abs(hash) : "");
  return cacheSize > 1e4 && (cache3.clear(), cacheSize = 0), cache3.set(strIn, res), cacheSize++, res;
};
var hashChar = (hash, c) => Math.imul(31, hash) + c.charCodeAt(0) | 0;
function isValidCSSCharCode(code) {
  return (
    // A-Z
    code >= 65 && code <= 90 || // a-z
    code >= 97 && code <= 122 || // _
    code === 95 || // -
    code === 45 || // 0-9
    code >= 48 && code <= 57
  );
}

// node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.mjs
function composeEventHandlers(og, next, {
  checkDefaultPrevented = true
} = {}) {
  return !og || !next ? next || og || void 0 : (event) => {
    if (og == null ? void 0 : og(event), !event || !(checkDefaultPrevented && typeof event == "object" && "defaultPrevented" in event) || // @ts-ignore
    "defaultPrevented" in event && !event.defaultPrevented) return next == null ? void 0 : next(event);
  };
}

// node_modules/@tamagui/helpers/dist/esm/types.mjs
var StyleObjectProperty = 0;
var StyleObjectIdentifier = 2;
var StyleObjectPseudo = 3;
var StyleObjectRules = 4;

// node_modules/@tamagui/helpers/dist/esm/webOnlyStyleProps.mjs
var webOnlyStylePropsView = {
  transition: true,
  textWrap: true,
  backdropFilter: true,
  WebkitBackdropFilter: true,
  background: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: true,
  backgroundOrigin: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundSize: true,
  borderBottomStyle: true,
  borderImage: true,
  borderLeftStyle: true,
  borderRightStyle: true,
  borderTopStyle: true,
  caretColor: true,
  clipPath: true,
  contain: true,
  containerType: true,
  content: true,
  float: true,
  mask: true,
  maskBorder: true,
  maskBorderMode: true,
  maskBorderOutset: true,
  maskBorderRepeat: true,
  maskBorderSlice: true,
  maskBorderSource: true,
  maskBorderWidth: true,
  maskClip: true,
  maskComposite: true,
  maskImage: true,
  maskMode: true,
  maskOrigin: true,
  maskPosition: true,
  maskRepeat: true,
  maskSize: true,
  maskType: true,
  objectFit: true,
  objectPosition: true,
  overflowBlock: true,
  overflowInline: true,
  overflowX: true,
  overflowY: true,
  // NOTE: pointerEvents is NOT web-only - it's a core React Native View prop (not a style)
  pointerEvents: true,
  scrollbarWidth: true,
  textEmphasis: true,
  touchAction: true,
  transformStyle: true,
  userSelect: true,
  willChange: true
};
var webOnlyStylePropsText = {
  whiteSpace: true,
  wordWrap: true,
  textOverflow: true,
  textDecorationDistance: true,
  // cursor: now cross-platform - in stylePropsView
  WebkitLineClamp: true,
  WebkitBoxOrient: true
};

// node_modules/@tamagui/helpers/dist/esm/validStyleProps.mjs
var cssShorthandLonghands = {
  // border longhands
  borderWidth: true,
  borderStyle: true,
  borderColor: true,
  borderTopWidth: true,
  borderTopStyle: true,
  borderTopColor: true,
  borderRightWidth: true,
  borderRightStyle: true,
  borderRightColor: true,
  borderBottomWidth: true,
  borderBottomStyle: true,
  borderBottomColor: true,
  borderLeftWidth: true,
  borderLeftStyle: true,
  borderLeftColor: true,
  // outline longhands
  outlineWidth: true,
  outlineStyle: true,
  outlineColor: true,
  outlineOffset: true
};
var textColors = {
  color: true,
  textDecorationColor: true,
  textShadowColor: true
};
var tokenCategories = {
  radius: {
    borderRadius: true,
    borderTopLeftRadius: true,
    borderTopRightRadius: true,
    borderBottomLeftRadius: true,
    borderBottomRightRadius: true,
    // logical
    borderStartStartRadius: true,
    borderStartEndRadius: true,
    borderEndStartRadius: true,
    borderEndEndRadius: true
  },
  size: {
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true,
    blockSize: true,
    minBlockSize: true,
    maxBlockSize: true,
    inlineSize: true,
    minInlineSize: true,
    maxInlineSize: true
  },
  zIndex: {
    zIndex: true
  },
  color: {
    backgroundColor: true,
    borderColor: true,
    borderBlockStartColor: true,
    borderBlockEndColor: true,
    borderBlockColor: true,
    borderBottomColor: true,
    borderInlineColor: true,
    borderInlineStartColor: true,
    borderInlineEndColor: true,
    borderTopColor: true,
    borderLeftColor: true,
    borderRightColor: true,
    borderEndColor: true,
    borderStartColor: true,
    shadowColor: true,
    ...textColors,
    // outlineColor is supported on RN 0.77+ (New Architecture)
    outlineColor: true,
    caretColor: true
  }
};
var stylePropsUnitless = {
  WebkitLineClamp: true,
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  gridTemplateColumns: true,
  gridTemplateAreas: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var stylePropsTransform = {
  x: true,
  y: true,
  scale: true,
  perspective: true,
  scaleX: true,
  scaleY: true,
  skewX: true,
  skewY: true,
  matrix: true,
  rotate: true,
  rotateY: true,
  rotateX: true,
  rotateZ: true
};
var stylePropsView = {
  backfaceVisibility: true,
  borderCurve: true,
  cursor: true,
  borderBottomEndRadius: true,
  borderBottomStartRadius: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderBlockWidth: true,
  borderBlockEndWidth: true,
  borderBlockStartWidth: true,
  borderInlineWidth: true,
  borderInlineEndWidth: true,
  borderInlineStartWidth: true,
  borderStyle: true,
  borderBlockStyle: true,
  borderBlockEndStyle: true,
  borderBlockStartStyle: true,
  borderInlineStyle: true,
  borderInlineEndStyle: true,
  borderInlineStartStyle: true,
  borderTopEndRadius: true,
  borderTopStartRadius: true,
  borderTopWidth: true,
  borderWidth: true,
  transform: true,
  transformOrigin: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  borderEndWidth: true,
  borderStartWidth: true,
  bottom: true,
  display: true,
  end: true,
  flexBasis: true,
  flexDirection: true,
  flexWrap: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  justifyContent: true,
  left: true,
  margin: true,
  marginBlock: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginInline: true,
  marginInlineStart: true,
  marginInlineEnd: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  overflow: true,
  padding: true,
  paddingBottom: true,
  paddingInline: true,
  paddingBlock: true,
  paddingBlockStart: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  position: true,
  right: true,
  start: true,
  top: true,
  inset: true,
  insetBlock: true,
  insetBlockEnd: true,
  insetBlockStart: true,
  insetInline: true,
  insetInlineEnd: true,
  insetInlineStart: true,
  direction: true,
  shadowOffset: true,
  shadowRadius: true,
  ...tokenCategories.color,
  ...tokenCategories.radius,
  ...tokenCategories.size,
  ...tokenCategories.radius,
  ...stylePropsTransform,
  ...stylePropsUnitless,
  ...isAndroid ? {
    elevationAndroid: true
  } : {},
  boxShadow: true,
  border: true,
  filter: true,
  // RN 0.76+ supports linear-gradient via backgroundImage
  backgroundImage: true,
  // the actual RN 0.76+ prop name (backgroundImage expands to this on native)
  experimental_backgroundImage: true,
  // RN 0.76/0.77+ style props (New Architecture)
  boxSizing: true,
  mixBlendMode: true,
  isolation: true,
  outline: true,
  outlineColor: true,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
  // web-only for convenience - tree-shaken on native
  ...webOnlyStylePropsView
};
var stylePropsFont = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  fontVariant: true,
  letterSpacing: true,
  lineHeight: true,
  textTransform: true
};
var stylePropsTextOnly = {
  ...stylePropsFont,
  textAlign: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  ...textColors,
  textShadow: true,
  textShadowOffset: true,
  textShadowRadius: true,
  userSelect: true,
  verticalAlign: true,
  // web-only text props - tree-shaken on native
  ...webOnlyStylePropsText
};
var stylePropsText = {
  ...stylePropsView,
  ...stylePropsTextOnly
};
var stylePropsAll = stylePropsText;
var validPseudoKeys = {
  enterStyle: true,
  exitStyle: true,
  hoverStyle: true,
  pressStyle: true,
  focusStyle: true,
  disabledStyle: true,
  focusWithinStyle: true,
  focusVisibleStyle: true
};
var validStyles = stylePropsView;

// node_modules/@tamagui/helpers/dist/esm/withStaticProperties.mjs
var Decorated = /* @__PURE__ */ Symbol();
var withStaticProperties = (component, staticProps) => (Object.assign(component, staticProps), component[Decorated] = true, component);

// node_modules/@tamagui/web/dist/esm/createVariable.mjs
function constructCSSVariableName(name) {
  return `var(--${process.env.TAMAGUI_CSS_VARIABLE_PREFIX || ""}${name})`;
}
var createVariable = (props, skipHash = false) => {
  if (!skipHash && isVariable(props)) return props;
  const {
    key,
    name,
    val
  } = props;
  return {
    isVar: true,
    key,
    name: skipHash ? name : simpleHash(name, 40),
    val,
    variable: isWeb ? skipHash ? constructCSSVariableName(name) : createCSSVariable(name) : ""
  };
};
function variableToString(vrble, getValue2 = false) {
  return isVariable(vrble) ? !getValue2 && isWeb && vrble.variable ? vrble.variable : `${vrble.val}` : `${vrble || ""}`;
}
function isVariable(v) {
  return v && typeof v == "object" && "isVar" in v;
}
function getVariable(nameOrVariable, group = "size") {
  var _a2, _b2;
  if (nameOrVariable == null ? void 0 : nameOrVariable.dynamic) return nameOrVariable;
  if (setDidGetVariableValue(true), isVariable(nameOrVariable)) return variableToString(nameOrVariable);
  const tokens3 = getConfig().tokensParsed;
  return variableToString((_b2 = (_a2 = tokens3[group]) == null ? void 0 : _a2[nameOrVariable]) != null ? _b2 : nameOrVariable);
}
var accessed = false;
var setDidGetVariableValue = (val) => accessed = val;
var didGetVariableValue = () => accessed;
function getVariableValue(v, group) {
  var _a2;
  if (isVariable(v)) return setDidGetVariableValue(true), v.val;
  if (group) {
    const token = (_a2 = getConfig().tokensParsed[group]) == null ? void 0 : _a2[v];
    if (token) return setDidGetVariableValue(true), token.val;
  }
  return v;
}
var createCSSVariable = (nameProp, includeVar = true) => {
  if (process.env.NODE_ENV === "development" && (!nameProp || typeof nameProp != "string")) throw new Error(`createCSSVariable expected string, got: ${nameProp}`);
  const name = simpleHash(nameProp, 60);
  return includeVar ? constructCSSVariableName(name) : name;
};

// node_modules/@tamagui/web/dist/esm/hooks/getThemeProxied.mjs
var cache4 = /* @__PURE__ */ new Map();
var curKeys;
var curSchemeKeys;
var curProps;
var curState;
var emptyObject = {};
function getThemeProxied(_props, _state, _keys, _schemeKeys) {
  if (!(_state == null ? void 0 : _state.theme)) return emptyObject;
  if (curKeys = _keys, curSchemeKeys = _schemeKeys, curProps = _props, curState = _state, cache4.has(curState.theme)) return cache4.get(curState.theme);
  const config2 = getConfig();
  function track(key, schemeOptimized = false) {
    curKeys && (curKeys.current || (curKeys.current = /* @__PURE__ */ new Set()), curKeys.current.add(key), schemeOptimized && curSchemeKeys && (curSchemeKeys.current || (curSchemeKeys.current = /* @__PURE__ */ new Set()), curSchemeKeys.current.add(key)), process.env.NODE_ENV === "development" && curProps.debug && console.info(` \u{1F3A8} useTheme() tracking key: ${key} schemeOptimized=${schemeOptimized}`));
  }
  const proxied = Object.fromEntries(Object.entries(_state.theme).flatMap(([key, value]) => {
    const proxied2 = {
      ...value,
      get val() {
        return globalThis.tamaguiAvoidTracking || track(key, false), value.val;
      },
      get(platform) {
        if (!curState) return;
        const outVal = getVariable(value), {
          name,
          scheme
        } = curState;
        return outVal;
      }
    };
    return [[key, proxied2], [`$${key}`, proxied2]];
  }));
  return cache4.set(_state.theme, proxied), proxied;
}

// node_modules/@tamagui/web/dist/esm/hooks/useThemeState.mjs
var import_react7 = require("react");
var ThemeStateContext = (0, import_react7.createContext)("");
var allListeners = /* @__PURE__ */ new Map();
var listenersByParent = {};
var HasRenderedOnce = /* @__PURE__ */ new WeakMap();
var HadTheme = /* @__PURE__ */ new WeakMap();
var PendingUpdate = /* @__PURE__ */ new Map();
var states = /* @__PURE__ */ new Map();
var localStates = /* @__PURE__ */ new Map();
var shouldForce = false;
var getThemeState = (id) => states.get(id);
var themes = null;
var rootThemeState = null;
var useThemeState = (props, isRoot = false, keys, schemeKeys) => {
  const {
    disable
  } = props, parentId = (0, import_react7.useContext)(ThemeStateContext);
  if (!parentId && !isRoot) throw new Error(process.env.NODE_ENV === "development" ? `${MISSING_THEME_MESSAGE}

Looked for theme${props.name ? ` "${props.name}"` : ""}${props.componentName ? ` (component: ${props.componentName})` : ""}, but no parent theme context was found (parentId: ${parentId}).` : MISSING_THEME_MESSAGE);
  if (disable) return states.get(parentId) || {
    id: "",
    name: "light",
    theme: getConfig().themes.light
    // inverses: 0,
  };
  const id = (0, import_react7.useId)(), subscribe3 = (0, import_react7.useCallback)((cb) => (listenersByParent[parentId] || (listenersByParent[parentId] = /* @__PURE__ */ new Set()), listenersByParent[parentId].add(id), allListeners.set(id, () => {
    PendingUpdate.set(id, shouldForce ? "force" : true), cb();
  }), () => {
    allListeners.delete(id), listenersByParent[parentId].delete(id), localStates.delete(id), states.delete(id), PendingUpdate.delete(id);
  }), [id, parentId]), propsKey = getPropsKey(props), getSnapshot = () => {
    var _a2, _b2, _c, _d, _e, _f;
    let local = localStates.get(id);
    const parentState = states.get(parentId), isSchemeOnlyChange = false, keysSize = (_b2 = (_a2 = keys == null ? void 0 : keys.current) == null ? void 0 : _a2.size) != null ? _b2 : 0, allKeysSchemeOptimized = ((_d = (_c = schemeKeys == null ? void 0 : schemeKeys.current) == null ? void 0 : _c.size) != null ? _d : 0) === keysSize && keysSize > 0, canSkipForSchemeChange = isSchemeOnlyChange && allKeysSchemeOptimized, needsUpdate = props.passThrough ? false : isRoot || props.name === "light" || props.name === "dark" || props.name === null ? true : HasRenderedOnce.get(keys) ? canSkipForSchemeChange ? false : ((_e = keys == null ? void 0 : keys.current) == null ? void 0 : _e.size) ? true : (_f = props.needsUpdate) == null ? void 0 : _f.call(props) : true, [rerender, next] = getNextState(local, props, propsKey, isRoot, id, parentId, needsUpdate, PendingUpdate.get(id));
    return PendingUpdate.delete(id), (!local || rerender) && (local = {
      ...next
    }, localStates.set(id, local)), process.env.NODE_ENV === "development" && props.debug === "verbose" && (console.groupCollapsed(` ${id} getSnapshot ${rerender}`, local.name, ">", next.name), console.info({
      props,
      propsKey,
      isRoot,
      parentId,
      local,
      next,
      needsUpdate,
      isSchemeOnlyChange,
      allKeysSchemeOptimized,
      canSkipForSchemeChange
    }), console.groupEnd()), Object.assign(local, next), local.id = id, states.set(id, next), local;
  };
  process.env.NODE_ENV === "development" && globalThis.time && globalThis.time`theme-prep-uses`;
  const state2 = (0, import_react7.useSyncExternalStore)(subscribe3, getSnapshot, getSnapshot);
  return useIsomorphicLayoutEffect(() => {
    var _a2;
    if (!HasRenderedOnce.get(keys)) {
      HasRenderedOnce.set(keys, true);
      return;
    }
    if (!propsKey) {
      HadTheme.get(keys) && scheduleUpdate(id), HadTheme.set(keys, false);
      return;
    }
    process.env.NODE_ENV === "development" && props.debug === "verbose" && console.warn(` \xB7 useTheme(${id}) scheduleUpdate`, propsKey, (_a2 = states.get(id)) == null ? void 0 : _a2.name), scheduleUpdate(id), HadTheme.set(keys, true);
  }, [keys, propsKey]), state2;
};
var getNextState = (lastState, props, propsKey, isRoot = false, id, parentId, needsUpdate, pendingUpdate) => {
  const {
    debug
  } = props, parentState = states.get(parentId);
  if (props.passThrough) return [false, lastState || parentState || {
    name: ""
  }];
  themes || (themes = getConfig().themes);
  const name = !propsKey && (!lastState || !(lastState == null ? void 0 : lastState.isNew)) ? null : getNewThemeName(parentState == null ? void 0 : parentState.name, props, pendingUpdate === "force" ? true : !!needsUpdate), isSameAsParent = parentState && (!name || name === parentState.name), shouldRerender = !!(pendingUpdate === "force" || needsUpdate && (pendingUpdate || (lastState == null ? void 0 : lastState.name) !== (parentState == null ? void 0 : parentState.name)));
  if (process.env.NODE_ENV === "development" && debug === "verbose") {
    const message = ` \xB7 useTheme(${id}) getNextState => ${name} needsUpdate ${needsUpdate} shouldRerender ${shouldRerender}`;
    console.groupCollapsed(message), console.trace({
      name,
      lastState,
      parentState,
      props,
      propsKey,
      id,
      isSameAsParent
    }), console.groupEnd();
  }
  if (isSameAsParent) return [shouldRerender, {
    ...parentState,
    isNew: false
  }];
  if (!name) {
    const next = lastState != null ? lastState : parentState;
    if (!next) throw new Error(process.env.NODE_ENV === "development" ? `${MISSING_THEME_MESSAGE}

Looked for theme${props.name ? ` "${props.name}"` : ""}${props.componentName ? ` (component: ${props.componentName})` : ""}, but no theme state was resolved (parentId: ${parentId}, id: ${id}).` : MISSING_THEME_MESSAGE);
    return shouldRerender ? [true, {
      ...parentState || lastState
    }] : [false, next];
  }
  const scheme = getScheme(name), isInverse = parentState && scheme !== parentState.scheme, nextState = {
    id,
    name,
    theme: themes[name],
    scheme,
    parentId,
    parentName: parentState == null ? void 0 : parentState.name,
    // inverses,
    isInverse,
    isNew: true
  };
  if (isRoot && (rootThemeState = nextState), pendingUpdate !== "force" && lastState && lastState.name === name) return [false, nextState];
  const shouldAvoidRerender = pendingUpdate !== "force" && lastState && !needsUpdate && nextState.name === lastState.name;
  return process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(` \xB7 useTheme(${id}) \u23ED\uFE0F ${name} shouldAvoidRerender: ${shouldAvoidRerender}`), console.info({
    lastState,
    needsUpdate,
    nextState,
    pendingUpdate
  }), console.groupEnd()), shouldAvoidRerender ? [false, nextState] : [true, nextState];
};
function scheduleUpdate(id) {
  const queue = [id], visited = /* @__PURE__ */ new Set();
  for (; queue.length; ) {
    const parent = queue.shift(), children = listenersByParent[parent];
    if (children) for (const childId of children) visited.has(childId) || (visited.add(childId), queue.push(childId));
  }
  visited.forEach((childId) => {
    var _a2;
    (_a2 = allListeners.get(childId)) == null ? void 0 : _a2();
  });
}
var validSchemes = {
  light: "light",
  dark: "dark"
};
function getScheme(name) {
  return validSchemes[name.split("_")[0]];
}
function getNewThemeName(parentName = "", props, forceUpdate = false) {
  const {
    name,
    reset
  } = props, componentName = props.unstyled ? void 0 : props.componentName;
  if (name && reset) throw new Error(process.env.NODE_ENV === "production" ? "\u274C004" : "Cannot reset and set a new name at the same time.");
  const {
    themes: themes23
  } = getConfig();
  if (reset) {
    if (parentName === "light" || parentName === "dark") return parentName === "light" ? "dark" : "light";
    const lastPartIndex = parentName.lastIndexOf("_"), name2 = lastPartIndex <= 0 ? parentName : parentName.slice(lastPartIndex), scheme = parentName.slice(0, lastPartIndex);
    return themes23[name2] ? name2 : scheme;
  }
  const parentParts = parentName.split("_"), lastName = parentParts[parentParts.length - 1];
  lastName && lastName[0].toLowerCase() !== lastName[0] && parentParts.pop();
  const subNames = [name && componentName ? `${name}_${componentName}` : void 0, name, componentName].filter(Boolean);
  let found = null;
  if (name) {
    const nameHasScheme = getScheme(name);
    if (nameHasScheme) {
      for (const subName of subNames) if (subName in themes23) {
        found = subName;
        break;
      }
    }
    if (!found && !nameHasScheme && getScheme(parentName)) {
      const potentialBases = [];
      for (let i = parentParts.length; i >= 1; i--) potentialBases.push(parentParts.slice(0, i).join("_"));
      outer: for (const base of potentialBases) {
        const candidates = [componentName ? `${base}_${name}_${componentName}` : void 0, `${base}_${name}`].filter(Boolean);
        for (const potential of candidates) if (potential in themes23) {
          found = potential;
          break outer;
        }
      }
    }
  }
  if (!found) if (!name && componentName) {
    const potential = `${parentParts.join("_")}_${componentName}`;
    potential in themes23 && (found = potential);
  } else {
    const max = parentParts.length;
    for (let i = 0; i <= max; i++) {
      const base = (i === 0 ? parentParts : parentParts.slice(0, -i)).join("_");
      for (const subName of subNames) {
        const potential = base ? `${base}_${subName}` : subName;
        if (potential in themes23) {
          found = potential;
          break;
        }
      }
      if (found) break;
    }
  }
  return !forceUpdate && found === parentName && // if its a scheme only sub-theme, we always consider it "new" because it likely inverses
  // and we want to avoid reparenting
  !validSchemes[found] ? null : found;
}
var getPropsKey = ({
  name,
  reset,
  forceClassName,
  componentName
}) => `${name || ""}${reset || ""}${forceClassName || ""}${componentName || ""}`;
var hasThemeUpdatingProps = (props) => "name" in props || "reset" in props || "forceClassName" in props;

// node_modules/@tamagui/web/dist/esm/hooks/useTheme.mjs
var useThemeWithState = (props, isRoot = false) => {
  const keys = (0, import_react8.useRef)(null), schemeKeys = (0, import_react8.useRef)(null), themeState = useThemeState(props, isRoot, keys, schemeKeys);
  return process.env.NODE_ENV === "development" && !props.passThrough && !(themeState == null ? void 0 : themeState.theme) && process.env.TAMAGUI_DISABLE_NO_THEME_WARNING !== "1" && console.error(`[tamagui] No theme found, this could be due to an invalid theme name (given theme props ${JSON.stringify(props)}).

If this is intended and you are using Tamagui without any themes, you can disable this warning by setting the environment variable TAMAGUI_DISABLE_NO_THEME_WARNING=1`), [props.passThrough ? {} : getThemeProxied(props, themeState, keys, schemeKeys), themeState];
};

// node_modules/@tamagui/compose-refs/dist/esm/compose-refs.mjs
var React2 = __toESM(require("react"), 1);
function setRef(ref, value) {
  typeof ref == "function" ? ref(value) : ref && (ref.current = value);
}
function composeRefs(...refs) {
  return (node2) => refs.forEach((ref) => setRef(ref, node2));
}
function useComposedRefs(...refs) {
  return React2.useCallback(composeRefs(...refs), refs);
}

// node_modules/@tamagui/web/dist/esm/createComponent.mjs
var import_react16 = __toESM(require("react"), 1);

// node_modules/@tamagui/web/dist/esm/constants/isDevTools.mjs
var isDevTools = (() => {
  if (process.env.NODE_ENV === "development") try {
    return new Function("try {return this===window;}catch(e){ return false;}")();
  } catch {
  }
  return false;
})();

// node_modules/@tamagui/web/dist/esm/defaultComponentState.mjs
var defaultComponentState = {
  hover: false,
  press: false,
  pressIn: false,
  focus: false,
  focusVisible: false,
  focusWithin: false,
  unmounted: true,
  disabled: false
};
var defaultComponentStateMounted = {
  ...defaultComponentState,
  unmounted: false
};
var defaultComponentStateShouldEnter = {
  ...defaultComponentState,
  unmounted: "should-enter"
};

// node_modules/@tamagui/web/dist/esm/eventHandling.mjs
function getWebEvents(events, webStyle = true) {
  return {
    onMouseEnter: events.onMouseEnter,
    onMouseLeave: events.onMouseLeave,
    [webStyle ? "onClick" : "onPress"]: events.onPress,
    onMouseDown: events.onPressIn,
    onMouseUp: events.onPressOut,
    onTouchStart: events.onPressIn,
    onTouchEnd: events.onPressOut,
    onFocus: events.onFocus,
    onBlur: events.onBlur
  };
}

// node_modules/@tamagui/web/dist/esm/helpers/getDefaultProps.mjs
var getDefaultProps = (staticConfig, propsComponentName, isSubText) => {
  var _a2, _b2;
  let defaultProps = staticConfig == null ? void 0 : staticConfig.defaultProps;
  const conf4 = getConfig(), name = propsComponentName || (staticConfig == null ? void 0 : staticConfig.componentName) || // important: this is how we end up getting the defaultProps we set in createTamagui
  (staticConfig.isText ? "Text" : "View"), userDefaultProps = (_a2 = conf4 == null ? void 0 : conf4.defaultProps) == null ? void 0 : _a2[name];
  if (userDefaultProps && (defaultProps = {
    ...userDefaultProps,
    ...defaultProps
  }), isSubText) {
    const hasExplicitFontFamily = (_b2 = staticConfig == null ? void 0 : staticConfig.defaultProps) == null ? void 0 : _b2.fontFamily;
    defaultProps = {
      ...defaultProps
    }, hasExplicitFontFamily || (defaultProps.fontFamily = "inherit"), defaultProps.color || (defaultProps.color = "inherit"), defaultProps.whiteSpace === "pre-wrap" && (defaultProps.whiteSpace = "inherit"), defaultProps.wordWrap === "break-word" && (defaultProps.wordWrap = "inherit");
  }
  return defaultProps;
};

// node_modules/@tamagui/web/dist/esm/helpers/getSplitStyles.mjs
var import_react9 = __toESM(require("react"), 1);

// node_modules/@tamagui/web/dist/esm/helpers/defaultOffset.mjs
var defaultOffset = {
  height: 0,
  width: 0
};

// node_modules/@tamagui/web/dist/esm/helpers/normalizeShadow.mjs
function normalizeShadow({
  shadowColor,
  shadowOffset,
  shadowOpacity,
  shadowRadius
}) {
  const {
    height,
    width
  } = shadowOffset || defaultOffset;
  return {
    shadowOffset: {
      width: width || 0,
      height: height || 0
    },
    shadowRadius: shadowRadius || 0,
    // pass color through as-is, opacity applied via color-mix in getCSSStylesAtomic
    shadowColor,
    // default to 1 if not specified (color-mix will handle the opacity)
    shadowOpacity: shadowOpacity != null ? shadowOpacity : 1
  };
}

// node_modules/@tamagui/web/dist/esm/helpers/expandStyles.mjs
function fixStyles(style) {
  var _a2;
  (style.shadowRadius != null || style.shadowColor || style.shadowOpacity != null || style.shadowOffset) && Object.assign(style, normalizeShadow(style));
  for (const key in borderDefaults) key in style && (style[_a2 = borderDefaults[key]] || (style[_a2] = "solid"));
}
var nativeStyle = isWeb ? null : "borderStyle";
var borderDefaults = {
  borderWidth: "borderStyle",
  borderBottomWidth: nativeStyle || "borderBottomStyle",
  borderTopWidth: nativeStyle || "borderTopStyle",
  borderLeftWidth: nativeStyle || "borderLeftStyle",
  borderRightWidth: nativeStyle || "borderRightStyle"
  // TODO: need to add borderBlock and borderInline here, but they are alot and might impact performance
};

// node_modules/@tamagui/web/dist/esm/helpers/normalizeColor.mjs
var normalizeColor = (color2, opacity) => {
  if (color2) return typeof color2 != "string" ? color2 : color2 === "transparent" ? "rgba(0, 0, 0, 0)" : typeof opacity == "number" && opacity < 1 ? `color-mix(in srgb, ${color2} ${Math.round(opacity * 100)}%, transparent)` : color2;
};

// node_modules/@tamagui/web/dist/esm/helpers/normalizeValueWithProperty.mjs
var stylePropsAllPlusTransforms = {
  ...stylePropsAll,
  translateX: true,
  translateY: true
};
function normalizeValueWithProperty(value, property = "") {
  if (!isWeb || stylePropsUnitless[property] || property && !stylePropsAllPlusTransforms[property] || typeof value == "boolean") return value;
  if (value && typeof value == "object") if (typeof value.__getValue == "function") value = value.__getValue();
  else return value;
  let res = value;
  return typeof value == "number" ? res = `${value}px` : property && (res = `${res}`), res;
}

// node_modules/@tamagui/web/dist/esm/helpers/transformsToString.mjs
function transformsToString(transforms) {
  return transforms.map(
    // { scale: 2 } => 'scale(2)'
    // { translateX: 20 } => 'translateX(20px)'
    // { matrix: [1,2,3,4,5,6] } => 'matrix(1,2,3,4,5,6)'
    // { perspective: 1000 } => perspective(1000px)
    (transform) => {
      const type = Object.keys(transform)[0], value = transform[type];
      return type === "matrix" || type === "matrix3d" ? `${type}(${value.join(",")})` : `${type}(${normalizeValueWithProperty(value, type)})`;
    }
  ).join(" ");
}

// node_modules/@tamagui/web/dist/esm/helpers/getCSSStylesAtomic.mjs
function getCSSStylesAtomic(style) {
  styleToCSS(style);
  const out = [];
  for (const key in style) {
    if (key === "$$css") continue;
    const val = style[key];
    if (key in pseudoDescriptors) val && out.push(...getStyleAtomic(val, pseudoDescriptors[key]));
    else if (isMediaKey(key)) for (const subKey in val) {
      const so = getStyleObject(val, subKey);
      so && (so[0] = key, out.push(so));
    }
    else {
      const so = getStyleObject(style, key);
      so && out.push(so);
    }
  }
  return out;
}
var getStyleAtomic = (style, pseudo) => {
  styleToCSS(style);
  const out = [];
  for (const key in style) {
    const so = getStyleObject(style, key, pseudo);
    so && out.push(so);
  }
  return out;
};
var conf2 = null;
var getStyleObject = (style, key, pseudo) => {
  let val = style[key];
  if (val == null) return;
  key === "transform" && Array.isArray(style.transform) && (val = transformsToString(val));
  const value = normalizeValueWithProperty(val, key), hash = simpleHash(typeof value == "string" ? value : `${value}`), pseudoPrefix = pseudo ? `0${pseudo.name}-` : "";
  conf2 || (conf2 = getConfigMaybe());
  const identifier = `_${(conf2 == null ? void 0 : conf2.inverseShorthands[key]) || key}-${pseudoPrefix}${hash}`, rules = createAtomicRules(identifier, key, value, pseudo);
  return [
    // array for performance
    key,
    value,
    identifier,
    pseudo == null ? void 0 : pseudo.name,
    rules
  ];
};
function styleToCSS(style) {
  const {
    shadowOffset,
    shadowRadius,
    shadowColor,
    shadowOpacity
  } = style;
  if (shadowRadius != null || shadowColor || shadowOffset != null || shadowOpacity != null) {
    const offset = shadowOffset || defaultOffset, width = normalizeValueWithProperty(offset.width), height = normalizeValueWithProperty(offset.height), radius2 = normalizeValueWithProperty(shadowRadius), color2 = normalizeColor(shadowColor, shadowOpacity);
    if (color2) {
      const shadow = `${width} ${height} ${radius2} ${color2}`;
      style.boxShadow = style.boxShadow ? `${style.boxShadow}, ${shadow}` : shadow;
    }
    delete style.shadowOffset, delete style.shadowRadius, delete style.shadowColor, delete style.shadowOpacity;
  }
  const {
    textShadowColor,
    textShadowOffset,
    textShadowRadius
  } = style;
  if (textShadowColor || textShadowOffset || textShadowRadius) {
    const {
      height,
      width
    } = textShadowOffset || defaultOffset, radius2 = textShadowRadius || 0, color2 = normalizeValueWithProperty(textShadowColor, "textShadowColor");
    if (color2 && (height !== 0 || width !== 0 || radius2 !== 0)) {
      const blurRadius = normalizeValueWithProperty(radius2), offsetX = normalizeValueWithProperty(width), offsetY = normalizeValueWithProperty(height);
      style.textShadow = `${offsetX} ${offsetY} ${blurRadius} ${color2}`;
    }
    delete style.textShadowColor, delete style.textShadowOffset, delete style.textShadowRadius;
  }
}
function createDeclarationBlock(style, important = false) {
  let next = "";
  for (const [key, value] of style) next += `${hyphenateStyleName(key)}:${value}${important ? " !important" : ""};`;
  return `{${next}}`;
}
var hcache = {};
var toHyphenLower = (match) => `-${match.toLowerCase()}`;
var hyphenateStyleName = (key) => {
  if (key in hcache) return hcache[key];
  const val = key.replace(/[A-Z]/g, toHyphenLower);
  return hcache[key] = val, val;
};
var selectorPriority = (() => {
  const res = {};
  for (const key in pseudoDescriptors) {
    const pseudo = pseudoDescriptors[key];
    res[pseudo.name] = `${[...Array(pseudo.priority)].map(() => ":root").join("")} `;
  }
  return res;
})();
function createAtomicRules(identifier, property, value, pseudo) {
  const pseudoIdPostfix = pseudo ? pseudo.name === "disabled" ? "[aria-disabled]" : `:${pseudo.name}` : "", pseudoSelector = pseudo == null ? void 0 : pseudo.selector, cls = property in cssShorthandLonghands ? `.${identifier}.${identifier}` : `.${identifier}`;
  let selector = pseudo ? pseudoSelector ? `${pseudoSelector} ${cls}` : `${selectorPriority[pseudo.name]} ${cls}${pseudoIdPostfix}` : `:root ${cls}`;
  pseudoSelector === pseudoDescriptors.enterStyle.selector && (selector = `${selector}, .${identifier}${pseudoSelector}`);
  const important = !!pseudo;
  let rules = [];
  switch (property) {
    // Equivalent to using '::placeholder'
    case "placeholderTextColor": {
      const block = createDeclarationBlock([["color", value], ["opacity", 1]], important);
      rules.push(`${selector}::placeholder${block}`);
      break;
    }
    // all webkit prefixed rules
    case "backgroundClip":
    case "userSelect": {
      const webkitProperty = `Webkit${`${property[0].toUpperCase()}${property.slice(1)}`}`, block = createDeclarationBlock([[property, value], [webkitProperty, value]], important);
      rules.push(`${selector}${block}`);
      break;
    }
    // Polyfill for additional 'pointer-events' values
    case "pointerEvents": {
      let finalValue = value;
      value === "auto" || value === "box-only" ? (finalValue = "auto", value === "box-only" && rules.push(`${selector}>*${boxOnly}`)) : (value === "none" || value === "box-none") && (finalValue = "none", value === "box-none" && rules.push(`${selector}>*${boxNone}`));
      const block = createDeclarationBlock([["pointerEvents", finalValue]], true);
      rules.push(`${selector}${block}`);
      break;
    }
    default: {
      const block = createDeclarationBlock([[property, value]], important);
      rules.push(`${selector}${block}`);
      break;
    }
  }
  return (pseudo == null ? void 0 : pseudo.name) === "hover" && (rules = rules.map((r) => `@media (hover) {${r}}`)), rules;
}
var boxNone = createDeclarationBlock([["pointerEvents", "auto"]], true);
var boxOnly = createDeclarationBlock([["pointerEvents", "none"]], true);

// node_modules/@tamagui/web/dist/esm/helpers/insertStyleRule.mjs
var totalSelectorsInserted = /* @__PURE__ */ new Map();
var allSelectors = {};
var allRules = {};
function trackInsertedStyle(id) {
  const next = (totalSelectorsInserted.get(id) || 0) + 1;
  return totalSelectorsInserted.set(id, next), next;
}
var bailAfterEnv = process.env.TAMAGUI_BAIL_AFTER_SCANNING_X_CSS_RULES;
var bailAfter = bailAfterEnv ? +bailAfterEnv : 400;
var sheet = null;
var trackAllRules = true;
function updateRules(identifier, rules) {
  return trackAllRules && (allRules[identifier] = rules.join(" ")), true;
}
var nonce = "";
function insertStyleRules(rulesToInsert) {
  if (!sheet && document.head) {
    const styleTag = document.createElement("style");
    styleTag.id = "_tamagui-styles", nonce && (styleTag.nonce = nonce), sheet = document.head.appendChild(styleTag).sheet;
  }
  if (sheet) for (const key in rulesToInsert) {
    const styleObject = rulesToInsert[key], identifier = styleObject[StyleObjectIdentifier];
    if (!shouldInsertStyleRules(identifier)) continue;
    const rules = styleObject[StyleObjectRules];
    allSelectors[identifier] = rules.join(`
`), trackInsertedStyle(identifier), updateRules(identifier, rules);
    try {
      for (const rule of rules) sheet.insertRule(rule, sheet.cssRules.length);
    } catch {
      process.env.NODE_ENV === "production" && console.error("Error inserting style rule", rules);
    }
  }
}
var maxToInsert = process.env.TAMAGUI_INSERT_SELECTOR_TRIES ? +process.env.TAMAGUI_INSERT_SELECTOR_TRIES : 1;
function shouldInsertStyleRules(identifier) {
  if (process.env.IS_STATIC === "is_static") return true;
  const total = totalSelectorsInserted.get(identifier) || 0;
  return process.env.NODE_ENV === "development" && total > +(process.env.TAMAGUI_STYLE_INSERTION_WARNING_LIMIT || 10) && console.warn('Warning: inserting many CSS rules, you may be animating something and generating many CSS insertions, which can degrade performance. Instead, try using the "disableClassName" property on elements that change styles often. To disable this warning set TAMAGUI_STYLE_INSERTION_WARNING_LIMIT from 50000 to something higher'), total < maxToInsert;
}

// node_modules/@tamagui/web/dist/esm/helpers/isActivePlatform.mjs
function isActivePlatform(key) {
  if (!key.startsWith("$platform")) return true;
  const platform = key.slice(10);
  return (
    // web, ios, android
    platform === currentPlatform || // web, native
    platform === "web"
  );
}

// node_modules/@tamagui/web/dist/esm/helpers/isActiveTheme.mjs
function isActiveTheme(key, activeThemeName) {
  if (key.startsWith("$theme-")) return key.slice(7).startsWith(activeThemeName);
}

// node_modules/@tamagui/web/dist/esm/helpers/log.mjs
function log(...args) {
  if (process.env.NODE_ENV !== "production") {
    _disableMediaTouch(true);
    try {
      return console.info(...args);
    } catch (err) {
      console.error(err);
    } finally {
      _disableMediaTouch(false);
    }
  }
}

// node_modules/@tamagui/web/dist/esm/helpers/expandStyle.mjs
var neg1Flex = [["flexGrow", 0], ["flexShrink", 1], ["flexBasis", "auto"]];
function expandStyle(key, value) {
  if (key === "flex") return value === -1 ? neg1Flex : [["flexGrow", value], ["flexShrink", 1], ["flexBasis", getSetting("styleCompat") === "legacy" ? "auto" : 0]];
  switch (key) {
    case "writingDirection":
      return [["direction", value]];
    // some safari-based browsers seem not to support without -webkit prefix
    case "backdropFilter":
      return [["backdropFilter", value], ["WebkitBackdropFilter", value]];
  }
  if (key in EXPANSIONS) return EXPANSIONS[key].map((k) => [k, value]);
}
var all = ["Top", "Right", "Bottom", "Left"];
var horiz = ["Right", "Left"];
var vert = ["Top", "Bottom"];
var xy = ["X", "Y"];
var EXPANSIONS = {
  borderColor: ["TopColor", "RightColor", "BottomColor", "LeftColor"],
  borderRadius: ["TopLeftRadius", "TopRightRadius", "BottomRightRadius", "BottomLeftRadius"],
  borderWidth: ["TopWidth", "RightWidth", "BottomWidth", "LeftWidth"],
  margin: all,
  marginHorizontal: horiz,
  marginVertical: vert,
  padding: all,
  paddingHorizontal: horiz,
  paddingVertical: vert,
  ...isWeb && {
    // react-native only supports borderStyle
    borderStyle: ["TopStyle", "RightStyle", "BottomStyle", "LeftStyle"],
    // react-native doesn't support X / Y
    overflow: xy,
    overscrollBehavior: xy
  }
};
var _a, _b;
for (const parent in EXPANSIONS) {
  const prefix = parent.slice(0, (_b = (_a = /[A-Z]/.exec(parent)) == null ? void 0 : _a.index) != null ? _b : parent.length);
  EXPANSIONS[parent] = EXPANSIONS[parent].map((k) => `${prefix}${k}`);
}

// node_modules/@tamagui/web/dist/esm/helpers/getVariantExtras.mjs
var cache5 = /* @__PURE__ */ new WeakMap();
var getVariantExtras = (styleState) => {
  if (cache5.has(styleState)) return cache5.get(styleState);
  const {
    props,
    conf: conf4,
    context: context2,
    theme,
    styleProps
  } = styleState, styledContext = styleProps.styledContext;
  let fonts2 = conf4.fontsParsed;
  (context2 == null ? void 0 : context2.language) && (fonts2 = getFontsForLanguage(conf4.fontsParsed, context2.language));
  const next = {
    fonts: fonts2,
    tokens: conf4.tokensParsed,
    theme,
    context: styledContext,
    get fontFamily() {
      return getVariableValue(styleState.fontFamily || styleState.props.fontFamily) || props.fontFamily || getVariableValue(getSetting("defaultFont"));
    },
    get font() {
      return fonts2[this.fontFamily] || (!props.fontFamily || props.fontFamily[0] === "$" ? fonts2[getSetting("defaultFont") || ""] : void 0);
    },
    props
  };
  return cache5.set(styleState, next), next;
};
var fontLanguageCache = /* @__PURE__ */ new WeakMap();
function getFontsForLanguage(fonts2, language) {
  if (fontLanguageCache.has(language)) return fontLanguageCache.get(language);
  const next = {
    ...fonts2,
    ...Object.fromEntries(Object.entries(language).flatMap(([name, lang]) => {
      if (lang === "default") return [];
      const langKey = `$${name}_${lang}`;
      return [[`$${name}`, fonts2[langKey]]];
    }))
  };
  return fontLanguageCache.set(language, next), next;
}

// node_modules/@tamagui/web/dist/esm/helpers/getTokenForKey.mjs
var fontShorthand = {
  fontSize: "size",
  fontWeight: "weight"
};
var didLogMissingToken = false;
var _lastFontFamilyToken = null;
function getLastFontFamilyToken() {
  return _lastFontFamilyToken;
}
function setLastFontFamilyToken(value) {
  _lastFontFamilyToken = value;
}
var getTokenForKey = (key, value, styleProps, styleState) => {
  var _a2, _b2, _c, _d, _e, _f;
  let resolveAs = styleProps.resolveValues || "none";
  if (resolveAs === "none") return value;
  const {
    theme,
    conf: conf4 = getConfig(),
    context: context2,
    fontFamily,
    staticConfig
  } = styleState, themeValue = theme ? theme[value] || theme[value.slice(1)] : void 0, tokensParsed = conf4.tokensParsed;
  let valOrVar, hasSet = false;
  const customTokenAccept = (_a2 = staticConfig == null ? void 0 : staticConfig.accept) == null ? void 0 : _a2[key];
  if (customTokenAccept) {
    const val = themeValue != null ? themeValue : (_b2 = tokensParsed[customTokenAccept]) == null ? void 0 : _b2[value];
    val != null && (resolveAs = "value", valOrVar = val, hasSet = true);
  }
  if (themeValue) {
    if (resolveAs === "except-theme") return value;
    valOrVar = themeValue, process.env.NODE_ENV === "development" && styleState.debug === "verbose" && (globalThis.tamaguiAvoidTracking = true, console.info(` - resolving ${key} to theme value ${value} resolveAs ${resolveAs}`, valOrVar), globalThis.tamaguiAvoidTracking = false), hasSet = true;
  } else {
    if (value in conf4.specificTokens) hasSet = true, valOrVar = conf4.specificTokens[value];
    else {
      switch (key) {
        case "fontFamily": {
          valOrVar = ((_c = ((context2 == null ? void 0 : context2.language) ? getFontsForLanguage(conf4.fontsParsed, context2.language) : conf4.fontsParsed)[value]) == null ? void 0 : _c.family) || value, setLastFontFamilyToken(value), hasSet = true;
          break;
        }
        case "fontSize":
        case "lineHeight":
        case "letterSpacing":
        case "fontWeight": {
          const fam = fontFamily || conf4.defaultFontToken;
          if (fam) {
            const fontsParsed = (context2 == null ? void 0 : context2.language) ? getFontsForLanguage(conf4.fontsParsed, context2.language) : conf4.fontsParsed;
            valOrVar = ((_e = (_d = fontsParsed[fam] || fontsParsed[conf4.defaultFontToken]) == null ? void 0 : _d[fontShorthand[key] || key]) == null ? void 0 : _e[value]) || value, hasSet = true;
          }
          break;
        }
      }
      for (const cat in tokenCategories) if (key in tokenCategories[cat]) {
        const res = (_f = tokensParsed[cat]) == null ? void 0 : _f[value];
        res != null ? (valOrVar = res, hasSet = true) : process.env.NODE_ENV === "development" && process.env.TAMAGUI_DISABLE_MISSING_TOKEN_LOG !== "1" && (didLogMissingToken || (didLogMissingToken = true, console.groupCollapsed(`[tamagui] Warning: missing token ${key} in category ${cat} - ${value} (open for details)`), console.info(`Note: this could just be due to you not setting all the theme tokens Tamagui expects, which is harmless, but
                    it also often can be because you have a duplicated Tamagui in your bundle, which can cause tricky bugs.`), console.info(`To see if you have duplicated dependencies, in Chrome DevTools hit CMD+P and type TamaguiProvider.
                    If you see both a .cjs and a .mjs entry, it's duplicated.`), console.info("You can debug that issue by opening the .mjs and .cjs files and setting a breakpoint at the top of each."), console.info("We only log this warning one time as it's sometimes harmless, to disable this log entirely set process.env.TAMAGUI_DISABLE_MISSING_TOKEN_LOG=1."), console.groupEnd()));
      }
    }
    if (!hasSet) {
      const spaceVar = tokensParsed.space[value];
      spaceVar != null && (valOrVar = spaceVar, hasSet = true);
    }
  }
  if (hasSet) {
    const out = resolveVariableValue(key, valOrVar, resolveAs);
    return process.env.NODE_ENV === "development" && styleState.debug === "verbose" && (globalThis.tamaguiAvoidTracking = true, console.info("resolved", resolveAs, valOrVar, out), globalThis.tamaguiAvoidTracking = false), out;
  }
  process.env.NODE_ENV === "development" && styleState.debug === "verbose" && console.warn(`Warning: no token found for ${key}, omitting`);
};
function resolveVariableValue(key, valOrVar, resolveValues) {
  if (resolveValues === "none") return valOrVar;
  if (isVariable(valOrVar)) {
    if (resolveValues === "value") return valOrVar.val;
    const get = valOrVar == null ? void 0 : valOrVar.get;
    return typeof get == "function" ? get(resolveValues === "web" ? "web" : void 0) : valOrVar.variable;
  }
  return valOrVar;
}

// node_modules/@tamagui/web/dist/esm/helpers/isObj.mjs
var isObj = (x) => x && !Array.isArray(x) && typeof x == "object";

// node_modules/@tamagui/web/dist/esm/helpers/normalizeStyle.mjs
function normalizeStyle(style, disableNormalize = false) {
  const res = {};
  for (let key in style) {
    const prop = style[key];
    if (prop == null) continue;
    if (key in pseudoDescriptors || // this should capture all parent-based styles like media, group, etc
    key[0] === "$" && isObj(prop)) {
      res[key] = normalizeStyle(prop, disableNormalize);
      continue;
    }
    const value = disableNormalize ? prop : normalizeValueWithProperty(prop, key), out = expandStyle(key, value);
    out ? Object.assign(res, Object.fromEntries(out)) : res[key] = value;
  }
  return fixStyles(res), res;
}

// node_modules/@tamagui/web/dist/esm/helpers/platformResolveValue.mjs
var tokenPattern = /(\$[\w.-]+)/g;
function platformResolveValue(_key, value, styleProps, styleState) {
  return value.replace(tokenPattern, (t) => {
    let r = getTokenForKey("size", t, styleProps, styleState);
    return r == null && (r = getTokenForKey("color", t, styleProps, styleState)), r != null ? String(r) : t;
  });
}

// node_modules/@tamagui/web/dist/esm/helpers/resolveCompoundTokens.mjs
var compoundKeys = {
  boxShadow: true,
  textShadow: true,
  filter: true,
  backgroundImage: true,
  border: true,
  outline: true
};
function resolveCompoundTokens(key, value, styleProps, styleState) {
  return !value.includes("$") || !compoundKeys[key] ? value : platformResolveValue(key, value, styleProps, styleState);
}

// node_modules/@tamagui/web/dist/esm/helpers/resolveRem.mjs
function resolveRem(value) {
  return value;
}
function isRemValue(value) {
  return typeof value == "string" && value.includes("rem");
}

// node_modules/@tamagui/web/dist/esm/helpers/nativeOnlyProps.mjs
var nativeOnlyProps = {
  accessibilityElementsHidden: 1,
  accessibilityIgnoresInvertColors: 1,
  accessibilityLanguage: 1,
  adjustsFontSizeToFit: 1,
  allowFontScaling: 1,
  android_hyphenationFrequency: 1,
  dataDetectorType: 1,
  dynamicTypeRamp: 1,
  elevationAndroid: 1,
  ellipsizeMode: 1,
  hapticFeedback: 1,
  hapticStyle: 1,
  hitSlop: 1,
  importantForAccessibility: 1,
  lineBreakStrategyIOS: 1,
  maxFontSizeMultiplier: 1,
  minimumFontScale: 1,
  needsOffscreenAlphaCompositing: 1,
  nextFocusDown: 1,
  nextFocusForward: 1,
  nextFocusLeft: 1,
  nextFocusRight: 1,
  nextFocusUp: 1,
  onAccessibilityAction: 1,
  onAccessibilityEscape: 1,
  onAccessibilityTap: 1,
  onMagicTap: 1,
  onTextLayout: 1,
  pressRetentionOffset: 1,
  selectionColor: 1,
  shouldRasterizeIOS: 1,
  suppressHighlighting: 1,
  textBreakStrategy: 1
};

// node_modules/@tamagui/web/dist/esm/helpers/skipProps.mjs
var skipProps = {
  untilMeasured: 1,
  transition: 1,
  space: 1,
  animateOnly: 1,
  disableClassName: 1,
  debug: 1,
  componentName: 1,
  disableOptimization: 1,
  render: 1,
  style: 1,
  // handled after loop so pseudos set usedKeys and override it if necessary
  group: 1,
  animatePresence: 1
};
process.env.NODE_ENV === "test" && (skipProps["data-test-renders"] = 1);
Object.assign(skipProps, nativeOnlyProps);

// node_modules/@tamagui/web/dist/esm/helpers/propMapper.mjs
var propMapper = (key, value, styleState, disabled, map) => {
  if (disabled) return map(key, value);
  if (setLastFontFamilyToken(null), key === "elevationAndroid") return;
  const {
    conf: conf4,
    styleProps,
    staticConfig
  } = styleState, {
    variants: variants2
  } = staticConfig;
  if (!styleProps.noExpand && variants2 && key in variants2) {
    const variantValue = resolveVariants(key, value, styleProps, styleState, "");
    if (variantValue) {
      variantValue.forEach(([key2, value2]) => map(key2, value2));
      return;
    }
  }
  styleProps.disableExpandShorthands || key in conf4.shorthands && (key = conf4.shorthands[key]);
  const originalValue = value;
  if (value != null) if (typeof value == "string") {
    if (value[0] === "$") value = getTokenForKey(key, value, styleProps, styleState);
    else {
      const resolved = resolveCompoundTokens(key, value, styleProps, styleState);
      value = resolved !== value ? resolved : isRemValue(value) ? resolveRem(value) : value;
    }
  } else isVariable(value) ? value = resolveVariableValue(key, value, styleProps.resolveValues) : isRemValue(value) && (value = resolveRem(value));
  if (value != null) {
    const fontToken = getLastFontFamilyToken();
    key === "fontFamily" && fontToken && (styleState.fontFamily = fontToken);
    const expanded = styleProps.noExpand ? null : expandStyle(key, value);
    if (expanded) {
      const max = expanded.length;
      for (let i = 0; i < max; i++) {
        const [nkey, nvalue] = expanded[i];
        map(nkey, nvalue, originalValue);
      }
    } else map(key, value, originalValue);
  }
};
var resolveVariants = (key, value, styleProps, styleState, parentVariantKey) => {
  const {
    staticConfig,
    conf: conf4,
    debug
  } = styleState, {
    variants: variants2
  } = staticConfig;
  if (!variants2) return;
  let variantValue = getVariantDefinition(variants2[key], value, conf4, styleState);
  if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(`\u2666\uFE0F\u2666\uFE0F\u2666\uFE0F resolve variant ${key}`), console.info({
    key,
    value,
    variantValue,
    variants: variants2
  }), console.groupEnd()), !variantValue) {
    if (process.env.TAMAGUI_WARN_ON_MISSING_VARIANT === "1" && typeof value != "boolean") {
      const name = staticConfig.componentName || "[UnnamedComponent]";
      console.warn(`No variant found: ${name} has variant "${key}", but no matching value "${value}"`);
    }
    return;
  }
  if (typeof variantValue == "function") {
    const fn = variantValue, extras = getVariantExtras(styleState);
    variantValue = fn(value, extras), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("   expanded functional variant", key), console.info({
      fn,
      variantValue,
      extras
    }), console.groupEnd());
  }
  let fontFamilyResult;
  if (isObj(variantValue)) {
    const fontFamilyUpdate = variantValue.fontFamily || variantValue[conf4.inverseShorthands.fontFamily];
    fontFamilyUpdate && (fontFamilyResult = getFontFamilyFromNameOrVariable(fontFamilyUpdate, conf4), styleState.fontFamily = fontFamilyResult, process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   updating font family", fontFamilyResult)), variantValue = resolveTokensAndVariants(key, variantValue, styleProps, styleState, parentVariantKey);
  }
  if (variantValue) {
    const expanded = normalizeStyle(variantValue, !!styleProps.noNormalize);
    process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   expanding styles from ", variantValue, "to", expanded);
    const next = Object.entries(expanded);
    return fontFamilyResult && fontFamilyResult[0] === "$" && setLastFontFamilyToken(getVariableValue(fontFamilyResult)), next;
  }
};
function getFontFamilyFromNameOrVariable(input, conf4) {
  if (isVariable(input)) {
    const val = variableToFontNameCache.get(input);
    if (val) return val;
    for (const key in conf4.fontsParsed) {
      const familyVariable = conf4.fontsParsed[key].family;
      if (isVariable(familyVariable) && (variableToFontNameCache.set(familyVariable, key), familyVariable === input)) return key;
    }
  } else if (typeof input == "string" && input[0] === "$") return input;
}
var variableToFontNameCache = /* @__PURE__ */ new WeakMap();
var resolveTokensAndVariants = (key, value, styleProps, styleState, parentVariantKey) => {
  var _a2, _b2, _c, _d, _e, _f;
  const {
    conf: conf4,
    staticConfig,
    debug,
    theme
  } = styleState, {
    variants: variants2
  } = staticConfig, res = {};
  process.env.NODE_ENV === "development" && debug === "verbose" && console.info("   - resolveTokensAndVariants", key, value);
  for (const _key in value) {
    const subKey = conf4.shorthands[_key] || _key, val = value[_key];
    if (!(!styleProps.noSkip && subKey in skipProps)) {
      if (staticConfig) {
        const contextProps = ((_a2 = staticConfig.context) == null ? void 0 : _a2.props) || ((_c = (_b2 = staticConfig.parentStaticConfig) == null ? void 0 : _b2.context) == null ? void 0 : _c.props);
        contextProps && subKey in contextProps && (styleState.overriddenContextProps || (styleState.overriddenContextProps = {}), styleState.overriddenContextProps[subKey] = val, styleState.originalContextPropValues || (styleState.originalContextPropValues = {}), styleState.originalContextPropValues[subKey] = val);
      }
      if (styleProps.noExpand) res[subKey] = val;
      else if (variants2 && subKey in variants2) {
        if (parentVariantKey && parentVariantKey === key) res[subKey] = val[0] === "$" ? getTokenForKey(subKey, val, styleProps, styleState) : val;
        else {
          const variantOut = resolveVariants(subKey, val, styleProps, styleState, key);
          if (variantOut) for (const [key2, val2] of variantOut) val2 != null && (key2 in pseudoDescriptors ? ((_d = res[key2]) != null ? _d : res[key2] = {}, Object.assign(res[key2], val2)) : res[key2] = val2);
        }
        continue;
      }
      if (isVariable(val)) {
        res[subKey] = resolveVariableValue(subKey, val, styleProps.resolveValues), process.env.NODE_ENV === "development" && debug === "verbose" && console.info("variable", subKey, res[subKey]);
        continue;
      }
      if (typeof val == "string") {
        const fVal = val[0] === "$" ? getTokenForKey(subKey, val, styleProps, styleState) : resolveCompoundTokens(subKey, val, styleProps, styleState);
        res[subKey] = fVal === val && isRemValue(val) ? resolveRem(val) : fVal;
        continue;
      }
      if (isObj(val)) {
        const subObject = resolveTokensAndVariants(subKey, val, styleProps, styleState, key);
        process.env.NODE_ENV === "development" && debug === "verbose" && console.info("object", subKey, subObject), (_e = res[subKey]) != null ? _e : res[subKey] = {}, Object.assign(res[subKey], subObject);
      } else res[subKey] = val;
      process.env.NODE_ENV === "development" && debug && ((_f = res[subKey]) == null ? void 0 : _f[0]) === "$" && console.warn(`\u26A0\uFE0F Missing token in theme ${theme.name}:`, subKey, res[subKey], theme);
    }
  }
  return res;
};
var tokenCats = ["size", "color", "radius", "space", "zIndex"].map((name) => ({
  name,
  spreadName: `...${name}`
}));
function getVariantDefinition(variant, value, conf4, {
  theme
}) {
  if (!variant) return;
  if (typeof variant == "function") return variant;
  const exact = variant[value];
  if (exact) return exact;
  if (value != null) {
    const {
      tokensParsed
    } = conf4;
    for (const {
      name,
      spreadName
    } of tokenCats) if (spreadName in variant && (name in tokensParsed && value in tokensParsed[name] || name === "color" && theme && typeof value == "string" && value[0] === "$" && value.slice(1) in theme)) return variant[spreadName];
    const fontSizeVariant = variant["...fontSize"];
    if (fontSizeVariant && conf4.fontSizeTokens.has(value)) return fontSizeVariant;
  }
  return variant[`:${typeof value}`] || variant["..."];
}

// node_modules/@tamagui/web/dist/esm/helpers/sortString.mjs
var sortString = (a, b) => a < b ? -1 : a > b ? 1 : 0;

// node_modules/@tamagui/web/dist/esm/helpers/getSplitStyles.mjs
var conf3;
var styleOriginalValues = /* @__PURE__ */ new WeakMap();
var PROP_SPLIT = "-";
function normalizeGroupKey(key, groupContext) {
  const parts = key.split("-"), plen = parts.length;
  if (
    // check if its actually a simple group selector to avoid breaking selectors
    plen === 2 || plen === 3 && pseudoPriorities[parts[parts.length - 1]]
  ) {
    const name = parts[1];
    if (name !== "true" && groupContext && !groupContext[name]) return key.replace("$group-", "$group-true-");
  }
  return key;
}
function isValidStyleKey(key, validStyles2, accept) {
  return key in validStyles2 ? true : accept && key in accept;
}
var getSplitStyles = (props, staticConfig, theme, themeName, componentState, styleProps, parentSplitStyles, componentContext, groupContext, elementType, startedUnhydrated, debug) => {
  var _a2, _b2, _c, _d, _e;
  conf3 = conf3 || getConfig();
  const animationDriver = (componentContext == null ? void 0 : componentContext.animationDriver) || conf3.animations;
  if (props.passThrough) return null;
  isWeb && styleProps.isAnimated && animationDriver.isReactNative && !styleProps.noNormalize && (styleProps.noNormalize = "values");
  const {
    shorthands: shorthands2
  } = conf3, {
    isHOC,
    isText,
    isInput,
    variants: variants2,
    isReactNative,
    inlineProps,
    inlineWhenUnflattened,
    parentStaticConfig,
    acceptsClassName
  } = staticConfig, viewProps = {}, mediaState3 = styleProps.mediaState || mediaState, shouldDoClasses = acceptsClassName && isWeb && !styleProps.noClass, rulesToInsert = {}, classNames = {};
  let space2 = props.space, pseudos = null, hasMedia = false, dynamicThemeAccess, pseudoGroups, mediaGroups, className = props.className || "", mediaStylesSeen = 0;
  const validStyles2 = staticConfig.validStyles || (staticConfig.isText || staticConfig.isInput ? stylePropsText : validStyles);
  process.env.NODE_ENV === "development" && debug === "profile" && time`split-styles-setup`;
  const styleState = {
    classNames,
    conf: conf3,
    props,
    styleProps,
    componentState,
    staticConfig,
    style: null,
    theme,
    usedKeys: {},
    viewProps,
    context: componentContext,
    debug
  };
  if (process.env.IS_STATIC === "is_static") {
    const {
      fallbackProps
    } = styleProps;
    fallbackProps && (styleState.props = new Proxy(props, {
      get(_, key, val) {
        return Reflect.has(props, key) ? Reflect.get(props, key) : Reflect.get(fallbackProps, key);
      }
    }));
  }
  process.env.NODE_ENV === "development" && debug === "profile" && time`style-state`, process.env.NODE_ENV === "development" && debug === "verbose" && isClient && isDevTools && (console.groupCollapsed("\u{1F539} getSplitStyles \u{1F447}"), log({
    props,
    staticConfig,
    shouldDoClasses,
    styleProps,
    rulesToInsert,
    componentState,
    styleState,
    theme: {
      ...theme
    }
  }));
  const {
    asChild
  } = props, {
    accept
  } = staticConfig, {
    noSkip,
    disableExpandShorthands,
    noExpand,
    styledContext
  } = styleProps, {
    webContainerType
  } = conf3.settings, parentVariants = parentStaticConfig == null ? void 0 : parentStaticConfig.variants;
  for (const keyOg in props) {
    let keyInit = keyOg, valInit = props[keyInit];
    if (keyInit === "children") {
      viewProps[keyInit] = valInit;
      continue;
    }
    if (process.env.NODE_ENV === "development" && debug === "profile" && time`before-prop-${keyInit}`, process.env.NODE_ENV === "test" && keyInit === "jestAnimatedStyle") continue;
    if (accept) {
      const accepted = accept[keyInit];
      if ((accepted === "style" || accepted === "textStyle") && valInit && typeof valInit == "object") {
        viewProps[keyInit] = getSubStyle(styleState, keyInit, valInit, styleProps.noClass);
        continue;
      }
    }
    if (disableExpandShorthands || keyInit in shorthands2 && (keyInit = shorthands2[keyInit]), keyInit === "className") continue;
    if (asChild) {
      const defaults = getDefaultProps(staticConfig);
      if (defaults) {
        const defaultVal = (_a2 = defaults[keyOg]) != null ? _a2 : defaults[keyInit];
        if (defaultVal !== void 0 && valInit === defaultVal) continue;
      }
    }
    if (keyInit in skipProps && !noSkip && !isHOC) {
      if (keyInit === "group") {
        const identifier = `t_group_${valInit}`, containerCSS = ["continer", void 0, identifier, void 0, [`.${identifier} { container-name: ${valInit}; container-type: ${webContainerType || "inline-size"}; }`]];
        addStyleToInsertRules(rulesToInsert, containerCSS);
      }
      continue;
    }
    let isValidStyleKeyInit = isValidStyleKey(keyInit, validStyles2, accept);
    if (staticConfig.isReactNative && keyInit.startsWith("data-")) {
      keyInit = keyInit.replace("data-", ""), viewProps.dataSet || (viewProps.dataSet = {}), viewProps.dataSet[keyInit] = valInit;
      continue;
    }
    if (!noExpand) {
      if (keyInit === "disabled" && valInit === true && (viewProps["aria-disabled"] = true, (elementType === "button" || elementType === "form" || elementType === "input" || elementType === "select" || elementType === "textarea") && (viewProps.disabled = true), !(variants2 == null ? void 0 : variants2.disabled))) continue;
      if (keyInit === "testID") {
        viewProps[isReactNative ? keyInit : "data-testid"] = valInit;
        continue;
      }
      if (keyInit === "id") {
        viewProps.id = valInit;
        continue;
      }
    }
    let isVariant = !isValidStyleKeyInit && variants2 && keyInit in variants2;
    const isStyleLikeKey = isValidStyleKeyInit || isVariant;
    let isPseudo = keyInit in validPseudoKeys, isMedia = !isStyleLikeKey && !isPseudo ? getMediaKey(keyInit) : false, isMediaOrPseudo = !!(isMedia || isPseudo);
    isMediaOrPseudo && isMedia === "group" && (keyInit = normalizeGroupKey(keyInit, groupContext));
    const isStyleProp = isValidStyleKeyInit || isMediaOrPseudo || isVariant && !noExpand;
    if (isStyleProp && (asChild === "except-style" || asChild === "except-style-web")) continue;
    const shouldPassProp = !isStyleProp && isHOC || // is in parent variants
    isHOC && parentVariants && keyInit in parentVariants || (inlineProps == null ? void 0 : inlineProps.has(keyInit)), parentVariant = parentVariants == null ? void 0 : parentVariants[keyInit], isHOCShouldPassThrough = !!(isHOC && (isValidStyleKeyInit || isMediaOrPseudo || parentVariant || keyInit in skipProps)), shouldPassThrough = shouldPassProp || isHOCShouldPassThrough;
    if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(`  \u{1F511} ${keyOg}${keyInit !== keyOg ? ` (shorthand for ${keyInit})` : ""} ${shouldPassThrough ? "(pass)" : ""}`), log({
      isVariant,
      valInit,
      shouldPassProp
    }), isClient && log({
      variants: variants2,
      variant: variants2 == null ? void 0 : variants2[keyInit],
      isVariant,
      isHOCShouldPassThrough,
      usedKeys: {
        ...styleState.usedKeys
      },
      parentStaticConfig
    })), shouldPassThrough && (passDownProp(viewProps, keyInit, valInit, isMediaOrPseudo), process.env.NODE_ENV === "development" && debug === "verbose" && console.groupEnd(), !isVariant)) continue;
    if (!noSkip && keyInit in skipProps) {
      process.env.NODE_ENV === "development" && debug === "verbose" && console.groupEnd();
      continue;
    }
    (isText || isInput) && valInit && (keyInit === "fontFamily" || keyInit === shorthands2.fontFamily) && valInit in conf3.fontsParsed && (styleState.fontFamily = valInit);
    const disablePropMap = isMediaOrPseudo || !isStyleLikeKey;
    if (propMapper(keyInit, valInit, styleState, disablePropMap, (key, val, originalVal) => {
      var _a3, _b3, _c2, _d2, _e2;
      const isStyledContextProp = styledContext && key in styledContext;
      if (!isHOC && disablePropMap && !isStyledContextProp && !isMediaOrPseudo) {
        viewProps[key] = val;
        return;
      }
      if (process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("  \u{1F4A0} expanded", keyInit, "=>", key), log(val), console.groupEnd()), val == null) return;
      if (!isHOC && isValidStyleKey(key, validStyles2, accept)) {
        mergeStyle(styleState, key, val, 1, false, originalVal);
        return;
      }
      if (isPseudo = key in validPseudoKeys, isMedia = isPseudo ? false : getMediaKey(key), isMediaOrPseudo = !!(isMedia || isPseudo), isVariant = variants2 && key in variants2, isMedia === "group" && (key = normalizeGroupKey(key, groupContext)), ((inlineProps == null ? void 0 : inlineProps.has(key)) || process.env.IS_STATIC === "is_static" && (inlineWhenUnflattened == null ? void 0 : inlineWhenUnflattened.has(key))) && (viewProps[key] = (_a3 = props[key]) != null ? _a3 : val), styleProps.noExpand && isPseudo || isHOC && (isMediaOrPseudo || ((_b3 = parentStaticConfig == null ? void 0 : parentStaticConfig.variants) == null ? void 0 : _b3[keyInit]))) {
        passDownProp(viewProps, key, val, isMediaOrPseudo), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed(` - passing down prop ${key}`), log({
          val,
          after: {
            ...viewProps[key]
          }
        }), console.groupEnd());
        return;
      }
      if (isPseudo) {
        if (!val) return;
        const pseudoStyleObject = getSubStyle(styleState, key, val, styleProps.noClass && process.env.IS_STATIC !== "is_static");
        if ((!shouldDoClasses || process.env.IS_STATIC === "is_static") && (pseudos || (pseudos = {}), pseudos[key] || (pseudos[key] = {}), process.env.IS_STATIC === "is_static")) {
          Object.assign(pseudos[key], pseudoStyleObject);
          return;
        }
        const descriptor = pseudoDescriptors[key], isEnter = key === "enterStyle", isExit = key === "exitStyle";
        if (!descriptor) return;
        if (shouldDoClasses && !isExit) {
          const pseudoStyles = getStyleAtomic(pseudoStyleObject, descriptor);
          process.env.NODE_ENV === "development" && debug === "verbose" && console.info("pseudo:", key, pseudoStyleObject, pseudoStyles);
          for (const psuedoStyle of pseudoStyles) {
            const fullKey = `${psuedoStyle[StyleObjectProperty]}${PROP_SPLIT}${descriptor.name}`;
            addStyleToInsertRules(rulesToInsert, psuedoStyle), classNames[fullKey] = psuedoStyle[StyleObjectIdentifier];
          }
        }
        if (!shouldDoClasses || isExit || isEnter) {
          const descriptorKey = descriptor.stateKey || descriptor.name;
          let isDisabled2 = componentState[descriptorKey] === false;
          isExit && (isDisabled2 = !styleProps.isExiting), isEnter && componentState.unmounted === false && (isDisabled2 = true), process.env.NODE_ENV === "development" && debug === "verbose" && (console.groupCollapsed("pseudo", key, {
            isDisabled: isDisabled2
          }), log({
            pseudoStyleObject,
            isDisabled: isDisabled2,
            descriptor,
            componentState
          }), console.groupEnd());
          const importance = descriptor.priority, pseudoOriginalValues = styleOriginalValues.get(pseudoStyleObject);
          for (const pkey in pseudoStyleObject) {
            const val2 = pseudoStyleObject[pkey];
            if (isDisabled2) applyDefaultStyle(pkey, styleState);
            else {
              const curImportance = styleState.usedKeys[pkey] || 0, shouldMerge = importance >= curImportance;
              shouldMerge && (process.env.IS_STATIC === "is_static" && (pseudos || (pseudos = {}), pseudos[key] || (pseudos[key] = {}), pseudos[key][pkey] = val2), mergeStyle(styleState, pkey, val2, importance, false, pseudoOriginalValues == null ? void 0 : pseudoOriginalValues[pkey])), process.env.NODE_ENV === "development" && debug === "verbose" && log("    subKey", pkey, shouldMerge, {
                importance,
                curImportance,
                pkey,
                val: val2
              });
            }
          }
          if (!isDisabled2) for (const key2 in val) {
            const k = shorthands2[key2] || key2;
            styleState.usedKeys[k] = Math.max(importance, styleState.usedKeys[k] || 0);
          }
        }
        return;
      }
      if (isMedia) {
        if (!val) return;
        const mediaKeyShort = key.slice(isMedia == "theme" ? 7 : 1);
        if (hasMedia || (hasMedia = true), (val.space || !shouldDoClasses || styleProps.willBeAnimated) && ((!hasMedia || typeof hasMedia == "boolean") && (hasMedia = /* @__PURE__ */ new Set()), hasMedia.add(mediaKeyShort)), isMedia === "platform" && !isActivePlatform(key)) return;
        process.env.NODE_ENV === "development" && debug === "verbose" && log(`  \u{1F4FA} ${key}`, {
          key,
          val,
          props,
          shouldDoClasses,
          acceptsClassName,
          componentState,
          mediaState: mediaState3
        });
        const priority = mediaStylesSeen;
        if (mediaStylesSeen += 1, shouldDoClasses || isWeb && isMedia === "theme") {
          const mediaStyle = getSubStyle(styleState, key, val, false), mediaStyles = getCSSStylesAtomic(mediaStyle);
          for (const style of mediaStyles) {
            const property = style[StyleObjectProperty], isSubStyle = property[0] === "$";
            if (isSubStyle && !isActivePlatform(property)) continue;
            const out = createMediaStyle(style, mediaKeyShort, mediaQueryConfig, isMedia, false, priority);
            process.env.NODE_ENV === "development" && debug === "verbose" && log("\u{1F4FA} media style:", out);
            const subKey = isSubStyle ? style[2] : "", fullKey = `${style[StyleObjectProperty]}${subKey}${PROP_SPLIT}${mediaKeyShort}${style[StyleObjectPseudo] || ""}`;
            addStyleToInsertRules(rulesToInsert, out), classNames[fullKey] = out[StyleObjectIdentifier];
          }
        } else {
          let mergeMediaStyle = function(key2, val2, originalVal2) {
            styleState.style || (styleState.style = {}), mergeMediaByImportance(styleState, mediaKeyShort, key2, val2, mediaState3[mediaKeyShort], importanceBump, debug, originalVal2) && key2 === "fontFamily" && (styleState.fontFamily = mediaStyle.fontFamily);
          };
          const isThemeMedia = isMedia === "theme", isGroupMedia = isMedia === "group";
          if (!isThemeMedia && !(isMedia === "platform") && !isGroupMedia) {
            if (!mediaState3[mediaKeyShort]) {
              process.env.NODE_ENV === "development" && debug === "verbose" && log(`  \u{1F4FA} \u274C DISABLED ${mediaKeyShort}`);
              return;
            }
            process.env.NODE_ENV === "development" && debug === "verbose" && log(`  \u{1F4FA} \u2705 ENABLED ${mediaKeyShort}`);
          }
          const mediaStyle = getSubStyle(styleState, key, val, true);
          let importanceBump = 0;
          if (isThemeMedia) {
            if (dynamicThemeAccess = true, !(themeName === mediaKeyShort || themeName.startsWith(mediaKeyShort))) return;
          } else if (isGroupMedia) {
            const groupInfo = getGroupPropParts(mediaKeyShort), groupName = groupInfo.name, groupState = (_c2 = groupContext == null ? void 0 : groupContext[groupName]) == null ? void 0 : _c2.state, groupPseudoKey = groupInfo.pseudo, groupMediaKey = groupInfo.media;
            if (!groupState) {
              process.env.NODE_ENV === "development" && debug && log(`No parent with group prop, skipping styles: ${groupName}`), pseudoGroups || (pseudoGroups = /* @__PURE__ */ new Set());
              return;
            }
            const componentGroupState = (_d2 = componentState.group) == null ? void 0 : _d2[groupName];
            if (groupMediaKey) {
              mediaGroups || (mediaGroups = /* @__PURE__ */ new Set()), mediaGroups.add(groupMediaKey);
              const mediaState22 = componentGroupState == null ? void 0 : componentGroupState.media;
              let isActive = mediaState22 == null ? void 0 : mediaState22[groupMediaKey];
              if (!mediaState22 && groupState.layout && (isActive = mediaKeyMatch(groupMediaKey, groupState.layout)), process.env.NODE_ENV === "development" && debug === "verbose" && log(` \u{1F3D8}\uFE0F GROUP media ${groupMediaKey} active? ${isActive}`, {
                ...mediaState22,
                usedKeys: {
                  ...styleState.usedKeys
                }
              }), !isActive) {
                for (const pkey in mediaStyle) applyDefaultStyle(pkey, styleState);
                return;
              }
              importanceBump = 2;
            }
            if (groupPseudoKey) {
              pseudoGroups || (pseudoGroups = /* @__PURE__ */ new Set()), pseudoGroups.add(groupName);
              const componentGroupPseudoState = (_e2 = componentGroupState || // fallback to context initially
              (groupContext == null ? void 0 : groupContext[groupName].state)) == null ? void 0 : _e2.pseudo, isActive = componentGroupPseudoState == null ? void 0 : componentGroupPseudoState[groupPseudoKey], priority2 = pseudoPriorities[groupPseudoKey];
              if (process.env.NODE_ENV === "development" && debug === "verbose" && log(` \u{1F3D8}\uFE0F GROUP pseudo ${groupMediaKey} active? ${isActive}, priority ${priority2}`, {
                componentGroupPseudoState: {
                  ...componentGroupPseudoState
                },
                usedKeys: {
                  ...styleState.usedKeys
                }
              }), !isActive) {
                for (const pkey in mediaStyle) applyDefaultStyle(pkey, styleState);
                return;
              }
              importanceBump = priority2;
            }
          }
          const mediaOriginalValues = styleOriginalValues.get(mediaStyle);
          isGroupMedia && mediaStyle.transition && (styleState.pseudoTransitions || (styleState.pseudoTransitions = {}), styleState.pseudoTransitions[`$${mediaKeyShort}`] = mediaStyle.transition);
          for (const subKey in mediaStyle) if (subKey !== "space") if (subKey[0] === "$") {
            if (!isActivePlatform(subKey) || !isActiveTheme(subKey, themeName)) continue;
            const subOriginalValues = styleOriginalValues.get(mediaStyle[subKey]);
            for (const subSubKey in mediaStyle[subKey]) mergeMediaStyle(subSubKey, mediaStyle[subKey][subSubKey], subOriginalValues == null ? void 0 : subOriginalValues[subSubKey]);
          } else mergeMediaStyle(subKey, mediaStyle[subKey], mediaOriginalValues == null ? void 0 : mediaOriginalValues[subKey]);
        }
        return;
      }
      if (!isVariant) {
        if (isStyledContextProp) return;
        viewProps[key] = val;
      }
    }), process.env.NODE_ENV === "development" && debug === "verbose") {
      try {
        log(" \u2714\uFE0F expand complete", keyInit), log("style", {
          ...styleState.style
        }), log("viewProps", {
          ...viewProps
        }), log("transforms", {
          ...styleState.flatTransforms
        });
      } catch {
      }
      console.groupEnd();
    }
  }
  if (process.env.NODE_ENV === "development" && debug === "profile" && time`split-styles-propsend`, !(styleProps.noNormalize === false) && (styleState.style && (fixStyles(styleState.style), !styleProps.noExpand && !styleProps.noMergeStyle && isWeb && (!isReactNative || !animationDriver.supportsCSS) && styleToCSS(styleState.style)), styleState.flatTransforms && (styleState.style || (styleState.style = {}), mergeFlatTransforms(styleState.style, styleState.flatTransforms)), parentSplitStyles)) {
    if (shouldDoClasses) for (const key in parentSplitStyles.classNames) {
      const val = parentSplitStyles.classNames[key];
      styleState.style && key in styleState.style || key in classNames || (classNames[key] = val);
    }
    if (!shouldDoClasses) for (const key in parentSplitStyles.style) key in classNames || styleState.style && key in styleState.style || (styleState.style || (styleState.style = {}), styleState.style[key] = parentSplitStyles.style[key]);
  }
  if (!styleProps.noNormalize && !staticConfig.isReactNative && !staticConfig.isHOC && (!styleProps.isAnimated || animationDriver.supportsCSS) && Array.isArray((_b2 = styleState.style) == null ? void 0 : _b2.transform) && (styleState.style.transform = transformsToString(styleState.style.transform)), !styleProps.noMergeStyle && styleState.style && shouldDoClasses) {
    let retainedStyles, shouldRetain = false;
    if (!styleState.style.$$css) {
      const atomic = getCSSStylesAtomic(styleState.style);
      for (const atomicStyle of atomic) {
        const [key, value, identifier] = atomicStyle, isAnimatedAndTransitionOnly = styleProps.isAnimated && styleProps.noClass && ((_c = props.animateOnly) == null ? void 0 : _c.includes(key)), nonAnimatedTransitionOnly = !isAnimatedAndTransitionOnly && !styleProps.isAnimated && ((_d = props.animateOnly) == null ? void 0 : _d.includes(key));
        isAnimatedAndTransitionOnly ? (retainedStyles || (retainedStyles = {}), retainedStyles[key] = styleState.style[key]) : nonAnimatedTransitionOnly ? (retainedStyles || (retainedStyles = {}), retainedStyles[key] = value, shouldRetain = true) : (addStyleToInsertRules(rulesToInsert, atomicStyle), classNames[key] = identifier);
      }
      process.env.NODE_ENV === "development" && props.debug === "verbose" && (console.groupCollapsed("\u{1F539} getSplitStyles final style object"), console.info(styleState.style), console.info("retainedStyles", retainedStyles), console.groupEnd()), (shouldRetain || process.env.IS_STATIC !== "is_static") && (styleState.style = retainedStyles || {});
    }
  }
  const styleProp = props.style;
  if (!styleProps.noMergeStyle && styleProp) if (isHOC) viewProps.style = normalizeStyle2(styleProp);
  else {
    const isArray = Array.isArray(styleProp), len = isArray ? styleProp.length : 1;
    for (let i = 0; i < len; i++) {
      const style = isArray ? styleProp[i] : styleProp;
      style && (style.$$css ? Object.assign(styleState.classNames, style) : (styleState.style || (styleState.style = {}), Object.assign(styleState.style, normalizeStyle2(style))));
    }
  }
  process.env.NODE_ENV === "development" && debug === "profile" && time`split-styles-pre-result`;
  const result = {
    hasMedia,
    fontFamily: styleState.fontFamily,
    viewProps,
    style: styleState.style,
    pseudos,
    classNames,
    rulesToInsert,
    dynamicThemeAccess,
    pseudoGroups,
    mediaGroups,
    overriddenContextProps: styleState.overriddenContextProps,
    pseudoTransitions: styleState.pseudoTransitions
  }, asChildExceptStyleLike = asChild === "except-style" || asChild === "except-style-web";
  if (!styleProps.noMergeStyle && !asChildExceptStyleLike) {
    const style = styleState.style;
    {
      let fontFamily = isText || isInput ? styleState.fontFamily || ((_e = staticConfig.defaultProps) == null ? void 0 : _e.fontFamily) : null;
      fontFamily && fontFamily[0] === "$" && (fontFamily = fontFamily.slice(1));
      const fontFamilyClassName = fontFamily ? `font_${fontFamily}` : "", groupClassName = props.group ? `t_group_${props.group}` : "", componentNameFinal = props.componentName || staticConfig.componentName, componentClassName = props.asChild || !componentNameFinal ? "" : `is_${componentNameFinal}`;
      let classList = [];
      componentClassName && classList.push(componentClassName), fontFamilyClassName && classList.push(fontFamilyClassName), classNames && classList.push(Object.values(classNames).join(" ")), groupClassName && classList.push(groupClassName), props.className && classList.push(props.className);
      const finalClassName = classList.join(" ");
      if (styleProps.isAnimated && isReactNative) style && (viewProps.style = style), (animationDriver == null ? void 0 : animationDriver.supportsCSS) && (viewProps.className = finalClassName);
      else if (isReactNative) {
        let cnStyles;
        for (const name of finalClassName.split(" ")) cnStyles || (cnStyles = {
          $$css: true
        }), cnStyles[name] = name;
        viewProps.style = cnStyles ? [...Array.isArray(style) ? style : [style], cnStyles] : [style];
      } else finalClassName && (viewProps.className = finalClassName), style && (viewProps.style = style);
    }
  }
  if (process.env.NODE_ENV === "development" && debug === "verbose" && isClient && isDevTools) {
    console.groupEnd(), console.groupCollapsed("\u{1F539} getSplitStyles ===>");
    try {
      const logs = {
        ...result,
        className,
        componentState,
        viewProps,
        rulesToInsert,
        parentSplitStyles
      };
      for (const key in logs) log(key, logs[key]);
    } catch {
    }
    console.groupEnd();
  }
  return process.env.NODE_ENV === "development" && debug === "profile" && time`split-styles-done`, result;
};
function mergeFlatTransforms(target, flatTransforms) {
  Object.entries(flatTransforms).sort(([a], [b]) => sortString(a, b)).forEach(([key, val]) => {
    mergeTransform(target, key, val, true);
  });
}
function mergeStyle(styleState, key, val, importance, disableNormalize = false, originalVal) {
  var _a2, _b2, _c, _d, _e;
  const {
    viewProps,
    styleProps,
    staticConfig,
    usedKeys
  } = styleState;
  if ((usedKeys[key] || 0) > importance) return;
  const contextProps = ((_a2 = staticConfig.context) == null ? void 0 : _a2.props) || ((_c = (_b2 = staticConfig.parentStaticConfig) == null ? void 0 : _b2.context) == null ? void 0 : _c.props);
  if (contextProps && key in contextProps) {
    styleState.overriddenContextProps || (styleState.overriddenContextProps = {});
    const originalFromState = (_d = styleState.originalContextPropValues) == null ? void 0 : _d[key];
    styleState.overriddenContextProps[key] = (_e = originalVal != null ? originalVal : originalFromState) != null ? _e : val;
  }
  if (key in stylePropsTransform) styleState.flatTransforms || (styleState.flatTransforms = {}), usedKeys[key] = importance, styleState.flatTransforms[key] = val;
  else {
    const out = isWeb && !disableNormalize && !styleProps.noNormalize ? normalizeValueWithProperty(val, key) : val;
    staticConfig.accept && key in staticConfig.accept ? viewProps[key] = out : (styleState.style || (styleState.style = {}), usedKeys[key] = importance, styleState.style[key] = // if you dont do this you'll be passing props.transform arrays directly here and then mutating them
    // if theres any flatTransforms later, causing issues (mutating props is bad, in strict mode styles get borked)
    key === "transform" && Array.isArray(out) ? [...out] : out);
  }
}
var getSubStyle = (styleState, subKey, styleIn, avoidMergeTransform) => {
  var _a2;
  const {
    staticConfig,
    conf: conf22,
    styleProps
  } = styleState, styleOut = {};
  let originalValues;
  for (let key in styleIn) {
    const val = styleIn[key];
    if (key = conf22.shorthands[key] || key, key === "transition") {
      styleState.pseudoTransitions || (styleState.pseudoTransitions = {}), styleState.pseudoTransitions[subKey] = val;
      continue;
    }
    !staticConfig.isHOC && key in skipProps && !styleProps.noSkip || propMapper(key, val, styleState, false, (skey, sval, originalVal) => {
      originalVal !== void 0 && (originalValues || (originalValues = {}), originalValues[skey] = originalVal), skey in validPseudoKeys && (sval = getSubStyle(styleState, skey, sval, avoidMergeTransform)), !avoidMergeTransform && skey in stylePropsTransform ? mergeTransform(styleOut, skey, sval) : styleOut[skey] = styleProps.noNormalize ? sval : normalizeValueWithProperty(sval, key);
    });
  }
  if (!avoidMergeTransform) {
    const parentTransform = (_a2 = styleState.style) == null ? void 0 : _a2.transform, flatTransforms = styleState.flatTransforms, styleOutTransform = styleOut.transform;
    if (Array.isArray(styleOutTransform) && styleOutTransform.length) {
      const len = styleOutTransform.length;
      if (Array.isArray(parentTransform)) {
        const merged = [];
        outer: for (let i = 0; i < parentTransform.length; i++) {
          const pt = parentTransform[i];
          for (const pk in pt) {
            for (let j = 0; j < len; j++) for (const sk in styleOutTransform[j]) {
              if (pk === sk) continue outer;
              break;
            }
            merged.push(pt);
            break;
          }
        }
        for (let i = 0; i < len; i++) merged.push(styleOutTransform[i]);
        styleOut.transform = merged;
      }
      if (flatTransforms) outer: for (const fk in flatTransforms) {
        const ck = fk === "x" ? "translateX" : fk === "y" ? "translateY" : fk;
        for (let j = 0; j < len; j++) for (const sk in styleOutTransform[j]) {
          if (ck === sk) continue outer;
          break;
        }
        mergeTransform(styleOut, fk, flatTransforms[fk]);
      }
    } else flatTransforms && mergeFlatTransforms(styleOut, flatTransforms);
  }
  return styleProps.noNormalize || fixStyles(styleOut), originalValues && styleOriginalValues.set(styleOut, originalValues), styleOut;
};
var useInsertEffectCompat = isWeb ? import_react9.default.useInsertionEffect || useIsomorphicLayoutEffect : () => {
};
var useSplitStyles = (a, b, c, d, e, f, g, h, i, j, k, l) => {
  const res = getSplitStyles(a, b, c, d, e, f, g, h, i, j, k, l);
  return useInsertEffectCompat(() => {
    res && insertStyleRules(res.rulesToInsert);
  }, [res == null ? void 0 : res.rulesToInsert]), res;
};
function addStyleToInsertRules(rulesToInsert, styleObject) {
  {
    const identifier = styleObject[StyleObjectIdentifier];
    shouldInsertStyleRules(identifier) && (updateRules(identifier, styleObject[StyleObjectRules]), rulesToInsert[identifier] = styleObject);
  }
}
var defaultColor = process.env.TAMAGUI_DEFAULT_COLOR || "rgba(0,0,0,0)";
var animatableDefaults = {
  ...Object.fromEntries(Object.entries(tokenCategories.color).map(([k, v]) => [k, defaultColor])),
  opacity: 1,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
  rotate: "0deg",
  rotateX: "0deg",
  rotateY: "0deg",
  rotateZ: "0deg",
  skewX: "0deg",
  skewY: "0deg",
  x: 0,
  y: 0,
  borderRadius: 0
};
var mergeTransform = (obj, key, val, backwards = false) => {
  typeof obj.transform != "string" && (obj.transform || (obj.transform = []), obj.transform[backwards ? "unshift" : "push"]({
    [mapTransformKeys[key] || key]: val
  }));
};
var mapTransformKeys = {
  x: "translateX",
  y: "translateY"
};
function passDownProp(viewProps, key, val, shouldMergeObject = false) {
  if (shouldMergeObject) {
    const next = {
      ...viewProps[key],
      ...val
    };
    delete viewProps[key], viewProps[key] = next;
  } else viewProps[key] = val;
}
function mergeMediaByImportance(styleState, mediaKey, key, value, isSizeMedia, importanceBump, debugProp, originalVal) {
  const usedKeys = styleState.usedKeys;
  let importance = getMediaImportanceIfMoreImportant(mediaKey, key, styleState, isSizeMedia);
  if (importanceBump && (importance = (importance || 0) + importanceBump), process.env.NODE_ENV === "development" && debugProp === "verbose" && log(`mergeMediaByImportance ${key} importance usedKey ${usedKeys[key]} next ${importance}`), importance === null) return false;
  if (key in pseudoDescriptors) {
    const descriptor = pseudoDescriptors[key], descriptorKey = descriptor.stateKey || descriptor.name;
    if (styleState.componentState[descriptorKey] === false) return false;
    const pseudoOriginalValues = styleOriginalValues.get(value);
    for (const subKey in value) mergeStyle(styleState, subKey, value[subKey], importance, false, pseudoOriginalValues == null ? void 0 : pseudoOriginalValues[subKey]);
  } else mergeStyle(styleState, key, value, importance, false, originalVal);
  return true;
}
function normalizeStyle2(style) {
  const out = {};
  for (const key in style) {
    const val = style[key];
    key in stylePropsTransform ? mergeTransform(out, key, val) : out[key] = normalizeValueWithProperty(val, key);
  }
  return isWeb && Array.isArray(out.transform) && (out.transform = transformsToString(out.transform)), fixStyles(out), out;
}
function applyDefaultStyle(pkey, styleState) {
  const defaultValues = animatableDefaults[pkey];
  defaultValues != null && !(pkey in styleState.usedKeys) && (!styleState.style || !(pkey in styleState.style)) && mergeStyle(styleState, pkey, defaultValues, 1);
}

// node_modules/@tamagui/web/dist/esm/helpers/mergeSlotStyleProps.mjs
var isEventHandler = /^on[A-Z]/;
function mergeSlotStyleProps(base, overlay) {
  for (const key in overlay) {
    const baseVal = base[key], overlayVal = overlay[key];
    overlayVal !== void 0 && (key === "style" ? base.style = baseVal && overlayVal ? {
      ...baseVal,
      ...overlayVal
    } : overlayVal || baseVal : key === "className" ? base.className = baseVal && overlayVal ? `${baseVal} ${overlayVal}` : overlayVal || baseVal : key === "ref" ? base.ref = baseVal && overlayVal ? composeRefs(baseVal, overlayVal) : overlayVal || baseVal : isEventHandler.test(key) && typeof baseVal == "function" && typeof overlayVal == "function" ? base[key] = composeEventHandlers(baseVal, overlayVal) : base[key] = overlayVal);
  }
  return base;
}

// node_modules/@tamagui/web/dist/esm/helpers/mergeRenderElementProps.mjs
function mergeRenderElementProps(elementProps, viewProps, children) {
  const merged = mergeSlotStyleProps({
    ...elementProps
  }, viewProps);
  return merged.children = children, merged;
}

// node_modules/@tamagui/web/dist/esm/helpers/pointerEvents.mjs
function usePointerEvents(_props, _viewProps) {
}

// node_modules/@tamagui/web/dist/esm/helpers/pseudoTransitions.mjs
function resolveEffectivePseudoTransition(prev, next, pseudoTransitions, baseTransition) {
  var _a2, _b2, _c;
  if (!pseudoTransitions) return baseTransition;
  const prevState = prev || {
    hover: false,
    press: false,
    focus: false,
    groups: {}
  };
  if (next.press && !prevState.press && pseudoTransitions.pressStyle) return pseudoTransitions.pressStyle;
  if (next.hover && !prevState.hover && pseudoTransitions.hoverStyle) return pseudoTransitions.hoverStyle;
  if (next.focus && !prevState.focus && pseudoTransitions.focusStyle) return pseudoTransitions.focusStyle;
  for (const key in pseudoTransitions) if (key.startsWith("$group-")) {
    const match = key.match(/^\$group-(.+)-(hover|press|focus)$/);
    if (!match) continue;
    const groupName = match[1], pseudoType = match[2], nextGroupPseudo = (_b2 = (_a2 = next.group) == null ? void 0 : _a2[groupName]) == null ? void 0 : _b2.pseudo, prevGroupPseudo = (_c = prevState.groups) == null ? void 0 : _c[groupName];
    if ((nextGroupPseudo == null ? void 0 : nextGroupPseudo[pseudoType]) && !(prevGroupPseudo == null ? void 0 : prevGroupPseudo[pseudoType])) return pseudoTransitions[key];
  }
  return baseTransition;
}
function extractPseudoState(state2) {
  var _a2;
  const groups = {};
  if (state2.group) for (const groupName in state2.group) {
    const pseudo = (_a2 = state2.group[groupName]) == null ? void 0 : _a2.pseudo;
    pseudo && (groups[groupName] = {
      hover: pseudo.hover,
      press: pseudo.press,
      focus: pseudo.focus
    });
  }
  return {
    hover: state2.hover,
    press: state2.press,
    focus: state2.focus,
    groups
  };
}

// node_modules/@tamagui/web/dist/esm/setupHooks.mjs
var hooks = {};

// node_modules/@tamagui/web/dist/esm/helpers/setElementProps.mjs
var setElementProps = (node2) => {
  var _a2, _b2;
  (_b2 = (_a2 = hooks).setElementProps) == null ? void 0 : _b2.call(_a2, node2);
};

// node_modules/@tamagui/web/dist/esm/helpers/subscribeToContextGroup.mjs
var subscribeToContextGroup = (props) => {
  const {
    pseudoGroups,
    mediaGroups,
    groupContext
  } = props;
  if (pseudoGroups || mediaGroups) {
    process.env.NODE_ENV === "development" && !groupContext && console.debug("No context group found");
    const disposables = /* @__PURE__ */ new Set();
    if (pseudoGroups) for (const name of pseudoGroups) disposables.add(createGroupListener(name, props));
    if (mediaGroups) for (const name of mediaGroups) disposables.add(createGroupListener(name, props));
    return () => {
      disposables.forEach((d) => d());
    };
  }
};
var createGroupListener = (name, {
  setStateShallow,
  pseudoGroups,
  mediaGroups,
  groupContext
}) => {
  const parent = groupContext == null ? void 0 : groupContext[name];
  if (!parent) return () => {
  };
  const dispose = parent.subscribe(({
    layout,
    pseudo
  }) => {
    setStateShallow((prev) => {
      var _a2;
      let didChange = false;
      const group = ((_a2 = prev.group) == null ? void 0 : _a2[name]) || {
        pseudo: {},
        media: {}
      };
      if (pseudo && (pseudoGroups == null ? void 0 : pseudoGroups.has(name))) group.pseudo || (group.pseudo = {}), mergeIfNotShallowEqual(group.pseudo, pseudo) !== group.pseudo && (Object.assign(group.pseudo, pseudo), didChange = true);
      else if (layout && mediaGroups) {
        group.media || (group.media = {});
        const mediaState3 = getMediaState(mediaGroups, layout), next = mergeIfNotShallowEqual(group.media, mediaState3);
        next !== group.media && (Object.assign(group.media, next), didChange = true);
      }
      return didChange ? {
        group: {
          ...prev.group,
          [name]: group
        }
      } : prev;
    });
  });
  return () => {
    dispose(), setStateShallow({
      group: {}
    });
  };
};

// node_modules/@tamagui/web/dist/esm/helpers/themeable.mjs
var import_react13 = __toESM(require("react"), 1);

// node_modules/@tamagui/web/dist/esm/views/Theme.mjs
var import_react12 = __toESM(require("react"), 1);

// node_modules/@tamagui/use-did-finish-ssr/dist/esm/index.mjs
var React4 = __toESM(require("react"), 1);

// node_modules/@tamagui/use-did-finish-ssr/dist/esm/ClientOnly.mjs
var import_react10 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ClientOnlyContext = (0, import_react10.createContext)(false);

// node_modules/@tamagui/use-did-finish-ssr/dist/esm/index.mjs
var useIsClientOnly = () => React4.useContext(ClientOnlyContext);
function useDidFinishSSR() {
  return React4.useContext(ClientOnlyContext) ? true : React4.useSyncExternalStore(subscribe2, () => true, () => false);
}
var subscribe2 = () => () => {
};

// node_modules/@tamagui/web/dist/esm/views/ThemeDebug.mjs
var import_react11 = require("react");
var import_react_dom = __toESM(require_react_dom(), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var node;
function ThemeDebug({
  themeState,
  themeProps,
  children
}) {
  if (process.env.NODE_ENV === "development") {
    const isHydrated = useDidFinishSSR();
    if (process.env.NODE_ENV === "development" && typeof document < "u" && (node || (node = document.createElement("div"), node.style.height = "200px", node.style.overflowY = "scroll", node.style.position = "fixed", node.style.zIndex = 1e7, node.style.bottom = "30px", node.style.left = "30px", node.style.right = "30px", node.style.display = "flex", node.style.border = "1px solid #888", node.style.flexDirection = "row", node.style.background = "var(--background)")), (0, import_react11.useEffect)(() => {
      document.body.appendChild(node);
    }, []), themeProps["disable-child-theme"] || !isHydrated) return children;
    const parentState = themeState.parentId ? getThemeState(themeState.parentId) : null;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, {
      children: [(0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("code", {
        style: {
          whiteSpace: "pre",
          maxWidth: 250,
          overflow: "auto",
          padding: 5
        },
        children: ["<Theme ", themeState.id, " />\xA0", JSON.stringify({
          name: themeState.name,
          color1: themeState.theme.color1.val,
          parentId: themeState.parentId,
          // inverses: themeState.inverses,
          isNew: themeState.isNew,
          themeProps: {
            name: themeProps.name,
            componentName: themeProps.componentName,
            reset: themeProps.reset
          },
          parentState: {
            name: parentState == null ? void 0 : parentState.name,
            isNew: parentState == null ? void 0 : parentState.isNew
          }
        }, null, 2)]
      }), node), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        style: {
          color: "red"
        },
        children: themeState.id
      }), children]
    });
  }
  return children;
}
ThemeDebug.displayName = "ThemeDebug";

// node_modules/@tamagui/web/dist/esm/views/Theme.mjs
var import_jsx_runtime4 = require("react/jsx-runtime");
var Theme = (0, import_react12.forwardRef)(function(props, ref) {
  if (props.disable) return props.children;
  const {
    passThrough
  } = props, isRoot = !!props._isRoot, [_, themeState] = useThemeWithState(props, isRoot);
  let finalChildren = props["disable-child-theme"] ? import_react12.Children.map(props.children, (child) => passThrough || !(0, import_react12.isValidElement)(child) ? child : (0, import_react12.cloneElement)(child, {
    "data-disable-theme": true
  })) : props.children;
  if (ref) try {
    import_react12.default.Children.only(finalChildren), finalChildren = (0, import_react12.cloneElement)(finalChildren, {
      ref
    });
  } catch {
  }
  const stateRef = (0, import_react12.useRef)({
    hasEverThemed: false
  });
  return getThemedChildren(themeState, finalChildren, props, isRoot, stateRef, passThrough);
});
Theme.avoidForwardRef = true;
function getThemedChildren(themeState, children, props, isRoot = false, stateRef, passThrough = false) {
  const {
    shallow,
    forceClassName
  } = props, state2 = stateRef.current;
  let shouldRenderChildrenWithTheme = state2.hasEverThemed || themeState.isNew || isRoot || hasThemeUpdatingProps(props);
  if (process.env.NODE_ENV === "development" && props.debug === "visualize" && (children = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeDebug, {
    themeState,
    themeProps: props,
    children
  })), !shouldRenderChildrenWithTheme) return children;
  children = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ThemeStateContext.Provider, {
    value: themeState.id,
    children
  });
  const {
    isInverse,
    name
  } = themeState, requiresExtraWrapper = isInverse || forceClassName;
  if (state2.hasEverThemed || (state2.hasEverThemed = true), (requiresExtraWrapper || // if the theme is exactly dark or light, its likely to change between dark/light
  // and that would require wrapping which would re-parent, so to avoid re-parenting do this
  themeState.name === "dark" || themeState.name === "light") && (state2.hasEverThemed = "wrapped"), shallow && themeState.parentId) {
    const parentState = getThemeState(themeState.isNew ? themeState.id : themeState.parentId);
    if (!parentState) throw new Error("\u203C\uFE0F010");
    children = import_react12.Children.toArray(children).map((child) => (0, import_react12.isValidElement)(child) ? passThrough ? child : (0, import_react12.cloneElement)(child, void 0, /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Theme, {
      name: parentState.name,
      children: child.props.children
    })) : child);
  }
  if (process.env.NODE_ENV === "development" && !passThrough && props.debug && console.warn(" getThemedChildren", {
    requiresExtraWrapper,
    forceClassName,
    themeState,
    state: state2,
    themeSpanProps: getThemeClassNameAndColor(themeState, props, isRoot)
  }), forceClassName === false) return children;
  if (isWeb) {
    const baseStyle = props.contain ? inertContainedStyle : inertStyle, {
      className = "",
      color: color2
    } = passThrough ? {} : getThemeClassNameAndColor(themeState, props, isRoot);
    if (children = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
      className: `${className} is_Theme`,
      style: passThrough ? baseStyle : {
        color: color2,
        ...baseStyle
      },
      children
    }), state2.hasEverThemed === "wrapped") {
      const className2 = requiresExtraWrapper ? `${name.startsWith("light") ? "t_light" : name.startsWith("dark") ? "t_dark" : ""} _dsp_contents` : "_dsp_contents";
      children = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", {
        className: className2,
        children
      });
    }
    return children;
  }
  return children;
}
var inertStyle = {
  display: "contents"
};
var inertContainedStyle = {
  display: "contents",
  contain: "strict"
};
var empty = {
  className: "",
  color: void 0
};
function getThemeClassNameAndColor(themeState, props, isRoot = false) {
  if (!themeState.isNew && !props.forceClassName) return empty;
  const themeColor = (themeState == null ? void 0 : themeState.theme) && themeState.isNew ? variableToString(themeState.theme.color) : "", style = themeColor ? {
    color: themeColor
  } : void 0, themeClassName = themeState.name.replace(schemePrefix, ""), themeNameParts = themeClassName.split("_");
  let themeClasses = `t_${themeClassName}`;
  if (themeNameParts.length > 1) {
    const hierarchyClasses = [];
    for (let i = 1; i <= themeNameParts.length; i++) hierarchyClasses.push(`t_${themeNameParts.slice(0, i).join("_")}`);
    themeClasses = hierarchyClasses.join(" ");
  }
  const className = `${isRoot ? "" : "t_sub_theme"} ${themeClasses}`;
  return {
    color: themeColor,
    className
  };
}
var schemePrefix = /^(dark|light)_/;

// node_modules/@tamagui/web/dist/esm/helpers/themeable.mjs
var import_jsx_runtime5 = require("react/jsx-runtime");
function themeable(Component, staticConfig, optimize = false) {
  const withTheme = import_react13.default.forwardRef(function(props, ref) {
    const userDefaults = getDefaultProps(staticConfig, props.componentName), defaultTheme = userDefaults == null ? void 0 : userDefaults.theme, defaultResetTheme = userDefaults == null ? void 0 : userDefaults.themeReset, {
      theme,
      componentName,
      themeReset,
      ...rest
    } = props;
    let overriddenContextProps;
    const context2 = staticConfig == null ? void 0 : staticConfig.context;
    if (context2) for (const key in context2.props) {
      const val = props[key];
      val !== void 0 && (overriddenContextProps || (overriddenContextProps = {}), overriddenContextProps[key] = val);
    }
    const element = (
      // @ts-expect-error its ok
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Component, {
        ref,
        ...rest,
        "data-disable-theme": true
      })
    );
    let filteredProps = null;
    const compName = componentName || (staticConfig == null ? void 0 : staticConfig.componentName);
    if (compName && (filteredProps || (filteredProps = {}), filteredProps.componentName = compName), "debug" in props && (filteredProps || (filteredProps = {}), filteredProps.debug = props.debug), ("theme" in props || defaultTheme) && (filteredProps || (filteredProps = {}), filteredProps.name = "theme" in props ? props.theme : defaultTheme), ("themeReset" in props || defaultResetTheme) && (filteredProps || (filteredProps = {}), filteredProps.reset = "themeReset" in props ? themeReset : defaultResetTheme), optimize && !filteredProps) return element;
    let contents = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Theme, {
      "disable-child-theme": true,
      ...filteredProps,
      children: element
    });
    if (context2) {
      const Provider = context2.Provider, contextValue = import_react13.default.useContext(context2);
      contents = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Provider, {
        ...contextValue,
        ...overriddenContextProps,
        children: contents
      });
    }
    return contents;
  });
  return withTheme.displayName = `Themed(${(Component == null ? void 0 : Component.displayName) || (Component == null ? void 0 : Component.name) || "Anonymous"})`, withTheme;
}

// node_modules/@tamagui/web/dist/esm/helpers/wrapStyleTags.mjs
var import_jsx_runtime6 = require("react/jsx-runtime");
function getStyleTags(styles) {
  if (styles.length) return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, {
    children: styles.map((styleObject) => {
      const identifier = styleObject[StyleObjectIdentifier];
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("style", {
        href: `t_${identifier}`,
        precedence: "default",
        suppressHydrationWarning: true,
        children: styleObject[StyleObjectRules].join(`
`)
      }, identifier);
    })
  });
}

// node_modules/@tamagui/web/dist/esm/hooks/useComponentState.mjs
var import_react14 = require("react");
var useComponentState = (props, animationDriver, staticConfig, config2) => {
  var _a2, _b2;
  const isHydrated = useDidFinishSSR(), needsHydration = !useIsClientOnly(), useAnimations = (animationDriver == null ? void 0 : animationDriver.isStub) ? void 0 : animationDriver == null ? void 0 : animationDriver.useAnimations, {
    isHOC
  } = staticConfig, stateRef = (0, import_react14.useRef)(
    // performance: avoid creating object every render
    void 0
  );
  stateRef.current || (stateRef.current = {
    startedUnhydrated: needsHydration && !isHydrated
  });
  const hasAnimationProp = !!(!isHOC && "transition" in props || props.style && hasAnimatedStyleValue(props.style)), supportsCSS = ((_a2 = animationDriver == null ? void 0 : animationDriver.inputStyle) != null ? _a2 : (animationDriver == null ? void 0 : animationDriver.supportsCSS) ? "css" : "inline") === "css", curStateRef = stateRef.current;
  !needsHydration && hasAnimationProp && (curStateRef.hasAnimated = true);
  const willBeAnimatedClient = !!(!!(hasAnimationProp && !isHOC && useAnimations) || curStateRef.hasAnimated), willBeAnimated = !isServer && willBeAnimatedClient;
  willBeAnimated && !curStateRef.hasAnimated && (curStateRef.hasAnimated = true);
  const {
    disableClassName
  } = props, presence = !isHOC && willBeAnimated && props.animatePresence !== false && ((_b2 = animationDriver == null ? void 0 : animationDriver.usePresence) == null ? void 0 : _b2.call(animationDriver)) || null, presenceState = presence == null ? void 0 : presence[2], isExiting = (presenceState == null ? void 0 : presenceState.isPresent) === false, isEntering = (presenceState == null ? void 0 : presenceState.isPresent) === true && presenceState.initial !== false, hasEnterStyle = !!props.enterStyle, hasAnimationThatNeedsHydrate = hasAnimationProp && !isHydrated && ((animationDriver == null ? void 0 : animationDriver.isReactNative) || !supportsCSS), initialState = !isHOC && (hasEnterStyle || isEntering || hasAnimationThatNeedsHydrate || // disableClassName doesnt work server side, only client, so needs hydrate
  // this is just for a better ux, supports css variables for light/dark, media queries, etc
  disableClassName) ? (
    // on the very first render we switch all spring animation drivers to css rendering
    // this is because we need to use css variables, which they don't support to do proper SSR
    // without flickers of the wrong colors.
    // but once we do that initial hydration and we are in client side rendering mode,
    // we can avoid the extra re-render on mount
    hasEnterStyle || isEntering ? defaultComponentStateShouldEnter : defaultComponentState
  ) : defaultComponentStateMounted, disabled = isDisabled(props);
  disabled != null && (initialState.disabled = disabled);
  const states2 = (0, import_react14.useState)(initialState), state2 = props.forceStyle ? {
    ...states2[0],
    [props.forceStyle]: true
  } : states2[0], setState = states2[1];
  let isAnimated = willBeAnimated;
  isWeb && hasAnimationThatNeedsHydrate && !staticConfig.isHOC && !isHydrated && (isAnimated = false, curStateRef.willHydrate = true), disabled !== state2.disabled && (disabled && Object.assign(state2, defaultComponentStateMounted), state2.disabled = disabled, setState((_) => ({
    ...state2
  })));
  const groupName = props.group, setStateShallow = useCreateShallowSetState(setState, props.debug);
  if (presenceState && isAnimated && isHydrated && staticConfig.variants) {
    process.env.NODE_ENV === "development" && props.debug === "verbose" && console.warn(`has presenceState ${JSON.stringify(presenceState)}`);
    const {
      enterVariant,
      exitVariant,
      enterExitVariant,
      custom
    } = presenceState;
    isObj(custom) && Object.assign(props, custom);
    const exv = exitVariant != null ? exitVariant : enterExitVariant, env = enterVariant != null ? enterVariant : enterExitVariant;
    state2.unmounted && env && staticConfig.variants[env] ? (process.env.NODE_ENV === "development" && props.debug === "verbose" && console.warn(`Animating presence ENTER "${env}"`), props[env] = true) : isExiting && exv && (process.env.NODE_ENV === "development" && props.debug === "verbose" && console.warn(`Animating presence EXIT "${exv}"`), props[exv] = exitVariant !== enterExitVariant);
  }
  let noClass = !isWeb || !!props.forceStyle;
  if (!isHydrated) noClass = false;
  else if (isWeb && isHydrated) {
    const isAnimatedAndHydrated = isAnimated && isHydrated, isClassNameDisabled = !staticConfig.acceptsClassName && (getSetting("disableSSR") || !state2.unmounted), isDisabledManually = disableClassName && !state2.unmounted;
    (isAnimatedAndHydrated && !(animationDriver == null ? void 0 : animationDriver.classNameAnimation) || isDisabledManually || isClassNameDisabled) && (noClass = true, process.env.NODE_ENV === "development" && props.debug === "verbose" && log("avoiding className", {
      isAnimatedAndHydrated,
      isDisabledManually,
      isClassNameDisabled
    }));
  }
  return {
    startedUnhydrated: curStateRef.startedUnhydrated,
    curStateRef,
    disabled,
    groupName,
    hasAnimationProp,
    hasEnterStyle,
    isAnimated,
    isExiting,
    isHydrated,
    presence,
    presenceState,
    setState,
    setStateShallow,
    noClass,
    state: state2,
    stateRef,
    supportsCSS,
    willBeAnimated,
    willBeAnimatedClient
  };
};
function hasAnimatedStyleValue(style) {
  return Object.keys(style).some((k) => {
    const val = style[k];
    return val && typeof val == "object" && "_animation" in val;
  });
}
var isDisabled = (props) => {
  var _a2;
  return props.disabled || props.passThrough || ((_a2 = props.accessibilityState) == null ? void 0 : _a2.disabled) || props["aria-disabled"] || props.accessibilityDisabled || false;
};

// node_modules/@tamagui/web/dist/esm/views/Slot.mjs
var import_react15 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var Slot = (0, import_react15.memo)((0, import_react15.forwardRef)(function(props, forwardedRef) {
  const {
    children,
    ...slotProps
  } = props;
  if ((0, import_react15.isValidElement)(children)) {
    const mergedProps = mergeSlotProps(children, slotProps);
    return (0, import_react15.cloneElement)(children, children.type.avoidForwardRef ? mergedProps : {
      ...mergedProps,
      ref: composeRefs(forwardedRef, children.props.ref)
    });
  }
  return import_react15.Children.count(children) > 1 ? import_react15.Children.only(null) : null;
}));
var Slottable = ({
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {
  children
});
Slottable.displayName = "Slottable";
var pressMap = isWeb ? {
  onPress: "onClick",
  onPressOut: "onMouseUp",
  onPressIn: "onMouseDown"
} : {};
function mergeSlotProps(child, slotProps) {
  const childProps = child.props, isHTMLChild = typeof child.type == "string";
  if (isHTMLChild) for (const key in pressMap) key in slotProps && (slotProps[pressMap[key]] = slotProps[key], delete slotProps[key]);
  const merged = mergeSlotStyleProps(slotProps, childProps);
  if (isHTMLChild) for (const key in pressMap) key in merged && (merged[pressMap[key]] = merged[key], delete merged[key]);
  return merged;
}

// node_modules/@tamagui/web/dist/esm/createComponent.mjs
var import_jsx_runtime8 = require("react/jsx-runtime");
var time2;
var debugKeyListeners;
var startVisualizer;
var componentSetStates = /* @__PURE__ */ new Set();
var avoidReRenderKeys = /* @__PURE__ */ new Set(["hover", "press", "pressIn", "group", "focus", "focusWithin", "media", "group"]);
if (typeof window < "u") {
  const cancelPresses = () => {
    componentSetStates.forEach((setState) => setState((prev) => prev.press || prev.pressIn ? {
      ...prev,
      press: false,
      pressIn: false
    } : prev)), componentSetStates.clear();
  }, cancelTouches = () => {
    componentSetStates.forEach((setState) => setState((prev) => prev.press || prev.pressIn || prev.hover ? {
      ...prev,
      press: false,
      pressIn: false,
      hover: false
    } : prev)), componentSetStates.clear();
  };
  addEventListener("mouseup", cancelPresses), addEventListener("touchend", cancelTouches), addEventListener("touchcancel", cancelTouches), process.env.NODE_ENV === "development" && (startVisualizer = () => {
    var _a2;
    const devVisualizerConfig = (_a2 = devConfig) == null ? void 0 : _a2.visualizer;
    if (devVisualizerConfig && !globalThis.__tamaguiDevVisualizer) {
      let show = function(val) {
        clearTimeout(tm), isShowing = val, debugKeyListeners == null ? void 0 : debugKeyListeners.forEach((l) => l(val)), !val && resizeListener && (window.removeEventListener("resize", resizeListener), resizeListener = null);
      }, cancelShow = function() {
        clearTimeout(tm), resizeListener && (window.removeEventListener("resize", resizeListener), resizeListener = null);
      };
      globalThis.__tamaguiDevVisualizer = true, debugKeyListeners = /* @__PURE__ */ new Set();
      let tm, isShowing = false, resizeListener = null;
      const options = {
        key: "Alt",
        delay: 800,
        ...typeof devVisualizerConfig == "object" ? devVisualizerConfig : {}
      };
      window.addEventListener("blur", () => {
        show(false);
      }), window.addEventListener("keydown", ({
        key,
        metaKey,
        defaultPrevented
      }) => {
        clearTimeout(tm), !defaultPrevented && (metaKey || key === options.key && (resizeListener || (resizeListener = () => cancelShow(), window.addEventListener("resize", resizeListener)), tm = setTimeout(() => {
          show(true);
        }, options.delay)));
      }), window.addEventListener("keyup", ({
        defaultPrevented
      }) => {
        defaultPrevented || (cancelShow(), isShowing && show(false));
      });
    }
  });
}
var BaseText;
var BaseView;
var lastInteractionWasKeyboard = {
  value: false
};
var lastInteractionWasTouch = {
  value: false
};
isWeb && typeof document < "u" && (document.addEventListener("keydown", () => {
  lastInteractionWasKeyboard.value || (lastInteractionWasKeyboard.value = true);
}), document.addEventListener("mousedown", () => {
  lastInteractionWasKeyboard.value && (lastInteractionWasKeyboard.value = false);
}), document.addEventListener("mousemove", () => {
  lastInteractionWasKeyboard.value && (lastInteractionWasKeyboard.value = false), lastInteractionWasTouch.value = false;
}), document.addEventListener("touchstart", () => {
  lastInteractionWasTouch.value = true;
}));
function createComponent(staticConfig) {
  let config2 = null;
  const {
    Component,
    isText,
    isHOC
  } = staticConfig, component = import_react16.default.forwardRef((propsIn, forwardedRef) => {
    var _a2, _b2, _c, _d, _e, _f, _g;
    config2 || (config2 = getConfig());
    const internalID = process.env.NODE_ENV === "development" ? import_react16.default.useId() : "";
    process.env.NODE_ENV === "development" && startVisualizer && (startVisualizer(), startVisualizer = void 0), process.env.NODE_ENV === "test" && propsIn["data-test-renders"] && ((_b2 = (_a2 = propsIn["data-test-renders"]).current) != null ? _b2 : _a2.current = 0, propsIn["data-test-renders"].current += 1);
    const {
      context: context2,
      isReactNative
    } = staticConfig, debugProp = propsIn.debug, styledContextValue = context2 ? import_react16.default.useContext(context2) : void 0;
    let overriddenContextProps = null;
    const componentContext = import_react16.default.useContext(ComponentContext), hasTextAncestor = !!(isWeb && isText && componentContext.inText);
    !process.env.TAMAGUI_IS_CORE_NODE && process.env.NODE_ENV === "development" && debugProp === "profile" && !time2 && (time2 = (init_esm(), __toCommonJS(esm_exports)).timer().start(), globalThis.time = time2), process.env.NODE_ENV === "development" && time2 && time2`non-tamagui time (ignore)`;
    let props = propsIn;
    const componentName = props.componentName || staticConfig.componentName, defaultProps = getDefaultProps(staticConfig, props.componentName, isText && hasTextAncestor), [nextProps, overrides] = mergeComponentProps(defaultProps, styledContextValue, propsIn);
    props = nextProps, overriddenContextProps = overrides, process.env.NODE_ENV === "development" && isClient && import_react16.default.useEffect(() => {
      let node2, overlay = null;
      const remove = () => {
        var _a3;
        if (overlay) try {
          (_a3 = overlay.parentNode) == null ? void 0 : _a3.removeChild(overlay), overlay = null;
        } catch {
        }
      }, debugVisualizerHandler = (show = false) => {
        if (node2 = stateRef.current.host, !!node2) if (show) {
          overlay || (overlay = document.createElement("span"), overlay.style.inset = "0px", overlay.style.zIndex = "1000000", overlay.style.position = "absolute", overlay.style.borderColor = "red", overlay.style.borderWidth = "1px", overlay.style.borderStyle = "dotted");
          const dataAt = node2.getAttribute("data-at") || "", dataIn = node2.getAttribute("data-in") || "", tooltip = document.createElement("span");
          tooltip.style.position = "absolute", tooltip.style.top = "0px", tooltip.style.left = "0px", tooltip.style.padding = "3px", tooltip.style.background = "rgba(0,0,0,0.75)", tooltip.style.color = "rgba(255,255,255,1)", tooltip.style.fontSize = "12px", tooltip.style.lineHeight = "12px", tooltip.style.fontFamily = "monospace", tooltip.innerText = `${componentName || ""} ${dataAt} ${dataIn}`.trim(), overlay.appendChild(tooltip), node2.appendChild(overlay);
        } else remove();
      };
      return debugKeyListeners || (debugKeyListeners = /* @__PURE__ */ new Set()), debugKeyListeners.add(debugVisualizerHandler), () => {
        remove(), debugKeyListeners == null ? void 0 : debugKeyListeners.delete(debugVisualizerHandler);
      };
    }, [componentName]);
    const groupContextParent = import_react16.default.useContext(GroupContext), animationDriver = (() => {
      var _a3;
      if (props.animatedBy && (config2 == null ? void 0 : config2.animations)) {
        const animations = config2.animations;
        return "default" in animations ? (_a3 = animations[props.animatedBy]) != null ? _a3 : animations.default : props.animatedBy === "default" ? animations : null;
      }
      return componentContext.animationDriver;
    })(), useAnimations = animationDriver == null ? void 0 : animationDriver.useAnimations, componentState = useComponentState(props, (animationDriver == null ? void 0 : animationDriver.isStub) ? null : animationDriver, staticConfig, config2), {
      disabled,
      groupName,
      hasAnimationProp,
      hasEnterStyle,
      isAnimated,
      isExiting,
      isHydrated,
      presence,
      presenceState,
      setState,
      noClass,
      state: state2,
      stateRef,
      supportsCSS,
      willBeAnimated,
      willBeAnimatedClient,
      startedUnhydrated
    } = componentState;
    hasAnimationProp && (animationDriver == null ? void 0 : animationDriver.avoidReRenders) && useIsomorphicLayoutEffect(() => {
      const pendingState = stateRef.current.nextState;
      pendingState && (stateRef.current.nextState = void 0, componentState.setStateShallow(pendingState));
    });
    const allGroupContexts = (0, import_react16.useMemo)(() => {
      var _a3, _b3;
      if (!groupName || props.passThrough) return groupContextParent;
      const listeners2 = /* @__PURE__ */ new Set();
      return (_b3 = (_a3 = stateRef.current.group) == null ? void 0 : _a3.listeners) == null ? void 0 : _b3.clear(), stateRef.current.group = {
        listeners: listeners2,
        emit(state22) {
          listeners2.forEach((l) => l(state22));
        },
        subscribe(cb) {
          return listeners2.add(cb), listeners2.size === 1 && setStateShallow({
            hasDynGroupChildren: true
          }), () => {
            listeners2.delete(cb), listeners2.size === 0 && setStateShallow({
              hasDynGroupChildren: false
            });
          };
        }
      }, {
        ...groupContextParent,
        [groupName]: {
          state: {
            pseudo: defaultComponentStateMounted
          },
          subscribe: (listener) => {
            var _a4;
            const dispose = (_a4 = stateRef.current.group) == null ? void 0 : _a4.subscribe(listener);
            return () => {
              dispose == null ? void 0 : dispose();
            };
          }
        }
      };
    }, [stateRef, groupName, groupContextParent]);
    let setStateShallow = componentState.setStateShallow;
    process.env.NODE_ENV === "development" && time2 && time2`use-state`;
    const renderProp = props.render, element = isWeb && (!Component || typeof Component == "string") && renderProp || Component, BaseComponent = isText ? BaseText || element || "span" : BaseView || element || (hasTextAncestor ? "span" : "div");
    let elementType = BaseComponent;
    animationDriver && isAnimated && animationDriver.needsCustomComponent && (elementType = animationDriver[isText ? "Text" : "View"] || elementType);
    const disableTheme = props["data-disable-theme"] || isHOC;
    process.env.NODE_ENV === "development" && time2 && time2`theme-props`;
    const themeStateProps = {
      componentName,
      disable: disableTheme,
      shallow: props.themeShallow,
      debug: debugProp,
      unstyled: props.unstyled
    };
    if ("theme" in props && (themeStateProps.name = props.theme), themeStateProps.needsUpdate = () => !!stateRef.current.isListeningToTheme, process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile") {
      const name = `${componentName || (Component == null ? void 0 : Component.displayName) || (Component == null ? void 0 : Component.name) || "[Unnamed Component]"}`, type = (hasEnterStyle ? "(hasEnter)" : " ") + (isAnimated ? "(animated)" : " ") + (isReactNative ? "(rnw)" : " ") + (noClass ? "(noClass)" : " ") + (state2.press || state2.pressIn ? "(PRESSED)" : " ") + (state2.hover ? "(HOVERED)" : " ") + (state2.focus ? "(FOCUSED)" : " ") + (state2.focusWithin ? "(WITHIN FOCUSED)" : " ") + ((presenceState == null ? void 0 : presenceState.isPresent) === false ? "(EXIT)" : ""), dataIs = propsIn["data-is"] || "", banner = `<${name} /> ${internalID} ${dataIs ? ` ${dataIs}` : ""} ${type.trim()} (hydrated: ${isHydrated}) (unmounted: ${state2.unmounted})`, ch = propsIn.children;
      let childLog = typeof ch == "string" ? ch.length > 4 ? ch.slice(0, 4) + "..." : ch : "";
      childLog.length && (childLog = `(children: ${childLog})`), isWeb ? (console.info(`%c ${banner}`, "background: green; color: white;"), isServer ? log({
        noClass,
        isAnimated,
        isWeb,
        supportsCSS
      }) : (console.groupEnd(), console.groupCollapsed(`${childLog} [inspect props, state, context \u{1F447}]`), log("props in:", propsIn), log("final props:", props, Object.keys(props)), log({
        state: state2,
        staticConfig,
        elementType,
        themeStateProps
      }), log({
        context: context2,
        overriddenContextProps,
        componentContext
      }), log({
        presence,
        isAnimated,
        isHOC,
        hasAnimationProp,
        useAnimations
      }), console.groupEnd())) : (console.info(`

------------------------------
${banner}
------------------------------
`), log("children:", props.children), log({
        overriddenContextProps,
        styledContextValue
      }), log({
        noClass,
        isAnimated,
        isWeb,
        supportsCSS
      }));
    }
    process.env.NODE_ENV === "development" && time2 && time2`pre-theme-media`;
    const [theme, themeState] = useThemeWithState(themeStateProps);
    process.env.NODE_ENV === "development" && time2 && time2`theme`, elementType = element || elementType;
    const isStringElement = typeof elementType == "string", mediaState3 = useMedia(componentContext, debugProp);
    setDidGetVariableValue(false), process.env.NODE_ENV === "development" && time2 && time2`media`;
    const resolveValues = (
      // if HOC + mounted + has animation prop, resolve as value so it passes non-variable to child
      isAnimated && !supportsCSS || isHOC && state2.unmounted == false && hasAnimationProp ? "value" : "auto"
    ), styleProps = {
      mediaState: mediaState3,
      noClass,
      resolveValues,
      isExiting,
      isAnimated,
      willBeAnimated,
      styledContext: styledContextValue
    }, themeName = (themeState == null ? void 0 : themeState.name) || "";
    process.env.NODE_ENV === "development" && time2 && time2`split-styles-prepare`;
    const splitStyles = useSplitStyles(props, staticConfig, theme, themeName, state2, styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp), isPassthrough = !splitStyles;
    let contextForOverride = staticConfig.context;
    if (splitStyles == null ? void 0 : splitStyles.overriddenContextProps) {
      const contextForProps = staticConfig.context || ((_c = staticConfig.parentStaticConfig) == null ? void 0 : _c.context);
      if (contextForProps) {
        for (const key in splitStyles.overriddenContextProps) overriddenContextProps || (overriddenContextProps = {}), overriddenContextProps[key] = splitStyles.overriddenContextProps[key];
        staticConfig.context || (contextForOverride = contextForProps);
      }
    }
    const groupContext = groupName && (allGroupContexts == null ? void 0 : allGroupContexts[groupName]) || null;
    if (!isPassthrough && groupContext && // avoids onLayout if we don't need it
    props.containerType !== "normal") {
      const groupState = groupContext == null ? void 0 : groupContext.state;
      groupState && groupState.layout === void 0 && (((_d = splitStyles.style) == null ? void 0 : _d.width) || ((_e = splitStyles.style) == null ? void 0 : _e.height)) && (groupState.layout = {
        width: fromPx(splitStyles.style.width),
        height: fromPx(splitStyles.style.height)
      });
    }
    if (!isPassthrough && (hasAnimationProp || groupName) && (animationDriver == null ? void 0 : animationDriver.avoidReRenders)) {
      let updateGroupListeners = function() {
        const updatedState = stateRef.current.nextState;
        if (groupContext) {
          const {
            group,
            hasDynGroupChildren,
            unmounted,
            transition,
            ...childrenGroupState
          } = updatedState;
          notifyGroupSubscribers(groupContext, stateRef.current.group || null, childrenGroupState);
        }
      };
      const ogSetStateShallow = setStateShallow;
      if (stateRef.current.updateStyleListener = () => {
        const useStyleListener = stateRef.current.useStyleListener;
        if (!useStyleListener) {
          const pendingState = stateRef.current.nextState;
          pendingState && (stateRef.current.nextState = void 0, ogSetStateShallow(pendingState));
          return;
        }
        const updatedState = stateRef.current.nextState || state2, mediaState22 = stateRef.current.nextMedia, nextStyles = getSplitStyles(props, staticConfig, theme, themeName, updatedState, mediaState22 ? {
          ...styleProps,
          mediaState: mediaState22
        } : styleProps, null, componentContext, allGroupContexts, elementType, startedUnhydrated, debugProp), effectiveTransition = resolveEffectivePseudoTransition(stateRef.current.prevPseudoState, updatedState, nextStyles == null ? void 0 : nextStyles.pseudoTransitions, props.transition);
        stateRef.current.prevPseudoState = extractPseudoState(updatedState), useStyleListener((nextStyles == null ? void 0 : nextStyles.style) || {}, effectiveTransition);
      }, componentContext.mediaEmitListeners || (componentContext.mediaEmitListeners = /* @__PURE__ */ new Set()), !stateRef.current.mediaEmitCleanup) {
        const updateListener = (next) => {
          var _a3, _b3;
          stateRef.current.nextMedia = next, (_b3 = (_a3 = stateRef.current).updateStyleListener) == null ? void 0 : _b3.call(_a3);
        };
        componentContext.mediaEmitListeners.add(updateListener), stateRef.current.mediaEmitCleanup = () => {
          var _a3;
          (_a3 = componentContext.mediaEmitListeners) == null ? void 0 : _a3.delete(updateListener);
        };
      }
      componentContext.mediaEmit || (componentContext.mediaEmit = (next) => {
        for (const listener of componentContext.mediaEmitListeners) listener(next);
      }), stateRef.current.setStateShallow = (nextOrGetNext) => {
        var _a3, _b3;
        const prev = stateRef.current.nextState || state2, next = typeof nextOrGetNext == "function" ? nextOrGetNext(prev) : nextOrGetNext;
        if (next === prev || isEqualShallow(prev, next)) return;
        const canAvoidReRender = Object.keys(next).every((key) => avoidReRenderKeys.has(key)), updatedState = {
          ...prev,
          ...next
        };
        stateRef.current.nextState = updatedState, canAvoidReRender ? (process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile" && (console.groupCollapsed("[\u26A1\uFE0F] avoid setState", componentName, next, {
          updatedState,
          props
        }), console.info(stateRef.current.host), console.groupEnd()), updateGroupListeners(), (_b3 = (_a3 = stateRef.current).updateStyleListener) == null ? void 0 : _b3.call(_a3)) : (process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile" && console.info("[\u{1F40C}] re-render", {
          canAvoidReRender,
          next
        }), ogSetStateShallow(next));
      }, setStateShallow = (state22) => {
        var _a3, _b3;
        (_b3 = (_a3 = stateRef.current).setStateShallow) == null ? void 0 : _b3.call(_a3, state22);
      };
    }
    process.env.NODE_ENV === "development" && time2 && time2`split-styles`, splitStyles && (props.group && props.untilMeasured === "hide" && !stateRef.current.hasMeasured && (splitStyles.style || (splitStyles.style = {}), splitStyles.style.opacity = 0), splitStyles.dynamicThemeAccess != null && (stateRef.current.isListeningToTheme = splitStyles.dynamicThemeAccess));
    const hasRuntimeMediaKeys = (splitStyles == null ? void 0 : splitStyles.hasMedia) && splitStyles.hasMedia !== true, shouldListenForMedia = didGetVariableValue() || hasRuntimeMediaKeys || noClass && (splitStyles == null ? void 0 : splitStyles.hasMedia) === true, mediaListeningKeys = hasRuntimeMediaKeys ? splitStyles.hasMedia : null;
    process.env.NODE_ENV === "development" && debugProp === "verbose" && console.info("useMedia() createComponent", shouldListenForMedia, mediaListeningKeys), setMediaShouldUpdate(componentContext, shouldListenForMedia, mediaListeningKeys);
    const {
      viewProps: viewPropsIn,
      pseudos,
      style: splitStylesStyle,
      classNames,
      pseudoGroups,
      mediaGroups
    } = splitStyles || {}, propsWithAnimation = props, {
      asChild,
      children,
      themeShallow,
      spaceDirection: _spaceDirection,
      onPress,
      onLongPress,
      onPressIn,
      onPressOut,
      onHoverIn,
      onHoverOut,
      onMouseUp,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      separator,
      // ignore from here on out
      passThrough,
      forceStyle: _forceStyle,
      // @ts-ignore  for next/link compat etc
      onClick,
      theme: _themeProp,
      ...nonTamaguiProps
    } = viewPropsIn || {};
    let viewProps = nonTamaguiProps;
    props.forceStyle && (viewProps.forceStyle = props.forceStyle), isHOC && (typeof _themeProp < "u" && (viewProps.theme = _themeProp), typeof passThrough < "u" && (viewProps.passThrough = passThrough));
    let animationStyles;
    const shouldUseAnimation = (
      // if it supports css vars we run it on server too to get matching initial style
      (supportsCSS ? willBeAnimatedClient : willBeAnimated) && useAnimations && !isHOC
    );
    let animatedRef;
    if (shouldUseAnimation) {
      const useStyleEmitter = (animationDriver == null ? void 0 : animationDriver.avoidReRenders) ? (listener) => {
        stateRef.current.useStyleListener = listener;
      } : void 0, effectiveTransition = resolveEffectivePseudoTransition(stateRef.current.prevPseudoState, state2, splitStyles == null ? void 0 : splitStyles.pseudoTransitions, props.transition);
      splitStyles && (splitStyles.effectiveTransition = effectiveTransition);
      const animations = useAnimations({
        props: propsWithAnimation,
        // if hydrating, send empty style
        style: splitStylesStyle || {},
        // @ts-ignore
        styleState: splitStyles,
        useStyleEmitter,
        presence,
        componentState: state2,
        styleProps,
        theme,
        themeName,
        pseudos: pseudos || null,
        staticConfig,
        stateRef
      });
      animations && (animations.ref && (animatedRef = animations.ref), isHydrated && animations && (animationStyles = animations.style, viewProps.style = animationStyles, animations.className && (viewProps.className = `${state2.unmounted === "should-enter" ? "t_unmounted " : ""}${viewProps.className || ""} ${animations.className}`))), process.env.NODE_ENV === "development" && time2 && time2`animations`;
    }
    process.env.NODE_ENV === "development" && props.untilMeasured && !props.group && console.warn(`You set the untilMeasured prop without setting group. This doesn't work, be sure to set untilMeasured on the parent that sets group, not the children that use the $group- prop.

If you meant to do this, you can disable this warning - either change untilMeasured and group at the same time, or do group={conditional ? 'name' : undefined}`), process.env.NODE_ENV === "development" && time2 && time2`destructure`, !isPassthrough && groupContext && // avoids onLayout if we don't need it
    props.containerType !== "normal" && (nonTamaguiProps.onLayout = composeEventHandlers(nonTamaguiProps.onLayout, (e) => {
      var _a3;
      const layout = e.nativeEvent.layout;
      groupContext.state.layout = layout, (_a3 = stateRef.current.group) == null ? void 0 : _a3.emit({
        layout
      }), !stateRef.current.hasMeasured && props.untilMeasured === "hide" && setState((prev) => ({
        ...prev
      })), stateRef.current.hasMeasured = true;
    })), viewProps = ((_g = (_f = hooks).usePropsTransform) == null ? void 0 : _g.call(_f, elementType, nonTamaguiProps, stateRef, stateRef.current.willHydrate)) || nonTamaguiProps, stateRef.current.composedRef || (stateRef.current.composedRef = composeRefs((x) => stateRef.current.host = x, forwardedRef, setElementProps, animatedRef)), viewProps.ref = stateRef.current.composedRef, usePointerEvents(props, viewProps), process.env.NODE_ENV === "development" && !isReactNative && !isText && isWeb && !isHOC && import_react16.default.Children.toArray(props.children).forEach((item) => {
      typeof item == "string" && item !== `
` && console.error(`Unexpected text node: ${item}. A text node cannot be a child of a <${staticConfig.componentName || propsIn.tag || "View"}>.`, props);
    }), process.env.NODE_ENV === "development" && time2 && time2`events-hooks`;
    const unPress = () => {
      setStateShallow({
        press: false,
        pressIn: false
      });
    };
    process.env.NODE_ENV === "development" && isWeb && useIsomorphicLayoutEffect(() => {
      if (debugProp === "verbose") {
        let cssStyleDeclarationToObject = function(style) {
          const styleObject = {};
          for (let i = 0; i < style.length; i++) {
            let prop = style[i];
            styleObject[prop] = style.getPropertyValue(prop);
          }
          return styleObject;
        };
        const computed = stateRef.current.host ? cssStyleDeclarationToObject(getComputedStyle(stateRef.current.host)) : {};
        console.groupCollapsed(`Rendered > (opacity: ${computed.opacity})`), console.warn(stateRef.current.host), console.warn(computed), console.groupEnd();
      }
    }), useIsomorphicLayoutEffect(() => {
      if (state2.unmounted === true && hasEnterStyle) {
        setStateShallow({
          unmounted: "should-enter"
        });
        return;
      }
      if (state2.unmounted) {
        if (supportsCSS) {
          let cancelled = false;
          return requestAnimationFrame(() => {
            cancelled || requestAnimationFrame(() => {
              cancelled || setStateShallow({
                unmounted: false
              });
            });
          }), () => {
            cancelled = true;
          };
        }
        setStateShallow({
          unmounted: false
        });
      }
      return () => {
        var _a3, _b3;
        componentSetStates.delete(setState), (_b3 = (_a3 = stateRef.current).mediaEmitCleanup) == null ? void 0 : _b3.call(_a3);
      };
    }, [state2.unmounted, supportsCSS]), useIsomorphicLayoutEffect(() => {
      if (!disabled && !(!pseudoGroups && !mediaGroups) && allGroupContexts) return subscribeToContextGroup({
        groupContext: allGroupContexts,
        setStateShallow,
        mediaGroups,
        pseudoGroups
      });
    }, [allGroupContexts, disabled, pseudoGroups ? objectIdentityKey(pseudoGroups) : 0, mediaGroups ? objectIdentityKey(mediaGroups) : 0]);
    const groupEmitter = stateRef.current.group;
    useIsomorphicLayoutEffect(() => {
      !groupContext || !groupEmitter || notifyGroupSubscribers(groupContext, groupEmitter, state2);
    }, [groupContext, groupEmitter, state2]);
    const runtimePressStyle = !disabled && noClass && (pseudos == null ? void 0 : pseudos.pressStyle), runtimeFocusStyle = !disabled && noClass && (pseudos == null ? void 0 : pseudos.focusStyle), runtimeFocusVisibleStyle = !disabled && noClass && (pseudos == null ? void 0 : pseudos.focusVisibleStyle), attachFocus = !!(runtimePressStyle || runtimeFocusStyle || runtimeFocusVisibleStyle || onFocus || onBlur || componentContext.setParentFocusState), hasDynamicGroupChildren = !!(groupName && state2.hasDynGroupChildren), attachPress = !!(hasDynamicGroupChildren || runtimePressStyle || onPress || onPressOut || onPressIn || onMouseDown || onMouseUp || onLongPress || onClick || (pseudos == null ? void 0 : pseudos.focusVisibleStyle)), runtimeHoverStyle = !disabled && noClass && (pseudos == null ? void 0 : pseudos.hoverStyle), needsHoverState = !!(hasDynamicGroupChildren || runtimeHoverStyle), attachHover = isWeb && !!(hasDynamicGroupChildren || needsHoverState || onMouseEnter || onMouseLeave), shouldAttach = !disabled && !props.asChild && !!(attachFocus || attachPress || attachHover || runtimePressStyle || runtimeHoverStyle || runtimeFocusStyle), needsPressState = !!(hasDynamicGroupChildren || runtimePressStyle);
    process.env.NODE_ENV === "development" && time2 && time2`events-setup`, process.env.NODE_ENV === "development" && debugProp === "verbose" && log("\u{1FAA9} events()", {
      runtimeFocusStyle,
      runtimePressStyle,
      runtimeHoverStyle,
      runtimeFocusVisibleStyle,
      attachPress,
      attachFocus,
      attachHover,
      shouldAttach,
      needsHoverState,
      pseudos
    });
    const events = shouldAttach ? {
      onPressOut: attachPress ? (e) => {
        unPress(), onPressOut == null ? void 0 : onPressOut(e), onMouseUp == null ? void 0 : onMouseUp(e);
      } : void 0,
      ...(attachHover || attachPress) && {
        onMouseEnter: (e) => {
          const next = {};
          needsHoverState && !lastInteractionWasTouch.value && (next.hover = true), needsPressState && state2.pressIn && (next.press = true), setStateShallow(next), onHoverIn == null ? void 0 : onHoverIn(e), onMouseEnter == null ? void 0 : onMouseEnter(e);
        },
        onMouseLeave: (e) => {
          const next = {};
          needsHoverState && (next.hover = false), needsPressState && (next.press = false, next.pressIn = false), setStateShallow(next), onHoverOut == null ? void 0 : onHoverOut(e), onMouseLeave == null ? void 0 : onMouseLeave(e);
        }
      },
      onPressIn: attachPress ? (e) => {
        needsPressState && setStateShallow({
          press: true,
          pressIn: true
        }), onPressIn == null ? void 0 : onPressIn(e), onMouseDown == null ? void 0 : onMouseDown(e), isWeb && componentSetStates.add(setState);
      } : void 0,
      onPress: attachPress ? (e) => {
        unPress(), isWeb && (onClick == null ? void 0 : onClick(e)), onPress == null ? void 0 : onPress(e), onLongPress == null ? void 0 : onLongPress(e);
      } : void 0,
      ...attachFocus && {
        onFocus: (e) => {
          const next = {};
          componentContext.setParentFocusState && (next.focusWithin = true), (pseudos == null ? void 0 : pseudos.focusVisibleStyle) && lastInteractionWasKeyboard.value ? next.focusVisible = true : next.focus = true, setStateShallow(next), onFocus == null ? void 0 : onFocus(e);
        },
        onBlur: (e) => {
          componentContext.setParentFocusState && componentContext.setParentFocusState({
            focusWithin: false
          }), setStateShallow({
            focus: false,
            focusVisible: false,
            focusWithin: false
          }), onBlur == null ? void 0 : onBlur(e);
        }
      }
    } : null;
    events && !isReactNative && Object.assign(viewProps, getWebEvents(events)), process.env.NODE_ENV === "development" && time2 && time2`events`, process.env.NODE_ENV === "development" && debugProp === "verbose" && log("events", {
      events,
      attachHover,
      attachPress
    });
    const pressGesture = null;
    if (process.env.NODE_ENV === "development" && time2 && time2`hooks`, asChild) {
      elementType = Slot;
      {
        const passEvents = getWebEvents({
          onPress,
          onLongPress,
          onPressIn,
          onPressOut,
          onMouseUp,
          onMouseDown,
          onMouseEnter,
          onMouseLeave
        }, asChild === "web" || asChild === "except-style-web");
        Object.assign(viewProps, passEvents);
      }
    }
    process.env.NODE_ENV === "development" && time2 && time2`spaced-as-child`;
    let content;
    if (isPassthrough) content = import_react16.default.createElement(BaseComponent, {
      style: {
        display: "contents"
      }
    }, propsIn.children);
    else {
      hooks.useChildren && (content = hooks.useChildren(elementType, content || children, viewProps));
      const isRenderPropString = typeof renderProp == "string";
      if (renderProp && !isRenderPropString) {
        const out = getCustomRender(renderProp, content || children, viewProps, componentState);
        out && (viewProps = out.viewProps, elementType = out.elementType);
      }
      content || (isRenderPropString && viewProps.render, content = import_react16.default.createElement(elementType, viewProps, content || children)), process.env.NODE_ENV === "development" && time2 && time2`use-children`;
    }
    const ResetPresence2 = animationDriver == null ? void 0 : animationDriver.ResetPresence, needsReset = !!// not when passing down to child
    (!asChild && // not when passThrough
    splitStyles && // not when HOC
    !isHOC && ResetPresence2 && willBeAnimated && (hasEnterStyle || presenceState)), hasEverReset = stateRef.current.hasEverResetPresence;
    if (needsReset && !hasEverReset && (stateRef.current.hasEverResetPresence = true), (needsReset || hasEverReset) && ResetPresence2 && (content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ResetPresence2, {
      disabled: !needsReset,
      children: content
    })), process.env.NODE_ENV === "development" && time2 && time2`create-element`, "focusWithinStyle" in propsIn && (content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ComponentContext.Provider, {
      ...componentContext,
      setParentFocusState: setStateShallow,
      children: content
    })), "group" in props && (content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GroupContext.Provider, {
      value: allGroupContexts,
      children: content
    })), !asChild && isText && !hasTextAncestor && (content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ComponentContext.Provider, {
      ...componentContext,
      inText: true,
      children: content
    })), process.env.NODE_ENV === "development" && time2 && time2`group-context`, content = disableTheme || !splitStyles ? content : getThemedChildren(themeState, content, themeStateProps, false, stateRef), process.env.NODE_ENV === "development" && time2 && time2`themed-children`, isReactNative && !asChild && (content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", {
      className: "_dsp_contents",
      ...!isPassthrough && isHydrated && events && getWebEvents(events),
      children: content
    })), overriddenContextProps && contextForOverride) {
      const Provider = contextForOverride.Provider;
      for (const key in styledContextValue) key in overriddenContextProps || (overriddenContextProps[key] = styledContextValue[key]);
      content = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Provider, {
        __disableMergeDefaultValues: true,
        ...overriddenContextProps,
        children: content
      });
    }
    if (process.env.NODE_ENV === "development" && time2 && time2`context-override`, startedUnhydrated && splitStyles && (content = /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, {
      children: [content, isHydrated ? null : getStyleTags(Object.values(splitStyles.rulesToInsert))]
    })), process.env.NODE_ENV === "development" && time2 && time2`style-tags`, process.env.NODE_ENV === "development" && debugProp && debugProp !== "profile") {
      const title = `render <${typeof elementType == "string" ? elementType : "Component"} /> (${internalID}) with props`;
      if (!isWeb || !isClient) {
        log(title), log("state: ", state2), isDevTools && log("viewProps", viewProps), log("final styles:");
        for (const key in splitStylesStyle) log(key, splitStylesStyle[key]);
      } else {
        console.groupCollapsed(title);
        try {
          log("viewProps", viewProps), log("children", content), typeof window < "u" && log({
            propsIn,
            props,
            attachPress,
            animationStyles,
            classNames,
            content,
            elementType,
            events,
            isAnimated,
            hasRuntimeMediaKeys,
            isStringElement,
            mediaListeningKeys,
            pseudos,
            shouldAttach,
            noClass,
            shouldListenForMedia,
            splitStyles,
            splitStylesStyle,
            state: state2,
            stateRef,
            staticConfig,
            styleProps,
            themeState,
            viewProps,
            willBeAnimated,
            startedUnhydrated
          });
        } catch {
        } finally {
          console.groupEnd();
        }
      }
    }
    return process.env.NODE_ENV === "development" && time2 && (time2`rest`, globalThis.willPrint || (globalThis.willPrint = true, setTimeout(() => {
      delete globalThis.willPrint, time2.print(), time2 = null;
    }, 50))), content;
  });
  function notifyGroupSubscribers(groupContext, groupEmitter, pseudo) {
    if (!groupContext || !groupEmitter) return;
    const nextState = {
      ...groupContext.state,
      pseudo
    };
    groupEmitter.emit(nextState), groupContext.state = nextState;
  }
  staticConfig.componentName && (component.displayName = staticConfig.componentName);
  let res = component;
  res = import_react16.default.memo(res), res.staticConfig = staticConfig;
  function extendStyledConfig(extended) {
    return {
      ...staticConfig,
      ...extended,
      neverFlatten: true,
      isHOC: true,
      isStyledHOC: false
    };
  }
  function styleable(Component2, options) {
    let out = typeof Component2 == "function" && Component2.length === 1 ? Component2 : import_react16.default.forwardRef(Component2);
    const extendedConfig = extendStyledConfig(options == null ? void 0 : options.staticConfig);
    return out = (options == null ? void 0 : options.disableTheme) ? out : themeable(out, extendedConfig, true), (extendedConfig.memo || process.env.TAMAGUI_MEMOIZE_STYLEABLE) && (out = import_react16.default.memo(out)), out.staticConfig = extendedConfig, out.styleable = styleable, out;
  }
  return res.styleable = styleable, res;
}
var fromPx = (val) => typeof val == "number" ? val : typeof val == "string" ? +val.replace("px", "") : 0;
var getCustomRender = (renderProp, content, viewProps, state2) => {
  if (typeof renderProp == "function") {
    const out = renderProp(viewProps, state2);
    renderProp = out;
  }
  if (renderProp && typeof renderProp == "object" && import_react16.default.isValidElement(renderProp) && renderProp) {
    const elementProps = renderProp.props, mergedProps = elementProps ? mergeRenderElementProps(elementProps, viewProps, content) : viewProps;
    return {
      elementType: renderProp.type,
      viewProps: mergedProps
    };
  }
};

// node_modules/@tamagui/web/dist/esm/createFont.mjs
var fontWeights = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
var processSection = (section, keys, defaultValue) => {
  if (typeof section == "string") return section;
  const sectionKeys = Object.keys(section);
  let fillValue = section[sectionKeys[0]];
  return Object.fromEntries([.../* @__PURE__ */ new Set([...keys, ...sectionKeys])].map((key) => {
    var _a2, _b2;
    const value = (_b2 = (_a2 = section[key]) != null ? _a2 : defaultValue) != null ? _b2 : fillValue;
    return fillValue = value, defaultValue = value, [key, value];
  }));
};
var createFont = (font) => {
  const sizeKeys = Object.keys(font.size || {}), processedFont = Object.fromEntries(Object.entries(font).map(([key, section]) => [key, processSection(section, key === "face" ? fontWeights : sizeKeys, key === "face" ? {
    normal: font.family
  } : void 0)]));
  return Object.freeze(processedFont);
};

// node_modules/@tamagui/web/dist/esm/createVariables.mjs
var cache6 = /* @__PURE__ */ new WeakMap();
var createVariables = (tokens3, parentPath = "", isFont = false) => {
  if (cache6.has(tokens3)) return tokens3;
  const res = {};
  let i = 0;
  for (let keyIn in tokens3) {
    i++;
    const val = tokens3[keyIn], isPrefixed = keyIn[0] === "$", keyWithPrefix = isPrefixed ? keyIn : `$${keyIn}`, key = isPrefixed ? keyWithPrefix.slice(1) : keyIn;
    if (isVariable(val)) {
      res[key] = val;
      continue;
    }
    const niceKey = simpleHash(key, 1e3), name = parentPath && parentPath !== "t-color" ? `${parentPath}-${niceKey}` : `c-${niceKey}`;
    if (val && typeof val == "object" && "needsPx" in val && "val" in val) {
      const finalValue2 = createVariable({
        val: val.val,
        name,
        key: keyWithPrefix
      });
      isWeb && (finalValue2.needsPx = val.needsPx), res[key] = finalValue2;
      continue;
    }
    if (val && typeof val == "object") {
      res[key] = createVariables(
        tokens3[key],
        name,
        false
        /* note: don't pass isFont down, we want to avoid it past the first level */
      );
      continue;
    }
    const finalValue = isVariable(val) ? val : createVariable({
      val,
      name,
      key: keyWithPrefix
    });
    res[key] = finalValue;
  }
  return cache6.set(res, true), res;
};

// node_modules/@tamagui/web/dist/esm/createTokens.mjs
function createTokens(tokens3) {
  var _a2;
  return createVariables(tokens3, (_a2 = process.env.TAMAGUI_TOKEN_PREFIX) != null ? _a2 : "t");
}

// node_modules/@tamagui/web/dist/esm/setupReactNative.mjs
var ReactNativeStaticConfigs = /* @__PURE__ */ new WeakMap();
function getReactNativeConfig(Component) {
  var _a2;
  if (Component) return Component.getSize && Component.prefetch ? RNConfigs.Image : Component.displayName === "Text" && Component.render ? RNConfigs.Text : Component.render && (Component.displayName === "ScrollView" || Component.displayName === "View") ? RNConfigs.default : ((_a2 = Component.State) == null ? void 0 : _a2.blurTextInput) ? RNConfigs.TextInput : ReactNativeStaticConfigs.get(Component);
}
var RNConfigs = {
  Image: {
    isReactNative: true,
    inlineProps: /* @__PURE__ */ new Set(["src", "width", "height"])
  },
  Text: {
    isReactNative: true,
    isText: true
  },
  TextInput: {
    isReactNative: true,
    isInput: true,
    isText: true
  },
  default: {
    isReactNative: true
  }
};

// node_modules/@tamagui/web/dist/esm/helpers/mergeVariants.mjs
var mergeVariants = (parentVariants, ourVariants, level = 0) => {
  const variants2 = {};
  for (const key in ourVariants) {
    const parentVariant = parentVariants == null ? void 0 : parentVariants[key], ourVariant = ourVariants[key];
    !parentVariant || typeof ourVariant == "function" ? variants2[key] = ourVariant : parentVariant && !ourVariant ? variants2[key] = parentVariant[key] : level === 0 ? variants2[key] = mergeVariants(parentVariant, ourVariant, level + 1) : variants2[key] = {
      ...parentVariant,
      ...ourVariant
    };
  }
  return {
    ...parentVariants,
    ...variants2
  };
};

// node_modules/@tamagui/web/dist/esm/styled.mjs
var textLikeElements = /* @__PURE__ */ new Set(["a", "abbr", "b", "bdi", "bdo", "cite", "code", "data", "del", "dfn", "em", "i", "ins", "kbd", "label", "mark", "q", "s", "samp", "small", "span", "strong", "sub", "sup", "time", "u", "var"]);
function styledHtml(tag, options) {
  const isText = textLikeElements.has(tag), {
    variants: variants2,
    name,
    defaultVariants,
    context: context2,
    ...defaultProps
  } = options || {}, conf4 = {
    Component: tag,
    variants: variants2,
    defaultProps,
    defaultVariants,
    componentName: name,
    isReactNative: false,
    isText,
    acceptsClassName: true,
    context: context2
  };
  return (defaultProps.children || context2) && (conf4.neverFlatten = true), createComponent(conf4);
}
function styled(ComponentIn, options, config2) {
  if (process.env.NODE_ENV !== "production" && !ComponentIn) throw new Error("No component given to styled()");
  const parentStaticConfig = ComponentIn.staticConfig, isPlainStyledComponent = !!parentStaticConfig && !(parentStaticConfig.isReactNative || parentStaticConfig.isHOC);
  let Component = (parentStaticConfig == null ? void 0 : parentStaticConfig.isHOC) && !(parentStaticConfig == null ? void 0 : parentStaticConfig.isStyledHOC) || isPlainStyledComponent ? ComponentIn : (parentStaticConfig == null ? void 0 : parentStaticConfig.Component) || ComponentIn;
  const reactNativeConfig = parentStaticConfig ? void 0 : getReactNativeConfig(Component), isReactNative = !!(reactNativeConfig || (config2 == null ? void 0 : config2.isReactNative) || (parentStaticConfig == null ? void 0 : parentStaticConfig.isReactNative)), staticConfigProps = (() => {
    var _a2;
    let {
      variants: variants2,
      name,
      defaultVariants,
      context: context2,
      ...defaultProps
    } = options || {}, parentDefaultVariants, parentDefaultProps;
    if (parentStaticConfig && !(parentStaticConfig.isHOC && !parentStaticConfig.isStyledHOC)) {
      const pdp = parentStaticConfig.defaultProps;
      for (const key in pdp) {
        const val = pdp[key];
        parentStaticConfig.defaultVariants && key in parentStaticConfig.defaultVariants && (!defaultVariants || !(key in defaultVariants)) && (parentDefaultVariants || (parentDefaultVariants = {}), parentDefaultVariants[key] = val), !(key in defaultProps) && (!defaultVariants || !(key in defaultVariants)) && (parentDefaultProps || (parentDefaultProps = {}), parentDefaultProps[key] = pdp[key]);
      }
      parentStaticConfig.variants && (variants2 = mergeVariants(parentStaticConfig.variants, variants2));
    }
    (parentDefaultProps || defaultVariants || parentDefaultVariants) && (defaultProps = {
      ...parentDefaultProps,
      ...parentDefaultVariants,
      ...defaultProps,
      ...defaultVariants
    }), (parentStaticConfig == null ? void 0 : parentStaticConfig.isHOC) && name && (defaultProps.componentName = name);
    const isText = !!((config2 == null ? void 0 : config2.isText) || (parentStaticConfig == null ? void 0 : parentStaticConfig.isText)), acceptsClassName = (_a2 = config2 == null ? void 0 : config2.acceptsClassName) != null ? _a2 : isPlainStyledComponent || isReactNative || (parentStaticConfig == null ? void 0 : parentStaticConfig.isHOC) && (parentStaticConfig == null ? void 0 : parentStaticConfig.acceptsClassName), conf4 = {
      ...parentStaticConfig,
      ...config2,
      ...!isPlainStyledComponent && {
        Component
      },
      // @ts-expect-error
      variants: variants2,
      defaultProps,
      defaultVariants,
      componentName: name || (parentStaticConfig == null ? void 0 : parentStaticConfig.componentName),
      isReactNative,
      isText,
      acceptsClassName,
      context: context2,
      ...reactNativeConfig,
      isStyledHOC: !!(parentStaticConfig == null ? void 0 : parentStaticConfig.isHOC),
      parentStaticConfig
    };
    return (defaultProps.children || !acceptsClassName || context2) && (conf4.neverFlatten = true), conf4;
  })(), component = createComponent(staticConfigProps || {});
  for (const key in ComponentIn) key !== "propTypes" && (key in component || (component[key] = ComponentIn[key]));
  return component;
}
var styledExport = new Proxy(styled, {
  get(target, prop) {
    return prop in target ? target[prop] : (options) => styledHtml(prop, options);
  }
});

// node_modules/@tamagui/web/dist/esm/hooks/useProps.mjs
var import_react17 = __toESM(require("react"), 1);

// node_modules/@tamagui/web/dist/esm/views/View.mjs
var View = createComponent({
  acceptsClassName: true,
  defaultProps: viewDefaultStyles,
  validStyles
});

// node_modules/@tamagui/web/dist/esm/hooks/useProps.mjs
function useProps(props, opts) {
  const [propsOut, styleOut] = usePropsAndStyle(props, {
    ...opts,
    noExpand: true,
    noNormalize: true,
    resolveValues: "none"
  });
  return {
    ...propsOut,
    ...styleOut
  };
}
function usePropsAndStyle(props, opts) {
  var _a2, _b2;
  const staticConfig = (_b2 = (_a2 = opts == null ? void 0 : opts.forComponent) == null ? void 0 : _a2.staticConfig) != null ? _b2 : View.staticConfig, [theme, themeState] = useThemeWithState({
    componentName: staticConfig.componentName,
    name: "theme" in props ? props.theme : void 0,
    needsUpdate() {
      return true;
    }
  }), componentContext = import_react17.default.useContext(ComponentContext), groupContext = import_react17.default.useContext(GroupContext), {
    state: state2,
    disabled,
    setStateShallow
  } = useComponentState(props, componentContext.animationDriver, staticConfig, getConfig()), mediaStateNow = (opts == null ? void 0 : opts.noMedia) ? (
    // not safe to use mediaState but really marginal to hit this
    mediaState
  ) : useMedia(), splitStyles = useSplitStyles(props, staticConfig, theme, (themeState == null ? void 0 : themeState.name) || "", state2, {
    isAnimated: false,
    mediaState: mediaStateNow,
    noSkip: true,
    noMergeStyle: true,
    noClass: true,
    resolveValues: "auto",
    ...opts
  }, null, componentContext, groupContext), {
    mediaGroups,
    pseudoGroups
  } = splitStyles || {};
  return useIsomorphicLayoutEffect(() => {
    if (!disabled) {
      if (state2.unmounted) {
        setStateShallow({
          unmounted: false
        });
        return;
      }
      if (groupContext) return subscribeToContextGroup({
        groupContext,
        setStateShallow,
        mediaGroups,
        pseudoGroups
      });
    }
  }, [disabled, groupContext, pseudoGroups ? Object.keys([...pseudoGroups]).join("") : 0, mediaGroups ? Object.keys([...mediaGroups]).join("") : 0]), [(splitStyles == null ? void 0 : splitStyles.viewProps) || {}, (splitStyles == null ? void 0 : splitStyles.style) || {}, theme, mediaState];
}

// node_modules/@tamagui/web/dist/esm/views/Text.mjs
var ellipsisStyle = {
  maxWidth: "100%",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var Text = createComponent({
  componentName: "Text",
  acceptsClassName: true,
  isText: true,
  defaultProps: {
    display: "inline",
    // display: inline breaks css transform styles
    boxSizing: "border-box",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    margin: 0
  },
  inlineWhenUnflattened: /* @__PURE__ */ new Set(["fontFamily"]),
  variants: {
    numberOfLines: {
      1: ellipsisStyle,
      ":number": (numberOfLines) => numberOfLines >= 1 ? {
        WebkitLineClamp: numberOfLines,
        WebkitBoxOrient: "vertical",
        display: "-webkit-box",
        overflow: "hidden"
      } : null
    },
    ellipsis: {
      true: ellipsisStyle
    }
  },
  validStyles: {
    ...validStyles,
    ...stylePropsTextOnly
  }
});
Text.displayName = "Text";

// node_modules/@tamagui/use-presence/dist/esm/PresenceContext.mjs
var React9 = __toESM(require("react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
var PresenceContext = React9.createContext(null);
var ResetPresence = (props) => {
  const parent = React9.useContext(PresenceContext);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(PresenceContext.Provider, {
    value: props.disable ? parent : null,
    children: props.children
  });
};

// node_modules/@tamagui/use-presence/dist/esm/usePresence.mjs
var React10 = __toESM(require("react"), 1);
function usePresence() {
  const context2 = React10.useContext(PresenceContext);
  if (!context2) return [true, null, context2];
  const {
    id,
    isPresent: isPresent2,
    onExitComplete,
    register
  } = context2;
  return React10.useEffect(() => register(id), []), !isPresent2 && onExitComplete ? [false, () => onExitComplete == null ? void 0 : onExitComplete(id), context2] : [true, void 0, context2];
}

// node_modules/@tamagui/start-transition/dist/esm/index.mjs
var import_react18 = require("react");
var startTransition = (callback) => {
  (0, import_react18.startTransition)(callback);
};

// node_modules/@tamagui/stacks/dist/esm/Stacks.mjs
var import_core2 = require("@tamagui/core");

// node_modules/@tamagui/stacks/dist/esm/getElevation.mjs
var import_core = require("@tamagui/core");
var getElevation = (size3, extras) => {
  if (!size3) return;
  const {
    tokens: tokens3
  } = extras, token = tokens3.size[size3], sizeNum = (0, import_core.isVariable)(token) ? +token.val : size3;
  return getSizedElevation(sizeNum, extras);
};
var getSizedElevation = (val, {
  theme,
  tokens: tokens3
}) => {
  let num = 0;
  if (val === true) {
    const val2 = (0, import_core.getVariableValue)(tokens3.size.true);
    typeof val2 == "number" ? num = val2 : num = 10;
  } else num = +val;
  if (num === 0) return;
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  return {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: {
      height,
      width: 0
    },
    ...import_core.isAndroid ? {
      elevationAndroid: 2 * height
    } : {}
  };
};

// node_modules/@tamagui/stacks/dist/esm/Stacks.mjs
var fullscreenStyle = {
  position: "absolute",
  inset: 0
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation,
    ":number": getElevation
  }
};
var YStack = (0, import_core2.styled)(import_core2.View, {
  flexDirection: "column",
  variants
});
YStack.displayName = "YStack";
var XStack = (0, import_core2.styled)(import_core2.View, {
  flexDirection: "row",
  variants
});
XStack.displayName = "XStack";
var ZStack = (0, import_core2.styled)(YStack, {
  position: "relative"
}, {
  neverFlatten: true,
  isZStack: true
});
ZStack.displayName = "ZStack";

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.mjs
var import_core3 = require("@tamagui/core");

// node_modules/@tamagui/stacks/dist/esm/variants.mjs
var elevate = {
  true: (_, extras) => getElevation(extras.props.size, extras)
};
var bordered = (val, {
  props
}) => ({
  // TODO size it with size in '...size'
  borderWidth: typeof val == "number" ? val : 1,
  borderColor: "$borderColor"
});
var circularStyle = {
  borderRadius: 1e5,
  padding: 0
};
var circular = {
  true: (_, {
    props,
    tokens: tokens3
  }) => {
    if (!("size" in props)) return circularStyle;
    const size3 = typeof props.size == "number" ? props.size : tokens3.size[props.size];
    return {
      ...circularStyle,
      width: size3,
      height: size3,
      maxWidth: size3,
      maxHeight: size3,
      minWidth: size3,
      minHeight: size3
    };
  }
};

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.mjs
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent",
  hoverStyle: {
    borderColor: "transparent"
  }
};
var themeableVariants = {
  circular,
  elevate,
  bordered: {
    true: bordered
  },
  transparent: {
    true: {
      backgroundColor: "transparent"
    }
  },
  chromeless: {
    true: chromelessStyle,
    all: {
      ...chromelessStyle,
      hoverStyle: chromelessStyle,
      pressStyle: chromelessStyle,
      focusStyle: chromelessStyle
    }
  }
};
var ThemeableStack = (0, import_core3.styled)(YStack, {
  variants: themeableVariants
});

// node_modules/@tamagui/get-token/dist/esm/index.mjs
var defaultOptions = {
  shift: 0,
  bounds: [0]
};
var getSpace = (space2, options) => getTokenRelative("space", space2, options);
var cacheVariables = {};
var cacheWholeVariables = {};
var cacheKeys = {};
var cacheWholeKeys = {};
var stepTokenUpOrDown = (type, current, options = defaultOptions) => {
  var _a2, _b2, _c, _d;
  const tokens3 = getTokens({
    prefixed: true
  })[type];
  if (!(type in cacheVariables)) {
    cacheKeys[type] = [], cacheVariables[type] = [], cacheWholeKeys[type] = [], cacheWholeVariables[type] = [];
    const sorted = Object.keys(tokens3).map((k) => tokens3[k]).sort((a, b) => a.val - b.val);
    for (const token of sorted) cacheKeys[type].push(token.key), cacheVariables[type].push(token);
    const sortedExcludingHalfSteps = sorted.filter((x) => !x.key.endsWith(".5"));
    for (const token of sortedExcludingHalfSteps) cacheWholeKeys[type].push(token.key), cacheWholeVariables[type].push(token);
  }
  const isString = typeof current == "string", tokensOrdered = (options.excludeHalfSteps ? isString ? cacheWholeKeys : cacheWholeVariables : isString ? cacheKeys : cacheVariables)[type], min = (_b2 = (_a2 = options.bounds) == null ? void 0 : _a2[0]) != null ? _b2 : 0, max = (_d = (_c = options.bounds) == null ? void 0 : _c[1]) != null ? _d : tokensOrdered.length - 1, currentIndex = tokensOrdered.indexOf(current);
  let shift = options.shift || 0;
  shift && (current === "$true" || isVariable(current) && current.name === "true") && (shift += shift > 0 ? 1 : -1);
  const index = Math.min(max, Math.max(min, currentIndex + shift)), found = tokensOrdered[index];
  return (typeof found == "string" ? tokens3[found] : found) || tokens3.$true;
};
var getTokenRelative = stepTokenUpOrDown;

// node_modules/@tamagui/get-button-sized/dist/esm/index.mjs
var getButtonSized = (val, {
  tokens: tokens3,
  props
}) => {
  var _a2;
  if (!val || props.circular) return;
  if (typeof val == "number") return {
    paddingHorizontal: val * 0.25,
    height: val,
    borderRadius: props.circular ? 1e5 : val * 0.2
  };
  const xSize = getSpace(val), radiusToken = (_a2 = tokens3.radius[val]) != null ? _a2 : tokens3.radius.$true;
  return {
    paddingHorizontal: xSize,
    height: val,
    borderRadius: props.circular ? 1e5 : radiusToken
  };
};

// node_modules/@tamagui/stacks/dist/esm/NestingContext.mjs
var import_react19 = __toESM(require("react"), 1);
var ButtonNestingContext = import_react19.default.createContext(false);

// node_modules/@tamagui/get-font-sized/dist/esm/index.mjs
var getFontSized = (sizeTokenIn = "$true", {
  font,
  fontFamily,
  props
}) => {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  if (!font) return {
    fontSize: sizeTokenIn
  };
  const sizeToken = sizeTokenIn === "$true" ? getDefaultSizeToken(font) : sizeTokenIn, style = {}, fontSize = font.size[sizeToken], lineHeight = (_a2 = font.lineHeight) == null ? void 0 : _a2[sizeToken], fontWeight = (_b2 = font.weight) == null ? void 0 : _b2[sizeToken], letterSpacing = (_c = font.letterSpacing) == null ? void 0 : _c[sizeToken], textTransform = (_d = font.transform) == null ? void 0 : _d[sizeToken], fontStyle = (_f = props.fontStyle) != null ? _f : (_e = font.style) == null ? void 0 : _e[sizeToken], color2 = (_h = props.color) != null ? _h : (_g = font.color) == null ? void 0 : _g[sizeToken];
  return fontStyle && (style.fontStyle = fontStyle), textTransform && (style.textTransform = textTransform), fontFamily && (style.fontFamily = fontFamily), fontWeight && (style.fontWeight = fontWeight), letterSpacing && (style.letterSpacing = letterSpacing), fontSize && (style.fontSize = fontSize), lineHeight && (style.lineHeight = lineHeight), color2 && (style.color = color2), process.env.NODE_ENV === "development" && props.debug && props.debug === "verbose" && (console.groupCollapsed("  \u{1F539} getFontSized", sizeTokenIn, sizeToken), isClient && console.info({
    style,
    props,
    font
  }), console.groupEnd()), style;
};
var SizableText = styledExport(Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    size: {
      "...fontSize": getFontSized
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var cache7 = /* @__PURE__ */ new WeakMap();
function getDefaultSizeToken(font) {
  if (typeof font == "object" && cache7.has(font)) return cache7.get(font);
  const sizeTokens = "$true" in font.size ? font.size : getTokens().size, sizeDefault = sizeTokens.$true, sizeDefaultSpecific = sizeDefault ? Object.keys(sizeTokens).find((x) => x !== "$true" && sizeTokens[x].val === sizeDefault.val) : null;
  return !sizeDefault || !sizeDefaultSpecific ? (process.env.NODE_ENV === "development" && console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`), Object.keys(font.size)[3]) : (cache7.set(font, sizeDefaultSpecific), sizeDefaultSpecific);
}

// node_modules/@tamagui/text/dist/esm/SizableText.mjs
var SizableText2 = styledExport(Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    unstyled: {
      false: {
        size: "$true",
        color: "$color"
      }
    },
    size: getFontSized
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
SizableText2.staticConfig.variants.fontFamily = {
  "...": (val, extras) => {
    if (val === "inherit") return {
      fontFamily: "inherit"
    };
    const sizeProp = extras.props.size, fontSizeProp = extras.props.fontSize, size3 = sizeProp === "$true" && fontSizeProp ? fontSizeProp : extras.props.size || "$true";
    return getFontSized(size3, extras);
  }
};

// node_modules/@tamagui/text/dist/esm/wrapChildrenInText.mjs
var import_react20 = __toESM(require("react"), 1);
var import_jsx_runtime10 = require("react/jsx-runtime");
function wrapChildrenInText(TextComponent, propsIn, extraProps) {
  const {
    children,
    textProps,
    size: size3,
    noTextWrap,
    color: color2,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign,
    fontStyle,
    maxFontSizeMultiplier
  } = propsIn;
  if (noTextWrap || !children) return [children];
  const props = {
    ...extraProps
  };
  return color2 && (props.color = color2), fontFamily && (props.fontFamily = fontFamily), fontSize && (props.fontSize = fontSize), fontWeight && (props.fontWeight = fontWeight), letterSpacing && (props.letterSpacing = letterSpacing), textAlign && (props.textAlign = textAlign), size3 && (props.size = size3), fontStyle && (props.fontStyle = fontStyle), maxFontSizeMultiplier && (props.maxFontSizeMultiplier = maxFontSizeMultiplier), import_react20.default.Children.toArray(children).map((child, index) => typeof child == "string" ? (
    // so "data-disable-theme" is a hack to fix themeInverse, don't ask me why
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(TextComponent, {
      ...props,
      ...textProps,
      children: child
    }, index)
  ) : child);
}

// node_modules/@tamagui/native/dist/esm/globalState.mjs
function createGlobalState(key, defaultValue) {
  const GLOBAL_KEY = `__tamagui_${key}__`;
  function getGlobalState() {
    const g = globalThis;
    return g[GLOBAL_KEY] || (g[GLOBAL_KEY] = defaultValue), g[GLOBAL_KEY];
  }
  function setGlobalState(newState) {
    globalThis[GLOBAL_KEY] = newState;
  }
  return {
    get: getGlobalState,
    set: setGlobalState
  };
}

// node_modules/@tamagui/native/dist/esm/portalState.mjs
var state = createGlobalState("portal", {
  enabled: false,
  type: null
});
function getPortal() {
  return {
    get isEnabled() {
      return state.get().enabled;
    },
    get state() {
      return state.get();
    },
    set(newState) {
      state.set(newState);
    }
  };
}

// node_modules/@tamagui/native/dist/esm/components.mjs
var import_jsx_runtime11 = require("react/jsx-runtime");
function NativePortalHost({
  name
}) {
  if (getPortal().state.type !== "teleport") return null;
  const {
    PortalHost: PortalHost2
  } = globalThis.__tamagui_teleport;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PortalHost2, {
    name
  });
}
function NativePortalProvider({
  children
}) {
  if (getPortal().state.type !== "teleport") return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_jsx_runtime11.Fragment, {
    children
  });
  const {
    PortalProvider: PortalProvider2
  } = globalThis.__tamagui_teleport;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PortalProvider2, {
    children
  });
}

// node_modules/@tamagui/z-index-stack/dist/esm/context.mjs
var import_react21 = require("react");
var ZIndexStackContext = (0, import_react21.createContext)(1);
var ZIndexHardcodedContext = (0, import_react21.createContext)(void 0);

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.mjs
var import_react22 = __toESM(require("react"), 1);

// node_modules/@tamagui/portal/dist/esm/constants.mjs
var allPortalHosts = /* @__PURE__ */ new Map();
var portalListeners = {};

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.mjs
var import_jsx_runtime12 = require("react/jsx-runtime");
var INITIAL_STATE = {};
var registerHost = (state2, hostName) => (hostName in state2 || (state2[hostName] = []), state2);
var deregisterHost = (state2, hostName) => (delete state2[hostName], state2);
var addUpdatePortal = (state2, hostName, portalName, node2) => {
  hostName in state2 || (state2 = registerHost(state2, hostName));
  const index = state2[hostName].findIndex((item) => item.name === portalName);
  return index !== -1 ? state2[hostName][index].node = node2 : state2[hostName].push({
    name: portalName,
    node: node2
  }), state2;
};
var removePortal = (state2, hostName, portalName) => {
  if (!(hostName in state2)) return process.env.NODE_ENV === "development" && console.info(`Failed to remove portal '${portalName}', '${hostName}' was not registered!`), state2;
  const index = state2[hostName].findIndex((item) => item.name === portalName);
  return index !== -1 && state2[hostName].splice(index, 1), state2;
};
var reducer = (state2, action) => {
  const {
    type
  } = action;
  switch (type) {
    case 0:
      return registerHost({
        ...state2
      }, action.hostName);
    case 1:
      return deregisterHost({
        ...state2
      }, action.hostName);
    case 2:
      return addUpdatePortal({
        ...state2
      }, action.hostName, action.portalName, action.node);
    case 3:
      return removePortal({
        ...state2
      }, action.hostName, action.portalName);
    default:
      return state2;
  }
};
var PortalStateContext = (0, import_react22.createContext)(null);
var PortalDispatchContext = (0, import_react22.createContext)(null);
var usePortalState = (hostName) => {
  const state2 = (0, import_react22.useContext)(PortalStateContext);
  if (state2 === null) throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
  return state2[hostName] || [];
};
var usePortal = (hostName = "root") => {
  const dispatch = (0, import_react22.useContext)(PortalDispatchContext);
  if (dispatch === null) throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
  const registerHost2 = (0, import_react22.useCallback)(() => {
    dispatch({
      type: 0,
      hostName
    });
  }, []), deregisterHost2 = (0, import_react22.useCallback)(() => {
    dispatch({
      type: 1,
      hostName
    });
  }, []), addUpdatePortal2 = (0, import_react22.useCallback)((name, node2) => {
    dispatch({
      type: 2,
      hostName,
      portalName: name,
      node: node2
    });
  }, []), removePortal2 = (0, import_react22.useCallback)((name) => {
    dispatch({
      type: 3,
      hostName,
      portalName: name
    });
  }, []);
  return {
    registerHost: registerHost2,
    deregisterHost: deregisterHost2,
    addPortal: addUpdatePortal2,
    updatePortal: addUpdatePortal2,
    removePortal: removePortal2
  };
};
var PortalProviderComponent = ({
  rootHostName = "root",
  shouldAddRootHost = true,
  children
}) => {
  const [state2, dispatch] = (0, import_react22.useReducer)(reducer, INITIAL_STATE), transitionDispatch = (0, import_react22.useMemo)(() => (value) => {
    startTransition(() => {
      dispatch(value);
    });
  }, [dispatch]), portalState = getPortal().state, content = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalDispatchContext.Provider, {
    value: transitionDispatch,
    children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(PortalStateContext.Provider, {
      value: state2,
      children: [children, shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalHost, {
        name: rootHostName
      })]
    })
  });
  return portalState.type === "teleport" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(NativePortalProvider, {
    children: content
  }) : content;
};
var PortalProvider = (0, import_react22.memo)(PortalProviderComponent);
PortalProvider.displayName = "PortalProvider";
var defaultRenderer = (children) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
  children
});
var PortalHost = (0, import_react22.memo)(function(props) {
  return isWeb ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalHostWeb, {
    ...props
  }) : getPortal().state.type === "teleport" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(NativePortalHost, {
    name: props.name
  }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalHostNonNative, {
    ...props
  });
});
function PortalHostWeb(props) {
  return useIsomorphicLayoutEffect(() => () => {
    allPortalHosts.delete(props.name);
  }, [props.name]), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
    style: {
      display: "contents"
    },
    ref: (node2) => {
      var _a2;
      node2 && (allPortalHosts.set(props.name, node2), (_a2 = portalListeners[props.name]) == null ? void 0 : _a2.forEach((x) => x(node2)));
    }
  });
}
function PortalHostNonNative(props) {
  const {
    name,
    forwardProps,
    render = defaultRenderer
  } = props, state2 = usePortalState(name), {
    registerHost: registerHost2,
    deregisterHost: deregisterHost2
  } = usePortal(props.name);
  return useIsomorphicLayoutEffect(() => (registerHost2(), () => {
    deregisterHost2();
  }), []), render(forwardProps ? state2.map((item) => {
    let next = item.node;
    const {
      children,
      ...restForwardProps
    } = forwardProps;
    return forwardProps ? import_react22.default.Children.map(next, (child) => import_react22.default.isValidElement(child) ? import_react22.default.cloneElement(child, {
      key: child.key,
      ...restForwardProps
    }) : child) : next;
  }) : state2.map((item) => item.node));
}

// node_modules/@tamagui/font-size/dist/esm/getFontSize.mjs
var import_core4 = require("@tamagui/core");
var getFontSize = (inSize, opts) => {
  const res = getFontSizeVariable(inSize, opts);
  return (0, import_core4.isVariable)(res) ? +res.val : res ? +res : 16;
};
var getFontSizeVariable = (inSize, opts) => {
  var _a2;
  const token = getFontSizeToken(inSize, opts);
  if (!token) return inSize;
  const conf4 = (0, import_core4.getConfig)();
  return (_a2 = conf4.fontsParsed[(opts == null ? void 0 : opts.font) || conf4.defaultFontToken]) == null ? void 0 : _a2.size[token];
};
var getFontSizeToken = (inSize, opts) => {
  var _a2, _b2, _c;
  if (typeof inSize == "number") return null;
  const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0, conf4 = (0, import_core4.getConfig)(), fontSize = ((_a2 = conf4.fontsParsed[(opts == null ? void 0 : opts.font) || conf4.defaultFontToken]) == null ? void 0 : _a2.size) || // fallback to size tokens
  conf4.tokensParsed.size, size3 = (_b2 = inSize === "$true" && !("$true" in fontSize) ? "$4" : inSize) != null ? _b2 : "$true" in fontSize ? "$true" : "$4", sizeTokens = Object.keys(fontSize);
  let foundIndex = sizeTokens.indexOf(size3);
  foundIndex === -1 && size3.endsWith(".5") && (foundIndex = sizeTokens.indexOf(size3.replace(".5", ""))), process.env.NODE_ENV === "development" && foundIndex === -1 && console.warn("No font size found", size3, opts, "in size tokens", sizeTokens);
  const tokenIndex = Math.min(Math.max(0, foundIndex + relativeSize), sizeTokens.length - 1);
  return (_c = sizeTokens[tokenIndex]) != null ? _c : size3;
};

// node_modules/@tamagui/helpers-tamagui/dist/esm/getIcon.mjs
var import_react23 = __toESM(require("react"), 1);
var getIcon = (el, props) => el && (import_react23.default.isValidElement(el) ? import_react23.default.cloneElement(el, {
  ...props,
  // @ts-expect-error
  ...el.props
}) : import_react23.default.createElement(el, props));

// node_modules/@tamagui/button/dist/esm/Button.mjs
var import_react24 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var context = createStyledContext({
  size: void 0,
  variant: void 0,
  color: void 0,
  elevation: void 0
});
var Frame = styledExport(View, {
  context,
  name: "Button",
  role: "button",
  render: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", {
    type: "button"
  }),
  tabIndex: 0,
  variants: {
    unstyled: {
      false: {
        size: "$true",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        cursor: "pointer",
        backgroundColor: "$background",
        borderWidth: 1,
        borderColor: "transparent",
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorHover"
        },
        focusVisibleStyle: {
          outlineColor: "$outlineColor",
          outlineStyle: "solid",
          outlineWidth: 2
        }
      }
    },
    variant: {
      outlined: process.env.TAMAGUI_HEADLESS === "1" ? {} : {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "$borderColor",
        hoverStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorHover"
        },
        pressStyle: {
          backgroundColor: "transparent",
          borderColor: "$borderColorPress"
        }
      }
    },
    circular: themeableVariants.circular,
    chromeless: themeableVariants.chromeless,
    size: {
      "...size": (val, extras) => {
        const buttonStyle = getButtonSized(val, extras), gap = getTokenValue(val);
        return {
          ...buttonStyle,
          gap
        };
      },
      ":number": (val, extras) => {
        const buttonStyle = getButtonSized(val, extras), gap = val * 0.4;
        return {
          ...buttonStyle,
          gap
        };
      }
    },
    elevation: {
      "...size": getElevation,
      ":number": getElevation
    },
    disabled: {
      true: {
        pointerEvents: "none",
        // @ts-ignore
        "aria-disabled": true
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Text2 = styledExport(SizableText2, {
  context,
  variants: {
    unstyled: {
      false: {
        userSelect: "none",
        cursor: "pointer",
        // flexGrow 1 leads to inconsistent native style where text pushes to start of view
        flexGrow: 0,
        flexShrink: 1,
        ellipsis: true,
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});
var Icon = (props) => {
  const {
    children,
    scaleIcon = 1,
    size: size3
  } = props, styledContext = context.useStyledContext();
  if (!styledContext) throw new Error("Button.Icon must be used within a Button");
  const sizeToken = size3 != null ? size3 : styledContext.size, iconSize = (typeof sizeToken == "number" ? sizeToken * 0.5 : getFontSize(sizeToken)) * scaleIcon;
  return getIcon(children, {
    size: iconSize,
    color: styledContext.color
  });
};
var ButtonContext = createStyledContext({
  size: void 0,
  variant: void 0,
  color: void 0
});
var ButtonComponent = Frame.styleable((propsIn, ref) => {
  var _a2;
  const isNested = (0, import_react24.useContext)(ButtonNestingContext), processedProps = useProps(propsIn, {
    noNormalize: true,
    noExpand: true
  }), {
    children,
    iconSize,
    icon,
    iconAfter,
    scaleIcon = 1,
    ...props
  } = processedProps, size3 = propsIn.size || (propsIn.unstyled ? void 0 : "$true"), styledContext = context.useStyledContext(), finalSize = (_a2 = iconSize != null ? iconSize : size3) != null ? _a2 : styledContext == null ? void 0 : styledContext.size, iconSizeNumber = (typeof finalSize == "number" ? finalSize * 0.5 : getFontSize(finalSize)) * scaleIcon, [themedIcon, themedIconAfter] = [icon, iconAfter].map((icon2) => icon2 ? getIcon(icon2, {
    size: iconSizeNumber,
    color: styledContext == null ? void 0 : styledContext.color
    // No marginLeft or marginRight needed - spacing is handled by the gap property in Frame's size variants
  }) : null), wrappedChildren = wrapChildrenInText(Text2, {
    children
  }, {
    unstyled: process.env.TAMAGUI_HEADLESS === "1",
    size: finalSize != null ? finalSize : styledContext == null ? void 0 : styledContext.size
  });
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ButtonNestingContext.Provider, {
    value: true,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Frame, {
      ref,
      ...props,
      ...isNested && {
        render: "span"
      },
      ...props.circular && !propsIn.size && {
        size: size3
      },
      tabIndex: 0,
      children: [themedIcon, wrappedChildren, themedIconAfter]
    })
  });
});
var Button = withStaticProperties(ButtonComponent, {
  Apply: context.Provider,
  Frame,
  Text: Text2,
  Icon
});

// node_modules/@tamagui/focusable/dist/esm/registerFocusable.mjs
var registerFocusable = (id, input) => () => {
};

// node_modules/@tamagui/element/dist/esm/useWebRef.mjs
var React15 = __toESM(require("react"), 1);
function useWebRef(forwardedRef) {
  const ref = React15.useRef(null), composedRef = useComposedRefs(ref, forwardedRef);
  return {
    ref,
    composedRef
  };
}

// node_modules/tamagui/dist/esm/createTamagui.mjs
var import_core5 = require("@tamagui/core");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core5.createTamagui : (conf4) => {
  const sizeTokenKeys = ["$true"], hasKeys = (expectedKeys, obj) => expectedKeys.every((k) => typeof obj[k] < "u"), tamaguiConfig2 = (0, import_core5.createTamagui)(conf4);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name];
    if (!tokenSet) throw new Error(`Expected tokens for "${name}" in ${Object.keys(tamaguiConfig2.tokensParsed).join(", ")}`);
    if (!hasKeys(sizeTokenKeys, tokenSet)) throw new Error(`
createTamagui() missing expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const expected = Object.keys(tamaguiConfig2.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig2.tokensParsed[name], received = Object.keys(tokenSet);
    if (!received.some((rk) => expected.includes(rk))) throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
  }
  return tamaguiConfig2;
};

// node_modules/tamagui/dist/esm/views/TamaguiProvider.mjs
var import_core6 = require("@tamagui/core");
var import_jsx_runtime14 = require("react/jsx-runtime");
var TamaguiProvider = ({
  children,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_core6.TamaguiProvider, {
  ...props,
  children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(ZIndexStackContext.Provider, {
    value: 1,
    children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(PortalProvider, {
      shouldAddRootHost: true,
      children
    })
  })
});

// node_modules/@tamagui/input/dist/esm/Input.mjs
var import_core9 = require("@tamagui/core");
var import_react25 = __toESM(require("react"), 1);

// node_modules/@tamagui/input/dist/esm/shared.mjs
var import_core7 = require("@tamagui/core");
var import_core8 = require("@tamagui/core");
var defaultStyles = {
  size: "$true",
  fontFamily: "$body",
  borderWidth: 1,
  outlineWidth: 0,
  color: "$color",
  ...import_core8.isWeb ? {
    tabIndex: 0
  } : {
    focusable: true
  },
  borderColor: "$borderColor",
  backgroundColor: "$background",
  // this fixes a flex bug where it overflows container
  minWidth: 0,
  hoverStyle: {
    borderColor: "$borderColorHover"
  },
  focusStyle: {
    borderColor: "$borderColorFocus"
  },
  focusVisibleStyle: {
    outlineColor: "$outlineColor",
    outlineWidth: 2,
    outlineStyle: "solid"
  }
};
var inputSizeVariant = (val = "$true", extras) => {
  if (extras.props.tag === "textarea" || extras.props.rows > 1 || extras.props.multiline || extras.props.numberOfLines > 1) return textAreaSizeVariant(val, extras);
  const buttonStyles = getButtonSized(val, extras), paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  }), fontStyle = getFontSized(val, extras);
  return !import_core8.isWeb && fontStyle && delete fontStyle.lineHeight, {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
};
var textAreaSizeVariant = (val = "$true", extras) => {
  var _a2;
  const {
    props
  } = extras, buttonStyles = getButtonSized(val, extras), fontStyle = getFontSized(val, extras), lines = (_a2 = props.rows) != null ? _a2 : props.numberOfLines, height = typeof lines == "number" ? lines * (0, import_core8.getVariableValue)(fontStyle.lineHeight) : "auto";
  !import_core8.isWeb && fontStyle && delete fontStyle.lineHeight;
  const paddingVertical = getSpace(val, {
    shift: -2,
    bounds: [2]
  }), paddingHorizontal = getSpace(val, {
    shift: -1,
    bounds: [2]
  });
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
};
var INPUT_NAME = "Input";
var styledBody = [{
  name: INPUT_NAME,
  render: "input",
  variants: {
    unstyled: {
      false: defaultStyles
    },
    size: {
      "...size": inputSizeVariant
    },
    disabled: {
      true: {}
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
}, {
  isInput: true,
  accept: {
    placeholderTextColor: "color",
    selectionColor: "color",
    cursorColor: "color",
    selectionHandleColor: "color",
    underlineColorAndroid: "color"
  },
  validStyles: import_core7.Text.staticConfig.validStyles
}];

// node_modules/@tamagui/input/dist/esm/Input.mjs
var import_jsx_runtime15 = require("react/jsx-runtime");
var StyledInput = (0, import_core9.styled)(import_core9.View, styledBody[0], styledBody[1]);
var Input = StyledInput.styleable((props, _forwardedRef) => {
  var _a2, _b2;
  const {
    disabled,
    id,
    onChangeText,
    onSubmitEditing,
    onSelectionChange,
    selection,
    placeholderTextColor,
    selectionColor,
    rows,
    // Native-only props (ignored on web)
    keyboardAppearance,
    returnKeyType,
    submitBehavior,
    blurOnSubmit,
    caretHidden,
    contextMenuHidden,
    selectTextOnFocus,
    secureTextEntry,
    maxFontSizeMultiplier,
    allowFontScaling,
    multiline,
    keyboardType,
    autoCapitalize: autoCapitalizeProp,
    autoCorrect: autoCorrectProp,
    autoFocusNative,
    textContentType,
    onEndEditing,
    onContentSizeChange,
    onScroll,
    onKeyPress,
    // iOS-only props (ignored on web)
    clearButtonMode,
    clearTextOnFocus,
    enablesReturnKeyAutomatically,
    dataDetectorTypes,
    scrollEnabled,
    passwordRules,
    rejectResponderTermination,
    spellCheck,
    lineBreakStrategyIOS,
    lineBreakModeIOS,
    smartInsertDelete,
    inputAccessoryViewID,
    inputAccessoryViewButtonLabel,
    disableKeyboardShortcuts,
    // Android-only props (ignored on web)
    cursorColor,
    selectionHandleColor,
    underlineColorAndroid,
    importantForAutofill,
    disableFullscreenUI,
    inlineImageLeft,
    inlineImagePadding,
    returnKeyLabel,
    textBreakStrategy,
    textAlignVertical,
    verticalAlign,
    showSoftInputOnFocus,
    numberOfLines,
    ...rest
  } = props, {
    ref,
    composedRef
  } = useWebRef(_forwardedRef), theme = (0, import_core9.useTheme)(), autoCorrect = autoCorrectProp === true ? "on" : autoCorrectProp === false ? "off" : autoCorrectProp, autoCapitalize = autoCapitalizeProp === "sentences" || autoCapitalizeProp === "words" ? "on" : autoCapitalizeProp === "none" || autoCapitalizeProp === "characters" ? "off" : autoCapitalizeProp;
  import_react25.default.useEffect(() => {
    if (!onSelectionChange) return;
    const node2 = ref.current;
    if (!node2) return;
    const handleSelectionChange = () => {
      var _a3, _b3;
      onSelectionChange({
        nativeEvent: {
          selection: {
            start: (_a3 = node2.selectionStart) != null ? _a3 : 0,
            end: (_b3 = node2.selectionEnd) != null ? _b3 : 0
          }
        }
      });
    };
    return node2.addEventListener("select", handleSelectionChange), () => node2.removeEventListener("select", handleSelectionChange);
  }, [onSelectionChange]), import_react25.default.useEffect(() => {
    var _a3;
    selection && ref.current && ref.current.setSelectionRange(selection.start, (_a3 = selection.end) != null ? _a3 : selection.start);
  }, [selection == null ? void 0 : selection.start, selection == null ? void 0 : selection.end]), import_react25.default.useEffect(() => {
    if (!(!id || disabled)) return registerFocusable(id, {
      focusAndSelect: () => {
        var _a3;
        return (_a3 = ref.current) == null ? void 0 : _a3.focus();
      },
      focus: () => {
        var _a3;
        return (_a3 = ref.current) == null ? void 0 : _a3.focus();
      }
    });
  }, [id, disabled]);
  const handleKeyDown = (e) => {
    var _a3;
    e.key === "Enter" && onSubmitEditing && onSubmitEditing({
      nativeEvent: {
        text: e.target.value
      }
    }), (_a3 = rest.onKeyDown) == null ? void 0 : _a3.call(rest, e);
  }, handleChange = (e) => {
    var _a3;
    onChangeText == null ? void 0 : onChangeText(e.target.value), (_a3 = rest.onChange) == null ? void 0 : _a3.call(rest, e);
  }, finalProps = {
    ...rest,
    disabled,
    id,
    rows,
    autoCorrect,
    autoCapitalize,
    onKeyDown: onSubmitEditing ? handleKeyDown : rest.onKeyDown,
    onChange: onChangeText ? handleChange : rest.onChange,
    style: {
      ...rest.style,
      ...placeholderTextColor && {
        "--placeholderColor": ((_a2 = theme[placeholderTextColor]) == null ? void 0 : _a2.variable) || placeholderTextColor
      },
      ...selectionColor && {
        "--selectionColor": ((_b2 = theme[selectionColor]) == null ? void 0 : _b2.variable) || selectionColor
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(StyledInput, {
    ref: composedRef,
    ...finalProps
  });
});

// node_modules/tamagui/dist/esm/views/Text.mjs
var import_core10 = require("@tamagui/core");
var Text4 = (0, import_core10.styled)(import_core10.Text, {
  variants: {
    unstyled: {
      false: {
        color: "$color"
      }
    }
  },
  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === "1"
  }
});

// node_modules/tamagui/dist/esm/index.mjs
var import_core11 = require("@tamagui/core");

// node_modules/@tamagui/colors/dist/esm/legacy/dark/blue.mjs
var blue = {
  blue1: "hsl(212, 35.0%, 9.2%)",
  blue2: "hsl(216, 50.0%, 11.8%)",
  blue3: "hsl(214, 59.4%, 15.3%)",
  blue4: "hsl(214, 65.8%, 17.9%)",
  blue5: "hsl(213, 71.2%, 20.2%)",
  blue6: "hsl(212, 77.4%, 23.1%)",
  blue7: "hsl(211, 85.1%, 27.4%)",
  blue8: "hsl(211, 89.7%, 34.1%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(209, 100%, 60.6%)",
  blue11: "hsl(210, 100%, 66.1%)",
  blue12: "hsl(206, 98.0%, 95.8%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/gray.mjs
var gray = {
  gray1: "hsl(0, 0%, 8.5%)",
  gray2: "hsl(0, 0%, 11.0%)",
  gray3: "hsl(0, 0%, 13.6%)",
  gray4: "hsl(0, 0%, 15.8%)",
  gray5: "hsl(0, 0%, 17.9%)",
  gray6: "hsl(0, 0%, 20.5%)",
  gray7: "hsl(0, 0%, 24.3%)",
  gray8: "hsl(0, 0%, 31.2%)",
  gray9: "hsl(0, 0%, 43.9%)",
  gray10: "hsl(0, 0%, 49.4%)",
  gray11: "hsl(0, 0%, 62.8%)",
  gray12: "hsl(0, 0%, 93.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/green.mjs
var green = {
  green1: "hsl(146, 30.0%, 7.4%)",
  green2: "hsl(155, 44.2%, 8.4%)",
  green3: "hsl(155, 46.7%, 10.9%)",
  green4: "hsl(154, 48.4%, 12.9%)",
  green5: "hsl(154, 49.7%, 14.9%)",
  green6: "hsl(154, 50.9%, 17.6%)",
  green7: "hsl(153, 51.8%, 21.8%)",
  green8: "hsl(151, 51.7%, 28.4%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(151, 49.3%, 46.5%)",
  green11: "hsl(151, 50.0%, 53.2%)",
  green12: "hsl(137, 72.0%, 94.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/orange.mjs
var orange = {
  orange1: "hsl(30, 70.0%, 7.2%)",
  orange2: "hsl(28, 100%, 8.4%)",
  orange3: "hsl(26, 91.1%, 11.6%)",
  orange4: "hsl(25, 88.3%, 14.1%)",
  orange5: "hsl(24, 87.6%, 16.6%)",
  orange6: "hsl(24, 88.6%, 19.8%)",
  orange7: "hsl(24, 92.4%, 24.0%)",
  orange8: "hsl(25, 100%, 29.0%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 58.5%)",
  orange11: "hsl(24, 100%, 62.2%)",
  orange12: "hsl(24, 97.0%, 93.2%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/pink.mjs
var pink = {
  pink1: "hsl(318, 25.0%, 9.6%)",
  pink2: "hsl(319, 32.2%, 11.6%)",
  pink3: "hsl(319, 41.0%, 16.0%)",
  pink4: "hsl(320, 45.4%, 18.7%)",
  pink5: "hsl(320, 49.0%, 21.1%)",
  pink6: "hsl(321, 53.6%, 24.4%)",
  pink7: "hsl(321, 61.1%, 29.7%)",
  pink8: "hsl(322, 74.9%, 37.5%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(323, 72.8%, 59.2%)",
  pink11: "hsl(325, 90.0%, 66.4%)",
  pink12: "hsl(322, 90.0%, 95.8%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/purple.mjs
var purple = {
  purple1: "hsl(284, 20.0%, 9.6%)",
  purple2: "hsl(283, 30.0%, 11.8%)",
  purple3: "hsl(281, 37.5%, 16.5%)",
  purple4: "hsl(280, 41.2%, 20.0%)",
  purple5: "hsl(279, 43.8%, 23.3%)",
  purple6: "hsl(277, 46.4%, 27.5%)",
  purple7: "hsl(275, 49.3%, 34.6%)",
  purple8: "hsl(272, 52.1%, 45.9%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(273, 57.3%, 59.1%)",
  purple11: "hsl(275, 80.0%, 71.0%)",
  purple12: "hsl(279, 75.0%, 95.7%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/red.mjs
var red = {
  red1: "hsl(353, 23.0%, 9.8%)",
  red2: "hsl(357, 34.4%, 12.0%)",
  red3: "hsl(356, 43.4%, 16.4%)",
  red4: "hsl(356, 47.6%, 19.2%)",
  red5: "hsl(356, 51.1%, 21.9%)",
  red6: "hsl(356, 55.2%, 25.9%)",
  red7: "hsl(357, 60.2%, 31.8%)",
  red8: "hsl(358, 65.0%, 40.4%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 85.3%, 64.0%)",
  red11: "hsl(358, 100%, 69.5%)",
  red12: "hsl(351, 89.0%, 96.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/dark/yellow.mjs
var yellow = {
  yellow1: "hsl(45, 100%, 5.5%)",
  yellow2: "hsl(46, 100%, 6.7%)",
  yellow3: "hsl(45, 100%, 8.7%)",
  yellow4: "hsl(45, 100%, 10.4%)",
  yellow5: "hsl(47, 100%, 12.1%)",
  yellow6: "hsl(49, 100%, 14.3%)",
  yellow7: "hsl(49, 90.3%, 18.4%)",
  yellow8: "hsl(50, 100%, 22.0%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(54, 100%, 68.0%)",
  yellow11: "hsl(48, 100%, 47.0%)",
  yellow12: "hsl(53, 100%, 91.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/blue.mjs
var blue2 = {
  blue1: "hsl(206, 100%, 99.2%)",
  blue2: "hsl(210, 100%, 98.0%)",
  blue3: "hsl(209, 100%, 96.5%)",
  blue4: "hsl(210, 98.8%, 94.0%)",
  blue5: "hsl(209, 95.0%, 90.1%)",
  blue6: "hsl(209, 81.2%, 84.5%)",
  blue7: "hsl(208, 77.5%, 76.9%)",
  blue8: "hsl(206, 81.9%, 65.3%)",
  blue9: "hsl(206, 100%, 50.0%)",
  blue10: "hsl(208, 100%, 47.3%)",
  blue11: "hsl(211, 100%, 43.2%)",
  blue12: "hsl(211, 100%, 15.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/gray.mjs
var gray2 = {
  gray1: "hsl(0, 0%, 99.0%)",
  gray2: "hsl(0, 0%, 97.3%)",
  gray3: "hsl(0, 0%, 95.1%)",
  gray4: "hsl(0, 0%, 93.0%)",
  gray5: "hsl(0, 0%, 90.9%)",
  gray6: "hsl(0, 0%, 88.7%)",
  gray7: "hsl(0, 0%, 85.8%)",
  gray8: "hsl(0, 0%, 78.0%)",
  gray9: "hsl(0, 0%, 56.1%)",
  gray10: "hsl(0, 0%, 52.3%)",
  gray11: "hsl(0, 0%, 43.5%)",
  gray12: "hsl(0, 0%, 9.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/green.mjs
var green2 = {
  green1: "hsl(136, 50.0%, 98.9%)",
  green2: "hsl(138, 62.5%, 96.9%)",
  green3: "hsl(139, 55.2%, 94.5%)",
  green4: "hsl(140, 48.7%, 91.0%)",
  green5: "hsl(141, 43.7%, 86.0%)",
  green6: "hsl(143, 40.3%, 79.0%)",
  green7: "hsl(146, 38.5%, 69.0%)",
  green8: "hsl(151, 40.2%, 54.1%)",
  green9: "hsl(151, 55.0%, 41.5%)",
  green10: "hsl(152, 57.5%, 37.6%)",
  green11: "hsl(153, 67.0%, 28.5%)",
  green12: "hsl(155, 40.0%, 14.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/orange.mjs
var orange2 = {
  orange1: "hsl(24, 70.0%, 99.0%)",
  orange2: "hsl(24, 83.3%, 97.6%)",
  orange3: "hsl(24, 100%, 95.3%)",
  orange4: "hsl(25, 100%, 92.2%)",
  orange5: "hsl(25, 100%, 88.2%)",
  orange6: "hsl(25, 100%, 82.8%)",
  orange7: "hsl(24, 100%, 75.3%)",
  orange8: "hsl(24, 94.5%, 64.3%)",
  orange9: "hsl(24, 94.0%, 50.0%)",
  orange10: "hsl(24, 100%, 46.5%)",
  orange11: "hsl(24, 100%, 37.0%)",
  orange12: "hsl(15, 60.0%, 17.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/pink.mjs
var pink2 = {
  pink1: "hsl(322, 100%, 99.4%)",
  pink2: "hsl(323, 100%, 98.4%)",
  pink3: "hsl(323, 86.3%, 96.5%)",
  pink4: "hsl(323, 78.7%, 94.2%)",
  pink5: "hsl(323, 72.2%, 91.1%)",
  pink6: "hsl(323, 66.3%, 86.6%)",
  pink7: "hsl(323, 62.0%, 80.1%)",
  pink8: "hsl(323, 60.3%, 72.4%)",
  pink9: "hsl(322, 65.0%, 54.5%)",
  pink10: "hsl(322, 63.9%, 50.7%)",
  pink11: "hsl(322, 75.0%, 46.0%)",
  pink12: "hsl(320, 70.0%, 13.5%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/purple.mjs
var purple2 = {
  purple1: "hsl(280, 65.0%, 99.4%)",
  purple2: "hsl(276, 100%, 99.0%)",
  purple3: "hsl(276, 83.1%, 97.0%)",
  purple4: "hsl(275, 76.4%, 94.7%)",
  purple5: "hsl(275, 70.8%, 91.8%)",
  purple6: "hsl(274, 65.4%, 87.8%)",
  purple7: "hsl(273, 61.0%, 81.7%)",
  purple8: "hsl(272, 60.0%, 73.5%)",
  purple9: "hsl(272, 51.0%, 54.0%)",
  purple10: "hsl(272, 46.8%, 50.3%)",
  purple11: "hsl(272, 50.0%, 45.8%)",
  purple12: "hsl(272, 66.0%, 16.0%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/red.mjs
var red2 = {
  red1: "hsl(359, 100%, 99.4%)",
  red2: "hsl(359, 100%, 98.6%)",
  red3: "hsl(360, 100%, 96.8%)",
  red4: "hsl(360, 97.9%, 94.8%)",
  red5: "hsl(360, 90.2%, 91.9%)",
  red6: "hsl(360, 81.7%, 87.8%)",
  red7: "hsl(359, 74.2%, 81.7%)",
  red8: "hsl(359, 69.5%, 74.3%)",
  red9: "hsl(358, 75.0%, 59.0%)",
  red10: "hsl(358, 69.4%, 55.2%)",
  red11: "hsl(358, 65.0%, 48.7%)",
  red12: "hsl(354, 50.0%, 14.6%)"
};

// node_modules/@tamagui/colors/dist/esm/legacy/light/yellow.mjs
var yellow2 = {
  yellow1: "hsl(60, 54.0%, 98.5%)",
  yellow2: "hsl(52, 100%, 95.5%)",
  yellow3: "hsl(55, 100%, 90.9%)",
  yellow4: "hsl(54, 100%, 86.6%)",
  yellow5: "hsl(52, 97.9%, 82.0%)",
  yellow6: "hsl(50, 89.4%, 76.1%)",
  yellow7: "hsl(47, 80.4%, 68.0%)",
  yellow8: "hsl(48, 100%, 46.1%)",
  yellow9: "hsl(53, 92.0%, 50.0%)",
  yellow10: "hsl(50, 100%, 48.5%)",
  yellow11: "hsl(42, 100%, 29.0%)",
  yellow12: "hsl(40, 55.0%, 13.5%)"
};

// node_modules/@tamagui/create-theme/dist/esm/isMinusZero.mjs
function isMinusZero(value) {
  return 1 / value === Number.NEGATIVE_INFINITY;
}

// node_modules/@tamagui/create-theme/dist/esm/themeInfo.mjs
var THEME_INFO = /* @__PURE__ */ new Map();
var getThemeInfo = (theme, name) => THEME_INFO.get(name || JSON.stringify(theme));
var setThemeInfo = (theme, info) => {
  const next = {
    ...info,
    cache: /* @__PURE__ */ new Map()
  };
  THEME_INFO.set(info.name || JSON.stringify(theme), next), THEME_INFO.set(JSON.stringify(info.definition), next);
};

// node_modules/@tamagui/create-theme/dist/esm/createTheme.mjs
var identityCache = /* @__PURE__ */ new Map();
function createThemeWithPalettes(palettes, defaultPalette, definition, options, name, skipCache = false) {
  if (!palettes[defaultPalette]) throw new Error(`No palette: ${defaultPalette}`);
  const newDef = {
    ...definition
  };
  for (const key in definition) {
    let val = definition[key];
    if (typeof val == "string" && val[0] === "$") {
      const [altPaletteName$, altPaletteIndex] = val.split("."), altPaletteName = altPaletteName$.slice(1), parentName = defaultPalette.split("_")[0], altPalette = palettes[altPaletteName] || palettes[`${parentName}_${altPaletteName}`];
      if (altPalette) {
        const next = getValue(altPalette, +altPaletteIndex);
        typeof next < "u" && (newDef[key] = next);
      }
    }
  }
  return createTheme(palettes[defaultPalette], newDef, options, name, skipCache);
}
function createTheme(palette, definition, options, name, skipCache = false) {
  const cacheKey = skipCache ? "" : JSON.stringify([name, palette, definition, options]);
  if (!skipCache && identityCache.has(cacheKey)) return identityCache.get(cacheKey);
  const theme = {
    ...Object.fromEntries(Object.entries(definition).map(([key, offset]) => [key, getValue(palette, offset)])),
    ...options == null ? void 0 : options.nonInheritedValues
  };
  return setThemeInfo(theme, {
    palette,
    definition,
    options,
    name
  }), cacheKey && identityCache.set(cacheKey, theme), theme;
}
var getValue = (palette, value) => {
  if (!palette) throw new Error("No palette!");
  if (typeof value == "string") return value;
  const max = palette.length - 1, next = (value === 0 ? !isMinusZero(value) : value >= 0) ? value : max + value, index = Math.min(Math.max(0, next), max);
  return palette[index];
};

// node_modules/@tamagui/create-theme/dist/esm/helpers.mjs
function objectEntries(obj) {
  return Object.entries(obj);
}
function objectFromEntries(arr) {
  return Object.fromEntries(arr);
}

// node_modules/@tamagui/create-theme/dist/esm/masks.mjs
var createMask = (createMask2) => typeof createMask2 == "function" ? {
  name: createMask2.name || "unnamed",
  mask: createMask2
} : createMask2;

// node_modules/@tamagui/create-theme/dist/esm/applyMask.mjs
function applyMask(theme, mask, options = {}, parentName, nextName) {
  const info = getThemeInfo(theme, parentName);
  if (!info) throw new Error(process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2");
  const next = applyMaskStateless(info, mask, options, parentName);
  return setThemeInfo(next.theme, {
    definition: next.definition,
    palette: info.palette,
    name: nextName
  }), next.theme;
}
function applyMaskStateless(info, mask, options = {}, parentName) {
  var _a2;
  const skip = {
    ...options.skip
  };
  if ((_a2 = info.options) == null ? void 0 : _a2.nonInheritedValues) for (const key in info.options.nonInheritedValues) skip[key] = 1;
  const maskOptions = {
    parentName,
    palette: info.palette,
    ...options,
    skip
  }, template = mask.mask(info.definition, maskOptions), theme = createTheme(info.palette, template);
  return {
    ...info,
    cache: /* @__PURE__ */ new Map(),
    definition: template,
    theme
  };
}

// node_modules/@tamagui/theme-builder/dist/esm/ThemeBuilder.mjs
var ThemeBuilder = class {
  constructor(state2) {
    __publicField(this, "_getThemeFn");
    // for dev mode only really
    __publicField(this, "_addedThemes", []);
    this.state = state2;
  }
  addPalettes(palettes) {
    return this.state.palettes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.palettes,
      ...palettes
    }, this;
  }
  addTemplates(templates) {
    return this.state.templates = {
      // as {} prevents generic string key merge messing up types
      ...this.state.templates,
      ...templates
    }, this;
  }
  addMasks(masks) {
    return this.state.masks = {
      // as {} prevents generic string key merge messing up types
      ...this.state.masks,
      ...objectFromEntries(objectEntries(masks).map(([key, val]) => [key, createMask(val)]))
    }, this;
  }
  addThemes(themes3) {
    return this._addedThemes.push({
      type: "themes",
      args: [themes3]
    }), this.state.themes = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...themes3
    }, this;
  }
  // these wont be typed to save some complexity and because they don't need to be typed!
  addComponentThemes(childThemeDefinition, options) {
    return this.addChildThemes(childThemeDefinition, options), this;
  }
  addChildThemes(childThemeDefinition, options) {
    const currentThemes = this.state.themes;
    if (!currentThemes) throw new Error("No themes defined yet, use addThemes first to set your base themes");
    this._addedThemes.push({
      type: "childThemes",
      args: [childThemeDefinition, options]
    });
    const currentThemeNames = Object.keys(currentThemes), incomingThemeNames = Object.keys(childThemeDefinition), namesWithDefinitions = currentThemeNames.flatMap((prefix) => {
      const avoidNestingWithin = options == null ? void 0 : options.avoidNestingWithin;
      return avoidNestingWithin && avoidNestingWithin.some((avoidName) => prefix.startsWith(avoidName) || prefix.endsWith(avoidName)) ? [] : incomingThemeNames.map((subName) => {
        const fullName = `${prefix}_${subName}`, definition = childThemeDefinition[subName];
        return "avoidNestingWithin" in definition && definition.avoidNestingWithin.some((name) => (name === "light" || name === "dark") && prefix.includes("_") ? false : prefix.startsWith(name) || prefix.endsWith(name)) || prefix.endsWith(`_${subName}`) ? null : [fullName, definition];
      }).filter(Boolean);
    }), childThemes = Object.fromEntries(namesWithDefinitions), next = {
      // as {} prevents generic string key merge messing up types
      ...this.state.themes,
      ...childThemes
    };
    return this.state.themes = next, this;
  }
  getTheme(fn) {
    return this._getThemeFn = fn, this;
  }
  build() {
    var _a2, _b2, _c, _d, _e;
    if (!this.state.themes) return {};
    const out = {}, maskedThemes = [];
    for (const themeName in this.state.themes) {
      const nameParts = themeName.split("_"), parentName = nameParts.slice(0, nameParts.length - 1).join("_"), definitions = this.state.themes[themeName], themeDefinition = Array.isArray(definitions) ? (() => {
        const found = definitions.find(
          // endWith match stronger than startsWith
          (d) => d.parent ? parentName.endsWith(d.parent) || parentName.startsWith(d.parent) : true
        );
        return found || null;
      })() : definitions;
      if (themeDefinition) if ("theme" in themeDefinition) out[themeName] = themeDefinition.theme;
      else if ("mask" in themeDefinition) maskedThemes.push({
        parentName,
        themeName,
        mask: themeDefinition
      });
      else {
        let {
          palette: paletteName = "",
          template: templateName,
          ...options
        } = themeDefinition;
        const parentDefinition = this.state.themes[parentName];
        if (!this.state.palettes) throw new Error(`No palettes defined for theme with palette expected: ${themeName}`);
        let palette = this.state.palettes[paletteName || ""], attemptParentName = `${parentName}_${paletteName}`;
        for (; !palette && attemptParentName; ) attemptParentName in this.state.palettes ? (palette = this.state.palettes[attemptParentName], paletteName = attemptParentName) : attemptParentName = attemptParentName.split("_").slice(0, -1).join("_");
        if (!palette) {
          const msg = process.env.NODE_ENV !== "production" ? `: ${themeName}: ${paletteName}
          Definition: ${JSON.stringify(themeDefinition)}
          Parent: ${JSON.stringify(parentDefinition)}
          Potential: (${Object.keys(this.state.palettes).join(", ")})` : "";
          throw new Error(`No palette for theme${msg}`);
        }
        const template = (_c = (_a2 = this.state.templates) == null ? void 0 : _a2[templateName]) != null ? _c : (
          // fall back to finding the scheme specific on if it exists
          (_b2 = this.state.templates) == null ? void 0 : _b2[`${nameParts[0]}_${templateName}`]
        );
        if (!template) throw new Error(`No template for theme ${themeName}: ${templateName} in templates:
- ${Object.keys(this.state.templates || {}).join(`
 - `)}`);
        const theme = createThemeWithPalettes(this.state.palettes, paletteName, template, options, themeName, true);
        out[themeName] = this._getThemeFn ? {
          ...theme,
          ...this._getThemeFn({
            theme,
            name: themeName,
            level: nameParts.length,
            parentName,
            scheme: /^(light|dark)$/.test(nameParts[0]) ? nameParts[0] : void 0,
            parentNames: nameParts.slice(0, -1),
            palette,
            template
          })
        } : theme;
      }
    }
    for (const {
      mask,
      themeName,
      parentName
    } of maskedThemes) {
      const parent = out[parentName];
      if (!parent) continue;
      const {
        mask: maskName,
        ...options
      } = mask;
      let maskFunction = (_d = this.state.masks) == null ? void 0 : _d[maskName];
      if (!maskFunction) throw new Error(`No mask ${maskName}`);
      const parentTheme = this.state.themes[parentName];
      if (parentTheme && "childOptions" in parentTheme) {
        const {
          mask: mask2,
          ...childOpts
        } = parentTheme.childOptions;
        mask2 && (maskFunction = (_e = this.state.masks) == null ? void 0 : _e[mask2]), Object.assign(options, childOpts);
      }
      out[themeName] = applyMask(parent, maskFunction, options, parentName, themeName);
    }
    return out;
  }
};
function createThemeBuilder() {
  return new ThemeBuilder({});
}

// node_modules/@tamagui/themes/dist/esm/utils.mjs
function postfixObjKeys(obj, postfix) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [`${k}${postfix}`, v]));
}
function sizeToSpace(v) {
  return v === 0 ? 0 : v === 2 ? 0.5 : v === 4 ? 1 : v === 8 ? 1.5 : v <= 16 ? Math.round(v * 0.333) : Math.floor(v * 0.7 - 12);
}
function objectKeys(obj) {
  return Object.keys(obj);
}

// node_modules/@tamagui/themes/dist/esm/v3-tokens.mjs
var size = {
  $0: 0,
  "$0.25": 2,
  "$0.5": 4,
  "$0.75": 8,
  $1: 20,
  "$1.5": 24,
  $2: 28,
  "$2.5": 32,
  $3: 36,
  "$3.5": 40,
  $4: 44,
  $true: 44,
  "$4.5": 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284
};
var spaces = Object.entries(size).map(([k, v]) => [k, sizeToSpace(v)]);
var spacesNegative = spaces.slice(1).map(([k, v]) => [`-${k.slice(1)}`, -v]);
var space = {
  ...Object.fromEntries(spaces),
  ...Object.fromEntries(spacesNegative)
};
var zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500
};
var radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50
};
var tokens = {
  radius,
  zIndex,
  space,
  size
};

// node_modules/@tamagui/themes/dist/esm/v3-themes.mjs
var colorTokens = {
  light: {
    blue: blue2,
    gray: gray2,
    green: green2,
    orange: orange2,
    pink: pink2,
    purple: purple2,
    red: red2,
    yellow: yellow2
  },
  dark: {
    blue,
    gray,
    green,
    orange,
    pink,
    purple,
    red,
    yellow
  }
};
var lightShadowColor = "rgba(0,0,0,0.04)";
var lightShadowColorStrong = "rgba(0,0,0,0.085)";
var darkShadowColor = "rgba(0,0,0,0.2)";
var darkShadowColorStrong = "rgba(0,0,0,0.3)";
var darkColors = {
  ...colorTokens.dark.blue,
  ...colorTokens.dark.gray,
  ...colorTokens.dark.green,
  ...colorTokens.dark.orange,
  ...colorTokens.dark.pink,
  ...colorTokens.dark.purple,
  ...colorTokens.dark.red,
  ...colorTokens.dark.yellow
};
var lightColors = {
  ...colorTokens.light.blue,
  ...colorTokens.light.gray,
  ...colorTokens.light.green,
  ...colorTokens.light.orange,
  ...colorTokens.light.pink,
  ...colorTokens.light.purple,
  ...colorTokens.light.red,
  ...colorTokens.light.yellow
};
var color = {
  white0: "rgba(255,255,255,0)",
  white075: "rgba(255,255,255,0.75)",
  white05: "rgba(255,255,255,0.5)",
  white025: "rgba(255,255,255,0.25)",
  black0: "rgba(10,10,10,0)",
  black075: "rgba(10,10,10,0.75)",
  black05: "rgba(10,10,10,0.5)",
  black025: "rgba(10,10,10,0.25)",
  white1: "#fff",
  white2: "#f8f8f8",
  white3: "hsl(0, 0%, 96.3%)",
  white4: "hsl(0, 0%, 94.1%)",
  white5: "hsl(0, 0%, 92.0%)",
  white6: "hsl(0, 0%, 90.0%)",
  white7: "hsl(0, 0%, 88.5%)",
  white8: "hsl(0, 0%, 81.0%)",
  white9: "hsl(0, 0%, 56.1%)",
  white10: "hsl(0, 0%, 50.3%)",
  white11: "hsl(0, 0%, 42.5%)",
  white12: "hsl(0, 0%, 9.0%)",
  black1: "#050505",
  black2: "#151515",
  black3: "#191919",
  black4: "#232323",
  black5: "#282828",
  black6: "#323232",
  black7: "#424242",
  black8: "#494949",
  black9: "#545454",
  black10: "#626262",
  black11: "#a5a5a5",
  black12: "#fff",
  ...postfixObjKeys(lightColors, "Light"),
  ...postfixObjKeys(darkColors, "Dark")
};
var defaultPalettes = (() => {
  const transparent = (hsl, opacity = 0) => hsl.replace("%)", `%, ${opacity})`).replace("hsl(", "hsla("), getColorPalette = (colors, accentColors) => {
    const colorPalette = Object.values(colors), colorI = colorPalette.length - 4, accentPalette = Object.values(accentColors), accentBackground = accentPalette[0], accentColor = accentPalette[accentPalette.length - 1];
    return [accentBackground, transparent(colorPalette[0], 0), transparent(colorPalette[0], 0.25), transparent(colorPalette[0], 0.5), transparent(colorPalette[0], 0.75), ...colorPalette, transparent(colorPalette[colorI], 0.75), transparent(colorPalette[colorI], 0.5), transparent(colorPalette[colorI], 0.25), transparent(colorPalette[colorI], 0), accentColor];
  }, brandColor = {
    light: color.blue4Light,
    dark: color.blue4Dark
  }, lightPalette = [brandColor.light, color.white0, color.white025, color.white05, color.white075, color.white1, color.white2, color.white3, color.white4, color.white5, color.white6, color.white7, color.white8, color.white9, color.white10, color.white11, color.white12, color.black075, color.black05, color.black025, color.black0, brandColor.dark], darkPalette = [brandColor.dark, color.black0, color.black025, color.black05, color.black075, color.black1, color.black2, color.black3, color.black4, color.black5, color.black6, color.black7, color.black8, color.black9, color.black10, color.black11, color.black12, color.white075, color.white05, color.white025, color.white0, brandColor.light], lightColorNames = objectKeys(colorTokens.light), lightPalettes = objectFromEntries(lightColorNames.map((key, index) => [`light_${key}`, getColorPalette(colorTokens.light[key], colorTokens.light[lightColorNames[(index + 1) % lightColorNames.length]])])), darkColorNames = objectKeys(colorTokens.dark), darkPalettes = objectFromEntries(darkColorNames.map((key, index) => [`dark_${key}`, getColorPalette(colorTokens.dark[key], colorTokens.dark[darkColorNames[(index + 1) % darkColorNames.length]])])), colorPalettes = {
    ...lightPalettes,
    ...darkPalettes
  };
  return {
    light: lightPalette,
    dark: darkPalette,
    ...colorPalettes
  };
})();
var getTemplates = () => {
  const getBaseTemplates = (scheme) => {
    const isLight = scheme === "light", bgIndex = 5, lighten = isLight ? -1 : 1, darken = -lighten, borderColor = bgIndex + 3, base = {
      accentBackground: 0,
      accentColor: -0,
      background0: 1,
      background025: 2,
      background05: 3,
      background075: 4,
      color1: bgIndex,
      color2: bgIndex + 1,
      color3: bgIndex + 2,
      color4: bgIndex + 3,
      color5: bgIndex + 4,
      color6: bgIndex + 5,
      color7: bgIndex + 6,
      color8: bgIndex + 7,
      color9: bgIndex + 8,
      color10: bgIndex + 9,
      color11: bgIndex + 10,
      color12: bgIndex + 11,
      color0: -1,
      color025: -2,
      color05: -3,
      color075: -4,
      // the background, color, etc keys here work like generics - they make it so you
      // can publish components for others to use without mandating a specific color scale
      // the @tamagui/button Button component looks for `$background`, so you set the
      // dark_red_Button theme to have a stronger background than the dark_red theme.
      background: bgIndex,
      backgroundHover: bgIndex + lighten,
      // always lighten on hover no matter the scheme
      backgroundPress: bgIndex + darken,
      // always darken on press no matter the theme
      backgroundFocus: bgIndex + darken,
      borderColor,
      borderColorHover: borderColor + lighten,
      borderColorPress: borderColor + darken,
      borderColorFocus: borderColor,
      color: -bgIndex,
      colorHover: -bgIndex - 1,
      colorPress: -bgIndex,
      colorFocus: -bgIndex - 1,
      colorTransparent: -1,
      placeholderColor: -bgIndex - 3,
      outlineColor: -2
    }, surface12 = {
      background: base.background + 1,
      backgroundHover: base.backgroundHover + 1,
      backgroundPress: base.backgroundPress + 1,
      backgroundFocus: base.backgroundFocus + 1,
      borderColor: base.borderColor + 1,
      borderColorHover: base.borderColorHover + 1,
      borderColorFocus: base.borderColorFocus + 1,
      borderColorPress: base.borderColorPress + 1
    }, surface22 = {
      background: base.background + 2,
      backgroundHover: base.backgroundHover + 2,
      backgroundPress: base.backgroundPress + 2,
      backgroundFocus: base.backgroundFocus + 2,
      borderColor: base.borderColor + 2,
      borderColorHover: base.borderColorHover + 2,
      borderColorFocus: base.borderColorFocus + 2,
      borderColorPress: base.borderColorPress + 2
    }, surface32 = {
      background: base.background + 3,
      backgroundHover: base.backgroundHover + 3,
      backgroundPress: base.backgroundPress + 3,
      backgroundFocus: base.backgroundFocus + 3,
      borderColor: base.borderColor + 3,
      borderColorHover: base.borderColorHover + 3,
      borderColorFocus: base.borderColorFocus + 3,
      borderColorPress: base.borderColorPress + 3
    }, surfaceActiveBg = {
      background: base.background + 5,
      backgroundHover: base.background + 5,
      backgroundPress: base.backgroundPress + 5,
      backgroundFocus: base.backgroundFocus + 5
    }, surfaceActive = {
      ...surfaceActiveBg,
      // match border to background when active
      borderColor: surfaceActiveBg.background,
      borderColorHover: surfaceActiveBg.backgroundHover,
      borderColorFocus: surfaceActiveBg.backgroundFocus,
      borderColorPress: surfaceActiveBg.backgroundPress
    }, inverseSurface12 = {
      color: surface12.background,
      colorHover: surface12.backgroundHover,
      colorPress: surface12.backgroundPress,
      colorFocus: surface12.backgroundFocus,
      background: base.color,
      backgroundHover: base.colorHover,
      backgroundPress: base.colorPress,
      backgroundFocus: base.colorFocus,
      borderColor: base.color - 2,
      borderColorHover: base.color - 3,
      borderColorFocus: base.color - 4,
      borderColorPress: base.color - 5
    }, inverseActive = {
      ...inverseSurface12,
      background: base.color - 2,
      backgroundHover: base.colorHover - 2,
      backgroundPress: base.colorPress - 2,
      backgroundFocus: base.colorFocus - 2,
      borderColor: base.color - 2 - 2,
      borderColorHover: base.color - 3 - 2,
      borderColorFocus: base.color - 4 - 2,
      borderColorPress: base.color - 5 - 2
    }, alt1 = {
      color: base.color - 1,
      colorHover: base.colorHover - 1,
      colorPress: base.colorPress - 1,
      colorFocus: base.colorFocus - 1
    }, alt2 = {
      color: base.color - 2,
      colorHover: base.colorHover - 2,
      colorPress: base.colorPress - 2,
      colorFocus: base.colorFocus - 2
    };
    return {
      base,
      alt1,
      alt2,
      surface1: surface12,
      surface2: surface22,
      surface3: surface32,
      inverseSurface1: inverseSurface12,
      inverseActive,
      surfaceActive
    };
  }, lightTemplates = getBaseTemplates("light"), darkTemplates = getBaseTemplates("dark");
  return {
    ...objectFromEntries(objectKeys(lightTemplates).map((name) => [`light_${name}`, lightTemplates[name]])),
    ...objectFromEntries(objectKeys(darkTemplates).map((name) => [`dark_${name}`, darkTemplates[name]]))
  };
};
var defaultTemplates = getTemplates();
var shadows = {
  light: {
    shadowColor: lightShadowColorStrong,
    shadowColorHover: lightShadowColorStrong,
    shadowColorPress: lightShadowColor,
    shadowColorFocus: lightShadowColor
  },
  dark: {
    shadowColor: darkShadowColorStrong,
    shadowColorHover: darkShadowColorStrong,
    shadowColorPress: darkShadowColor,
    shadowColorFocus: darkShadowColor
  }
};
var nonInherited = {
  light: {
    ...lightColors,
    ...shadows.light
  },
  dark: {
    ...darkColors,
    ...shadows.dark
  }
};
var overlayThemeDefinitions = [{
  parent: "light",
  theme: {
    background: "rgba(0,0,0,0.5)"
  }
}, {
  parent: "dark",
  theme: {
    background: "rgba(0,0,0,0.8)"
  }
}];
var inverseSurface1 = [{
  parent: "active",
  template: "inverseActive"
}, {
  parent: "",
  template: "inverseSurface1"
}];
var surface1 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface1"
}];
var surface2 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface2"
}];
var surface3 = [{
  parent: "active",
  template: "surfaceActive"
}, {
  parent: "",
  template: "surface3"
}];
var defaultComponentThemes = {
  ListItem: {
    template: "surface1"
  },
  SelectTrigger: surface1,
  Card: surface1,
  Button: surface3,
  Checkbox: surface2,
  Switch: surface2,
  SwitchThumb: inverseSurface1,
  TooltipContent: surface2,
  Progress: {
    template: "surface1"
  },
  RadioGroupItem: surface2,
  TooltipArrow: {
    template: "surface1"
  },
  SliderTrackActive: {
    template: "surface3"
  },
  SliderTrack: {
    template: "surface1"
  },
  SliderThumb: inverseSurface1,
  Tooltip: inverseSurface1,
  ProgressIndicator: inverseSurface1,
  SheetOverlay: overlayThemeDefinitions,
  DialogOverlay: overlayThemeDefinitions,
  ModalOverlay: overlayThemeDefinitions,
  Input: surface1,
  TextArea: surface1
};
var defaultSubThemes = {
  alt1: {
    template: "alt1"
  },
  alt2: {
    template: "alt2"
  },
  active: {
    template: "surface3"
  },
  surface1: {
    template: "surface1"
  },
  surface2: {
    template: "surface2"
  },
  surface3: {
    template: "surface3"
  },
  surface4: {
    template: "surfaceActive"
  }
};
var themeBuilder = createThemeBuilder().addPalettes(defaultPalettes).addTemplates(defaultTemplates).addThemes({
  light: {
    template: "base",
    palette: "light",
    nonInheritedValues: nonInherited.light
  },
  dark: {
    template: "base",
    palette: "dark",
    nonInheritedValues: nonInherited.dark
  }
}).addChildThemes({
  orange: {
    palette: "orange",
    template: "base"
  },
  yellow: {
    palette: "yellow",
    template: "base"
  },
  green: {
    palette: "green",
    template: "base"
  },
  blue: {
    palette: "blue",
    template: "base"
  },
  purple: {
    palette: "purple",
    template: "base"
  },
  pink: {
    palette: "pink",
    template: "base"
  },
  red: {
    palette: "red",
    template: "base"
  },
  gray: {
    palette: "gray",
    template: "base"
  }
}).addChildThemes(defaultSubThemes).addComponentThemes(defaultComponentThemes, {
  avoidNestingWithin: ["alt1", "alt2", "surface1", "surface2", "surface3", "surface4"]
});
var themesIn = themeBuilder.build();
var themes2 = themesIn;
var tokens2 = createTokens({
  color,
  ...tokens
});

// node_modules/@tamagui/animation-helpers/dist/esm/normalizeTransition.mjs
var SPRING_CONFIG_KEYS = /* @__PURE__ */ new Set(["stiffness", "damping", "mass", "tension", "friction", "velocity", "overshootClamping", "duration", "bounciness", "speed"]);
function isSpringConfigKey(key) {
  return SPRING_CONFIG_KEYS.has(key);
}
function normalizeTransition(transition) {
  if (!transition) return {
    default: null,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
  if (typeof transition == "string") return {
    default: transition,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
  if (Array.isArray(transition)) {
    const [defaultAnimation, configObj] = transition, properties = {}, springConfig = {};
    let delay, enter = null, exit = null;
    if (configObj && typeof configObj == "object") for (const [key, value] of Object.entries(configObj)) key === "delay" && typeof value == "number" ? delay = value : key === "enter" && typeof value == "string" ? enter = value : key === "exit" && typeof value == "string" ? exit = value : isSpringConfigKey(key) && value !== void 0 ? springConfig[key] = value : value !== void 0 && (properties[key] = value);
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
    };
  }
  if (typeof transition == "object") {
    const properties = {}, springConfig = {};
    let defaultAnimation = null, enter = null, exit = null, delay;
    for (const [key, value] of Object.entries(transition)) key === "default" && typeof value == "string" ? defaultAnimation = value : key === "enter" && typeof value == "string" ? enter = value : key === "exit" && typeof value == "string" ? exit = value : key === "delay" && typeof value == "number" ? delay = value : isSpringConfigKey(key) && value !== void 0 ? springConfig[key] = value : value !== void 0 && (properties[key] = value);
    return {
      default: defaultAnimation,
      enter,
      exit,
      delay,
      properties,
      config: Object.keys(springConfig).length > 0 ? springConfig : void 0
    };
  }
  return {
    default: null,
    enter: null,
    exit: null,
    delay: void 0,
    properties: {}
  };
}
function hasAnimation(normalized) {
  return normalized.default !== null || normalized.enter !== null || normalized.exit !== null || Object.keys(normalized.properties).length > 0;
}
function getAnimatedProperties(normalized) {
  return Object.keys(normalized.properties);
}
function getEffectiveAnimation(normalized, state2) {
  return state2 === "enter" && normalized.enter ? normalized.enter : state2 === "exit" && normalized.exit ? normalized.exit : normalized.default;
}
function getAnimationConfigsForKeys(normalized, animations, keys, defaultAnimation) {
  var _a2, _b2;
  const result = /* @__PURE__ */ new Map();
  for (const key of keys) {
    const propAnimation = normalized.properties[key];
    let animationValue = null;
    typeof propAnimation == "string" ? animationValue = (_a2 = animations[propAnimation]) != null ? _a2 : null : propAnimation && typeof propAnimation == "object" && propAnimation.type && (animationValue = (_b2 = animations[propAnimation.type]) != null ? _b2 : null), animationValue === null && (animationValue = defaultAnimation), result.set(key, animationValue);
  }
  return result;
}

// node_modules/@tamagui/animations-css/dist/esm/createAnimations.mjs
var import_react26 = __toESM(require("react"), 1);
var EXTRACT_MS_REGEX = /(\d+(?:\.\d+)?)\s*ms/;
var EXTRACT_S_REGEX = /(\d+(?:\.\d+)?)\s*s/;
function extractDuration(animation) {
  const msMatch = animation.match(EXTRACT_MS_REGEX);
  if (msMatch) return Number.parseInt(msMatch[1], 10);
  const sMatch = animation.match(EXTRACT_S_REGEX);
  return sMatch ? Math.round(Number.parseFloat(sMatch[1]) * 1e3) : 300;
}
var MS_DURATION_REGEX = /(\d+(?:\.\d+)?)\s*ms/;
var S_DURATION_REGEX = /(\d+(?:\.\d+)?)\s*s(?!tiffness)/;
function applyDurationOverride(animation, durationMs) {
  const msReplaced = animation.replace(MS_DURATION_REGEX, `${durationMs}ms`);
  if (msReplaced !== animation) return msReplaced;
  const sReplaced = animation.replace(S_DURATION_REGEX, `${durationMs}ms`);
  return sReplaced !== animation ? sReplaced : `${durationMs}ms ${animation}`;
}
var TRANSFORM_KEYS = ["x", "y", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY"];
function buildTransformString(style) {
  var _a2, _b2;
  if (!style) return "";
  const parts = [];
  if (style.x !== void 0 || style.y !== void 0) {
    const x = (_a2 = style.x) != null ? _a2 : 0, y = (_b2 = style.y) != null ? _b2 : 0;
    parts.push(`translate(${x}px, ${y}px)`);
  }
  if (style.scale !== void 0 && parts.push(`scale(${style.scale})`), style.scaleX !== void 0 && parts.push(`scaleX(${style.scaleX})`), style.scaleY !== void 0 && parts.push(`scaleY(${style.scaleY})`), style.rotate !== void 0) {
    const val = style.rotate, unit = typeof val == "string" && val.includes("deg") ? "" : "deg";
    parts.push(`rotate(${val}${unit})`);
  }
  return style.rotateX !== void 0 && parts.push(`rotateX(${style.rotateX}deg)`), style.rotateY !== void 0 && parts.push(`rotateY(${style.rotateY}deg)`), style.rotateZ !== void 0 && parts.push(`rotateZ(${style.rotateZ}deg)`), style.skewX !== void 0 && parts.push(`skewX(${style.skewX}deg)`), style.skewY !== void 0 && parts.push(`skewY(${style.skewY}deg)`), parts.join(" ");
}
function applyStylesToNode(node2, style) {
  if (!style) return;
  const transformStr = buildTransformString(style);
  transformStr && (node2.style.transform = transformStr);
  for (const [key, value] of Object.entries(style)) TRANSFORM_KEYS.includes(key) || value !== void 0 && (key === "opacity" ? node2.style.opacity = String(value) : key === "backgroundColor" ? node2.style.backgroundColor = String(value) : key === "color" ? node2.style.color = String(value) : node2.style[key] = typeof value == "number" ? `${value}px` : String(value));
}
function createAnimations(animations) {
  const reactionListeners = /* @__PURE__ */ new WeakMap();
  return {
    animations,
    usePresence,
    ResetPresence,
    supportsCSS: true,
    inputStyle: "css",
    outputStyle: "css",
    classNameAnimation: true,
    useAnimatedNumber(initial) {
      const [val, setVal] = import_react26.default.useState(initial), [onFinish, setOnFinish] = (0, import_react26.useState)();
      return useIsomorphicLayoutEffect(() => {
        onFinish && (onFinish == null ? void 0 : onFinish(), setOnFinish(void 0));
      }, [onFinish]), {
        getInstance() {
          return setVal;
        },
        getValue() {
          return val;
        },
        setValue(next, config2, onFinish2) {
          setVal(next), setOnFinish(onFinish2);
          const listeners2 = reactionListeners.get(setVal);
          listeners2 && listeners2.forEach((listener) => listener(next));
        },
        stop() {
        }
      };
    },
    useAnimatedNumberReaction({
      value
    }, onValue) {
      import_react26.default.useEffect(() => {
        const instance = value.getInstance();
        let queue = reactionListeners.get(instance);
        if (!queue) {
          const next = /* @__PURE__ */ new Set();
          reactionListeners.set(instance, next), queue = next;
        }
        return queue.add(onValue), () => {
          queue == null ? void 0 : queue.delete(onValue);
        };
      }, []);
    },
    useAnimatedNumberStyle(val, getStyle) {
      return getStyle(val.getValue());
    },
    // @ts-ignore - styleState is added by createComponent
    useAnimations: ({
      props,
      presence,
      style,
      componentState,
      stateRef,
      styleState
    }) => {
      var _a2, _b2;
      const isEntering = !!componentState.unmounted, isExiting = (presence == null ? void 0 : presence[0]) === false, sendExitComplete = presence == null ? void 0 : presence[1], wasEnteringRef = import_react26.default.useRef(isEntering), justFinishedEntering = wasEnteringRef.current && !isEntering;
      import_react26.default.useEffect(() => {
        wasEnteringRef.current = isEntering;
      });
      const exitCycleIdRef = import_react26.default.useRef(0), exitCompletedRef = import_react26.default.useRef(false), wasExitingRef = import_react26.default.useRef(false), exitInterruptedRef = import_react26.default.useRef(false), justStartedExiting = isExiting && !wasExitingRef.current, justStoppedExiting = !isExiting && wasExitingRef.current;
      justStartedExiting && (exitCycleIdRef.current++, exitCompletedRef.current = false), justStoppedExiting && (exitCycleIdRef.current++, exitInterruptedRef.current = true), import_react26.default.useEffect(() => {
        wasExitingRef.current = isExiting;
      });
      const effectiveTransition = (_a2 = styleState == null ? void 0 : styleState.effectiveTransition) != null ? _a2 : props.transition, normalized = normalizeTransition(effectiveTransition), effectiveAnimationKey = getEffectiveAnimation(normalized, isExiting ? "exit" : isEntering || justFinishedEntering ? "enter" : "default"), defaultAnimation = effectiveAnimationKey ? animations[effectiveAnimationKey] : null, animatedProperties = getAnimatedProperties(normalized), hasDefault = normalized.default !== null || normalized.enter !== null || normalized.exit !== null, hasPerPropertyConfigs = animatedProperties.length > 0;
      let keys;
      if (props.animateOnly ? keys = props.animateOnly : hasPerPropertyConfigs && !hasDefault ? keys = animatedProperties : hasPerPropertyConfigs && hasDefault ? keys = ["all", ...animatedProperties] : keys = ["all"], useIsomorphicLayoutEffect(() => {
        var _a3;
        const host = stateRef.current.host;
        if (!sendExitComplete || !isExiting || !host) return;
        const node2 = host, cycleId = exitCycleIdRef.current, completeExit = () => {
          cycleId === exitCycleIdRef.current && (exitCompletedRef.current || (exitCompletedRef.current = true, sendExitComplete()));
        };
        if (keys.length === 0) {
          completeExit();
          return;
        }
        let rafId;
        const wasInterrupted = exitInterruptedRef.current;
        let ignoreCancelEvents = wasInterrupted;
        const enterStyle = props.enterStyle, exitStyle = props.exitStyle;
        if (wasInterrupted) {
          if (exitInterruptedRef.current = false, node2.style.transition = "none", exitStyle) {
            const resetStyle = {};
            for (const key of Object.keys(exitStyle)) (enterStyle == null ? void 0 : enterStyle[key]) !== void 0 ? resetStyle[key] = enterStyle[key] : key === "opacity" ? resetStyle[key] = 1 : TRANSFORM_KEYS.includes(key) && (resetStyle[key] = key === "scale" || key === "scaleX" || key === "scaleY" ? 1 : 0);
            applyStylesToNode(node2, resetStyle);
          } else node2.style.opacity = "1", node2.style.transform = "none";
          node2.offsetHeight;
        }
        let maxDuration = defaultAnimation ? extractDuration(defaultAnimation) : 200;
        const animationConfigs = getAnimationConfigsForKeys(normalized, animations, keys, defaultAnimation);
        for (const animationValue of animationConfigs.values()) if (animationValue) {
          const duration = extractDuration(animationValue);
          duration > maxDuration && (maxDuration = duration);
        }
        const delay = (_a3 = normalized.delay) != null ? _a3 : 0, fallbackTimeout = maxDuration + delay, timeoutId = setTimeout(() => {
          completeExit();
        }, fallbackTimeout), transitioningProps = new Set(keys);
        let completedCount = 0;
        const onFinishAnimation = (event) => {
          if (event.target !== node2) return;
          const eventProp = event.propertyName;
          (transitioningProps.has(eventProp) || eventProp === "all") && (completedCount++, completedCount >= transitioningProps.size && (clearTimeout(timeoutId), completeExit()));
        }, onCancelAnimation = () => {
          ignoreCancelEvents || (clearTimeout(timeoutId), completeExit());
        };
        return node2.addEventListener("transitionend", onFinishAnimation), node2.addEventListener("transitioncancel", onCancelAnimation), wasInterrupted && (rafId = requestAnimationFrame(() => {
          var _a4;
          if (cycleId !== exitCycleIdRef.current) return;
          const delayStr2 = normalized.delay ? ` ${normalized.delay}ms` : "", durationOverride2 = (_a4 = normalized.config) == null ? void 0 : _a4.duration;
          node2.style.transition = keys.map((key) => {
            const propAnimation = normalized.properties[key];
            let animationValue = null;
            return typeof propAnimation == "string" ? animationValue = animations[propAnimation] : propAnimation && typeof propAnimation == "object" && propAnimation.type ? animationValue = animations[propAnimation.type] : defaultAnimation && (animationValue = defaultAnimation), animationValue && durationOverride2 && (animationValue = applyDurationOverride(animationValue, durationOverride2)), animationValue ? `${key} ${animationValue}${delayStr2}` : null;
          }).filter(Boolean).join(", "), node2.offsetHeight, applyStylesToNode(node2, exitStyle), ignoreCancelEvents = false;
        })), () => {
          clearTimeout(timeoutId), rafId !== void 0 && cancelAnimationFrame(rafId), node2.removeEventListener("transitionend", onFinishAnimation), node2.removeEventListener("transitioncancel", onCancelAnimation);
        };
      }, [sendExitComplete, isExiting, stateRef, keys, normalized, defaultAnimation, props.enterStyle, props.exitStyle]), !hasAnimation(normalized)) return null;
      Array.isArray(style.transform) && (style.transform = transformsToString(style.transform));
      const delayStr = normalized.delay ? ` ${normalized.delay}ms` : "", durationOverride = (_b2 = normalized.config) == null ? void 0 : _b2.duration;
      return style.transition = keys.map((key) => {
        const propAnimation = normalized.properties[key];
        let animationValue = null;
        return typeof propAnimation == "string" ? animationValue = animations[propAnimation] : propAnimation && typeof propAnimation == "object" && propAnimation.type ? animationValue = animations[propAnimation.type] : defaultAnimation && (animationValue = defaultAnimation), animationValue && durationOverride && (animationValue = applyDurationOverride(animationValue, durationOverride)), animationValue ? `${key} ${animationValue}${delayStr}` : null;
      }).filter(Boolean).join(", "), process.env.NODE_ENV === "development" && props.debug === "verbose" && console.info("CSS animation", {
        props,
        animations,
        normalized,
        defaultAnimation,
        style,
        isEntering,
        isExiting
      }), {
        style,
        className: isEntering ? "t_unmounted" : ""
      };
    }
  };
}

// node_modules/@tamagui/config/dist/esm/animationsCSS.mjs
var easeOut = "cubic-bezier(0.25, 0.1, 0.25, 1)";
var bouncy = "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
var kindaBouncyBezier = "cubic-bezier(0.34, 1.56, 0.64, 1)";
var animationsCSS = createAnimations({
  "0ms": "0ms linear",
  "30ms": "30ms linear",
  "50ms": "50ms linear",
  "75ms": "75ms linear",
  "100ms": "100ms ease-out",
  "200ms": "200ms ease-out",
  "250ms": "250ms ease-out",
  "300ms": "300ms ease-out",
  "400ms": "400ms ease-out",
  "500ms": "500ms ease-out",
  superBouncy: "300ms cubic-bezier(0.175, 0.885, 0.32, 1.5)",
  bouncy: `350ms ${bouncy}`,
  kindaBouncy: `400ms ${kindaBouncyBezier}`,
  superLazy: `600ms ${easeOut}`,
  lazy: `500ms ${easeOut}`,
  medium: `300ms ${easeOut}`,
  slowest: `800ms ${easeOut}`,
  slow: `450ms ${easeOut}`,
  quick: `150ms ${easeOut}`,
  quickLessBouncy: `180ms ${easeOut}`,
  tooltip: "200ms cubic-bezier(0.175, 0.885, 0.32, 1.1)",
  quicker: `120ms ${easeOut}`,
  quickerLessBouncy: `100ms ${easeOut}`,
  quickest: `80ms ${easeOut}`,
  quickestLessBouncy: `60ms ${easeOut}`
});

// node_modules/@tamagui/font-inter/dist/esm/index.mjs
var import_core12 = require("@tamagui/core");
var createInterFont = (font = {}, {
  sizeLineHeight = (size3) => size3 + 10,
  sizeSize = (size3) => size3 * 1
} = {}) => {
  const size3 = Object.fromEntries(Object.entries({
    ...defaultSizes,
    ...font.size
  }).map(([k, v]) => [k, sizeSize(+v)]));
  return (0, import_core12.createFont)({
    family: import_core12.isWeb ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter",
    lineHeight: Object.fromEntries(Object.entries(size3).map(([k, v]) => [k, sizeLineHeight((0, import_core12.getVariableValue)(v))])),
    weight: {
      4: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font,
    size: size3
  });
};
var defaultSizes = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  true: 14,
  5: 16,
  6: 18,
  7: 20,
  8: 23,
  9: 30,
  10: 46,
  11: 55,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 134
};

// node_modules/@tamagui/font-silkscreen/dist/esm/index.mjs
var import_core13 = require("@tamagui/core");
var createSilkscreenFont = (font = {}) => (0, import_core13.createFont)({
  family: import_core13.isWeb ? "Silkscreen, Fira Code, Monaco, Consolas, Ubuntu Mono, monospace" : "Silkscreen",
  size: size2,
  lineHeight: Object.fromEntries(Object.entries(font.size || size2).map(([k, v]) => [k, typeof v == "number" ? Math.round(v * 1.2 + 6) : v])),
  weight: {
    4: "300"
  },
  letterSpacing: {
    4: 1,
    5: 3,
    6: 3,
    9: -2,
    10: -3,
    12: -4
  },
  ...font
});
var size2 = {
  1: 11,
  2: 12,
  3: 13,
  4: 14,
  5: 15,
  6: 16,
  7: 18,
  8: 21,
  9: 28,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};

// node_modules/@tamagui/config/dist/esm/createGenericFont.mjs
var genericFontSizes = {
  1: 10,
  2: 11,
  3: 12,
  4: 14,
  5: 15,
  6: 16,
  7: 20,
  8: 22,
  9: 30,
  10: 42,
  11: 52,
  12: 62,
  13: 72,
  14: 92,
  15: 114,
  16: 124
};
function createGenericFont(family, font = {}, {
  sizeLineHeight = (val) => val * 1.35
} = {}) {
  const size3 = font.size || genericFontSizes;
  return createFont({
    family,
    size: size3,
    lineHeight: Object.fromEntries(Object.entries(size3).map(([k, v]) => [k, sizeLineHeight(+v)])),
    weight: {
      0: "300"
    },
    letterSpacing: {
      4: 0
    },
    ...font
  });
}

// node_modules/@tamagui/config/dist/esm/fonts.mjs
var silkscreenFont = createSilkscreenFont();
var headingFont = createInterFont({
  size: {
    5: 13,
    6: 15,
    9: 32,
    10: 44
  },
  transform: {
    6: "uppercase",
    7: "none"
  },
  weight: {
    6: "400",
    7: "700"
  },
  color: {
    6: "$colorFocus",
    7: "$color"
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: 0,
    9: -1,
    10: -1.5,
    12: -2,
    14: -3,
    15: -4
  },
  // for native
  face: {
    700: {
      normal: "InterBold"
    },
    800: {
      normal: "InterBold"
    },
    900: {
      normal: "InterBold"
    }
  }
}, {
  sizeLineHeight: (size3) => Math.round(size3 * 1.1 + (size3 < 30 ? 10 : 5))
});
var bodyFont = createInterFont({
  weight: {
    1: "400"
  }
}, {
  sizeSize: (size3) => Math.round(size3),
  sizeLineHeight: (size3) => Math.round(size3 * 1.1 + (size3 >= 12 ? 8 : 4))
});
var monoFont = createGenericFont('"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace', {
  weight: {
    1: "500"
  },
  size: {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 22,
    9: 30,
    10: 42,
    11: 52,
    12: 62,
    13: 72,
    14: 92,
    15: 114,
    16: 124
  }
}, {
  sizeLineHeight: (x) => x * 1.5
});
var fonts = {
  heading: headingFont,
  body: bodyFont,
  mono: monoFont,
  silkscreen: silkscreenFont
};

// node_modules/@tamagui/config/dist/esm/media.mjs
var media = {
  // for site
  xl: {
    maxWidth: 1650
  },
  lg: {
    maxWidth: 1280
  },
  md: {
    maxWidth: 1020
  },
  sm: {
    maxWidth: 800
  },
  xs: {
    maxWidth: 660
  },
  xxs: {
    maxWidth: 390
  },
  gtXs: {
    minWidth: 661
  },
  gtSm: {
    minWidth: 801
  },
  gtMd: {
    minWidth: 1021
  },
  gtLg: {
    minWidth: 1281
  },
  gtXl: {
    minWidth: 1651
  }
};
var mediaQueryDefaultActive = {
  xl: true,
  lg: true,
  md: true,
  sm: true,
  xs: true,
  // false
  xxs: false
};

// node_modules/@tamagui/config/dist/esm/v3.mjs
globalThis.global || (globalThis.global = globalThis);
var shorthands = {
  ussel: "userSelect",
  cur: "cursor",
  pe: "pointerEvents",
  col: "color",
  ff: "fontFamily",
  fos: "fontSize",
  fost: "fontStyle",
  fow: "fontWeight",
  ls: "letterSpacing",
  lh: "lineHeight",
  ta: "textAlign",
  tt: "textTransform",
  ww: "wordWrap",
  ac: "alignContent",
  ai: "alignItems",
  als: "alignSelf",
  b: "bottom",
  bg: "backgroundColor",
  bbc: "borderBottomColor",
  bblr: "borderBottomLeftRadius",
  bbrr: "borderBottomRightRadius",
  bbw: "borderBottomWidth",
  blc: "borderLeftColor",
  blw: "borderLeftWidth",
  bc: "borderColor",
  br: "borderRadius",
  bs: "borderStyle",
  brw: "borderRightWidth",
  brc: "borderRightColor",
  btc: "borderTopColor",
  btlr: "borderTopLeftRadius",
  btrr: "borderTopRightRadius",
  btw: "borderTopWidth",
  bw: "borderWidth",
  dsp: "display",
  f: "flex",
  fb: "flexBasis",
  fd: "flexDirection",
  fg: "flexGrow",
  fs: "flexShrink",
  fw: "flexWrap",
  h: "height",
  jc: "justifyContent",
  l: "left",
  m: "margin",
  mah: "maxHeight",
  maw: "maxWidth",
  mb: "marginBottom",
  mih: "minHeight",
  miw: "minWidth",
  ml: "marginLeft",
  mr: "marginRight",
  mt: "marginTop",
  mx: "marginHorizontal",
  my: "marginVertical",
  o: "opacity",
  ov: "overflow",
  p: "padding",
  pb: "paddingBottom",
  pl: "paddingLeft",
  pos: "position",
  pr: "paddingRight",
  pt: "paddingTop",
  px: "paddingHorizontal",
  py: "paddingVertical",
  r: "right",
  shac: "shadowColor",
  shar: "shadowRadius",
  shof: "shadowOffset",
  shop: "shadowOpacity",
  t: "top",
  w: "width",
  zi: "zIndex"
};
var selectionStyles = (theme) => theme.color5 ? {
  backgroundColor: theme.color5,
  color: theme.color11
} : null;
var themes22 = process.env.TAMAGUI_OPTIMIZE_THEMES === "true" ? {} : themes2;
var config = {
  animations: animationsCSS,
  themes: themes22,
  media,
  shorthands,
  tokens: tokens2,
  fonts,
  selectionStyles,
  settings: {
    mediaQueryDefaultActive,
    defaultFont: "body",
    fastSchemeChange: true,
    shouldAddPrefersColorThemes: true
  }
};

// src/tamagui.config.ts
var tamaguiConfig = createTamagui(config);
var tamagui_config_default = tamaguiConfig;

// src/provider/AppProvider.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var AppProvider = ({
  children,
  defaultTheme = "light"
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TamaguiProvider, { config: tamagui_config_default, defaultTheme, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_core11.Theme, { name: defaultTheme, children }) });
};

// src/components/Button/Button.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var Button2 = ({ title, onPress, full }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Button,
    {
      width: full ? "100%" : "auto",
      onPress,
      backgroundColor: "$blue10",
      pressStyle: { backgroundColor: "$blue9" },
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Text4, { color: "white", children: title })
    }
  );
};

// src/components/TextField/TextField.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var TextField = ({ label, value, onChangeText }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(YStack, { gap: "$2", children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Text4, { fontWeight: "600", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      Input,
      {
        value,
        onChangeText,
        borderWidth: 1,
        borderColor: "$borderColor"
      }
    )
  ] });
};

// src/components/Card/Card.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var Card = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    YStack,
    {
      padding: "$4",
      borderRadius: "$6",
      backgroundColor: "$background",
      borderWidth: 1,
      borderColor: "$borderColor",
      shadowColor: "$shadowColor",
      elevation: 4,
      children
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppProvider,
  Button,
  Card,
  TextField,
  tamaguiConfig
});
/*! Bundled license information:

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.js.map