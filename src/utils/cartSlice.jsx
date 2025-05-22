import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //mutating the state here
    addItem: (state, action) => {
      const item = action.payload;
      const ispresent = state.items.find(
        (i) => i.card.info.id === item.card.info.id
      );
      if (ispresent) {
        ispresent.count += 1;
      } else {
        state.items.push({ ...item, count: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const index = state.items.findIndex((i) => i.card.info.id === itemId);
      if (index > -1) {
        if (state.items[index].count > 1) {
          state.items[index].count -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
     
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
