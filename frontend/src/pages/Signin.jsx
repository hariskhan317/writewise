import React from 'react'
import { FaUser } from "react-icons/fa";

export default function Signin() {
  return (
    <div className="mt-40 flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className='flex justify-center'>
                <img className="h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <p className='font-montserrat text-3xl font-bold ml-3 mt-1'>Write Wise</p>
            </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[650px]">
            <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
              <h2 className="mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-montserrat">Sign in to your account </h2>
                <form className="space-y-6" action="#" method="POST">
                    {/* name and email */}
                    <div className='flex gap-6'>
                        <div className='w-full'>
                            <label htmlFor="email" className="font-montserrat block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input 
                                name="name"
                                type="text" 
                                required
                                className="font-montserrat block w-full rounded-md border-0 py-1.5 pl-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="email" className="font-montserrat block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input 
                                name="email"
                                type="email" 
                                required
                                className="font-montserrat block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>      
                    </div>

                    {/* password */}
                    <div>
                        <label htmlFor="password" className="font-montserrat block text-sm font-medium leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                            id="password"
                            name="password"
                            type="password" 
                            required
                            className="font-montserrat block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    {/* role and upload image */}
                    <div className='flex gap-6'>
                        <div className='w-full'>
                            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">Role </label>
                            <select
                                id="location"
                                name="location"
                                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="Canada"
                            >
                                <option>Reader</option>
                                <option>writer</option> 
                            </select>
                        </div>
                        <div className='w-full'> 
                            <div className="mt-2 flex items-center gap-x-3"> 
                                <FaUser className="h-12 w-12 text-gray-300" />
                                <button
                                type="button"
                                className="font-montserrat rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                Upload Photo
                                </button>
                            </div>  
                        </div>  
                    </div> 

                    <div className="flex justify-end">
                        <div className="text-sm leading-6">
                            <a href="#" className="font-montserrat font-semibold text-indigo-600 hover:text-indigo-500"> Forgot password? </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="font-montserrat flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
