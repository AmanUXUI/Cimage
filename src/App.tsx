/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Monitor, 
  CheckCircle, 
  GraduationCap, 
  Briefcase, 
  ArrowRight, 
  Phone, 
  MessageCircle,
  User,
  ChevronRight,
  PhoneCall,
  Smartphone,
  X,
  BookOpen,
  Building2,
  Cpu,
  Globe2,
  Award,
  Check,
  BrainCircuit,
  Code2,
  Cloud,
  BarChart3,
  ShieldCheck,
  Target,
  TrendingUp,
  UserPlus,
  Quote,
  MapPin,
  Bus,
  Edit3
} from 'lucide-react';

const StatsItems = () => (
  <>
    {/* Years of Excellence */}
    <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 group shrink-0 border-r-2 border-slate-100">
      <span className="text-yellow-500 text-2xl sm:text-3xl drop-shadow-sm">🏆</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-red leading-none">17+</span>
        <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black text-brand-blue uppercase tracking-tight whitespace-nowrap">Years Of Excellence</span>
      </div>
      <span className="text-yellow-500 text-2xl sm:text-3xl scale-x-[-1] drop-shadow-sm">🏆</span>
    </div>

    {/* Successful Careers */}
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 text-center shrink-0 border-r-2 border-slate-100">
      <div className="flex -space-x-1 mb-1">
        {[1, 2, 3].map(i => (
          <User key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-brand-yellow fill-current" />
        ))}
      </div>
      <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-black text-brand-blue uppercase leading-tight">
        Thousands of<br />
        <span className="text-brand-red text-xs sm:text-sm">Successful</span><br />
        Careers
      </p>
    </div>

    {/* Google Partner */}
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-10 shrink-0 border-r-2 md:border-r-0 border-slate-100">
      <div className="flex items-center gap-0.5 sm:gap-1 mb-1">
        <span className="text-blue-500 font-bold text-lg sm:text-xl lg:text-2xl">G</span>
        <span className="text-red-500 font-bold text-lg sm:text-xl lg:text-2xl">o</span>
        <span className="text-yellow-500 font-bold text-lg sm:text-xl lg:text-2xl">o</span>
        <span className="text-blue-500 font-bold text-lg sm:text-xl lg:text-2xl">g</span>
        <span className="text-green-500 font-bold text-lg sm:text-xl lg:text-2xl">l</span>
        <span className="text-red-500 font-bold text-lg sm:text-xl lg:text-2xl">e</span>
      </div>
      <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-black text-brand-blue uppercase leading-none text-center mb-1">
        Education Partner
      </p>
      <div className="bg-brand-navy text-white text-[7px] sm:text-[8px] lg:text-[9px] font-black px-2 sm:px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md">
        (Only in Bihar)
      </div>
    </div>
  </>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-yellow selection:text-brand-blue flex flex-col">
      {/* Trust & Header Bar */}
      <header className="w-full bg-white border-b border-slate-100 z-50 overflow-hidden md:overflow-visible">
        <div className="max-w-7xl mx-auto px-0 lg:px-8 py-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0 px-4 md:px-0">
            <img 
              src="https://cimage.in/wp-content/uploads/2025/06/logoc-1.webp" 
              alt="Cimage College Logo" 
              className="h-12 sm:h-16 lg:h-20 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full md:w-auto overflow-hidden">
            <div className="flex w-max animate-marquee md:animate-none md:w-auto md:flex-wrap justify-center items-center">
              <StatsItems />
              {/* Duplicate for mobile marquee */}
              <div className="flex md:hidden items-center">
                <StatsItems />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <section className="relative flex-grow flex items-center tech-bg min-h-[650px] lg:min-h-[800px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center pt-12 md:pt-16 lg:pt-20 pb-0 lg:pb-0">
          
          {/* LEFT: CONTENT (Headline & Features) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 order-1 pb-12 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 sm:space-y-4 text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                Best <span className="text-brand-yellow">BCA</span><br />
                College in Patna
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-200">
                for Skills, Training & Placement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-brand-yellow rounded-2xl p-4 sm:p-5 shadow-2xl border-l-[10px] border-brand-red max-w-xl mx-auto lg:mx-0"
            >
              <p className="text-base sm:text-lg lg:text-xl font-bold text-brand-navy leading-snug">
                Not just a degree – Get industry training, 50+ add-on courses & placement preparation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
              {[
                { icon: Monitor, label: "Industry Focused Learning" },
                { icon: CheckCircle, label: "100% Placement Assistance" },
                { icon: Briefcase, label: "Live Projects & Practical Training" },
                { icon: GraduationCap, label: "Internships & Career Support" },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-white rounded-2xl p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4 shadow-xl hover:translate-y-[-4px] transition-all"
                >
                  <div className="bg-brand-navy rounded-xl p-2 shadow-md shrink-0">
                    <f.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <p className="text-[9px] sm:text-[10px] font-black text-brand-navy uppercase leading-tight tracking-wide">
                    {f.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 shrink-0 sm:justify-center lg:justify-start">
              <button className="flex items-center justify-between w-full sm:w-auto bg-brand-red text-white p-2 sm:pr-3 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all group min-h-[64px] sm:min-h-[72px] flex-1">
                <div className="flex-1 flex items-center px-4 sm:px-6 leading-tight">
                  <span className="text-base sm:text-lg font-black uppercase tracking-tighter text-left">APPLY NOW</span>
                </div>
                <div className="bg-white/20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
                </div>
              </button>

              <button className="flex items-center justify-between w-full sm:w-auto bg-brand-yellow text-brand-navy p-2 sm:pr-3 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all group min-h-[64px] sm:min-h-[72px] flex-1">
                <div className="flex-1 flex items-center px-4 sm:px-6 leading-tight">
                  <span className="text-base sm:text-lg font-black uppercase tracking-tighter text-left">BOOK FREE COUNSELLING</span>
                </div>
                <div className="bg-black/10 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
                </div>
              </button>
            </div>
          </div>

          {/* MIDDLE: HERO CUTOUT IMAGE */}
          <div className="lg:col-span-3 order-2 flex justify-center h-full pt-4 lg:pt-0 relative lg:static">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              className="relative -mb-24 sm:-mb-32 lg:mb-0 lg:absolute lg:bottom-0 lg:left-[55%] lg:-translate-x-1/2 w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] flex items-end z-0"
            >
              <img 
                src="https://i.postimg.cc/QN28vgqW/wgfsdf.png" 
                alt="Student Cutout" 
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] scale-110 sm:scale-125 lg:scale-115 origin-bottom"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* RIGHT: ADMISSION FORM */}
          <div className="lg:col-span-4 z-10 order-3 pt-8 pb-12 lg:py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] shadow-[0_45px_70px_-20px_rgba(0,0,0,0.2)] overflow-hidden max-w-sm mx-auto border border-slate-100"
            >
              {/* Form Header */}
              <div className="bg-brand-navy p-4 text-center space-y-0.5 relative overflow-hidden">
                <div className="bg-brand-yellow/20 text-brand-yellow text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest inline-block mb-1">Admission 2024-25</div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight italic">Secure Your Seat!</h3>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-blue" />
                    <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm font-bold text-brand-navy focus:border-brand-blue focus:bg-white outline-none transition-all" />
                  </div>
                  
                  <div className="relative">
                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-blue" />
                    <input type="tel" placeholder="Mobile Number" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm font-bold text-brand-navy focus:border-brand-blue focus:bg-white outline-none transition-all" />
                  </div>

                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-blue" />
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 text-sm font-bold text-brand-navy focus:border-brand-blue focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                      <option>Select Course (BCA, BBA...)</option>
                      <option>BCA (Professional)</option>
                      <option>BBA (Industry Ready)</option>
                      <option>B.Com (Professional)</option>
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 rotate-90" />
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-red text-white py-3 rounded-lg text-base font-black shadow-lg shadow-red-200 hover:bg-red-700 transition-all uppercase flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Query</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a href="tel:9835024444" className="bg-brand-blue/5 hover:bg-brand-blue hover:text-white border border-brand-blue/10 rounded-lg p-2.5 flex items-center justify-center gap-2 transition-all group">
                    <PhoneCall className="w-4 h-4 text-brand-blue group-hover:text-white" />
                    <span className="text-[10px] font-black uppercase tracking-tight">Call Now</span>
                  </a>
                  <a href="https://wa.me/7250767676" className="bg-green-50 hover:bg-[#25D366] hover:text-white border border-green-100 rounded-lg p-2.5 flex items-center justify-center gap-2 transition-all group">
                    <MessageCircle className="w-4 h-4 text-[#25D366] fill-none group-hover:text-white group-hover:fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-tight">WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Student Image Background Accent */}
        <div className="hidden lg:block absolute bottom-0 left-[40%] w-[35%] h-[95%] pointer-events-none opacity-40 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1523240715632-610174e9e28b?auto=format&fit=crop&q=80&w=1200" 
            alt="" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* COMPARISON SECTION: Job vs Struggle */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
              BCA करने के बाद <span className="text-brand-blue font-black">Job मिलेगी</span> या <span className="text-brand-red font-black">Struggle?</span>
            </h2>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
            {/* VS Badge Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
              <div className="w-24 h-24 bg-brand-navy rounded-full border-8 border-white shadow-2xl flex items-center justify-center">
                <span className="text-white text-4xl font-black italic">VS</span>
              </div>
            </div>

            {/* Other Colleges Cell */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50/50 rounded-[2rem] p-6 sm:p-8 lg:p-12 border-2 border-red-100 flex flex-col space-y-6 sm:space-y-8 relative"
            >
              <div className="bg-brand-red text-white py-2 px-6 rounded-full self-start shadow-lg mx-auto lg:mx-0">
                <span className="text-lg sm:text-xl font-black uppercase tracking-widest">OTHER COLLEGES</span>
              </div>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Only Syllabus",
                  "No Practical Skills",
                  "No Industry Exposure",
                  "No Placement Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[4]" />
                    </div>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Mobile VS Badge */}
            <div className="lg:hidden flex items-center justify-center z-20 -my-14 relative pointer-events-none">
              <div className="w-16 h-16 bg-brand-navy rounded-full border-4 border-white shadow-xl flex items-center justify-center pointer-events-auto">
                <span className="text-white text-xl font-black italic">VS</span>
              </div>
            </div>

            {/* CIMAGE Cell */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-50/50 rounded-[2rem] p-6 sm:p-8 lg:p-12 border-2 border-green-100 flex flex-col space-y-6 sm:space-y-8 shadow-[0_20px_50px_rgba(34,197,94,0.1)] mt-4 lg:mt-0"
            >
              <div className="bg-green-600 text-white py-2 px-6 rounded-full self-start shadow-lg mx-auto lg:mx-0">
                <span className="text-lg sm:text-xl font-black uppercase tracking-widest">CIMAGE</span>
              </div>
              <ul className="space-y-4 sm:space-y-6 text-left">
                {[
                  "Live Projects",
                  "Industry Training",
                  "Placement Preparation",
                  "Career-Focused Learning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 sm:gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-[4]" />
                    </div>
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-yellow px-10 py-4 rounded-xl shadow-xl flex items-center justify-center border-b-8 border-brand-blue"
            >
              <span className="text-2xl lg:text-4xl font-black text-brand-navy uppercase tracking-tighter">
                DIFFERENCE = <span className="text-brand-red">COLLEGE</span>
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CIMAGE IS DIFFERENT SECTION */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-blue/10 -z-10" />
            <h2 className="text-2xl lg:text-3xl font-black text-brand-navy bg-slate-50 px-8 inline-block uppercase tracking-tight">
              WHY <span className="text-brand-red">C</span>IMAGE IS NOT LIKE OTHER COLLEGES
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Google Partner */}
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <div className="flex items-center gap-1">
                    <span className="text-blue-500 font-bold text-4xl">G</span>
                    <span className="text-red-500 font-bold text-4xl">o</span>
                    <span className="text-yellow-500 font-bold text-4xl">o</span>
                    <span className="text-blue-500 font-bold text-4xl">g</span>
                    <span className="text-green-500 font-bold text-4xl">l</span>
                    <span className="text-red-500 font-bold text-4xl">e</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-brand-blue uppercase leading-tight">GOOGLE EDUCATION PARTNER</h3>
                  <p className="text-sm font-bold text-slate-600">Only institute in Bihar</p>
                </div>
              </div>

              {/* Wipro COE */}
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/3840px-Wipro_Primary_Logo_Color_RGB.svg.png" 
                    alt="Wipro Logo" 
                    className="h-14 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-brand-blue uppercase leading-tight">WIPRO CENTER OF EXCELLENCE</h3>
                  <p className="text-sm font-bold text-slate-600">DWS program in final year</p>
                </div>
              </div>

              {/* IIT Bombay */}
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center text-brand-blue">
                  <Award className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-brand-blue uppercase leading-tight">IIT BOMBAY ASSOCIATION</h3>
                  <ul className="text-xs font-bold text-slate-600 space-y-1">
                    <li className="flex items-center justify-center gap-1"><Check className="w-3 h-3 text-brand-blue" /> Remote Center</li>
                    <li className="flex items-center justify-center gap-1"><Check className="w-3 h-3 text-brand-blue" /> Spoken Tutorial</li>
                    <li className="flex items-center justify-center gap-1"><Check className="w-3 h-3 text-brand-blue" /> Robotics Lab</li>
                  </ul>
                </div>
              </div>

              {/* MNC Placement */}
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center text-brand-blue">
                  <Building2 className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-brand-blue uppercase leading-tight">MNC PLACEMENT PREPARATION</h3>
                  <p className="text-xs font-bold text-slate-600">Training for Cognizant, Accenture, Deloitte & more</p>
                </div>
              </div>

              {/* MCA Entrance */}
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center text-brand-blue">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-brand-blue uppercase leading-tight">MCA ENTRANCE PREPARATION</h3>
                  <p className="text-xs font-bold text-slate-600">For JNU, BHU, IIIT & other top colleges</p>
                </div>
              </div>

              {/* 50+ Courses */}
              <div className="p-8 flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center text-brand-blue">
                  <BookOpen className="w-12 h-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-brand-blue uppercase leading-tight">50+ ADD-ON COURSES</h3>
                  <p className="text-sm font-bold text-slate-600">Industry-relevant skill development</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BCA + 50+ ADD-ON COURSES SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-blue/10 -z-10" />
            <h2 className="text-2xl lg:text-3xl font-black text-brand-navy bg-white px-8 inline-block uppercase tracking-tight">
              BCA + <span className="text-brand-red">50+</span> INDUSTRY ADD-ON COURSES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { 
                icon: BrainCircuit, 
                title: "AI & GENERATIVE AI", 
                desc: "Future-ready with AI Skills",
                color: "text-purple-600",
                bgColor: "bg-purple-50"
              },
              { 
                icon: Code2, 
                title: "FULL STACK DEVELOPMENT", 
                desc: "Build Real World Apps",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              { 
                icon: Cloud, 
                title: "CLOUD & DEVOPS", 
                desc: "Deploy, Scale & Automate",
                color: "text-cyan-600",
                bgColor: "bg-cyan-50"
              },
              { 
                icon: BarChart3, 
                title: "DATA SCIENCE", 
                desc: "Turn Data into Opportunities",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
              },
              { 
                icon: ShieldCheck, 
                title: "CYBER SECURITY", 
                desc: "Secure Systems. Secure Future.",
                color: "text-emerald-600",
                bgColor: "bg-emerald-50"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl border border-slate-100 p-6 flex flex-col items-center text-center space-y-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`${item.bgColor} ${item.color} p-4 rounded-2xl`}>
                  <item.icon className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-black text-brand-blue uppercase leading-tight tracking-tight">{item.title}</h3>
                  <p className="text-xs font-bold text-slate-500 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="lg:col-span-1 bg-brand-navy rounded-3xl p-6 flex flex-col justify-between text-white shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <Monitor className="w-24 h-24 rotate-12" />
              </div>
              
              <div className="relative z-10 space-y-2">
                <h3 className="text-sm font-black uppercase leading-tight tracking-tight mb-2">
                  LEARN WHAT COMPANIES ACTUALLY NEED – <span className="text-brand-yellow">NOT JUST SYLLABUS</span>
                </h3>
              </div>

              <button className="relative z-10 w-full bg-brand-yellow text-brand-navy py-3 px-4 rounded-xl flex items-center justify-between group/btn hover:bg-white transition-colors">
                <span className="text-xs font-black uppercase tracking-wider">EXPLORE ALL COURSES</span>
                <div className="bg-brand-navy/10 rounded-full p-1 group-hover/btn:translate-x-1 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* BCA @ CIMAGE = SKILLS + TRAINING + PLACEMENT SECTION */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-blue/10 -z-10" />
            <h2 className="text-2xl lg:text-3xl font-black text-brand-navy bg-slate-50 px-8 inline-block uppercase tracking-tight">
              BCA @ <span className="text-brand-red">CIMAGE</span> = SKILLS + TRAINING + PLACEMENT
            </h2>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-slate-100">
              {[
                { 
                  icon: Code2, 
                  label: "Advanced Coding Skills",
                  color: "text-blue-600"
                },
                { 
                  icon: Monitor, 
                  label: "Live Projects",
                  color: "text-brand-navy"
                },
                { 
                  icon: Target, 
                  label: "100% Placement Assistance",
                  color: "text-brand-red"
                },
                { 
                  icon: Briefcase, 
                  label: "Internship Opportunities",
                  color: "text-brand-blue"
                },
                { 
                  icon: UserPlus, 
                  label: "Personality Development",
                  color: "text-indigo-600"
                },
                { 
                  icon: TrendingUp, 
                  label: "Career Guidance",
                  color: "text-brand-yellow"
                },
              ].map((item, i) => (
                <div key={i} className="p-8 flex flex-col items-center text-center space-y-6 group hover:bg-slate-50 transition-colors">
                  <div className={`transition-transform duration-300 group-hover:scale-110 drop-shadow-sm ${item.color}`}>
                    <item.icon className="w-12 h-12 stroke-[1.5]" />
                  </div>
                  <p className={`text-sm lg:text-base font-black uppercase leading-tight tracking-tight px-2 ${i === 2 ? 'text-brand-red' : 'text-brand-navy'}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* OUR TOP RECRUITERS SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-blue/10 -z-10" />
            <h2 className="text-2xl lg:text-3xl font-black text-brand-navy bg-white px-8 inline-block uppercase tracking-tight">
              OUR <span className="text-brand-red">TOP</span> RECRUITERS
            </h2>
          </div>

          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100 p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/3840px-Wipro_Primary_Logo_Color_RGB.svg.png" },
                { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/1280px-Tata_Consultancy_Services_old_logo.svg.png" },
                { name: "ICICI Bank", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/960px-ICICI_Bank_Logo.svg.png" },
                { name: "Airtel", url: "https://www.clipartmax.com/png/full/151-1518012_airtel-logo-bharti-airtel-logo-png.png" },
                { name: "Coca-Cola", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/960px-Coca-Cola_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
                { name: "HSBC", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/960px-HSBC_logo_%282018%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
                { name: "HDFC Bank", url: "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg" },
                { name: "Cognizant", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/960px-Cognizant_logo_2022.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
                { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/3840px-Accenture.svg.png" },
                { name: "Kotak", url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Kotak_Mahindra_Group_logo.svg/1280px-Kotak_Mahindra_Group_logo.svg.png" },
                { name: "HCL", url: "https://vectorseek.com/wp-content/uploads/2023/08/HCL-Logo-Vector.svg-.png" },
                { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/3840px-Infosys_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" },
              ].map((brand, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-center p-4 transition-all duration-300 transform lg:hover:scale-110"
                >
                  <img 
                    src={brand.url} 
                    alt={brand.name} 
                    className="max-h-12 w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-bold text-brand-blue uppercase tracking-widest bg-slate-50 py-3 px-8 rounded-full inline-block border border-slate-100">
                & Many More Leading Companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES SECTION */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-brand-blue/10 -z-10" />
            <h2 className="text-2xl lg:text-3xl font-black text-brand-navy bg-slate-50 px-8 inline-block uppercase tracking-tight">
              SUCCESS <span className="text-brand-red">STORIES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                text: "“CIMAGE ne mujhe sahi direction di aur aaj main TCS me Software Developer hun.”",
                name: "Rohit Kumar",
                placement: "Placed at TCS",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500"
              },
              {
                text: "“Live projects aur training ne meri confidence kaafi badhaya.”",
                name: "Anjali Singh",
                placement: "Placed at Cognizant",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500"
              },
              {
                text: "“Placement support team ne har step par help ki.”",
                name: "Vikash Raj",
                placement: "Placed at ICICI Bank",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500"
              }
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden group flex flex-col h-full"
              >
                <div className="p-6 sm:p-8 pb-0 flex-grow relative">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-brand-blue/20 absolute top-4 sm:top-6 left-4 sm:left-6" />
                  <p className="text-base sm:text-lg font-bold text-slate-700 leading-relaxed relative z-10 pt-4 italic">
                    {story.text}
                  </p>
                </div>
                
                <div className="p-6 sm:p-8 pt-4 flex items-center sm:items-end justify-between mt-auto gap-4">
                  <div className="space-y-1">
                    <h4 className="text-lg sm:text-xl font-black text-brand-blue uppercase tracking-tight">{story.name}</h4>
                    <p className="text-xs sm:text-sm font-bold text-brand-red uppercase tracking-widest">{story.placement}</p>
                  </div>
                  <div className="w-16 h-20 sm:w-24 sm:h-32 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-500 shrink-0">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* FOOTER: LOCATION & CTA */}
      <footer className="relative bg-white border-t border-slate-200">
        
        {/* Top Location Bar */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Left: Address Info */}
            <a 
              href="https://maps.app.goo.gl/19u4DyvzSsqiQKgs8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 md:w-1/2 space-y-6 flex flex-col justify-center hover:bg-slate-50 transition-colors group"
            >
              <h3 className="text-2xl font-black text-brand-blue uppercase tracking-tight">TOP BCA COLLEGE IN PATNA</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-lg h-fit group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  </div>
                  <p className="text-lg font-bold text-slate-700 leading-tight">
                    C-16(P), CIMAGE Tower,<br />
                    Patliputra Industrial Area,<br />
                    Patna - 13
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-brand-blue/10 p-2 rounded-lg h-fit group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <Bus className="w-6 h-6 text-brand-blue group-hover:text-white" />
                  </div>
                  <p className="text-lg font-bold text-slate-700">
                    Excellent Connectivity from all parts of Patna
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand-blue font-black uppercase text-xs tracking-widest pt-2">
                <span>View on Google Maps</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Right: Live Interactive Map */}
            <div className="md:w-1/2 relative min-h-[300px] bg-slate-100 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.514757132906!2d85.1017366!3d25.6210356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58284566453d%3A0xc078263eb07fcf!2sCIMAGE%20Professional%20College!5e0!3m2!1sen!2sin!4v1714995000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="CIMAGE Tower Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Middle CTA Section */}
        <div className="bg-brand-navy py-12 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter italic">
                DON'T RISK YOUR <span className="text-brand-yellow">FUTURE</span> WITH THE WRONG COLLEGE
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Apply Now */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:flex-1 bg-brand-red p-1 rounded-2xl flex items-center shadow-2xl"
              >
                <div className="flex-1 py-4 px-6 text-left">
                  <p className="text-xl font-black text-white uppercase leading-none">APPLY NOW</p>
                  <p className="text-[10px] font-bold text-white/80 uppercase mt-1 tracking-widest">For BCA Admission</p>
                </div>
                <div className="bg-white/20 p-4 rounded-xl m-1">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </motion.button>

              {/* Book Free Counselling */}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full lg:flex-1 bg-brand-yellow p-1 rounded-2xl flex items-center shadow-2xl"
              >
                <div className="flex-1 py-4 px-6 text-left">
                  <p className="text-xl font-black text-brand-navy uppercase leading-none">BOOK FREE</p>
                  <p className="text-[10px] font-black text-brand-navy/60 uppercase mt-1 tracking-widest">COUNSELLING</p>
                </div>
                <div className="bg-brand-navy/10 p-4 rounded-xl m-1">
                  <ChevronRight className="w-6 h-6 text-brand-navy" />
                </div>
              </motion.button>


              {/* Admission Open Badge */}
              <div className="hidden xl:block relative ml-4">
                <div className="bg-brand-yellow w-32 h-32 rounded-full flex flex-col items-center justify-center text-center shadow-2xl border-4 border-white transform -rotate-12 translate-y-2">
                  <span className="text-[10px] font-black text-brand-navy uppercase leading-none">ADMISSIONS</span>
                  <span className="text-2xl font-black text-brand-navy uppercase leading-tight">OPEN</span>
                  <div className="bg-brand-red text-white py-0.5 px-2 rounded-full absolute -bottom-2 whitespace-nowrap shadow-lg">
                    <span className="text-[8px] font-black uppercase italic">LIMITED SEATS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-brand-blue text-white overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Call */}
            <a href="tel:9835024444" className="flex-1 bg-[#0052CC] p-6 flex items-center justify-center gap-4 hover:bg-blue-700 transition-colors border-b md:border-b-0 md:border-r border-white/10">
              <PhoneCall className="w-8 h-8" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Call Now</p>
                <p className="text-2xl font-black italic tracking-tighter">98350 24444</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/7250767676" className="flex-1 bg-brand-blue p-6 flex items-center justify-center gap-4 hover:bg-blue-800 transition-colors border-b md:border-b-0 md:border-r border-white/10">
              <MessageCircle className="w-8 h-8 fill-current" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">WhatsApp Us</p>
                <p className="text-2xl font-black italic tracking-tighter">72507 67676</p>
              </div>
            </a>

            {/* Apply Now Bottom */}
            <button className="flex-1 bg-brand-red p-6 flex items-center justify-center gap-4 hover:bg-red-700 transition-colors shrink-0">
              <div className="bg-white text-brand-red p-2 rounded-lg shrink-0">
                <Edit3 className="w-6 h-6" />
              </div>
              <div className="text-left shrink-0">
                <p className="text-2xl font-black uppercase leading-none tracking-tight">Apply Now</p>
                <p className="text-[11px] font-black uppercase opacity-90 mt-1 tracking-wider">For BCA Admission</p>
              </div>
            </button>

          </div>
        </div>

      </footer>
    </div>
  );
}
