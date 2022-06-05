import { IGood } from "../type/goods";
import {
  ADD_GOOD,
  SET_GOODS,
  REMOVE_GOOD,
  REMOVE_ALL_GOODS,
} from "./constants";

export const setGoods = (goods: IGood[]) => ({
  type: SET_GOODS,
  payload: goods,
});

export const addGood = (id: number) => ({
  type: ADD_GOOD,
  payload: id,
});

export const removeGood = (id: number) => ({
  type: REMOVE_GOOD,
  payload: id,
});

export const removeAllGoods = (id: number) => ({
  type: REMOVE_ALL_GOODS,
  payload: id,
});
