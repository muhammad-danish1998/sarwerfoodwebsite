import { formDataContent, useAxios, useUser } from '@/hooks';
import SocialLogin from '@/pages/Auth/SocialLogin';
import { Button, ErrorLabel, Form, Input } from 'ui';
const Register = () => {
	const { register } = useUser();
	return (
		<div className='flex min-h-full w-fullc max-w-xl   flex-col justify-center  sm:px-6 lg:px-8 '>
			<div className='sm:mx-auto  w-full '>
				<div className='bg-white mt-6 py-8 w-full px-4 shadow sm:rounded-lg sm:px-10'>
					<Form
						onSubmit={async (args) => {
							register(args).then((res) => {
								console.log(res);
							});
						}}
						formNode={({ register, formState: { errors }, getValues }) => {
							return (
								<>
									<div className='grid grid-cols-2 gap-4'>
										<div className='relative z-0 w-full mb-6 group'>
											<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
												First Name
											</label>
											<Input
												autoComplete='off'
												register={register('your_name', {
													required: 'first name is required',
												})}
												type='text'
											/>
											{errors['your_name'] && (
												<ErrorLabel message={errors['your_name']?.message?.toString()} />
											)}
										</div>
										<div className='relative z-0 w-full mb-6 group'>
											<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
												Last Name
											</label>
											<Input
												autoComplete='off'
												register={register('last_name', {
													required: 'last_name is required',
												})}
												type='text'
											/>
											{errors['last_name'] && (
												<ErrorLabel message={errors['last_name']?.message?.toString()} />
											)}
										</div>
									</div>
									<div className='relative z-0 w-full mb-6 group'>
										<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
											Email
										</label>
										<Input
											autoComplete='off'
											register={register('email', {
												required: 'email is required',
												pattern: {
													value: /\S+@\S+\.\S+/,
													message: 'Entered value does not match email format',
												},
											})}
											type='text'
										/>
										{errors.email && <ErrorLabel message={errors.email.message?.toString()} />}
									</div>
									<div className='relative z-0 w-full mb-6 group'>
										<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
											Password
										</label>
										<Input
											type='password'
											register={register('password', {
												minLength: {
													value: 5,
													message: 'min length is 5',
												},
												required: 'password is required',
											})}
										/>
										{errors.password && <ErrorLabel message={errors['password'].message?.toString()} />}
									</div>
									<div className='relative z-0 w-full mb-6 group'>
										<label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
											Confirm Password
										</label>
										<Input
											type='password'
											register={register('repeat_password', {
												validate: (value) => {
													const { password } = getValues();
													return password === value || 'Passwords should match!';
												},
											})}
										/>
										{errors['repeat_password'] && (
											<ErrorLabel message={errors['repeat_password']?.message?.toString()} />
										)}
									</div>
									<Button type='submit' className='no-animation'>
										Sign Up
									</Button>
								</>
							);
						}}
					/>
				</div>
				<div className='divider  px-2 text-gray-500'>or</div>
				<div className='px-8'>
					<SocialLogin />
				</div>
				<p className='mt-8 text-lg font-semibold text-black'>
					By tapping ”Sign Up”or”Continue with Google, Facebook, or Apple,”you agree to Liefermars.de
					<span className='text-blue-700'> Terms and Conditions </span> and Privacy. Police.
				</p>
			</div>
		</div>
	);
};
export default Register;
