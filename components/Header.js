import Image from 'next/image';
import React from 'react';

import instagram from '../assets/instagram.png';
import arrowdown from '../assets/arrowdown.png';
import search from '../assets/search.png';

const Header = () => {
    return (
        <div>
            <div className='flex'>
                {/* Left */}
                <div className='flex'>
                    <div className='w-28'>
                        <Image src={instagram} />
                    </div>
                    <div className='h3 w-3'>
                        <Image src={arrowdown} />
                    </div>
                </div>

                {/* Middle */}
                <div className=''>
                    <div>
                        <Image src={search} />
                    </div>
                    <input type="text" placeholder="Search" />
                </div>

                {/* Right */}
            </div>
        </div>
    )
}

export default Header;
