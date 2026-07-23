import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageShell } from './components/layout/PageShell/PageShell'
import { HomePage } from './pages/HomePage'
import { ProductsPage } from './pages/ProductsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageShell />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
