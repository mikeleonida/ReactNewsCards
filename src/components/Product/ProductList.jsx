import React from 'react'
import Product from './Product'

export default function ProductList() {
    const products = [
        {id:1, name:'TV'},
        {id:2, name:'Cell phone'},
        {id:3, name:'Oven'},
        {id:4, name:'Fridge'},
        {id:5, name:'Chair'},
    ]
    
    return (
        <table>
            {
                products.map(item =>
                        <Product id={item.id} name={item.name} />
                    )
            }
        </table>
    )
}
