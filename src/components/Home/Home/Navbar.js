
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();

    return (
        <div >
            <nav className="bg-yellow-200 mt-0 fixed w-full z-20 top-0 mb-96">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex items-center align-center justify-between h-16">
                        <div className="flex items-center align-center">

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-4">
                                    <img className="w-16 h-16" src="https://i.ibb.co/XVtJ5cc/logo-2.png" alt="" />

                                    <Link to="/" className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">Home</Link>



                                    <div className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">
                                        <Link to="/about">About Me</Link>
                                    </div>
                                    {
                                        user?.email ?
                                            <div>
                                                <div className="flex flexwrap items-center justify-around">
                                                    <Link to="/addproduct" className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">Add Product</Link>
                                                    <Link to="/services" className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">Other Services</Link>
                                                    <Link to="/faq" className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">FAQ</Link>
                                                    <Link to="/explore" className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">Explore</Link>
                                                    <NavLink to="/dashboard">
                                                        <button className="hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">Dashboard</button>
                                                    </NavLink>

                                                    <img src={user?.photoURL} className="w-10 h-10 rounded-full mr-5 ml-20 " alt="" />
                                                    <h1 className="font-bold mr-20 text-gray-700">{user?.displayName}</h1>

                                                    <button className="hover:bg-white text-gray-700 font-bold px-3 py-2 rounded-md  " onClick={logout}>Logout</button>
                                                </div>


                                            </div> : <div className=" hover:bg-white text-gray-700 px-3 py-2 rounded-md  font-bold">
                                                <Link to="/login"><button>Login</button></Link>

                                            </div>

                                    }
                                </div>


                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <a href="/" className=" hover:bg-white text-red-500 px-3 py-2 rounded-md text-sm font-bold">Home</a>
                                <Link to='/addproduct' className=" hover:bg-white text-red-500 px-3 py-2 rounded-md text-sm font-bold">Add Product</Link>
                                <Link to='/explore' className=" hover:bg-white text-red-500 px-3 py-2 rounded-md text-sm font-bold">Explore</Link>
                                <Link to='/login' className=" hover:bg-white text-red-500 px-3 py-2 rounded-md text-sm font-bold">Login</Link>

                            </div>
                        </div>
                    )}
                </Transition>
            </nav >


        </div >

    )
};

export default Navbar;