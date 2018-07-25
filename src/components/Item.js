import React from 'react'

const Item = props => {
    return (
        <div className='item' onClick={props.onClick} data-key={props._key}>
            <h3>{props.item}</h3>
        </div>
    )
}
export default Item