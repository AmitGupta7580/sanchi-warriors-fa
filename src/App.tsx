import React, { useState } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/NewsSection";
import TeamSection from "./components/TeamSection";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#news", label: "News" },
  { href: "#team", label: "Team" },
  { href: "#gallary", label: "Gallary" },
  { href: "#contact", label: "Contact" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={closeMenu}
        navItems={navItems}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <NewsSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
