/* eslint-disable no-case-declarations */
import _ from 'lodash'
import { cartTypes } from '../types'

const initState = []

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART:

      const newProduct = action?.payload?.data
      const indexOldProduct = _.findIndex(state, (item) => item.id === newProduct.id)
      if (indexOldProduct === -1) {
        newProduct.number = 1
        return [...state, newProduct]
      }
      state[indexOldProduct].number += 1
      return [...state]
    case cartTypes.MINUS_PRODUCT_TO_CART:
      const pro = action?.payload?.data
      const indexOldPro = _.findIndex(state, (item) => item.id === pro.id)
      if (indexOldPro === -1) {
        pro.number = 1
        return [...state, pro]
      }
      if (state[indexOldPro].number === 1) {
        const newState = _.filter(state, (item) => item.id !== pro.id)
        return [...newState]
      }
      state[indexOldPro].number -= 1
      return [...state]
    case cartTypes.CANCLE_PRODUCT_TO_CART:
      const product = action?.payload?.data
      const newState = _.filter(state, (item) => item.id !== product.id)
      return [...newState]
    default:
      return state
  }
}

export default cartReducer
