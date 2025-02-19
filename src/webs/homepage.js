import React, { useState } from 'react';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
    const [isOpen, setIsOpen] = useState(false);
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();
    
    const products = [
        { name: 'Food', href: '#', description: 'Delicious food items' },
        { name: 'Drink', href: '#', description: 'Refreshing drinks' },
    ];

    const menuItems = [
        { name: 'Nasi Goreng', stan: 1, price: 'Rp 20.000', image: 'https://source.unsplash.com/150x150/?fried-rice' },
        { name: 'Mie Ayam', stan: 3, price: 'Rp 18.000', image: 'https://source.unsplash.com/150x150/?noodles' },
        { name: 'Sate Ayam', stan: 5, price: 'Rp 25.000', image: 'https://source.unsplash.com/150x150/?satay' },
        { name: 'Es Teh Manis', stan: 2, price: 'Rp 5.000', image: 'https://source.unsplash.com/150x150/?iced-tea' },
    ];

    const handleQuantityChange = (name, delta) => {
        setQuantities(prev => ({
            ...prev,
            [name]: Math.max((prev[name] || 0) + delta, 0)
        }));
    };

    return (
        <div>
            <nav className="bg-gray-900 text-white flex items-center justify-between p-4 z-50 relative">
                <div className="text-2xl font-bold">Canti'ne</div>
                <div className="flex space-x-6 z-30">
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-white hover:text-yellow-500">
                            Menu
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                        </Popover.Button>
                        <Popover.Panel className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div key={item.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50">
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <ChevronDownIcon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
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
                    <button onClick={() => setIsOpen(!isOpen)} className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition relative z-20">Student</button>
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 z-30">
                            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Setting</button>
                            <button onClick={() => navigate('/')} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</button>
                        </div>
                    )}
                </div>
            </nav>

            <div className="h-80 w-full bg-cover bg-center flex items-center justify-center relative after:absolute after:inset-0 after:bg-black after:opacity-50"
                style={{ backgroundImage: "url('https://cdn.prod.website-files.com/62e628ccdd3aacd9841de18b/62ead78b6f662a4cb7295ab6_Carousel:Canteen.jpg')" }}>
                <h1 className="text-white text-6xl font-bold drop-shadow-lg relative z-10">Welcome to Cantine!</h1>
            </div>
            
            <div className='flex flex-col justify-center items-center mt-6'>
                <p className='text-2xl font-bold'>Menu Stan</p>
                <p className='text-lg mt-1'>Makanan dan minuman yang disajikan oleh para stan kantin</p>
            </div>

            <div className='flex justify-center space-x-6 mt-6'>
                {menuItems.map((item, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg p-4 w-48 text-center'>
                        <img src={item.image} alt={item.name} className='w-full h-32 object-cover rounded-lg' />
                        <h3 className='mt-2 text-lg font-bold'>{item.name}</h3>
                        <p className='text-gray-700'>Stan {item.stan}</p>
                        <p className='text-yellow-500 font-semibold'>{item.price}</p>
                        <div className='flex items-center justify-center space-x-2 mt-2'>
                            <button onClick={() => handleQuantityChange(item.name, -1)} className='bg-red-500 text-white px-2 py-1 rounded'>-</button>
                            <span className='text-lg font-semibold'>{quantities[item.name] || 0}</span>
                            <button onClick={() => handleQuantityChange(item.name, 1)} className='bg-green-500 text-white px-2 py-1 rounded'>+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col justify-center items-center mt-6'>
                <p className='text-2xl font-bold'>Menu makanan</p>
            </div>

            <div className='flex justify-center space-x-6 mt-6'>
                {menuItems.map((item, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg p-4 w-48 text-center'>
                        <img src={item.image} alt={item.name} className='w-full h-32 object-cover rounded-lg' />
                        <h3 className='mt-2 text-lg font-bold'>{item.name}</h3>
                        <p className='text-gray-700'>Stan {item.stan}</p>
                        <p className='text-yellow-500 font-semibold'>{item.price}</p>
                        <div className='flex items-center justify-center space-x-2 mt-2'>
                            <button onClick={() => handleQuantityChange(item.name, -1)} className='bg-red-500 text-white px-2 py-1 rounded'>-</button>
                            <span className='text-lg font-semibold'>{quantities[item.name] || 0}</span>
                            <button onClick={() => handleQuantityChange(item.name, 1)} className='bg-green-500 text-white px-2 py-1 rounded'>+</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex flex-col justify-center items-center mt-6'>
                <p className='text-2xl font-bold'>Menu minuman</p>
            </div>
            
            <div className='flex justify-center space-x-6 mt-6'>
                {menuItems.map((item, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg p-4 w-48 text-center'>
                        <img src={item.image} alt={item.name} className='w-full h-32 object-cover rounded-lg' />
                        <h3 className='mt-2 text-lg font-bold'>{item.name}</h3>
                        <p className='text-gray-700'>Stan {item.stan}</p>
                        <p className='text-yellow-500 font-semibold'>{item.price}</p>
                        <div className='flex items-center justify-center space-x-2 mt-2'>
                            <button onClick={() => handleQuantityChange(item.name, -1)} className='bg-red-500 text-white px-2 py-1 rounded'>-</button>
                            <span className='text-lg font-semibold'>{quantities[item.name] || 0}</span>
                            <button onClick={() => handleQuantityChange(item.name, 1)} className='bg-green-500 text-white px-2 py-1 rounded'>+</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}