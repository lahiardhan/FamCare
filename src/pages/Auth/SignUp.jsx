import AOS from 'aos';
import "aos/dist/aos.css";
import cx from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthInput from '../../components/atoms/AuthInput';
import Button from '../../components/atoms/Button';
import { setSignUp } from '../../services/auth-api';

function SignUp() {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const classNames = {
		card: cx('w-full xs:max-w-md p-6 bg-[#ffffff] rounded-md border border-secondary-color shadow-lg')
	}

	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const onSubmit = async () => {
		const data = {
			'name': name,
			'username': username,
			'email': email,
			'password': password,
			'role': 'user',
			'status': 'Y'
		};

		const result = await setSignUp(data);
		if (result.error === 1) {
			Object.keys(result.fields).forEach((item, index) => {
				toast.error(result.fields[item].message);
			});
		} else {
			toast.success('SignUp Berhasil, Silahkan Login kembali!');
			navigate('/');
		}
		console.log('result: ', result);
	};

	return (
		<section className='min-h-screen flex flex-col justify-center items-center px-4 pt-20'>
			<div className={classNames.card} data-aos="zoom-in">
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold text-secondary-color">Sign Up</h1>
				</div>
				<form className="space-y-12 ng-untouched ng-pristine ng-valid" autoComplete="off">
					<div className="space-y-4">
						<AuthInput
							type="text"
							id="name"
							label="Kenalan dongg"
							placeholder="Nama kamu siapa"
							value={name}
							onChange={event => setName(event.target.value)}
						/>
						<AuthInput
							type="text"
							id="usernamehide"
							label="Yuk buat username kamu"
							placeholder="username"
							value={username}
							onChange={event => setUsername(event.target.value)}
							className="hidden"
						/>
						<AuthInput
							type="text"
							id="username"
							label="Yuk buat username kamu"
							placeholder="username"
							value={username}
							onChange={event => setUsername(event.target.value)}
						/>
						<AuthInput
							type="email"
							id="email"
							label="Email kamu apa??"
							placeholder="famcare@mail.com"
							value={email}
							onChange={event => setEmail(event.target.value)}
							autoComplete="off"
						/>
						<AuthInput
							type="password"
							id="password"
							label="Tinggal buat password nih"
							placeholder="******"
							value={password}
							onChange={event => setPassword(event.target.value)}
							autoComplete="off"
						/>
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
