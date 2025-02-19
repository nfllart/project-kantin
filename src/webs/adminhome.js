import React, { useState } from 'react';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminHome() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [nama_makanan, setNama_makanan] = useState('');
    const [jenis, setjenis] = useState('');
    const [harga, setharga] = useState('');
    const [foto, setfoto] = useState(null);
    const [deskripsi, setdeskripsi] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState('');
    
    const products = [
        { name: 'Food', href: '#', description: 'Delicious food items' },
        { name: 'Drink', href: '#', description: 'Refreshing drinks' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nama_makanan || !jenis || !harga || !foto || !deskripsi) {
            setError('All fields are required');
            return;
        }
        if (harga < 0) {
            setError('Price cannot be negative');
            return;
        }

        const formData = new FormData();
        formData.append('nama_makanan', nama_makanan);
        formData.append('jenis', jenis);
        formData.append('harga', harga);
        formData.append('foto', foto);
        formData.append('deskripsi', deskripsi);

        console.log('Form Data:', formData);

        axios({
            method: 'POST',
            url: 'https://ukk-p2.smktelkom-mlg.sch.id/api/tambahmenu',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
                makerID: '28',
            },
        })
        .then((res) => {
            console.log('Server Response:', res);
            if (res.status === 200) {
                alert('Menu added successfully!');
                setIsAdding(false);
                setNama_makanan('');
                setjenis('');
                setharga('');
                setfoto(null);
                setdeskripsi('');
            } else {
                setError('Failed to add menu.');
            }
        })
        .catch((err) => {
            console.error('Error adding menu:', err);
            setError('Failed to add menu.');
        });
    };

    return (
        <div>
            {/* Navigation Bar */}
            <nav className="bg-gray-900 text-white flex items-center justify-between p-4 z-50 relative">
                <div className="text-2xl font-bold">Canti'ne</div>
                <div className="flex space-x-6 z-30">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-white hover:text-yellow-500">
                            Menu
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </Popover.Button>
                        <Popover.Panel className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChevronDownIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">{item.name}</a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Popover.Panel>
                    </Popover>
                    <button className="hover:text-yellow-500">Stan</button>
                    <button className="hover:text-yellow-500">Chart</button>
                </div>
                <div className="relative">
                    <button onClick={() => setIsOpen(!isOpen)} className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition relative z-20">
                        Admin Stan
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 z-30">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Setting
                            </button>
                            <button onClick={() => navigate('/')} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div className="h-80 w-full bg-cover bg-center flex items-center justify-center relative after:absolute after:inset-0 after:bg-black after:opacity-50"
                style={{ backgroundImage: "url('https://s3.amazonaws.com/fathom_media/photos/the-new-york-pizza-project-mikes-pizza-upper-east-side-shop_big.jpg')" }}>
                <h1 className="text-white text-6xl font-bold drop-shadow-lg relative z-10">Welcome to Cantine!</h1>
            </div>

            {/* Menu Stan Section */}
            <div className="flex flex-col justify-center items-center mt-6">
                <p className="text-2xl font-bold">Add Menu Stan</p>
                <p className="text-lg mt-1">Tambahkan menu kalian</p>
            </div>

            <div className='p-6'>
                <div className='flex justify-center my-4'>
                    <button onClick={() => setIsAdding(true)} className='bg-blue-500 text-white px-4 py-2 rounded'>Tambah Menu</button>
                </div>

                {isAdding && (
                    <div className='bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto'>
                        <h2 className='text-lg font-bold mb-2'>Tambah Menu Baru</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && <div className="text-red-500 text-sm">{error}</div>}
                            <input type='text' name='nama_makanan' placeholder='Nama Menu' value={nama_makanan} onChange={(e) => setNama_makanan(e.target.value)} className='w-full p-2 border rounded mb-2' />
                            <select name='jenis' value={jenis} onChange={(e) => setjenis(e.target.value)} className='w-full p-2 border rounded mb-2'>
                                <option value='Makanan'>Makanan</option>
                                <option value='Minuman'>Minuman</option>
                            </select>
                            <input type='number' name='harga' placeholder='Harga' value={harga} onChange={(e) => setharga(e.target.value)} className='w-full p-2 border rounded mb-2' min="0" />
                            <input type='file' name='foto' accept='image/*' onChange={(e) => setfoto(e.target.files[0])} className='w-full p-2 border rounded mb-2' />
                            <textarea name='deskripsi' placeholder='Deskripsi' value={deskripsi} onChange={(e) => setdeskripsi(e.target.value)} className='w-full p-2 border rounded mb-2'></textarea>
                            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded mr-2'>Simpan</button>
                            <button type='button' onClick={() => setIsAdding(false)} className='bg-red-500 text-white px-4 py-2 rounded'>Batal</button>
                        </form>
                    </div>
                        )}
            </div>
        </div>
    );
}
