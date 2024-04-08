import React from 'react';

const Contact = () => {
    return (
        <>
            <div class="max-w-screen-md mx-auto p-5">
                <div class="text-center mb-16">
                    <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight  text-custom-textColor">
                        Get In <span class="text-custom-linkActive">Touch</span>
                    </h3>
                </div>
                <form class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide  text-custom-textColor text-xs font-bold mb-2" for="grid-first-name">
                                First Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200  text-custom-textColor border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name" />
                            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide  text-custom-textColor text-xs font-bold mb-2" for="grid-last-name">
                                Last Name
                            </label>
                            <input class="appearance-none block w-full bg-gray-200  text-custom-textColor border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide  text-custom-textColor text-xs font-bold mb-2" for="grid-password">
                                Email Address
                            </label>
                            <input class="appearance-none block w-full bg-gray-200  text-custom-textColor border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Email address" />
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide  text-custom-textColor text-xs font-bold mb-2" for="grid-password">
                                Your Message
                            </label>
                            <textarea rows="10" class="appearance-none block w-full bg-gray-200  text-custom-textColor border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                            </textarea>
                        </div>
                        <div class="flex justify-between w-full px-3">
                            <div class="md:flex md:items-center">
                                <label class="block  text-custom-textColor font-bold">
                                    <input class="mr-2 leading-tight" type="checkbox" />
                                    <span class="text-sm">
                                        Send me your newsletter!
                                    </span>
                                </label>
                            </div>
                            <button class="shadow bg-custom-btnBg hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                                Send Message
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
