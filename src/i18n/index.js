import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      competitors: "Competitors",
      pricing_rules: "Pricing Rules",
      login: "Login",
      register: "Register",
      email: "Email",
      password: "Password",
      submit: "Submit",
      ebay_account_management: "eBay Account Management",
      connect_your_ebay_account: "Connect Your eBay Account",
      connect_ebay_account: "Connect eBay Account",
      disconnect: "Disconnect"
    }
  },
  ja: {
    translation: {
      dashboard: "ダッシュボード",
      competitors: "競合他社",
      pricing_rules: "価格設定ルール",
      login: "ログイン",
      register: "登録",
      email: "メールアドレス",
      password: "パスワード",
      submit: "送信",
      ebay_account_management: "eBayアカウント管理",
      connect_your_ebay_account: "eBayアカウントを接続",
      connect_ebay_account: "eBayアカウントを接続",
      disconnect: "切断"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;