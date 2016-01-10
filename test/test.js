var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../src/');

var test = function (input, output, done) {
  postcss([plugin()]).process(input).then(function (result) {
    expect(result.css).to.eql(output);
    expect(result.warnings()).to.be.empty;
    done();
  }).catch(function (error) {
    done(error);
  });
};

describe('postcss-polish-stylesheets', function () {
  // Properties
  it('converts `kolor` to `color`', function (done) {
    test(
      'div {kolor: blue;}',
      'div {color: blue;}',
      done);
  });

  it('converts `promień-ramki` to `border-radius`', function (done) {
    test(
      'span {promień-ramki: 10px;}',
      'span {border-radius: 10px;}',
      done);
  });

  it('converts `margines-wewnętrzny-dolny` to `padding-bottom`', function (done) {
    test(
      'div {margines-wewnętrzny-dolny: 3px;}',
      'div {padding-bottom: 3px;}',
      done);
  });

  it('converts `odstępy-między-słowami` to `word-spacing`', function (done) {
    test(
      'p {odstępy-między-słowami: 20px;}',
      'p {word-spacing: 20px;}',
      done);
  });

  // Values
  it('converts `zielone` to `green`', function (done) {
    test(
      'div {background: zielone;}',
      'div {background: green;}',
      done);
  });

  it('converts `modry` to `cornflowerblue`', function (done) {
    test(
      'div {border: 1px solid modry;}',
      'div {border: 1px solid cornflowerblue;}',
      done);
  });

  it('converts `piksel` and `piksele` to `px`', function (done) {
    test(
      'div {margin: 1piksel 22piksele;}',
      'div {margin: 1px 22px;}',
      done);
  });

  // Importants
  it('converts `!motyla noga` to `!important`', function (done) {
    test(
      'div {color: red !motyla-noga;}',
      'div {color: red !important;}',
      done);
  });
});
