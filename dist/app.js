/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import TaskCollection from './TaskCollection'
	
	// new TaskCollection([
	//     'go to the store',
	//     'finish screen cast',
	//     'eat cake'
	// ]).dump()
	
	// let title = 'Red Rising'
	
	// if (title.includes('Red') ) { //checks entire string
	//     console.log(`${title} includes Red`)
	// }
	
	// if (title.startsWith('Red') ) { //checks beginning of string
	//     console.log(`${title} starts with Red`)
	// }
	
	// if (title.endsWith('ing') ) { //checks the end of string
	//     console.log(`${title} ends with ing`)
	// }
	
	// console.log(title.repeat(100))
	
	var User = function User(name) {
	    var isAdmin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    _classCallCheck(this, User);
	
	    this.name = name;
	    this.isAdmin = isAdmin;
	};
	
	var users = [new User('Frank', false), new User('Jeffrey', true), new User('Jack')];
	
	console.log(users.find(function (user) {
	    return user.isAdmin;
	}).name);

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map