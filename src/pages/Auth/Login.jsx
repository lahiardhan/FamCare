import AOS from 'aos';
import "aos/dist/aos.css";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthInput from '../../components/atoms/AuthInput';
import Button from '../../components/atoms/Button';
import { setLogin } from '../../services/auth-api';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

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
        navigate('/');
      }
    }
  };

  return (
      <section className='min-h-screen flex flex-col justify-center items-center px-4 pt-20'>
        <div className="w-full xs:max-w-md p-6 bg-[#ffffff] rounded-md border border-secondary-color shadow-lg" data-aos="zoom-in">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-secondary-color">Login</h1>
          </div>
          <form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <AuthInput type="email" label="Email" placeholder="your@email.com" value={email} onChange={(event) => setEmail(event.target.value)} />
              <AuthInput type="password" label="Password" placeholder="******" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="space-y-2">
              <Button text="Sign In" onClick={onSubmit} className="w-full" />
              <p className="px-6 text-sm text-center dark:text-gray-400">Kamu belum punya akun?
                <Link to="/signup" className="underline duration-300 hover:text-secondary-color"> Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
  )
}

export default Login