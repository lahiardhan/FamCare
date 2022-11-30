import React from 'react'

function Login() {
    return (
        <section className='px-4 py-8 lg:px-32 mt-24 flex flex-wrap justify-center'>
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
                                name="email"
                                id="email"
                                placeholder="huhu@dicoding.com"
                                className="w-full px-3 py-2 border rounded-md border-secondary-color focus:border-primary-color " />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                className="w-full px-3 py-2 border rounded-md border-secondary-color  " />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-secondary-color px-3 text-white">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-400">Don't have an account yet?
                            <a rel="noopener noreferrer" href="#" className="hover:text-secondary-color ">Sign up</a>.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login