import authReducer, { login, logout } from "../modules/auth/auth.slice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const useAuth = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return {
    ...auth,
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
  };
};
