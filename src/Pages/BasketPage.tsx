import { useDispatch, useSelector } from "react-redux";

import { IState } from "../store/reducer";
import { addGood, removeAllGoods, removeGood } from "../store/actions";

import Header from "../components/Header";

const BasketPage = () => {
  const goods = useSelector((state: IState) => state.goods);
  const basket = useSelector((state: IState) => state.basket);

  const dispatch = useDispatch();

  const basketGoods = goods.filter((good) => basket[good.id]);

  const onRemoveGood = (goodId: number) => {
    dispatch(removeGood(goodId));
  };
  const onAdd = (id: number) => {
    dispatch(addGood(id));
  };

  const onRemoveAllGoods = (id: number) => {
    dispatch(removeAllGoods(id));
  };
  return (
    <div>
      <Header />
      <div className="list">
        <ul>
          {basketGoods.map((good) => (
            <li key={good.id}>
              {good.name}
              <button className="button" onClick={() => onAdd(good.id)}>
                +
              </button>
              <span>{basket[good.id]}</span>
              <button onClick={() => onRemoveGood(good.id)} className="button">
                -
              </button>
              <button
                className="button"
                onClick={() => onRemoveAllGoods(good.id)}
              >
                Убрать все
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default BasketPage;
