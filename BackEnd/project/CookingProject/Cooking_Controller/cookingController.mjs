/*料理コントローラー*/

/*ローカルAIへの変更部分 → 
    undata: AIPキー 
    undata: AIモデル指定
    undata: レスポンス形式変換
*/
//ローカルAIでの英文の状態での提案表示に一度成功

import OpenAI from "openai";  //OpenAIインポート

//OpenAI準備
const client = new OpenAI({

    /*APIキー(openAI or ローカルAI)*/

    /*OpenAiのAPIキー*/
    apiKey: process.env.OPENAI_API_KEY, 

    /*ローカルAIのAPIキー*/
    //baseURL: "http://localhost:1234/v1",
    //apiKey: "lm-studio",  
});


//AI料理提案
export const postRecipeSuggestion = async(req,res) => {   //非同期関数(安全)   //同期関数: export async function 値(req,res) {...}
    try{     //エラー対処の安全策  ※asyncが大切
        const { conditions } = req.body; //フロントから条件を取得(分割代入)
        console.log("受け取った条件:", conditions); //バックエンドの確認ログ

        //プロンプトの組み立て
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
            /*モデル指定(openAI or ローカルAI)*/

            /*OpenAIモデルの指定*/
            model: "gpt-4o-mini", 

            /*ローカルAIモデルの指定*/
            //model: "microsoft/phi-4-mini-reasoning",

            //メッセージ
            messages: [{        //やり取りの経歴をまとめる場所
                role: "user",       //役割を指定  //user→人間からの発言
                content: prompt,    //プロンプトを入れる(上で組み立てた「prompt」)
            }],
        });

        /*レスポンス形式変換(openAI or ローカルAI)*/

        /*OpenAIレスポンス形式変換*/
        const resultText = completion.choices[0].message.content;  //上のAIリクエストcompletionの(一つ目の)返答文 ※contentが本文
        const result = JSON.parse(resultText);                  //JSONテキストをJSONオブジェクトに変換


        /*ローカルAIレスポンス形式変換*/
        //const rawText = completion.choices[0].message.content;
        //const jsonMatch = rawText.match(/\{[\s\S]*\}/);// JSON部分だけ抜き出す
        //if (!jsonMatch) {
            //throw new Error("AI の返答に JSON が含まれていません");// JSONが見つからない場合の fallback
        //}
        //const jsonString = jsonMatch[0];
        //const result = JSON.parse(jsonString);// JSONテキストをJSONオブジェクトに変換


        //フロントへのレスポンス
        res.status(200).json(result);  //フロントにレスポンスする ※リクエストとレスポンスは一緒の意識
    }catch(error){
        console.log("エラー:",error);
        //res.status(500).json({ message: "サーバーエラーが発生しました。" , error: error.message });

        res.status(200).json({   //失敗した時用のダミーデータ
            ingredientTitle: "エラー用サンプル",
            ingredientSummary: "現在AIが使えないためエラー用サンプルを表示しています。",
            ingredients: ["データ①","データ②","データ③"],
            directions: ["データ①","データ②","データ③"],
            recipePoint: "APIエラー",
            calorie: 1,
            protein: 2,
            lipid: 3,
            carbohydrates: 4,
            fiber: 5,
            salt: 6,
            AIimageURL: "http://localhost:5173/src/image/image_cooking/ChatGPT_cookingSampleA.png",
        })
    }
}


//AI料理提案  //確認用ダミーコード(確認済み)
/*export const postRecipeSuggestion = async(req,res) => {   //非同期関数(安全)   //同期関数: export async function 値(req,res) {...}
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
