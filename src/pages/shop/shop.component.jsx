import React from 'react';

import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview.collection.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        // Destructures collections from this.state
        const {collections} = this.state;
        return(
            <div className='shop-page'>
                {collections.map(({ id, ...OtherCollectionProps }) =>(
                    // Looks like it is possible to destructure and pass to another component its props
                    // PreviewCollection is receiving props and using these props but these are not actually defined in 
                    // PreviewCollection Component itself
                    <PreviewCollection key={id} {...OtherCollectionProps}/>
                )) 
                }
            </div>
        )
    }
}

export default ShopPage;