import React, {useState, useEffect} from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {

    const [shopData, setShopDatat] = useState(SHOP_DATA);
    
    console.log(shopData);

    return(
    
        <div className="shop-page">
            {shopData.map(({id, ... otherCollectionProps}) =>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    )
    
    
}

export default ShopPage;