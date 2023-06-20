import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "901e8606-96c1-49e0-8a33-69457f94679a",
	},
});
const instanceSberBot = axios.create({
	withCredentials: true,
	baseURL: "https://api.aicloud.sbercloud.ru/public/v1/public_inference/",
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users/?page=${currentPage}&count=${pageSize}`)
			.then((response) => response.data);
	},
	unfollowUser(userID = 0) {
		return instance
			.delete(`follow/${userID}`)
			.then((response) => response.data);
	},
	followUser(userID = 0) {
		return instance
			.post(`follow/${userID}`)
			.then((response) => response.data);
	},
};
// "21734"
export const profileAPI = {
	getProfile(userId = "2") {
		return instance
			.get(`profile/` + userId)
			.then((response) => response.data);
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/` + userId)
			.then((response) => response.data);
	},
	updateStatus(status) {
		return instance.put(`profile/status/`, { status });
	},
	updateAva(file) {
		let formData = new FormData();
		formData.append("image", file);
		return instance.put(`profile/photo/`, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		}); //
	},
};

export const authAPI = {
	me() {
		return instance.get("auth/me").then((response) => response.data);
	},
	login(email, password, rememberMe, captcha) {
		return instance
			.post("auth/login", { email, password, rememberMe, captcha })
			.then((response) => response.data);
	},
	logout() {
		return instance.delete("auth/login").then((response) => response.data);
	},
	sberBot() {
		return instanceSberBot
			.post("", { text: "вопрос: Посоветуй фильм на вечер\n ответ:" })
			.then((response) => response.data);
	},
};
export const securityAPI = {
	getCaptchaUrl() {
        return instance.get("security/get-captcha-url")
    },
};
export const authMeAPI = authAPI.me();
