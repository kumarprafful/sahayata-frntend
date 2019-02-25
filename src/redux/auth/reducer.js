import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGOUT_USER
} from "Constants/actionTypes";

const INIT_STATE = {
  user: localStorage.getItem("username"),
  loading: false,
  type: localStorage.getItem("userType")
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_USER_SUCCESS:
      //notify.success('Login Success');
      localStorage.setItem("username", action.payload.username);
      localStorage.setItem("userType", action.payload.userType);
      return { ...state, loading: false, user: action.payload , type: action.payload.userType};
    case REGISTER_USER:
      return { ...state, loading: true };

    case REGISTER_USER_SUCCESS:
      //notify.success('Register User Success');
      return { ...state, loading: false, user: action.payload.uid };

    case LOGOUT_USER:
      return { ...state, user: null };

    default:
      return { ...state };
  }
};
