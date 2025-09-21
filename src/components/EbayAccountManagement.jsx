import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const EbayAccountManagement = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnectEbay = () => {
    setIsConnecting(true);
    // Redirect to eBay OAuth URL
    window.open('http://localhost:5000/api/ebay/auth-url', '_blank');
    setTimeout(() => setIsConnecting(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">{t('ebay_account_management')}</h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Connect Your eBay Account</h2>
            <p className="text-gray-600 mb-4">
              To start using the eBay Price Adjuster, you need to connect your eBay account.
              This will allow us to access your listings and competitors.
            </p>
            
            <button
              onClick={handleConnectEbay}
              disabled={isConnecting}
              className={`px-6 py-3 rounded-md text-white font-medium ${
                isConnecting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}
            >
              {isConnecting ? 'Connecting...' : 'Connect eBay Account'}
            </button>
          </div>

          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Your Connected Accounts</h2>
            <div className="space-y-4">
              <div className="border rounded-md p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">ebay_user_123456789</p>
                    <p className="text-sm text-gray-500">Connected: Today</p>
                  </div>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 text-sm">
                    Disconnect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbayAccountManagement;