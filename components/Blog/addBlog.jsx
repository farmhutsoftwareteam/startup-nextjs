"use client"

import React, { useState } from 'react';

const BlogInput = () => {
    const [title, setTitle] = useState();
    const [content, setContent ] = useState();


    return (
        <>
        <div className="py-8 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto">
                    <div>
                        <label htmlFor="" className="block text-sm font-bold text-gray-900"> Article Title </label>
                        <div className="mt-2">
                            <input type="text" name="" id="" placeholder="" value={title} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 bg-white">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-xl mx-auto">
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-600"> Blog Content </label>
                    <div className="relative mt-2">
                        <div className="absolute top-0 left-0 flex items-center pt-4 pl-4 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>

                        <textarea name="" id="" placeholder="Enter your content" value={content} rows="15" className="border block w-full py-3 pl-12 pr-4 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    <div className="py-8 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto">
                    <div>
                        <label htmlFor="" className="block text-sm font-bold text-gray-900"> Author </label>
                        <div className="mt-2">
                            <input type="text" name="" id="" placeholder="" value={title} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto">
                    <div>
                        <label htmlFor="" className="block text-sm font-bold text-gray-900"> Occupation </label>
                        <div className="mt-2">
                            <input type="text" name="" id="" placeholder="" value={title} onChange={(e) => setName(e.target.value)} className="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 border rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto">
                    <div className="sm:flex sm:items-center sm:space-x-8">
                        <label htmlFor="" className="block text-sm font-bold text-gray-900"> Upload Images: </label>
                        <div className="relative mt-2 sm:mt-0 sm:flex-1">
                            <input type="file" className="block w-full px-4 border py-3 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </>
    );
}

export default BlogInput;