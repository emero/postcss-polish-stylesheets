# <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/32px-Flag_of_Poland.svg.png" alt="" height="32px" width="auto"> postcss-polish-stylesheets

It's time to Polish your styles!
[PostCSS](https://github.com/postcss/postcss) plugin for writing CSS in Polish.

## Installation

    $ npm install postcss-polish-stylesheets --save-dev

## Basic usage

    // Load dependencies
    var fs = require("fs")
    var postcss = require("postcss")
    var polishStylesheets = require("postcss-polish-stylesheets")

    // CSS file to Polish
    var css = fs.readFileSync("styles.css", "utf8")

    // Process
    var output = postcss()
      .use(polishStylesheets())
      .process(css)
      .css

## Example

### Polished styles

    .polish-flag {
      cień-pudełka: wkład 0 94piksele 0 0 biały;
      góra: 5pikseli !motyla-noga;
      lewo: 2piksele;
      pozycja: absolutna;
      ramka: 1piksel jednolity szary;
      szerokość: 300pikseli;
      tło: czerwone;
      wysokość: 188pikseli;
    }

### Output

    .polish-flag {
      box-shadow: inset 0 94px 0 0 white;
      top: 5px !improtant;
      left: 2px;
      position: absolute;
      border: 1px solid gray;
      width: 300px;
      background: red;
      height: 188px;
    }
