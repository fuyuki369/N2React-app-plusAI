/*サーバーエントリーポイント*/

import 'dotenv/config';  //環境変数取得

import express from "express";      //npm install express インストール確認済み
import cors from "cors";            //npm install cors    インストール確認済み

//ルートインポート
import cookingRoutes from "./CookingProject/Cooking_routes/cookingRoutes.mjs";

//サーバー本体作成とPORT設定
const app = express();
const PORT = 3000;

//cors フロントと繋げる
app.use(cors({
    origin: "http://localhost:5173",    //フロントReactのURL
    credentials: true,                  //クッキー許可
}))

//JSONを使えるようにする
app.use(express.json()); 

//ルートからの機能を使用するコード app.use("ルートURL",ルートインポート値)
app.use("/api/cooking",cookingRoutes);  //料理AIアシスタント(CookingAssistance)

//環境変数確認  //確認済み
console.log("環境変数:", process.env.OPENAI_API_KEY);

//サーバー起動  //cd BackEnd → node project/main.mjs で起動
app.listen(PORT, () => {
    console.log(`サーバー起動: http://localhost:${PORT}`);
})