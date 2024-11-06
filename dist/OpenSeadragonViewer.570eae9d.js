// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9Ij5p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "0ca2c271570eae9d";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1xC6H":[function(require,module,exports) {
var Refresh = require("6d18d6bd340e7473");
var ErrorOverlay = require("74ad5ea14201648c");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"6d18d6bd340e7473":"786KC","74ad5ea14201648c":"1dldy"}],"aXPeV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18Next = require("react-i18next");
var _flatten = require("lodash/flatten");
var _flattenDefault = parcelHelpers.interopDefault(_flatten);
var _withPlugins = require("../extend/withPlugins");
var _openSeadragonViewer = require("../components/OpenSeadragonViewer");
var _actions = require("../state/actions");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */ var mapStateToProps = function mapStateToProps(state, _ref) {
    var windowId = _ref.windowId;
    var canvasWorld = (0, _selectors.getCurrentCanvasWorld)(state, {
        windowId: windowId
    });
    var infoResponses = (0, _selectors.selectInfoResponses)(state);
    var imageServiceIds = (0, _flattenDefault.default)(canvasWorld.canvases.map(function(c) {
        return c.imageServiceIds;
    }));
    return {
        canvasWorld: canvasWorld,
        drawAnnotations: (0, _selectors.getConfig)(state).window.forceDrawAnnotations || (0, _selectors.getCompanionWindowsForContent)(state, {
            content: "annotations",
            windowId: windowId
        }).length > 0 || (0, _selectors.getCompanionWindowsForContent)(state, {
            content: "search",
            windowId: windowId
        }).length > 0,
        infoResponses: imageServiceIds.map(function(id) {
            return infoResponses[id];
        }).filter(function(infoResponse) {
            return infoResponse !== undefined && infoResponse.isFetching === false && infoResponse.error === undefined;
        }),
        label: (0, _selectors.getCanvasLabel)(state, {
            canvasId: ((0, _selectors.getCurrentCanvas)(state, {
                windowId: windowId
            }) || {}).id,
            windowId: windowId
        }),
        nonTiledImages: (0, _selectors.getVisibleCanvasNonTiledResources)(state, {
            windowId: windowId
        }),
        osdConfig: (0, _selectors.getConfig)(state).osdConfig,
        viewerConfig: (0, _selectors.getViewer)(state, {
            windowId: windowId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    updateViewport: _actions.updateViewport
};
var enhance = (0, _redux.compose)((0, _reactI18Next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)("OpenSeadragonViewer"));
exports.default = enhance((0, _openSeadragonViewer.OpenSeadragonViewer));

},{"redux":"anWnS","react-redux":"62sf7","react-i18next":"faThV","lodash/flatten":"71l7m","../extend/withPlugins":"8qYrm","../components/OpenSeadragonViewer":"6uzrs","../state/actions":"bqnXe","../state/selectors":"5r9Wj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6uzrs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OpenSeadragonViewer", ()=>OpenSeadragonViewer);
var _react = require("react");
var _styles = require("@mui/material/styles");
var _debounce = require("lodash/debounce");
var _debounceDefault = parcelHelpers.interopDefault(_debounce);
var _isEqual = require("lodash/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _openseadragon = require("openseadragon");
var _openseadragonDefault = parcelHelpers.interopDefault(_openseadragon);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _cssNs = require("../config/css-ns");
var _cssNsDefault = parcelHelpers.interopDefault(_cssNs);
var _annotationsOverlay = require("../containers/AnnotationsOverlay");
var _annotationsOverlayDefault = parcelHelpers.interopDefault(_annotationsOverlay);
var _canvasWorld = require("../lib/CanvasWorld");
var _canvasWorldDefault = parcelHelpers.interopDefault(_canvasWorld);
var _pluginHook = require("./PluginHook");
var _osdreferences = require("../plugins/OSDReferences");
var _jsxRuntime = require("react/jsx-runtime");
function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
}
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
var StyledSection = (0, _styles.styled)("section")({
    cursor: "grab",
    flex: 1,
    position: "relative"
});
var OpenSeadragonViewer = /*#__PURE__*/ function(_Component) {
    /**
   * @param {Object} props
   */ function OpenSeadragonViewer(props) {
        var _this;
        _classCallCheck(this, OpenSeadragonViewer);
        _this = _callSuper(this, OpenSeadragonViewer, [
            props
        ]);
        _this.state = {
            grabbing: false,
            viewer: undefined
        };
        _this.ref = /*#__PURE__*/ (0, _react.createRef)();
        _this.apiRef = /*#__PURE__*/ (0, _react.createRef)();
        (0, _osdreferences.OSDReferences).set(props.windowId, _this.apiRef);
        _this.onCanvasMouseMove = (0, _debounceDefault.default)(_this.onCanvasMouseMove.bind(_this), 10);
        _this.onViewportChange = _this.onViewportChange.bind(_this);
        _this.zoomToWorld = _this.zoomToWorld.bind(_this);
        _this.osdUpdating = false;
        return _this;
    }
    /**
   * React lifecycle event
   */ _inherits(OpenSeadragonViewer, _Component);
    return _createClass(OpenSeadragonViewer, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this2 = this;
                var _this$props = this.props, osdConfig = _this$props.osdConfig, t = _this$props.t, windowId = _this$props.windowId;
                if (!this.ref.current) return;
                var viewer = new (0, _openseadragonDefault.default)(_objectSpread({
                    id: this.ref.current.id
                }, osdConfig));
                var canvas = viewer.canvas && viewer.canvas.firstElementChild;
                if (canvas) {
                    canvas.setAttribute("role", "img");
                    canvas.setAttribute("aria-label", t("digitizedView"));
                    canvas.setAttribute("aria-describedby", "".concat(windowId, "-osd"));
                }
                this.apiRef.current = viewer;
                this.setState({
                    viewer: viewer
                });
                viewer.addHandler("canvas-drag", function() {
                    _this2.setState({
                        grabbing: true
                    });
                });
                viewer.addHandler("canvas-drag-end", function() {
                    _this2.setState({
                        grabbing: false
                    });
                });
                // Set a flag when OSD starts animating (so that viewer updates are not used)
                viewer.addHandler("animation-start", function() {
                    _this2.osdUpdating = true;
                });
                viewer.addHandler("animation-finish", this.onViewportChange);
                viewer.addHandler("animation-finish", function() {
                    _this2.osdUpdating = false;
                });
                if (viewer.innerTracker) viewer.innerTracker.moveHandler = this.onCanvasMouseMove;
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps, prevState) {
                var _this$props2 = this.props, viewerConfig = _this$props2.viewerConfig, canvasWorld = _this$props2.canvasWorld;
                var viewer = this.state.viewer;
                this.apiRef.current = viewer;
                if (prevState.viewer === undefined) {
                    if (viewerConfig) {
                        viewer.viewport.panTo(viewerConfig, true);
                        viewer.viewport.zoomTo(viewerConfig.zoom, viewerConfig, true);
                        viewerConfig.degrees !== undefined && viewer.viewport.setRotation(viewerConfig.degrees);
                        viewerConfig.flip !== undefined && viewer.viewport.setFlip(viewerConfig.flip);
                    }
                    this.addAllImageSources(!viewerConfig);
                    return;
                }
                if (!this.infoResponsesMatch(prevProps.infoResponses) || !this.nonTiledImagedMatch(prevProps.nonTiledImages)) {
                    viewer.close();
                    var canvasesChanged = !(0, _isEqualDefault.default)(canvasWorld.canvasIds, prevProps.canvasWorld.canvasIds);
                    if (canvasesChanged && viewer.preserveViewport) // Do not reset the zoom after add
                    this.addAllImageSources(false);
                    else // Reset the zoom if the canvas has changed or if there is no viewerConfig
                    this.addAllImageSources(canvasesChanged || !viewerConfig);
                } else if (!(0, _isEqualDefault.default)(canvasWorld.layers, prevProps.canvasWorld.layers)) this.refreshTileProperties();
                else if (viewerConfig && !this.osdUpdating) {
                    var viewport = viewer.viewport;
                    if (viewerConfig.x !== viewport.centerSpringX.target.value || viewerConfig.y !== viewport.centerSpringY.target.value) viewport.panTo(viewerConfig, false);
                    if (viewerConfig.zoom !== viewport.zoomSpring.target.value) viewport.zoomTo(viewerConfig.zoom, viewerConfig, false);
                    if (viewerConfig.rotation !== viewport.getRotation()) viewport.setRotation(viewerConfig.rotation);
                    if (viewerConfig.flip !== viewport.getFlip()) viewport.setFlip(viewerConfig.flip);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var viewer = this.state.viewer;
                if (viewer.innerTracker && viewer.innerTracker.moveHandler === this.onCanvasMouseMove) viewer.innerTracker.moveHandler = null;
                viewer.removeAllHandlers();
                this.onCanvasMouseMove.cancel();
                this.apiRef.current = undefined;
            }
        },
        {
            key: "onCanvasMouseMove",
            value: function onCanvasMouseMove(event) {
                var viewer = this.state.viewer;
                viewer.raiseEvent("mouse-move", event);
            }
        },
        {
            key: "onViewportChange",
            value: function onViewportChange(event) {
                var _this$props3 = this.props, updateViewport = _this$props3.updateViewport, windowId = _this$props3.windowId;
                var viewport = event.eventSource.viewport;
                updateViewport(windowId, {
                    flip: viewport.getFlip(),
                    rotation: viewport.getRotation(),
                    x: Math.round(viewport.centerSpringX.target.value),
                    y: Math.round(viewport.centerSpringY.target.value),
                    zoom: viewport.zoomSpring.target.value
                });
            }
        },
        {
            key: "addAllImageSources",
            value: function addAllImageSources() {
                var _this3 = this;
                var zoomAfterAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                var _this$props4 = this.props, nonTiledImages = _this$props4.nonTiledImages, infoResponses = _this$props4.infoResponses;
                return Promise.allSettled([].concat(_toConsumableArray(infoResponses.map(function(infoResponse) {
                    return _this3.addTileSource(infoResponse);
                })), _toConsumableArray(nonTiledImages.map(function(image) {
                    return _this3.addNonTiledImage(image);
                })))).then(function() {
                    if (infoResponses[0] || nonTiledImages[0]) {
                        if (zoomAfterAdd) _this3.zoomToWorld();
                        _this3.refreshTileProperties();
                    }
                });
            }
        },
        {
            key: "addNonTiledImage",
            value: function addNonTiledImage(contentResource) {
                var canvasWorld = this.props.canvasWorld;
                var viewer = this.state.viewer;
                var type = contentResource.getProperty("type");
                var format = contentResource.getProperty("format") || "";
                if (!(type === "Image" || type === "dctypes:Image" || format.startsWith("image/"))) return Promise.resolve();
                return new Promise(function(resolve, reject) {
                    resolve(viewer.addSimpleImage({
                        error: function error(event) {
                            return reject(event);
                        },
                        fitBounds: _construct((0, _openseadragonDefault.default).Rect, _toConsumableArray(canvasWorld.contentResourceToWorldCoordinates(contentResource))),
                        index: canvasWorld.layerIndexOfImageResource(contentResource),
                        opacity: canvasWorld.layerOpacityOfImageResource(contentResource),
                        success: function success(event) {
                            return resolve(event);
                        },
                        url: contentResource.id
                    }));
                });
            }
        },
        {
            key: "addTileSource",
            value: function addTileSource(infoResponse) {
                var canvasWorld = this.props.canvasWorld;
                var viewer = this.state.viewer;
                return new Promise(function(resolve, reject) {
                    // OSD mutates this object, so we give it a shallow copy
                    var tileSource = _objectSpread({}, infoResponse.json);
                    var contentResource = canvasWorld.contentResource(infoResponse.id);
                    if (!contentResource) return;
                    viewer.addTiledImage({
                        error: function error(event) {
                            return reject(event);
                        },
                        fitBounds: _construct((0, _openseadragonDefault.default).Rect, _toConsumableArray(canvasWorld.contentResourceToWorldCoordinates(contentResource))),
                        index: canvasWorld.layerIndexOfImageResource(contentResource),
                        opacity: canvasWorld.layerOpacityOfImageResource(contentResource),
                        success: function success(event) {
                            return resolve(event);
                        },
                        tileSource: tileSource
                    });
                });
            }
        },
        {
            key: "refreshTileProperties",
            value: function refreshTileProperties() {
                var canvasWorld = this.props.canvasWorld;
                var viewer = this.state.viewer;
                var world = viewer.world;
                var items = [];
                for(var i = 0; i < world.getItemCount(); i += 1)items.push(world.getItemAt(i));
                items.forEach(function(item, i) {
                    var contentResource = canvasWorld.contentResource(item.source["@id"] || item.source.id);
                    if (!contentResource) return;
                    var newIndex = canvasWorld.layerIndexOfImageResource(contentResource);
                    if (i !== newIndex) world.setItemIndex(item, newIndex);
                    item.setOpacity(canvasWorld.layerOpacityOfImageResource(contentResource));
                });
            }
        },
        {
            key: "fitBounds",
            value: function fitBounds(x, y, w, h) {
                var immediately = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
                var viewer = this.state.viewer;
                viewer && viewer.viewport && viewer.viewport.fitBounds(new (0, _openseadragonDefault.default).Rect(x, y, w, h), immediately);
            }
        },
        {
            key: "infoResponsesMatch",
            value: function infoResponsesMatch(prevInfoResponses) {
                var infoResponses = this.props.infoResponses;
                if (infoResponses.length === 0 && prevInfoResponses.length === 0) return true;
                if (infoResponses.length !== prevInfoResponses.length) return false;
                return infoResponses.every(function(infoResponse, index) {
                    if (!prevInfoResponses[index]) return false;
                    if (!infoResponse.json || !prevInfoResponses[index].json) return false;
                    if (infoResponse.tokenServiceId !== prevInfoResponses[index].tokenServiceId) return false;
                    if (infoResponse.json["@id"] && infoResponse.json["@id"] === prevInfoResponses[index].json["@id"]) return true;
                    if (infoResponse.json.id && infoResponse.json.id === prevInfoResponses[index].json.id) return true;
                    return false;
                });
            }
        },
        {
            key: "nonTiledImagedMatch",
            value: function nonTiledImagedMatch(prevNonTiledImages) {
                var nonTiledImages = this.props.nonTiledImages;
                if (nonTiledImages.length === 0 && prevNonTiledImages.length === 0) return true;
                return nonTiledImages.some(function(image, index) {
                    if (!prevNonTiledImages[index]) return false;
                    if (image.id === prevNonTiledImages[index].id) return true;
                    return false;
                });
            }
        },
        {
            key: "zoomToWorld",
            value: function zoomToWorld() {
                var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                var canvasWorld = this.props.canvasWorld;
                this.fitBounds.apply(this, _toConsumableArray(canvasWorld.worldBounds()).concat([
                    immediately
                ]));
            }
        },
        {
            key: "render",
            value: function render() {
                var _this4 = this;
                var _this$props5 = this.props, children = _this$props5.children, label = _this$props5.label, t = _this$props5.t, windowId = _this$props5.windowId, drawAnnotations = _this$props5.drawAnnotations;
                var _this$state = this.state, viewer = _this$state.viewer, grabbing = _this$state.grabbing;
                var enhancedChildren = (0, _react.Children).map(children, function(child) {
                    return /*#__PURE__*/ (0, _react.cloneElement)(child, {
                        zoomToWorld: _this4.zoomToWorld
                    });
                });
                return /*#__PURE__*/ (0, _jsxRuntime.jsxs)(StyledSection, {
                    className: (0, _classnamesDefault.default)((0, _cssNsDefault.default)("osd-container")),
                    style: {
                        cursor: grabbing ? "grabbing" : undefined
                    },
                    id: "".concat(windowId, "-osd"),
                    ref: this.ref,
                    "aria-label": t("item", {
                        label: label
                    }),
                    "aria-live": "polite",
                    children: [
                        drawAnnotations && /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _annotationsOverlayDefault.default), {
                            viewer: viewer,
                            windowId: windowId
                        }),
                        enhancedChildren,
                        /*#__PURE__*/ (0, _jsxRuntime.jsx)((0, _pluginHook.PluginHook), _objectSpread({
                            viewer: viewer
                        }, _objectSpread(_objectSpread({}, this.props), {}, {
                            children: null
                        })))
                    ]
                });
            }
        }
    ]);
}((0, _react.Component));
OpenSeadragonViewer.defaultProps = {
    children: null,
    drawAnnotations: false,
    infoResponses: [],
    label: null,
    nonTiledImages: [],
    osdConfig: {},
    viewerConfig: null
};

},{"react":"21dqq","@mui/material/styles":"1lzai","lodash/debounce":"bv6vy","lodash/isEqual":"9XEia","openseadragon":"vMklB","classnames":"jocGM","../config/css-ns":"7FzFf","../containers/AnnotationsOverlay":"tKG9C","../lib/CanvasWorld":"eIa1L","./PluginHook":"btJE7","../plugins/OSDReferences":"aMmjg","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tKG9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _redux = require("redux");
var _reactRedux = require("react-redux");
var _reactI18Next = require("react-i18next");
var _withPlugins = require("../extend/withPlugins");
var _annotationsOverlay = require("../components/AnnotationsOverlay");
var _actions = require("../state/actions");
var _selectors = require("../state/selectors");
/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */ var mapStateToProps = function mapStateToProps(state, _ref) {
    var windowId = _ref.windowId;
    return {
        annotations: (0, _selectors.getPresentAnnotationsOnSelectedCanvases)(state, {
            windowId: windowId
        }),
        canvasWorld: (0, _selectors.getCurrentCanvasWorld)(state, {
            windowId: windowId
        }),
        drawAnnotations: (0, _selectors.getConfig)(state).window.forceDrawAnnotations || (0, _selectors.getCompanionWindowsForContent)(state, {
            content: "annotations",
            windowId: windowId
        }).length > 0,
        drawSearchAnnotations: (0, _selectors.getConfig)(state).window.forceDrawAnnotations || (0, _selectors.getCompanionWindowsForContent)(state, {
            content: "search",
            windowId: windowId
        }).length > 0,
        highlightAllAnnotations: (0, _selectors.getWindow)(state, {
            windowId: windowId
        }).highlightAllAnnotations,
        hoveredAnnotationIds: (0, _selectors.getWindow)(state, {
            windowId: windowId
        }).hoveredAnnotationIds,
        palette: (0, _selectors.getTheme)(state).palette,
        searchAnnotations: (0, _selectors.getSearchAnnotationsForWindow)(state, {
            windowId: windowId
        }),
        selectedAnnotationId: (0, _selectors.getSelectedAnnotationId)(state, {
            windowId: windowId
        })
    };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */ var mapDispatchToProps = {
    deselectAnnotation: _actions.deselectAnnotation,
    hoverAnnotation: _actions.hoverAnnotation,
    selectAnnotation: _actions.selectAnnotation
};
var enhance = (0, _redux.compose)((0, _reactI18Next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _withPlugins.withPlugins)("AnnotationsOverlay"));
exports.default = enhance((0, _annotationsOverlay.AnnotationsOverlay));

},{"redux":"anWnS","react-redux":"62sf7","react-i18next":"faThV","../extend/withPlugins":"8qYrm","../components/AnnotationsOverlay":"aD1xd","../state/actions":"bqnXe","../state/selectors":"5r9Wj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aD1xd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnnotationsOverlay", ()=>AnnotationsOverlay);
var _react = require("react");
var _reactDom = require("react-dom");
var _reactDomDefault = parcelHelpers.interopDefault(_reactDom);
var _isEqual = require("lodash/isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _debounce = require("lodash/debounce");
var _debounceDefault = parcelHelpers.interopDefault(_debounce);
var _flatten = require("lodash/flatten");
var _flattenDefault = parcelHelpers.interopDefault(_flatten);
var _sortBy = require("lodash/sortBy");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _xor = require("lodash/xor");
var _xorDefault = parcelHelpers.interopDefault(_xor);
var _openSeadragonCanvasOverlay = require("../lib/OpenSeadragonCanvasOverlay");
var _openSeadragonCanvasOverlayDefault = parcelHelpers.interopDefault(_openSeadragonCanvasOverlay);
var _canvasWorld = require("../lib/CanvasWorld");
var _canvasWorldDefault = parcelHelpers.interopDefault(_canvasWorld);
var _canvasAnnotationDisplay = require("../lib/CanvasAnnotationDisplay");
var _canvasAnnotationDisplayDefault = parcelHelpers.interopDefault(_canvasAnnotationDisplay);
/**
 * Represents a OpenSeadragonViewer in the mirador workspace. Responsible for mounting
 * and rendering OSD.
 */ var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
        var e, n, i, u, a = [], f = !0, o = !1;
        try {
            if (i = (t = t.call(r)).next, 0 === l) {
                if (Object(t) !== t) return;
                f = !1;
            } else for(; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
        } catch (r) {
            o = !0, n = r;
        } finally{
            try {
                if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
            } finally{
                if (o) throw n;
            }
        }
        return a;
    }
}
function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
var AnnotationsOverlay = /*#__PURE__*/ function(_Component) {
    /**
   * @param {Object} props
   */ function AnnotationsOverlay(props) {
        var _this;
        _classCallCheck(this, AnnotationsOverlay);
        _this = _callSuper(this, AnnotationsOverlay, [
            props
        ]);
        _this.ref = /*#__PURE__*/ (0, _react.createRef)();
        _this.osdCanvasOverlay = null;
        // An initial value for the updateCanvas method
        _this.updateCanvas = function() {};
        _this.onUpdateViewport = _this.onUpdateViewport.bind(_this);
        _this.onCanvasClick = _this.onCanvasClick.bind(_this);
        _this.onCanvasMouseMove = (0, _debounceDefault.default)(_this.onCanvasMouseMove.bind(_this), 10);
        _this.onCanvasExit = _this.onCanvasExit.bind(_this);
        return _this;
    }
    /**
   * React lifecycle event
   */ _inherits(AnnotationsOverlay, _Component);
    return _createClass(AnnotationsOverlay, [
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.initializeViewer();
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                var _this$props = this.props, drawAnnotations = _this$props.drawAnnotations, drawSearchAnnotations = _this$props.drawSearchAnnotations, annotations = _this$props.annotations, searchAnnotations = _this$props.searchAnnotations, hoveredAnnotationIds = _this$props.hoveredAnnotationIds, selectedAnnotationId = _this$props.selectedAnnotationId, highlightAllAnnotations = _this$props.highlightAllAnnotations, viewer = _this$props.viewer;
                this.initializeViewer();
                var annotationsUpdated = !AnnotationsOverlay.annotationsMatch(annotations, prevProps.annotations);
                var searchAnnotationsUpdated = !AnnotationsOverlay.annotationsMatch(searchAnnotations, prevProps.searchAnnotations);
                var hoveredAnnotationsUpdated = (0, _xorDefault.default)(hoveredAnnotationIds, prevProps.hoveredAnnotationIds).length > 0;
                if (this.osdCanvasOverlay && hoveredAnnotationsUpdated) {
                    if (hoveredAnnotationIds.length > 0) this.osdCanvasOverlay.canvasDiv.style.cursor = "pointer";
                    else this.osdCanvasOverlay.canvasDiv.style.cursor = "";
                }
                var selectedAnnotationsUpdated = selectedAnnotationId !== prevProps.selectedAnnotationId;
                var redrawAnnotations = drawAnnotations !== prevProps.drawAnnotations || drawSearchAnnotations !== prevProps.drawSearchAnnotations || highlightAllAnnotations !== prevProps.highlightAllAnnotations;
                if (searchAnnotationsUpdated || annotationsUpdated || selectedAnnotationsUpdated || hoveredAnnotationsUpdated || redrawAnnotations) {
                    this.updateCanvas = this.canvasUpdateCallback();
                    viewer.forceRedraw();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var viewer = this.props.viewer;
                this.onCanvasMouseMove.cancel();
                viewer.removeHandler("canvas-click", this.onCanvasClick);
                viewer.removeHandler("canvas-exit", this.onCanvasExit);
                viewer.removeHandler("update-viewport", this.onUpdateViewport);
                viewer.removeHandler("mouse-move", this.onCanvasMouseMove);
            }
        },
        {
            key: "onCanvasClick",
            value: function onCanvasClick(event) {
                var _this2 = this;
                var canvasWorld = this.props.canvasWorld;
                var webPosition = event.position, viewport = event.eventSource.viewport;
                var point = viewport.pointFromPixel(webPosition);
                var canvas = canvasWorld.canvasAtPoint(point);
                if (!canvas) return;
                var _canvasWorld$canvasTo = canvasWorld.canvasToWorldCoordinates(canvas.id), _canvasWorld$canvasTo2 = _slicedToArray(_canvasWorld$canvasTo, 4), _canvasX = _canvasWorld$canvasTo2[0], _canvasY = _canvasWorld$canvasTo2[1], canvasWidth = _canvasWorld$canvasTo2[2], canvasHeight // eslint-disable-line no-unused-vars
                 = _canvasWorld$canvasTo2[3];
                // get all the annotations that contain the click
                var annos = this.annotationsAtPoint(canvas, point);
                if (annos.length > 0) event.preventDefaultAction = true; // eslint-disable-line no-param-reassign
                if (annos.length === 1) this.toggleAnnotation(annos[0].id);
                else if (annos.length > 0) {
                    /**
         * Try to find the "right" annotation to select after a click.
         *
         * This is perhaps a naive method, but seems to deal with rectangles and SVG shapes:
         *
         * - figure out how many points around a circle are inside the annotation shape
         * - if there's a shape with the fewest interior points, it's probably the one
         *       with the closest boundary?
         * - if there's a tie, make the circle bigger and try again.
         */ var annosWithClickScore = function annosWithClickScore(radius) {
                        var degreesToRadians = Math.PI / 180;
                        return function(anno) {
                            var score = 0;
                            for(var degrees = 0; degrees < 360; degrees += 1){
                                var x = Math.cos(degrees * degreesToRadians) * radius + point.x;
                                var y = Math.sin(degrees * degreesToRadians) * radius + point.y;
                                if (_this2.isAnnotationAtPoint(anno, canvas, {
                                    x: x,
                                    y: y
                                })) score += 1;
                            }
                            return {
                                anno: anno,
                                score: score
                            };
                        };
                    };
                    var annosWithScore = [];
                    var radius = 1;
                    annosWithScore = (0, _sortByDefault.default)(annos.map(annosWithClickScore(radius)), "score");
                    while(radius < Math.max(canvasWidth, canvasHeight) && annosWithScore[0].score === annosWithScore[1].score){
                        radius *= 2;
                        annosWithScore = (0, _sortByDefault.default)(annos.map(annosWithClickScore(radius)), "score");
                    }
                    this.toggleAnnotation(annosWithScore[0].anno.id);
                }
            }
        },
        {
            key: "onCanvasMouseMove",
            value: function onCanvasMouseMove(event) {
                var _this$props2 = this.props, annotations = _this$props2.annotations, canvasWorld = _this$props2.canvasWorld, hoverAnnotation = _this$props2.hoverAnnotation, hoveredAnnotationIds = _this$props2.hoveredAnnotationIds, searchAnnotations = _this$props2.searchAnnotations, viewer = _this$props2.viewer, windowId = _this$props2.windowId;
                if (annotations.length === 0 && searchAnnotations.length === 0) return;
                var webPosition = event.position;
                var point = viewer.viewport.pointFromPixel(webPosition);
                var canvas = canvasWorld.canvasAtPoint(point);
                if (!canvas) {
                    hoverAnnotation(windowId, []);
                    return;
                }
                var annos = this.annotationsAtPoint(canvas, point);
                if ((0, _xorDefault.default)(hoveredAnnotationIds, annos.map(function(a) {
                    return a.id;
                })).length > 0) hoverAnnotation(windowId, annos.map(function(a) {
                    return a.id;
                }));
            }
        },
        {
            key: "onCanvasExit",
            value: function onCanvasExit(event) {
                var _this$props3 = this.props, hoverAnnotation = _this$props3.hoverAnnotation, windowId = _this$props3.windowId;
                // a move event may be queued up by the debouncer
                this.onCanvasMouseMove.cancel();
                hoverAnnotation(windowId, []);
            }
        },
        {
            key: "onUpdateViewport",
            value: function onUpdateViewport(event) {
                this.updateCanvas();
            }
        },
        {
            key: "initializeViewer",
            value: function initializeViewer() {
                var viewer = this.props.viewer;
                if (!viewer) return;
                if (this.osdCanvasOverlay) return;
                this.osdCanvasOverlay = new (0, _openSeadragonCanvasOverlayDefault.default)(viewer, this.ref);
                viewer.addHandler("canvas-click", this.onCanvasClick);
                viewer.addHandler("canvas-exit", this.onCanvasExit);
                viewer.addHandler("update-viewport", this.onUpdateViewport);
                viewer.addHandler("mouse-move", this.onCanvasMouseMove);
                this.updateCanvas = this.canvasUpdateCallback();
            }
        },
        {
            key: "canvasUpdateCallback",
            value: function canvasUpdateCallback() {
                var _this3 = this;
                return function() {
                    _this3.osdCanvasOverlay.clear();
                    _this3.osdCanvasOverlay.resize();
                    _this3.osdCanvasOverlay.canvasUpdate(_this3.renderAnnotations.bind(_this3));
                };
            }
        },
        {
            key: "isAnnotationAtPoint",
            value: function isAnnotationAtPoint(resource, canvas, point) {
                var canvasWorld = this.props.canvasWorld;
                var _canvasWorld$canvasTo3 = canvasWorld.canvasToWorldCoordinates(canvas.id), _canvasWorld$canvasTo4 = _slicedToArray(_canvasWorld$canvasTo3, 2), canvasX = _canvasWorld$canvasTo4[0], canvasY = _canvasWorld$canvasTo4[1];
                var relativeX = point.x - canvasX;
                var relativeY = point.y - canvasY;
                if (resource.svgSelector) {
                    var context = this.osdCanvasOverlay.context2d;
                    var _CanvasAnnotationDisp = new (0, _canvasAnnotationDisplayDefault.default)({
                        resource: resource
                    }), svgPaths = _CanvasAnnotationDisp.svgPaths;
                    return _toConsumableArray(svgPaths).some(function(path) {
                        return context.isPointInPath(new Path2D(path.attributes.d.nodeValue), relativeX, relativeY);
                    });
                }
                if (resource.fragmentSelector) {
                    var _resource$fragmentSel = _slicedToArray(resource.fragmentSelector, 4), x = _resource$fragmentSel[0], y = _resource$fragmentSel[1], w = _resource$fragmentSel[2], h = _resource$fragmentSel[3];
                    return x <= relativeX && relativeX <= x + w && y <= relativeY && relativeY <= y + h;
                }
                return false;
            }
        },
        {
            key: "annotationsAtPoint",
            value: function annotationsAtPoint(canvas, point) {
                var _this4 = this;
                var _this$props4 = this.props, annotations = _this$props4.annotations, searchAnnotations = _this$props4.searchAnnotations;
                var lists = [].concat(_toConsumableArray(annotations), _toConsumableArray(searchAnnotations));
                var annos = (0, _flattenDefault.default)(lists.map(function(l) {
                    return l.resources;
                })).filter(function(resource) {
                    if (canvas.id !== resource.targetId) return false;
                    return _this4.isAnnotationAtPoint(resource, canvas, point);
                });
                return annos;
            }
        },
        {
            key: "toggleAnnotation",
            value: function toggleAnnotation(id) {
                var _this$props5 = this.props, selectedAnnotationId = _this$props5.selectedAnnotationId, selectAnnotation = _this$props5.selectAnnotation, deselectAnnotation = _this$props5.deselectAnnotation, windowId = _this$props5.windowId;
                if (selectedAnnotationId === id) deselectAnnotation(windowId, id);
                else selectAnnotation(windowId, id);
            }
        },
        {
            key: "annotationsToContext",
            value: function annotationsToContext(annotations, palette) {
                var _this$props6 = this.props, highlightAllAnnotations = _this$props6.highlightAllAnnotations, hoveredAnnotationIds = _this$props6.hoveredAnnotationIds, selectedAnnotationId = _this$props6.selectedAnnotationId, canvasWorld = _this$props6.canvasWorld, viewer = _this$props6.viewer;
                var context = this.osdCanvasOverlay.context2d;
                var zoomRatio = viewer.viewport.getZoom(true) / viewer.viewport.getMaxZoom();
                annotations.forEach(function(annotation) {
                    annotation.resources.forEach(function(resource) {
                        if (!canvasWorld.canvasIds.includes(resource.targetId)) return;
                        var offset = canvasWorld.offsetByCanvas(resource.targetId);
                        var canvasAnnotationDisplay = new (0, _canvasAnnotationDisplayDefault.default)({
                            hovered: hoveredAnnotationIds.includes(resource.id),
                            offset: offset,
                            palette: _objectSpread(_objectSpread({}, palette), {}, {
                                "default": _objectSpread(_objectSpread({}, palette["default"]), !highlightAllAnnotations && palette.hidden)
                            }),
                            resource: resource,
                            selected: selectedAnnotationId === resource.id,
                            zoomRatio: zoomRatio
                        });
                        canvasAnnotationDisplay.toContext(context);
                    });
                });
            }
        },
        {
            key: "renderAnnotations",
            value: function renderAnnotations() {
                var _this$props7 = this.props, annotations = _this$props7.annotations, drawAnnotations = _this$props7.drawAnnotations, drawSearchAnnotations = _this$props7.drawSearchAnnotations, searchAnnotations = _this$props7.searchAnnotations, palette = _this$props7.palette;
                if (drawSearchAnnotations) this.annotationsToContext(searchAnnotations, palette.search);
                if (drawAnnotations) this.annotationsToContext(annotations, palette.annotations);
            }
        },
        {
            key: "render",
            value: function render() {
                var viewer = this.props.viewer;
                if (!viewer) return null;
                return /*#__PURE__*/ (0, _reactDomDefault.default).createPortal(/*#__PURE__*/ (0, _jsxRuntime.jsx)("div", {
                    ref: this.ref,
                    style: {
                        height: "100%",
                        left: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%"
                    },
                    children: /*#__PURE__*/ (0, _jsxRuntime.jsx)("canvas", {})
                }), viewer.canvas);
            }
        }
    ], [
        {
            key: "annotationsMatch",
            value: /**
     * annotationsMatch - compares previous annotations to current to determine
     * whether to add a new updateCanvas method to draw annotations
     * @param  {Array} currentAnnotations
     * @param  {Array} prevAnnotations
     * @return {Boolean}
     */ function annotationsMatch(currentAnnotations, prevAnnotations) {
                if (!currentAnnotations && !prevAnnotations) return true;
                if (currentAnnotations && !prevAnnotations || !currentAnnotations && prevAnnotations) return false;
                if (currentAnnotations.length === 0 && prevAnnotations.length === 0) return true;
                if (currentAnnotations.length !== prevAnnotations.length) return false;
                return currentAnnotations.every(function(annotation, index) {
                    var newIds = annotation.resources.map(function(r) {
                        return r.id;
                    });
                    var prevIds = prevAnnotations[index].resources.map(function(r) {
                        return r.id;
                    });
                    if (newIds.length === 0 && prevIds.length === 0) return true;
                    if (newIds.length !== prevIds.length) return false;
                    if (annotation.id === prevAnnotations[index].id && (0, _isEqualDefault.default)(newIds, prevIds)) return true;
                    return false;
                });
            }
        }
    ]);
}((0, _react.Component));
AnnotationsOverlay.defaultProps = {
    annotations: [],
    deselectAnnotation: function deselectAnnotation() {},
    drawAnnotations: true,
    drawSearchAnnotations: true,
    highlightAllAnnotations: false,
    hoverAnnotation: function hoverAnnotation() {},
    hoveredAnnotationIds: [],
    palette: {},
    searchAnnotations: [],
    selectAnnotation: function selectAnnotation() {},
    selectedAnnotationId: undefined,
    viewer: null
};

},{"react":"21dqq","react-dom":"j6uA9","lodash/isEqual":"9XEia","lodash/debounce":"bv6vy","lodash/flatten":"71l7m","lodash/sortBy":"5rYDX","lodash/xor":"gM7Zt","../lib/OpenSeadragonCanvasOverlay":"5q6yW","../lib/CanvasWorld":"eIa1L","../lib/CanvasAnnotationDisplay":"auoVx","react/jsx-runtime":"6AEwr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rYDX":[function(require,module,exports) {
var baseFlatten = require("7dd3b18d381f1f29"), baseOrderBy = require("2553e45e897c3cba"), baseRest = require("9df1e918b0eea173"), isIterateeCall = require("36218471fd8f4dda");
/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */ var sortBy = baseRest(function(collection, iteratees) {
    if (collection == null) return [];
    var length = iteratees.length;
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) iteratees = [];
    else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) iteratees = [
        iteratees[0]
    ];
    return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
module.exports = sortBy;

},{"7dd3b18d381f1f29":"60rt9","2553e45e897c3cba":"c8fjQ","9df1e918b0eea173":"kd260","36218471fd8f4dda":"7JSn7"}],"c8fjQ":[function(require,module,exports) {
var arrayMap = require("8b3be8ab05c5c021"), baseGet = require("56eb179604ce4d19"), baseIteratee = require("41950d167c7e12b5"), baseMap = require("b09740a39499ec43"), baseSortBy = require("35a9013ca73ef017"), baseUnary = require("b387a5b76e29e664"), compareMultiple = require("2ab709818f44804c"), identity = require("5cb379329c706719"), isArray = require("8acdbb462385356c");
/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */ function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) iteratees = arrayMap(iteratees, function(iteratee) {
        if (isArray(iteratee)) return function(value) {
            return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
        };
        return iteratee;
    });
    else iteratees = [
        identity
    ];
    var index = -1;
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
            return iteratee(value);
        });
        return {
            "criteria": criteria,
            "index": ++index,
            "value": value
        };
    });
    return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
    });
}
module.exports = baseOrderBy;

},{"8b3be8ab05c5c021":"imI5Z","56eb179604ce4d19":"kMRe3","41950d167c7e12b5":"2fsgg","b09740a39499ec43":"cLeHB","35a9013ca73ef017":"eWP15","b387a5b76e29e664":"eJXq4","2ab709818f44804c":"3JcVC","5cb379329c706719":"dgTUN","8acdbb462385356c":"dZaTH"}],"cLeHB":[function(require,module,exports) {
var baseEach = require("488df795cf6fe570"), isArrayLike = require("2924e2db4bb5430d");
/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
    });
    return result;
}
module.exports = baseMap;

},{"488df795cf6fe570":"1glfs","2924e2db4bb5430d":"gMCbp"}],"eWP15":[function(require,module,exports) {
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */ function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while(length--)array[length] = array[length].value;
    return array;
}
module.exports = baseSortBy;

},{}],"3JcVC":[function(require,module,exports) {
var compareAscending = require("dd5e23e02b1cd726");
/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */ function compareMultiple(object, other, orders) {
    var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
    while(++index < length){
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
            if (index >= ordersLength) return result;
            var order = orders[index];
            return result * (order == "desc" ? -1 : 1);
        }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
}
module.exports = compareMultiple;

},{"dd5e23e02b1cd726":"lYBWp"}],"lYBWp":[function(require,module,exports) {
var isSymbol = require("a51b63ee8daeecee");
/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */ function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) return 1;
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) return -1;
    }
    return 0;
}
module.exports = compareAscending;

},{"a51b63ee8daeecee":"i3BHC"}],"7JSn7":[function(require,module,exports) {
var eq = require("a8ec2a011d2eca69"), isArrayLike = require("616bc732534dffe0"), isIndex = require("e781332a36d1bd7"), isObject = require("c8548bf6929b8a5d");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!isObject(object)) return false;
    var type = typeof index;
    if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
    return false;
}
module.exports = isIterateeCall;

},{"a8ec2a011d2eca69":"aVz5f","616bc732534dffe0":"gMCbp","e781332a36d1bd7":"aJpx0","c8548bf6929b8a5d":"cGhqJ"}],"gM7Zt":[function(require,module,exports) {
var arrayFilter = require("6ac5a622705039a5"), baseRest = require("87ce455c857e3ffe"), baseXor = require("1cb1ea2eb275f4bc"), isArrayLikeObject = require("33c1804c238679a8");
/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */ var xor = baseRest(function(arrays) {
    return baseXor(arrayFilter(arrays, isArrayLikeObject));
});
module.exports = xor;

},{"6ac5a622705039a5":"hmIQ7","87ce455c857e3ffe":"kd260","1cb1ea2eb275f4bc":"1w3S8","33c1804c238679a8":"RyRVf"}],"1w3S8":[function(require,module,exports) {
var baseDifference = require("48f1605e1a9757a5"), baseFlatten = require("febbf95731bdaf04"), baseUniq = require("28f843bbe47d0752");
/**
 * The base implementation of methods like `_.xor`, without support for
 * iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */ function baseXor(arrays, iteratee, comparator) {
    var length = arrays.length;
    if (length < 2) return length ? baseUniq(arrays[0]) : [];
    var index = -1, result = Array(length);
    while(++index < length){
        var array = arrays[index], othIndex = -1;
        while(++othIndex < length)if (othIndex != index) result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator);
    }
    return baseUniq(baseFlatten(result, 1), iteratee, comparator);
}
module.exports = baseXor;

},{"48f1605e1a9757a5":"8PHHD","febbf95731bdaf04":"60rt9","28f843bbe47d0752":"llHH0"}],"5q6yW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>OpenSeadragonCanvasOverlay);
var _openseadragon = require("openseadragon");
var _openseadragonDefault = parcelHelpers.interopDefault(_openseadragon);
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * OpenSeadragonCanvasOverlay - adapted from https://github.com/altert/OpenSeadragonCanvasOverlay
 * used rather than an "onRedraw" function we tap into our own method. Existing
 * repository is not published as an npm package.
 * Code ported from https://github.com/altert/OpenSeadragonCanvasOverlay
 * carries a BSD 3-Clause license originally authored by @altert from
 * https://github.com/altert/OpenseadragonFabricjsOverlay
 */ var OpenSeadragonCanvasOverlay = /*#__PURE__*/ function() {
    /**
   * constructor - sets up the Canvas overlay container
   */ function OpenSeadragonCanvasOverlay(viewer, ref) {
        _classCallCheck(this, OpenSeadragonCanvasOverlay);
        this.viewer = viewer;
        this.ref = ref;
        this.containerWidth = 0;
        this.containerHeight = 0;
        this.imgAspectRatio = 1;
    }
    /** */ return _createClass(OpenSeadragonCanvasOverlay, [
        {
            key: "canvas",
            get: function get() {
                return this.canvasDiv.firstElementChild;
            }
        },
        {
            key: "canvasDiv",
            get: function get() {
                return this.ref.current;
            }
        },
        {
            key: "context2d",
            get: function get() {
                return this.canvas.getContext("2d");
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.context2d.clearRect(0, 0, this.containerWidth, this.containerHeight);
            }
        },
        {
            key: "resize",
            value: function resize() {
                if (this.containerWidth !== this.viewer.container.clientWidth) {
                    this.containerWidth = this.viewer.container.clientWidth;
                    this.canvasDiv.setAttribute("width", this.containerWidth);
                    this.canvas.setAttribute("width", this.containerWidth);
                }
                if (this.containerHeight !== this.viewer.container.clientHeight) {
                    this.containerHeight = this.viewer.container.clientHeight;
                    this.canvasDiv.setAttribute("height", this.containerHeight);
                    this.canvas.setAttribute("height", this.containerHeight);
                }
                this.viewportOrigin = new (0, _openseadragonDefault.default).Point(0, 0);
                var boundsRect = this.viewer.viewport.getBoundsNoRotateWithMargins(true);
                this.viewportOrigin.x = boundsRect.x;
                this.viewportOrigin.y = boundsRect.y * this.imgAspectRatio;
                this.viewportWidth = boundsRect.width;
                this.viewportHeight = boundsRect.height * this.imgAspectRatio;
                var image1 = this.viewer.world.getItemAt(0);
                if (!image1) return;
                this.imgWidth = image1.source.dimensions.x;
                this.imgHeight = image1.source.dimensions.y;
                this.imgAspectRatio = this.imgWidth / this.imgHeight;
            }
        },
        {
            key: "canvasUpdate",
            value: function canvasUpdate(update) {
                var viewportZoom = this.viewer.viewport.getZoom(true);
                var image1 = this.viewer.world.getItemAt(0);
                if (!image1) return;
                var zoom = image1.viewportToImageZoom(viewportZoom);
                var x = (this.viewportOrigin.x / this.imgWidth - this.viewportOrigin.x) / this.viewportWidth * this.containerWidth;
                var y = (this.viewportOrigin.y / this.imgHeight - this.viewportOrigin.y) / this.viewportHeight * this.containerHeight;
                if (this.clearBeforeRedraw) this.clear();
                this.context2d.translate(x, y);
                this.context2d.scale(zoom, zoom);
                var center = this.viewer.viewport.getCenter();
                var flip = this.viewer.viewport.getFlip();
                if (flip) {
                    this.context2d.translate(center.x * 2, 0);
                    this.context2d.scale(-1, 1);
                }
                var rotation = this.viewer.viewport.getRotation();
                if (rotation !== 0) {
                    this.context2d.translate(center.x, center.y);
                    this.context2d.rotate(rotation * Math.PI / 180);
                    this.context2d.translate(-1 * center.x, -1 * center.y);
                }
                update();
                this.context2d.setTransform(1, 0, 0, 1, 0, 0);
            }
        }
    ]);
}();

},{"openseadragon":"vMklB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"auoVx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>CanvasAnnotationDisplay);
function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
    if (r) {
        if ("string" == typeof r) return _arrayLikeToArray(r, a);
        var t = ({}).toString.call(r).slice(8, -1);
        return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
}
function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for(var e = 0, n = Array(a); e < a; e++)n[e] = r[e];
    return n;
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * CanvasAnnotationDisplay - class used to display a SVG and fragment based
 * annotations.
 */ var CanvasAnnotationDisplay = /*#__PURE__*/ function() {
    /** */ function CanvasAnnotationDisplay(_ref) {
        var resource = _ref.resource, palette = _ref.palette, zoomRatio = _ref.zoomRatio, offset = _ref.offset, selected = _ref.selected, hovered = _ref.hovered;
        _classCallCheck(this, CanvasAnnotationDisplay);
        this.resource = resource;
        this.palette = palette;
        this.zoomRatio = zoomRatio;
        this.offset = offset;
        this.selected = selected;
        this.hovered = hovered;
    }
    /** */ return _createClass(CanvasAnnotationDisplay, [
        {
            key: "toContext",
            value: function toContext(context) {
                this.context = context;
                if (this.resource.svgSelector) this.svgContext();
                else if (this.resource.fragmentSelector) this.fragmentContext();
            }
        },
        {
            key: "svgString",
            get: function get() {
                return this.resource.svgSelector.value;
            }
        },
        {
            key: "svgContext",
            value: function svgContext() {
                var _this = this;
                var currentPalette;
                if (this.hovered) currentPalette = this.palette.hovered;
                else if (this.selected) currentPalette = this.palette.selected;
                else currentPalette = this.palette["default"];
                if (currentPalette.globalAlpha === 0) return;
                _toConsumableArray(this.svgPaths).forEach(function(element) {
                    /**
         *  Note: Path2D is not supported in IE11.
         *  TODO: Support multi canvas offset
         *  One example: https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath
         */ _this.context.save();
                    _this.context.translate(_this.offset.x, _this.offset.y);
                    var p = new Path2D(element.attributes.d.nodeValue);
                    // Setup styling from SVG -> Canvas
                    _this.context.strokeStyle = _this.color;
                    if (element.attributes["stroke-dasharray"]) _this.context.setLineDash(element.attributes["stroke-dasharray"].nodeValue.split(","));
                    var svgToCanvasMap = {
                        fill: "fillStyle",
                        stroke: "strokeStyle",
                        "stroke-dashoffset": "lineDashOffset",
                        "stroke-linecap": "lineCap",
                        "stroke-linejoin": "lineJoin",
                        "stroke-miterlimit": "miterlimit",
                        "stroke-width": "lineWidth"
                    };
                    Object.keys(svgToCanvasMap).forEach(function(key) {
                        if (element.attributes[key]) _this.context[svgToCanvasMap[key]] = element.attributes[key].nodeValue;
                    });
                    // Resize the stroke based off of the zoomRatio (currentZoom / maxZoom)
                    _this.context.lineWidth /= _this.zoomRatio;
                    // Reset the color if it is selected or hovered on
                    if (_this.selected || _this.hovered) _this.context.strokeStyle = currentPalette.strokeStyle || currentPalette.fillStyle;
                    if (element.attributes["stroke-opacity"]) _this.context.globalAlpha = currentPalette.globalAlpha * element.attributes["stroke-opacity"].nodeValue;
                    else _this.context.globalAlpha = currentPalette.globalAlpha;
                    _this.context.stroke(p);
                    // Wait to set the fill, so we can adjust the globalAlpha value if we need to
                    if (element.attributes.fill && element.attributes.fill.nodeValue !== "none") {
                        if (element.attributes["fill-opacity"]) _this.context.globalAlpha = currentPalette.globalAlpha * element.attributes["fill-opacity"].nodeValue;
                        else _this.context.globalAlpha = currentPalette.globalAlpha;
                        _this.context.fill(p);
                    }
                    _this.context.restore();
                });
            }
        },
        {
            key: "fragmentContext",
            value: function fragmentContext() {
                var _this2 = this;
                var fragment = this.resource.fragmentSelector;
                fragment[0] += this.offset.x;
                fragment[1] += this.offset.y;
                var currentPalette;
                if (this.selected) currentPalette = this.palette.selected;
                else if (this.hovered) currentPalette = this.palette.hovered;
                else currentPalette = this.palette["default"];
                this.context.save();
                Object.keys(currentPalette).forEach(function(key) {
                    _this2.context[key] = currentPalette[key];
                });
                if (currentPalette.globalAlpha === 0) return;
                if (currentPalette.fillStyle) {
                    var _this$context;
                    (_this$context = this.context).fillRect.apply(_this$context, _toConsumableArray(fragment));
                } else {
                    var _this$context2;
                    this.context.lineWidth = 1 / this.zoomRatio;
                    (_this$context2 = this.context).strokeRect.apply(_this$context2, _toConsumableArray(fragment));
                }
                this.context.restore();
            }
        },
        {
            key: "svgPaths",
            get: function get() {
                var parser = new DOMParser();
                var xmlDoc = parser.parseFromString(this.svgString, "text/xml");
                return xmlDoc.getElementsByTagName("path");
            }
        }
    ]);
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9Ij5p","1xC6H"], null, "parcelRequire0bb8")

//# sourceMappingURL=OpenSeadragonViewer.570eae9d.js.map
