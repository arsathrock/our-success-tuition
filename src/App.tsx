import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { ArrowRight, MessageCircle, Star, School, Award, Lightbulb, Brain, Puzzle, Clock, FileText, Monitor, ShieldCheck, Heart, UserSearch, MapPin, Phone, Mail, Instagram, Facebook, Twitter, ChevronLeft, ChevronRight, X } from "lucide-react";
import BookingPage from "./components/BookingPage";

// --- Components ---

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/')) {
      navigate(path);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 py-4">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-extrabold tracking-tighter text-primary font-headline"
        >
          Success Tuition
        </Link>
        <div className="hidden md:flex gap-8 items-center font-headline font-semibold text-sm tracking-tight">
          <Link 
            className="text-primary border-b-2 border-primary pb-1" 
            to="/"
          >
            Home
          </Link>
          <a 
            className="text-on-surface-variant hover:text-primary transition-colors duration-200" 
            href="#about"
          >
            About
          </a>
          <a 
            className="text-on-surface-variant hover:text-primary transition-colors duration-200" 
            href="#courses"
          >
            Courses 1-12
          </a>
          <a 
            className="text-on-surface-variant hover:text-primary transition-colors duration-200" 
            href="#reviews"
          >
            Reviews
          </a>
          <a 
            className="text-on-surface-variant hover:text-primary transition-colors duration-200" 
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              navigate("/book-session");
            }}
            className="success-gradient text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-headline font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Try Free Class
          </button>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-6 xl:col-span-6 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-headline font-bold text-[0.7rem] uppercase tracking-widest rounded-md mb-6">
              We don’t rush
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              Why Students <span className="text-primary">Struggle</span>? We <span className="text-primary">Fix It</span>.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-sans">
              Transforming academic struggles into stepping stones for success. Experience personalized care that treats every student like family.
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => {
                navigate("/book-session");
              }}
              className="success-gradient text-white px-8 py-4 rounded-full font-headline font-bold flex items-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Who Will Teach Your Child?
              <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => {
                window.open("https://wa.me/916382144070", "_blank");
              }}
              className="bg-tertiary text-white px-8 py-4 rounded-full font-headline font-bold flex items-center gap-2 hover:opacity-90 hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={20} fill="currentColor" />
              Contact via WhatsApp
            </button>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 xl:col-span-6 relative">
          {/* Animated "Hey!" Speech Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -8, 0] 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-10 left-8 md:top-20 md:left-16 z-30 bg-slate-100/90 backdrop-blur-sm border border-slate-200 px-6 py-3 rounded-2xl rounded-bl-none shadow-md text-slate-700 font-headline font-black text-lg tracking-wide pointer-events-none"
          >
            <span>Hey! students...</span>
          </motion.div>

          <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] xl:h-[800px] z-20 relative lg:-ml-12 lg:-mr-12 xl:-ml-24 xl:-mr-24 lg:w-[calc(100%+6rem)] xl:w-[calc(100%+12rem)] max-w-none">
            <iframe 
              src="https://my.spline.design/genkubgreetingrobot-JUQnnJfwJziphtXdwzc2Arwe/" 
              frameBorder="0" 
              width="100%" 
              height="100%"
              className="w-full h-full pointer-events-auto"
              title="Greeting Robot 3D"
            />
          </div>
          
          {/* Testimonial Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-6 -left-4 md:-left-12 z-30 bg-surface-container-lowest p-6 rounded-xl shadow-xl max-w-[280px] border border-surface-container"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber-500" fill="currentColor" />
              ))}
            </div>
            <p className="text-sm italic text-on-surface-variant mb-3">
              "The personal attention my son received here changed his entire outlook on Math!"
            </p>
            <div className="text-xs font-bold">— Zaheer Hussain</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolving = () => (
  <section id="about" className="py-24 bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-xl overflow-hidden shadow-2xl aspect-square max-w-md mx-auto lg:mx-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6VI5vxAt4fz2hGl7tAkFbQOn9KaraNH3egyzSHssoVQK6mwzM1WAwz08jvfMwaqlORSvUvkacLUfjgohnxc8zgtyxDPZPchKZSRhNhRG5VTsgOO8--L6vTANzub81WWpPE0dZj4wiIUR_ZKnMjgF_jEPHQXcc7V4ms5s03_qF73xtWYzqMb6w_rxmLMYp2QFz5r5PysujbZ_-f9qA-QB2H1BG6oI8m6Ik2PHxw88dPi7HBGTL2CSfT9yBS6erW1U_EyTHre06jFWM" 
              alt="Tutor helping student"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-8 right-0 md:-right-8 bg-white p-6 md:p-8 rounded-xl shadow-lg border-l-4 border-primary max-w-[300px] md:max-w-sm"
          >
            <h4 className="font-headline font-bold text-lg md:text-xl mb-2">Treating Students Like Family</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              We don't just teach; we mentor. Every child’s struggle is our own challenge to solve.
            </p>
          </motion.div>
        </div>
        
        <div className="order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-10 leading-tight">
Fixing Real Study Problems          </h2>
          <div className="space-y-10">
            {[
              { 
                icon: <Brain className="text-primary" size={32} />, 
                title: "Struggling to Remember?", 
                desc: "We use simple techniques, visuals and smart repetition.",
                bg: "bg-primary/10"
              },
              { 
                icon: <Lightbulb className="text-secondary" size={32} />, 
                title: "No Interest in Studying?", 
                desc: "We connect lessons with real-life examples.",
                bg: "bg-secondary/10"
              },
              { 
                icon: <Puzzle className="text-tertiary" size={32} />, 
                title: "Simplifying Understanding", 
                desc: "Breaking down complex theories into bite-sized",
                bg: "bg-tertiary/10"
              },

              { 
                icon: <Heart className="text-primary" size={32} />, 
                title: "Forget Quickly?", 
                desc: " 24/7 support is always there for you",
                bg: "bg-primary/10"
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className={`w-14 h-14 shrink-0 rounded-xl ${item.bg} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Mentors = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-4">Meet Your Mentors</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Expert educators dedicated to your child's holistic growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              name: "Arsath Suhail",
              role: "Senior Mathematics Head",
              qual: "Ph.D. in Applied Mathematics (5+ Yrs Exp)",
              exp: "learning… to Students starts to Mastered",
              desc: "Specialist in making algebra intuitive for high schoolers.",
              img: "/mentor cutout 1.png",
              bg: "/mentor full 1.jpeg",
              color: "text-primary"
            },
            {
              name: "Sujan Singh",
              role: "Physics & Logic Expert",
              qual: "M.Sc. Physics (2+ Yrs Exp)",
              exp: "Step by step clarity.From confusion → confidence",
              desc: "Known for 'Physics in Playground' teaching method.",
              img: "/mentor cutout 2.png",
             bg:"/mentor full 2.jpeg",
              color: "text-secondary"
            }
          ].map((mentor, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              // Card
              className="group relative bg-white rounded-[2.5rem] overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 border border-surface-container h-[500px] cursor-pointer"
            >
         <div className="absolute inset-0 z-0 overflow-visible">

  {/* Full Image (with background) */}
  <img
    src={mentor.bg}
    className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:opacity-30 group-hover:blur-sm"
  />

  {/* PNG Cut-out Image */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-full h-full flex items-end justify-center">

  <img
    src={mentor.img}
    className="
      h-[110%] object-contain
      opacity-0
      transition-all duration-500 ease-out

      group-hover:opacity-100
      group-hover:scale-[1.9]
      group-hover:-translate-y-24

      filter brightness-105 contrast-105

      drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]
      [mask-image:linear-gradient(to_top,transparent_10%,black_35%)]
      [webkit-mask-image:linear-gradient(to_top,transparent_10%,black_35%)]
    "
  />

  {/* Glow layer (THIS FIXES CUT FEEL) */}
  <div className="
    absolute inset-0 
    blur-2xl 
    bg-white/10 
    opacity-0 
    group-hover:opacity-100 
    transition duration-500
  "></div>

</div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 p-4 md:p-6 flex flex-col justify-end text-white pointer-events-none">
              <div className="bg-slate-950/75 backdrop-blur-md border border-white/15 p-5 md:p-6 rounded-[2rem] transform transition-all duration-500 group-hover:translate-y-[-10px] shadow-2xl">
                <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-headline font-bold uppercase tracking-widest mb-2">
                  {mentor.role}
                </span>
                <h3 className="text-2xl md:text-3xl font-headline font-extrabold mb-1 text-white tracking-tight">{mentor.name}</h3>
                <div className="flex flex-col gap-1.5 text-xs md:text-sm mt-2">
                  <p className="flex items-center gap-2 text-slate-200"><School size={15} className="text-primary-container" /> {mentor.qual}</p>
                  <p className="flex items-center gap-2 text-slate-200"><Award size={15} className="text-amber-400" /> {mentor.exp}</p>
                  <p className="mt-2 italic text-slate-300 border-t border-white/10 pt-2 font-sans">"{mentor.desc}"</p>
                </div>
              </div>
            </div>
            
            {/* Optional Glow effect on hover */}
            <div className="absolute inset-0 z-15 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
};

const Courses = () => (
  <section id="courses" className="py-24 bg-surface-container">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold mb-4">Educational Programs</h2>
          <p className="text-on-surface-variant">
            From the first steps of LKG to the final boards of 12th Grade, we cover every milestone with precision.
          </p>
        </div>
        <div className="flex gap-4 mb-2">
          <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-headline text-xs font-bold border border-surface-container">ONLINE MODE</span>
          <span className="px-4 py-2 bg-white rounded-lg shadow-sm font-headline text-xs font-bold border border-surface-container">OFFLINE MODE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "LKG - UKG", title: "Foundation" },
          { label: "Class 1-5", title: "Primary" },
          { label: "Class 6-8", title: "Middle" },
          { label: "Class 9-10", title: "Secondary", active: true },
          { label: "Class 11", title: "Sr. Sec I" },
          { label: "Class 12", title: "Boards" }
        ].map((course, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className={`${course.active ? 'bg-primary shadow-lg -translate-y-2' : 'bg-surface-container-lowest hover:bg-primary group shadow-sm'} p-6 rounded-xl transition-all cursor-pointer`}
          >
            <div className={`${course.active ? 'text-white/80' : 'text-primary group-hover:text-white/80'} font-headline font-bold text-xs mb-2`}>
              {course.label}
            </div>
            <div className={`font-headline font-extrabold text-xl md:text-2xl ${course.active ? 'text-white' : 'group-hover:text-white'}`}>
              {course.title}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Clock className="text-secondary" />, title: "Flexible Timing", desc: "Batch slots available from 7 AM to 7 PM to suit school schedules." },
          { icon: <FileText className="text-secondary" />, title: "Premium Notes", desc: "Comprehensive, easy-to-revise notes provided for all subjects." },
          { icon: <Monitor className="text-secondary" />, title: "Hybrid Learning", desc: "Switch between physical classes and live online sessions anytime." }
        ].map((feat, idx) => (
          <div key={idx} className="flex items-start gap-4 p-6 bg-white/50 rounded-xl">
            <div className="shrink-0">{feat.icon}</div>
            <div>
              <h5 className="font-bold mb-1">{feat.title}</h5>
              <p className="text-sm text-on-surface-variant">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SuccessAdvantage = () => (
  <section className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-center mb-16">The Success Advantage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 bg-primary/10 rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group border border-primary/5"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-headline font-extrabold text-primary max-w-sm">24/7 Dedicated Doubt Support</h3>
            <p className="text-on-surface-variant mt-4">Questions don't follow office hours. Neither do we.</p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform"></div>
          <ShieldCheck className="text-primary/10 absolute bottom-4 right-4" size={120} />
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="bg-secondary/10 rounded-xl p-8 flex flex-col justify-between border border-secondary/5"
        >
          <UserSearch className="text-secondary" size={40} />
          <div>
            <h3 className="text-xl font-headline font-extrabold text-secondary">Personal Mentoring</h3>
            <p className="text-on-surface-variant text-sm mt-2">1-on-1 sessions to track behavioral and academic progress.</p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="bg-tertiary/10 rounded-xl p-8 flex flex-col justify-between border border-tertiary/5"
        >
          <Heart className="text-tertiary" size={40} />
          <div>
            <h3 className="text-xl font-headline font-extrabold text-tertiary">Mental Wellbeing</h3>
            <p className="text-on-surface-variant text-sm mt-2">Stress management and confidence building workshops.</p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 bg-surface-container rounded-xl p-8 flex items-center gap-8"
        >
          <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-inner">
            <School className="text-primary" size={40} />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-headline font-extrabold">Individual Attention</h3>
            <p className="text-on-surface-variant mt-2">Small batch sizes ensuring no student is left behind in the crowd.</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Reviews = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Avatar presets
  const avatarPresets = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !role || !text) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, text, rating, avatarIndex })
      });

      if (res.ok) {
        const newReview = await res.json();
        setReviews(prev => [newReview, ...prev]);
        setSubmitSuccess(true);
        setTimeout(() => {
          setIsFormOpen(false);
          setSubmitSuccess(false);
          // reset form
          setName("");
          setRole("");
          setText("");
          setRating(5);
        }, 1500);
      }
    } catch (err) {
      console.error("Failed to submit review:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-surface-container-low overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold">Voices of Success</h2>
          <p className="text-on-surface-variant mt-4">Trusted by over 500+ parents and students across the city.</p>
        </div>
        <button
          onClick={() => {
            setIsFormOpen(true);
          }}
          className="shrink-0 bg-primary hover:bg-primary-hover text-white font-headline font-bold px-6 py-3.5 rounded-full transition-all shadow-md active:scale-95 flex items-center gap-2"
        >
          <MessageCircle size={18} fill="currentColor" />
          Write a Review
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="flex gap-8 px-6 md:px-8 no-scrollbar overflow-x-auto pb-12">
          {reviews.map((review, idx) => (
            <motion.div 
              key={review.id || idx}
              whileHover={{ scale: 1.02 }}
              className="min-w-[320px] md:min-w-[400px] bg-white p-8 rounded-[2rem] shadow-sm border border-surface-container flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
                    <img className="w-full h-full object-cover" src={review.img} alt={review.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">{review.name}</div>
                    <div className="text-xs text-on-surface-variant font-medium">{review.role}</div>
                  </div>
                  <div className="ml-auto flex text-primary gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={12} 
                        fill={i < (review.rating || 5) ? "currentColor" : "none"}
                        className={i < (review.rating || 5) ? "text-primary" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-on-surface-variant italic leading-relaxed">"{review.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Write a Review Modal Form */}
      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] w-full max-w-lg p-8 md:p-10 shadow-2xl border border-surface-container relative z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => {
                  setIsFormOpen(false);
                }}
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors p-1.5 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              {submitSuccess ? (
                <div className="text-center py-12 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 animate-bounce">
                    <Star size={44} fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-2">Thank you!</h3>
                  <p className="text-on-surface-variant max-w-xs">
                    Your valuable review has been published in real-time.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-1">
                      Share your experience!
                    </h3>
                    <p className="text-on-surface-variant text-sm">
                      We value your feedback to help more students shine.
                    </p>
                  </div>

                  {/* Rating selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface">Your Rating</label>
                    <div className="flex gap-2.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setRating(star);
                          }}
                          className="transform transition-transform hover:scale-125 focus:outline-none"
                        >
                          <Star 
                            size={32} 
                            fill={star <= rating ? "currentColor" : "none"} 
                            className={star <= rating ? "text-primary" : "text-gray-300"}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Mr. Vignesh / Shreya"
                      className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  {/* Role */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface">Your Role / Description</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Parents / Student"
                      className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>

                  {/* Avatar Selector */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface">Select Avatar</label>
                    <div className="flex gap-3">
                      {avatarPresets.map((url, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => {
                            setAvatarIndex(i);
                          }}
                          className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                            avatarIndex === i ? "border-primary scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img src={url} className="w-full h-full object-cover" alt={`Avatar option ${i}`} referrerPolicy="no-referrer" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface">Your Review</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share how Success Tuition helped in understanding concepts and building confidence..."
                      className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary/95 text-white py-4 rounded-xl font-headline font-bold text-lg shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? "Submitting..." : "Submit Review"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="success-gradient rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-8">Ready to Start Your Success Story?</h2>
            <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Join a community where every student is valued, nurtured, and empowered to shine.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => {
                  navigate("/book-session");
                }}
                className="bg-white text-primary px-10 py-5 rounded-full font-headline font-extrabold text-lg hover:bg-surface transition-all shadow-xl"
              >
                Enroll Now
              </button>
              <button 
                onClick={() => {
                  navigate("/book-session");
                }}
                className="border-2 border-white/50 bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-headline font-extrabold text-lg hover:bg-white/20 transition-all"
              >
                Book Free Demo
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  
  return (
    <footer id="contact" className="bg-surface-container-low pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="text-xl font-extrabold text-primary mb-6 font-headline">Success Tuition</div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Empowering minds and building futures through personalized education and holistic mentoring since 2010.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white transition-all shadow-sm" 
                  href="#"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-headline font-bold mb-6 text-on-surface">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {['Home', 'About Us', 'Our Courses', 'Success Stories'].map((link, i) => (
                <li key={i}>
                  <a 
                    className="text-on-surface-variant hover:text-primary transition-all" 
                    href="#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-headline font-bold mb-6 text-on-surface">Contact Us</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li 
                onMouseEnter={() => {
                  setIsMapOpen(true);
                }}
                onClick={() => {
                  setIsMapOpen(true);
                }}
                className="flex items-start gap-3 cursor-pointer hover:text-primary transition-colors group"
              >
                <MapPin size={18} className="text-primary shrink-0 group-hover:scale-110 transition-transform mt-0.5" />
                <span>Aziz Mohamed Ghouse St, Korukkupet, Old Washermanpet, Chennai, Tamil Nadu 600021</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                6382144070
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                rafiibrahim818@gmail.com
              </li>
              <li className="mt-4">
                <a 
                  className="bg-tertiary/10 text-tertiary px-4 py-2 rounded-lg font-bold flex items-center gap-2 w-fit hover:bg-tertiary/20 transition-all" 
                  href="https://wa.me/916382144070"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} fill="currentColor" />
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-headline font-bold mb-6 text-on-surface">Our Location</h4>
            <div 
              onMouseEnter={() => {
                setIsMapOpen(true);
              }}
              onClick={() => {
                setIsMapOpen(true);
              }}
              className="block rounded-xl overflow-hidden grayscale contrast-125 opacity-80 h-40 shadow-inner hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer relative group"
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="/MAP IMAGE.png" 
                alt="Map Location"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <MapPin size={14} className="text-primary" />
                  View Interactive Map
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-surface-container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-on-surface-variant text-xs md:text-sm">© 2024 Success Tuition. Empowering Students Daily.</p>
          <div className="flex gap-6 text-xs md:text-sm text-on-surface-variant">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Interactive Location Pop-up Modal */}
      <AnimatePresence>
        {isMapOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop with elegant background blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMapOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-[2rem] w-full max-w-3xl p-6 md:p-8 shadow-2xl border border-surface-container relative z-10 overflow-hidden flex flex-col md:flex-row gap-6 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => {
                  setIsMapOpen(false);
                }}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 z-20 shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Left Column: Interactive Google Map Iframe */}
              <div className="flex-1 min-h-[260px] md:min-h-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 relative">
                <iframe
                  title="Success Tuition Location Map"
                  src="https://maps.google.com/maps?q=Aziz%20Mohamed%20Ghouse%20St,%20Korukkupet,%20Chennai,%20Tamil%20Nadu%20600021&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 rounded-2xl"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Right Column: Address and Direct Call-to-actions */}
              <div className="md:w-[280px] shrink-0 flex flex-col justify-between gap-6 py-2">
                <div>
                  <div className="flex items-center gap-2 text-primary font-headline font-black uppercase tracking-wider text-xs mb-2">
                    <MapPin size={26} />
                    Our Location
                  </div>
                  <h3 className="text-2xl font-headline font-extrabold text-on-surface mb-3">
                    Success Tuition Center!
                  </h3>
                  <p className="text-on-surface-variant text-sm font-headline leading-relaxed mb-4 font-extrabold">
                    Aziz Mohamed Ghouse St, Korukkupet, Old Washermanpet, Chennai, Tamil Nadu 600021
                  </p>

                  {/* Travel & Directions Guide */}
                  <div className="bg-surface-container rounded-2xl p-4 space-y-3 border border-gray-100">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-on-surface">Travel Guidelines</h5>
                    <div className="flex gap-2.5 items-start text-xs">
                      <span className="text-base select-none">🚇</span>
                      <p className="text-on-surface-variant leading-normal font-headline ">
                        <strong>Metro:</strong> Washermanpet Metro Station is just 10 mins away.
                      </p>
                    </div>
                    <div className="flex gap-2.5 items-start text-xs">
                      <span className="text-base select-none">🚉</span>
                      <p className="text-on-surface-variant leading-normal font-headline ">
                        <strong>Train:</strong> Walking distance from Korukkupet Railway Station.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {/* Open in external app */}
                  <a
                    href="https://maps.app.goo.gl/V7tZkzT4Mua7dDzw9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-primary hover:bg-primary/95 text-white py-3.5 rounded-xl text-center font-headline font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
                  >
                    Open in Google Maps
                  </a>
                  {/* Share/WhatsApp navigation assistance */}
                  <a
                    href="https://wa.me/916382144070?text=Hi!%20I%20am%20near%20your%20Korukkupet%20tuition%20center.%20Can%20you%20please%20guide%20me%20on%20how%20to%20reach%20the%20center%20from%20nearby?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-tertiary hover:bg-tertiary/95 text-white py-3.5 rounded-xl text-center font-headline font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
                  >
                    <MessageCircle size={16} fill="currentColor" />
                    Ask Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <motion.a 
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="bg-tertiary text-white rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-tertiary/90 transition-all group relative" 
        href="https://wa.me/916382144070" 
        target="_blank"
      >
        <MessageCircle size={32} fill="currentColor" />
        <div className="absolute right-20 bg-tertiary text-white px-4 py-2 rounded-xl font-headline font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Need Help? Talk to a counselor on WhatsApp
        </div>
      </motion.a>
    </div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <ProblemSolving />
    <Mentors />
    <Courses />
    <SuccessAdvantage />
    <Reviews />
    <CTA />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-session" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
