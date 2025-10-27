# React Week 3 Assignment

A responsive React application showcasing component architecture, state management, hooks usage, and API integration.

## Features

### Component Architecture
- **Button**: Reusable button component with variants (primary, secondary, danger)
- **Card**: Reusable card component for displaying content
- **Navbar**: Navigation bar with theme switcher and routing links
- **Footer**: Footer component with external links
- **Layout**: Main layout component wrapping pages with Navbar and Footer

### State Management & Hooks
- **Task Manager**: Full CRUD functionality for tasks
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- **Hooks Used**:
  - `useState`: Managing component state
  - `useEffect`: Loading saved tasks and API data
  - `useContext`: Theme management (light/dark mode)
  - Custom `useLocalStorage`: Persisting tasks to localStorage

### API Integration
- Fetch data from JSONPlaceholder API
- Display posts in a responsive grid
- Loading and error states
- Pagination (10 posts per page)
- Search functionality to filter posts

### Styling with Tailwind CSS
- Fully responsive design (mobile, tablet, desktop)
- Dark mode using Tailwind's class-based dark mode
- Custom animations and transitions
- Utility classes for layout, spacing, typography, and colors
- Theme switcher for light/dark mode

## Tech Stack

- **React**: v18.2.0
- **Vite**: v5.0.5
- **Tailwind CSS**: v3.3.6
- **React Router**: v6.20.0
- **JSONPlaceholder**: Public API for testing

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── context/             # React Context providers
│   └── ThemeContext.jsx
├── hooks/               # Custom hooks
│   └── useLocalStorage.js
├── pages/               # Page components
│   ├── TasksPage.jsx
│   └── PostsPage.jsx
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Tailwind CSS imports
```

## Usage

### Task Manager
Navigate to the home page to use the Task Manager:
- Add tasks using the input field
- Check/uncheck tasks to mark them as complete
- Use filter buttons to view All, Active, or Completed tasks
- Delete tasks using the delete button
- Tasks are automatically saved to localStorage

### Posts Page
Navigate to the Posts page to view API data:
- View posts fetched from JSONPlaceholder API
- Search posts by title or content
- Navigate through pages using pagination controls
- Loading and error states are handled gracefully

### Theme Switcher
Click the theme toggle button in the navbar to switch between light and dark mode. Your preference is saved to localStorage.

## Deployment

Build the project for production:
```bash
npm run build
```

The production-ready files will be in the `dist` directory and can be deployed to any static hosting service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

**LINK TO THE APP**
https://task-app-eight-topaz.vercel.app/
