import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Composant Projet individuel
function Projet({ projet, index, isActive, onHover, onLeave }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ${
        isActive ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover(index);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
        onLeave();
      }}
      whileHover={{ scale: isActive ? 1.02 : 1.05 }}
    >
      {/* Background avec effet holographique */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
        animate={{
          background: isHovered
            ? `linear-gradient(135deg, ${projet.colors.primary}20, ${projet.colors.secondary}20, #000000)`
            : 'linear-gradient(135deg, #111827, #000000, #111827)'
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Bordure animée */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(45deg, ${projet.colors.primary}, ${projet.colors.secondary}, ${projet.colors.primary})`,
          backgroundSize: '300% 300%',
          padding: '2px'
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%'
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      >
        <div className="w-full h-full bg-black rounded-lg" />
      </motion.div>

      {/* Grille de fond responsive */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(${projet.colors.primary}40 1px, transparent 1px),
              linear-gradient(90deg, ${projet.colors.primary}40 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(15px, 3vw, 20px) clamp(15px, 3vw, 20px)'
          }}
        />
      </div>

      {/* Contenu responsive */}
      <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between min-h-[300px] sm:min-h-[350px]">
        {/* Header avec icône */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl"
            animate={{ 
              rotate: isHovered ? [0, 360, 0] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1
            }}
            transition={{ duration: 1 }}
          >
            {projet.icon}
          </motion.div>
          
          <motion.div
            className="flex space-x-1.5 sm:space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.3 }}
          >
            {projet.technologies.slice(0, window.innerWidth < 640 ? 3 : 4).map((tech, i) => (
              <motion.span
                key={tech}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
                style={{ backgroundColor: projet.colors.primary }}
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1,
                  repeat: isHovered ? Infinity : 0,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Titre avec effet de glitch responsive */}
        <div className="mb-3 sm:mb-4">
          <motion.h3
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold relative break-words"
            style={{ 
              fontFamily: 'OCR A Extended, monospace',
              color: projet.colors.primary,
              lineHeight: '1.2'
            }}
            animate={{
              textShadow: isHovered 
                ? `0 0 20px ${projet.colors.primary}`
                : `0 0 5px ${projet.colors.primary}`
            }}
          >
            <span className="hidden sm:inline">{projet.titre}</span>
            <span className="sm:hidden">{projet.titre.split(' ').slice(0, 2).join(' ')}</span>
            
            {/* Effet de glitch */}
            <motion.span
              className="absolute inset-0 text-red-500"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                opacity: isHovered ? [0, 0.3, 0] : 0,
                x: isHovered ? [-2, 2, -1, 1, 0] : 0
              }}
              transition={{ 
                duration: 0.1, 
                repeat: isHovered ? Infinity : 0,
                repeatDelay: 2
              }}
            >
              <span className="hidden sm:inline">{projet.titre}</span>
              <span className="sm:hidden">{projet.titre.split(' ').slice(0, 2).join(' ')}</span>
            </motion.span>
          </motion.h3>
          
          <motion.div
            className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2"
            style={{ fontFamily: 'OCR A Extended, monospace' }}
            animate={{ opacity: isHovered ? 1 : 0.6 }}
          >
            [{projet.category.replace('_', ' ')}]
          </motion.div>
        </div>

        {/* Description responsive */}
        <motion.p
          className="text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow text-sm sm:text-base"
          style={{ fontFamily: 'OCR A Extended, monospace' }}
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="hidden sm:inline">{projet.description}</span>
          <span className="sm:hidden">
            {projet.description.length > 100 
              ? projet.description.substring(0, 100) + '...'
              : projet.description
            }
          </span>
        </motion.p>

        {/* Technologies responsive */}
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0.6, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {projet.technologies.slice(0, window.innerWidth < 640 ? 3 : projet.technologies.length).map((tech, i) => (
              <motion.span
                key={tech}
                className="px-2 sm:px-3 py-1 text-xs rounded-full border"
                style={{ 
                  fontFamily: 'OCR A Extended, monospace',
                  borderColor: projet.colors.primary,
                  color: projet.colors.primary,
                  backgroundColor: `${projet.colors.primary}10`,
                  fontSize: 'clamp(0.6rem, 2vw, 0.75rem)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: `${projet.colors.primary}30`,
                  boxShadow: `0 0 15px ${projet.colors.primary}50`
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
            {projet.technologies.length > 3 && window.innerWidth < 640 && (
              <span 
                className="px-2 py-1 text-xs rounded-full border border-gray-500 text-gray-400"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                +{projet.technologies.length - 3}
              </span>
            )}
          </div>
        </motion.div>

        {/* Boutons d'action responsive */}
        <motion.div
          className="flex flex-col sm:flex-row gap-2 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href={projet.lien}
            className="group/btn relative px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 font-bold overflow-hidden transition-all duration-300 text-center text-sm sm:text-base"
            style={{ 
              fontFamily: 'OCR A Extended, monospace',
              borderColor: projet.colors.primary,
              color: projet.colors.primary,
              clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 25px ${projet.colors.primary}60`
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: projet.colors.primary }}
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">
              <span className="hidden sm:inline">VOIR PROJET</span>
              <span className="sm:hidden">VOIR</span>
            </span>
          </motion.a>

          {projet.demo && (
            <motion.a
              href={projet.demo}
              className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-600 text-gray-400 font-bold hover:border-white hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
              style={{ 
                fontFamily: 'OCR A Extended, monospace',
                clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DÉMO
            </motion.a>
          )}
        </motion.div>

        {/* Indicateur de statut */}
        <motion.div
          className="absolute top-3 sm:top-4 right-3 sm:right-4"
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div 
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full"
            style={{ backgroundColor: projet.colors.secondary }}
          />
        </motion.div>
      </div>

      {/* Overlay d'effet au survol - réduit sur mobile */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5"
        />
        
        {/* Particules - réduites sur mobile */}
        {isHovered && [...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full hidden sm:block"
            style={{ 
              backgroundColor: projet.colors.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [-10, -30, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

// Composant principal Projets
function Projets() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('TOUS');

  const projets = [
    {
      titre: "APPLICATION WEB INTERACTIVE",
      description: "Une application web moderne construite avec React et Tailwind CSS, offrant une expérience utilisateur fluide et responsive avec des animations sophistiquées.",
      lien: "#",
      demo: "#",
      category: "WEB_APP",
      icon: "🚀",
      technologies: ["REACT", "TAILWIND", "FRAMER-MOTION", "VITE"],
      colors: { primary: "#00FFFF", secondary: "#FF00FF" }
    },
    {
      titre: "E-COMMERCE MODERNE",
      description: "Un site e-commerce complet avec gestion de panier, paiement sécurisé, interface d'administration et tableau de bord analytique intégré.",
      lien: "#",
      demo: "#",
      category: "E-COMMERCE",
      icon: "🛒",
      technologies: ["NEXT.JS", "MONGODB", "STRIPE", "REDUX"],
      colors: { primary: "#10B981", secondary: "#F59E0B" }
    },
    {
      titre: "DASHBOARD ANALYTIQUE",
      description: "Un tableau de bord interactif avec visualisations de données en temps réel, rapports personnalisables et système de notifications avancé.",
      lien: "#",
      demo: "#",
      category: "DASHBOARD",
      icon: "📊",
      technologies: ["REACT", "D3.JS", "NODE.JS", "WEBSOCKET"],
      colors: { primary: "#8B5CF6", secondary: "#EC4899" }
    },
    {
      titre: "API REST SÉCURISÉE",
      description: "Une API REST robuste avec authentification JWT, rate limiting, documentation Swagger et tests automatisés complets.",
      lien: "#",
      category: "BACKEND",
      icon: "🔧",
      technologies: ["NODE.JS", "EXPRESS", "JWT", "SWAGGER"],
      colors: { primary: "#F59E0B", secondary: "#EF4444" }
    },
    {
      titre: "MOBILE APP HYBRID",
      description: "Application mobile cross-platform avec interface native, notifications push et synchronisation offline-first.",
      lien: "#",
      demo: "#",
      category: "MOBILE",
      icon: "📱",
      technologies: ["REACT-NATIVE", "EXPO", "ASYNCSTORAGE"],
      colors: { primary: "#06B6D4", secondary: "#8B5CF6" }
    },
    {
      titre: "PORTFOLIO 3D",
      description: "Portfolio interactif en 3D avec Three.js, animations WebGL et expérience immersive pour présenter les projets.",
      lien: "#",
      demo: "#",
      category: "3D_WEB",
      icon: "🎨",
      technologies: ["THREE.JS", "WEBGL", "GSAP", "BLENDER"],
      colors: { primary: "#FF0055", secondary: "#00FFFF" }
    }
  ];

  const categories = ['TOUS', 'WEB_APP', 'E-COMMERCE', 'DASHBOARD', 'BACKEND', 'MOBILE', '3D_WEB'];

  const filteredProjets = filter === 'TOUS' 
    ? projets 
    : projets.filter(projet => projet.category === filter);

  return (
    <section id="projets" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects responsive */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #00FFFF 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #FF00FF 2px, transparent 2px)
            `,
            backgroundSize: 'clamp(50px, 10vw, 100px) clamp(50px, 10vw, 100px)'
          }}
        />
      </div>

      {/* Particules de code flottantes - réduites sur mobile */}
      <div className="absolute inset-0">
        {['<div>', '</div>', '{...}', 'npm', 'git', 'push', 'commit', 'merge'].slice(0, window.innerWidth < 768 ? 4 : 8).map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-sm sm:text-base lg:text-lg hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontFamily: 'OCR A Extended, monospace'
            }}
            animate={{
              y: [-50, -150, -50],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section responsive */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 sm:mb-8 relative"
            style={{ fontFamily: 'OCR A Extended, monospace' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              <span className="hidden sm:inline">MES PROJETS</span>
              <span className="sm:hidden">PROJETS</span>
            </span>
            
            {/* Effet de scan horizontal */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent h-1 sm:h-2"
              animate={{ x: [-200, 600, -200] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </motion.h2>
          
          <motion.div
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
            style={{ fontFamily: 'OCR A Extended, monospace' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hidden sm:inline">
              DÉCOUVREZ UNE SÉLECTION DE MES RÉALISATIONS LES PLUS RÉCENTES ET INNOVANTES
            </span>
            <span className="sm:hidden">
              MES RÉALISATIONS RÉCENTES ET INNOVANTES
            </span>
          </motion.div>
        </motion.div>

        {/* Filtres responsive */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 font-bold transition-all duration-300 relative overflow-hidden text-xs sm:text-sm ${
                filter === category
                  ? 'text-black'
                  : 'text-cyan-400 border-2 border-cyan-400 hover:text-white hover:border-white'
              }`}
              style={{ 
                fontFamily: 'OCR A Extended, monospace',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Background animé pour le filtre actif */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
                initial={{ x: filter === category ? 0 : '-100%' }}
                animate={{ x: filter === category ? 0 : '-100%' }}
                transition={{ duration: 0.3 }}
              />
              
              <span className="relative z-10">
                <span className="hidden sm:inline">{category.replace('_', ' ')}</span>
                <span className="sm:hidden">
                  {category === 'TOUS' ? 'TOUS' :
                   category === 'WEB_APP' ? 'WEB' :
                   category === 'E-COMMERCE' ? 'SHOP' :
                   category === 'DASHBOARD' ? 'DASH' :
                   category === 'BACKEND' ? 'API' :
                   category === 'MOBILE' ? 'MOBILE' :
                   category === '3D_WEB' ? '3D' : category}
                </span>
              </span>
              
              {/* Effet de glow */}
              {filter === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 blur-xl opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Grille des projets responsive */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjets.map((projet, index) => (
              <Projet
                key={`${filter}-${index}`}
                projet={projet}
                index={index}
                isActive={activeProject === index}
                onHover={setActiveProject}
                onLeave={() => setActiveProject(null)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Section CTA responsive */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-gradient-to-r from-gray-900/50 to-black/50 border-2 border-cyan-400/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto backdrop-blur-sm"
            whileHover={{ 
              borderColor: 'rgba(6, 182, 212, 0.8)',
              boxShadow: '0 0 50px rgba(6, 182, 212, 0.2)'
            }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-cyan-400"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                textShadow: [
                  '0 0 10px #00FFFF',
                  '0 0 30px #00FFFF',
                  '0 0 10px #00FFFF'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="hidden sm:inline">VOUS AVEZ UN PROJET EN TÊTE ?</span>
              <span className="sm:hidden">UN PROJET EN TÊTE ?</span>
            </motion.h3>
            
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
            >
              <span className="hidden sm:inline">
                TRANSFORMONS ENSEMBLE VOS IDÉES EN RÉALITÉ NUMÉRIQUE
              </span>
              <span className="sm:hidden">
                TRANSFORMONS VOS IDÉES EN RÉALITÉ
              </span>
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            >
              <motion.a
                href="#contact"
                className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold overflow-hidden transition-all duration-500 text-sm sm:text-base"
                style={{ 
                  fontFamily: 'OCR A Extended, monospace',
                  clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 100%, 15px 100%)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  <span className="hidden sm:inline">DÉMARRONS UN PROJET</span>
                  <span className="sm:hidden">NOUVEAU PROJET</span>
                </span>
              </motion.a>
              
              <motion.a
                href="mailto:votre.email@example.com"
                className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-purple-500 text-purple-400 font-bold hover:bg-purple-500/10 transition-all duration-300 text-sm sm:text-base"
                style={{ 
                  fontFamily: 'OCR A Extended, monospace',
                  clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: '#ffffff',
                  color: '#ffffff'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">ENVOYER UN EMAIL</span>
                <span className="sm:hidden">EMAIL</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Statistiques des projets responsive */}
        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'PROJETS RÉALISÉS', shortLabel: 'PROJETS', value: '15+', color: '#00FFFF' },
            { label: 'TECHNOLOGIES MAÎTRISÉES', shortLabel: 'TECHS', value: '12+', color: '#8B5CF6' },
            { label: 'CLIENTS SATISFAITS', shortLabel: 'CLIENTS', value: '8+', color: '#10B981' },
            { label: 'HEURES DE CODE', shortLabel: 'HEURES', value: '2000+', color: '#F59E0B' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: stat.color }}
            >
              <motion.div
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2"
                style={{ 
                  fontFamily: 'OCR A Extended, monospace',
                  color: stat.color
                }}
                animate={{
                  textShadow: [
                    `0 0 5px ${stat.color}`,
                    `0 0 20px ${stat.color}`,
                    `0 0 5px ${stat.color}`
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
                className="text-xs sm:text-sm text-gray-400 tracking-wider break-words"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                <span className="hidden sm:inline">{stat.label}</span>
                <span className="sm:hidden">{stat.shortLabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section technologies populaires - nouvelle section responsive */}
        <motion.div
          className="mt-12 sm:mt-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-purple-400"
            style={{ fontFamily: 'OCR A Extended, monospace' }}
            animate={{
              textShadow: [
                '0 0 10px #8B5CF6',
                '0 0 20px #8B5CF6',
                '0 0 10px #8B5CF6'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="hidden sm:inline">TECHNOLOGIES UTILISÉES</span>
            <span className="sm:hidden">TECHNOLOGIES</span>
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {[
              { name: 'React', icon: '⚛️', color: '#61DAFB' },
              { name: 'Node.js', icon: '🟢', color: '#339933' },
              { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
              { name: 'Next.js', icon: '▲', color: '#000000' },
              { name: 'Git', icon: '📝', color: '#F05032' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-gray-900/50 rounded-lg p-3 sm:p-4 text-center border border-gray-800 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: tech.color,
                  boxShadow: `0 0 20px ${tech.color}30`
                }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                >
                  {tech.icon}
                </motion.div>
                <div 
                  className="text-xs sm:text-sm font-bold"
                  style={{ 
                    fontFamily: 'OCR A Extended, monospace',
                    color: tech.color
                  }}
                >
                  {tech.name}
                </div>

                {/* Effet de glow au hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle, ${tech.color}10 0%, transparent 70%)`,
                    filter: 'blur(10px)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action final responsive */}
        <motion.div
          className="mt-16 sm:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
          >
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span className="hidden sm:inline">
                "L'INNOVATION COMMENCE PAR UNE IDÉE, SE RÉALISE PAR LE CODE"
              </span>
              <span className="sm:hidden">
                "L'INNOVATION PAR LE CODE"
              </span>
            </motion.p>
            
            {/* Effet de glow autour du message */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl rounded-lg"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projets;