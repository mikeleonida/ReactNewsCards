import React from 'react'
import ProductList from '../Product/ProductList'

function ClickHandler(data) {
    alert(data.value);
}

export default function Main() {
    return (
        <main>
            <input type="text" id="data" />
            <button class="btn btn-success" 
                onClick={(e) => ClickHandler(document.getElementById('data'))}>
                Add to cards
            </button>
            <br />
            <ProductList />
        </main>
    )
}