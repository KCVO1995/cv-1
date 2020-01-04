// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var demo = document.getElementById('demo');
var n = -1;
var s2 = '';
var s = "\u4F60\u7528\u773C\u89D2\u7684\u5A07\u7F9E\n\n\u94A9\u8D77\u6211\u591A\u5C11\u6E29\u67D4\n\n\u63AC\u8D77\u4F60\u660E\u5A9A\u7684\u7B11\n\n\u6765\u6D17\u6211\u5343\u822C\u5FE7\u6101\n\n\u5374\u7275\u6765\u957F\u957F\u601D\u5FF5\n\n\u8426\u7ED5\u5728\u4F60\u6211\u5FC3\u5934\n\n\u76F8\u601D\u554A\n\n\u4F60\u4E3A\u4EC0\u4E48\u5982\u6B64\u7E41\u8302\n\n\u4F60\u7684\u7E41\u8302\n\n\u6765\u81EA\u6211\u7684\u6D88\u7626\n\n\u5973\u90CE\u554A\n\n\u4F60\u4E3A\u4EC0\u4E48\u5982\u6B64\u7F8E\u4E3D\n\n\u4F60\u7684\u7F8E\u4E3D\n\n\u6765\u81EA\u6211\u7684\u6194\u60B4\n\n\u6211\u5DF2\u4E60\u60EF\n\n\u7528\u522B\u4EBA\u7684\u7F6A\u6076\n\n\u6765\u60E9\u7F5A\u81EA\u5DF1\n\n\u6211\u7684\u7B14\n\n\u5E38\u5E38\u5438\u6EE1\u60B2\u6124\n\n\u7EB8\u4E0A\u6709\u8840\n\n\u6CEA\u5728\u5B57\u91CC\n\n\u90A3\u4E48\u4E00\u6B21\u5076\u7136\u548C\u5FC5\u7136\n\n\u6539\u5199\u4E86\u6211\n\n\u7528\u4F60\u7684\u6E29\u60C5\u5582\u6211\u7684\u7B14\n\n\u8BA9\u6211\u7684\u7B14\u4E0B\n\n\u6709\u4E86\u9633\u5149\u96E8\u9732\n\n\u6709\u4E86\u7B11\u9765\u9C9C\u82B1\n\n\u6211\u5728\u9ED1\u591C\u4E2D\n\n\u4E5F\u627E\u5230\u4E86\u8BD7\u610F\n\n\u8FD9\u6216\u8BB8\u662F\u53E6\u4E00\u79CD\u60B2\u54C0\n\n\u4F46\u662F\u6211\u613F\u610F\n\n\u6709\u4E9B\u98CE\u666F\u53EA\u80FD\u8FDC\u8FDC\u5730\u770B\n\n\u8D70\u8FD1\u4E86\u5C31\u4E22\u5931\u4E86\u68A6\n\n\u6709\u4E9B\u6CB3\u6D41\u4E0D\u8981\u6025\u4E8E\u6D89\u8FC7\u53BB\n\n\u6D89\u8FC7\u53BB\u5C31\u6CA1\u6709\u4E86\u4F20\u5947\n\n\u6211\u4EEC\u4E4B\u95F4\u7684\u6CB3\u6D41\n\n\u5531\u7684\u90FD\u662F\u6211\u7684\u8BD7\n\n\u65C1\u4EBA\u554A\n\n\u4E0D\u8981\u5BF9\u6211\u8BF4\n\n\u7537\u4EBA\u819D\u4E0B\u6709\u9EC4\u91D1\n\n\u6211\u5929\u751F\u50B2\u9AA8\n\n\u4ECE\u4E0D\u8C04\u5A9A\u6743\u8D35\n\n\u4E0D\u4E3A\u4E94\u6597\u7C73\u6298\u8170\n\n\u6211\u62DC\u5012\u5728\u60A8\u7684\u811A\u4E0B\n\n\u662F\u56E0\u4E3A\u7F8E\u795E\u7684\u77F3\u69B4\u88D9\n\n\u6709\u6765\u81EA\u4ED9\u754C\u7684\u82AC\u82B3\n\n\u80FD\u8361\u9664\u6211\n\n\u5728\u4EBA\u95F4\u6CBE\u67D3\u7684\u6D4A\u6C14\n\n\u4E0D\u8981\u95EE\u6211\n\n\u60C5\u4E3A\u4F55\u7269\n\n\u4F60\u95EE\u6211\n\n\u6211\u95EE\u8C01\u5462\n\n\u6211\u53EA\u77E5\u9053\n\n\u7231\u4F60\n\n\u662F\u6211\u6B64\u751F\n\n\u96BE\u4EE5\u9003\u8131\u7684\u5BBF\u547D\n\n\u6211\u5728\u5851\u9020\u4F60\u7684\u540C\u65F6\n\n\u88AB\u4F60\u5851\u9020\u7740\n\n\u60F3\u4F60\n\n\u662F\u4E00\u79CD\u6FC0\u60C5\n\n\u66F4\u662F\u4E00\u79CD\u4E60\u60EF";

var step = function step() {
  setTimeout(function () {
    n = n + 1;
    console.log(s2);

    if (s[n] === '\n') {
      s2 += '<br>';
    } else {
      s2 += s[n];
    }

    demo.innerHTML = s2;

    if (n + 1 < s.length) {
      step();
    }
  }, 150);
};

step(); //demo.innerHTML = s.substring(0, n)
},{}],"C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "4615" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Administrator/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map