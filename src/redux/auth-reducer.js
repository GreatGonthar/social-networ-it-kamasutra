import { authAPI, securityAPI } from "../api/api.js";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
	email: null,
	userId: null,
	login: null,
	isAuth: false,
	captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return { ...state, ...action.data };
		case GET_CAPTCHA_URL_SUCCESS:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export const setAuthUserData = (email, userId, login, isAuth) => ({
	type: SET_USER_DATA,
	data: { email, userId, login, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: { captchaUrl },
});
export const getAuthUserDataThunkCreator = () => (dispatch) => {
	return authAPI.me().then((data) => {
		if (data.resultCode === 0) {
			let { email, id, login } = data.data;
			dispatch(setAuthUserData(email, id, login, true));
		}
	});
};
export const loginThunkCreator =
	(email, password, rememberMe, captcha) => (dispatch) => {
		authAPI.login(email, password, rememberMe, captcha).then((data) => {
			if (data.resultCode === 0) {
				dispatch(getAuthUserDataThunkCreator());
			} else {
				if (data.resultCode === 10) {
					dispatch(getCaptchaUrlThunkCreator());
				}
				dispatch(stopSubmit("login", { _error: data.messages[0] }));
			}
		});
	};
export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
	const response = await securityAPI.getCaptchaUrl();
	dispatch(getCaptchaUrlSuccess(response.data.url));
};
export const logoutThunkCreator = () => (dispatch) => {
	authAPI.logout().then((data) => {
		if (data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false));
		}
		authAPI.sberBot().then((data) => {
			console.log(data);
		});
	});
};

export default authReducer;
