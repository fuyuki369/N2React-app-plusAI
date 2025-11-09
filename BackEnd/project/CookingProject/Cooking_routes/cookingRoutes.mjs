/*料理ルーター*/

import express from 'express';

//ファイルからインポートする部分  //import { 取得する値 } from "ファイルの場所"
import { postRecipeSuggestion } from '../Cooking_Controller/cookingController.mjs';


//ルーター作成
const router = express.Router();

//ルーターエリア //router.post("指定URL",インポートした値)
router.post("/post",postRecipeSuggestion);  //料理AI提案


//エクスポート
export default router;