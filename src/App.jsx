import Router from "./layouts/Router"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Plans from "./pages/Plans/Plans"
import Shop from "./pages/Shop/Shop"
import { BrowserRouter } from "react-router-dom"


const App = () => {
  return (
    <div className="font-sans">
      {/* <Home />
      {/* <Login /> */}
      {/* <Contact /> */}
      {/* <Plans /> */}
      {/* <Shop /> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App