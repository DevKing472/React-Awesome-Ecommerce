export const TEST_TYPE = "TEST_TYPE";
//auth
export const AUTH_TYPES = {
  SIGN_IN: "SIGN_IN",
  AUTH_ERROR : "AUTH_ERROR",
  SIGN_OUT : "SIGN_OUT",
  REFRESH_TOKEN : "REFRESH_TOKEN",
  LOAD_ME : "LOAD_ME",
  SIGN_IN_INIT: "SIGN_IN_INIT",
  SIGN_IN_FINISH: "SIGN_IN_FINISH",
};

//profile
export const UPDATE_USER = "UPDATE_USER";
export const GET_PROFILE = "GET_PROFILE";
export const UPDATE_BANK = "UPDATE_BANK";
export const GET_BANK_INFO = "GET_BANK_INFO";

// alert
export const GLOBAL_ERROR = "GLOBAL_ERROR";
export const SUCCESS = "SUCCESS";

//socket
export const SAVE_SOCKET_USER = "SAVE_SOCKET_USER";

//notification
export const GET_NOTIFICATIONS = "GET_NOTIFICATIONS";
export const READ_NOTIFICATION = "READ_NOTIFICATION";

//order
export const ORDERS_TYPES = {
  GET_ORDERS : "GET_ORDERS",
  GET_ORDERS_INIT: "GET_ORDERS_INIT",
  GET_ORDERS_FINISH: "GET_ORDERS_FINISH",
};
export const ORDER_TYPES = {
  GET_ORDER : "GET_ORDER",
  GET_ORDER_INIT: "GET_ORDER_INIT",
  GET_ORDER_FINISH: "GET_ORDER_FINISH",
  CANCEL_ORDER : "CANCEL_ORDER"
};
export const TOGGLE_ORDER_APPROVAL_TYPES = {
  TOGGLE_ORDER_APPROVAL_INIT: "TOGGLE_ORDER_APPROVAL_INIT",
  TOGGLE_ORDER_APPROVAL_FINISH: "TOGGLE_ORDER_APPROVAL_FINISH",
  TOGGLE_ORDER_APPROVAL : "TOGGLE_ORDER_APPROVAL",
};
export const TOGGLE_TOBERETURN_ORDER_TYPES = {
  TOGGLE_TOBERETURN_ORDER_INIT: "TOGGLE_TOBERETURN_ORDER_INIT",
  TOGGLE_TOBERETURN_ORDER_FINISH: "TOGGLE_TOBERETURN_ORDER_FINISH",
  TOGGLE_TOBERETURN_ORDER : "TOGGLE_TOBERETURN_ORDER",
};
export const CANCEL_ORDER_TYPES = {
  CANCEL_ORDER_INIT: "CANCEL_ORDER_INIT",
  CANCEL_ORDER_FINISH: "CANCEL_ORDER_FINISH",
  CANCEL_ORDER : "CANCEL_ORDER",
};

//product
export const PRODUCTS_TYPES = {
  GET_PRODUCTS : "GET_PRODUCTS",
  GET_PRODUCTS_INIT: "GET_PRODUCTS_INIT",
  GET_PRODUCTS_FINISH: "GET_PRODUCTS_FINISH",
};
export const PRODUCT_TYPES = {
  GET_PRODUCT : "GET_PRODUCT",
  GET_PRODUCT_INIT: "GET_PRODUCT_INIT",
  GET_PRODUCT_FINISH: "GET_PRODUCT_FINISH",
  DELETE_PRODUCT : "DELETE_PRODUCT"
};

export const ADD_PRODUCT_TYPES = {
  ADD_PRODUCT : "ADD_PRODUCT",
  ADD_PRODUCT_INIT: "ADD_PRODUCT_INIT",
  ADD_PRODUCT_FINISH: "ADD_PRODUCT_FINISH",
};
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_BRANDS = "GET_BRANDS";
export const UPLOAD_IMAGES = "UPLOAD_IMAGES";
export const REMOVE_IMAGE = "REMOVE_IMAGE"//add product ma use hunchha
export const REMOVE_UPLOAD_IMAGES = "REMOVE_UPLOAD_IMAGES";//edit prodcut unmount huda use hunchha

//superadmin
export const ADMINS_TYPES = {
  GET_ADMINS: "GET_ADMINS",
  GET_ADMINS_INIT: "GET_ADMINS_INIT",
  GET_ADMINS_FINISH: "GET_ADMINS_FINISH",
};
export const ADMIN_TYPES = {
  GET_ADMIN: "GET_ADMIN",
  GET_ADMIN_INIT: "GET_ADMIN_INIT",
  GET_ADMIN_FINISH: "GET_ADMIN_FINISH",
};

export const BEING_ADMIN = "BEING_ADMIN"
export const BEING_SUPERADMIN = "BEING_SUPERADMIN"