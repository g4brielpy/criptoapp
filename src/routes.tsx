import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./layout";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:cripto" element={<Detail />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
