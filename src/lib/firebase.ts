import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// 今後使用する機能に応じて、以下のコメントアウトを外して利用します
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// Firebaseプロジェクトの設定情報
// 環境変数から読み込むことで、APIキーをコードに直書きしないようにしています
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Firebaseアプリの初期化
// この app オブジェクトを使って、FirestoreやAuthなどの機能にアクセスします
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const db = getFirestore(app);
// export const auth = getAuth(app);

export default app;