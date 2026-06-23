import React, { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Mail, BookOpen, MessageSquare, ArrowLeft, Monitor, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    type: "demo", // 'demo' or 'doubt'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Non-blocking submission to our Express backend first
    try {
      await fetch("http://localhost:5000/api/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)

      });
    } catch (err) {
      console.error("Failed to persist booking on backend:", err);
    }

    // Construct WhatsApp message
    const message = `Hello Success Tuition! I would like to schedule a ${formData.type} session.
Name: ${formData.name}
Email: ${formData.email}
Date: ${formData.date}
Time: ${formData.time}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/916382144070?text=${encodedMessage}`;
    
    // Redirect to WhatsApp immediate action
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-surface pt-24 pb-12 px-6">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={() => {
            navigate("/");
          }}
          className="flex items-center gap-2 text-primary font-headline font-bold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-surface-container"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-4">
              Book Your Session
            </h1>
            <p className="text-on-surface-variant">
              Fill in the details below to schedule your free demo or doubt clearing session.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <User size={16} className="text-primary" />
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Arsath suhail"
                  className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="arsath@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  Preferred Time
                </label>
                <input
                  required
                  type="time"
                  className="w-full px-4 py-3 rounded-xl border border-surface-container focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                />
              </div>
            </div>

            {/* Session Type */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface flex items-center gap-2">
                <BookOpen size={16} className="text-primary" />
                Session Type
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, type: "demo" });
                  }}
                  className={`py-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${
                    formData.type === "demo"
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-surface-container text-on-surface-variant hover:border-primary/50"
                  }`}
                >
                  <Monitor size={20} />
                  Demo Class
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, type: "doubt" });
                  }}
                  className={`py-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${
                    formData.type === "doubt"
                      ? "border-secondary bg-secondary/5 text-secondary"
                      : "border-surface-container text-on-surface-variant hover:border-secondary/50"
                  }`}
                >
                  <MessageSquare size={20} />
                  Doubt Session
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full success-gradient text-white py-5 rounded-xl font-headline font-extrabold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-8"
            >
              Schedule via WhatsApp
              <ArrowRight size={24} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;