import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import { setLogin } from '../../services/auth-api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error('Email dan Password Wajib diisi!!!');
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message)
      } else {
        toast.success('Login berhasil');
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });
        window.location = "/";
      }
    }

  }
  return (
      <section className='px-4 py-16 mt-10 lg:px-32 lg:py-32 flex flex-wrap justify-center'>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 border border-secondary-color shadow-lg">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-secondary-color">Login</h1>
          </div>
          <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label for="email" className="block mb-2 text-sm">Email </label>
                <input
                  type="email"
                  placeholder="huhu@dicoding.com"
                  className="w-full px-3 py-2 border rounded-md border-secondary-color focus:border-primary-color "
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label for="password" className="text-sm">Password</label>
                </div>
                <input
                  type="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md border-secondary-color  "
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <Button text="Sign In" onClick={onSubmit} className="w-full" />
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                <a rel="noopener noreferrer" href="#" className="hover:text-secondary-color ">Sign up</a>.
              </p>
            </div>
            <ToastContainer
              position="top-center"
              theme="colored" />
          </form>
        </div>
      </section>
  )
}

export default Login