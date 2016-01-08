var postcss = require('postcss');
var properties = require('./properties.js');
var values = require('./values.js');

module.exports = postcss.plugin('postcss-polish-stylesheets', function () {
  function replaceValuesForKey(enteredValue, key) {
    var possibleValues = values[key];
    var transformedValue = enteredValue;
    var re;

    possibleValues = [].concat(possibleValues)

    for (var i in possibleValues) {
      re = new RegExp('(\\b)?(' + possibleValues[i] + ')\\b', 'g');

      if (re.test(enteredValue)) {
        transformedValue = transformedValue.replace(re, key);
      }
    }

    return transformedValue;
  }

  return function (css, result) {
    css.walkDecls(function (decl) {
      // Properties
      for (var key in properties) {
        if (decl.prop === properties[key]) {
          decl.prop = key;
        }
      }

      // Values
      for (var key in values) {
        decl.value = replaceValuesForKey(decl.value, key);
      }

      // Importants
      if (decl.value.indexOf('!motyla noga') >= 0) {
        decl.value = decl.value.replace(/\s*!motyla noga\s*/, '');
        decl.important = true;
      }
    });
  };
});
