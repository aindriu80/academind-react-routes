import './mvp.css'
import { Route } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Products from './pages/Products'
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  )
}

export default App

// https://localhost:8000/welcome => Welcome Components
// https://localhost:8000/products => Products Components
// https://localhost:8000/product-detail/product-1
