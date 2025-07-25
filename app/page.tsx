"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Users,
  BarChart3,
  Calendar,
  Star,
  Play,
  TrendingUp,
  Target,
  Shield,
  Crown,
  CheckCircle,
  ArrowRight,
  Globe,
  Lock,
  Diamond,
  Award,
  Building,
  UserCheck,
  Download,
  Menu,
  X,
  Share2,
  MessageSquare,
  Bell,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          gsap.to(
            { value: 0 },
            {
              value: end,
              duration,
              ease: "power2.out",
              onUpdate: function () {
                setCount(this.targets()[0].value)
              },
            },
          )
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={countRef} className="tabular-nums">
      {prefix}
      {count.toFixed(decimals).toLocaleString()}
      {suffix}
    </span>
  )
}

export default function UltraPremiumLandingPage() {
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)
  const downloadRef = useRef<HTMLElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Particle animation
      if (particlesRef.current) {
        const particles = particlesRef.current.children
        gsap.set(particles, { opacity: 0.1 })

        Array.from(particles).forEach((particle) => {
          gsap.to(particle, {
            y: -100,
            x: Math.random() * 100 - 50,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            delay: Math.random() * 2,
            ease: "power2.out",
          })
        })
      }

      // Enhanced hero animations
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power4.out" },
      )

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 80, rotationX: 15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.6, delay: 0.2, ease: "power4.out" },
      )

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.4, delay: 0.5, ease: "power4.out" },
      )

      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.8, ease: "power4.out" },
      )

      gsap.fromTo(
        ".hero-stats",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power4.out" },
      )

      gsap.fromTo(
        ".hero-phone",
        { opacity: 0, scale: 0.8, y: 60, rotationY: 15 },
        { opacity: 1, scale: 1, y: 0, rotationY: 0, duration: 1.8, delay: 0.6, ease: "power4.out" },
      )

      // Ultra-premium feature cards
      gsap.fromTo(
        ".ultra-premium-card",
        { opacity: 0, y: 100, rotationX: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1.4,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
            end: "bottom 30%",
          },
        },
      )

      // Executive testimonials
      gsap.fromTo(
        ".executive-testimonial",
        { opacity: 0, x: -80, rotationY: -10 },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: "top 75%",
          },
        },
      )

      // Download section animations
      gsap.fromTo(
        ".download-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: downloadRef.current,
            start: "top 75%",
          },
        },
      )

      gsap.fromTo(
        ".download-phones",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.4,
          delay: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: downloadRef.current,
            start: "top 75%",
          },
        },
      )

      gsap.fromTo(
        ".download-badge",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          delay: 0.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: downloadRef.current,
            start: "top 75%",
          },
        },
      )

      // Premium floating animations
      gsap.to(".ultra-premium-floating", {
        y: -20,
        rotation: 3,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".ultra-premium-floating-slow", {
        y: -12,
        rotation: -2,
        duration: 5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Phone floating animations
      gsap.to(".phone-float-1", {
        y: -15,
        rotation: 2,
        duration: 4,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      gsap.to(".phone-float-2", {
        y: -10,
        rotation: -1,
        duration: 3.5,
        delay: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Sophisticated CTA animation
      gsap.fromTo(
        ".ultra-premium-cta",
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Particles Background */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Ultra-Premium Header */}
      <header className="fixed top-0 w-full bg-black/98 backdrop-blur-2xl border-b border-red-500/20 z-50 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="relative">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-red-600 via-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-2xl border border-red-400/30">
                <Crown className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-black"></div>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-white tracking-tight">SportsIn</span>
              <div className="flex items-center space-x-2">
                <div className="text-[10px] md:text-xs text-red-400 font-bold tracking-[0.2em]">PREMIUM</div>
                <Badge className="bg-red-500/20 text-red-400 text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 border-red-500/30">
                  LOREM IPSUM
                </Badge>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-12">
            <Link
              href="#platform"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide"
            >
              Lorem Ipsum
            </Link>
            <Link
              href="#intelligence"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide"
            >
              Dolor Sit
            </Link>
            <Link
              href="#download"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide"
            >
              Download
            </Link>
            <Link
              href="#advisory"
              className="text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide"
            >
              Consectetur
            </Link>
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-8 py-4 shadow-2xl border border-red-500/30">
              <Lock className="w-4 h-4 mr-2" />
              Lorem Ipsum
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-red-500/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-black/95 backdrop-blur-xl border-b border-red-500/20 shadow-2xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="#platform"
                className="block py-3 text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lorem Ipsum
              </Link>
              <Link
                href="#intelligence"
                className="block py-3 text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dolor Sit
              </Link>
              <Link
                href="#download"
                className="block py-3 text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download
              </Link>
              <Link
                href="#advisory"
                className="block py-3 text-gray-300 hover:text-red-400 transition-all duration-300 font-medium tracking-wide border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Consectetur
              </Link>
              <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 shadow-2xl border border-red-500/30">
                <Lock className="w-4 h-4 mr-2" />
                Lorem Ipsum
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Ultra-Premium Hero Section */}
      <section ref={heroRef} className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/3 via-transparent to-red-600/3"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>

        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <Badge className="hero-badge bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border-red-400/40 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wide">
                  <Diamond className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" />
                  LOREM IPSUM DOLOR SIT AMET
                </Badge>

                <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                  Lorem Ipsum
                  <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                    Consectetur
                  </span>
                </h1>

                <p className="hero-subtitle text-lg md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div className="hero-buttons flex flex-col sm:flex-row gap-4 md:gap-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base md:text-xl px-8 md:px-12 py-6 md:py-8 font-bold shadow-2xl border border-red-500/30 group"
                >
                  <Play className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4 group-hover:scale-110 transition-transform" />
                  Lorem Ipsum Dolor
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base md:text-xl px-8 md:px-12 py-6 md:py-8 border-2 border-gray-600 hover:border-red-500 text-gray-300 hover:text-red-400 bg-transparent hover:bg-gray-900/50 font-semibold group"
                >
                  Consectetur Adipiscing
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-3 md:ml-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="hero-stats grid grid-cols-3 gap-6 md:gap-12 pt-8 md:pt-12 border-t border-gray-700/50">
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                    <AnimatedCounter end={25000} suffix="+" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">LOREM IPSUM</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">DOLOR SIT AMET</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                    <AnimatedCounter end={2.5} suffix="B+" prefix="$" decimals={1} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">CONSECTETUR ELIT</div>
                </div>
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="hero-phone ultra-premium-floating relative z-10">
                <div className="w-[320px] md:w-[420px] h-[400px] md:h-[540px] mx-auto bg-gradient-to-br from-gray-800 to-black rounded-[3rem] md:rounded-[4rem] p-3 md:p-4 shadow-2xl border border-gray-700/30">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden relative shadow-inner">
                    <Image
                      src="/placeholder.svg?height=540&width=420"
                      alt="SportsIn Premium Interface"
                      width={420}
                      height={540}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Ultra-premium floating elements */}
              <div className="absolute -top-12 -left-12 ultra-premium-floating-slow">
                <div className="w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl border border-red-400/30">
                  <Trophy className="w-8 md:w-12 h-8 md:h-12 text-white" />
                </div>
              </div>

              <div className="absolute -bottom-12 -right-12 ultra-premium-floating" style={{ animationDelay: "2s" }}>
                <div className="w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl border border-red-500/30">
                  <Target className="w-8 md:w-12 h-8 md:h-12 text-white" />
                </div>
              </div>

              <div className="absolute top-1/3 -right-8 ultra-premium-floating-slow" style={{ animationDelay: "1s" }}>
                <div className="w-14 md:w-20 h-14 md:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl border border-red-400/30">
                  <Diamond className="w-7 md:w-10 h-7 md:h-10 text-white" />
                </div>
              </div>

              <div className="absolute top-1/4 -left-6 ultra-premium-floating" style={{ animationDelay: "1.5s" }}>
                <div className="w-12 md:w-18 h-12 md:h-18 bg-gradient-to-r from-red-600 to-red-700 rounded-lg md:rounded-xl flex items-center justify-center shadow-xl border border-red-500/30">
                  <Crown className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Features Section */}
      <section
        ref={featuresRef}
        id="platform"
        className="py-24 md:py-40 bg-gradient-to-b from-black to-gray-950 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 md:mb-24">
            <Badge className="bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border-red-400/40 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wide">
              <Building className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" />
              LOREM IPSUM DOLOR SIT
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Consectetur Adipiscing Elit
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-5xl mx-auto font-light leading-relaxed tracking-wide">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
            <Card className="ultra-premium-card bg-gradient-to-br from-gray-900/60 to-black/80 border border-gray-700/40 shadow-2xl hover:shadow-red-500/10 transition-all duration-700 group backdrop-blur-xl">
              <CardContent className="p-6 md:p-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-red-400/30">
                  <BarChart3 className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Lorem Ipsum Dolor
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Consectetur adipiscing elit</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Sed do eiusmod tempor</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ultra-premium-card bg-gradient-to-br from-gray-900/60 to-black/80 border border-gray-700/40 shadow-2xl hover:shadow-red-500/10 transition-all duration-700 group backdrop-blur-xl">
              <CardContent className="p-6 md:p-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-red-500/30">
                  <Users className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Consectetur Adipiscing
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Duis aute irure dolor</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Reprehenderit in voluptate</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Velit esse cillum dolore</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ultra-premium-card bg-gradient-to-br from-gray-900/60 to-black/80 border border-gray-700/40 shadow-2xl hover:shadow-red-500/10 transition-all duration-700 group backdrop-blur-xl">
              <CardContent className="p-6 md:p-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-red-400/30">
                  <Shield className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Sed Do Eiusmod
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                  Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Excepteur sint occaecat</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Cupidatat non proident</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Sunt in culpa qui officia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ultra-premium-card bg-gradient-to-br from-gray-900/60 to-black/80 border border-gray-700/40 shadow-2xl hover:shadow-red-500/10 transition-all duration-700 group backdrop-blur-xl">
              <CardContent className="p-6 md:p-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-red-500/30">
                  <Calendar className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Tempor Incididunt
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                  Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Deserunt mollit anim</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Id est laborum et dolorum</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Fuga et harum quidem</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ultra-premium-card bg-gradient-to-br from-gray-900/60 to-black/80 border border-gray-700/40 shadow-2xl hover:shadow-red-500/10 transition-all duration-700 group backdrop-blur-xl">
              <CardContent className="p-6 md:p-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-red-400/30">
                  <TrendingUp className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Ut Labore Dolore
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                  Magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat duis aute irure dolor in reprehenderit.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Rerum facilis est et expedita</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Distinctio nam libero tempore</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Cum soluta nobis est eligendi</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ultra-premium-card bg-gradient-to-br from-gray-900/60 to-black/80 border border-gray-700/40 shadow-2xl hover:shadow-red-500/10 transition-all duration-700 group backdrop-blur-xl">
              <CardContent className="p-6 md:p-12">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl border border-red-500/30">
                  <Globe className="w-7 h-7 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 tracking-tight">
                  Magna Aliqua Enim
                </h3>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                  Ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis
                  aute irure dolor in reprehenderit in voluptate velit esse.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Optio cumque nihil impedit</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Quo minus id quod maxime</span>
                  </div>
                  <div className="flex items-center text-sm md:text-base text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-400 flex-shrink-0" />
                    <span>Placeat facere possimus</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        ref={downloadRef}
        id="download"
        className="py-24 md:py-40 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="download-content space-y-8 md:space-y-10">
              <Badge className="bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border-red-400/40 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 mb-4 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wide">
                <Download className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" />
                LOREM IPSUM DOWNLOAD
              </Badge>

              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
                Lorem Ipsum{" "}
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  Dolor Sit Amet
                </span>{" "}
                Consectetur
              </h2>

              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-1">Lorem Ipsum Dolor</h4>
                    <p className="text-gray-400 font-light">
                      Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-1">Sed Do Eiusmod</h4>
                    <p className="text-gray-400 font-light">
                      Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-500/20 p-2 rounded-full mr-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-semibold text-white mb-1">Quis Nostrud Exercitation</h4>
                    <p className="text-gray-400 font-light">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#" className="download-badge block">
                  <Image
                    src="/placeholder.svg?height=60&width=200"
                    alt="Get it on Google Play"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto hover:opacity-90 transition-opacity"
                  />
                </a>
                <a href="#" className="download-badge block">
                  <Image
                    src="/placeholder.svg?height=60&width=200"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto hover:opacity-90 transition-opacity"
                  />
                </a>
              </div>

              <div className="flex items-center space-x-4 pt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-red-500 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">4.9/5</span>
                <span className="text-gray-400">• 10K+ Lorem Ipsum</span>
              </div>
            </div>

            <div className="download-phones relative hidden md:block">
              <div className="relative h-[600px]">
                {/* Phone 1 */}
                <div className="absolute left-0 top-10 z-10 phone-float-1">
                  <div className="w-[220px] h-[440px] bg-gradient-to-br from-gray-800 to-black rounded-[2rem] p-3 shadow-2xl border border-gray-700/30">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[1.7rem] overflow-hidden relative shadow-inner">
                      <Image
                        src="/placeholder.svg?height=440&width=220"
                        alt="SportsIn App Screen"
                        width={220}
                        height={440}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="absolute right-0 top-40 z-20 phone-float-2">
                  <div className="w-[240px] h-[480px] bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] p-3 shadow-2xl border border-gray-700/30">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.2rem] overflow-hidden relative shadow-inner">
                      <Image
                        src="/placeholder.svg?height=480&width=240"
                        alt="SportsIn App Screen"
                        width={240}
                        height={480}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* App Features Icons */}
                <div
                  className="absolute top-20 right-[260px] ultra-premium-floating"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl border border-red-400/30">
                    <Share2 className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div
                  className="absolute bottom-40 left-[240px] ultra-premium-floating-slow"
                  style={{ animationDelay: "1.2s" }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-xl border border-red-500/30">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                </div>

                <div
                  className="absolute top-[300px] left-[200px] ultra-premium-floating"
                  style={{ animationDelay: "0.8s" }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-xl border border-red-400/30">
                    <Bell className="w-7 h-7 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View App Screenshot */}
            <div className="md:hidden flex justify-center">
              <div className="w-[240px] h-[480px] bg-gradient-to-br from-gray-800 to-black rounded-[2.5rem] p-3 shadow-2xl border border-gray-700/30">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-white rounded-[2.2rem] overflow-hidden relative shadow-inner">
                  <Image
                    src="/placeholder.svg?height=480&width=240"
                    alt="SportsIn App Screen"
                    width={240}
                    height={480}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonials Section */}
      <section ref={testimonialsRef} className="py-24 md:py-40 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
            <Badge className="bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border-red-400/40 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wide">
              <UserCheck className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" />
              LOREM IPSUM TESTIMONIALS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Consectetur Adipiscing Elit
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10">
            <Card className="executive-testimonial bg-gradient-to-br from-gray-900/40 to-black/60 border border-gray-700/40 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Lorem Ipsum"
                      width={80}
                      height={80}
                      className="rounded-xl md:rounded-2xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Lorem Ipsum</h4>
                    <p className="text-sm md:text-base text-gray-400 font-medium">Dolor Sit Amet, Consectetur</p>
                    <p className="text-xs md:text-sm text-gray-500">Adipiscing Elit Sed Do</p>
                    <div className="flex text-red-400 mt-1 md:mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-300 italic leading-relaxed font-light">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="executive-testimonial bg-gradient-to-br from-gray-900/40 to-black/60 border border-gray-700/40 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Consectetur Adipiscing"
                      width={80}
                      height={80}
                      className="rounded-xl md:rounded-2xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Consectetur Adipiscing</h4>
                    <p className="text-sm md:text-base text-gray-400 font-medium">Sed Do Eiusmod, Tempor Inc</p>
                    <p className="text-xs md:text-sm text-gray-500">Incididunt Ut Labore Et Dolore</p>
                    <div className="flex text-red-400 mt-1 md:mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-300 italic leading-relaxed font-light">
                  &quot;Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.&quot;
                </p>
              </CardContent>
            </Card>

            <Card className="executive-testimonial bg-gradient-to-br from-gray-900/40 to-black/60 border border-gray-700/40 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-6 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 md:mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-xl">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Tempor Incididunt"
                      width={80}
                      height={80}
                      className="rounded-xl md:rounded-2xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-white">Tempor Incididunt</h4>
                    <p className="text-sm md:text-base text-gray-400 font-medium">Ut Labore & Dolore, Magna LLC</p>
                    <p className="text-xs md:text-sm text-gray-500">Aliqua Ut Enim Ad Minim</p>
                    <div className="flex text-red-400 mt-1 md:mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-300 italic leading-relaxed font-light">
                  &quot;Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste natus error.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ultra-Premium Stats Section */}
      <section
        ref={statsRef}
        className="py-24 md:py-40 bg-gradient-to-r from-red-500/8 via-red-600/4 to-red-500/8 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/15 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 md:mb-20">
            <Badge className="bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border-red-400/40 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-4 text-xs md:text-sm font-semibold tracking-wide">
              <Award className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" />
              LOREM IPSUM METRICS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Consectetur Adipiscing Excellence
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center p-6 md:p-12 bg-gradient-to-br from-gray-900/30 to-black/50 rounded-2xl md:rounded-3xl border border-gray-700/30 backdrop-blur-xl shadow-2xl">
              <div className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 tabular-nums">
                <AnimatedCounter end={25000} suffix="+" />
              </div>
              <div className="text-base md:text-lg text-gray-300 font-semibold mb-1 md:mb-2">Lorem Ipsum</div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">Dolor Sit Amet</div>
            </div>
            <div className="text-center p-6 md:p-12 bg-gradient-to-br from-gray-900/30 to-black/50 rounded-2xl md:rounded-3xl border border-gray-700/30 backdrop-blur-xl shadow-2xl">
              <div className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 tabular-nums">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-base md:text-lg text-gray-300 font-semibold mb-1 md:mb-2">Consectetur Elit</div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">Sed Do Eiusmod</div>
            </div>
            <div className="text-center p-6 md:p-12 bg-gradient-to-br from-gray-900/30 to-black/50 rounded-2xl md:rounded-3xl border border-gray-700/30 backdrop-blur-xl shadow-2xl">
              <div className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 tabular-nums">
                <AnimatedCounter end={2.5} suffix="B+" prefix="$" decimals={1} />
              </div>
              <div className="text-base md:text-lg text-gray-300 font-semibold mb-1 md:mb-2">Tempor Incididunt</div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">Ut Labore Dolore</div>
            </div>
            <div className="text-center p-6 md:p-12 bg-gradient-to-br from-gray-900/30 to-black/50 rounded-2xl md:rounded-3xl border border-gray-700/30 backdrop-blur-xl shadow-2xl">
              <div className="text-3xl md:text-6xl font-bold text-white mb-2 md:mb-4 tabular-nums">
                <AnimatedCounter end={99.7} suffix="%" decimals={1} />
              </div>
              <div className="text-base md:text-lg text-gray-300 font-semibold mb-1 md:mb-2">Magna Aliqua</div>
              <div className="text-xs md:text-sm text-gray-400 font-medium">Ut Enim Ad Minim</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra-Premium CTA Section */}
      <section ref={ctaRef} className="py-24 md:py-40 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/15 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="ultra-premium-cta text-center max-w-3xl mx-auto">
            <Badge className="bg-gradient-to-r from-red-500/30 to-red-600/30 text-red-300 border-red-400/40 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-red-600/30 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-semibold tracking-wide">
              <Crown className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" />
              ULTRA-PREMIUM CTA
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
              Ready to Experience the Future?
            </h2>
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              Join the ultra-premium revolution and elevate your sports executive journey with SportsIn. Sign up now to get early access and exclusive benefits.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-base md:text-xl px-8 md:px-12 py-6 md:py-8 font-bold shadow-2xl border border-red-500/30">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
              Get Early Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
