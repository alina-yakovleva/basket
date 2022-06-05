import { Route, Routes } from "react-router-dom";
import Layout from "./components/LayOut";
import BasketPage from "./Pages/BasketPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<MainPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
