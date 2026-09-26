# FitLog — Workout Library

FitLog is a responsive workout library web application where users can explore workouts, view detailed exercise information, add workouts to today's plan, and save workouts for later.

## 🚀 Live Website

https://fit-log-assignment-6-omega.vercel.app/

## ✨ Features

- Browse a collection of workouts.
- View detailed workout information.
- Add workouts to Today's Plan.
- Save workouts for later.
- Mark planned workouts as done.
- Remove workouts from the plan.
- Sort workouts by Duration, Calories, or Rating.
- Maximum 5 workouts can be added to Today's Plan.
- Responsive design for mobile, tablet, and desktop.
- Toast notifications for user actions.
- Custom 404 page for invalid routes.
- Loading animation while workout data is loading.

## 🛠️ Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React Hot Toast
- Vercel

## 📄 Pages

### Home
Displays the workout library with workout cards and sorting options.

### Workout Details
Shows complete workout information including:

- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Instructions

Users can also add workouts to Today's Plan or save them for later.

### My Plan
Users can manage:

- Today's Plan
- Saved Workouts
- Exercise count
- Total minutes
- Total calories
- Mark as Done
- Remove workout

### 404 Page
A custom 404 page is shown for unknown or invalid routes.

## 🔥 Key Features

### 1. Add to Today's Plan
Users can add workouts to today's plan with a maximum limit of 5 workouts.

### 2. Save for Later
Users can save workouts and manage them from the My Plan page.

### 3. Sort Workouts
Workouts can be sorted by:

- Duration
- Calories
- Rating

### 4. Mark as Done
Users can mark a planned workout as done. A toast notification is shown after the action.

### 5. Remove Workout
Users can remove a workout from Today's Plan or Saved list with a toast notification.

## 📡 API

Workout data is fetched from:

https://api.abcz.workers.dev/api/fitlog

Individual workout details:

https://api.abcz.workers.dev/api/fitlog/:id

## 🚀 Deployment

This project is deployed on Vercel.

Live Website:

https://fit-log-assignment-6-omega.vercel.app/

## 👩‍💻 Project Information

**Project Name:** FitLog

**Project Type:** Workout Library Web Application

**Built with:** Next.js, TypeScript, Tailwind CSS, DaisyUI
