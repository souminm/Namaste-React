import { createSlice, current } from "@reduxjs/toolkit";
//createSlice is used to create a config for redux store

const cartSlice = createSlice({
   name:'cart',
   initialState:{
    items : []
   },
   reducers:{
    //mutating the state directly
    addItem : (state,action)=>{
      state.items.push(action.payload);
    },

    removeItem: (state) =>{
        state.items.pop();
    },
    //originalState = {items : ["pizza"]}
    clearItem : (state) =>{
        state.items.length = 0; //[]
        console.log(current(state));
        //return []; this new [] will be replaced inside originalState = []
        //{return {items : []}}; this new object will be replaced 
    },

   }
});

export const {addItem,removeItem,clearItem} = cartSlice.actions;
export default cartSlice.reducer;
