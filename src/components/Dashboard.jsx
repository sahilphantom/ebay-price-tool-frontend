import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const Dashboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ebayAccounts, setEbayAccounts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching eBay accounts
    setEbayAccounts([
      {
        id: '1',
        ebayAccountId: 'ebay_user_123',
        isActive: true,
        createdAt: new Date()
      }
    ]);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleConnectEbay = () => {
    // Redirect to eBay OAuth URL
    window.open('http://localhost:5000/api/ebay/auth-url', '_blank');
  };

  const handleDisconnectEbay = (accountId) => {
    // Simulate disconnecting account
    setEbayAccounts(ebayAccounts.filter(acc => acc.id !== accountId));
  };

  const handleEbayManagement = () => {
    navigate('/ebay-management');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">{t('dashboard')}</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* eBay Account Section */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">eBay Account Management</h2>
            <button
              onClick={handleEbayManagement}
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Manage Accounts
            </button>
          </div>
          
          {!ebayAccounts.length ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No eBay accounts connected yet.</p>
              <button
                onClick={handleConnectEbay}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Connect eBay Account
              </button>
            </div>
          ) : (
            <div>
              <div className="space-y-4">
                {ebayAccounts.map(account => (
                  <div key={account.id} className="border rounded-md p-4 flex justify-between items-center">
                    <div>
                      <p className="font-medium">eBay ID: {account.ebayAccountId}</p>
                      <p className="text-sm text-gray-500">Connected: {account.createdAt.toLocaleDateString()}</p>
                    </div>
                    <button
                      onClick={() => handleDisconnectEbay(account.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm"
                    >
                      Disconnect
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <button
                  onClick={handleConnectEbay}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Connect Another Account
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">{t('competitors')}</h2>
            <p>Manage competitor analysis</p>
            <button 
              onClick={() => navigate('/competitors')}
              className="mt-4 text-blue-500 hover:text-blue-700 text-sm"
            >
              View Competitors
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">{t('pricing_rules')}</h2>
            <p>Set and manage pricing rules</p>
            <button 
              onClick={() => navigate('/pricing-rules')}
              className="mt-4 text-blue-500 hover:text-blue-700 text-sm"
            >
              Manage Rules
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Items</h2>
            <p>View and manage your eBay listings</p>
            <button 
              onClick={() => navigate('/items')}
              className="mt-4 text-blue-500 hover:text-blue-700 text-sm"
            >
              Manage Listings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;