import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import BoxPage from "./components/BoxPage";
import FormPage from "./components/FormPage";
import ItemListPage from "./components/ItemListPage";
import TogglePage from "./components/TogglePage";
import TodoListPage from "./components/TodoListPage";
import EffectPage from "./components/EffectPage";
import LatStatePage from "./components/LatStatePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <nav className="mb-4">
          <Link
            to="/Box"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Box Page
          </Link>
          <Link
            to="/Form"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Form Page
          </Link>
          <Link
            to="/Item"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Item Page
          </Link>
          <Link
            to="/Toggle"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Toggle Page
          </Link>
          <Link
            to="/Todo"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Todo List
          </Link>
          <Link
            to="/Effect"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Lat useEffect
          </Link>
          <Link
            to="/State"
            className="mx-2 bg-emerald-600 text-white p-2 rounded"
          >
            Link Lat useState2
          </Link>
        </nav>
        <Routes>
          <Route
            path="/Box"
            element={<BoxPage />}
          />
          <Route
            path="/Form"
            element={<FormPage />}
          />
          <Route
            path="/Item"
            element={<ItemListPage />}
          />
          <Route
            path="/Toggle"
            element={<TogglePage />}
          />
          <Route
            path="/Todo"
            element={<TodoListPage />}
          />
          <Route
            path="/Effect"
            element={<EffectPage />}
          />
          <Route
            path="/State"
            element={<LatStatePage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
