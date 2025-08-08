import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchText, setGlitchText] = useState('MIFALISOA JACQUIS ANDRIANANDRAINA');

  // Mise à jour de l'heure en temps réel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Effet de glitch sur le nom
  useEffect(() => {
    const originalText = 'MIFALISOA JACQUIS ANDRIANANDRAINA';
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) { // 5% de chance de glitch
        let glitched = originalText;
        const numGlitches = Math.floor(Math.random() * 3) + 1;
        
        for (let i = 0; i < numGlitches; i++) {
          const randomIndex = Math.floor(Math.random() * originalText.length);
          const randomChar = glitchChars[Math.floor(Math.random() * glitchChars.length)];
          glitched = glitched.substring(0, randomIndex) + randomChar + glitched.substring(randomIndex + 1);
        }
        
        setGlitchText(glitched);
        
        // Retour au texte normal après 100ms
        setTimeout(() => {
          setGlitchText(originalText);
        }, 100);
      }
    }, 200);
    
    return () => clearInterval(glitchInterval);
  }, []);

  const socialLinks = [
    {
      name: 'EMAIL',
      icon: '📧',
      link: 'mailto:mifalyandrianandraina93@gmail.com',
      color: '#00FFFF',
      handle: 'mifalyandrianandraina93@gmail.com',
      shortHandle: 'Email'
    },
    {
      name: 'LINKEDIN',
      icon: '💼',
      link: 'https://linkedin.com/in/mifalisoa-jacquis',
      color: '#0077B5',
      handle: '/in/mifalisoa-jacquis',
      shortHandle: 'LinkedIn'
    },
    {
      name: 'GITHUB',
      icon: '🐙',
      link: 'https://github.com/mifalisoa-dev',
      color: '#6366F1',
      handle: '/mifalisoa-dev',
      shortHandle: 'GitHub'
    },
    {
      name: 'PHONE',
      icon: '📱',
      link: 'tel:+261940259643',
      color: '#10B981',
      handle: '+261 34 02 596 43',
      shortHandle: 'Téléphone'
    }
  ];

  const quickLinks = [
    { name: 'ACCUEIL', href: '#accueil' },
    { name: 'À PROPOS', href: '#apropos' },
    { name: 'PROJETS', href: '#projets' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const technologies = [
    'REACT.JS', 'JAVASCRIPT', 'TAILWIND CSS', 'NODE.JS', 
     'FRAMER MOTION', 'NEXT.JS',
  ];

  return (
    <footer className="bg-black border-t-2 border-cyan-400/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grille de fond responsive */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(20px, 4vw, 30px) clamp(20px, 4vw, 30px)'
          }}
        />
        
        {/* Particules de code flottantes - réduites sur mobile */}
        {['{}', '[]', '</>', 'fn()', 'var', 'let', 'const', '=>'].slice(0, window.innerWidth < 768 ? 4 : 8).map((code, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-xs hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontFamily: 'OCR A Extended, monospace'
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Section principale responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
          
          {/* Colonne profil - prend toute la largeur sur mobile, 2 colonnes sur xl */}
          <motion.div
            className="md:col-span-2 xl:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Logo/Nom avec effet de glitch responsive */}
            <motion.div
              className="mb-4 sm:mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 relative break-words"
                style={{ 
                  fontFamily: 'OCR A Extended, monospace',
                  color: '#00FFFF',
                  lineHeight: '1.2'
                }}
                animate={{
                  textShadow: [
                    '0 0 10px #00FFFF',
                    '0 0 30px #00FFFF, 0 0 40px #FF00FF',
                    '0 0 10px #00FFFF'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="hidden sm:inline">{glitchText}</span>
                <span className="sm:hidden">MIFALISOA J. ANDRIANANDRAINA</span>
              </motion.h3>
              
              <motion.div
                className="text-xs sm:text-sm text-purple-400 tracking-[0.2em] sm:tracking-[0.3em]"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="hidden sm:inline">[ DÉVELOPPEUR_FULL-STACK.EXE ]</span>
                <span className="sm:hidden">[ DEV_FULL-STACK ]</span>
              </motion.div>
            </motion.div>

            {/* Description responsive */}
            <motion.p
              className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="hidden sm:inline">
                PASSIONNÉ PAR LA CRÉATION D'EXPÉRIENCES NUMÉRIQUES INNOVANTES ET 
                LA TRANSFORMATION D'IDÉES EN RÉALITÉS TECHNOLOGIQUES.
              </span>
              <span className="sm:hidden">
                CRÉATION D'EXPÉRIENCES NUMÉRIQUES INNOVANTES.
              </span>
            </motion.p>

            {/* Technologies utilisées responsive */}
            <div className="mb-4 sm:mb-6">
              <motion.h4
                className="text-cyan-400 font-bold mb-3 text-xs sm:text-sm"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                STACK_TECHNIQUE:
              </motion.h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-2 sm:px-3 py-1 text-xs border rounded-full transition-all duration-300"
                    style={{ 
                      fontFamily: 'OCR A Extended, monospace',
                      borderColor: '#6B7280',
                      color: '#9CA3AF',
                      fontSize: 'clamp(0.6rem, 2vw, 0.75rem)'
                    }}
                    whileHover={{ 
                      borderColor: '#00FFFF',
                      color: '#00FFFF',
                      scale: 1.05,
                      boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Colonne navigation rapide responsive */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-3 md:order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h4
                className="text-purple-400 font-bold mb-3 sm:mb-4 text-base lg:text-lg"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                animate={{
                  textShadow: [
                    '0 0 5px #8B5CF6',
                    '0 0 15px #8B5CF6',
                    '0 0 5px #8B5CF6'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="hidden sm:inline">NAVIGATION_RAPIDE</span>
                <span className="sm:hidden">NAVIGATION</span>
              </motion.h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group text-sm sm:text-base"
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    whileHover={{ x: 10, color: '#00FFFF' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="group-hover:opacity-100 opacity-0 transition-opacity mr-2">
                      {'>'} 
                    </span>
                    {link.name}
                    
                    {/* Ligne animée */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Horloge en temps réel responsive */}
            <motion.div
              className="bg-gray-900/50 border border-green-500/30 rounded-lg p-3 sm:p-4"
              whileHover={{ 
                borderColor: 'rgba(16, 185, 129, 0.6)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
              }}
            >
              <motion.h5
                className="text-green-400 font-bold mb-2 text-xs sm:text-sm"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                <span className="hidden sm:inline">SYSTÈME_TEMPS_LOCAL:</span>
                <span className="sm:hidden">TEMPS_LOCAL:</span>
              </motion.h5>
              <div className="space-y-1">
                <motion.div
                  className="text-cyan-400 font-mono text-base sm:text-lg"
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                  animate={{
                    textShadow: [
                      '0 0 5px #00FFFF',
                      '0 0 15px #00FFFF',
                      '0 0 5px #00FFFF'
                    ]
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {currentTime.toLocaleTimeString('fr-FR', { 
                    hour12: false,
                    timeZone: 'Indian/Antananarivo'
                  })}
                </motion.div>
                <div 
                  className="text-gray-400 text-xs break-words"
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  {currentTime.toLocaleDateString('fr-FR', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    timeZone: 'Indian/Antananarivo'
                  }).toUpperCase()}
                </div>
                <div 
                  className="text-purple-400 text-xs"
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  UTC+3 - MADAGASCAR
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne contact responsive */}
          <motion.div
            className="order-2 md:order-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-pink-400 font-bold mb-3 sm:mb-4 text-base lg:text-lg"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                textShadow: [
                  '0 0 5px #EC4899',
                  '0 0 15px #EC4899',
                  '0 0 5px #EC4899'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="hidden sm:inline">CONNEXIONS_RÉSEAU</span>
              <span className="sm:hidden">CONTACT</span>
            </motion.h4>
            
            <div className="space-y-2 sm:space-y-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  className="flex items-center space-x-2 sm:space-x-3 text-gray-400 hover:text-white transition-all duration-300 group"
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                  whileHover={{ 
                    x: 5,
                    color: social.color
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  target={social.name !== 'EMAIL' && social.name !== 'PHONE' ? '_blank' : '_self'}
                  rel={social.name !== 'EMAIL' && social.name !== 'PHONE' ? 'noopener noreferrer' : ''}
                >
                  <motion.div
                    className="text-lg sm:text-xl flex-shrink-0"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {social.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold">
                      <span className="hidden sm:inline">{social.name}</span>
                      <span className="sm:hidden">{social.shortHandle}</span>
                    </div>
                    <div className="text-xs opacity-75 group-hover:opacity-100 truncate">
                      <span className="hidden sm:inline">{social.handle}</span>
                      <span className="sm:hidden">Cliquer pour contacter</span>
                    </div>
                  </div>
                  
                  {/* Indicateur de statut */}
                  <motion.div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: social.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation avec effet néon */}
        <motion.div
          className="relative mb-6 sm:mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              boxShadow: [
                '0 0 5px #00FFFF',
                '0 0 20px #00FFFF, 0 0 30px #FF00FF',
                '0 0 5px #00FFFF'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Section copyright et informations légales responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-gray-500 text-xs sm:text-sm"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="hidden sm:inline">
                © 2025 MIFALISOA JACQUIS ANDRIANANDRAINA<br />
                TOUS DROITS RÉSERVÉS
              </span>
              <span className="sm:hidden">
                © 2025 M.J. ANDRIANANDRAINA<br />
                TOUS DROITS RÉSERVÉS
              </span>
            </motion.p>
          </motion.div>

          {/* Status système */}
          <motion.div
            className="text-center order-1 md:order-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 sm:space-x-4">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span 
                  className="text-green-400 font-bold text-xs"
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  <span className="hidden sm:inline">SYSTÈME_ACTIF</span>
                  <span className="sm:hidden">ACTIF</span>
                </span>
              </motion.div>
              
              <motion.div
                className="text-cyan-400 text-xs"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                animate={{
                  textShadow: [
                    '0 0 5px #00FFFF',
                    '0 0 15px #00FFFF',
                    '0 0 5px #00FFFF'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                v2.0.25
              </motion.div>
            </div>
          </motion.div>

          {/* Mentions légales */}
          <motion.div
            className="text-center md:text-right order-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:items-end space-y-1">
              <motion.a
                href="#privacy"
                className="text-gray-500 hover:text-cyan-400 transition-colors text-xs"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                whileHover={{ x: -5 }}
              >
                <span className="hidden sm:inline">POLITIQUE_DE_CONFIDENTIALITÉ</span>
                <span className="sm:hidden">CONFIDENTIALITÉ</span>
              </motion.a>
              <motion.a
                href="#terms"
                className="text-gray-500 hover:text-cyan-400 transition-colors text-xs"
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                whileHover={{ x: -5 }}
              >
                <span className="hidden sm:inline">CONDITIONS_D'UTILISATION</span>
                <span className="sm:hidden">CONDITIONS</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Message de fin avec effet spécial responsive */}
        <motion.div
          className="mt-8 sm:mt-12 text-center relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.p
              className="text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent px-4"
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span className="hidden sm:inline">
                "CODÉ AVEC ❤️ ET BEAUCOUP DE ☕ À MADAGASCAR"
              </span>
              <span className="sm:hidden">
                "CODÉ AVEC ❤️ À MADAGASCAR"
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

        {/* Indicateurs de performance en bas - masqué sur très petits écrans */}
        <motion.div
          className="mt-6 sm:mt-8 hidden sm:flex justify-center flex-wrap gap-4 sm:gap-8 text-xs"
          style={{ fontFamily: 'OCR A Extended, monospace' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'UPTIME', value: '99.9%', color: '#10B981' },
            { label: 'PERFORMANCE', value: '95/100', color: '#F59E0B' },
            { label: 'SÉCURITÉ', value: 'A+', color: '#EF4444' },
            { label: 'ACCESSIBILITÉ', value: '100%', color: '#8B5CF6' }
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="font-bold text-sm"
                style={{ color: metric.color }}
                animate={{
                  textShadow: [
                    `0 0 5px ${metric.color}`,
                    `0 0 15px ${metric.color}`,
                    `0 0 5px ${metric.color}`
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {metric.value}
              </motion.div>
              <div className="text-gray-500 text-xs">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Overlay de particules en mouvement - réduit sur mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(window.innerWidth < 768 ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -50, -10],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Ligne de glow en bas */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
          boxShadow: [
            '0 0 10px #00FFFF',
            '0 0 30px #00FFFF',
            '0 0 10px #00FFFF'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </footer>
  );
}

export default Footer;