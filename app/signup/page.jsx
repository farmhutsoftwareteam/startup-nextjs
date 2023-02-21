'use client'
import Link from "next/link";
import React, { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { Loading } from "@nextui-org/react";


const SignupPage = () => {

  const [ formData, setFormData ] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [ loading, setLoading] = useState(false);
  const handleChange =(e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://farmhutafrica.azurewebsites.net/user/signup", formData);
      if (res.status === 200) {
        setLoading(false);
            // user was created successfully
            const {token, userId, username} = res.data;
            Cookies.set('jwt', token, {
                expires:7,
                secure: true

      });
      Cookies.set('username', username);
            Cookies.set('id', userId);
            console.log("Token stored successfully")
            // use the router to navigate to the dashboard
            window.location.href = '/dashboard';

    } else {
      setLoading(false);
      console.log("Something went wrong");
      //display error message
     setError("Login Failed . Please check")
    }
  } catch (error) {
    setLoading(false);
    console.log(error);
 }
};

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Create your account
                </h3>
                <p className="mb-11 text-center text-base font-medium text-body-color">
                  It’s totally free and super easy
                </p>
             
                <div className="mb-8 flex items-center justify-center">
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                  <p className="w-full px-5 text-center text-base font-medium text-body-color">
                    Register today.
                  </p>
                  <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color sm:block"></span>
                </div>
                <form>
                  <div className="mb-8">
                    <label
                      for="username"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                  
                      Username
                    </label>
                    <input
                    required
                      value={formData.username}
                      onChange={handleChange}
                      type="text"
                      name="username"
                      placeholder="Enter your full name"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      for="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Email{" "}
                    </label>
                    <input
                    required
                    value={formData.email}
                    onChange={handleChange}
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      for="password"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      {" "}
                      Your Password{" "}
                    </label>
                    <input
                    required
                    value={formData.password}
                    onChange={handleChange}
                      type="password"
                      name="password"
                      placeholder="Enter your Password"
                      className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    />
                  </div>
                 
                  <div className="mb-6">
                    <button type="submit" onClick={handleSubmit} className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Sign up
                      {loading && <Loading type="points" color="warning" />}
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color">
                  Already using Farmhut Africa?
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </section>
    </>
  );
};

export default SignupPage;
