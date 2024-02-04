"use strict";
(self["webpackChunkromartiny_dev"] = self["webpackChunkromartiny_dev"] || []).push([[310],{

/***/ 25310:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Terminal_Terminal; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/utils.js
var utils = __webpack_require__(22755);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/redux/slices/terminalSlice.js
var terminalSlice = __webpack_require__(13271);
;// CONCATENATED MODULE: ./src/data/commands.js
var commandList = {
  help: {
    command: 'help',
    description: '┏━━ Available terminal commands ━━━━━━━━━━━━━━━━━━━━━━━━━┓',
    data: {
      whois: {
        message: '┃ whois          Who you are                             ┃'
      },
      social: {
        message: '┃ links          Additional links                        ┃'
      },
      time: {
        message: '┃ code           Show source code                        ┃'
      },
      about: {
        message: '┃ about          About this project                      ┃'
      },
      hr: {
        message: '┃ contact        How to contact                          ┃'
      },
      ls: {
        message: '┃ techs          Check out my tech stack                 ┃'
      },
      email: {
        message: '┃ email          E-mail me                               ┃'
      },
      help: {
        message: '┃ crash          Crash the browser                       ┃'
      },
      art: {
        message: '┃ art            Show art                                ┃'
      },
      clear: {
        message: '┃ clear          Clear terminal                          ┃'
      },
      last: {
        message: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'
      }
    },
    links: false
  },
  clear: {
    command: 'clear'
  },
  about: {
    command: 'about',
    description: 'This portfolio project with terminal, with all animations and start page is made for 26 hours from scratch. No ready-made solutions for creating windows, terminals and so on were used in the development. Everything is done on pure javascript library - react js and tailwind css styles. To view all the features on this site, you can open the repository (command "links") on my github page. You can see the source code of the project if you enter the command "code" in this terminal.'
  },
  contact: {
    command: 'contact',
    description: 'If you are interested in me as a developer and would like to contact me, you can write to me on linkedin (you can see the link via the "links" command) or via email (the "email" command).'
  },
  email: {
    command: 'email',
    description: 'Sending an e-mail to romortiny@gmail.com'
  },
  whois: {
    command: 'whois',
    description: "Hey, I'm Max. I am a software engineer with 4+ years in web development. During my computer science degree I have already created web applications for different users. After I graduated I was able to fully immerse myself in the field of web development where I was no longer distracted by my studies. During my time I have created quite large web applications that solved a business problem and helped the project to achieve a quality solution. In my free time I study new technologies, create beautiful websites for my soul and design future startup projects. I am passionate about software development and always looking to expand my knowledge and skills to deliver high quality solutions."
  },
  time: {
    command: 'time'
  },
  code: {
    command: 'code',
    description: 'Ooops... The source code of the project is hidden.'
  },
  crash: {
    command: 'crash'
  },
  art: {
    command: 'art',
    description: '',
    data: {
      first: {
        message: '                              \\\\\\\\\\\\\\                   *'
      },
      second: {
        message: '   Cursed coding is       \\\\\\\\\\\\\\\\\\\\\\\\              *'
      },
      third: {
        message: '     still alive?          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\      *'
      },
      fourth: {
        message: '  -----------,-|           |C>   // )\\\\\\\\|'
      },
      fifth: {
        message: '           ,\',\'|          /    || ,\'/////|'
      },
      sixth: {
        message: '---------,\',\'  |         (,    ||   /////'
      },
      seventh: {
        message: '         ||    |          \\\\  ||||//\'\'\'\'|       *   *   *'
      },
      eighth: {
        message: '         ||    |           |||||||     _|'
      },
      ninth: {
        message: '         ||    |______      `````\\____/ \\'
      },
      tenth: {
        message: '         ||  ,\'    ,\' |        /          |'
      },
      eleventh: {
        message: '         ||,\'    ,\'   |       |         \\  |     *'
      },
      twelfth: {
        message: '_________|/    ,\'     |      /           | |        *'
      },
      thirteenth: {
        message: '_____________,\'      ,\',_____|      |    | |            *'
      }
    }
  },
  links: {
    command: 'links',
    description: '┏━━ Additional links ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
    data: {
      linkedin: {
        message: '┃ linkedin       linkedin.com/in/romartiny               ┃',
        link: 'https://www.linkedin.com/in/romartiny'
      },
      github: {
        message: '┃ github         github.com/romartiny                    ┃',
        link: 'https://github.com/romartiny'
      },
      shopify: {
        message: '┃ shopify        t.ly/5YiHI                              ┃',
        link: 'https://t.ly/5YiHI'
      },
      last: {
        message: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'
      }
    },
    links: true
  },
  techs: {
    command: 'techs',
    description: '┏━━ My tech stack ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓',
    data: {
      first: {
        message: ' php         npm         laravel         vue        blade'
      },
      second: {
        message: ' redux      babel       postgresql       php        react'
      },
      third: {
        message: ' rpc       restapi       shopify        heroku       sass'
      },
      fourth: {
        message: ' mysql      sass         webpack       composer      html'
      },
      fifth: {
        message: ' twig     javascript     firebase       docker      eslint'
      },
      last: {
        message: '┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛'
      }
    }
  },
  notFound: {
    description: 'Command not found'
  }
};
;// CONCATENATED MODULE: ./src/components/Typewritter.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var TypewriterText = function TypewriterText(_ref) {
  var text = _ref.text,
    containerRef = _ref.containerRef,
    textSpeed = _ref.textSpeed;
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    charIndex = _useState2[0],
    setCharIndex = _useState2[1];
  var _useState3 = (0,react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    displayText = _useState4[0],
    setDisplayText = _useState4[1];
  (0,react.useEffect)(function () {
    var timer = setInterval(function () {
      if (charIndex < text.length) {
        setDisplayText(text.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, textSpeed);
    (0,utils/* scrollToBottom */.Og)(containerRef);
    return function () {
      clearInterval(timer);
    };
  }, [charIndex, text, textSpeed, containerRef]);
  return /*#__PURE__*/react.createElement("span", {
    className: "text-gray-200 text-lft md:text-xs font-mono py-1"
  }, displayText);
};
/* harmony default export */ var Typewritter = (TypewriterText);
;// CONCATENATED MODULE: ./src/assets/sounds/sound.aac
/* harmony default export */ var sound = (__webpack_require__.p + "assets/sounds/58cd93a927be2113.aac");
;// CONCATENATED MODULE: ./src/assets/sounds/code.aac
/* harmony default export */ var code = (__webpack_require__.p + "assets/sounds/bb6fa1509ab967b6.aac");
// EXTERNAL MODULE: ./src/redux/slices/crashSlice.js
var crashSlice = __webpack_require__(14817);
;// CONCATENATED MODULE: ./src/assets/videos/video.mp4
/* harmony default export */ var video = (__webpack_require__.p + "assets/videos/f34c7b276eaf7d86.mp4");
;// CONCATENATED MODULE: ./node_modules/use-sound/dist/use-sound.esm.js


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function useOnMount(callback) {
  (0,react.useEffect)(callback, []);
}

function useSound(src, _ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$volume = _ref2.volume,
      volume = _ref2$volume === void 0 ? 1 : _ref2$volume,
      _ref2$playbackRate = _ref2.playbackRate,
      playbackRate = _ref2$playbackRate === void 0 ? 1 : _ref2$playbackRate,
      _ref2$soundEnabled = _ref2.soundEnabled,
      soundEnabled = _ref2$soundEnabled === void 0 ? true : _ref2$soundEnabled,
      _ref2$interrupt = _ref2.interrupt,
      interrupt = _ref2$interrupt === void 0 ? false : _ref2$interrupt,
      onload = _ref2.onload,
      delegated = _objectWithoutPropertiesLoose(_ref2, ["id", "volume", "playbackRate", "soundEnabled", "interrupt", "onload"]);

  var HowlConstructor = react.useRef(null);
  var isMounted = react.useRef(false);

  var _React$useState = react.useState(null),
      duration = _React$useState[0],
      setDuration = _React$useState[1];

  var _React$useState2 = react.useState(null),
      sound = _React$useState2[0],
      setSound = _React$useState2[1];

  var handleLoad = function handleLoad() {
    if (typeof onload === 'function') {
      // @ts-ignore
      onload.call(this);
    }

    if (isMounted.current) {
      // @ts-ignore
      setDuration(this.duration() * 1000);
    } // @ts-ignore


    setSound(this);
  }; // We want to lazy-load Howler, since sounds can't play on load anyway.


  useOnMount(function () {
    __webpack_require__.e(/* import() */ 766).then(__webpack_require__.t.bind(__webpack_require__, 41766, 23)).then(function (mod) {
      if (!isMounted.current) {
        var _mod$Howl;

        // Depending on the module system used, `mod` might hold
        // the export directly, or it might be under `default`.
        HowlConstructor.current = (_mod$Howl = mod.Howl) !== null && _mod$Howl !== void 0 ? _mod$Howl : mod["default"].Howl;
        isMounted.current = true;
        new HowlConstructor.current(_extends({
          src: Array.isArray(src) ? src : [src],
          volume: volume,
          rate: playbackRate,
          onload: handleLoad
        }, delegated));
      }
    });
    return function () {
      isMounted.current = false;
    };
  }); // When the `src` changes, we have to do a whole thing where we recreate
  // the Howl instance. This is because Howler doesn't expose a way to
  // tweak the sound

  react.useEffect(function () {
    if (HowlConstructor.current && sound) {
      setSound(new HowlConstructor.current(_extends({
        src: Array.isArray(src) ? src : [src],
        volume: volume,
        onload: handleLoad
      }, delegated)));
    } // The linter wants to run this effect whenever ANYTHING changes,
    // but very specifically I only want to recreate the Howl instance
    // when the `src` changes. Other changes should have no effect.
    // Passing array to the useEffect dependencies list will result in
    // ifinite loop so we need to stringify it, for more details check
    // https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [JSON.stringify(src)]); // Whenever volume/playbackRate are changed, change those properties
  // on the sound instance.

  react.useEffect(function () {
    if (sound) {
      sound.volume(volume);
      sound.rate(playbackRate);
    } // A weird bug means that including the `sound` here can trigger an
    // error on unmount, where the state loses track of the sprites??
    // No idea, but anyway I don't need to re-run this if only the `sound`
    // changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [volume, playbackRate]);
  var play = react.useCallback(function (options) {
    if (typeof options === 'undefined') {
      options = {};
    }

    if (!sound || !soundEnabled && !options.forceSoundEnabled) {
      return;
    }

    if (interrupt) {
      sound.stop();
    }

    if (options.playbackRate) {
      sound.rate(options.playbackRate);
    }

    sound.play(options.id);
  }, [sound, soundEnabled, interrupt]);
  var stop = react.useCallback(function (id) {
    if (!sound) {
      return;
    }

    sound.stop(id);
  }, [sound]);
  var pause = react.useCallback(function (id) {
    if (!sound) {
      return;
    }

    sound.pause(id);
  }, [sound]);
  var returnedValue = [play, {
    sound: sound,
    stop: stop,
    pause: pause,
    duration: duration
  }];
  return returnedValue;
}

/* harmony default export */ var use_sound_esm = (useSound);

//# sourceMappingURL=use-sound.esm.js.map

;// CONCATENATED MODULE: ./src/components/Terminal/Terminal.jsx
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Terminal_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Terminal_arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function Terminal_slicedToArray(arr, i) { return Terminal_arrayWithHoles(arr) || Terminal_iterableToArrayLimit(arr, i) || Terminal_unsupportedIterableToArray(arr, i) || Terminal_nonIterableRest(); }
function Terminal_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Terminal_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Terminal_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Terminal_arrayLikeToArray(o, minLen); }
function Terminal_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Terminal_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Terminal_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var Terminal = function Terminal() {
  var containerRef = (0,react.useRef)(null);
  var inputRef = (0,react.useRef)(null);
  var _useState = (0,react.useState)(''),
    _useState2 = Terminal_slicedToArray(_useState, 2),
    userInput = _useState2[0],
    setUserInput = _useState2[1];
  var _useState3 = (0,react.useState)([]),
    _useState4 = Terminal_slicedToArray(_useState3, 2),
    terminalCommands = _useState4[0],
    setTerminalUserCommands = _useState4[1];
  var dispatch = (0,es/* useDispatch */.I0)();
  var _useSound = use_sound_esm(sound),
    _useSound2 = Terminal_slicedToArray(_useSound, 1),
    crashSound = _useSound2[0];
  var _useSound3 = use_sound_esm(code),
    _useSound4 = Terminal_slicedToArray(_useSound3, 1),
    sourceSound = _useSound4[0];
  var _useSelector = (0,es/* useSelector */.v9)(terminalSlice/* selectTerminal */.N2),
    terminalScreen = _useSelector.terminalScreen,
    terminalData = _useSelector.terminalData;
  var _useState5 = (0,react.useState)(false),
    _useState6 = Terminal_slicedToArray(_useState5, 2),
    isVideoLoaded = _useState6[0],
    setVideoLoaded = _useState6[1];
  var videoData = (0,es/* useSelector */.v9)(function (state) {
    return state.crash.videoData;
  });
  var _useState7 = (0,react.useState)([{
      message: 'Last login: ' + (0,utils/* getCurrentDateTime */.xE)(),
      response: true
    }, {
      message: 'Welcome to my interactive portfolio web terminal',
      response: true
    }, {
      message: 'Type \'help\' to see a list of available commands',
      response: true
    }]),
    _useState8 = Terminal_slicedToArray(_useState7, 2),
    terminalInfo = _useState8[0],
    setTerminalInfo = _useState8[1];
  var _useState9 = (0,react.useState)(terminalCommands.length),
    _useState10 = Terminal_slicedToArray(_useState9, 2),
    currentIndex = _useState10[0],
    setCurrentIndex = _useState10[1];
  (0,react.useEffect)(function () {
    inputRef.current.focus();
    if (terminalData.length > 3) {
      setTerminalInfo(terminalData);
    }
    dispatch((0,terminalSlice/* setTerminalData */.d2)(terminalInfo));
    dispatch((0,terminalSlice/* setTerminalCommands */.rs)(terminalCommands));
    setCurrentIndex(terminalCommands.length - 1);
    (0,utils/* scrollToBottom */.Og)(containerRef);
  }, [terminalInfo, terminalData, dispatch]);
  (0,react.useEffect)(function () {
    var fetchVideo = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, newVideoData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!videoData) {
                _context.next = 3;
                break;
              }
              setVideoLoaded(true);
              return _context.abrupt("return");
            case 3:
              if (isVideoLoaded) {
                _context.next = 18;
                break;
              }
              _context.prev = 4;
              _context.next = 7;
              return fetch(video);
            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.arrayBuffer();
            case 10:
              newVideoData = _context.sent;
              dispatch((0,crashSlice/* setVideoData */.iN)(newVideoData));
              setVideoLoaded(true);
              _context.next = 18;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](4);
              console.error('Error fetching video:', _context.t0);
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[4, 15]]);
      }));
      return function fetchVideo() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchVideo();
  }, [videoData]);
  var onClickInputFocus = function onClickInputFocus() {
    inputRef.current.focus();
  };
  var closeTerminalCommand = function closeTerminalCommand() {
    dispatch((0,terminalSlice/* setTerminalData */.d2)([]));
    dispatch((0,terminalSlice/* setTerminalCommands */.rs)([]));
    dispatch((0,terminalSlice/* setTerminalScreen */.Lk)(false));
    dispatch((0,terminalSlice/* setTerminalState */.G6)(false));
  };
  var addTerminalCommands = function addTerminalCommands(userInput) {
    setTerminalUserCommands([].concat(_toConsumableArray(terminalCommands), [{
      message: userInput,
      response: false
    }]));
  };
  var addTerminalResponse = function addTerminalResponse(userInput, commands) {
    var commandKeys = Object.keys(commands);
    if (commandKeys.includes(userInput)) {
      var _commands$userInput;
      setTerminalInfo([].concat(_toConsumableArray(terminalInfo), [{
        message: userInput,
        response: false
      }, {
        message: commands[userInput].description,
        data: (_commands$userInput = commands[userInput]) === null || _commands$userInput === void 0 ? void 0 : _commands$userInput.data,
        response: true
      }]));
    } else {
      setTerminalInfo([].concat(_toConsumableArray(terminalInfo), [{
        message: userInput,
        response: false
      }, {
        message: "".concat(commandList.notFound.description, ": ").concat(userInput),
        response: true
      }]));
    }
    return addTerminalCommands(userInput);
  };
  var fastCrash = function fastCrash() {
    crashSound();
    dispatch((0,crashSlice/* setCrashOpen */.UH)(true));
    closeTerminalCommand();
  };
  var clearTerminal = function clearTerminal() {
    setUserInput('');
    dispatch((0,terminalSlice/* setTerminalData */.d2)([]));
    return setTerminalInfo([]);
  };
  var sendEmail = function sendEmail() {
    emptyUserInput(userInput, commandList);
    return window.location.href = 'mailto:romortiny@gmail.com?subject=Email%20from%20romartiny.dev';
  };
  var showSourceCode = function showSourceCode() {
    emptyUserInput(userInput, commandList);
    sourceSound(code);
    setTimeout(function () {
      return window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank').focus();
    }, 2000);
  };
  var emptyUserInput = function emptyUserInput(userInput, commandList) {
    addTerminalResponse(userInput, commandList);
    setUserInput('');
    (0,utils/* scrollToBottom */.Og)(containerRef);
  };
  var handleUserInput = function handleUserInput(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (userInput === 'clear') {
        return clearTerminal();
      }
      if (userInput === 'code') {
        return showSourceCode();
      }
      if (userInput === 'email') {
        return sendEmail();
      }
      if (userInput === 'close') {
        return closeTerminalCommand();
      }
      if (userInput === 'crash') {
        return fastCrash();
      }
      if (userInput.trim() !== '') {
        return emptyUserInput(userInput, commandList);
      }
    }
  };
  var handleInput = function handleInput(inputValue) {
    inputValue = inputValue.replace(/[^A-Za-z0-9-]/g, '').slice(0, 25);
    setUserInput(inputValue);
  };
  var handleKeyDown = function handleKeyDown(event) {
    var filteredMessages = terminalCommands.filter(function (message) {
      return !message.response;
    });
    if (event.key === 'ArrowUp') {
      var _filteredMessages$cur;
      setCurrentIndex(function (prevIndex) {
        return Math.max(0, prevIndex - 1);
      });
      setUserInput((_filteredMessages$cur = filteredMessages[currentIndex]) === null || _filteredMessages$cur === void 0 ? void 0 : _filteredMessages$cur.message);
    }
    if (event.key === 'ArrowDown') {
      var _filteredMessages$cur2;
      setCurrentIndex(function (prevIndex) {
        return Math.min(filteredMessages.length - 1, prevIndex + 1);
      });
      setUserInput((_filteredMessages$cur2 = filteredMessages[currentIndex]) === null || _filteredMessages$cur2 === void 0 ? void 0 : _filteredMessages$cur2.message);
    }
  };
  var highlightInput = function highlightInput() {
    var commandKeys = Object.keys(commandList);
    return commandKeys.includes(userInput);
  };
  return /*#__PURE__*/react.createElement("div", {
    className: terminalScreen ? 'h-full overflow-y-auto pb-7' : 'w-full h-full overflow-y-auto sm:w-full sm:h-full sm:pb-0 md:pb-0 md:w-131 md:h-102 safari-terminal-data safari-terminal',
    ref: containerRef,
    onClick: function onClick() {
      return onClickInputFocus();
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "terminal-output"
  }, terminalData.map(function (line, index) {
    return /*#__PURE__*/react.createElement("div", {
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      className: "flex items-center min-h-4"
    }, !line.response && /*#__PURE__*/react.createElement("span", {
      className: "font-mono text-green-400 text-lft md:text-xs select-none pr-1.5"
    }, "~$"), /*#__PURE__*/react.createElement("p", {
      className: "text-gray-200 text-xs font-mono py-1"
    }, /*#__PURE__*/react.createElement(Typewritter, {
      text: line.message,
      containerRef: containerRef,
      textSpeed: 10
    }))), line.data && /*#__PURE__*/react.createElement("div", {
      key: line.data,
      className: "flex flex-col items-start min-h-4 min-w-full"
    }, Object.keys(line.data).map(function (key) {
      return /*#__PURE__*/react.createElement("div", {
        key: key,
        className: "flex items-center min-h-4"
      }, /*#__PURE__*/react.createElement("a", {
        href: line.data[key].link,
        target: "_blank",
        className: "text-gray-200 text-lft md:text-xs font-mono py-1 whitespace-pre",
        rel: "noreferrer"
      }, /*#__PURE__*/react.createElement(Typewritter, {
        text: line.data[key].message,
        containerRef: containerRef,
        textSpeed: 10
      })));
    })));
  })), /*#__PURE__*/react.createElement("div", {
    className: "w-full flex h-13 items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "font-mono text-green-400 text-lft md:text-xs select-none pt-[1px]"
  }, "~$"), /*#__PURE__*/react.createElement("input", {
    ref: inputRef,
    className: "appearance-none text-lft md:text-xs font-mono bg-transparent border-none w-full py-1 leading-tight focus:outline-none pl-1.5 h-6 cursor-default ".concat(highlightInput() ? 'text-green-500' : 'text-gray-200'),
    type: "text",
    value: userInput,
    onInput: function onInput(e) {
      return handleInput(e.target.value);
    },
    onKeyDown: handleUserInput,
    spellCheck: false,
    style: {
      whiteSpace: 'pre-wrap'
    },
    onKeyDownCapture: handleKeyDown,
    id: btoa('input-field')
  })));
};
/* harmony default export */ var Terminal_Terminal = (Terminal);

/***/ })

}]);