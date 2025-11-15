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

        //プロンプトの組み立て   //画像は一旦後で
        const prompt = `
        以下の条件に合うレシピを提案してください。

        [条件]
        主な食材: ${conditions.meinIngredient}
        追加したい食材: ${conditions.subIngredient}
        避けたい食材: ${conditions.avoidIngredient}
        料理ジャンル: ${conditions.cuisineType}
        分類: ${conditions.category}
        季節: ${conditions.season}
        調理時間: ${conditions.cookTime}
        難易度: ${conditions.difficulty}
        予算: ${conditions.cost}
        誰と食べるか: ${conditions.whom}
        どんな気分か: ${conditions.mood}
        その他(テイスト、目的、雰囲気など): ${conditions.taste}

        [出力フォーマット]
        {
            "ingredientTitle": "",
            "ingredientSummary": "",
            "ingredients": [],
            "directions": [],
            "recipePoint": "",
            "calorie": "",
            "protein": "",
            "lipid": "",
            "carbohydrates": "",
            "fiber": "",
            "salt": ""
        }
        `;

        //AIリクエスト
        const completion = await client.chat.completions.create({   //GPTに「返事を作ってください」と依頼
            model: "gpt-4o-mini",   //AIモデルの指定  //今回は軽くて速いモデル
            messages: [{        //やり取りの経歴をまとめる場所
                role: "user",       //役割を指定  //user→人間からの発言
                content: prompt,    //プロンプトを入れる(上で組み立てた「prompt」)
            }],
        });

        //AIレスポンス形式変換
        const resultText = completion.choices[0].message.content;  //上のAIリクエストcompletionの(一つ目の)返答文 ※contentが本文
        const result = JSON.parse(resultText);                  //JSONテキストをJSONオブジェクトに変換

        //フロントへのレスポンス
        res.status(200).json(result);  //フロントにレスポンスする ※リクエストとレスポンスは一緒の意識
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
