import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

// Initial reviews
const DEFAULT_REVIEWS = [
  {
    id: "1",
    name: "Arsath suhail",
    role: "Class 12 Student (Past Student)",
    text: "The mentors at Success Tuition are incredibly patient. My daughter used to fear physics, but now she's scoring A grades consistently. The personal care is real!",
    rating: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTqCqeazKAWT5uRlVcrIQE-rbCZ_DqUQS2BJmHhqC00rlUoGjzo66WTe1DsnmaRW4FKgYcdfA7CXDdu5zId_qBlBie7MvsDlqQpyISF0YXssjS1mYJkdsShAUJ6fgPXa1a3V9HmqCTP1PLkp0M6ETodXLIXRtcf3tcchINcNeG0drnZIlYG_soKHdRZ1Ec6iwCO9aUgDEdpQluIrEJrmoMJkbBr5nq_rh5BNM5meOQj5NoYkMxOdwd6-i7CoPW6M49bq-PHa6bY36v",
    createdAt: new Date("2026-03-10").toISOString()
  },
  {
    id: "2",
    name: "Hashik suhail",
    role: "Class 12 Student",
    text: "The notes provided are a lifesaver during exams. Plus, the teachers are always available on WhatsApp for doubts. It feels like having a personal coach 24/7.",
    rating: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRF0P12SgKFcki9kPzyeGouQGVUcY8ud32J0O0x3s0YVFdzIU5GNtX3N0sJbv3GSa0pmNAW7Z7NHTQniDP5o6PwZ4P7IffBhpgURpD_NirdL37f65NR0t3NzIvcDXZL90KuzJv8ADX0xuWYeAOm9fPQOyf_aZTM8x53GofuZy4v01gjfuQqajrpSVzQgf1BkNcA7yhMgk-y-A97TgncxY4VTAaLrLjXm-qhmuO_3kn5u96kOevpfhmQct5MCEv6JhsP7EUNOeuKfRv",
    createdAt: new Date("2026-03-15").toISOString()
  },
  {
    id: "3",
    name: "Jasu akka",
    role: "Parent & Educator",
    text: "I appreciate their focus on mental wellbeing along with academics. They help children handle exam pressure with such grace. Truly a 'Radiant Mentor'.",
    rating: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1jjEmaYzZ6QLTCPtS4gXkeYa-rzGVZE3md209Ja-qt3YHkXMy7F1d4wc89QvP6A6U8lfy9nQ-wFJZmQlp8AOJwKrMVVUSeqcyzAE_SQHY5YNy9-HxSVyLZ_O_BtTPhTKebXAy3W0tpVnEkF67g7HYSIF5olub3oBel_xP4FYW-CQWuCYPJqV2likGy8ZCkij93vovXvSq11xFcag8qyUTqABM3sD2p9zDB-WheoMEipRn6eo_7UKFzbz5P7gNfxqbeBHUR4Emrcp3",
    createdAt: new Date("2026-03-20").toISOString()
  }
];

const REVIEWS_FILE = path.join(process.cwd(), "reviews.json");
const BOOKINGS_FILE = path.join(process.cwd(), "bookings.json");

// Load reviews helper
function getReviews() {
  try {
    if (fs.existsSync(REVIEWS_FILE)) {
      const raw = fs.readFileSync(REVIEWS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed to read reviews file:", err);
  }
  // Fallback / Initial write
  saveReviews(DEFAULT_REVIEWS);
  return DEFAULT_REVIEWS;
}

// Save reviews helper
function saveReviews(reviews: any[]) {
  try {
    fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write reviews file:", err);
  }
}

// Load bookings helper
function getBookings() {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const raw = fs.readFileSync(BOOKINGS_FILE, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Failed to read bookings file:", err);
  }
  return [];
}

// Save bookings helper
function saveBookings(bookings: any[]) {
  try {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to write bookings file:", err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API - Get Reviews
  app.get("/api/reviews", (req, res) => {
    const reviews = getReviews();
    res.json(reviews);
  });

  // API - Add Review
  app.post("/api/reviews", (req, res) => {
    const { name, role, text, rating, avatarIndex } = req.body;

    if (!name || !role || !text || !rating) {
      return res.status(400).json({ error: "Please fill out all fields." });
    }

    const reviews = getReviews();

    // Generate cute animal/person placeholder avatar or use preset list
    const avatarPresets = [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80", // female 1
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80", // male 1
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80", // female 2
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80", // male 2
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80", // female 3
    ];

    const finalImg = avatarPresets[Number(avatarIndex) % avatarPresets.length] || avatarPresets[0];

    const newReview = {
      id: String(Date.now()),
      name,
      role,
      text,
      rating: Number(rating),
      img: finalImg,
      createdAt: new Date().toISOString()
    };

    reviews.unshift(newReview); // New reviews at the top
    saveReviews(reviews);

    res.status(201).json(newReview);
  });

  // API - Get Bookings
  app.get("/api/bookings", (req, res) => {
    const bookings = getBookings();
    res.json(bookings);
  });

  // API - Add Booking
  app.post("/api/bookings", (req, res) => {
    const { name, email, date, time, type } = req.body;

    if (!name || !email || !date || !time) {
      return res.status(400).json({ error: "Missing required booking details." });
    }

    const bookings = getBookings();
    const newBooking = {
      id: String(Date.now()),
      name,
      email,
      date,
      time,
      type: type || "demo",
      createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);
    saveBookings(bookings);

    res.status(201).json(newBooking);
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(3000, () => {
    console.log(`[Success Tuition] Server started successfully on http://localhost:3000`);
  });
}

startServer();
