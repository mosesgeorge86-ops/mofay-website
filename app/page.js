"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { 
  FaTwitter, FaLinkedin, FaInstagram, FaTelegramPlane, FaArrowUp,
  FaMoneyBillWave, FaLeaf, FaCube, FaQuoteLeft,
  FaEnvelope, FaPhone, FaMapMarkerAlt 
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
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-200 transition-all duration-150"
        style={{ width: `${scroll}%` }} />
    </div>
  );
}

// Back to Top Button
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);
  return visible && (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-yellow-400 text-black shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-125">
      <FaArrowUp />
    </button>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="home" className="relative bg-black text-gray-200 h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image src="/hero-bg.jpg" alt="Hero Background" fill className="object-cover opacity-30" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">Welcome to MoFAY Africa</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Empowering Africa through financial innovation, sustainability, and blockchain solutions.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#about" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">Get Started</a>
          <a href="/MoFAY_Africa_Whitepaper.pdf" download
             className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black">
             Download Whitepaper
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black text-center text-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">About MoFAY</h2>
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
    <section id="services" className="py-20 bg-gray-900 text-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-black rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaMoneyBillWave className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Financial Innovation</h3>
            <p>We provide blockchain-powered financial solutions that empower individuals and businesses.</p>
          </div>
          <div className="p-6 bg-black rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaLeaf className="text-green-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
            <p>Our projects emphasize eco-friendly and sustainable development for long-term impact.</p>
          </div>
          <div className="p-6 bg-black rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaCube className="text-blue-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Blockchain Solutions</h3>
            <p>We build trust and transparency through blockchain technology across multiple industries.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-black text-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-yellow-400 mb-12">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaQuoteLeft className="text-yellow-400 text-3xl mx-auto mb-4" />
            <p className="italic">“MoFAY is transforming how communities in Africa access financial tools.”</p>
            <h4 className="mt-4 font-semibold text-yellow-400">— Sarah K.</h4>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaQuoteLeft className="text-yellow-400 text-3xl mx-auto mb-4" />
            <p className="italic">“I’ve seen the impact of MoFAY’s sustainable projects. A brighter future for Africa.”</p>
            <h4 className="mt-4 font-semibold text-yellow-400">— James M.</h4>
          </div>
          <div className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <FaQuoteLeft className="text-yellow-400 text-3xl mx-auto mb-4" />
            <p className="italic">“Blockchain solutions by MoFAY bring transparency and trust like never before.”</p>
            <h4 className="mt-4 font-semibold text-yellow-400">— Anita D.</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <div className="bg-black p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 text-gray-200"/>
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-gray-800 text-gray-200"/>
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-gray-800 text-gray-200"></textarea>
            <button type="submit" className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300">Send Message</button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Info</h2>
          <p className="flex items-center gap-3"><FaEnvelope className="text-yellow-400" /> moofay4@gmail.com</p>
          <p className="flex items-center gap-3"><FaPhone className="text-yellow-400" /> +255 652 000 358</p>
          <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-yellow-400" /> Dar es Salaam, Tanzania</p>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <Image src="/mofay-logo.png" alt="MoFAY Logo" width={60} height={60} className="mx-auto mb-4 rounded-lg" />
        <p>© {new Date().getFullYear()} MoFAY Africa. All rights reserved.</p>
        <div className="flex justify-center space-x-6 text-2xl mt-4">
          {/* Twitter real link */}
          <a href="https://x.com/MoFAYAfrica" target="_blank" rel="noopener noreferrer"><FaTwitter className="hover:text-yellow-400"/></a>
          {/* Placeholders for now */}
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-yellow-400"/></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-yellow-400"/></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTelegramPlane className="hover:text-yellow-400"/></a>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <BackToTop />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
