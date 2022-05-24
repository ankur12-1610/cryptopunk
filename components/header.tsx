import React from 'react';
import Image from 'next/image';
import SearchBar from './searchBar.tsx';
import ToggleButton from './toggleButton.tsx';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';

const Header = () => {
    return(
        <div className="header flex flex-row space-x-4 m-5 justify-around align-middle">
        <div className='text-white flex-none mt-1 ml-5'>
            <Image 
                src={punkLogo}
                alt='Cryptopunk Logo'
                width={200}
                height={80}
            />
        </div>
        <div className='flex flex-none m-6'>
        <SearchBar />
        </div>
        <div className="headerItems flex dark:text-gray-200 space-x-8 mt-10 flex-row justify-between text-black">
            <div>Drops</div>
            <div>Marketplace</div>
            <div>Create</div>
        </div>
        <div className='flex flex-none m-8'>
        <button className="rounded-full text-black w-40 h-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            GET IN
        </button>
        </div>
        <div className='m-6 pl-10'>
        <ToggleButton />
        </div>
        </div>
    )
}

export default Header;