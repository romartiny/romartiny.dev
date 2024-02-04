"use strict";
(self["webpackChunkromartiny_dev"] = self["webpackChunkromartiny_dev"] || []).push([[133],{

/***/ 8133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CV_CV; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/shared/utils.js
var utils = __webpack_require__(22755);
;// CONCATENATED MODULE: ./src/components/CV/DownloadButton.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DownloadButton = function DownloadButton() {
  var _useState = (0,react.useState)('Open PDF'),
    _useState2 = _slicedToArray(_useState, 2),
    buttonText = _useState2[0],
    setButtonText = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var handleClick = function handleClick() {
    setButtonText('Loading...');
    setLoading(true);
    setTimeout(function () {
      setButtonText('Open PDF');
      setLoading(false);
    }, 1500);
  };
  (0,react.useEffect)(function () {
    return function () {
      setButtonText('Open PDF');
      setLoading(false);
    };
  }, []);
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    onClick: handleClick,
    disabled: loading,
    className: "w-32 inline-flex items-center px-5 py-2.5 justify-center text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 font-sans text-gray-200 transition ".concat(loading ? 'opacity-80 cursor-not-allowed' : '')
  }, loading ? /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("svg", {
    "aria-hidden": "true",
    role: "status",
    className: "inline w-4 h-4 me-3 text-white animate-spin",
    viewBox: "0 0 100 101",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react.createElement("path", {
    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
    fill: "#E5E7EB"
  }), /*#__PURE__*/react.createElement("path", {
    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
    fill: "currentColor"
  })), /*#__PURE__*/react.createElement("span", {
    className: "font-mono"
  }, "Loading")) : /*#__PURE__*/react.createElement("span", {
    className: "font-mono"
  }, buttonText));
};
/* harmony default export */ var CV_DownloadButton = (DownloadButton);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/redux/slices/cvSlice.js
var cvSlice = __webpack_require__(20302);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(79655);
;// CONCATENATED MODULE: ./src/components/CV/CV.jsx






var CV = function CV() {
  var _useSelector = (0,es/* useSelector */.v9)(cvSlice/* selectCv */.ig),
    cvScreen = _useSelector.cvScreen;
  return /*#__PURE__*/react.createElement("div", {
    className: cvScreen ? 'h-full overflow-y-auto h-full p-6' : 'w-full h-full p-4 pb-8 overflow-y-auto sm:w-full sm:h-full sm:pb-6 md:p-6 md:w-full md:h-196 w-full h-full pb-4 overflow-y-auto sm:h-190'
  }, /*#__PURE__*/react.createElement("div", {
    className: "bg-gray-800 rounded-xl"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center content-center flex-col pb-5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-md font-medium font-mono text-gray-200 select-none"
  }, "Maksim Lauryniuk"), /*#__PURE__*/react.createElement("span", {
    className: "text-md font-mono text-gray-200 select-none"
  }, "Software Engineer")), /*#__PURE__*/react.createElement("div", {
    className: "flex justify-center pb-4"
  }, /*#__PURE__*/react.createElement(dist/* Link */.rU, {
    to: 'cv',
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react.createElement(CV_DownloadButton, null))), /*#__PURE__*/react.createElement("hr", {
    className: "w-36 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-2 mb-3.5 dark:bg-gray-700"
  }), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "relative flex h-3 w-3 mb-0.5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"
  }), /*#__PURE__*/react.createElement("span", {
    className: "relative inline-flex rounded-full h-3 w-3 bg-sky-500"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "text-xls font-bold font-mono text-gray-200 select-none ml-4"
  }, "Profile")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Software Engineer with 2+ years of commercial experience and 4+ years of non commercial experience. I have knowledge in both backend and frontend application development. Communicative, motivated, responsible, self-organized, quick learner, stress-resistant. I am passionate about software development and always looking to expand my knowledge and skills to deliver high quality solutions."))), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col pt-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "relative flex h-3 w-3 mb-0.5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"
  }), /*#__PURE__*/react.createElement("span", {
    className: "relative inline-flex rounded-full h-3 w-3 bg-sky-500"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "text-xls font-bold font-mono text-gray-200 select-none ml-4"
  }, "Skills")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col md:flex-row md:justify-between pt-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex flex-row md:flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Html"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Sass"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Liquid"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Babel"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Javascript")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-row md:flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Php"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Laravel"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Mysql"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Blade"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Twig")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-row md:flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "React"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Redux"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Eslint"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Webpack"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Github")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-row order-last md:flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Shopify"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Docker"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Nginx"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Rest"), /*#__PURE__*/react.createElement("span", {
    className: "text-xle font-mono text-gray-200 md:text-2xl select-none pr-1.5"
  }, "Git")))), /*#__PURE__*/react.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "relative flex h-3 w-3 mb-0.5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"
  }), /*#__PURE__*/react.createElement("span", {
    className: "relative inline-flex rounded-full h-3 w-3 bg-sky-500"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "text-xls font-bold font-mono text-gray-200 select-none ml-4"
  }, "History")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Mobecls"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "Software Engineer"), /*#__PURE__*/react.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-green-400 md:text-2xl select-none"
  }, "Aug 2023 - Present"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, (0,utils/* presentMonths */.lu)(), " mos"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none pt-1.5"
  }, "Developing quality e-commerce stores on the Shopify platform. Creating custom solutions to achieve beautiful and productive stores. Using liquid, css/scss, javascript, react js, remix to create blocks and sections in stores. Learning new technologies and using them on new projects and to solve problems of different complexity."))), /*#__PURE__*/react.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Innowise Group"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "Software Engineer"), /*#__PURE__*/react.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-green-400 md:text-2xl select-none"
  }, "Apr 2022 - Aug 2023"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "1 yr 5 mos"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none pt-1.5"
  }, "Creating applications of any complexity. Experience includes creation and support of fully functional web applications. Developing server-side applications using PHP and Laravel to provide efficient data processing and database interaction, as well as developing using the React library to speed up projects.", /*#__PURE__*/react.createElement("br", null), "My responsibilities included:", /*#__PURE__*/react.createElement("br", null), "\u2022 Building applications and using PHP (Laravel / Zend), Javascript / Typescript, React JS / Vue JS, Blade, Shopify Tools, Shopify API, Nginx, Elasticsearch, Redis, PostgreSQL, Twig and others", /*#__PURE__*/react.createElement("br", null), "\u2022 REST API development according to all development rules", /*#__PURE__*/react.createElement("br", null), "\u2022 Supporting and adding new features to already created software", /*#__PURE__*/react.createElement("br", null), "\u2022 Implementation of third-party services into already created projects", /*#__PURE__*/react.createElement("br", null), "\u2022 Creating and designing databases", /*#__PURE__*/react.createElement("br", null), "\u2022 Writing detailed documentation for projects of different directions", /*#__PURE__*/react.createElement("br", null), "\u2022 Publishing applications and plugins on marketplaces", /*#__PURE__*/react.createElement("br", null), "\u2022 Creating application design for different platforms", /*#__PURE__*/react.createElement("br", null), "\u2022 SEO optimization", /*#__PURE__*/react.createElement("br", null), "\u2022 Optimizing the work of projects", /*#__PURE__*/react.createElement("br", null), "\u2022 Writing unit tests"))), /*#__PURE__*/react.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "E-Commerce Project"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "PHP Software Engineer"), /*#__PURE__*/react.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-green-400 md:text-2xl select-none"
  }, "Aug 2022 - Jan 2023"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "6 mos"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none pt-1.5"
  }, "Updating and maintaining the project on Zend Framework. Fixing bugs and adding new features to the project in real time. Changing UI and adding new functionality to the project. Fixing bugs when running local development environment (PHP / Zend / Laminas / React / Elasticsearch / Vagrant / Docker / Ruby / VMware). Upgrading legacy code from PHP 7.1 to PHP 8.1.", /*#__PURE__*/react.createElement("br", null), "\u2022 Implementation of backend features to improve performance", /*#__PURE__*/react.createElement("br", null), "\u2022 Updating and maintaining the project on Zend Framework", /*#__PURE__*/react.createElement("br", null), "\u2022 Fixing bugs related to launching the local development environment", /*#__PURE__*/react.createElement("br", null), "\u2022 Updating the frontend part and data transfer methods", /*#__PURE__*/react.createElement("br", null), "\u2022 Upgrading PHP version from 7.1 to 8.1 and fixing upgrade-related bugs", /*#__PURE__*/react.createElement("br", null), "\u2022 Updating dependencies in project libraries", /*#__PURE__*/react.createElement("br", null), "\u2022 Testing and analyzing data through the service", /*#__PURE__*/react.createElement("br", null), "\u2022 Developing modules and writing detailed documentation"))), /*#__PURE__*/react.createElement("div", {
    className: "pt-6"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Freelance"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "Software Engineer"), /*#__PURE__*/react.createElement("div", {
    className: "pt-1"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-green-400 md:text-2xl select-none"
  }, "Nov 2020 - Apr 2022"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-2xl select-none pl-4"
  }, "1 yr 6 mos"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none pt-1.5"
  }, "Developing quality websites, web applications and scripts for various platforms. Experience includes developing user interfaces, creating designs, testing applications, integrating with databases and implementing functionality in different programming languages. HTML, CSS, SASS/LESS, JavaScript, jQuery, React, PHP, Laravel, Blade, Twig, MySQL, PostgreSQL, Nginx, Docker have been used in development.", /*#__PURE__*/react.createElement("br", null), "Main development responsibilities:", /*#__PURE__*/react.createElement("br", null), "\u2022 Maintaining existing software applications by fixing bugs", /*#__PURE__*/react.createElement("br", null), "\u2022 Styling pages from scratch and using third-party frameworks", /*#__PURE__*/react.createElement("br", null), "\u2022 Code testing in local and production development environments", /*#__PURE__*/react.createElement("br", null), "\u2022 Testing the performance of modules in the system", /*#__PURE__*/react.createElement("br", null), "\u2022 Adding additional features to existing projects", /*#__PURE__*/react.createElement("br", null), "\u2022 Maintaining and developing REST API features", /*#__PURE__*/react.createElement("br", null), "\u2022 Fixing queries to improve performance", /*#__PURE__*/react.createElement("br", null), "\u2022 Optimization of web applications", /*#__PURE__*/react.createElement("br", null), "\u2022 Database optimization of various complexity", /*#__PURE__*/react.createElement("br", null), "\u2022 SEO optimization", /*#__PURE__*/react.createElement("br", null), "\u2022 Writing tests", /*#__PURE__*/react.createElement("br", null), "\u2022 Data analysis")))), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col pt-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "relative flex h-3 w-3 mb-0.5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"
  }), /*#__PURE__*/react.createElement("span", {
    className: "relative inline-flex rounded-full h-3 w-3 bg-sky-500"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "text-xls font-bold font-mono text-gray-200 select-none ml-4"
  }, "Education")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col md:flex-row md:justify-between"
  }, /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Grodno State College of Technic, Technology and Design"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Secondary Specialty, Computer Software Engineering"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Sep 2019 - Jul 2022")))), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col pt-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "relative flex h-3 w-3 mb-0.5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"
  }), /*#__PURE__*/react.createElement("span", {
    className: "relative inline-flex rounded-full h-3 w-3 bg-sky-500"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "text-xls font-bold font-mono text-gray-200 select-none ml-4"
  }, "Certifications")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "FullStackOpen"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Fullstackopen Certification"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Issued Oct 2023 \xB7 Expires Oct 2026")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Shopify"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Foundations Certification | Shopify Partner"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Issued Aug 2023 \xB7 Expires Sep 2027")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Shopify"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Application Development"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Issued Mar 2023 \xB7 Expires Mar 2027")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Shopify"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Theme Development"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Issued Mar 2023 \xB7 Expires Jan 2027")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Shopify"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Product Fundamentals"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Issued Mar 2023 \xB7 Expires Mar 2027")), /*#__PURE__*/react.createElement("div", {
    className: "pt-2"
  }, /*#__PURE__*/react.createElement("p", {
    className: "text-lg font-bold font-mono text-gray-200 select-none"
  }, "Shopify"), /*#__PURE__*/react.createElement("span", {
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "Business Fundamentals"), /*#__PURE__*/react.createElement("p", {
    className: "text-3xl font-mono text-green-400 md:text-xle select-none"
  }, "Issued Mar 2023 \xB7 Expires Mar 2027")))), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col pt-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("span", {
    className: "relative flex h-3 w-3 mb-0.5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-40"
  }), /*#__PURE__*/react.createElement("span", {
    className: "relative inline-flex rounded-full h-3 w-3 bg-sky-500"
  })), /*#__PURE__*/react.createElement("h2", {
    className: "text-xls font-bold font-mono text-gray-200 select-none ml-4"
  }, "Details")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col pt-2"
  }, /*#__PURE__*/react.createElement("a", {
    href: "mailto:romortiny@gmail.com?subject=Email%20from%20romartiny.dev",
    rel: "noreferrer",
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none"
  }, "romortiny@gmail.com"), /*#__PURE__*/react.createElement("a", {
    href: "https://linkedin.com/in/romartiny/",
    target: "_blank",
    rel: "noreferrer",
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none mt-1.5"
  }, "Linkedin"), /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/romartiny",
    target: "_blank",
    rel: "noreferrer",
    className: "text-3xl font-mono text-gray-200 md:text-xle select-none mt-1.5"
  }, "Github")))));
};
/* harmony default export */ var CV_CV = (CV);

/***/ })

}]);