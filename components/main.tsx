import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import CollectionCard from './collectionCard.tsx';
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk]);
    }, [selectedPunk, punkListData])
    console.log(selectedPunk)
    return (
        <div className="main max-h-40 m-5">
            <div className="mainContent flex flex-row justify-between m-10 pb-8 border-b-2 border-gray-200">
                <div className="punkHighlight object-contain flex align-middle">
                    <div className="punkContainer">
                        <Image 
                            className="selectedPunk rounded-lg max-w-30 max-h-30"
                            src={activePunk?.image_original_url}
                            alt=''
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
                <div className="punkDetails text-gray-300 pr-64 mr-36">
                    <div className="title text-8xl font-black pb-10">
                        <h1>
                            {activePunk.name}
                        </h1>
                    </div>
                    <span className="itemNumber text-6xl text-gray-500 pt-64 mr-36">• #{activePunk.token_id}</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                    <Image
                        src={activePunk.owner.profile_img_url}
                        alt=""
                        height={100}
                        width={100}
                        className="ownerImage rounded-full" 
                    />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle">
                           <div>{activePunk.owner.address}</div>
                           <div className="ownerHandle text-orange">@{activePunk.owner.user.username}</div>
                        </div>
                        <div className="flex flex-row space-x-4">
                        <div className="ownerLink">
                            <Image src={instagramLogo} alt="instagram" width={50} height={50} />
                        </div>
                        <div className="ownerLink">
                            <Image src={twitterLogo} alt="twitter" width={50} height={50} />
                        </div>
                        <div className="ownerLink">
                            <Image src={moreIcon} alt="moreIcon" width={50} height={50} />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;