import { formDataContent, useAxios } from '@/hooks';
import { useUser } from '@/hooks/useUser';
import SocialLogin from '@/pages/Auth/SocialLogin';
import { Button, ErrorLabel, Form, Input } from 'ui';
const SignIn = () => {
  const { signIn } = useUser();
  return (
    <div className="flex min-h-full  max-w-xl w-full flex-col justify-center py-2 sm:px-6 lg:px-8 ">
      <div className=" sm:mx-auto  w-full">
        <div className="px-6">
          <SocialLogin />
        </div>
        <div className="divider  px-2 text-gray-500">or continue with email</div>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Form
            onSubmit={async (args) => {
              signIn(args).then((res) => {
                console.log(res);
              });
            }}
            formNode={({ register, formState: { errors } }) => {
              return (
                <>
                  <div className="relative z-0 w-full mb-6 group">
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email
                    </label>
                    <Input
                      autoComplete="off"
                      register={register('email', {
                        required: 'email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Entered value does not match email format',
                        },
                      })}
                      type="text"
                    />
                    {errors.email && <ErrorLabel message={errors.email.message?.toString()} />}
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Password
                    </label>
                    <Input
                      type="password"
                      register={register('password', {
                        minLength: {
                          value: 5,
                          message: 'min length is 5',
                        },
                        required: 'password is required',
                      })}
                    />
                    {errors.password && <ErrorLabel message={errors.password.message?.toString()} />}
                  </div>
                  <Button type="submit" className="no-animation">
                    Continue to Sign in{' '}
                  </Button>
                </>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default SignIn;
