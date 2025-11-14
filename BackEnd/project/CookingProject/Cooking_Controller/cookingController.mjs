/*料理コントローラー*/

import OpenAI from "openai";  //OpenAIインポート

//OpenAI準備
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


//AI料理提案
export const postRecipeSuggestion = async(req,res) => {   //非同期関数(初心者向けで安全)   //同期関数: export async function 値(req,res) {...}
    try{     //エラー対処の安全策  ※asyncが大切
        const { conditions } = req.body; //フロントから条件を取得(分割代入)
        console.log("受け取った条件:", conditions); //バックエンドの確認ログ


        
        res.status(200).json(Result);  //フロントにレスポンスする ※リクエストとレスポンスは一緒の意識
    }catch(error){
        console.log("エラー:",error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" , error: error.message })
    }
}


//AI料理提案  //確認用ダミーコード(確認済み)
/*export const postRecipeSuggestion = async(req,res) => {   //非同期関数(初心者向けで安全)   //同期関数: export async function 値(req,res) {...}
    try{     //エラー対処の安全策  ※asyncが大切
        const { conditions } = req.body; //フロントから条件を取得(分割代入)
        console.log("受け取った条件:", conditions); //バックエンドの確認ログ

        //仮のダミーリザルト  //ここからres200までコメントアウト予定
        const dummyResult = {
        ingredientTitle: "鶏むね肉のレモンバター炒め",
        ingredientSummary: "さっぱりした風味で疲労回復にぴったり！",
        ingredients: ["鶏むね肉 200g", "レモン汁 大さじ1", "バター 10g"],
        directions: ["鶏肉を切る", "炒める", "仕上げる"],
        recipePoint: "焦がさないように弱火で。",
        calorie: 520,
        protein: 26,
        lipid: 14,
        carbohydrates: 55,
        fiber: 4,
        salt: 2.1,
        AIimageURL: "http://localhost:5173/src/image/image_cooking/ChatGPT_cookingSampleA.png",  //フロントのURLを指定して画像を表示
        };

        res.status(200).json(dummyResult);  //フロントにレスポンスする ※リクエストとレスポンスは一緒の意識
    }catch(error){
        console.log("エラー:",error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" , error: error.message })
    }
}*/
