import {createSlice} from '@reduxjs/toolkit'
import { shops } from '../data/defaultData'

export const shopSlice = createSlice({
    name: "shops",
    initialState: {value: shops},
    reducers: {
        addShop: (state, action) => {
            state.value.push(action.payload)
        },
        deleteShop: (state, action) => {
            state.value = state.value.filter((shop) => shop.id !== action.payload.id)
        },
        updateShop: (state, action) => {
            state.value.map(shop => {
                if(shop.id === action.payload.id){
                    shop.shop_name = action.payload.shop_name
                    shop.area = action.payload.area
                    shop.category = action.payload.category
                    shop.opening_date = action.payload.opening_date
                    shop.closing_date = action.payload.closing_date
                }
            })
        }

    }
})

export const { addShop, deleteShop, updateShop } = shopSlice.actions
export default shopSlice.reducer