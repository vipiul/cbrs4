"use client"
import Link from 'next/link'
import React, { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Loader from '@/common/Loader';

// initialvalue of the input feild
const initialValues = {
    email: "",
    password: ""
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter your email'),
    password: Yup.string().min(6).required("Please enter your password")
});


const Login = () => {
    const { push } = useRouter();
    const [isLoading, setisLoading] = useState(false)

    // I am calling api form the server
    const register = async (value) => {
        var formData = new FormData();
        formData.append('email', value.email);
        formData.append('password', value.password);
        setisLoading(true)

        axios({
            method: "post",
            url: "http://api.clinicalbiosamples.com/api/user/login",
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data`,
            }
        }).then((response) => {
            setisLoading(false)
            if (response.data.status === false) {
                alert(response.data.message)
            } else {
                let token = response.data.token;
                localStorage.setItem('token', token);
                localStorage.setItem('CONTENT', token);
                toast.success(response.data.message)
                push("/dashboard/research-paper")
            }

        }).catch((response) => {
            setisLoading(false)
            console.log(response);
        })

    }

    // handle form submit 
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: SignupSchema,
        onSubmit: ((value, action) => {
            register(value);
            action.resetForm();
        })
    })


    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                <img src="/assets/img/logo/logo.png" alt="logo" className='login-Image' />
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST'>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email"
                                        name='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    {errors.email && touched.email ? <p className='text-danger'>{errors.email}</p> : null}
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password"
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.password && touched.password ? <p className='text-danger'>{errors.password}</p> : null}
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Loader isLoading={isLoading} />
        </div>
    )
}

export default Login