import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <ul>
        <li onClick={() => navigate("/")}>Товары</li>
        <li onClick={() => navigate("/basket")}>Корзина</li>
      </ul>
    </div>
  );
};
export default Header;
