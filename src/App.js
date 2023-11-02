import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import List from "./List";
import Buy from "./Buy";
import Edit from "./Edit";
import MyButton from "./components/UI/MyButton";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  const resetApp = (e) => {
    e.preventDefault();
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <h1 className="title">Приложение "Список дел и покупок"</h1>
      <MyButton className="danger" onClick={(e) => resetApp(e)}>
        НАЧАТЬ ЗАНОВО
      </MyButton>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
