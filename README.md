# Personal Dev Portal

A simple personal developer portal built with React, TypeScript, and Tailwind CSS.  
It features an About Me section pulling data from GitHub API, a live updating clock, and a random fun fact generator.

---

## Features

- **About Me**  
  Displays your name, bio, and GitHub profile picture by fetching data from the GitHub API.

- **Live Clock**  
  Shows the current time and updates every second.

- **Random Fun Fact**  
  Fetches a random fun fact from [uselessfacts.jsph.pl](https://uselessfacts.jsph.pl) with a refresh button.

---

## Tech Stack

- React with TypeScript (using Vite)
- Tailwind CSS for styling
- Git for version control

---

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/your-username/personal-dev-portal.git
cd personal-dev-portal
```

### 2. Install dependencies
```
npm install
```

### 3. Run the development server
```
npm run dev
```
---

## Project Structure
- src/components/AboutMe.tsx — Displays GitHub user info
- src/components/Clock.tsx — Live updating clock
- src/components/FunFact.tsx — Random fun fact with refresh button
- src/App.tsx — Main app combining all components

---

## Deployment
You can deploy this project to Vercel, Netlify, or any static hosting platform.
Simply connect your GitHub repo and deploy directly.


