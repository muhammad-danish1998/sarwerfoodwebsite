export const API_URL = "https://liefermars.de";


const token = window.localStorage.getItem("jwt_token");

export const formType = {
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
};

export const contentType = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export const contentTypeWithToken = {
  headers: {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
  },
};

export const axiosUrl = (endpoint) => {
  return `${API_URL}${endpoint}`;
};
