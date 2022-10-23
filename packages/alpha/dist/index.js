'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlphaComponent = function (_Component) {
  _inherits(AlphaComponent, _Component);

  function AlphaComponent(props) {
    _classCallCheck(this, AlphaComponent);

    var _this = _possibleConstructorReturn(this, (AlphaComponent.__proto__ || Object.getPrototypeOf(AlphaComponent)).call(this, props));

    _this.myRef = React__default.createRef();
    return _this;
  }

  _createClass(AlphaComponent, [{
    key: 'render',
    value: function render() {
      var text = this.props.text;


      return React__default.createElement(
        'div',
        { ref: 'test' },
        'Alpha Component: ',
        text
      );
    }
  }]);

  return AlphaComponent;
}(React.Component);

AlphaComponent.propTypes = {
  text: PropTypes.string
};

module.exports = AlphaComponent;
