import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profil from '../assets/pro2.png';

function Accueil() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  const words = ['DÉVELOPPEUR', 'CRÉATEUR', 'INNOVATEUR', 'VISIONNAIRE'];

  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  // Fonctions utilitaires pour la responsivité
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  return (
    <motion.section
      id="accueil"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-20"
      style={{ y, opacity }}
    >
      {/* Grille Matrix en arrière-plan - Adaptée selon la taille d'écran */}
      <div className="absolute inset-0 opacity-10">
        <div className={`grid h-full w-full ${
          isMobile ? 'grid-cols-10 grid-rows-15' : 
          isTablet ? 'grid-cols-15 grid-rows-20' : 
          'grid-cols-20 grid-rows-20'
        }`}>
          {[...Array(isMobile ? 150 : isTablet ? 300 : 400)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-cyan-500/20"
              animate={{
                opacity: [0.1, 0.3, 0.1],
                borderColor: [
                  'rgba(6, 182, 212, 0.2)',
                  'rgba(168, 85, 247, 0.2)',
                  'rgba(6, 182, 212, 0.2)'
                ]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </div>

      {/* Particules flottantes - Nombre adapté selon l'écran */}
      <div className="absolute inset-0">
        {[...Array(isMobile ? 30 : isTablet ? 60 : 100)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-cyan-400 rounded-full opacity-30 ${
              isMobile ? 'w-0.5 h-0.5' : 'w-1 h-1'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Effet de curseur lumineux - Désactivé sur mobile */}
      {!isMobile && (
        <motion.div
          className="absolute pointer-events-none z-10"
          animate={{
            x: mousePosition.x - (isTablet ? 150 : 200),
            y: mousePosition.y - (isTablet ? 150 : 200),
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
          <div className={`bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl ${
            isTablet ? 'w-72 h-72' : 'w-96 h-96'
          }`} />
        </motion.div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between relative z-20 max-w-7xl">
        {/* Section Photo */}
        <motion.div
          className="w-full lg:w-1/2 mb-8 sm:mb-12 lg:mb-0 order-2 lg:order-1"
          initial={{ opacity: 0, x: isMobile ? 0 : -100, rotateY: isMobile ? 0 : -45 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="relative flex justify-center">
            {/* Anneaux technologiques rotatifs - Taille adaptée */}
            <motion.div
              className={`relative ${
                isMobile ? 'w-64 h-64' : 
                isTablet ? 'w-80 h-80' : 
                'w-96 h-96'
              }`}
              whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Anneaux - Visibles uniquement sur tablette et desktop */}
              {!isMobile && (
                <>
                  {/* Anneau extérieur */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/50 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Anneau moyen */}
                  <motion.div
                    className="absolute inset-6 sm:inset-8 border-2 border-purple-500/50 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Anneau intérieur */}
                  <motion.div
                    className="absolute inset-12 sm:inset-16 border border-pink-500/50 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </>
              )}
              
              {/* Photo avec effet holographique */}
              <motion.div
                className={`mx-auto rounded-full relative overflow-hidden ${
                  isMobile ? 'w-48 h-48 mt-8' : 
                  isTablet ? 'w-56 h-56 mt-12' : 
                  'w-64 h-64 mt-16'
                }`}
                whileHover={{ 
                  boxShadow: isMobile ? 
                    '0 0 30px rgba(6, 182, 212, 0.6)' : 
                    '0 0 50px rgba(6, 182, 212, 0.8), 0 0 100px rgba(168, 85, 247, 0.4)'
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm"
                  //animate={{
                    //background: [
                      //'linear-gradient(45deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))',
                      //'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                      //'linear-gradient(225deg, rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))',
                      //'linear-gradient(315deg, rgba(6, 182, 212, 0.2), rgba(168, 85, 247, 0.2))'
                    //]
                  //}}
                  //transition={{ duration: 4, repeat: Infinity }}
                />
                
                <img
                  src={profil}
                  alt="Mifalisoa Jacquis"
                  className="absolute inset-3 sm:inset-4 w-full h-full object-cover rounded-full"
                />
                
                {/* Effet de scan - Adapté à la taille */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent ${
                    isMobile ? 'h-6' : 'h-8'
                  }`}
                  animate={{ y: isMobile ? [0, 192, 0] : isTablet ? [0, 224, 0] : [0, 256, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Éléments décoratifs flottants - Repositionnés pour mobile */}
            <motion.div
              className={`absolute bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg ${
                isMobile ? 'w-10 h-10 -top-4 -right-4' : 
                isTablet ? 'w-12 h-12 -top-6 -right-6' : 
                'w-16 h-16 -top-8 -right-8'
              }`}
              animate={{ 
                y: [-15, 15, -15],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className={`w-full h-full bg-black/20 rounded-lg flex items-center justify-center text-white font-mono ${
                isMobile ? 'text-xs' : 'text-xs'
              }`}>
                01
              </div>
            </motion.div>
            
            <motion.div
              className={`absolute bg-gradient-to-r from-purple-500 to-pink-600 rounded-full ${
                isMobile ? 'w-8 h-8 -bottom-6 -left-6' : 
                isTablet ? 'w-10 h-10 -bottom-8 -left-8' : 
                'w-12 h-12 -bottom-12 -left-12'
              }`}
              animate={{ 
                y: [20, -20, 20],
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className={`w-full h-full bg-black/20 rounded-full flex items-center justify-center text-white font-mono ${
                isMobile ? 'text-xs' : 'text-xs'
              }`}>
                ∞
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Texte */}
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left order-1 lg:order-2"
          initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          {/* Titre principal avec effet de glitch */}
          <motion.div
            className="relative mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h1
              className={`font-bold leading-tight ${
                isMobile ? 'text-3xl sm:text-4xl' : 
                isTablet ? 'text-5xl lg:text-6xl' : 
                'text-6xl lg:text-8xl'
              }`}
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                textShadow: [
                  '0 0 10px #00ffff',
                  '2px 2px 0px #ff00ff, -2px -2px 0px #00ffff',
                  '0 0 10px #00ffff'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-white">INGÉNIEUR</span>
              <br />
              <span className="text-cyan-400">EN</span>
              <br />
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                INFORMATIQUE
              </motion.span>
            </motion.h1>
            
            {/* Effet de glitch - Réduit sur mobile */}
            {!isMobile && (
              <motion.div
                className={`absolute inset-0 font-bold leading-tight text-red-500 opacity-0 ${
                  isTablet ? 'text-5xl lg:text-6xl' : 'text-6xl lg:text-8xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                animate={{ 
                  opacity: [0, 0.3, 0],
                  x: [0, -2, 2, 0],
                  y: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 0.1, 
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5 + 2
                }}
              >
                INGÉNIEUR
                <br />
                EN
                <br />
                INFORMATIQUE
              </motion.div>
            )}
          </motion.div>

          {/* Sous-titre avec mot changeant */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h2 
              className={`font-light text-gray-300 mb-3 sm:mb-4 ${
                isMobile ? 'text-lg sm:text-xl' : 
                isTablet ? 'text-2xl lg:text-3xl' : 
                'text-2xl lg:text-4xl'
              }`}
              style={{ fontFamily: 'OCR A Extended, monospace' }}
            >
              JE SUIS UN{' '}
              <motion.span
                key={currentWord}
                className="text-cyan-400 font-bold block sm:inline"
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                style={{
                  textShadow: '0 0 20px #00ffff'
                }}
              >
                {words[currentWord]}
              </motion.span>
            </h2>
            
            <motion.h3
              className={`text-purple-400 ${
                isMobile ? 'text-sm sm:text-base' : 
                isTablet ? 'text-lg' : 
                'text-xl'
              }`}
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Mifalisoa Jacquis ANDRIANANDRAINA
            </motion.h3>
          </motion.div>

          {/* Citation avec effet de machine à écrire */}
          <motion.p
            className={`text-gray-400 mb-8 sm:mb-12 max-w-2xl leading-relaxed tracking-wide ${
              isMobile ? 'text-sm px-2' : 
              isTablet ? 'text-base' : 
              'text-lg'
            }`}
            style={{ fontFamily: 'OCR A Extended, monospace' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            "TRANSFORMEZ VOS RÊVES EN RÉALITÉ À TRAVERS LE CODE ET LA CRÉATIVITÉ. 
            ENSEMBLE, CONSTRUISONS UN AVENIR NUMÉRIQUE INSPIRANT!"
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-2 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="#projets"
              className={`group relative bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold overflow-hidden transition-all duration-500 ${
                isMobile ? 'px-6 py-3 text-xs' : 
                isTablet ? 'px-8 py-3 text-sm' : 
                'px-10 py-4 text-base'
              }`}
              style={{ 
                fontFamily: 'OCR A Extended, monospace',
                clipPath: isMobile ? 
                  'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)' :
                  'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)'
              }}
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)',
                textShadow: '0 0 10px #00ffff'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-cyan-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                {isMobile ? 'MES PROJETS' : 'DÉCOUVRIR MES PROJETS'}
              </span>
              
              {/* Effet de ligne de code */}
              <motion.div
                className="absolute top-0 left-0 w-full h-0.5 bg-white"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className={`border-2 border-purple-500 text-purple-400 font-bold hover:bg-purple-500/10 transition-all duration-300 ${
                isMobile ? 'px-6 py-3 text-xs' : 
                isTablet ? 'px-8 py-3 text-sm' : 
                'px-10 py-4 text-base'
              }`}
              style={{ 
                fontFamily: 'OCR A Extended, monospace',
                clipPath: isMobile ? 
                  'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)' :
                  'polygon(20px 0, 100% 0, calc(100% - 20px) 100%, 0 100%)'
              }}
              whileHover={{ 
                scale: isMobile ? 1.02 : 1.05, 
                borderColor: '#ffffff',
                color: '#ffffff',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              ME CONTACTER
            </motion.a>
          </motion.div>

          {/* Statistiques animées avec indicateur de scroll */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-8">
            {/* Statistiques */}
            <motion.div
              className={`flex justify-center lg:justify-start mt-8 sm:mt-12 ${
                isMobile ? 'space-x-4' : 'space-x-8'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              {[
                { value: '2+', label: 'ANNÉES' },
                { value: '15+', label: 'PROJETS' },
                { value: '∞', label: 'CRÉATIVITÉ' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
                >
                  <motion.div
                    className={`font-bold text-cyan-400 mb-1 sm:mb-2 ${
                      isMobile ? 'text-xl' : 
                      isTablet ? 'text-2xl' : 
                      'text-3xl'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    animate={{ 
                      textShadow: [
                        '0 0 5px #00ffff',
                        '0 0 20px #00ffff',
                        '0 0 5px #00ffff'
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div 
                    className={`text-gray-500 tracking-widest ${
                      isMobile ? 'text-xs' : 'text-xs'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Indicateur de scroll à côté des statistiques sur desktop */}
            <motion.div
              className="hidden lg:flex flex-col items-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex flex-col items-center">
                  <div 
                    className="text-cyan-400 mb-2 tracking-widest text-xs"
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    SCROLL
                  </div>
                  <div className="border-2 border-cyan-400 rounded-full flex justify-center relative w-6 h-12">
                    <motion.div
                      className="bg-cyan-400 rounded-full mt-2 w-1 h-3"
                      animate={{ 
                        y: [0, 16, 0], 
                        opacity: [1, 0, 1] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Effet de glow */}
                    <motion.div
                      className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                      animate={{ 
                        boxShadow: [
                          '0 0 5px #00ffff',
                          '0 0 20px #00ffff',
                          '0 0 5px #00ffff'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Indicateur de scroll pour mobile et tablette - Position originale */}
          <motion.div
            className="lg:hidden absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center">
              <div 
                className={`text-cyan-400 mb-2 tracking-widest ${
                  isMobile ? 'text-xs' : 'text-xs'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                SCROLL
              </div>
              <div className={`border-2 border-cyan-400 rounded-full flex justify-center relative ${
                isMobile ? 'w-5 h-10' : 'w-6 h-12'
              }`}>
                <motion.div
                  className={`bg-cyan-400 rounded-full mt-2 ${
                    isMobile ? 'w-0.5 h-2' : 'w-1 h-3'
                  }`}
                  animate={{ 
                    y: isMobile ? [0, 12, 0] : [0, 16, 0], 
                    opacity: [1, 0, 1] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Effet de glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400 rounded-full"
                  animate={{ 
                    boxShadow: [
                      '0 0 5px #00ffff',
                      '0 0 20px #00ffff',
                      '0 0 5px #00ffff'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div> 

      {/* Indicateur de scroll cyberpunk - Positionné à côté des statistiques */}
      <motion.div
        className={`absolute ${
          isMobile ? 'left-4 bottom-32' : 
          isTablet ? 'left-8 bottom-40' : 
          'left-12 bottom-32'
        } lg:left-auto lg:relative lg:bottom-auto lg:mt-8 lg:ml-8`}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center">
          <div 
            className={`text-cyan-400 mb-2 tracking-widest ${
              isMobile ? 'text-xs' : 'text-xs'
            }`}
            style={{ fontFamily: 'OCR A Extended, monospace' }}
          >
            SCROLL
          </div>
          <div className={`border-2 border-cyan-400 rounded-full flex justify-center relative ${
            isMobile ? 'w-5 h-10' : 'w-6 h-12'
          }`}>
            <motion.div
              className={`bg-cyan-400 rounded-full mt-2 ${
                isMobile ? 'w-0.5 h-2' : 'w-1 h-3'
              }`}
              animate={{ 
                y: isMobile ? [0, 12, 0] : [0, 16, 0], 
                opacity: [1, 0, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Effet de glow */}
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400 rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 5px #00ffff',
                  '0 0 20px #00ffff',
                  '0 0 5px #00ffff'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Accueil;