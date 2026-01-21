import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Clock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { ContactFormMultiStep } from "@/components/forms";
import { siteConfig } from "@/data/siteConfig";
import {
  OnlineLearning,
  GraduationCap,
  CareerGrowth,
} from "@/assets/illustrations";
import {
  QualiopiBadge,
  RNCPBadge,
  FranceTravailLogo,
  OPCOLogo,
} from "@/assets/logos";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image - Blurred for optimal text readability */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-students.webp"
          alt=""
          className="w-full h-full object-cover blur-[2px] scale-105"
        />
        {/* Dark overlay with brand colors gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/80 via-gray-900/70 to-[#1e3a5f]/80" />
        {/* Red accent gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#b91c1c]/30 via-transparent to-transparent" />
        {/* Blue accent gradient from top-left */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 via-transparent to-[#b91c1c]/15" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-15" />

      {/* Animated glow blobs - Brand colors */}
      <div className="glow-blob glow-blob-orange w-[600px] h-[600px] -top-40 -right-40 animate-pulse-glow opacity-40 dark:opacity-50" />
      <div
        className="glow-blob glow-blob-purple w-[500px] h-[500px] top-1/2 -left-40 animate-pulse-glow opacity-30 dark:opacity-40"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="glow-blob glow-blob-cyan w-[400px] h-[400px] bottom-20 right-1/4 animate-pulse-glow opacity-20 dark:opacity-30"
        style={{ animationDelay: "-4s" }}
      />

      {/* Floating decorative illustrations - Background Layer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left - GraduationCap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute top-20 left-[5%] hidden lg:block opacity-[0.08] dark:opacity-[0.12]"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <GraduationCap
              size={120}
              primaryColor="#ff6b35"
              secondaryColor="#10b981"
            />
          </motion.div>
        </motion.div>

        {/* Top right - OnlineLearning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-32 right-[8%] hidden lg:block opacity-[0.06] dark:opacity-[0.10]"
        >
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <OnlineLearning
              size={100}
              primaryColor="#ff6b35"
              secondaryColor="#0ea5e9"
            />
          </motion.div>
        </motion.div>

        {/* Middle left - CareerGrowth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute top-[45%] left-[3%] hidden xl:block opacity-[0.07] dark:opacity-[0.11]"
        >
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <CareerGrowth
              size={90}
              primaryColor="#10b981"
              secondaryColor="#ff6b35"
            />
          </motion.div>
        </motion.div>

        {/* Bottom left - GraduationCap smaller */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-[25%] left-[10%] hidden lg:block opacity-[0.05] dark:opacity-[0.08]"
        >
          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, -6, 0] }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <GraduationCap
              size={80}
              primaryColor="#0ea5e9"
              secondaryColor="#ff6b35"
            />
          </motion.div>
        </motion.div>

        {/* Bottom center-right - OnlineLearning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-[15%] right-[15%] hidden xl:block opacity-[0.06] dark:opacity-[0.09]"
        >
          <motion.div
            animate={{ y: [0, -14, 0], x: [0, -8, 0] }}
            transition={{
              duration: 7.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <OnlineLearning
              size={110}
              primaryColor="#10b981"
              secondaryColor="#0ea5e9"
            />
          </motion.div>
        </motion.div>

        {/* Center right - CareerGrowth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute top-[60%] right-[5%] hidden lg:block opacity-[0.05] dark:opacity-[0.08]"
        >
          <motion.div
            animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
            transition={{
              duration: 8.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <CareerGrowth
              size={95}
              primaryColor="#ff6b35"
              secondaryColor="#0ea5e9"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-6 pb-20 md:pt-8 md:pb-24 lg:py-0 relative z-10">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 md:mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-400" />
              <span className="text-xs md:text-sm font-semibold text-white/90">
                Nouvelle session
              </span>
              <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/50" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-6"
            >
              <span className="text-white">Lancez votre </span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 bg-clip-text text-transparent drop-shadow-lg">
                reconversion
              </span>
              <br />
              <span className="text-white">professionnelle</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Titres professionnels RNCP en alternance, 100% financés.
            </motion.p>

            {/* CTA buttons - Hidden on mobile (form is the main CTA) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden md:flex flex-row items-center gap-4 mb-10"
            >
              <Link to="/formations" className="btn btn-primary btn-lg group">
                <span>Découvrir nos formations</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="btn btn-secondary group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <span className="text-white">Voir la vidéo</span>
              </button>
            </motion.div>

            {/* Stats row - Hidden on mobile to save space */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8"
            >
              {[
                {
                  icon: Award,
                  value: `${siteConfig.stats.successRate}%`,
                  label: "Réussite",
                },
                {
                  icon: Users,
                  value: `${siteConfig.stats.learners}+`,
                  label: "Apprenants",
                },
                { icon: Clock, value: "24/7", label: "Accès" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 lg:w-5 lg:h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs lg:text-sm text-white/60">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form with Premium Glassmorphism Design */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md lg:max-w-lg relative"
          >
            {/* Premium animated glow behind form */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-secondary-500/10 to-accent-500/20 dark:from-primary-500/30 dark:via-secondary-500/15 dark:to-accent-500/30 rounded-[2rem] blur-2xl animate-pulse-glow" />

            {/* Premium glassmorphism border */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-white/50 via-white/20 to-white/50 dark:from-white/20 dark:via-white/5 dark:to-white/20 rounded-3xl" />

            {/* Form container - Ultra Premium Glassmorphism */}
            <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_60px_rgba(255,107,53,0.1)] overflow-hidden z-10">
              {/* Inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent dark:from-white/5 pointer-events-none" />

              {/* Form content */}
              <div className="relative p-5 md:p-7">
                <div className="text-center mb-5">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                    Demandez votre brochure gratuite
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-white/60">
                    Un conseiller vous rappelle sous 24h
                  </p>
                </div>
                <ContactFormMultiStep />
              </div>

              {/* Integrated stats bar - Inside form */}
              <div className="relative border-t border-gray-100 dark:border-white/10 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-800/50 dark:via-gray-800/80 dark:to-gray-800/50 px-4 py-3">
                <div className="flex items-center justify-around">
                  {[
                    {
                      value: "98%",
                      label: "Satisfaction",
                      color: "text-emerald-600 dark:text-emerald-400",
                    },
                    {
                      value: "24h",
                      label: "Réponse",
                      color: "text-primary-600 dark:text-primary-400",
                    },
                    {
                      value: "100%",
                      label: "Financé",
                      color: "text-blue-600 dark:text-blue-400",
                    },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className={`text-base md:text-lg font-bold ${stat.color}`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trusted by section - Certifications */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200/50 dark:border-white/5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
        <div className="container mx-auto px-3 py-3 md:py-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-5">
            <div className="bg-white dark:bg-white/10 rounded-md sm:rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm border border-gray-100 dark:border-white/10">
              <QualiopiBadge className="!h-6 sm:!h-8 md:!h-9" />
            </div>
            <div className="bg-white dark:bg-white/10 rounded-md sm:rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm border border-gray-100 dark:border-white/10">
              <RNCPBadge className="!h-5 sm:!h-7 md:!h-8" />
            </div>
            <div className="bg-white dark:bg-white/10 rounded-md sm:rounded-lg px-2 py-1.5 sm:px-3 sm:py-2 shadow-sm border border-gray-100 dark:border-white/10">
              <FranceTravailLogo className="!h-5 sm:!h-7 md:!h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* G2/Trustpilot style rating badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-24 left-8 hidden xl:flex items-center gap-3 bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-3 border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none"
      >
        <div className="flex -space-x-1">
          {[...Array(5)].map((_, i) => {
            const rating = 4.6;
            const fillPercentage = Math.min(1, Math.max(0, rating - i)) * 100;
            
            return (
              <div key={i} className="relative w-4 h-4">
                {/* Background star (gray) */}
                <Star className="absolute inset-0 w-4 h-4 text-gray-300" />
                {/* Filled star with clip */}
                <div 
                  className="absolute inset-0 overflow-hidden" 
                  style={{ width: `${fillPercentage}%` }}
                >
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-sm font-bold text-gray-900 dark:text-white">
            4.6/5
          </div>
          <div className="text-xs text-gray-500 dark:text-white/50">
            60+ avis
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
