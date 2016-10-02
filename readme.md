# Babel Super Shared Utils Bug

```
thomasreggi@zx:demo$ babel-node use.js
/Users/thomasreggi/Desktop/demo/node_modules/babel-runtime/helpers/inherits.js:21
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
    ^

TypeError: Super expression must either be null or a function, not undefined
    at exports.default (/Users/thomasreggi/Desktop/demo/node_modules/babel-runtime/helpers/inherits.js:21:11)
    at /Users/thomasreggi/Desktop/demo/BetaClass.js:36:26
    at Object.<anonymous> (BetaClass.js:11:4)
    at Module._compile (module.js:541:32)
    at loader (/Users/thomasreggi/.nvm/versions/node/v6.2.2/lib/node_modules/babel-cli/node_modules/babel-register/lib/node.js:158:5)
    at Object.require.extensions.(anonymous function) [as .js] (/Users/thomasreggi/.nvm/versions/node/v6.2.2/lib/node_modules/babel-cli/node_modules/babel-register/lib/node.js:168:7)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Module.require (module.js:468:17)
```
