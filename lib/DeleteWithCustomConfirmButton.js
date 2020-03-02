"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _classnames = _interopRequireDefault(require("classnames"));

var _raCore = require("ra-core");

var _Cancel = _interopRequireDefault(require("@material-ui/icons/Cancel"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _reactAdmin = require("react-admin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    deleteButton: {
      color: theme.palette.error.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.error.main, 0.12),
        // Reset on mouse devices
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    }
  };
};

var ConfirmContent = function ConfirmContent(props) {
  var confirmContent = props.confirmContent;

  if (confirmContent === undefined) {
    return _react["default"].createElement("div", null, "Your actions will be logged.");
  } else {
    return _react["default"].createElement(confirmContent, props);
  }
};

var ConfirmTitle = function ConfirmTitle(props) {
  var confirmTitle = props.confirmTitle;

  if (confirmTitle === undefined) {
    return _react["default"].createElement(_DialogTitle["default"], null, "Are you sure you want to delete this entity?");
  } else {
    return _react["default"].createElement(_DialogTitle["default"], null, confirmTitle);
  }
};

var DeleteWithCustomConfirmButton = /*#__PURE__*/function (_Component) {
  _inherits(DeleteWithCustomConfirmButton, _Component);

  function DeleteWithCustomConfirmButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DeleteWithCustomConfirmButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DeleteWithCustomConfirmButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showDialog: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      event.stopPropagation(); // support with rowClick on Datagrid

      _this.setState({
        showDialog: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseClick", function (event) {
      event.stopPropagation(); // support with rowClick on Datagrid

      _this.setState({
        showDialog: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (event) {
      event.stopPropagation(); // support with rowClick on Datagrid

      event.preventDefault();

      _this.setState({
        showDialog: false
      });

      var _this$props = _this.props,
          dispatchCrudDelete = _this$props.dispatchCrudDelete,
          startUndoable = _this$props.startUndoable,
          resource = _this$props.resource,
          record = _this$props.record,
          basePath = _this$props.basePath,
          redirect = _this$props.redirect,
          undoable = _this$props.undoable;

      if (undoable) {
        startUndoable((0, _raCore.crudDelete)(resource, record.id, record, basePath, redirect));
      } else {
        dispatchCrudDelete(resource, record.id, record, basePath, redirect);
      }
    });

    return _this;
  }

  _createClass(DeleteWithCustomConfirmButton, [{
    key: "render",
    value: function render() {
      var showDialog = this.state.showDialog;
      var _this$props2 = this.props,
          _this$props2$label = _this$props2.label,
          label = _this$props2$label === void 0 ? 'ra.action.delete' : _this$props2$label,
          _this$props2$classes = _this$props2.classes,
          classes = _this$props2$classes === void 0 ? {} : _this$props2$classes,
          className = _this$props2.className;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_reactAdmin.Button, {
        onClick: this.handleClick,
        label: label,
        className: (0, _classnames["default"])('ra-delete-button', classes.deleteButton, className),
        key: "button"
      }, _react["default"].createElement(_Delete["default"], null)), _react["default"].createElement(_Dialog["default"], {
        fullWidth: true,
        open: showDialog,
        onClose: this.handleCloseClick,
        onClick: function onClick(event) {
          return event.stopPropagation();
        } // support with rowClick on Datagrid
        ,
        "aria-label": "Are you sure?"
      }, _react["default"].createElement(ConfirmTitle, this.props), _react["default"].createElement(_DialogContent["default"], null, _react["default"].createElement(ConfirmContent, this.props)), _react["default"].createElement(_DialogActions["default"], null, _react["default"].createElement(_reactAdmin.Button, {
        onClick: this.handleDelete,
        label: label,
        className: (0, _classnames["default"])('ra-delete-button', classes.deleteButton, className),
        key: "button"
      }, _react["default"].createElement(_Delete["default"], null)), _react["default"].createElement(_reactAdmin.Button, {
        label: "ra.action.cancel",
        onClick: this.handleCloseClick
      }, _react["default"].createElement(_Cancel["default"], null)))));
    }
  }]);

  return DeleteWithCustomConfirmButton;
}(_react.Component);

DeleteWithCustomConfirmButton.propTypes = {
  basePath: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  confirmContent: _propTypes["default"].element,
  // Custom dialog contents
  confirmTitle: _propTypes["default"].string,
  // Custom dialog title
  dispatchCrudDelete: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].string,
  record: _propTypes["default"].object,
  redirect: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].func]),
  resource: _propTypes["default"].string.isRequired,
  startUndoable: _propTypes["default"].func,
  translate: _propTypes["default"].func,
  undoable: _propTypes["default"].bool
};
DeleteWithCustomConfirmButton.defaultProps = {
  redirect: 'list',
  undoable: true
};

var _default = (0, _compose["default"])((0, _reactRedux.connect)(null, {
  startUndoable: _raCore.startUndoable,
  dispatchCrudDelete: _raCore.crudDelete
}), _raCore.translate, (0, _styles.withStyles)(styles))(DeleteWithCustomConfirmButton);

exports["default"] = _default;