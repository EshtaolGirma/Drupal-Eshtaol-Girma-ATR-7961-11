/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (wp, Drupal) {
  var DrupalIcon = function (_wp$element$Component) {
    _inherits(DrupalIcon, _wp$element$Component);

    function DrupalIcon() {
      _classCallCheck(this, DrupalIcon);

      return _possibleConstructorReturn(this, (DrupalIcon.__proto__ || Object.getPrototypeOf(DrupalIcon)).apply(this, arguments));
    }

    _createClass(DrupalIcon, [{
      key: "render",
      value: function render() {
        return React.createElement(
          "svg",
          { version: "1.1", role: "img", "aria-hidden": "true", focusable: "false", id: "Layer_1", x: "0px", y: "0px", viewBox: "0 0 2160 2880", "enable-background": "new 0 0 2160 2880", className: "dashicon" },
          React.createElement("path", { d: "M1842.9,677.1C1638.9,473.1,1368,360,1080,360C485.1,360,0,845.1,0,1440s485.1,1080,1080,1080  s1080-485.1,1080-1080C2160,1152,2046.9,881.1,1842.9,677.1z M1080,2141.1c-325.7,0-591.4-265.7-591.4-591.4  c0-276,185.1-461.1,348-624c108-108,212.6-212.6,243.4-329.1c30.9,116.6,133.7,221.1,243.4,329.1c162.9,162.9,348,348,348,624  C1671.4,1875.4,1405.7,2141.1,1080,2141.1z" })
        );
      }
    }]);

    return DrupalIcon;
  }(wp.element.Component);

  window.DrupalGutenberg = window.DrupalGutenberg || {};
  window.DrupalGutenberg.Components = window.DrupalGutenberg.Components || {};
  window.DrupalGutenberg.Components.DrupalIcon = DrupalIcon;
})(wp, Drupal);