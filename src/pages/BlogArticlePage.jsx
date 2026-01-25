import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ChevronRight,
  BookOpen,
} from 'lucide-react'

import { SEO } from '@/components/common'
import { ContactFormMultiStep } from '@/components/forms'
import { CTASection } from '@/components/sections'
import { AvenirProgresLogo } from '@/assets/logos'
import { getArticleBySlug, getRelatedArticles, getRecentArticles } from '@/data/blogArticles'

const BlogArticlePage = () => {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  const relatedArticles = article ? getRelatedArticles(slug, 3) : []
  const recentArticles = getRecentArticles(4).filter(a => a.slug !== slug).slice(0, 3)

  // Redirect to 404 if article not found
  if (!article) {
    return <Navigate to="/404" replace />
  }

  // Format date
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Share URLs
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords={article.tags?.join(', ')}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-500 text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/70 mb-8"
          >
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white truncate max-w-[200px]">{article.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            {/* Category */}
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {article.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <AvenirProgresLogo className="h-6 w-auto" />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime} de lecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content - 2/3 */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700">
                {/* Excerpt */}
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700 leading-relaxed font-medium">
                  {article.excerpt}
                </p>

                {/* Article content */}
                <div className="article-content">
                  <ReactMarkdown
                    components={{
                      h2: ({children}) => (
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                          {children}
                        </h2>
                      ),
                      h3: ({children}) => (
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-3">
                          {children}
                        </h3>
                      ),
                      p: ({children}) => (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      ul: ({children}) => (
                        <ul className="my-4 space-y-2 pl-0">
                          {children}
                        </ul>
                      ),
                      li: ({children}) => (
                        <li className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{children}</span>
                        </li>
                      ),
                      strong: ({children}) => (
                        <strong className="font-bold text-gray-900 dark:text-white">
                          {children}
                        </strong>
                      ),
                      blockquote: ({children}) => (
                        <blockquote className="my-6 border-l-4 border-primary-500 bg-primary-50 dark:bg-primary-900/20 py-4 px-6 rounded-r-xl text-gray-700 dark:text-gray-300 italic">
                          {children}
                        </blockquote>
                      ),
                      hr: () => (
                        <hr className="my-8 border-t border-gray-200 dark:border-gray-700" />
                      ),
                      table: ({children}) => (
                        <div className="overflow-x-auto my-6">
                          <table className="min-w-full border-collapse rounded-lg overflow-hidden">
                            {children}
                          </table>
                        </div>
                      ),
                      thead: ({children}) => (
                        <thead className="bg-primary-500 text-white">
                          {children}
                        </thead>
                      ),
                      th: ({children}) => (
                        <th className="px-4 py-3 text-left font-semibold">
                          {children}
                        </th>
                      ),
                      td: ({children}) => (
                        <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                          {children}
                        </td>
                      ),
                      tr: ({children}) => (
                        <tr className="even:bg-gray-50 dark:even:bg-gray-800/50">
                          {children}
                        </tr>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="w-5 h-5 text-gray-400" />
                      <span className="font-semibold text-gray-700 dark:text-gray-300">Tags</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      Partager
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Partager sur Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Partager sur Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-full flex items-center justify-center transition-colors"
                        aria-label="Partager sur LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center p-2 shadow-sm">
                      <AvenirProgresLogo className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">Avenir & Formation</p>
                      <p className="text-gray-500 dark:text-gray-400">Centre de formation professionnelle</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back to blog */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 mt-8 text-primary-600 dark:text-primary-400 font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour au blog
              </Link>
            </motion.article>

            {/* Sidebar - 1/3 */}
            <aside className="lg:col-span-1 space-y-8">
              {/* CTA Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 sticky top-24"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Intéressé(e) par nos formations ?
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Demandez votre brochure gratuite
                  </p>
                </div>
                <ContactFormMultiStep />
              </motion.div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary-500" />
                    Articles similaires
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map(related => (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {related.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Recent Articles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Articles récents
                </h3>
                <div className="space-y-4">
                  {recentArticles.map(recent => (
                    <Link
                      key={recent.slug}
                      to={`/blog/${recent.slug}`}
                      className="block group"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                        {recent.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(recent.date).toLocaleDateString('fr-FR')}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default BlogArticlePage
