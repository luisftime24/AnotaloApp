import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../components/Login/LoginPage";
import { RegisterPage } from "../components/Login/RegisterPage";
import { NotesPage } from "../components/Notes/NotesPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};
