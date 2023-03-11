import { formDataContent, useAxios } from '@/hooks/useFetch';
import { createContext, useContext, useState } from 'react';

type UserContextType = {
	user: Record<string, any> | undefined;
	signIn: (args: any) => Promise<void>;
	register: (args: any) => Promise<void>;
};
export const USER_STORAGE_KEY = 'app-user';
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider = (props) => {
	const [user, setUser] = useState<Record<string, any> | undefined>();
	const [, registerApi] = useAxios({
		url: '/_api_ajax_signup.php',
		method: 'POST',
		headers: { ...formDataContent },
	});
	const [, signInApi] = useAxios({
		url: '/_api_ajax_login.php',
		method: 'POST',
		headers: { ...formDataContent },
	});

	const signIn = async (args) => {
		const res = (await signInApi(args)) as any;
		setUser(res);
	};
	const register = async (args) => {
		const res = (await registerApi(args)) as any;
		setUser(res);
	};

	const value: UserContextType = {
		user,
		signIn,
		register,
	};

	return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error(`useUser must be used within a MyUserContextProvider.`);
	}
	return context;
};
