import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Users } from "../pages/Users/Users";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="tweets" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
