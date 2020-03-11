"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactAdmin = require("react-admin");

var _raCore = require("ra-core");

var _raCustomConfirm = _interopRequireDefault(require("ra-custom-confirm"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _ErrorOutline = _interopRequireDefault(require("@material-ui/icons/ErrorOutline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var DeleteWithCustomConfirmButton =
/*#__PURE__*/
function (_Component) {
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
      event.stopPropagation();

      _this.setState({
        showDialog: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDialogClose", function () {
      _this.setState({
        showDialog: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function (event) {
      event.stopPropagation();
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
          cancel = _this$props2.cancel,
          CancelIcon = _this$props2.CancelIcon,
          classes = _this$props2.classes,
          className = _this$props2.className,
          content = _this$props2.content,
          confirmColor = _this$props2.confirmColor,
          DeleteIcon = _this$props2.DeleteIcon,
          label = _this$props2.label,
          title = _this$props2.title;
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_reactAdmin.Button, {
        label: label,
        onClick: this.handleClick,
        className: (0, _classnames["default"])('ra-delete-button', classes.deleteButton, className)
      }, _react["default"].createElement(DeleteIcon, null)), _react["default"].createElement(_raCustomConfirm["default"], _extends({}, this.props, {
        isOpen: showDialog,
        title: title // your custom title of confirm dialog
        ,
        content: content // your custom contents of confirm dialog
        ,
        confirm: label // label of confirm button (default: 'Confirm')
        ,
        confirmColor: confirmColor // color of confirm button ('primary' or 'warning', default: 'primary')
        ,
        ConfirmIcon: DeleteIcon // icon of confirm button (default: 'ActionCheck')
        ,
        cancel: cancel // label of cancel button (default: 'Cancel')
        ,
        CancelIcon: CancelIcon // icon of cancel button (default: 'AlertError')
        ,
        onConfirm: this.handleDelete,
        onClose: this.handleDialogClose
      })));
    }
  }]);

  return DeleteWithCustomConfirmButton;
}(_react.Component);

DeleteWithCustomConfirmButton.propTypes = {
  basePath: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  className: _propTypes["default"].string,
  confirmColor: _propTypes["default"].string.isRequired,
  cancel: _propTypes["default"].string,
  CancelIcon: _propTypes["default"].elementType,
  content: _propTypes["default"].element.isRequired,
  dispatchCrudDelete: _propTypes["default"].func.isRequired,
  DeleteIcon: _propTypes["default"].elementType,
  label: _propTypes["default"].string,
  record: _propTypes["default"].object,
  redirect: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].func]),
  resource: _propTypes["default"].string.isRequired,
  startUndoable: _propTypes["default"].func,
  title: _propTypes["default"].string.isRequired,
  translate: _propTypes["default"].func,
  undoable: _propTypes["default"].bool
};
DeleteWithCustomConfirmButton.defaultProps = {
  cancel: 'ra.action.cancel',
  CancelIcon: _ErrorOutline["default"],
  confirmColor: 'warning',
  DeleteIcon: _Delete["default"],
  label: 'ra.action.delete',
  redirect: 'list',
  startUndoable: _raCore.startUndoable,
  undoable: true
};

var _default = (0, _compose["default"])((0, _reactRedux.connect)(null, {
  startUndoable: _raCore.startUndoable,
  dispatchCrudDelete: _raCore.crudDelete
}), _raCore.translate, (0, _styles.withStyles)(styles))(DeleteWithCustomConfirmButton);

exports["default"] = _default;