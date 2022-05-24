import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import weth from '../assets/weth.png';

const CollectionCard = (props: any) => {
  
  const { id, name, traits, image, link } = props;

  return (
<div  className="flex flex-wrap place-items-center md:mb-5 ">
    <div className="overflow-hidden shadow-lg rounded-lg md:w-80 cursor-pointer m-auto hover:border-gradient-br-orange-blue-gray-50 border-gradient-br-blue-orange-gray-50 dark:border-gradient-br-blue-orange-bl dark:hover:border-gradient-br-orange-blue-bl border-transparent border-solid border-4 rounded-xl mb-5 mt-10">
            <Image alt={name} src={image} priority={true} height={380} width={400} className="dark:bg-white" />
            <div className="w-full p-4 -mt-2">
            <Link href="#" passHref>
              <a>
                <p className="dark:text-white font-black text-2xl font-Dosis mb-2">
                    {name}
                </p>
              </a>
            </Link>
            <p className="id dark:text-gray-400 font-regular font-Dosis mb-2 ">
            • #{id}
            </p>
                <div className="flex flex-wrap flex-row justify-starts items-center text-xs text-white font-light font-Dosis">
                    <div>
                    {traits[0]?.value}
                    </div>
                    <div className="pl-1">
                      <Image
                        alt={traits[0]?.value}
                        src={weth}
                        priority={true}
                        height={20}
                        width={15}
                      />
                    </div>
                </div>
            </div>
    </div>
</div>
  )
}

export default CollectionCard;