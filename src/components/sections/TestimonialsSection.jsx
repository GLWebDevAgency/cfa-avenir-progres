import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Quote, MessageCircle } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { testimonials } from '@/data/testimonials'

// Premium Testimonial Card - Adaptive Theme
const TestimonialCardPremium = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      {/* Premium glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/30 to-secondary-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
      
      <div className="relative bg-white dark:bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-white/10 hover:border-transparent transition-all duration-500 h-full flex flex-col shadow-sm dark:shadow-none hover:shadow-2xl dark:hover:shadow-[0_0_50px_rgba(255,107,53,0.15)] hover:-translate-y-2">
        {/* Quote icon - with pulse effect */}
        <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform duration-300">
          <Quote className="w-5 h-5 text-white" />
        </div>
        
        {/* Stars */}
        <div className="flex gap-1 mb-4 mt-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 transition-transform duration-300 ${i < (testimonial.rating || 5) ? 'text-amber-400 fill-amber-400 group-hover:scale-110' : 'text-gray-200 dark:text-white/20'}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
        
        {/* Content */}
        <p className="text-gray-600 dark:text-white/70 leading-relaxed flex-1 mb-6 italic line-clamp-4 min-h-[6rem]">
          "{testimonial.content}"
        </p>
        
        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-white/10 mt-auto">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-500/30 ring-offset-2 ring-offset-white dark:ring-offset-gray-900">
              <img
                src={testimonial.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=ff6b35&color=fff&size=128`}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Verified badge */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
            <p className="text-sm text-primary-600 dark:text-primary-400">{testimonial.formation}</p>
            {testimonial.year && (
              <p className="text-xs text-gray-500 dark:text-white/40">Diplômé(e) {testimonial.year}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-secondary-500/5 dark:bg-secondary-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-[120px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50 dark:opacity-30" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-500/10 border border-secondary-500/20 text-secondary-600 dark:text-secondary-400 text-sm font-semibold rounded-full mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            Témoignages
          </motion.span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            Ils ont réussi leur reconversion avec{' '}
            <span className="text-gradient">
              Avenir&Progres
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-white/60 leading-relaxed">
            Découvrez les parcours inspirants de nos apprenants qui ont transformé leur vie professionnelle
          </p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white dark:border-gray-900">
                  {['L', 'M', 'S', 'A'][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">+2000 avis</p>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm text-gray-500 dark:text-white/50">4.8/5 moyenne</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCardPremium
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden mb-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            className="pb-14 testimonials-swiper-dark"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="pb-2 pt-6">
                <TestimonialCardPremium testimonial={testimonial} index={0} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            to="/avis" 
            className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-white/5 hover:border-primary-500/50 transition-all duration-300"
          >
            <span>Voir tous les témoignages</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
