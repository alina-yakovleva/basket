import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "../api/catalog";

import { addGood, setGoods } from "../store/actions";
import { IState } from "../store/reducer";

import Header from "../components/Header";

const MainPage: FC = () => {
  const goods = useSelector((state: IState) => state.goods);
  const basket = useSelector((state: IState) => state.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    getGoods().then((goods) => dispatch(setGoods(goods)));
  }, []);

  const onAdd = (id: number) => {
    dispatch(addGood(id));
  };
  return (
    <div>
      <Header />
      <div className="list">
        <ul>
          {goods.map((good) => (
            <li key={good.id}>
              {good.name}
              <button className="button" onClick={() => onAdd(good.id)}>
                В корзину
              </button>
              <span
                style={{
                  border: "1px solid bisque",
                  padding: "15px",
                  marginLeft: "10px",
                }}
              >
                {basket[good.id] || 0}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
