import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[rgb(23,23,23)] text-white min-h-screen">
        <Header />
        <Routes>
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
