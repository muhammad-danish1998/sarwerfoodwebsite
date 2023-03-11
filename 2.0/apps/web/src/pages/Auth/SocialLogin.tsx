import React from 'react';
import { AppleLoginButton, FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
const SocialLogin = () => {
	return (
		<div>
			<LoginSocialGoogle
				client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
				onReject={(err) => {
					console.log(err);
				}}
				onResolve={(res) => {
					console.log(res);
				}}>
				<GoogleLoginButton
					className='btn social-btn justify-center flex  rounded-[15px_!important] text-[#ffffff_!important] bg-[#3F83F8_!important]  capitalize'
					text='Continue with google'
				/>
			</LoginSocialGoogle>
			<FacebookLoginButton
				className='btn social-btn fb-btn justify-center flex  rounded-[15px_!important] text-[#ffffff_!important] capitalize mb-3'
				text='Continue with facebook'
			/>
			<AppleLoginButton
				className='btn social-btn justify-center flex  rounded-[15px_!important] text-[#ffffff_!important] bg-[#000000!important]  capitalize'
				text='Continue with apple'
			/>
		</div>
	);
};

export default SocialLogin;
