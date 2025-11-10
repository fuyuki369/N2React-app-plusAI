/*料理コントローラー*/

//AI料理提案
export function postRecipeSuggestion(req,res){
    const { conditions } = req.body;
    console.log("受け取った条件:",conditions)
}


//AI提案コード  //動作確認済み
/*export const postRecipeSuggestion = async (req, res) => {
    try {
        const { conditions } = req.body;
        console.log("受け取った条件:", conditions);

        // 仮データ（実際はAIやDBから取得）
        const result = {
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
        AIimageURL: "https://example.com/image.jpg",
        };

        res.status(200).json(result);
    } catch (error) {
        console.error("エラー:", error);
        res.status(500).json({ message: "サーバーエラーが発生しました。" });
    }
};*/
