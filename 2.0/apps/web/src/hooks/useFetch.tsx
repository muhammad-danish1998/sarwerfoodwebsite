import axios, { AxiosHeaders } from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
const token = window.localStorage.getItem('jwt_token');

export const formType = {
	'content-type': 'application/x-www-form-urlencoded',
};

export const formDataContent = {
	'content-type': 'multipart/form-data',
};
type RequestConfig = {
	headers?: Record<any, string>;
	url?: string;
	baseURL?: string;
	initialIsLoading?: boolean;
	onSuccess?: Function;
	onError?: Function;
	method?: any;
	data?: any;
};

type ResponseState = {
	data: any;
	isLoading: boolean | undefined;
	error: object | null;
	settings: object;
};

const BASE_API_URL = import.meta.env.VITE_API_URL;

const defaultConfig: RequestConfig = {
	url: '',
	method: 'get',
	initialIsLoading: false,
	baseURL: BASE_API_URL,
	onSuccess: Function.prototype,
	onError: Function.prototype,
	headers: {},
};

export const useAxios = (config: Readonly<RequestConfig>, outSide: boolean = false) => {
	const settings = { ...defaultConfig, ...config };
	const { url, method, baseURL, initialIsLoading, onSuccess, onError, headers } = settings;

	const [isLoading, setIsLoading] = useState<boolean | undefined>(initialIsLoading);
	const [error, setError] = useState<object | null>(null);
	const [data, setData] = useState<object | null>(null);

	const handleSuccessRequest = (serverData: any): void => {
		setIsLoading(false);

		if (serverData) {
			setError(null);
			setData(serverData);

			if (onSuccess) {
				onSuccess(serverData);
			}
		}
	};

	const handleErrorRequest = (serverError: object): void => {
		setIsLoading(false);

		if (serverError) {
			setError(serverError);

			if (onError) {
				onError(serverError);
			}
		}
	};

	const request = async (payload: any = null): Promise<any> => {
		try {
			setIsLoading(true);

			let requestConfig: RequestConfig = {
				baseURL,
				url,
				method,
				headers,
			};
			if (outSide) {
				requestConfig.baseURL = '';
			}
			if (payload) {
				requestConfig = { ...requestConfig, data: payload };
			}

			const { data: serverData } = await axios({ ...requestConfig });

			handleSuccessRequest(serverData);
			return serverData;
		} catch (error: any) {
			if (axios.isCancel(error)) {
				console.error('Request canceled by axios', error.message);
			} else {
				if (error.message == 'Network Error') {
					toast.error(error.message, { containerId: 'api-error' });
				} else {
					toast.error(error?.response?.data?.message || 'Internal server error', {
						containerId: 'api-error',
					});
				}
				handleErrorRequest(error);
			}
		}
	};

	const state: ResponseState = { data, isLoading, error, settings };

	return [state, request] as const;
};
