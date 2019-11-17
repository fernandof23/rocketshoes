import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { formatPrice } from '../../util/format'
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import * as cartActions from '../../store/modules/cart/actions'

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, removeFromCart, updateFromCart, total }) {
    function handleDecrement(product) {
        updateFromCart(product.id, product.amount - 1)

    }

    function handleIncrement(product) {
        updateFromCart(product.id, product.amount + 1)

    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th> </th>
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr>
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.priceFormated}</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7159c1"
                                            onClick={() => handleDecrement(product)}
                                        />
                                    </button>
                                    <input type="number" readOnly value={product.amount} />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7159c1"
                                            onClick={() => handleIncrement(product)}
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subtotal}</strong>
                            </td>
                            <td>
                                <button type="button" onClick={() => removeFromCart(product.id)}>
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar Pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount)
    })),
    total: formatPrice(state.cart.reduce((total, product) => {
        return total + product.price * product.amount
    }, 0))
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
