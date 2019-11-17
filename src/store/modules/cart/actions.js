export function addToCart(product) {
    return {
        type: "@cart/ADD",
        product
    }
}

export function removeFromCart(id) {
    return {
        type: "@cart/REMOVE",
        id
    }
}


export function updateFromCart(id, amount) {
    return {
        type: "@cart/UPDATE",
        id,
        amount
    }
}
