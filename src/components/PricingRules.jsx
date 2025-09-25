import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PricingRules = () => {
  const { t } = useTranslation();
  const [rules, setRules] = useState([
    {
      id: '1',
      name: 'Default Rule',
      type: 'global',
      action: 'match',
      adjustment: 0,
      minPrice: 1.00,
      isActive: true
    },
    {
      id: '2',
      name: 'Premium Products',
      type: 'item-specific',
      action: 'increase',
      adjustment: 2.00,
      minPrice: 5.00,
      isActive: true
    }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingRule, setEditingRule] = useState(null);

  const handleToggleRule = (id) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, isActive: !rule.isActive } : rule
    ));
  };

  const handleDeleteRule = (id) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  const handleEditRule = (rule) => {
    setEditingRule(rule);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setShowForm(false);
    setEditingRule(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">{t('pricing_rules')}</h1>
            <button 
              onClick={() => setShowForm(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              {t('add_rule')}
            </button>
          </div>

          {showForm && (
            <div className="mb-8 p-4 border rounded-lg bg-gray-50">
              <h2 className="text-lg font-semibold mb-4">
                {editingRule ? t('edit_rule') : t('create_new_rule')}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('rule_name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('enter_rule_name')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('rule_type')}
                    </label>
                    <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="global">{t('global_rule')}</option>
                      <option value="item-specific">{t('item_specific_rule')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('price_action')}
                    </label>
                    <select className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="match">{t('match_competitor')}</option>
                      <option value="increase">{t('increase_price')}</option>
                      <option value="decrease">{t('decrease_price')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('adjustment_amount')}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t('minimum_price')}
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    {t('save_rule')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditingRule(null);
                    }}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    {t('cancel')}
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-4">
            {rules.map((rule) => (
              <div key={rule.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{rule.name}</h3>
                    <p className="text-sm text-gray-500">
                      {rule.type === 'global' ? t('global_rule') : t('item_specific_rule')}
                    </p>
                    <p className="text-sm text-gray-500">
                      {rule.action === 'match' ? t('match_competitor') : 
                       rule.action === 'increase' ? t('increase_price') : 
                       t('decrease_price')} by ${rule.adjustment}
                    </p>
                    <p className="text-sm text-gray-500">
                      Min: ${rule.minPrice}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditRule(rule)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      {t('edit')}
                    </button>
                    <button
                      onClick={() => handleDeleteRule(rule.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      {t('delete')}
                    </button>
                    <button
                      onClick={() => handleToggleRule(rule.id)}
                      className={`px-3 py-1 rounded text-sm ${
                        rule.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {rule.isActive ? t('enabled') : t('disabled')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingRules;