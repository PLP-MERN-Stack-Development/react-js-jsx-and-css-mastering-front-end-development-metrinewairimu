# TaskMaster Pro 📋

A modern, responsive React application for efficient task management with seamless API integration and beautiful UI design.

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF)](https://vitejs.dev/)

## ✨ Features

### 🎯 Core Functionality
- **Task Management**: Create, complete, and delete tasks with ease
- **Smart Filtering**: View all, active, or completed tasks
- **Data Persistence**: Tasks saved automatically using local storage
- **Theme Switching**: Toggle between light and dark modes
- **API Integration**: Fetch and display user data from JSONPlaceholder

### 🎨 User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Engaging transitions and hover effects
- **Intuitive Interface**: Clean, modern design with clear visual hierarchy
- **Real-time Search**: Instant filtering of API data

## 🚀 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/taskmaster-pro)

**Live Application**: [https://your-deployed-app.vercel.app](https://your-deployed-app.vercel.app)

## 📸 Screenshots

### Light Theme
![Light Theme](./Screenshots/Screenshot%202025-10-27%20223329.png)

### Dark Theme
![Dark Theme](./Screenshots/Screenshot%202025-10-27%20223445.png)

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect, useContext)
- **API**: JSONPlaceholder REST API
- **Deployment**: Vercel/Netlify

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   └── ThemeToggle.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── tasks/
│       ├── TaskManager.jsx
│       ├── TaskList.jsx
│       ├── TaskItem.jsx
│       └── TaskForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── Tasks.jsx
│   └── Users.jsx
├── hooks/
│   ├── useLocalStorage.js
│   └── useApi.js
├── context/
│   └── ThemeContext.js
├── utils/
│   └── helpers.js
└── App.jsx
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/taskmaster-pro.git
   cd taskmaster-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎯 Key Components

### TaskManager
- Complete CRUD operations for tasks
- Filter tasks by status (All/Active/Completed)
- Persistent storage using custom hook

### Custom Hooks
- **useLocalStorage**: Sync state with localStorage
- **useApi**: Handle API calls with loading/error states

### UI Components
- **Button**: Multiple variants (primary, secondary, danger)
- **Card**: Flexible content containers
- **Navbar/Footer**: Consistent layout elements

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with the following configurations:
- Custom color palette
- Dark mode support (class-based)
- Responsive breakpoints
- Custom animations

### Theme Context
Global theme management using React Context API:

```jsx
const { theme, toggleTheme } = useTheme();
```

## 📱 Responsive Design
- **Mobile**: Single column layout, touch-friendly buttons
- **Tablet**: Adjusted spacing and typography
- **Desktop**: Multi-column grids, hover effects

## 🔄 API Integration

### JSONPlaceholder Endpoints
- **Users**: https://jsonplaceholder.typicode.com/users
- **Posts**: https://jsonplaceholder.typicode.com/posts

### Features
- Loading states during API calls
- Error handling with user-friendly messages
- Search functionality for filtering users
- Pagination support

## 🎨 Styling Features

### Tailwind CSS Utilities
- Responsive grid and flexbox layouts
- Consistent spacing and typography scales
- Custom color schemes for both themes
- Smooth transitions and transforms

### Dark Mode
- Automatic system preference detection
- Manual toggle override
- Consistent theming across all components

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- **Your Name** - Initial work - [YourGitHub](https://github.com/your-username)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the fast build tooling
- JSONPlaceholder for the fake API data

## 📞 Support

If you have any questions or run into issues, please:

- Check the [Issues](https://github.com/your-username/taskmaster-pro/issues) page
- Create a new issue with detailed description
- Contact: your.email@example.com

---

<div align="center">
  Built with ❤️ using React, Tailwind CSS, and Vite
</div>

<div align="center">
  ⭐ Don't forget to star this repository if you found it helpful!
</div>
