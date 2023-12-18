/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemQuntiry = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemQuntiry >= 0) {
        state.carts[itemQuntiry].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };

        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART": {
      const data = state.carts.filter((el) => el._id !== action.payload);

      return {
        ...state,
        carts: data,
      };
    }

    case "RMW_ONE":
      const itemRmwOne = state.carts.findIndex(
        (iteam) => iteam._id === action.payload._id
      );

      if (state.carts[itemRmwOne].quantity >= 1) {
        const delItem = (state.carts[itemRmwOne].quantity -= 1);
        console.log([...state.carts, delItem]);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemRmwOne].quantity === 1) {
        const data = state.carts.filter((el) => el._id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }

    case "EDIT_CART": {
      const data = state.carts.map((el) =>
        el._id === action.payload._id
          ? { ...el, text: action.payload.text }
          : el
      );

      return {
        ...state,
        carts: data,
      };
    }

    case "UPDATE_CART": {
      const arr = [];
      state.carts.map((item) => {
        if (item._id === action.payload._id) {
          item._id = action.payload._id;
        }
        arr.push(item);
      });

      return arr;
    }

    default:
      return state;
  }
};
