import "./App.css"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import Header from "./common/Header"
import Footer from "./common/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function Base() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App