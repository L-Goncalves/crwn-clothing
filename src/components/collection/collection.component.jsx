import React from 'react';
import './collection.style.scss';
import CollectionItem from './colletion-item.component'


const CollectionPreview = ({title, items}) =>{
    return(

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
            .filter((item, idx) => idx < 4)
            .map( ({id, ...other}) =>{
            return (
            <CollectionItem key={id}  {...other}/>
            
            )
        })}
        </div>
    </div>
    )
}

export default CollectionPreview;