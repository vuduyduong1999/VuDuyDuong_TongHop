import { cartTypes } from '../types'

export const addProductToCart = (data, callback) => {
  return {
    type: cartTypes.ADD_PRODUCT_TO_CART,
    payload: { data, callback },
  }
}
export const minusProductToCart = (data, callback) => {
  return {
    type: cartTypes.MINUS_PRODUCT_TO_CART,
    payload: { data, callback },
  }
}
export const cancleProductToCart = (data, callback) => {
  return {
    type: cartTypes.CANCLE_PRODUCT_TO_CART,
    payload: { data, callback },
  }
}
