import { actionTypes } from "../actions/auth.action";

const checkLocalStorage = () => {
  const accessToken = localStorage.getItem("access_token");
  return accessToken !== null; // Retorna true se existir, false caso contrário
};

const initialState = {
  credentials: {
    email: "",
    password: "",
  },
  success: checkLocalStorage(),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          ...payload,
        },
      };

    case actionTypes.SUCCESS:
      return {
        ...state,
        success: payload,
      };

    default:
      return state;
  }
};
