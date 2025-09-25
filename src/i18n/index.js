import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Authentication
      login: "Login",
      register: "Register",
      email: "Email",
      password: "Password",
      submit: "Submit",
      logout: "Logout",
      
      // Dashboard
      dashboard: "Dashboard",
      overview: "Overview",
      competitor_tracking: "Competitor Tracking",
      pricing_rules: "Pricing Rules",
      view_competitors: "View Competitors",
      manage_rules: "Manage Rules",
      
      // Competitor Search
      competitor_search: "Competitor Search",
      search_products: "Search products by keyword, MPN, or UPC...",
      search: "Search",
      searching: "Searching...",
      search_results: "Search Results",
      adjust_price: "Adjust Price",
      view_details: "View Details",
      no_results: "No search results",
      search_description: "Enter a product name or identifier to find competitors",
      
      // Pricing Rules
      pricing_rules: "Pricing Rules",
      add_rule: "Add Rule",
      edit_rule: "Edit Rule",
      create_new_rule: "Create New Rule",
      rule_name: "Rule Name",
      rule_type: "Rule Type",
      global_rule: "Global Rule",
      item_specific_rule: "Item-Specific Rule",
      price_action: "Price Action",
      match_competitor: "Match Competitor Price",
      increase_price: "Increase Price",
      decrease_price: "Decrease Price",
      adjustment_amount: "Adjustment Amount ($)",
      minimum_price: "Minimum Price ($)",
      save_rule: "Save Rule",
      cancel: "Cancel",
      edit: "Edit",
      delete: "Delete",
      enabled: "Enabled",
      disabled: "Disabled",
      
      // eBay Account
      ebay_account_setup: "eBay Account Setup",
      connecting_to_ebay: "Connecting to eBay...",
      please_wait: "Please wait while we connect your account",
      success: "Success!",
      account_connected_success: "Your eBay account has been successfully connected!",
      redirecting_dashboard: "Redirecting to dashboard...",
      setup_another_account: "Setup another account",
      credentials_stored_success: "Credentials stored successfully",
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
      // Authentication
      login: "ログイン",
      register: "登録",
      email: "メールアドレス",
      password: "パスワード",
      submit: "送信",
      logout: "ログアウト",
      
      // Dashboard
      dashboard: "ダッシュボード",
      overview: "概要",
      competitor_tracking: "競合他社追跡",
      pricing_rules: "価格設定ルール",
      view_competitors: "競合他社を見る",
      manage_rules: "ルールを管理",
      
      // Competitor Search
      competitor_search: "競合他社検索",
      search_products: "キーワード、MPN、またはUPCで商品を検索...",
      search: "検索",
      searching: "検索中...",
      search_results: "検索結果",
      adjust_price: "価格調整",
      view_details: "詳細を見る",
      no_results: "検索結果がありません",
      search_description: "商品名または識別子を入力して競合他社を見つけてください",
      
      // Pricing Rules
      pricing_rules: "価格設定ルール",
      add_rule: "ルールを追加",
      edit_rule: "ルールを編集",
      create_new_rule: "新しいルールを作成",
      rule_name: "ルール名",
      rule_type: "ルールタイプ",
      global_rule: "グローバルルール",
      item_specific_rule: "アイテム固有ルール",
      price_action: "価格操作",
      match_competitor: "競合他社価格に合わせる",
      increase_price: "価格を上げる",
      decrease_price: "価格を下げる",
      adjustment_amount: "調整額 ($)",
      minimum_price: "最低価格 ($)",
      save_rule: "ルールを保存",
      cancel: "キャンセル",
      edit: "編集",
      delete: "削除",
      enabled: "有効",
      disabled: "無効",
      
      // eBay Account
      ebay_account_setup: "eBayアカウント設定",
      connecting_to_ebay: "eBayに接続中...",
      please_wait: "アカウント接続中です。しばらくお待ちください。",
      success: "成功！",
      account_connected_success: "eBayアカウントが正常に接続されました！",
      redirecting_dashboard: "ダッシュボードにリダイレクト中...",
      setup_another_account: "別のアカウントを設定",
      credentials_stored_success: "認証情報が正常に保存されました",
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