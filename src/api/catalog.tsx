import { IGood } from "../type/goods";
import { axios } from "./config";

type IGetGoodsResponse = {
  status: number;
  data: IGood[];
};

export const getGoods = () =>
  axios.get<IGetGoodsResponse>(`/goods`).then((res) => res.data.data);
