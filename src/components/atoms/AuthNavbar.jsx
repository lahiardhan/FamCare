import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode';

function AuthNavbar() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    username: 'user',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payLoad = jwtDecode(jwtToken)
      const userFromPlayLoad = payLoad.player;
      user.username = `${userFromPlayLoad.username}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    window.location = "/";
    setIsLogin(false)
  };

  if (isLogin) {
    return (
      <li>
        <div className="flex items-center space-x-3 mx-2 lg:mx-10">
          <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
          </div>
          <div className="font-medium">
            <span>Halo, {user.username}</span>
            <a onClick={onLogout} className="w-full text-secondary-color bg-white  rounded-lg cursor-pointer w-100 px-3 py-2 ml-3  duration-300 active:scale-75">Logout</a>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li>
      <Link to="/login" className="flex items-center w-full justify-center px-5 py-2 duration-300 bg-white text-secondary-color rounded-lg hover:bg-neutral-100">Login</Link>
    </li>
  );
};

export default AuthNavbar;
