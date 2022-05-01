import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRef, useState, useEffect, useContext } from 'react';
import SliceLogo from '../assets/slicelogoblack.svg'
import SignUp from './SignUp'
import Login from './Login'
import { FaRegUserCircle } from 'react-icons/fa';
import { AdminContext, AuthContext } from '../App';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Contact Us', href: '/contact-us', current: false },
  { name: 'Menu', href: '/menu', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const Navbar = () => {



  const isAdmin = React.useContext(AdminContext); 
  const authenticated = React.useContext(AuthContext); 

 const handleLogoutClick = () => {
    localStorage.removeItem('sliceLogin'); 
    window.location.reload(false);
}

console.log(authenticated)
let checkAdmin = (
  <>

  <Menu.Item>
    {({ active }) => (
      <> 
       <NavLink
       to="/user-dashboard">
      <a
        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      >
        Your Account
      </a>
      </NavLink>
      </>
    )}
  </Menu.Item>
  <Menu.Item>
    {({ active }) => (
      <a
        onClick={handleLogoutClick}
        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      >
        Sign out
      </a>
    )}
  </Menu.Item>

</>
)

if (isAdmin === "1") {
 checkAdmin = (
  <>
 
  <Menu.Item>
    {({ active }) => (
     <> 
     <NavLink
     to="/user-dashboard">
    <a
      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    >
      Your Account
    </a>
    </NavLink>
    </>
    )}
  </Menu.Item>
  <Menu.Item>
    {({ active }) => (
         <> 
         <NavLink
         to="/admin">
      <a
      
        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      >
        Admin Dashboard
      </a>
      </NavLink>
      </>
    )}
  </Menu.Item>
  <Menu.Item>
    {({ active }) => (
      <a
        onClick={handleLogoutClick}
        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
      >
        Sign out
      </a>
    )}
  </Menu.Item>

</>
  )
}


let navbar = (
  <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center lg:h-36 h-20">
              <div className="absolute flex  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="mx-auto px-20">
                  <img
                    className="block lg:w-80 w-56"
                    src={SliceLogo}
                    alt="Workflow"
                  />
                </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '' : '',
                          'px-3 py-2 rounded-md text-lg font-large'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  
                </div>
              </div>
              <div className="sm:flex hidden">
                <div className="pl-4">
                    <SignUp/> </div>
                    <div className="pl-4">
                    <Login/></div>
               </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : '',
                    'block px-3 py-2 rounded-md text-lg font-large'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            <div className="pr">
              <SignUp/>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
               focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600
                dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button> 
            </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
)

if (authenticated) {
  navbar = (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center lg:h-36 h-20">
              <div className="absolute flex  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="mx-auto px-20">
                  <img
                    className="block lg:w-80 w-56"
                    src={SliceLogo}
                    alt="Workflow"
                  />
                </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? '' : '',
                          'px-3 py-2 rounded-md text-lg font-large'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <Menu as="div" className="ml-5 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <FaRegUserCircle className="text-3xl" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                   {checkAdmin}
                    </Menu.Items>
                  </Transition>
                </Menu>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : '',
                    'block px-3 py-2 rounded-md text-lg font-large'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

  return (
    <>
    {navbar}
    </>
  )
}

export default Navbar;