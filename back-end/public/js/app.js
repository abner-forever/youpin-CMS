/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(5);
exports.encode = exports.stringify = __webpack_require__(6);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(4);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(30);
var util = __webpack_require__(33);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(2);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),a=n(7),u=function(){function e(t){r(this,e),this.matcher=t.matcher,this._matchedCount=0}return o(e,[{key:"_fireHandlers",value:function(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=this._getCache(r),i={body:t||o,query:r.query,params:r.params};(0,a.def)(i,"route",r.path),(0,a.def)(i,"url",r.url),!t&&o&&(i._id=r._id),r.handler(i),this._cacheBody(t,r)}}},{key:"_getCache",value:function(e){return(0,i.getCache)(e._id)}},{key:"_cacheBody",value:function(e,t){e&&(0,i.setCache)(t._id,e)}},{key:"getMatchedCount",value:function(){return this._matchedCount}},{key:"go",value:function(e,t){}},{key:"redirect",value:function(e,t){}},{key:"back",value:function(){}},{key:"stop",value:function(){}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=r(a),s=n(5),c=r(s),l=n(8),f=r(l),h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hash";if(o(this,e),this._mount=document.getElementById(t),!this._mount)throw new Error("Can not get mount point document.getElementById(#"+t+")...");this._subRouteView='<div id="__sub-route-view"></div>',this._subMount=null,this._isPassing=!1,this._cache={},this._middlewares=[],this._matcher=new u.default,this._history="hash"===n?new f.default({matcher:this._matcher}):new c.default({matcher:this._matcher})}return i(e,[{key:"render",value:function(e){this._isPassing?this._subMount.innerHTML=e:this._mount.innerHTML=e}},{key:"next",value:function(e){this._mount.innerHTML=e,this._isPassing=this._history.getMatchedCount()>1,this._subMount=document.querySelector("#__sub-route-view")}},{key:"subRoute",value:function(){return this._subRouteView}},{key:"use",value:function(e){this._middlewares.push(e)}},{key:"route",value:function(e,t){var n=this;this._matcher.add(e,function(r){if("*"!==e&&!r._id)for(var o=0;o<n._middlewares.length;o++)n._middlewares[o](r);t(r,n,n.next.bind(n))})}},{key:"go",value:function(e,t){this._isPassing=!1,this._history.go(e,t)}},{key:"redirect",value:function(e,t){this._isPassing=!1,this._history.redirect(e,t)}},{key:"back",value:function(){this._isPassing=!1,this._history.back()}},{key:"stop",value:function(){this._history.stop()}}]),e}();t.default=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(4),s=function(){function e(){r(this,e),this._routes=[],this._id=0}return o(e,[{key:"match",value:function(e){var t=[],n="",r=e.indexOf("?"),o=!0;r>-1&&(n=e.substr(r),e=e.slice(0,r));for(var i=0;i<this._routes.length;i++){var a=this._routes[i],s=a.reg.exec(e);if(s){if("*"!==a.path&&(o=!1),!o&&"*"===a.path)continue;t.push({_id:a._id,path:a.path,url:e+n,params:this._getParams(a.params,s),query:(0,u.parseQuery)(n),handler:a.handler})}}return t}},{key:"add",value:function(e,t){var n=this._toReg({path:e,handler:t});n._id=++this._id,this._routes.push(n)}},{key:"_toReg",value:function(e){return e.params=[],e.reg="*"===e.path?/[\w\W]*/i:(0,a.default)(e.path,e.params,{end:!1}),e}},{key:"_getParams",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n={},r=0;r<e.length;r++)n[e[r].name]=t[r+1];return n}}]),e}();t.default=s},function(e,t){function n(e,t){for(var n,r=[],o=0,u=0,s="",c=t&&t.delimiter||p,l=t&&t.delimiters||d,f=!1;null!==(n=y.exec(e));){var h=n[0],v=n[1],_=n.index;if(s+=e.slice(u,_),u=_+h.length,v)s+=v[1],f=!0;else{var m="",b=e[u],g=n[2],w=n[3],k=n[4],x=n[5];if(!f&&s.length){var E=s.length-1;l.indexOf(s[E])>-1&&(m=s[E],s=s.slice(0,E))}s&&(r.push(s),s="",f=!1);var O=""!==m&&void 0!==b&&b!==m,j="+"===x||"*"===x,P="?"===x||"*"===x,C=m||c,M=w||k;r.push({name:g||o++,prefix:m,delimiter:C,optional:P,repeat:j,partial:O,pattern:M?a(M):"[^"+i(C)+"]+?"})}}return(s||u<e.length)&&r.push(s+e.substr(u)),r}function r(e,t){return o(n(e,t))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var s,c=n?n[u.name]:void 0;if(Array.isArray(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(s=i(c[l]),!t[a].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===l?u.prefix:u.delimiter)+s}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(o+=u.prefix)}else{if(s=i(String(c)),!t[a].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+s+'"');o+=u.prefix+s}}else o+=u}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e){return e&&e.sensitive?"":"i"}function s(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function c(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",u(n))}function l(e,t,r){return f(n(e,r),t,r)}function f(e,t,n){n=n||{};for(var r=n.strict,o=!1!==n.end,a=i(n.delimiter||p),s=n.delimiters||d,c=[].concat(n.endsWith||[]).map(i).concat("$").join("|"),l="",f=!1,h=0;h<e.length;h++){var y=e[h];if("string"==typeof y)l+=i(y),f=h===e.length-1&&s.indexOf(y[y.length-1])>-1;else{var v=i(y.prefix),_=y.repeat?"(?:"+y.pattern+")(?:"+v+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?l+=v+"("+_+")?":l+="(?:"+v+"("+_+"))?":l+=v+"("+_+")"}}return o?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),f||(l+="(?="+a+"|"+c+")")),new RegExp("^"+l,u(n))}function h(e,t,n){return e instanceof RegExp?s(e,t):Array.isArray(e)?c(e,t,n):l(e,t,n)}e.exports=h,e.exports.parse=n,e.exports.compile=r,e.exports.tokensToFunction=o,e.exports.tokensToRegExp=f;var p="/",d="./",y=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g")},function(e,t,n){"use strict";function r(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.split("="),r=o(n,2),i=r[0],a=r[1],u=[decodeURIComponent(i),a?decodeURIComponent(a):null],s=u[0],c=u[1];t[s]=c}),t):null}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseQuery=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._init(),window.addEventListener("load",n._listen),window.addEventListener("popstate",n._listen),n}return i(t,e),a(t,[{key:"_init",value:function(){var e=this;this._listen=function(t){var n=""+location.pathname+location.search,r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,t.state)}}},{key:"_routeTo",value:function(e,t){var n=this.matcher.match(e);this._matchedCount=n.length,this._fireHandlers(n,t)}},{key:"go",value:function(e,t){history.pushState(t,"",e),this._routeTo(e,t)}},{key:"redirect",value:function(e,t){history.replaceState(t,"",e),this._routeTo(e,t)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("popstate",this._listen)}}]),t}(s.default);t.default=c},function(e,t,n){"use strict";function r(e,t){t&&i.setItem(""+a+e,JSON.stringify(t))}function o(e){try{var t=i.getItem(""+a+e);return t?JSON.parse(t):null}catch(e){throw new Error("parse body err")}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCache=r,t.getCache=o;var i=sessionStorage,a="smer"},function(e,t,n){"use strict";function r(e,t,n){Object.defineProperty(e,t,{writable:!1,enumerable:!0,value:n})}Object.defineProperty(t,"__esModule",{value:!0}),t.def=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._cache={},n._init(),window.addEventListener("load",n._listen),window.addEventListener("hashchange",n._listen),n}return i(t,e),a(t,[{key:"_getHash",value:function(){return location.hash.slice(1)}},{key:"_init",value:function(){var e=this;this._listen=function(t){var n=e._getHash(),r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,e._cache[n])}}},{key:"go",value:function(e,t){this._cache[e]=t,location.hash=""+e}},{key:"redirect",value:function(e,t){var n=location.href,r=n.indexOf("#");e=r>0?n.slice(0,r)+"#"+e:n.slice(0,0)+"#"+e,this._cache[e]=t,location.replace(e)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("hashchange",this._listen)}}]),t}(s.default);t.default=c}])});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">    <div class=\"error-page\">        <h2 class=\"headline text-yellow\"> 404</h2>        <div class=\"error-content\">            <h3><i class=\"fa fa-warning text-yellow\"></i> 页面不见了</h3>            <p>                We could not find the page you were looking for.                Meanwhile, you may <a href=\"\">return to dashboard</a> or try using the search form.            </p>            <form class=\"search-form\">                <div class=\"input-group\">                    <input type=\"text\" name=\"search\" class=\"form-control\" placeholder=\"Search\">                    <div class=\"input-group-btn\">                        <button type=\"submit\" name=\"submit\" class=\"btn btn-warning btn-flat\"><i class=\"fa fa-search\"></i>                        </button>                    </div>                </div>                <!-- /.input-group -->            </form>        </div>        <!-- /.error-content -->    </div>    <!-- /.error-page --></section>"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">    <h1>        {{title}}        <small>{{description}}</small>    </h1>    <ol class=\"breadcrumb\">        <li><a href=\"#/home\"><i class=\"fa fa-home\"></i> 首页</a></li>        <% for(let i=0; i<list.length; i++) {%>         <li class=\"{{ if (list.length-1 == i) }} active {{else }}\' \'{{/if}}\">            <a href=\"<%= (list[i].path) ? ( list[i].path) : \'javascript:;\' %>\"><%= list[i].text %></a>        </li>        <% } %>    </ol></section>"

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(26);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box shoplist-box\">  <div class=\"box-header\">    <a class=\"btn btn-success add_shop\"> <i class=\"fa fa-plus\"></i>&nbsp;&nbsp;添加</a>    <div class=\"input-group input-group-sm col-sm-2 pull-right\">      <input type=\"text\" class=\"form-control search-keyword\" placeholder=\"搜索商品\">      <span class=\"input-group-btn\">        <button type=\"button\" class=\"btn btn-info btn-flat search-btn\"> <i class=\"fa fa-search\"></i> </button>      </span>    </div>  </div>  <!-- /.box-header -->  <div class=\"box-body\">    {{if data.pageInfo.total == 0}}    <!-- 商品列表 -->    <p class=\"col-sm-7\">暂无数据,快去 <a href=\"javascript:;\" class=\"add_shop\">添加</a> 吧</p>    {{else }}    <div id=\"example2_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">    </div>    <div class=\"row\">      <div class=\"col-sm-12\">        <table id=\"example2\" class=\"table table-bordered table-hover dataTable\" role=\"grid\" aria-describedby=\"example2_info\">          <thead>            <tr role=\"row\">              <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\">商品图片</th>              <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\">商品名称</th>              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">商品描述</th>              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">商品价格</th>              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example2\" rowspan=\"1\" colspan=\"1\">上市时间</th>              <th>操作</th>            </tr>          </thead>          <tbody>            {{each data.items}}            <tr role=\"row\" class=\"odd\" data-id=\"{{$value._id}}\">              <td class=\"sorting_1\">                <img width=\"48\" src=\"http://localhost:3000{{$value.shopImg}}\" alt=\"\" srcset=\"\">              </td>              <td>{{$value.shopName}}</td>              <td>{{$value.shopDesc}}</td>              <td>¥{{$value.price}}</td>              <td>{{$value.formatTime}}</td>              <td>                <button class=\"btn btn-info btn-sm update_shop\">修改</button>                <button class=\"btn btn-danger btn-sm remove_shop\">删除</button>              </td>            </tr>            {{/each}}          </tbody>        </table>      </div>    </div>    <!-- 分页列表 -->    <div class=\"row\">      <div class=\"col-sm-5\">        <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">共{{data.pageInfo.total}}件商品</div>      </div>      <div class=\"col-sm-7\">        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example2_paginate\">          <ul class=\"pagination\">            <li class=\"paginate_button previous\" id=\"example2_previous\">              <a href=\"#/shop_list?pageNo=<%= (data.pageInfo.pageNo>1) ? data.pageInfo.pageNo-1 : data.pageInfo.pageNo %>&search=<%= data.pageInfo.search %>\">上一页</a>            </li>            <% for(let i=0; i < data.pageInfo.totalPage; i++ ) {%>            <li class=\"paginate_button {{ if data.pageInfo.pageNo== i+1 }} active {{/if}} \">              <a href=\"#/shop_list?pageNo=<%= i+1 %> \"><%= i+1 %></a>              </li>            <% } %>            <li class=\"paginate_button next\" id=\"example2_next\">              <a href=\"#/shop_list?pageNo=<%= (data.pageInfo.pageNo < data.pageInfo.totalPage) ? ~~data.pageInfo.pageNo+1 : data.pageInfo.pageNo %>&search=<%= data.pageInfo.search %>  \">下一页</a>            </li>          </ul>        </div>      </div>    </div>    {{/if}}  </div></div><!-- /.box-body --></div>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">	<!-- form start -->	<form class=\"form-horizontal\" id=\"save_shop\" enctype=\"multipart/form-data\">		<div class=\"box-body\">			<div class=\"form-group\">				<label for=\"shopImg\" class=\"col-sm-2 control-label\">商品图片</label>				<div class=\"col-sm-10\">					<input type=\"file\" name=\"shopImg\" id=\"shopImg\">				</div>			</div>			<div class=\"form-group\">				<label for=\"shopName\" class=\"col-sm-2 control-label\">商品名称</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" name=\"shopName\" id=\"shopName\" placeholder=\"请输入商品名称\" required>				</div>			</div>			<div class=\"form-group\">				<label for=\"shopKind\" class=\"col-sm-2 control-label\">商品类型</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" name=\"shopKind\" id=\"shopKind\" placeholder=\"请输入商品类型\" required>				</div>			</div>			<div class=\"form-group\">				<label for=\"shopDesc\" class=\"col-sm-2 control-label\">商品描述</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" name=\"shopDesc\" id=\"shopDesc\" placeholder=\"请输入商品描述\" required>				</div>			</div>			<div class=\"form-group\">				<label for=\"price\" class=\"col-sm-2 control-label\">价格</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" name=\"price\" id=\"price\" placeholder=\"请输入商品价格\" required>				</div>			</div>		</div>		<!-- /.box-body -->		<div class=\"box-footer\">			<button type=\"button\" class=\"btn pull-left \" id=\"backof\">返回</button>			<button type=\"submit\" class=\"btn btn-info pull-right\" style=\"margin-left:20px\">保存</button>			<button type=\"reset\" class=\"btn btn-default pull-right\">清空</button>		</div>		<!-- /.box-footer -->	</form></div>"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(27);

var assertThisInitialized = __webpack_require__(28);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(29);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">	<!-- <div class=\"box-header with-border\">		<h3 class=\"box-title\">修改商品信息</h3>	</div> -->	<!-- /.box-header -->	<!-- form start -->	<form class=\"form-horizontal\" id=\"update_shop\" enctype=\"multipart/form-data\">		<div class=\"box-body\">			<div class=\"form-group\">				<label for=\"shopImg\" class=\"col-sm-2 control-label\">商品原图</label>				<div class=\"col-sm-10\">					<img width=\"80\" src=\"http://localhost:3000{{data.shopImg}}\" alt=\"\">				</div>			</div>			<div class=\"form-group\">				<label for=\"shopImg\" class=\"col-sm-2 control-label\">商品新图</label>				<div class=\"col-sm-10\">					<input type=\"file\" name=\"shopImg\" id=\"shopImg\">				</div>			</div>			<div class=\"form-group\">				<label for=\"shopName\" class=\"col-sm-2 control-label\">商品名称</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" name=\"shopName\" value=\"{{data.shopName}}\" id=\"shopName\" placeholder=\"请输入商品名称\"					 required>				</div>			</div>			<div class=\"form-group\">				<label for=\"shopKind\" class=\"col-sm-2 control-label\">商品类型</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" value=\"{{data.shopKind}}\" name=\"shopKind\" id=\"shopKind\" placeholder=\"请输入商品类型\"					 required>				</div>			</div>			<div class=\"form-group\">				<label for=\"shopDesc\" class=\"col-sm-2 control-label\">商品描述</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" value=\"{{data.shopDesc}}\" name=\"shopDesc\" id=\"shopDesc\" placeholder=\"请输入商品描述\"					 required>				</div>			</div>			<div class=\"form-group\">				<label for=\"price\" class=\"col-sm-2 control-label\">价格</label>				<div class=\"col-sm-10\">					<input type=\"text\" class=\"form-control\" value=\"{{data.price}}\" name=\"price\" id=\"price\" placeholder=\"请输入商品价格\"					 required>				</div>			</div>					</div>		<input type=\"hidden\" name = \"id\" value=\"{{data._id}}\"> 		<!-- /.box-body -->		<div class=\"box-footer\">			<button type=\"button\" class=\"btn pull-left \" id=\"backof\">返回</button>			<button type=\"submit\" class=\"btn btn-info pull-right\" style=\"margin-left:20px\">修改</button>			<button type=\"reset\" class=\"btn btn-default pull-right\">重置</button>		</div>		<!-- /.box-footer -->	</form></div>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"map\">    <div class=\"box\">        <div class=\"box-header with-border\">            <h3 class=\"box-title\">地图展示</h3>        </div>        <div class=\"box-body\" id=\"map-container\" style=\"height: 600px;\">            <div class=\"spot-search\">                <input type=\"text\" id=\"searchplace\" class=\"search-place\">                <div id=\"search-result\">                    <ul>                    </ul>                </div>            </div>        </div>        <div class=\"box-footer with-border\" id=\"map-panel\">        </div>    </div></div>"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "用户信息管理界面 <!-- 在这写代码 -->"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=\"callout callout-info\">  <h4>欢迎访问小米有品商品数据信息管理系统</h4>  <p>本管理系统主要,对商城的商品数据进行管理</p>  <p>1 对商品数据的增删查改</p></div><div class=\"row\">  <div class=\"col-lg-3 col-xs-6\">    <!-- small box -->    <div class=\"small-box bg-aqua\">      <div class=\"inner\">        <h3>{{data.pageInfo.total}}</h3>        <p>商品库存</p>      </div>      <div class=\"icon\">        <i class=\"ion ion-bag\"></i>      </div>      <a href=\"/#/shop_list\" class=\"small-box-footer\">更多<i class=\"fa fa-arrow-circle-right\"></i></a>    </div>  </div>  <!-- ./col -->  <div class=\"col-lg-3 col-xs-6\">    <!-- small box -->    <div class=\"small-box bg-green\">      <div class=\"inner\">        <h3>暂无<sup style=\"font-size: 20px\"></sup></h3>        <p>销量</p>      </div>      <div class=\"icon\">        <i class=\"ion ion-stats-bars\"></i>      </div>      <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>    </div>  </div>  <!-- ./col -->  <div class=\"col-lg-3 col-xs-6\">    <!-- small box -->    <div class=\"small-box bg-yellow\">      <div class=\"inner\">        <h3>0</h3>        <p>在线人数</p>      </div>      <div class=\"icon\">        <i class=\"ion ion-person-add\"></i>      </div>      <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>    </div>  </div>  <!-- ./col -->  <div class=\"col-lg-3 col-xs-6\">    <!-- small box -->    <div class=\"small-box bg-red\">      <div class=\"inner\">        <h3>0</h3>        <p>新品</p>      </div>      <div class=\"icon\">        <i class=\"ion ion-pie-graph\"></i>      </div>      <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>    </div>  </div>  <!-- ./col --></div>"

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = true && exports &&
		!exports.nodeType && exports;
	var freeModule = true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)(module), __webpack_require__(32)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<!-- Main Header --><header class=\"main-header\">    <!-- Logo -->    <a href=\"/\" class=\"logo\">        <!-- mini logo for sidebar mini 50x50 pixels -->        <span class=\"logo-mini\"><img width=\"30\" src=\"static/images/mi_login.png\" ></span>        <!-- logo for regular state and mobile devices -->        <span class=\"logo-lg\"><b>有品</b>商品信息管理系统</span>    </a>    <!-- Header Navbar -->    <nav class=\"navbar navbar-static-top\" role=\"navigation\">        <!-- Sidebar toggle button-->        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">            <span class=\"sr-only\">Toggle navigation</span>        </a>        <!-- Navbar Right Menu -->        <div class=\"navbar-custom-menu\">            <ul class=\"nav navbar-nav\">                <!-- Messages: style can be found in dropdown.less-->                <li class=\"dropdown messages-menu\">                    <!-- Menu toggle button -->                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                        <i class=\"fa fa-envelope-o\"></i>                        <span class=\"label label-success\">4</span>                    </a>                    <ul class=\"dropdown-menu\">                        <li class=\"header\">你有4条消息</li>                        <li>                            <!-- inner menu: contains the messages -->                            <ul class=\"menu\">                                <li>                                    <!-- start message -->                                    <a href=\"#\">                                        <div class=\"pull-left\">                                            <!-- User Image -->                                            <img src=\"static/libs/adminLTE/images/user2-160x160.jpg\" class=\"img-circle\"                                                alt=\"User Image\">                                        </div>                                        <!-- Message title and timestamp -->                                        <h4>                                           支持团队                                            <small><i class=\"fa fa-clock-o\"></i> 5 分钟</small>                                        </h4>                                        <!-- The message -->                                        <p>数据上传成功</p>                                    </a>                                </li>                                <!-- end message -->                            </ul>                            <!-- /.menu -->                        </li>                        <li class=\"footer\"><a href=\"#\">查看所有消息</a></li>                    </ul>                </li>                <!-- /.messages-menu -->                <!-- Notifications Menu -->                <li class=\"dropdown notifications-menu\">                    <!-- Menu toggle button -->                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                        <i class=\"fa fa-bell-o\"></i>                        <span class=\"label label-warning\">10</span>                    </a>                    <ul class=\"dropdown-menu\">                        <li class=\"header email\">邮箱</li>                        <li>                            <!-- Inner Menu: contains the notifications -->                            <ul class=\"menu\">                                <li>                                    <!-- start notification -->                                    <a href=\"#\">                                        <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today                                    </a>                                </li>                                <!-- end notification -->                            </ul>                        </li>                        <li class=\"footer\"><a href=\"#\">查看全部</a></li>                    </ul>                </li>                <!-- Tasks Menu -->                <li class=\"dropdown tasks-menu\">                    <!-- Menu Toggle Button -->                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                        <i class=\"fa fa-flag-o\"></i>                        <span class=\"label label-danger\">9</span>                    </a>                    <ul class=\"dropdown-menu\">                        <li class=\"header\">You have 9 tasks</li>                        <li>                            <!-- Inner menu: contains the tasks -->                            <ul class=\"menu\">                                <li>                                    <!-- Task item -->                                    <a href=\"#\">                                        <!-- Task title and progress text -->                                        <h3>                                            Design some buttons                                            <small class=\"pull-right\">20%</small>                                        </h3>                                        <!-- The progress bar -->                                        <div class=\"progress xs\">                                            <!-- Change the css width attribute to simulate progress -->                                            <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"                                                aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">                                                <span class=\"sr-only\">20% Complete</span>                                            </div>                                        </div>                                    </a>                                </li>                                <!-- end task item -->                            </ul>                        </li>                        <li class=\"footer\">                            <a href=\"#\">View all tasks</a>                        </li>                    </ul>                </li>                <!-- User Account Menu -->                <li class=\"dropdown user user-menu\">                    <!-- Menu Toggle Button -->                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">                        <!-- The user image in the navbar-->                        <img src=\"static/libs/adminLTE/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">                        <!-- hidden-xs hides the username on small devices so only the image appears. -->                        <span class=\"hidden-xs nickname\">管理员</span>                    </a>                    <ul class=\"dropdown-menu\">                        <!-- The user image in the menu -->                        <li class=\"user-header\">                            <img src=\"static/libs/adminLTE/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">                            <p>                               <small class=\"nickname\"></small>                                 超级管理员                            </p>                        </li>                        <!-- Menu Footer-->                        <li class=\"user-footer\">                            <div class=\"pull-left\">                                <a href=\"javascript:;\" class=\"btn btn-default btn-flat\">个人信息</a>                            </div>                            <div class=\"pull-right\">                                <a href=\"javascript:;\" class=\"btn btn-default btn-flat\" id=\"logout\">退出登录</a>                            </div>                        </li>                    </ul>                </li>                <li>                    <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>                  </li>                <!-- Control Sidebar Toggle Button -->                <!-- <li>              <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>            </li> -->            </ul>        </div>    </nav></header><!-- Left side column. contains the logo and sidebar --><aside class=\"main-sidebar\">    <!-- sidebar: style can be found in sidebar.less -->    <section class=\"sidebar\">        <!-- Sidebar user panel (optional) -->        <div class=\"user-panel\">            <div class=\"pull-left image\">                <img src=\"static/libs/adminLTE/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">            </div>            <div class=\"pull-left info nickname\">                <p>管理员1</p>                <!-- Status -->                <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> 在线</a>            </div>        </div>        <!-- search form (Optional) -->        <form class=\"sidebar-form\">            <div class=\"input-group\">                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">                <span class=\"input-group-btn\">                    <button type=\"button\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>                    </button>                </span>            </div>        </form>        <!-- /.search form -->        <!-- Sidebar Menu -->        <ul class=\"sidebar-menu\" data-widget=\"tree\">            <li class=\"header\">列表</li>            <!-- 选项列表 -->            <!-- Optionally, you can add icons to the links -->            <li class=\"nav-link active\" to=\"/home\"><a href=\"javascript:;\"><i class=\"fa fa-home\"></i> <span>首页</span></a></li>            <li class=\"treeview nav-link\" to=\"/shop_list\">                <a href=\"JavaScript:;\"><i class=\"fa fa-list-alt\"></i> <span>商品信息</span>                    <span class=\"pull-right-container\">                        <i class=\"fa fa-angle-left pull-right\"></i>                    </span>                </a>                <ul class=\"treeview-menu\">                    <li class=\"nav-link\" to=\"/shop_list\"><a href=\"javascript:;\">商品列表</a></li>                    <li class=\"nav-link\" to=\"/shop_add\"><a href=\"#/shop_add\">添加商品</a></li>                </ul>            </li>            <li class=\"nav-link\" to=\"/map\"><a href=\"javascript:;\"><i class=\"fa fa-map\"></i> <span>地图</span></a></li>            <li class=\"nav-link\" to=\"/usermanage\"><a href=\"javascript:;\"><i class=\"fa fa-user\"></i> <span>用户信息管理</span></a></li>        </ul>        <!-- /.sidebar-menu -->    </section>    <!-- /.sidebar --></aside><!-- 内容区域 --><!-- Content Wrapper. Contains page content --><div class=\"content-wrapper\">    <!-- Content Header (Page header) -->    <section class=\"content-header-box\">        <!-- <h1 class=\"header-title\">            首页        </h1> -->        <!-- <ol class=\"breadcrumb\">            <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>            <li class=\"active\">Here</li>        </ol> -->    </section>    <!-- Main content -->    <section class=\"content container-fluid\" id=\"router-view\">        <!--------------------------          | Your Page Content Here |          -------------------------->    </section>    <!-- /.content --></div><!-- /.content-wrapper --><!-- Main Footer --><footer class=\"main-footer\">    <!-- To the right -->    <div class=\"pull-right hidden-xs\">        Anything you want    </div>    <!-- Default to the left -->    <strong>Copyright &copy; 2018 <a href=\"#\">花里项目组</a>.</strong> </footer><!-- Add the sidebar\'s background. This div must be placed    immediately after the control sidebar --><div class=\"control-sidebar-bg\"></div>"

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/css/app.scss
var app = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/sme-router/index.js
var sme_router = __webpack_require__(8);
var sme_router_default = /*#__PURE__*/__webpack_require__.n(sme_router);

// EXTERNAL MODULE: ./src/js/views/404.html
var _404 = __webpack_require__(9);
var _404_default = /*#__PURE__*/__webpack_require__.n(_404);

// EXTERNAL MODULE: ./src/js/views/pageheader.html
var pageheader = __webpack_require__(10);
var pageheader_default = /*#__PURE__*/__webpack_require__.n(pageheader);

// CONCATENATED MODULE: ./src/js/controller/page_header.js


var page_header_render = function render() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: '',
    description: '',
    list: []
  };

  var _html = template.render(pageheader_default.a, data);

  $('.content-header-box').html(_html);
};

/* harmony default export */ var page_header = ({
  render: page_header_render
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(11);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(1);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./src/js/views/shop_list.html
var shop_list = __webpack_require__(12);
var shop_list_default = /*#__PURE__*/__webpack_require__.n(shop_list);

// CONCATENATED MODULE: ./src/js/models/shoplist.js
//获取数据
var listall = function listall() {
  return $.ajax({
    url: '/api/v1/shoplist/listall',
    dataType: 'json',
    success: function success(res) {
      return res;
    },
    error: function error(res) {
      console.error(res);
      return false;
    }
  });
};

var shoplist = function shoplist(page) {
  return $.ajax({
    url: '/api/v1/shoplist/list',
    data: page,
    dataType: 'json',
    success: function success(res) {
      return res;
    },
    error: function error(res) {
      console.error(res);
      return false;
    }
  });
};

var add = function add(data) {
  return new Promise(function (resolve) {
    $('#save_shop').ajaxSubmit({
      url: '/api/v1/shoplist/add',
      type: 'post',
      data: data,
      success: function success(results) {
        resolve(results);
      }
    });
  });
};

var update = function update() {
  return new Promise(function (resolve) {
    $('#update_shop').ajaxSubmit({
      url: '/api/v1/shoplist/update',
      type: 'post',
      success: function success(results) {
        resolve(results);
      }
    });
  });
};

var remove = function remove(data) {
  return $.ajax({
    url: '/api/v1/shoplist/remove',
    type: 'delete',
    data: data,
    success: function success(res) {
      return res;
    }
  });
};

var listone = function listone(data) {
  return $.ajax({
    url: '/api/v1/shoplist/listone',
    type: 'GET',
    data: data,
    success: function success(res) {
      return res;
    }
  });
};

/* harmony default export */ var models_shoplist = ({
  shoplist: shoplist,
  add: add,
  remove: remove,
  listone: listone,
  update: update,
  listall: listall
});
// EXTERNAL MODULE: ./src/js/views/shop_add.html
var shop_add = __webpack_require__(13);
var shop_add_default = /*#__PURE__*/__webpack_require__.n(shop_add);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(14);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(16);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(17);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/events/events.js
var events = __webpack_require__(18);
var events_default = /*#__PURE__*/__webpack_require__.n(events);

// CONCATENATED MODULE: ./src/js/utils/bus.js




//利用events=模块创建bus 用来创建自定义事件  能全局使用 (观察这模式)


var bus_Bus =
/*#__PURE__*/
function (_EventEmitter) {
  inherits_default()(Bus, _EventEmitter);

  function Bus() {
    classCallCheck_default()(this, Bus);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Bus).apply(this, arguments));
  }

  return Bus;
}(events_default.a);

/* harmony default export */ var bus = (new bus_Bus());
// CONCATENATED MODULE: ./src/js/utils/toast.js
var toast = function toast(text, bgColor, options) {
  $.toast({
    text: text,
    bgColor: bgColor,
    showHideTransition: 'fade',
    allowToastClose: false,
    hideAfter: 3000,
    stack: 5,
    textAlign: 'left',
    position: 'top-center'
  });
};

/* harmony default export */ var utils_toast = (toast);
// CONCATENATED MODULE: ./src/js/utils/handelToastByData.js


var handelToastByData_handelToastByData = function handelToastByData(data) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _none = function _none() {};

  var _isReact$success$fail = {
    isReact: typeof options.isReact !== 'undefined' ? options.isReact : true,
    success: options.success || _none,
    fail: options.fail || _none
  },
      isReact = _isReact$success$fail.isReact,
      success = _isReact$success$fail.success,
      fail = _isReact$success$fail.fail;

  if (data.code == 200) {
    // alert('成功')
    if (isReact) utils_toast('操作成功', 'green');
    if (success) success(data.data);
  } else {
    alert('失败');
    if (isReact) utils_toast('操作失败', 'red');
    if (fail) fail(data.data);
  }
};

/* harmony default export */ var utils_handelToastByData = (handelToastByData_handelToastByData);
// CONCATENATED MODULE: ./src/js/utils/index.js


 //防抖

var debounce = function debounce(method, context) {
  clearTimeout(method.tId);
  method.tId = setTimeout(function () {
    method.call(context);
  }, 300);
};


/* harmony default export */ var utils = ({
  debounce: debounce,
  bus: bus,
  handelToastByData: utils_handelToastByData,
  toast: utils_toast
});
// CONCATENATED MODULE: ./src/js/controller/shop_add.js




 //添加商品

var shopadd =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.render(shop_add_default.a);
            shop_add_bindShopaddEvent();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function shopadd(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var shop_add_bindShopaddEvent = function bindShopaddEvent() {
  //
  $('#backof').on('click', function () {
    bus.emit('go', '/shop_list');
  }); //提交保存

  $('#save_shop').submit(handelAddEvent);
};

var _isLoading = false;

var handelAddEvent =
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(e) {
    var _data;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();

            if (!_isLoading) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", false);

          case 3:
            _isLoading = true;
            _context2.next = 6;
            return models_shoplist.add();

          case 6:
            _data = _context2.sent;
            _isLoading = false; // handelToastByData(_data)
            //成功后跳转

            utils_handelToastByData(_data, {
              isReact: true,
              success: function success() {
                setTimeout(function () {
                  bus.emit('go', '/shop_list');
                }, 3000);
              }
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handelAddEvent(_x4) {
    return _ref2.apply(this, arguments);
  };
}();


// EXTERNAL MODULE: ./src/js/views/shop_update.html
var shop_update = __webpack_require__(19);
var shop_update_default = /*#__PURE__*/__webpack_require__.n(shop_update);

// CONCATENATED MODULE: ./src/js/controller/shop_update.js




 //修改信息

var shop_update_update =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res) {
    var id, html;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.body.id; //要更新数据的id

            _context.t0 = template;
            _context.t1 = shop_update_default.a;
            _context.next = 5;
            return models_shoplist.listone({
              id: id
            });

          case 5:
            _context.t2 = _context.sent.data;
            _context.t3 = {
              data: _context.t2
            };
            html = _context.t0.render.call(_context.t0, _context.t1, _context.t3);
            res.render(html);
            shop_update_bindUpdateEvent();

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function update(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //绑定点击修改


var shop_update_bindUpdateEvent = function bindUpdateEvent() {
  $('#backof').on('click', function () {
    bus.emit('go', '/shop_list');
  }); //提交更新

  $('#update_shop').submit(handelUpdateEvent);
};

var handelUpdateEvent =
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(e) {
    var _data;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            console.log(1);
            _context2.next = 4;
            return models_shoplist.update();

          case 4:
            _data = _context2.sent;
            //成功后跳转
            utils_handelToastByData(_data, {
              isReact: true,
              success: function success() {
                setTimeout(function () {
                  bus.emit('go', '/shop_list');
                }, 3000);
              }
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handelUpdateEvent(_x3) {
    return _ref2.apply(this, arguments);
  };
}();


// EXTERNAL MODULE: ./node_modules/querystring-es3/index.js
var querystring_es3 = __webpack_require__(2);

// CONCATENATED MODULE: ./src/js/controller/shop_controller.js








 //商品列表获取

var shop_controller_shoplist =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    var _page, html;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req.query = req.query || {};
            _page = {
              pageNo: req.query.pageNo || 1,
              pageSize: req.query.pageSize || 10,
              search: req.query.search
            };
            _context.t0 = template;
            _context.t1 = shop_list_default.a;
            _context.next = 6;
            return models_shoplist.shoplist(_page);

          case 6:
            _context.t2 = _context.sent.data;
            _context.t3 = {
              data: _context.t2
            };
            html = _context.t0.render.call(_context.t0, _context.t1, _context.t3);
            res.render(html);
            shop_controller_bindShoplistEvent(_page);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function shoplist(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var shop_controller_bindShoplistEvent = function bindShoplistEvent(_page) {
  //点击跳转到添加数据页面
  $('.shoplist-box').on('click', ".add_shop", function () {
    bus.emit('go', '/shop_add');
  }); //点击删除

  $('.shoplist-box ').on('click', ".remove_shop", function () {
    handleRemoveShop.call(this, _page);
  }); //点击跳转到修改信息页面

  $('.shoplist-box ').on('click', ".update_shop", function () {
    var id = $(this).parents('tr').data('id');
    bus.emit('go', '/shop_update', {
      id: id
    });
  }); //点击搜索

  $('.shoplist-box ').on('click', ".search-btn", function () {
    var _search = $('.search-keyword').val();

    var _params = {
      search: _search,
      pageNo: 1
    };
    bus.emit('go', "/shop_list?".concat($.param(_params)));
  });
}; //处理删除商品


var handleRemoveShop =
/*#__PURE__*/
function () {
  var _ref2 = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(_page) {
    var _id, _data;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //拿到当前商品ID
            _id = $(this).parents('tr').data('id');
            _context2.next = 3;
            return models_shoplist.remove(objectSpread_default()({
              id: _id
            }, _page));

          case 3:
            _data = _context2.sent;
            //删除数据时 如果是最后一页的最后一条数据 则要向前跳转一页
            //删除数据后 要保持在当前页面
            //若是最后一条 pageNo-1 
            utils_handelToastByData(_data, {
              isReact: false,
              success: function success(data) {
                var _pageNo = _page.pageNo;
                _pageNo -= data.isBack ? 1 : 0;
                console.log(data);
                bus.emit('go', '/shop_list?pageNo=' + _pageNo + "&deleteid=" + data.deleteId);
              }
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function handleRemoveShop(_x4) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var shop_controller = ({
  shoplist: shop_controller_shoplist,
  shopadd: shopadd,
  update: shop_update_update
});
// EXTERNAL MODULE: ./src/js/views/map.html
var map = __webpack_require__(20);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./src/js/controller/map_controller.js


var map_controller_init = function init() {
  $('#router-view').html(map_default.a); //加载地图的js

  if (!window.AMap) {
    var $script = $('<script  src="https://webapi.amap.com/maps?v=1.4.10&key=5880eb38541e06376134095dd685bcd3" >');
    $("body").append($script);
  } else {
    window.onApiloaded();
  }

  searchPlace();
};

var lng = null;
var lat = null;

window.onApiloaded = function () {
  var map = new AMap.Map('map-container', {
    resizeEnable: true,
    center: [116.3102500000, 39.9928700000],
    zoom: 11
  });
  var marker = new AMap.Marker({
    position: new AMap.LngLat(116.3102500000, 39.9928700000),
    // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
    title: '北京'
  }); // 将创建的点标记添加到已有的地图实例：

  map.add(marker); //定位

  AMap.plugin(['AMap.Geolocation', 'AMap.Driving', 'AMap.Autocomplete', "AMap.PlaceSearch"], function () {
    var geolocation = new AMap.Geolocation({
      enableHighAccuracy: true,
      //是否使用高精度定位，默认:true
      timeout: 10000,
      //超过10秒后停止定位，默认：5s
      buttonPosition: 'RB',
      //定位按钮的停靠位置
      buttonOffset: new AMap.Pixel(10, 20),
      //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点

    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition(function (status, result) {
      if (status == 'complete') {
        onComplete(result);
      } else {
        onError(result);
      }
    });
    var autoOptions = {
      //city 限定城市，默认全国
      city: '全国',
      input: 'map-spot'
    };
    var autoComplete = new AMap.Autocomplete(autoOptions); //   var placeSearch = new AMap.PlaceSearch({
    //     // city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
    //     city: '010',
    //     map: map,
    //     panel: "search-result"
    //   })
    //   placeSearch.search('北京大学', function (status, result) {
    //      // 查询成功时，result即对应匹配的POI信息
    //   })
  }); //定位成功后创建点标记

  function onComplete(data) {
    lng = data.position.lng;
    lat = data.position.lat;
    var marker = new AMap.Marker({
      position: new AMap.LngLat(data.position.lng, data.position.lat),
      // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '北京'
    });
    map.add(marker); //构造路线导航类

    var driving = new AMap.Driving({
      map: map,
      panel: "map-panel",
      hideMarkers: true
    }); // 根据起终点经纬度规划驾车导航路线

    driving.search(new AMap.LngLat(lng, lat), new AMap.LngLat(116.3102500000, 39.9928700000), function (status, result) {
      // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
      if (status === 'complete') {
        console.log('绘制驾车路线完成');
      } else {
        log.error('获取驾车数据失败：' + result);
      }
    });
  }
}; //搜索地点


var searchPlace = function searchPlace() {
  var _place = '';
  $('#searchplace').on('keyup', function (e) {
    $("#search-result").show();
    _place = $(this).val();
    $.ajax({
      url: "https://restapi.amap.com/v3/assistant/inputtips?city=010&keywords=".concat(_place, "&key=905edbfa201ce838e62dc5ee4e145c3e"),
      success: function success(res) {
        $("#search-result ul").html("");
        console.log(res);
        var _tips = res.tips;

        _tips.forEach(function (item) {
          var li = document.createElement('li');

          var _span1 = document.createElement('span');

          _span1.innerText = item.name;
          li.append(_span1);

          var _span2 = document.createElement('span');

          _span2.innerText = '(' + item.district + ')';
          li.append(_span2);
          $("#search-result ul").append(li);
        });

        $("#search-result ul").on("click", "li", function () {
          $("#searchplace").val($(this).text());
          $("#search-result").hide();
        });
      }
    }); //回车搜索

    if (e.keyCode == '13') {}
  });
};

/* harmony default export */ var map_controller = ({
  init: map_controller_init
});
// EXTERNAL MODULE: ./src/js/views/usermanage.html
var usermanage = __webpack_require__(21);
var usermanage_default = /*#__PURE__*/__webpack_require__.n(usermanage);

// CONCATENATED MODULE: ./src/js/controller/usermanage.js


var usermanage_init = function init() {
  $('#router-view').html(usermanage_default.a);
};

/* harmony default export */ var controller_usermanage = ({
  init: usermanage_init
});
// EXTERNAL MODULE: ./src/js/views/home.html
var home = __webpack_require__(22);
var home_default = /*#__PURE__*/__webpack_require__.n(home);

// CONCATENATED MODULE: ./src/js/controller/homepage.js





var homepage_home =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(req, res, next) {
    var _html;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = template;
            _context.t1 = home_default.a;
            _context.next = 4;
            return models_shoplist.shoplist();

          case 4:
            _context.t2 = _context.sent.data;
            _context.t3 = {
              data: _context.t2
            };
            _html = _context.t0.render.call(_context.t0, _context.t1, _context.t3);
            res.render(_html);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function home(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var homepage = ({
  home: homepage_home
});
// EXTERNAL MODULE: ./node_modules/url/url.js
var url_url = __webpack_require__(7);
var url_default = /*#__PURE__*/__webpack_require__.n(url_url);

// CONCATENATED MODULE: ./src/js/models/page_header.js


var page_header_pageHeaderInfo = function pageHeaderInfo(url, prevUrl) {
  var _urlinfo = url_default.a.parse(url);

  var _pathname = _urlinfo.pathname;
  var _search = url_default.a.parse(prevUrl).search;
  var _infos = {
    '/home': {
      title: '首页',
      list: []
    },
    '/map': {
      title: '地图',
      list: [{
        text: '地图'
      }]
    },
    '/usermanage': {
      title: '用户信息管理',
      list: [{
        text: '用户信息管理'
      }]
    },
    '/shop_list': {
      title: '商品信息',
      description: '商品列表',
      list: [{
        text: '商品列表'
      }]
    },
    '/shop_add': {
      title: '商品信息',
      description: '添加商品',
      list: [{
        text: '商品列表',
        path: '#/shop_list'
      }, {
        text: '添加商品'
      }]
    },
    '/shop_update': {
      title: '商品信息',
      description: '商品更新',
      list: [{
        text: '商品列表',
        path: '#/shop_list'
      }, {
        text: '商品更新'
      }]
    }
  };
  return _infos[_pathname] || {};
};

/* harmony default export */ var models_page_header = ({
  pageHeaderInfo: page_header_pageHeaderInfo
});
// CONCATENATED MODULE: ./src/js/router/index.js









var router = null;
var router_prevUrl = '';

var router_init = function _init() {
  router = new sme_router_default.a('router-view'); //处理菜单选中状态

  router.use(function (req, res, next) {
    _activeLink(req.route);
  }); //匹配路由

  router.route('/home', homepage.home);
  router.route('/shop_list', shop_controller.shoplist);
  router.route('/shop_add', shop_controller.shopadd);
  router.route('/shop_update', shop_controller.update);
  router.route('/map', map_controller.init);
  router.route('/usermanage', controller_usermanage.init);
  router.route('/notfound', function (req, res, next) {
    res.render(_404_default.a);
  });
  router.route('/', router_renderPageHeader);
  router.route('*', function (req, res, next) {
    if (req.url === '') {
      res.redirect('/home');
    } else {
      res.redirect('/notfound');
    }
  }); //在控制器中无法使用router,所以给bus绑定数据
  //给bus绑定数据

  bus.on('go', function (path, body) {
    router.go(path, body);
  });
  bus.on('back', function () {
    router.go();
  });

  _navLink();
};

var _navLink = function _navLink(selector) {
  var $nav = $(selector || '.nav-link[to]');
  $nav.on('click', function (e) {
    //阻止事件冒泡
    // e.stopProgatation()
    var _path = $(this).attr('to');

    router.go(_path);
  });
};

var _activeLink = function _activeLink(route) {
  var $nav = $('.nav-link[to]');
  $nav.removeClass('active');
  $nav.filter("[to='".concat(route, "']")).addClass('active');
};

var router_renderPageHeader = function renderPageHeader(req, res, next) {
  page_header.render(models_page_header.pageHeaderInfo(req.url, router_prevUrl)); //prevUrl 记录的上一次的 URL

  router_prevUrl = req.url;
};

/* harmony default export */ var js_router = ({
  init: router_init
});
// CONCATENATED MODULE: ./src/js/models/user.js
//判断是否登录
var isLgoin = function isLgoin(_ref) {
  var token = _ref.token;
  return $.ajax({
    url: '/api/v1/user/isLogin',
    data: {
      token: token
    },
    success: function success(result) {
      return result;
    }
  });
};

var info = function info(_ref2) {
  var token = _ref2.token;
  return $.ajax({
    url: '/api/v1/user/info',
    data: {
      token: token
    },
    success: function success(result) {
      return result;
    }
  });
};

/* harmony default export */ var user = ({
  isLgoin: isLgoin,
  info: info
});
// CONCATENATED MODULE: ./src/js/utils/auth.js




var auth_none = function _none() {};

var userLoginAuth =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee() {
    var success,
        fail,
        _token,
        isLogin,
        auth,
        _args = arguments;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            success = _args.length > 0 && _args[0] !== undefined ? _args[0] : auth_none;
            fail = _args.length > 1 && _args[1] !== undefined ? _args[1] : auth_none;
            _token = localStorage.getItem('token') || '';
            _context.next = 5;
            return user.isLgoin({
              token: _token
            });

          case 5:
            isLogin = _context.sent;
            auth = false;

            if (isLogin.code == 200) {
              auth = true;
            }

            if (!auth) {
              _context.next = 13;
              break;
            }

            success(auth);
            return _context.abrupt("return", true);

          case 13:
            fail(auth);
            return _context.abrupt("return", false);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function userLoginAuth() {
    return _ref.apply(this, arguments);
  };
}();


// CONCATENATED MODULE: ./src/js/controller/user.js




var getuserInfo =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee2(req, res, next) {
    var _token, _data;

    return regenerator_default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _token = localStorage.getItem('token') || '';
            _context2.next = 3;
            return user.info({
              token: _token
            });

          case 3:
            _data = _context2.sent;
            $('.nickname').html(_data.data.nickname);
            $('.email').html(_data.data.email);
            $('#logout').on('click',
            /*#__PURE__*/
            asyncToGenerator_default()(
            /*#__PURE__*/
            regenerator_default.a.mark(function _callee() {
              return regenerator_default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      localStorage.removeItem('token');
                      window.location.href = './pages/admin.html';

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            })));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getuserInfo(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var controller_user = ({
  getuserInfo: getuserInfo
});
// CONCATENATED MODULE: ./src/js/app.js
//引入样式
 //引入路由



var body_template = __webpack_require__(34);


 //登录拦截验证

userLoginAuth(function () {
  // 渲染整体内容结构
  $('#wrapper').html(body_template); //启动路由

  js_router.init();
  controller_user.getuserInfo();
}, function () {
  window.location.href = '/pages/admin.html';
});
console.log('app.js');

/***/ })
/******/ ]);