### Weather Me - Modern Weather App

A responsive weather application built with Next.js, featuring real-time weather data, intelligent location search, and automatic geolocation detection.
Live Demo: https://weather-k12ll1to3-joel-krams-projects.vercel.app/

## ✨ Features

Real-time Weather Data - Current conditions, hourly forecasts, and 7-day outlook
Smart Location Search - Search any city worldwide with autocomplete
Automatic Geolocation - Detects user location on first visit
Responsive Design - Seamless experience across desktop and mobile devices
Modern UI/UX - Clean, arcade-style design built with Tailwind CSS

## 🛠️ Tech Stack

Next.js 14 with App Router and React 19
TypeScript for type safety
Tailwind CSS 4 for styling
Vitest for unit testing
Open-Meteo API for weather data
OpenStreetMap Nominatim for geocoding

## 🏗️ Architecture & Design Decisions

Server-side weather fetching - Improves SEO, reduces client bundle size, and provides better initial page load performance
Client-side search - Enables responsive user interactions without page reloads
Modular component architecture - Promotes code reusability and maintainability
Custom hooks - Separates business logic (geolocation) from UI components

## 🚀 Getting Started
Prerequisites

Node.js 18+
npm or yarn

```bash
# Clone the repository
git clone [https://github.com/pooch1e/weather-me]

# Install dependencies
npm install
# or
yarn install
```

## Running Locally
```bash
# Development server
npm run dev
# or
yarn dev
```

## Build & Test
```bash
# Build for production
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

## 🔮 Future Enhancements

Weather alerts and notifications system
Favorite locations with quick access
Historical weather data visualization
Interactive weather maps
Temperature unit toggle (Celsius/Fahrenheit)
Light/dark mode theming

## 📝 Notes
This application was built as a technical assessment and portfolio project. Weather data is provided by Open-Meteo API and geocoding by OpenStreetMap Nominatim. All API usage is for educational and demonstration purposes.