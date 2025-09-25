import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const EbayCredentialForm = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    appId: '',
    certId: '',
    devId: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate credentials (in real app, you'd make an API call)
      if (!credentials.appId || !credentials.certId || !credentials.devId) {
        throw new Error(t('all_credentials_required'));
      }

      // In a real implementation, you would:
      // 1. Validate credentials with eBay API
      // 2. Store credentials securely
      // 3. Redirect to OAuth flow
      
      // For demo purposes, we'll simulate successful validation
      console.log('Validating credentials:', credentials);
      
      // Navigate to OAuth flow
      window.open('http://localhost:5000/api/ebay/auth-url', '_blank');
      
      // After OAuth completion, redirect to dashboard
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
      
    } catch (err) {
      setError(err.message || t('credential_validation_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('ebay_credentials')}</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('appid')}</label>
            <input
              type="text"
              name="appId"
              value={credentials.appId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('enter_appid')}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t('certid')}</label>
            <input
              type="text"
              name="certId"
              value={credentials.certId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('enter_certid')}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">{t('devid')}</label>
            <input
              type="text"
              name="devId"
              value={credentials.devId}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t('enter_devid')}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
          >
            {loading ? t('connecting') : t('connect_account')}
          </button>
        </form>
        
        <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium mb-2">{t('credential_info_title')}:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('credential_info_1')}</li>
            <li>{t('credential_info_2')}</li>
            <li>{t('credential_info_3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EbayCredentialForm;