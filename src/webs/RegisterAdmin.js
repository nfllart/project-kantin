import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function RegisterAdmin() {
  const navigate = useNavigate();
  const [nama_stan, setNama_stan] = useState("");
  const [nama_pemilik, setNamaPemilik] = useState("");
  const [telp, setTelp] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nama_stan || !nama_pemilik || !telp || !username || !password) {
      setError("All fields are required");
      return;
    }

    const data = {
      nama_stan,
      nama_pemilik,
      telp,
      username,
      password,
    };

    axios({
      method: 'POST',
      url: 'https://ukk-p2.smktelkom-mlg.sch.id/api/register_stan',
      data: data,
      headers: {
        makerID: '28',
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Register Admin telah berhasil");
          navigate('/');
        } else {
          setError('Registration failed');
        }
      })
      .catch((err) => {
        setError('Username atau password sudah terpakai');
      });
  };

  return (
    <div className="flex items-center bg-bg bg-cover bg-bottom justify-center min-h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center sm:max-w-md lg:px-8 py-12 p-12 bg-slate-500 shadow-md bg-opacity-50 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold tracking-tight text-blacky">
            Register stan Canti'ne!
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <div className="text-red-500 text-sm">{error}</div>}
            <div>
              <label htmlFor="nama_stan" className="block text-sm font-medium text-gray-900">
                Nama Stan
              </label>
              <div className="mt-2">
                <input
                  id="nama_stan"
                  name="nama_stan"
                  type="text"
                  required
                  value={nama_stan}
                  onChange={(e) => setNama_stan(e.target.value)}
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nama_pemilik" className="block text-sm font-medium text-gray-900">
                Nama Pemilik
              </label>
              <div className="mt-2">
                <input
                  id="nama_pemilik"
                  name="nama_pemilik"
                  type="text"
                  required
                  value={nama_pemilik}
                  onChange={(e) => setNamaPemilik(e.target.value)}
                  autoComplete="address"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telp" className="block text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="telp"
                  name="telp"
                  type="text"
                  required
                  value={telp}
                  onChange={(e) => setTelp(e.target.value)}
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
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

            {/* button register */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-slate-500 px-4 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              > 
              <Link to="/register">
                Register as student
              </Link>
              </button>
            </div>

          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{' '}
              <Link to="/" className="underline font-semibold">
                Log in here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}