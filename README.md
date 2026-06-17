# Study Abroad App

A small React Native mobile app built with Expo that displays study abroad programs and lets users open a details screen for each program.

## Features

- Home screen with a responsive list of universities and study programs
- Program cards showing university name, country, city, intake, and short description
- Attractive card-based UI with color accents, hero sections, and responsive spacing
- Details screen with tuition, duration, intake, city, scholarship support, and highlights
- Static data stored in `src/data.ts`
- Expo Router stack navigation

## Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx expo start
```

Run on Android, iOS, or web from the Expo CLI menu.

## Project Structure

```text
src/
  app/
    _layout.tsx
    index.tsx
    [id].tsx
  data.ts
```
