"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaArrowUp,
  FaMoneyBillWave,
  FaLeaf,
  FaQuoteLeft,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";


// Scroll Progress Bar
function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScroll((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-[9999]">
      <div
        className="h-1 bg-gradient-to-r from-mofay-gold via-green-500 to-yellow-400 transition-all"
        style={{ width: `${scroll}%` }}
      ></div>
    </div>
  );
}


// Back to Top Button
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-mofay-gold text-black shadow-lg hover:bg-yellow-400 hover:scale-125 transition"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}


// Theme Toggle
function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
      document.documentElement.classList.add(localStorage.getItem("theme"));
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-800 text-mofay-gold hover:scale-110 transition"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}


// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-black text-gray-200 h-[90vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="MoFAY Hero Background"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-mofay-gold mb-6 fade-in-up drop-shadow-[0_0_10px_#facc15] leading-snug">
          Welcome to MoFAY Africa
        </h1>
        <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 fade-in-up delay-1">
          Empowering Africa through financial innovation, sustainability, and blockchain solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in-up delay-2">
          <Button
            variant="gold"
            className="px-6 py-3 text-sm sm:text-base md:text-lg font-bold shadow-[0_0_20px_#facc15] hover:scale-110 transition"
          >
            Get Started
          </Button>
          <a href="/MoFAY_Africa_Whitepaper.pdf" download>
            <Button
              variant="outline"
              className="px-6 py-3 text-sm sm:text-base md:text-lg border-mofay-gold text-mofay-gold font-semibold hover:bg-mofay-gold hover:text-black transition"
            >
              Download Whitepaper
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}


// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black text-center text-gray-200 dark:bg-white dark:text-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-mofay-gold mb-6">About MoFAY</h2>
        <p className="text-lg leading-relaxed">
          MoFAY is an African-born initiative focused on empowering communities through financial innovation,
          sustainable development, and blockchain-powered solutions. Our mission is to create a platform that fosters
          trust, growth, and opportunities for individuals and businesses across the continent.
        </p>
      </div>
    </section>
  );
}


// Services Section
function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-900 text-gray-200 dark:bg-gray-100 dark:text-black text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-mofay-gold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-black dark:bg-white rounded-2xl shadow-lg hover:scale-105 transition">
            <FaMoneyBillWave className="text-mofay-gold text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Financial Innovation</h3>
            <p>We provide blockchain-powered financial solutions that empower individuals and businesses.</p>
          </div>
          <div className="p-6 bg-black dark:bg-white rounded-2xl shadow-lg hover:scale-105 transition">
            <FaLeaf className="text-green-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
            <p>Our projects emphasize eco-friendly and sustainable development for long-term impact.</p>
          </div>
          <div className="p-6 bg-black dark:bg-white rounded-2xl shadow-lg hover:scale-105 transition">
            <FaMoneyBillWave className="text-blue-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Blockchain Solutions</h3>
            <p>We build trust and transparency through blockchain technology across multiple industries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-200 dark:bg-gray-100 dark:text-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <div className="bg-black dark:bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-mofay-gold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-mofay-gold" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-mofay-gold" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-black focus:outline-none focus:ring-2 focus:ring-mofay-gold"></textarea>
            <button type="submit" className="w-full py-3 bg-mofay-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-mofay-gold mb-6">Contact Info</h2>
          <p className="flex items-center gap-3"><FaEnvelope className="text-mofay-gold" /> moofay4@gmail.com</p>
          <p className="flex items-center gap-3"><FaPhone className="text-mofay-gold" /> +255 652 000 358</p>
          <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-mofay-gold" /> Mbeya, Tanzania</p>
        </div>
      </div>
    </section>
  );
}


// Footer
function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-200 text-gray-400 dark:text-gray-700 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <Image src="/mofay-logo.png" alt="MoFAY Logo" width={50} height={50} className="rounded-lg mb-4" />
          <p className="text-sm">© {new Date().getFullYear()} MoFAY Africa. All rights reserved.</p>
        </div>
        {/* Quick Links */}
        <div className="space-y-2">
          <h4 className="text-mofay-gold font-semibold mb-2">Quick Links</h4>
          <a href="#about" className="block hover:text-mofay-gold">About</a>
          <a href="#services" className="block hover:text-mofay-gold">Services</a>
          <a href="#contact" className="block hover:text-mofay-gold">Contact</a>
        </div>
        {/* Social Links */}
        <div>
          <h4 className="text-mofay-gold font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl">
            <a href="https://x.com/MoFAYAfrica" target="_blank"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegramPlane /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}


// Main Page
export default function Page() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <nav className="sticky top-0 z-50 backdrop-blur bg-black/50 border-b border-mofay-gold/30 flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/mofay-logo.png" alt="MoFAY Logo" width={40} height={40} className="rounded-lg shadow-md" />
          <h1 className="text-xl font-bold text-mofay-gold">MoFAY</h1>
        </div>
        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-200 dark:text-black">
          <a href="#home" className="hover:text-mofay-gold">Home</a>
          <a href="#about" className="hover:text-mofay-gold">About</a>
          <a href="#services" className="hover:text-mofay-gold">Services</a>
          <a href="#contact" className="hover:text-mofay-gold">Contact</a>
          <ThemeToggle />
        </div>
      </nav>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
