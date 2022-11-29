import React, { useState } from 'react'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        console.log('email:', email);
        console.log('name:', name);
        console.log('password:', password);
    }

    return (
        <section className='px-4 py-8 lg:px-32 mt-20 w-full'>
            <div className=" max-w-lg p-6 rounded-md sm:p-10 border border-secondary-color shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-secondary-color">Register</h1>
                    <p className="text-sm ">Bikin akun dulu yaaa . . .</p>
                </div>
                <form novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Namanya Siapa?</label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="gatot kaca"
                                className="w-full px-3 py-2 border rounded-md border-secondary-color focus:border-primary-color "
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Emailnya juga dongg</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="gatotkaca@purl.com"
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
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md border-secondary-color  "
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />

                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-semibold rounded-md bg-secondary-color px-3 text-white"
                                onClick={onSubmit}
                            >Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">udah punya akun?
                            <a rel="noopener noreferrer" href="#" className="hover:text-secondary-color "> Login</a>.
                        </p>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default Register