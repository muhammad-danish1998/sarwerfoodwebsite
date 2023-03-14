import React from 'react';
import { Button, ErrorLabel, Form, Input } from 'ui';

const ForgetPassword = () => {
  return (
    <div className="flex min-h-full  w-full max-w-lg   flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="mt-8 sm:mx-auto w-full max-w-lg">
        <h3 className="my-6 text-center w-full max-w-lg  text-3xl font-bold tracking-tight text-gray-900">
          Forget Password
        </h3>
        <div className="bg-white py-8 px-4 shadow w-full max-w-lg sm:rounded-lg sm:px-10">
          <Form
            onSubmit={async (args) => {
              console.log(args);
            }}
            formNode={({ register, formState: { errors } }) => {
              return (
                <>
                  <div className="relative z-0 w-full mb-6 group">
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email-Adress
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

                  <Button type="submit" className="no-animation">
                    Forget Password
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

export default ForgetPassword;
