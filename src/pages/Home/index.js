import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux'
import { MdShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import * as cartActions from '../../store/modules/cart/actions'

import api from '../../services/api';

import { ProductList } from './styles';

export default function Home({ addToCartRequest }) {
    const [products, setProducts] = useState([])

    const amount = useSelector(state => state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount
    }, {}))

    const dispatch = useDispatch()

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get('/products')
            const data = response.data.map(product => ({
                ...product,
                priceFormated: formatPrice(product.price)
            }))
            setProducts(data)
        }
        loadProducts()
    }, [])

    function handleAddProduct(id) {
        dispatch(cartActions.addToCartRequest(id))
    };



    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormated}</span>
                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdShoppingCart size={16} color="#fff" />{amount[product.id] || 0}
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );

}


