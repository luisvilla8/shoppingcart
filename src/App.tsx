import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ShoppingCartState } from "./context/ShoppingCartState"
import { Home, Store, About } from "./pages/index"
import { ShoppingCart } from "./pages/ShoppingCart"

function App() {
  return (
    <>
      <ShoppingCartState>
        <Navbar />
        <div className="py-2 px-8 bg-slate-800 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/shopping-cart" element={<ShoppingCart />}/>
          </Routes>
        </div>
      </ShoppingCartState>
    </>
  )
}

export default App
