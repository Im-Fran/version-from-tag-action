/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 924:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 973:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(924);
const github = __nccwpck_require__(973);

try {
    if(process.env.GITHUB_REF_TYPE === 'tag') {
        const tagName = process.env.GITHUB_REF_NAME
        const removeFirstCharacter = core.getInput('remove-first-character') || 'none'
        const variableName = core.getInput('version-variable-name') || 'VERSION'
        let version;
        if(removeFirstCharacter !== 'none') {
            const indexOf = tagName.indexOf(removeFirstCharacter)
            version = tagName.slice(0, indexOf) + tagName.slice(indexOf + removeFirstCharacter.length, tagName.length)
        }else{
            version = tagName
        }
        core.exportVariable(variableName, version)
    }
}catch (e) {
    core.setFailed(e.message);
}
})();

module.exports = __webpack_exports__;
/******/ })()
;