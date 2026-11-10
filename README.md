# Restro - Premium Restaurant & Food Website

A modern, responsive, high-performance restaurant and food website inspired by and matching [restroe.com](https://restroe.com/). Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis Smooth Scroll**.

---

## 🍽️ Features & Highlights

- **Hero Section**: High-impact banner imagery with animated badge, 10,000+ guest review ratings, guest avatar stack, and table reservation CTA.
- **About Us ("Crafted with Passion")**: Brand culinary story, artisan presentation photo, and interactive Bistro Royale location card with Google Maps link.
- **Commitments & Stats**: Highlights core restaurant values (*01 Premium Ingredients*, *02 Chef's Expertise*, *03 Warm Hospitality*).
- **Interactive Signature Dishes**: 8 chef-crafted signature menu items with a spring-physics 180° rotation animation on hover and interactive dish detail modals.
- **Why Choose Us**: Key highlights with Lucide icons (*ChefHat*, *Leaf*, *Heart*) alongside an executive chef feature image.
- **3-Step Table Booking Process**: Transparent guide for diners with verified guest review quote.
- **Opening Hours Schedule**: Weekly schedule card with Friday rest status and direct booking button.
- **Guest Testimonials**: 6 authentic reviews with 5-star ratings, diner locations, and photos.
- **Interactive FAQs Accordion**: Animated expandable questions with plus/minus toggles.
- **Conversion CTA Banner**: Eye-catching orange banner with 4 floating dish images.
- **Footer**: Multi-column footer with social links (Twitter/X, YouTube, Instagram), quick links, contact info, sitemap, and watermark branding.
- **Interactive Table Reservation Modal**: Full-featured booking dialog supporting date picker, meal time slots (Lunch & Dinner), party size, seating area selection, guest details, and instant reference code generation.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Component Structure

```
react project 123/
├── public/
│   └── assets/                  # Authentic logos, dish photos, hero banner, avatars
├── src/
│   ├── components/
│   │   ├── About.jsx            # About section & location preview
│   │   ├── AnimatedSection.jsx  # Reusable Framer Motion viewport entrance
│   │   ├── BookingModal.jsx     # Interactive multi-step table reservation modal
│   │   ├── BookingProcess.jsx   # 3-step reservation workflow & diner review
│   │   ├── Commitments.jsx      # Core pillars (01, 02, 03)
│   │   ├── CtaBanner.jsx        # Orange banner with 4 floating dish badges
│   │   ├── DishDetailModal.jsx  # Modal for dish preview, ingredients & tags
│   │   ├── Faq.jsx              # Accordion FAQ section
│   │   ├── Footer.jsx           # Multi-column footer with watermark
│   │   ├── Hero.jsx             # Hero banner with reviews & CTA
│   │   ├── Navbar.jsx           # Sticky blur navbar with mobile slide-in menu
│   │   ├── OpeningHours.jsx     # 7-day schedule card
│   │   ├── SignatureDishes.jsx  # 8 interactive rotating dish cards
│   │   ├── SmoothScroll.jsx     # Lenis smooth scroll engine
│   │   └── WhyChooseUs.jsx      # Feature list & executive chef spotlight
│   ├── data/
│   │   └── restaurantData.js    # Data model for dishes, reviews, hours & copy
│   ├── App.jsx                  # Root application view
│   ├── index.css                # Tailwind CSS v4 & custom typography
│   └── main.jsx                 # Entry point
├── index.html                   # Document root
├── package.json                 # Project dependencies & scripts
└── vite.config.js               # Vite + React + Tailwind v4 config
```

