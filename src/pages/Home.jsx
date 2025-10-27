import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with ease.',
      icon: '✅',
      path: '/tasks'
    },
    {
      title: 'User Directory',
      description: 'Browse and search through user data from JSONPlaceholder API.',
      icon: '👥',
      path: '/users'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '🌙',
      path: '/'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to{' '}
          <span className="text-blue-600 dark:text-blue-400">TaskMaster</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A modern, responsive task management application built with React.js and Tailwind CSS.
          Manage your tasks efficiently with a beautiful, intuitive interface.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="large">
              Get Started
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="outline" size="large">
              View Users
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {feature.description}
              </p>
              <Link to={feature.path}>
                <Button variant="outline" size="small">
                  Learn More
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <Card className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Built With Modern Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React.js', 'Tailwind CSS', 'Vite', 'React Router'].map((tech) => (
              <div key={tech} className="text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 dark:text-blue-300 font-bold">⚡</span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;