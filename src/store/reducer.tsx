import { IGood } from "../type/goods";
import {
  ADD_GOOD,
  REMOVE_ALL_GOODS,
  REMOVE_GOOD,
  SET_GOODS,
} from "./constants";

export interface IBasket {
  [key: number]: number;
}

export interface IState {
  goods: IGood[];
  basket: IBasket;
}
export interface IAction {
  type: string;
  payload: any;
}
const initialState: IState = {
  goods: [],
  basket: {},
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_GOODS: {
      const goods: IGood[] = action.payload;
      return { ...state, goods: goods };
    }
    case ADD_GOOD: {
      const id: number = action.payload;
      const currentValue: number | undefined = state.basket[id];
      const value: number = currentValue ? currentValue + 1 : 1;

      return { ...state, basket: { ...state.basket, [id]: value } };
    }
    case REMOVE_GOOD: {
      const id: number = action.payload;
      const currentValue: number = state.basket[id];
      const value: number = currentValue - 1;
      return { ...state, basket: { ...state.basket, [id]: value } };
    }
    case REMOVE_ALL_GOODS: {
      const id: number = action.payload;
      return { ...state, basket: { ...state.basket, [id]: 0 } };
    }
    default:
      return state;
  }
};
export default reducer;
