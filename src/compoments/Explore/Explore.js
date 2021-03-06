import React, { useEffect, useState } from 'react';
import ExploreDetails from '../ExploreDetails/ExploreDetails';

const Explore = () => {
    const [explores, setExplores] = useState([])

    useEffect(() => {
        fetch('https://polar-anchorage-77729.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])
    return (
        <>
            <h1>More Watch Collection</h1>
            <div className='product-area'>
                {
                    explores.map(explore => <ExploreDetails
                        key={explore.id}
                        explore={explore}
                    ></ExploreDetails>)
                }
            </div>
        </>
    );
};

export default Explore;