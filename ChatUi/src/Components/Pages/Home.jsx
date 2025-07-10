import React from "react";
import {
  FaComments,
  FaLock,
  FaBolt,
  FaUserFriends,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur border-b dark:border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xl">
          <FaComments /> ChatVerse
        </div>
        <Link to="/chat">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium shadow">
            Launch App
          </button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="bg-white/80 dark:bg-white/10 backdrop-blur-md px-6 py-12 rounded-xl shadow-lg max-w-2xl w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Chat Smarter with <span className="text-blue-600 dark:text-blue-400">ChatVerse</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-6">
            Real-time, secure, and beautifully designed messaging — anytime, anywhere.
          </p>
          <Link to="/chat">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-semibold shadow-md">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Use <span className="text-blue-600 dark:text-blue-400">ChatVerse?</span>
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
          {[
            { icon: <FaLock />, title: "End-to-End Encryption", desc: "Every message is private and secure." },
            { icon: <FaBolt />, title: "Ultra Fast", desc: "Instant delivery using WebSocket technology." },
            { icon: <FaUserFriends />, title: "User Friendly", desc: "Modern, intuitive UI built for everyone." },
            { icon: <FaUserShield />, title: "Privacy First", desc: "No ads, no tracking, just conversations." }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-3">{f.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{f.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-blue-100 dark:bg-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {["Fast, reliable, and beautifully made!", "Best chat experience I’ve had in years!", "Clean UI and amazing performance."].map((quote, i) => (
            <div key={i} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow text-center">
              <p className="text-lg font-medium italic">“{quote}”</p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">— User {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <footer className="py-10 text-center bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-semibold mb-3">Join thousands already chatting</h3>
        <Link to="/chat">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-medium shadow-md">
            Launch ChatVerse
          </button>
        </Link>
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} ChatVerse. Built with ❤️ by Tharun Ravi.
        </p>
      </footer>
    </div>
  );
}

export default Home;
