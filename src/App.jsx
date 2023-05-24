// import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
//import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";
import LoginPage from "./pages/LoginPage";
// import registerServiceWorker from './ServiceWorker';

const App = () => {
  // useEffect(() => {
  //   registerServiceWorker();
  // });
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} >
        </Route>
        <Route path="/login" element={<LoginPage />} >
        </Route>
        <Route path="/*" element={<AdminLayout />} >
        </Route>
      </Routes>
    </>
  );
};
export default App;
