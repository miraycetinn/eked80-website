import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NewsListPage from './pages/NewsListPage'
import NewsDetailPage from './pages/NewsDetailPage'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="haberler" element={<NewsListPage />} />
        <Route path="haberler/:slug" element={<NewsDetailPage />} />
      </Route>
    </Routes>
  )
}

export default Router

