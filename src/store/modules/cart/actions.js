export function addToCartRequest(id) {
    return {
        type: "@cart/ADD_REQUEST",
        id
    }
}

export function addToCartSucess(product) {
    return {
        type: "@cart/ADD_SUCESS",
        product
    }
}

export function removeFromCart(id) {
    return {
        type: "@cart/REMOVE",
        id
    }
}


export function updateFromCartRequest(id, amount) {
    return {
        type: "@cart/UPDATE_REQUEST",
        id,
        amount
    }
}

export function updateFromCartSucess(id, amount) {
    return {
        type: "@cart/UPDATE_SUCESS",
        id,
        amount
    }
}
