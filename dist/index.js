(()=>{"use strict";var t={782:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(r(476)),s=i(r(305)),a=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._firstNode=null,r._lastNode=null,r._count=0,e.forEach((function(t){return r.pushEnd(t)})),r}return n(e,t),e.prototype.pushBeg=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){var r=new s.default(e);t._firstNode&&t._lastNode?r.setNextNode(t._firstNode):t._lastNode=r,t._firstNode=r,t._count+=1}))},e.prototype.popBeg=function(){if(this._firstNode){var t=this._firstNode;return this._lastNode===t?(this._firstNode=null,this._lastNode=null):this._firstNode=t.getNextNode(),this._count-=1,t.getData()}},e.prototype.pushEnd=function(){for(var t=this,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];e.forEach((function(e){var r=new s.default(e);t._lastNode&&t._firstNode?t._lastNode.setNextNode(r):t._firstNode=r,t._lastNode=r,t._count+=1}))},e.prototype.popEnd=function(){if(this._firstNode&&this._lastNode){if(this._count-=1,this._firstNode===this._lastNode){var t=this._firstNode;return this._firstNode=null,this._lastNode=null,t.getData()}for(var e=this._firstNode;;){var r=e.getNextNode();if(!r||r===this._lastNode)break;e=r}var o=this._lastNode;return e.setNextNode(null),this._lastNode=e,o.getData()}},e.prototype.getSize=function(){return this._count},e.prototype.isEmpty=function(){return!this._firstNode&&!this._lastNode},e.prototype.toArray=function(){for(var t=[],e=this._firstNode;e;)t.push(e.getData()),e=e.getNextNode();return t},e}(u.default);e.default=a},476:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},305:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){void 0===e&&(e=null),this._nextNode=e,this._data=t}return t.prototype.getData=function(){return this._data},t.prototype.setNextNode=function(t){this._nextNode=t},t.prototype.getNextNode=function(){return this._nextNode},t}();e.default=r},947:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.LinkedList=void 0;var n=r(782);Object.defineProperty(e,"LinkedList",{enumerable:!0,get:function(){return o(n).default}})},546:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(r(782)),s=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._linkedList=new u.default(e),r}return n(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._linkedList).pushEnd.apply(t,e)},e.prototype.pop=function(){return this._linkedList.popBeg()},e.prototype.getSize=function(){return this._linkedList.getSize()},e.prototype.isEmpty=function(){return this._linkedList.isEmpty()},e.prototype.toArray=function(){return this._linkedList.toArray()},e}(i(r(787)).default);e.default=s},787:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},322:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Queue=void 0;var n=r(546);Object.defineProperty(e,"Queue",{enumerable:!0,get:function(){return o(n).default}})},202:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=i(r(782)),s=function(t){function e(e){void 0===e&&(e=[]);var r=t.call(this)||this;return r._linkedList=new u.default,e.forEach((function(t){return r._linkedList.pushBeg(t)})),r}return n(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._linkedList).pushBeg.apply(t,e)},e.prototype.pop=function(){return this._linkedList.popBeg()},e.prototype.getSize=function(){return this._linkedList.getSize()},e.prototype.isEmpty=function(){return this._linkedList.isEmpty()},e.prototype.toArray=function(){return this._linkedList.toArray().reverse()},e}(i(r(570)).default);e.default=s},991:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__spreadArray||function(t,e,r){if(r||2===arguments.length)for(var o,n=0,i=e.length;n<i;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=function(t){function e(e){var r,o=t.call(this)||this;return o._items=[],Array.isArray(e)&&(r=o._items).push.apply(r,e),o}return n(e,t),e.prototype.push=function(){for(var t,e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];(t=this._items).push.apply(t,e)},e.prototype.pop=function(){return this._items.pop()},e.prototype.getSize=function(){return this._items.length},e.prototype.isEmpty=function(){return 0===this._items.length},e.prototype.toArray=function(){return i([],this._items,!0)},e}(u(r(570)).default);e.default=s},570:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(){}},621:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.StackArrayBased=e.Stack=void 0;var n=r(202);Object.defineProperty(e,"Stack",{enumerable:!0,get:function(){return o(n).default}});var i=r(991);Object.defineProperty(e,"StackArrayBased",{enumerable:!0,get:function(){return o(i).default}})},30:function(t,e,r){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.levelOrderTreeTraversal=void 0;var n=o(r(546));e.levelOrderTreeTraversal=function(t,e,r,o){for(var i=r(o,t),u=new n.default(e(t));!u.isEmpty();){var s=u.pop();s&&(i=r(i,s),u.push.apply(u,e(s)))}return i}},136:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.levelOrderTreeTraversal=void 0;var o=r(30);Object.defineProperty(e,"levelOrderTreeTraversal",{enumerable:!0,get:function(){return o.levelOrderTreeTraversal}})},607:function(t,e,r){var o=this&&this.__createBinding||(Object.create?function(t,e,r,o){void 0===o&&(o=r),Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[r]}})}:function(t,e,r,o){void 0===o&&(o=r),t[o]=e[r]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&o(e,t,r);return n(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.Stack=e.Queue=e.LinkedList=e.Tree=void 0,e.Tree=i(r(136)),e.LinkedList=i(r(947)),e.Queue=i(r(322)),e.Stack=i(r(621))}},e={},r=function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}(607);module.exports=r})();