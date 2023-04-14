import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Users = lazy(() => import('../pages/Users/Users'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="tweets" element={<Users />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}