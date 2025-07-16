// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
               
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}