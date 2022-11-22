import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PATHS } from "../constants/paths";
import { Planets, Residents, PersonalDetails } from "../Pages";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATHS.PLANETS} element={<Planets />} />
      <Route path={PATHS.RESIDENTS} element={<Residents />} />
      <Route path={PATHS.PERSONAL_DETAILS} element={<PersonalDetails />} />
      <Route path="*" element={<Navigate replace to={PATHS.PLANETS} />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
