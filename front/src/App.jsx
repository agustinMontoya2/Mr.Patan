import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { Login } from "./views/Login/Login";
import { Register } from "./views/Register/Register";
import { MyAppointments } from "./views/MyAppointments/MyAppointments";
import { ScheduleAppointment } from "./views/ScheduleAppointment/ScheduleAppointment";
import "./App.css";
import { Alimentos } from "./views/Alimentos/Alimentos";
import { Routes, Route, useLocation } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Ropa } from "./views/Ropa/Ropa";
import { Farmacia } from "./views/Farmacia/Farmacia";
import { Carrito } from "./views/Carrito/Carrito";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="conteiner">
        <header>
          <NavBar />
        </header>
        <main className="content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registrarse" element={<Register />} />
            <Route path="/alimentos" element={<Alimentos />} />
            <Route path="/farmacia" element={<Farmacia />} />
            <Route path="/ropa" element={<Ropa />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/cuenta/" element={<MyAppointments />} />
            <Route path="/cuenta/:id" element={<MyAppointments />} />
            <Route path="/agendar" element={<ScheduleAppointment />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
