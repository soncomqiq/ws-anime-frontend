import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import FavoritePage from "./pages/favorite";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/detail/:mal_id",
      element: <DetailPage />,
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
    },
  ], { basename: import.meta.env.DEV ? '/' : "/ws-anime-frontend/" });

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
