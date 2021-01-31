import React from 'react'

const Product = (props) => {
    return (
        <div>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
            </tr>
        </div>
    )
}

export default Product;