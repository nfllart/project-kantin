import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LoginStan() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = { 
            'username': email, 
            'password': password
        };
        axios({
            method: 'POST',
            url: 'https://ukk-p2.smktelkom-mlg.sch.id/api/login_stan',
            data: data, 
            headers: {
                makerID: '28'
            },
        })
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                if (res.data.user.role === 'admin_stan') {
                    localStorage.setItem("token", res.data.access_token);
                    alert("Login Berhasil");
                    navigate('/adminhome');
                } else {
                    alert("Invalid role for this login page");
                }
            } else {
                alert("username dan password salah");
            }
        })
        .catch((err) => {
            alert("username atau password salah");
        });
    };

    return (
        <div className="flex items-center bg-bg bg-cover bg-bottom justify-center min-h-screen">
            <div className="flex min-h-full flex-1 flex-col justify-center sm:max-w-md lg:px-8 py-20 p-12 bg-slate-700 shadow-md bg-opacity-50 rounded-lg">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                        Welcome to Canti'ne stan!
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-gray-600 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                onClick={() => navigate('/')}
                            >
                                Login Siswa
                            </button>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-gray-600 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                                onClick={() => navigate('/register')}
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
