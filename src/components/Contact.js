import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Détection de la taille d'écran
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // Variables responsive
  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Nettoyer les erreurs quand l'utilisateur tape
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'NOM REQUIS';
    if (!formData.email.trim()) newErrors.email = 'EMAIL REQUIS';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'EMAIL INVALIDE';
    if (!formData.subject.trim()) newErrors.subject = 'SUJET REQUIS';
    if (!formData.message.trim()) newErrors.message = 'MESSAGE REQUIS';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success après 5 secondes
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: isMobile ? 'EMAIL' : 'EMAIL',
      value: isMobile ? 'mifalyandrianandraina93@gmail.com' : 'mifalyandrianandraina93@gmail.com',
      link: 'mailto:mifalyandrianandraina93@gmail.com',
      color: '#00FFFF'
    },
    {
      icon: '💼',
      label: 'LINKEDIN',
      value: isMobile ? 'LinkedIn Profile' : '/in/mifalisoa-jacquis',
      link: 'https://linkedin.com/in/mifalisoa-jacquis',
      color: '#0077B5'
    },
    {
      icon: '💻',
      label: 'GITHUB',
      value: isMobile ? 'GitHub Profile' : '/mifalisoa-dev',
      link: 'https://github.com/mifalisoa-dev',
      color: '#6366F1'
    },
    {
      icon: '📱',
      label: isMobile ? 'TEL' : 'TÉLÉPHONE',
      value: '+261 34 02 596 43',
      link: 'tel:+261340259643',
      color: '#10B981'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Grille animée - Adaptée selon l'écran */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '30px 30px' : isTablet ? '40px 40px' : '50px 50px'
          }}
        />
        
        {/* Particules flottantes - Réduites sur mobile */}
        {[...Array(isMobile ? 15 : isTablet ? 20 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute bg-cyan-400 rounded-full opacity-20 ${
              isMobile ? 'w-1 h-1' : 'w-2 h-2'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, -100, -30],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`font-bold mb-6 sm:mb-8 relative ${
              isMobile ? 'text-4xl sm:text-5xl' : 
              isTablet ? 'text-5xl lg:text-6xl' : 
              'text-6xl lg:text-8xl'
            }`}
            style={{ fontFamily: 'OCR A Extended, monospace' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              CONTACT
            </span>
            
            {/* Effet de scan - Désactivé sur mobile */}
            {!isMobile && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent h-2"
                animate={{ x: [-100, isTablet ? 400 : 500, -100] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}
          </motion.h2>
          
          <motion.p
            className={`text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 ${
              isMobile ? 'text-sm' : isTablet ? 'text-lg' : 'text-xl'
            }`}
            style={{ fontFamily: 'OCR A Extended, monospace' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            PRÊT À DONNER VIE À VOTRE PROJET ? CONTACTEZ-MOI ET COMMENÇONS CETTE AVENTURE ENSEMBLE !
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Formulaire */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Terminal Header */}
            <motion.div
              className="bg-gray-900 border-2 border-cyan-400/50 rounded-t-lg p-3 sm:p-4"
              whileHover={{ 
                borderColor: 'rgba(6, 182, 212, 0.8)',
                boxShadow: isMobile ? 
                  '0 0 20px rgba(6, 182, 212, 0.1)' : 
                  '0 0 30px rgba(6, 182, 212, 0.2)'
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="flex space-x-1 sm:space-x-2">
                  <div className={`rounded-full bg-red-500 ${
                    isMobile ? 'w-2 h-2' : 'w-3 h-3'
                  }`}></div>
                  <div className={`rounded-full bg-yellow-500 ${
                    isMobile ? 'w-2 h-2' : 'w-3 h-3'
                  }`}></div>
                  <div className={`rounded-full bg-green-500 ${
                    isMobile ? 'w-2 h-2' : 'w-3 h-3'
                  }`}></div>
                </div>
                <span 
                  className={`text-cyan-400 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  {isMobile ? '~/contact.jsx' : '~/contact-form.jsx'}
                </span>
              </div>
            </motion.div>

            {/* Formulaire */}
            <motion.div
              className="bg-black/80 border-2 border-cyan-400/50 border-t-0 rounded-b-lg p-4 sm:p-6 lg:p-8"
              style={{ borderTop: 'none' }}
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Champ Nom */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                >
                  <motion.label
                    className={`block text-cyan-400 font-semibold mb-2 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    animate={{
                      color: focusedField === 'name' ? '#00FFFF' : '#6B7280'
                    }}
                  >
                    {'> '} {isMobile ? 'NOM' : 'NOM_COMPLET'}
                  </motion.label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                      isMobile ? 'p-3 text-sm' : 'p-4'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    placeholder={isMobile ? 'VOTRE NOM' : 'VOTRE NOM COMPLET'}
                    whileFocus={{ 
                      borderColor: '#00FFFF',
                      boxShadow: isMobile ? 
                        '0 0 15px rgba(6, 182, 212, 0.2)' : 
                        '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                  />
                  {errors.name && (
                    <motion.span
                      className={`text-red-400 mt-1 block ${
                        isMobile ? 'text-xs' : 'text-xs'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ! {errors.name}
                    </motion.span>
                  )}
                </motion.div>

                {/* Champ Email */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                >
                  <motion.label
                    className={`block text-cyan-400 font-semibold mb-2 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    animate={{
                      color: focusedField === 'email' ? '#00FFFF' : '#6B7280'
                    }}
                  >
                    {'> '} {isMobile ? 'EMAIL' : 'EMAIL_ADDRESS'}
                  </motion.label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                      isMobile ? 'p-3 text-sm' : 'p-4'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    placeholder={isMobile ? 'EMAIL@EXAMPLE.COM' : 'VOTRE.EMAIL@EXAMPLE.COM'}
                    whileFocus={{ 
                      borderColor: '#00FFFF',
                      boxShadow: isMobile ? 
                        '0 0 15px rgba(6, 182, 212, 0.2)' : 
                        '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                  />
                  {errors.email && (
                    <motion.span
                      className={`text-red-400 mt-1 block ${
                        isMobile ? 'text-xs' : 'text-xs'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ! {errors.email}
                    </motion.span>
                  )}
                </motion.div>

                {/* Champ Sujet */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                >
                  <motion.label
                    className={`block text-cyan-400 font-semibold mb-2 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    animate={{
                      color: focusedField === 'subject' ? '#00FFFF' : '#6B7280'
                    }}
                  >
                    {'> '} {isMobile ? 'SUJET' : 'SUJET_MESSAGE'}
                  </motion.label>
                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 ${
                      isMobile ? 'p-3 text-sm' : 'p-4'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    placeholder={isMobile ? 'SUJET DU MESSAGE' : 'SUJET DE VOTRE MESSAGE'}
                    whileFocus={{ 
                      borderColor: '#00FFFF',
                      boxShadow: isMobile ? 
                        '0 0 15px rgba(6, 182, 212, 0.2)' : 
                        '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                  />
                  {errors.subject && (
                    <motion.span
                      className={`text-red-400 mt-1 block ${
                        isMobile ? 'text-xs' : 'text-xs'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ! {errors.subject}
                    </motion.span>
                  )}
                </motion.div>

                {/* Champ Message */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: isMobile ? 1.01 : 1.02 }}
                >
                  <motion.label
                    className={`block text-cyan-400 font-semibold mb-2 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    animate={{
                      color: focusedField === 'message' ? '#00FFFF' : '#6B7280'
                    }}
                  >
                    {'> '} {isMobile ? 'MESSAGE' : 'MESSAGE_CONTENT'}
                  </motion.label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-900/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none ${
                      isMobile ? 'p-3 text-sm' : 'p-4'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                    rows={isMobile ? "4" : "6"}
                    placeholder={isMobile ? 'DÉCRIVEZ VOTRE PROJET...' : 'DÉCRIVEZ VOTRE PROJET EN DÉTAIL...'}
                    whileFocus={{ 
                      borderColor: '#00FFFF',
                      boxShadow: isMobile ? 
                        '0 0 15px rgba(6, 182, 212, 0.2)' : 
                        '0 0 20px rgba(6, 182, 212, 0.3)'
                    }}
                  />
                  {errors.message && (
                    <motion.span
                      className={`text-red-400 mt-1 block ${
                        isMobile ? 'text-xs' : 'text-xs'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ! {errors.message}
                    </motion.span>
                  )}
                </motion.div>

                {/* Bouton Submit */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className={`w-full bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold relative overflow-hidden transition-all duration-500 disabled:opacity-50 ${
                    isMobile ? 'py-3' : 'py-4'
                  }`}
                  style={{ 
                    fontFamily: 'OCR A Extended, monospace',
                    clipPath: isMobile ? 
                      'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)' :
                      'polygon(0 0, calc(100% - 20px) 0, 100% 100%, 20px 100%)'
                  }}
                  disabled={isSubmitting}
                  whileHover={{ 
                    scale: isMobile ? 1.01 : 1.02,
                    boxShadow: isMobile ? 
                      '0 0 20px rgba(6, 182, 212, 0.4)' : 
                      '0 0 30px rgba(6, 182, 212, 0.6)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10 flex items-center justify-center"
                      >
                        <motion.div
                          className={`border-2 border-cyan-400 border-t-transparent rounded-full mr-2 sm:mr-3 ${
                            isMobile ? 'w-4 h-4' : 'w-6 h-6'
                          }`}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span className={isMobile ? 'text-sm' : 'text-base'}>
                          {isMobile ? 'ENVOI...' : 'ENVOI EN COURS...'}
                        </span>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`relative z-10 ${isMobile ? 'text-sm' : 'text-base'}`}
                      >
                        {isMobile ? 'ENVOYER' : 'ENVOYER LE MESSAGE'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </motion.div>

            {/* Message de succès */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-lg flex items-center justify-center border-2 border-green-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center p-4">
                    <motion.div
                      className={`mb-3 sm:mb-4 ${
                        isMobile ? 'text-4xl' : 'text-6xl'
                      }`}
                      animate={{ 
                        rotate: [0, 360, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✅
                    </motion.div>
                    <motion.h3
                      className={`font-bold text-green-400 mb-2 ${
                        isMobile ? 'text-lg' : 'text-2xl'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                      animate={{
                        textShadow: [
                          '0 0 10px #10B981',
                          '0 0 30px #10B981',
                          '0 0 10px #10B981'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      MESSAGE ENVOYÉ !
                    </motion.h3>
                    <p 
                      className={`text-gray-300 ${
                        isMobile ? 'text-sm' : 'text-base'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                    >
                      {isMobile ? 'RÉPONSE SOUS 24H' : 'JE VOUS RÉPONDRAI DANS LES PLUS BREFS DÉLAIS'}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Méthodes de contact */}
            <motion.div
              className="bg-gray-900/50 border-2 border-purple-500/30 rounded-lg p-4 sm:p-6 lg:p-8"
              whileHover={{
                borderColor: 'rgba(168, 85, 247, 0.6)',
                boxShadow: isMobile ? 
                  '0 0 20px rgba(168, 85, 247, 0.1)' : 
                  '0 0 30px rgba(168, 85, 247, 0.2)'
              }}
            >
              <h3 
                className={`font-bold text-purple-400 mb-4 sm:mb-6 flex items-center ${
                  isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                <span className="mr-2 sm:mr-3">📡</span>
                {isMobile ? 'CONTACT' : 'CANAUX DE COMMUNICATION'}
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.link}
                    className={`flex items-center p-3 sm:p-4 bg-black/30 rounded-lg border-l-4 hover:bg-white/5 transition-all duration-300 group ${
                      isMobile ? 'space-x-3' : 'space-x-4'
                    }`}
                    style={{ borderLeftColor: method.color }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: isMobile ? 1.01 : 1.02,
                      backgroundColor: `${method.color}10`
                    }}
                    target={method.label !== 'EMAIL' && method.label !== 'TEL' && method.label !== 'TÉLÉPHONE' ? '_blank' : '_self'}
                    rel={method.label !== 'EMAIL' && method.label !== 'TEL' && method.label !== 'TÉLÉPHONE' ? 'noopener noreferrer' : ''}
                  >
                    <motion.div
                      className={`${
                        isMobile ? 'text-2xl' : 'text-3xl'
                      }`}
                      whileHover={{ rotate: 360, scale: isMobile ? 1.1 : 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div 
                        className={`font-bold ${
                          isMobile ? 'text-xs' : 'text-sm'
                        }`}
                        style={{ 
                          fontFamily: 'OCR A Extended, monospace',
                          color: method.color
                        }}
                      >
                        {method.label}
                      </div>
                      <div 
                        className={`text-gray-300 group-hover:text-white transition-colors truncate ${
                          isMobile ? 'text-xs' : 'text-sm'
                        }`}
                        style={{ fontFamily: 'OCR A Extended, monospace' }}
                      >
                        {method.value}
                      </div>
                    </div>
                    <motion.div
                      className="text-gray-500 group-hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Disponibilité */}
            <motion.div
              className="bg-black/60 border-2 border-green-500/30 rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 
                className={`font-bold text-green-400 mb-3 sm:mb-4 flex items-center ${
                  isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                <motion.span 
                  className="mr-2 sm:mr-3"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🟢
                </motion.span>
                {isMobile ? 'EN LIGNE' : 'STATUT : EN LIGNE'}
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span 
                    className={`text-gray-400 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    {isMobile ? 'RÉPONSE:' : 'TEMPS DE RÉPONSE:'}
                  </span>
                  <span 
                    className={`text-cyan-400 font-bold ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    &lt; 24H
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span 
                    className={`text-gray-400 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    DISPONIBILITÉ:
                  </span>
                  <span 
                    className={`text-green-400 font-bold ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    {isMobile ? 'OUVERT' : 'PROJETS OUVERTS'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span 
                    className={`text-gray-400 ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    {isMobile ? 'FUSEAU:' : 'FUSEAU HORAIRE:'}
                  </span>
                  <span 
                    className={`text-purple-400 font-bold ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{ fontFamily: 'OCR A Extended, monospace' }}
                  >
                    {isMobile ? 'UTC+3' : 'UTC+3 (MADAGASCAR)'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div
              className="bg-gradient-to-br from-gray-900/50 to-black/50 border-2 border-cyan-400/30 rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 
                className={`font-bold text-cyan-400 mb-4 sm:mb-6 text-center ${
                  isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                {isMobile ? 'RÉSEAUX' : 'SUIVEZ-MOI SUR LES RÉSEAUX'}
              </h3>
              
              <div className={`flex justify-center ${
                isMobile ? 'space-x-4' : 'space-x-6'
              }`}>
                {[
                  { name: 'GitHub', icon: '🐙', link: '#', color: '#6366F1' },
                  { name: 'LinkedIn', icon: '💼', link: '#', color: '#0077B5' },
                  { name: 'Twitter', icon: '🐦', link: '#', color: '#1DA1F2' },
                  { name: 'Portfolio', icon: '🌐', link: '#', color: '#00FFFF' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    className={`rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-300 ${
                      isMobile ? 'w-10 h-10 text-lg' : isTablet ? 'w-12 h-12 text-xl' : 'w-14 h-14 text-2xl'
                    }`}
                    style={{ borderColor: social.color }}
                    whileHover={{ 
                      scale: isMobile ? 1.1 : 1.2,
                      backgroundColor: `${social.color}20`,
                      borderColor: social.color,
                      boxShadow: `0 0 ${isMobile ? '15px' : '20px'} ${social.color}50`
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Citation motivante */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.blockquote
                className={`text-cyan-400 italic font-semibold leading-relaxed ${
                  isMobile ? 'text-sm px-2' : isTablet ? 'text-base' : 'text-lg'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                animate={{
                  textShadow: [
                    '0 0 5px rgba(6, 182, 212, 0.5)',
                    `0 0 ${isMobile ? '15px' : '20px'} rgba(6, 182, 212, 0.8)`,
                    '0 0 5px rgba(6, 182, 212, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                "CHAQUE PROJET EST UNE NOUVELLE AVENTURE,
                <br />
                CHAQUE LIGNE DE CODE UNE NOUVELLE POSSIBILITÉ."
              </motion.blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;