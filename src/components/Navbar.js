import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Accueil', 'À propos', 'Projets', 'Contact'];

  const handleMobileMenuClick = (href) => {
    setIsMobileMenuOpen(false);
    // Scroll vers la section après fermeture du menu
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-700 font-mono ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-2xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent'
        }`}
        style={{
          transform: 'translateY(0)',
          opacity: 1
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5">
          <div className="flex items-center justify-between">
            {/* Logo avec effet néon - Responsive */}
            <div className="relative group cursor-pointer">
              <div
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400 relative z-10 transition-all duration-300 group-hover:scale-105"
                style={{ 
                  fontFamily: 'monospace',
                  textShadow: '0 0 10px #00ffff'
                }}
              >
                <span className="hidden sm:inline">MIFALISOA.</span>
                <span className="sm:hidden">M.J.A</span>
              </div>
              
              {/* Effet de glow background */}
              <div
                className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-300"
              />
            </div>
            
            {/* Menu desktop - Visible sur desktop seulement */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div
                  key={item}
                  className="relative"
                  style={{
                    opacity: 1,
                    transform: 'translateY(0)',
                    transitionDelay: `${index * 0.15 + 0.5}s`
                  }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(' ', '').replace('à', 'a')}`}
                    className="relative text-white/90 hover:text-cyan-400 transition-all duration-300 text-base font-semibold tracking-wider group px-3"
                    style={{ fontFamily: 'monospace' }}
                  >
                    {item.toUpperCase()}
                    
                    {/* Ligne de soulignement animée */}
                    <div
                      className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 w-0 group-hover:w-full transition-all duration-400 ease-in-out"
                      style={{ boxShadow: '0 0 10px #00ffff' }}
                    />
                    
                    {/* Particules au survol */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-bounce"
                          style={{
                            left: `${i * 8 - 8}px`,
                            top: `${-i * 3}px`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: '1.5s'
                          }}
                        />
                      ))}
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Bouton hamburger - Visible sur mobile et tablette */}
            <div className="lg:hidden flex items-center ml-auto">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
                aria-label="Menu"
              >
                <div
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:bg-white ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                  style={{ boxShadow: '0 0 5px #00ffff' }}
                />
                <div
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:bg-white ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                  style={{ boxShadow: '0 0 5px #00ffff' }}
                />
                <div
                  className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:bg-white ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                  style={{ boxShadow: '0 0 5px #00ffff' }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Ligne de progression du scroll */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-100"
          style={{
            width: `${scrollProgress * 100}%`,
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
          }}
        />
      </nav>

      {/* Menu mobile/tablette - Overlay full screen */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 sm:space-y-12">
          {/* Logo dans le menu mobile */}
          <div
            className="text-4xl sm:text-6xl font-bold text-cyan-400 mb-8"
            style={{ 
              fontFamily: 'monospace',
              textShadow: '0 0 20px #00ffff'
            }}
          >
            MIFALISOA.
          </div>

          {/* Menu items */}
          {navItems.map((item, index) => (
            <div
              key={item}
              className={`transform transition-all duration-500 ${
                isMobileMenuOpen 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
            >
              <a
                href={`#${item.toLowerCase().replace(' ', '').replace('à', 'a')}`}
                onClick={() => handleMobileMenuClick(`#${item.toLowerCase().replace(' ', '').replace('à', 'a')}`)}
                className="relative group text-white text-2xl sm:text-4xl font-bold tracking-widest hover:text-cyan-400 transition-all duration-300"
                style={{ fontFamily: 'monospace' }}
              >
                {item.toUpperCase()}
                
                {/* Effet de glow au survol */}
                <div
                  className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"
                />
                
                {/* Ligne animée */}
                <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500" />
                
                {/* Particules mobiles */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                      style={{
                        left: `${(i - 2) * 12}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </a>
            </div>
          ))}

          {/* Informations de contact dans le menu mobile */}
          <div className="mt-8 text-center space-y-4">
            <div
              className="text-gray-400 text-sm tracking-widest"
              style={{ fontFamily: 'monospace' }}
            >
              DÉVELOPPEUR FULL-STACK
            </div>
            <div
              className="text-cyan-400 text-lg"
              style={{ 
                fontFamily: 'monospace',
                textShadow: '0 0 10px #00ffff'
              }}
            >
              mifalyandrianandraina93.com
            </div>
          </div>

          {/* Indicateur de fermeture */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div
              className="text-gray-500 text-xs tracking-widest animate-pulse"
              style={{ fontFamily: 'monospace' }}
            >
              TOUCHER POUR FERMER
            </div>
          </div>
        </div>

        {/* Effets visuels dans le menu */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Grille de fond */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
          
          {/* Particules flottantes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Style pour éviter le scroll du body quand le menu est ouvert */}
      <style jsx>{`
        ${isMobileMenuOpen ? 'body { overflow: hidden; }' : ''}
      `}</style>
    </>
  );
}

export default Navbar;