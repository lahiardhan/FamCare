import AOS from 'aos';
import "aos/dist/aos.css";
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import AuthInput from '../../components/atoms/AuthInput';

function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const onSubmit = () => {
		console.log('email:', email);
		console.log('name:', name);
		console.log('password:', password);
	};

	return (
		<section className='min-h-screen flex flex-col justify-center items-center px-4 pt-20'>
			<div className="w-full xs:max-w-md p-6 bg-[#ffffff] rounded-md border border-secondary-color shadow-lg" data-aos="zoom-in">
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold text-secondary-color">Sign Up</h1>
					<p className="text-sm ">Bikin akun dulu yaaa...</p>
				</div>
				<form noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
					<div className="space-y-4">
						<AuthInput type="name" label="Namanya Siapa??" placeholder="Gatot Kaca" value={name} onChange={event => setName(event.target.value)} />
						<AuthInput type="email" label="Emailnya juga dongg" placeholder="gatotkaca@purl.com" value={email} onChange={event => setEmail(event.target.value)} />
						<AuthInput type="password" label="Yuk buat password kamu" placeholder="******" value={password} onChange={event => setPassword(event.target.value)} />
					</div>
					<div className="space-y-2">
						<div>
							<Button text="Sign Up" onClick={onSubmit} className="w-full" />
						</div>
						<p className="px-6 text-sm text-center dark:text-gray-400">Udah punya akun?
							<Link to="/login" className="underline duration-300 hover:text-secondary-color">Login</Link>
						</p>
					</div>
				</form>
			</div>
		</section >
	)
}

export default SignUp;
