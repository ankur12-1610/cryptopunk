import React from 'react';
import CollectionCard from './collectionCard.tsx';

const PunkList = ({ punkListData, setSelectedPunk }) => {
    return (
        <div className="projects container mx-auto max-w-8xl pt-64 mt-16">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:-mt-20 ">
        {punkListData.map(punk => (
            <div key={punk.token_id} onClick={() => setSelectedPunk(punkListData.length-punk.token_id-1)}>
            <CollectionCard 
                key={punk.token_id}
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_original_url}            
            />
            </div>
        ))}
            </div>
        </div>
    );
}

export default PunkList;