import React, { useState, useEffect } from 'react';
import { usersAPI } from '../api/jsonPlaceholder';
import Card from '../components/Card';
import Button from '../components/Button';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await usersAPI.getUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="text-center py-12">
        <div className="text-red-600 text-lg mb-4">Error: {error}</div>
        <Button
          variant="primary"
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Users
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Fetched from JSONPlaceholder API
        </p>
      </div>

      {/* Search */}
      <Card className="mb-6">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </Card>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <Card key={user.id} hover className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">
                {user.name.charAt(0)}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {user.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{user.email}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {user.company.name}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500">
                {user.address.city}, {user.address.street}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && searchTerm && (
        <Card className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No users found matching "{searchTerm}"
          </p>
        </Card>
      )}
    </div>
  );
};

export default Users;