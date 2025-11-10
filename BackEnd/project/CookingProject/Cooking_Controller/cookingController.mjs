/*料理コントローラー*/

//AI料理提案
export function postRecipeSuggestion(req,res){
    const { conditions } = req.body;
    console.log("受け取った条件:",conditions)
}