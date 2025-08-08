import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function APropos() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -50]);
  const [typedText, setTypedText] = useState('');
  const [currentSkill, setCurrentSkill] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const fullText = "JE SUIS UN ÉTUDIANT EN INFORMATIQUE PASSIONNÉ AVEC UNE EXPERTISE DANS LA CRÉATION D'APPLICATIONS MODERNES ET PERFORMANTES.";

  const skills = [
    {
      name: 'HTML',
      level: 80,
      color: '#E34F26',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#E34F26" d="M3.345 2.068L4.92 19.794l7.077 1.964 7.084-1.964L20.658 2.068H3.345zm14.542 5.233H9.266l.187 2.075h8.246l-.561 6.215-4.135 1.147-4.135-1.147-.282-3.131h2.026l.143 1.588 2.248.606 2.248-.606.234-2.606H6.593L6.031 5.3h11.938l-.082.998z"/>
        </svg>
      )
    },
    {
      name: 'CSS',
      level: 60,
      color: '#1572B6',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      )
    },
    {
      name: 'JavaScript',
      level: 70,
      color: '#F7DF1E',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect width="24" height="24" fill="#F7DF1E"/>
          <path fill="#000" d="M7.334 18.896c-.458 0-.833-.229-1.042-.625l-1.666-2.5c-.084-.125-.125-.229-.125-.375 0-.146.041-.271.125-.375l1.666-2.5c.209-.396.584-.625 1.042-.625.458 0 .833.229 1.041.625l1.667 2.5c.083.104.125.229.125.375 0 .146-.042.25-.125.375l-1.667 2.5c-.208.396-.583.625-1.041.625zm2.834-8.604c0-.458.208-.875.583-1.167.375-.291.834-.458 1.375-.458.542 0 1 .167 1.375.458.375.292.583.709.583 1.167v4.583c0 .417-.083.792-.25 1.125-.166.334-.416.625-.75.875-.333.25-.729.417-1.187.5-.459.083-.917.083-1.375 0-.459-.083-.854-.25-1.188-.5-.333-.25-.583-.541-.75-.875-.166-.333-.25-.708-.25-1.125v-4.583z"/>
          <path fill="#000" d="M15.896 8.5c.208 0 .375.167.375.375v6.25c0 .208-.167.375-.375.375h-1.25c-.209 0-.375-.167-.375-.375v-4.792h-.917c-.208 0-.375-.166-.375-.375v-.916c0-.209.167-.375.375-.375h2.542z"/>
        </svg>
      )
    },
    {
      name: 'React',
      level: 60,
      color: '#61DAFB',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.099 2.21-.099zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.985-1.36-1.56z"/>
        </svg>
      )
    },
    {
      name: 'NestJS',
      level: 50,
      color: '#E0234E',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#E0234E" d="M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.088.019.134v.613c0 .12-.037.24-.112.334l-3.026 3.026a.451.451 0 01-.639 0L7.44 1.966a.451.451 0 01-.132-.32V1.033c0-.045.012-.089.019-.134.086-.316.26-.596.576-.806-.15-.05-.31-.087-.483-.087C6.779.047 6.214.452 6.214 1.033v.613c0 .374.146.724.407.986L9.647 5.658a1.353 1.353 0 001.914 0l3.026-3.026c.261-.262.407-.612.407-.986V1.033c0-.581-.565-.986-1.206-.986z"/>
          <path fill="#E0234E" d="M12 6.676a.451.451 0 00-.32.132l-3.026 3.026c-.262.261-.407.612-.407.986v.613c0 .374.145.725.407.986l3.026 3.026a.451.451 0 00.64 0l3.026-3.026c.262-.261.407-.612.407-.986v-.613c0-.374-.145-.725-.407-.986L12.32 6.808A.451.451 0 0012 6.676z"/>
        </svg>
      )
    },
    {
      name: 'UML',
      level: 60,
      color: '#FACC15',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <rect x="2" y="4" width="6" height="4" fill="#FACC15" stroke="#000" strokeWidth="0.5"/>
          <rect x="2" y="8" width="6" height="1" fill="none" stroke="#000" strokeWidth="0.5"/>
          <rect x="2" y="9" width="6" height="3" fill="none" stroke="#000" strokeWidth="0.5"/>
          
          <rect x="16" y="4" width="6" height="4" fill="#FACC15" stroke="#000" strokeWidth="0.5"/>
          <rect x="16" y="8" width="6" height="1" fill="none" stroke="#000" strokeWidth="0.5"/>
          <rect x="16" y="9" width="6" height="3" fill="none" stroke="#000" strokeWidth="0.5"/>
          
          <rect x="9" y="14" width="6" height="4" fill="#FACC15" stroke="#000" strokeWidth="0.5"/>
          <rect x="9" y="18" width="6" height="1" fill="none" stroke="#000" strokeWidth="0.5"/>
          <rect x="9" y="19" width="6" height="3" fill="none" stroke="#000" strokeWidth="0.5"/>
          
          <line x1="8" y1="6" x2="16" y2="6" stroke="#000" strokeWidth="1"/>
          <line x1="5" y1="12" x2="12" y2="14" stroke="#000" strokeWidth="1"/>
          <line x1="19" y1="12" x2="12" y2="14" stroke="#000" strokeWidth="1"/>
          
          <text x="5" y="6.5" fontSize="3" fill="#000" textAnchor="middle">Class</text>
          <text x="19" y="6.5" fontSize="3" fill="#000" textAnchor="middle">Class</text>
          <text x="12" y="16.5" fontSize="3" fill="#000" textAnchor="middle">Class</text>
        </svg>
      )
    },
    {
      name: 'MySQL',
      level: 60,
      color: '#4479A1',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#00758F" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.154l-.003.003zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.055c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.72.384 3.564.422 5.53zM9.97 18.695h-.889a.48.48 0 01-.027-.32c-.676.633-1.38.961-2.11.961-.296 0-.555-.073-.774-.218a1.57 1.57 0 01-.504-.36 1.49 1.49 0 01-.17-.551c-.028-.1-.041-.325-.041-.674 0-.394.056-.747.167-1.053.111-.307.252-.553.424-.738.172-.185.367-.328.583-.431.216-.102.419-.152.608-.152.528 0 1.015.201 1.461.604v-2.129c0-.329-.014-.549-.041-.66a.794.794 0 00-.185-.407c-.1-.088-.234-.172-.402-.252-.169-.08-.37-.12-.607-.12-.061 0-.154.007-.275.02-.122.014-.24.033-.353.058-.114.025-.214.055-.301.09-.087.035-.138.058-.152.07a.49.49 0 01-.081.04c-.007.043-.11.158-.31.343a4.07 4.07 0 00-.659-.146c.036-.132.085-.234.147-.307.062-.072.143-.119.244-.141.1-.021.21-.039.33-.054.119-.014.226-.021.318-.021.381 0 .72.056 1.017.167.296.111.549.271.758.479.208.208.36.455.456.741.095.285.143.594.143.926v4.33zm-.889-2.95c-.465-.398-.9-.597-1.305-.597-.219 0-.402.065-.548.194a.8.8 0 00-.134.163 2.448 2.448 0 00-.169.4c-.053.17-.08.370-.08.598 0 .451.050.77.152.957.101.187.237.280.407.280.346 0 .735-.28 1.167-.837v-1.158z"/>
          <path fill="#F29111" d="M19.312 12.574c.738 0 1.337.599 1.337 1.337 0 .738-.599 1.337-1.337 1.337-.738 0-1.337-.599-1.337-1.337 0-.738.599-1.337 1.337-1.337z"/>
          <path fill="#00758F" d="M22.071 18.42c-.126-.127-.33-.127-.457 0l-1.24 1.24-1.24-1.24c-.127-.127-.33-.127-.457 0-.126.127-.126.33 0 .457l1.24 1.24-1.24 1.24c-.126.127-.126.33 0 .457.064.063.147.095.229.095.081 0 .165-.032.228-.095l1.24-1.24 1.24 1.24c.063.063.147.095.228.095.082 0 .165-.032.229-.095.126-.127.126-.33 0-.457l-1.24-1.24 1.24-1.24c.126-.127.126-.33 0-.457z"/>
        </svg>
      )
    },
    {
      name: 'Tailwind',
      level: 60,
      color: '#06B6D4',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#06B6D4" d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      )
    },
    {
      name: 'Framer Motion',
      level: 65,
      color: '#FF0055',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#FF0055" d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
        </svg>
      )
    },
    {
      name: 'Node.js',
      level: 60,
      color: '#339933',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.65-0.037,0.132-0.151,0.18-0.175l2.241,1.331c0.083,0.046,0.198,0.046,0.272,0l8.743-5.048 c0.083-0.048,0.133-0.147,0.133-0.25v-10.09c0-0.104-0.05-0.203-0.133-0.25L12.18,1.499c-0.083-0.048-0.189-0.048-0.272,0 L3.165,6.548C3.082,6.596,3.032,6.695,3.032,6.799v10.09c0,0.104,0.05,0.202,0.133,0.25l2.4,1.385 c1.302,0.651,2.098-0.116,2.098-0.885V7.57c0-0.148,0.119-0.266,0.266-0.266h1.162c0.148,0,0.266,0.118,0.266,0.266v10.069 c0,1.75-0.954,2.755-2.615,2.755c-0.51,0-0.912,0-2.035-0.553L2.469,18.205c-0.56-0.324-0.922-0.934-0.922-1.585V6.53 c0-0.651,0.361-1.26,0.922-1.585L11.076,0.163c0.551-0.315,1.296-0.315,1.847,0l8.607,4.782c0.561,0.324,0.922,0.934,0.922,1.585 v10.09c0,0.651-0.36,1.26-0.922,1.585l-8.607,4.782C12.643,23.916,12.321,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.188c0.067,0,0.13-0.026,0.18-0.073 c0.049-0.047,0.075-0.111,0.073-0.18c-0.105-1.25-0.813-2.673-4.435-2.673c-2.539,0-4.051,1.07-4.051,2.862 c0,1.934,1.498,2.464,3.895,2.703c2.88,0.29,3.104,0.711,3.104,1.273c0,0.979-0.79,1.394-2.646,1.394 c-2.331,0-2.84-0.579-3.006-1.727c-0.02-0.128-0.126-0.22-0.253-0.22h-1.188c-0.141,0-0.254,0.112-0.254,0.255 c0,1.482,0.806,3.248,4.702,3.248C17.488,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      )
    },
    {
      name: 'Merise',
      level: 65,
      color: '#8B5CF6',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8">
          <g fill="#8B5CF6">
            <ellipse cx="12" cy="8" rx="8" ry="3" fill="none" stroke="#8B5CF6" strokeWidth="1.5"/>
            <ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#8B5CF6" strokeWidth="1.5"/>
            <ellipse cx="12" cy="16" rx="8" ry="3" fill="none" stroke="#8B5CF6" strokeWidth="1.5"/>
            <line x1="4" y1="8" x2="4" y2="16" stroke="#8B5CF6" strokeWidth="1.5"/>
            <line x1="20" y1="8" x2="20" y2="16" stroke="#8B5CF6" strokeWidth="1.5"/>
            <circle cx="6" cy="10" r="1" fill="#8B5CF6"/>
            <circle cx="12" cy="10" r="1" fill="#8B5CF6"/>
            <circle cx="18" cy="10" r="1" fill="#8B5CF6"/>
            <text x="12" y="14" fontSize="4" fill="#8B5CF6" textAnchor="middle">MCD</text>
          </g>
        </svg>
      )
    }
  ];

  const experiences = [
    {
      year: '2023-2024',
      title: 'ÉTUDIANT L3 INFORMATIQUE',
      company: 'ENI FIANARANTSOA',
      description: 'École Nationale d\'Informatique'
    },
    {
      year: '2023-2024',
      title: 'STAGIAIRE L2',
      company: 'AUXIMAD ANTANANARIVO',
      description: 'Stage de deuxième année'
    },
    {
      year: 'FÉV 2024',
      title: 'FORMATION CYBER SÉCURITÉ',
      company: 'ORANGE DIGITAL CENTER',
      description: 'Club Fianarantsoa'
    },
    {
      year: '2022-2023',
      title: 'ÉTUDIANT L1 INFORMATIQUE',
      company: 'ENI FIANARANTSOA',
      description: 'Première année de Licence'
    }
  ];

  const personalInfo = [
    { label: 'Résidence:', value: 'Fianarantsoa', icon: '📍' },
    { label: 'Âge:', value: '22 ans', icon: '🎂' },
    { label: 'Nationalité:', value: 'Malagasy', icon: '🇲🇬' },
    { label: 'Statut:', value: 'Célibataire', icon: '💼' },
    { label: 'Centres d\'intérêt:', value: 'Jeux vidéo, Échecs, Cuisine', icon: '🎮' }
  ];

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();

    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, isMobile ? 30 : 50);
    return () => clearInterval(typing);
  }, [fullText, isMobile]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, isMobile ? 3000 : 2000);
    return () => clearInterval(interval);
  }, [skills.length, isMobile]);

  return (
    <motion.section
      id="apropos"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{ y }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '30px 30px' : isTablet ? '40px 40px' : '50px 50px'
          }}
        />
      </div>
      <div className="absolute inset-0">
        {['</>', '{...}', '[]', '()', 'fn()', 'var', 'let', 'const', '=>', '&&', '||', '==']
          .slice(0, isMobile ? 6 : isTablet ? 9 : 12)
          .map((code, i) => (
            <motion.div
              key={i}
              className={`absolute text-cyan-400/20 font-mono ${
                isMobile ? 'text-xs' : 'text-sm'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontFamily: 'OCR A Extended, monospace'
              }}
              animate={{
                y: [-20, -100, -20],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            >
              {code}
            </motion.div>
          ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={`font-bold mb-6 sm:mb-8 relative ${
              isMobile ? 'text-4xl sm:text-5xl' : isTablet ? 'text-5xl lg:text-6xl' : 'text-6xl lg:text-8xl'
            }`}
            style={{ fontFamily: 'OCR A Extended, monospace' }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
              À PROPOS
            </span>
            <motion.span
              className="text-cyan-400 ml-2 sm:ml-4"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              _
            </motion.span>
            {!isMobile && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent h-2"
                animate={{ x: [-100, isTablet ? 300 : 400, -100] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            )}
          </motion.h2>
          <motion.div
            className={`text-cyan-400 tracking-widest ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}
            style={{ fontFamily: 'OCR A Extended, monospace' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            [ ÉTUDIANT_INFORMATIQUE.JSON ]
          </motion.div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: isMobile ? 0 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-black/80 border-2 border-cyan-400/50 rounded-lg overflow-hidden"
              whileHover={{
                borderColor: 'rgba(6, 182, 212, 0.8)',
                boxShadow: isMobile ?
                  '0 0 20px rgba(6, 182, 212, 0.2)' :
                  '0 0 30px rgba(6, 182, 212, 0.3)'
              }}
            >
              <div className="bg-gray-900 px-3 sm:px-4 py-2 flex items-center space-x-2">
                <div className={`rounded-full bg-red-500 ${
                  isMobile ? 'w-2 h-2' : 'w-3 h-3'
                }`}></div>
                <div className={`rounded-full bg-yellow-500 ${
                  isMobile ? 'w-2 h-2' : 'w-3 h-3'
                }`}></div>
                <div className={`rounded-full bg-green-500 ${
                  isMobile ? 'w-2 h-2' : 'w-3 h-3'
                }`}></div>
                <span
                  className={`ml-2 sm:ml-4 text-gray-400 ${
                    isMobile ? 'text-xs' : 'text-xs'
                  }`}
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  {isMobile ? '~/profile.js' : '~/student/profile.js'}
                </span>
              </div>
              <div className="p-4 sm:p-6">
                <div
                  className={`text-green-400 mb-2 ${
                    isMobile ? 'text-xs' : 'text-sm'
                  }`}
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  $ whoami
                </div>
                <motion.div
                  className={`text-cyan-400 leading-relaxed ${
                    isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
                  }`}
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                >
                  {typedText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.div>
                <motion.div
                  className={`mt-4 sm:mt-6 text-purple-400 leading-relaxed ${
                    isMobile ? 'text-xs' : isTablet ? 'text-sm' : 'text-base'
                  }`}
                  style={{ fontFamily: 'OCR A Extended, monospace' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                >
                  ACTUELLEMENT EN TROISIÈME ANNÉE DE LICENCE EN INFORMATIQUE À L'ENI FIANARANTSOA,
                  J'AI ACQUIS UNE SOLIDE EXPÉRIENCE GRÂCE À MES STAGES ET FORMATIONS COMPLÉMENTAIRES.
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3
                className={`font-bold text-purple-400 mb-4 sm:mb-6 flex items-center ${
                  isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                <span className="mr-2 sm:mr-3">🎓</span>
                PARCOURS
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className={`p-3 bg-black/30 rounded border-l-4 border-cyan-400 ${
                      isMobile ? 'space-y-2' : 'space-y-1'
                    }`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: isMobile ? 1.01 : 1.02,
                      backgroundColor: 'rgba(6, 182, 212, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`text-cyan-400 font-bold ${
                          isMobile ? 'text-xs' : 'text-sm'
                        }`}
                        style={{ fontFamily: 'OCR A Extended, monospace' }}
                      >
                        {exp.year}
                      </div>
                    </div>
                    <div>
                      <div
                        className={`text-white font-semibold ${
                          isMobile ? 'text-sm' : 'text-base'
                        }`}
                        style={{ fontFamily: 'OCR A Extended, monospace' }}
                      >
                        {exp.title}
                      </div>
                      <div
                        className={`text-gray-400 ${
                          isMobile ? 'text-xs' : 'text-sm'
                        }`}
                        style={{ fontFamily: 'OCR A Extended, monospace' }}
                      >
                        {exp.company}
                      </div>
                      <div
                        className={`text-gray-500 ${
                          isMobile ? 'text-xs' : 'text-xs'
                        }`}
                        style={{ fontFamily: 'OCR A Extended, monospace' }}
                      >
                        {exp.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4 sm:p-6 mt-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className={`font-bold text-purple-400 mb-4 sm:mb-6 flex items-center ${
                  isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-2xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.span 
                  className="mr-2 sm:mr-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👤
                </motion.span>
                INFORMATIONS PERSONNELLES
              </motion.h3>
              <div className="space-y-2 sm:space-y-3">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(139, 92, 246, 0.1)',
                      borderRadius: '8px',
                      padding: '8px'
                    }}
                  >
                    <span 
                      className="text-gray-400 flex items-center" 
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                    >
                      <motion.span 
                        className="mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.3 
                        }}
                      >
                        {info.icon}
                      </motion.span>
                      {info.label}
                    </span>
                    <motion.span 
                      className="text-white" 
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                      whileHover={{ color: '#8B5CF6' }}
                    >
                      {info.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: isMobile ? 0 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 ${
                  isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
                animate={{
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(6, 182, 212, 0.5)',
                      '0 0 20px rgba(139, 92, 246, 0.8)',
                      '0 0 10px rgba(6, 182, 212, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  MES COMPÉTENCES
                </motion.span>
              </motion.h3>
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-cyan-400/50 rounded-lg p-6 sm:p-8 relative overflow-hidden"
              whileHover={{
                borderColor: 'rgba(6, 182, 212, 1)',
                boxShadow: isMobile ?
                  '0 0 30px rgba(6, 182, 212, 0.2)' :
                  '0 0 50px rgba(6, 182, 212, 0.3)'
              }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="text-center">
                <motion.div
                  key={currentSkill}
                  className={`mb-3 sm:mb-4 flex justify-center ${
                    isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'
                  }`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {skills[currentSkill].logo}
                </motion.div>
                <motion.h3
                  className={`font-bold mb-3 sm:mb-4 ${
                    isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-3xl'
                  }`}
                  style={{
                    fontFamily: 'OCR A Extended, monospace',
                    color: skills[currentSkill].color
                  }}
                  animate={{
                    textShadow: `0 0 ${isMobile ? '10px' : '20px'} ${skills[currentSkill].color}`
                  }}
                >
                  {skills[currentSkill].name}
                </motion.h3>
                <div className="relative">
                  <div className={`w-full bg-gray-700 rounded-full mb-2 ${
                    isMobile ? 'h-2' : 'h-3'
                  }`}>
                    <motion.div
                      className={`rounded-full ${
                        isMobile ? 'h-2' : 'h-3'
                      }`}
                      style={{ backgroundColor: skills[currentSkill].color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skills[currentSkill].level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <motion.div
                    className={`text-right font-bold ${
                      isMobile ? 'text-xs' : 'text-sm'
                    }`}
                    style={{
                      fontFamily: 'OCR A Extended, monospace',
                      color: skills[currentSkill].color
                    }}
                  >
                    {skills[currentSkill].level}%
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <div className={`grid gap-3 sm:gap-4 ${
              isMobile ? 'grid-cols-3' : 'grid-cols-3'
            }`}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`p-3 sm:p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                    index === currentSkill
                      ? 'bg-white/10 border-cyan-400'
                      : 'bg-gray-900/30 border-gray-700 hover:border-purple-500'
                  }`}
                  whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentSkill(index)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`mb-2 flex justify-center ${
                    isMobile ? 'text-lg' : 'text-2xl'
                  }`}>
                    {skill.logo}
                  </div>
                  <div
                    className={`font-bold text-center ${
                      isMobile ? 'text-xs leading-tight' : 'text-xs'
                    }`}
                    style={{
                      fontFamily: 'OCR A Extended, monospace',
                      color: index === currentSkill ? skill.color : '#9CA3AF'
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    className={`text-center mt-1 ${
                      isMobile ? 'text-xs' : 'text-xs'
                    }`}
                    style={{
                      fontFamily: 'OCR A Extended, monospace',
                      color: index === currentSkill ? skill.color : '#6B7280'
                    }}
                  >
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-black/60 border border-green-500/30 rounded-lg p-4 sm:p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3
                className={`font-bold text-green-400 mb-3 sm:mb-4 flex items-center ${
                  isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
                }`}
                style={{ fontFamily: 'OCR A Extended, monospace' }}
              >
                <span className="mr-2">📊</span>
                {isMobile ? 'STATS' : 'STATISTIQUES ACADÉMIQUES'}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  { label: isMobile ? 'ANNÉE' : 'ANNÉE ACTUELLE', value: 'L3', color: '#10B981' },
                  { label: isMobile ? 'PROJETS' : 'PROJETS RÉALISÉS', value: '20+', color: '#06B6D4' },
                  { label: isMobile ? 'TECHNO' : 'TECHNOLOGIES', value: '10+', color: '#8B5CF6' },
                  { label: isMobile ? 'STAGE' : 'EXPÉRIENCE', value: '2 ANS', color: '#EF4444' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className={`text-gray-400 ${
                        isMobile ? 'text-xs' : 'text-sm'
                      }`}
                      style={{ fontFamily: 'OCR A Extended, monospace' }}
                    >
                      {stat.label}:
                    </span>
                    <motion.span
                      className={`font-bold ${
                        isMobile ? 'text-base' : 'text-lg'
                      }`}
                      style={{
                        fontFamily: 'OCR A Extended, monospace',
                        color: stat.color
                      }}
                      animate={{
                        textShadow: [
                          `0 0 5px ${stat.color}`,
                          `0 0 ${isMobile ? '15px' : '20px'} ${stat.color}`,
                          `0 0 5px ${stat.color}`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: isMobile ? 1.02 : 1.05 }}
          >
            <motion.blockquote
              className={`text-cyan-400 font-bold italic max-w-4xl mx-auto leading-relaxed ${
                isMobile ? 'text-lg' : isTablet ? 'text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'
              }`}
              style={{ fontFamily: 'OCR A Extended, monospace' }}
              animate={{
                textShadow: [
                  '0 0 10px rgba(6, 182, 212, 0.5)',
                  `0 0 ${isMobile ? '20px' : '30px'} rgba(6, 182, 212, 0.8)`,
                  '0 0 10px rgba(6, 182, 212, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "L'APPRENTISSAGE EST UN VOYAGE SANS FIN, CHAQUE LIGNE DE CODE EST UN PAS VERS L'EXCELLENCE."
            </motion.blockquote>
            {!isMobile && (
              <>
                <motion.span
                  className={`absolute text-purple-500/30 ${
                    isTablet ? 'text-4xl -top-6 -left-6' : 'text-6xl -top-8 -left-8'
                  }`}
                  animate={{ rotate: [0, 360, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  "
                </motion.span>
                <motion.span
                  className={`absolute text-purple-500/30 ${
                    isTablet ? 'text-4xl -bottom-6 -right-6' : 'text-6xl -bottom-8 -right-8'
                  }`}
                  animate={{ rotate: [360, 0, 360] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  "
                </motion.span>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default APropos;