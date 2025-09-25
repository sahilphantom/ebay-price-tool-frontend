import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const CompetitorSearch = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    
    setIsLoading(true);
    
    // Mock search results - in real implementation, this would call API
    setTimeout(() => {
      setSearchResults([
        {
          id: '1',
          title: 'Sample Product Title',
          price: 29.99,
          seller: 'sample_seller',
          condition: 'New',
          image: 'https://placehold.co/100x100?text=Image',
          competitorPrice: 24.99,
          priceDifference: -5.00
        },
        {
          id: '2',
          title: 'Another Product Title',
          price: 45.99,
          seller: 'another_seller',
          condition: 'Used',
          image: 'https://placehold.co/100x100?text=Image',
          competitorPrice: 39.99,
          priceDifference: -6.00
        }
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-6">{t('competitor_search')}</h1>
          
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t('search_products')}
                className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              >
                {isLoading ? t('searching') : t('search')}
              </button>
            </div>
          </form>

          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">{t('search_results')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-20 h-20 object-contain mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">Seller: {item.seller}</p>
                        <p className="text-xs text-gray-500">Condition: {item.condition}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-xs text-gray-500">Your Price</p>
                        <p className="font-semibold">${item.price.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Competitor Price</p>
                        <p className="font-semibold">${item.competitorPrice.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <p className={`text-sm font-semibold ${item.priceDifference < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {item.priceDifference < 0 ? '-' : '+'}${Math.abs(item.priceDifference).toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.priceDifference < 0 ? 'Below' : 'Above'} competitor price
                      </p>
                    </div>
                    
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-blue-500 text-white py-1 px-2 rounded text-sm hover:bg-blue-600 transition duration-300">
                        {t('adjust_price')}
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-1 px-2 rounded text-sm hover:bg-gray-300 transition duration-300">
                        {t('view_details')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">{t('no_results')}</h3>
              <p className="mt-1 text-sm text-gray-500">{t('search_description')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitorSearch;