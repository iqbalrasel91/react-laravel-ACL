import axios from "axios";

import Cookies from "js-cookie";

const axiosServer = axios.create({
    baseURL: import.meta.env.API_BASE_URL || 'https://dummyjson.com'
});

export const setAuthToken = (token) => {
    axiosServer.defaults.headers.common["Authorization"] = "Bearer " + token;
};

export const setLanguage = (lang) => {
    axiosServer.defaults.headers.common["lang"] = lang;
};

export const clearCookies = () => {
    Cookies.set("_jwtToken", '');
    Cookies.set("_jwtLang", "en"); // en or ab
    Cookies.set("_user_id", '');
    Cookies.set("_jwtUserType", '');
};

export const setCookiesFromAuthResponse = (res) => {

    Cookies.set("_jwtToken", res.data.token);
    Cookies.set("_jwtLang", "en"); // en or ab
    Cookies.set("_user_id", res.data.id);

    localStorage.setItem(
        "_userInfo",
        JSON.stringify(res.data)
    );

    setAuthToken(Cookies.get("_jwtToken"));
    setLanguage(Cookies.get("_jwtLang"));
}

setAuthToken(Cookies.get("_jwtToken"));
setLanguage(Cookies.get("_jwtLang"));
export default axiosServer;