Notes to self:

Hooks: 
  - userlocation in a hook as possiblity for expanding that logic to other parts of app
  - Weather fetch is not currently in a hook as it is only really used on one page - however when expanding it would be good to refactor.


  # Weather Me - Modern Weather App

A responsive weather application built with Next.js 15, featuring real-time weather data, location search, and automatic geolocation detection.

## 🚀 Features

- **Real-time Weather Data** - Current conditions, hourly forecasts, and 7-day outlook
- **Smart Location Search** - Search any city worldwide with autocomplete
- **Automatic Geolocation** - Detects user location on first visit
- **Responsive Design** - Works seamlessly across desktop and mobile
- **Modern UI/UX** - Clean, cyberpunk-inspired design with Tailwind CSS

## 🏗️ Architecture

### Tech Stack
- **Next.js 15** with App Router and React 19
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling
- **Vitest** for testing
- **Open-Meteo API** for weather data
- **OpenStreetMap Nominatim** for geocoding

### Key Design Decisions
- **Server-side weather fetching** for better SEO and performance
- **Client-side search** for responsive user interactions
- **Modular component architecture** for maintainability
- **Custom hooks** for geolocation logic separation

## 🔧 Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run test   # Run tests
npm run lint   # Check code quality



## TODO
Features
Weather alerts and notifications
Favorite locations management
Historical weather data visualization
Weather maps integration

Technical Debt
Add comprehensive error boundaries
Implement proper loading skeletons
Add E2E testing with Playwright
Set up monitoring with Sentry# Force rebuild
