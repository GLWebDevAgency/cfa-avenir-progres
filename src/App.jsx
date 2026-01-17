import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'

// Lazy loading des pages pour le code splitting
const HomePage = lazy(() => import('@/pages/HomePage'))
const FormationsPage = lazy(() => import('@/pages/FormationsPage'))
const MethodePage = lazy(() => import('@/pages/MethodePage'))
const AlternancePage = lazy(() => import('@/pages/AlternancePage'))
const AvisPage = lazy(() => import('@/pages/AvisPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const QuiSommesNousPage = lazy(() => import('@/pages/QuiSommesNousPage'))
const TarifsPage = lazy(() => import('@/pages/TarifsPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-600 dark:text-white/60">Chargement...</p>
    </div>
  </div>
)

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="formations" element={<FormationsPage />} />
          <Route path="methode" element={<MethodePage />} />
          <Route path="alternance" element={<AlternancePage />} />
          <Route path="avis" element={<AvisPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="qui-sommes-nous" element={<QuiSommesNousPage />} />
          <Route path="tarifs" element={<TarifsPage />} />
          <Route path="blog" element={<BlogPage />} />
          {/* TODO: Article detail page */}
          {/* <Route path="blog/:slug" element={<BlogArticlePage />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
