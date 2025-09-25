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
      disconnect: "Disconnect",
      ebay_credentials: "eBay Account Credentials",
      appid: "App ID",
      certid: "Cert ID", 
      devid: "Dev ID",
      connect_account: "Connect Account",
      connecting: "Connecting...",
      all_credentials_required: "All credentials are required",
      credential_validation_error: "Error validating credentials",
      enter_appid: "Enter your App ID",
      enter_certid: "Enter your Cert ID",
      enter_devid: "Enter your Dev ID",
      credential_info_title: "How to get your eBay credentials",
      credential_info_1: "Go to eBay Developer Portal",
      credential_info_2: "Create an application or use existing one",
      credential_info_3: "Copy App ID, Cert ID, and Dev ID"
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
      disconnect: "切断",
      ebay_credentials: "eBayアカウント認証情報",
      appid: "アプリID",
      certid: "証明書ID",
      devid: "開発者ID",
      connect_account: "アカウントを接続",
      connecting: "接続中...",
      all_credentials_required: "すべての認証情報を入力してください",
      credential_validation_error: "認証情報の検証に失敗しました",
      enter_appid: "アプリIDを入力",
      enter_certid: "証明書IDを入力",
      enter_devid: "開発者IDを入力",
      credential_info_title: "eBay認証情報の取得方法",
      credential_info_1: "eBay Developerポータルへアクセス",
      credential_info_2: "アプリケーションを作成するか、既存のものを使用",
      credential_info_3: "App ID、Cert ID、Dev IDをコピー"
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