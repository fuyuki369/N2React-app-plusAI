import { useState } from "react";
import './cooking.css'

function CookingAssistance(){

    /*食材*/
    const [meinIngredient,setMeinIngredient] = useState("");  //主な食材
    const [subIngredient,setSubIngredient] = useState("");    //追加したい食材
    const [avoidIngredient,setAvoidIngredient] = useState(""); //避けたい食材

    /*ジャンル・分類*/
    const [cuisineType,setCuisineType] = useState("");  //料理ジャンル
    const [category,setCategory] = useState("");        //分類
    const [season,setSeason] = useState("");            //季節

    /*時間・手間*/
    const [cookTime,setCookTime] = useState("");        //調理時間
    const [difficulty,setDifficulty] = useState("");    //難易度
    const [cost,setCost] = useState("");                //予算

    /*シチュエーション*/
    const [whom,setWhom] = useState("");                //誰と
    const [mood,setMood] = useState("");                //気分

    /*テイスト・雰囲気・目的*/
    const [taste,setTaste] = useState("");              //テイスト(自由)


    //アウトプット
    /*レシピタイトル・概要*/
    const [IngredientTitle,setIngredientTitle] = useState("レシピ名 of the レシピ名");      //レシピタイトル  //css調整のため一時的初期値
    const [IngredientSummary,setIngredientSummary] = useState("さっぱりした風味で疲労回復にピッタリ！");  //レシピ概要

    /*材料・手順(リスト)*/
    const [ingredients,setIngredients] = useState(["鶏むね肉 200g","レモン汁 大さじ1","バター 10g"]);  //材料リスト
    const [directions,setDirections] = useState(["鶏肉を一口大に切る。","フライパンでバターを熱して鶏肉を焼く。","火が通ったらレモン汁を加えて仕上げる。"]);    //手順リスト

    /*調理ポイント*/
    const [recipePoint,setRecipePoint] = useState("バターを焦がさないように弱火で仕上げる。");  //調理ポイント


    //栄養バランス
    /*栄養素*/
    const [calorie,setCalorie] = useState("520");                  //カロリー //一時的初期値
    const [protein,setProtein] = useState("26");                  //タンパク質
    const [lipid,setLipid] = useState("14");                      //脂質
    const [carbohydrates,setCarbohydrates] = useState("55");      //炭水化物
    const [fiber,setFiber] = useState("4");                      //食物繊維
    const [salt,setSalt] = useState("2.1");                        //塩分

    //イメージ画像
    const [AIimageURL,setAIimageURL] = useState("src/image/image_cooking/ChatGPT_cookingSampleA.png");  //サンプル初期値(※サイズ40%)

    //条件送信ボタン(「この条件をAIに伝える!」ボタン)
    const handleSubmit = async(e) => {    //e.preventDefault()を使いたいから(e)をもってくる
        e.preventDefault();  //デフォルトの動作防止
        //console.log("動作確認(りんご)");  //動作確認済み

        //条件をまとめた値
        const recipeConditions = {
            /*食材*/
            meinIngredient,     //主な食材
            subIngredient,      //追加したい食材
            avoidIngredient,    //避けたい食材
            /*ジャンル・分類*/
            cuisineType,        //料理ジャンル
            category,           //分類
            season,             //季節
            /*時間・手間*/
            cookTime,           //調理時間
            difficulty,         //難易度
            cost,               //予算
            /*シチュエーション*/
            whom,               //誰と
            mood,               //気分
            /*テイスト・雰囲気・目的*/
            taste,              //テイスト(自由)
        }

        //console.log("動作確認(バナナ)",recipeConditions)  //動作確認済み
    }

    return(
        <div className="cooking-container">
            {/*イントロ部分*/}
            <div className="cooking-intro">
                <h1>料理AIアシスタント</h1>
                    <p className="intro-topP">
                        あなたのお望みの条件に合わせ、<br />
                        AIがレシピ・作り方・ポイントを生成！<br />
                        栄養測定とイメージ画像生成でもっとわかりやすく！
                    </p>
                    <h2>使い方</h2>
                    <ul>
                        <li>1. 好きな食材や気分を入力して、あなたの好きな理想の料理を伝えよう！</li>
                        <li>2. AIがレシピと作り方、料理のポイントを提案！</li>
                        <li>3. 栄養バランスやカロリーも自動で分析してくれる！</li>
                        <li>4. AIが仕上がりのイメージ画像を生成！</li>
                    </ul>
            </div>
            {/*メイン部分*/}
            <div className="cooking-main">

                {/*条件入力部分*/}
                <section className="input-area">
                    <h3>好みの条件を入力！</h3>
                    <div className="input-conditions">
                        {/*食材*/}  {/*inputやselectのvalueは一旦後*/}
                        <div className="ingredient">
                            <h4>食材・材料</h4>
                            <div className="selection ingredient-selection">
                                <label htmlFor="mein-ingredient">主な食材</label>  {/*reactではforはhtmlForになる*/}
                                <input 
                                    type="text"
                                    id="mein-ingredient"
                                    value={meinIngredient}                                  //valueとonChangeはセット意識
                                    onChange={(e) =>setMeinIngredient(e.target.value)}      //(e) =>setState(e.target.value)意識
                                />
                                <label htmlFor="sub-ingredient">追加したい食材</label>
                                <input 
                                    type="text" 
                                    id="sub-ingredient"
                                    value={subIngredient}
                                    onChange={(e) =>setSubIngredient(e.target.value)}
                                />
                                <label htmlFor="avoid-ingredient">避けたい食材</label>
                                <input 
                                    type="text"
                                    id="avoid-ingredient"
                                    value={avoidIngredient}
                                    onChange={(e) =>setAvoidIngredient(e.target.value)}
                                />
                            </div>
                        </div>
                        {/*ジャンル・分類*/}
                        <div className="genre">
                            <h4>ジャンル・分類</h4>
                            <div className="selection genre-selection">
                                <label htmlFor="cuisine-type">料理ジャンル</label> 
                                <select id="cuisine-type" value={cuisineType} onChange={(e) =>setCuisineType(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="japanese-cuisine">和食</option>
                                    <option value="western-cuisine">洋食</option>
                                    <option value="chinese-cuisine">中華</option>
                                    <option value="italian-cuisine">イタリアン</option>
                                    <option value="korean-cuisine">韓国料理</option>
                                </select>
                                <label htmlFor="category">分類</label> 
                                <select id="category" value={category} onChange={(e) =>setCategory(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="main-dish">主菜</option>
                                    <option value="side-dish">副菜</option>
                                    <option value="soup">スープ</option>
                                    <option value="dessert">デザート</option>
                                    <option value="drink">ドリンク</option>
                                </select>
                                <label htmlFor="season">シーズン</label> 
                                <select id="season" value={season} onChange={(e) =>setSeason(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="spring">春</option>
                                    <option value="summer">夏</option>
                                    <option value="fall">秋</option>
                                    <option value="winter">冬</option>
                                </select>
                            </div>
                        </div>
                        {/*時間・手間*/}
                        <div className="effort">
                            <h4>調理時間・難易度</h4>
                            <div className="selection effort-selection">
                                <label htmlFor="cook-time">調理時間</label>
                                <select id="cook-time" value={cookTime} onChange={(e) =>setCookTime(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="5min">5分以内</option>
                                    <option value="15min">15分以内</option>
                                    <option value="30min">30分以内</option>
                                    <option value="60min">1時間以内</option>
                                </select>
                                <label htmlFor="difficulty">難易度</label>
                                <select id="difficulty" value={difficulty} onChange={(e) =>setDifficulty(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="easy">簡単</option>
                                    <option value="medium">普通</option>
                                    <option value="hard">手の込んだ料理</option>
                                </select>
                                <label htmlFor="cost">予算</label>
                                <select id="cost" value={cost} onChange={(e) =>setCost(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="500yen">~500円</option>
                                    <option value="1000yen">~1000円</option>
                                    <option value="3000yen">~3000円</option>
                                    <option value="5000yen">~5000円</option>
                                    <option value="10,000yen">~1万円</option>
                                </select>
                            </div>
                        </div>
                        {/*シチュエーション*/}
                        <div className="situation">
                            <h4>シチュエーション</h4>
                            <div className="selection effort-selection">
                                <label htmlFor="whom">誰と食べる？</label>
                                <select id="whom" value={whom} onChange={(e) =>setWhom(e.target.value)}>
                                    <option value="">指定無し</option>
                                    <option value="solo">１人</option>
                                    <option value="friends">友達</option>
                                    <option value="partner">恋人</option>
                                    <option value="family">家族</option>
                                </select>
                                <label htmlFor="mood">どんな気分？</label>
                                <input 
                                    type="text"
                                    placeholder="疲れている/元気出したい/リラックス"
                                    value={mood}
                                    onChange={(e) =>setMood(e.target.value)}
                                />
                            </div>
                        </div>
                        {/*テイスト・雰囲気・目的*/}
                        <div className="taste">
                            <h4>テイスト・栄養・雰囲気を自由に</h4>
                            <div className="selection taste-selection">
                                <textarea 
                                    type="text"
                                    placeholder="おしゃれ/家庭的/さっぱり/濃い味/ダイエット"
                                    value={taste}
                                    onChange={(e) =>setTaste(e.target.value)}
                                />
                            </div>
                        </div>
                        {/*送信ボタン*/}
                        <div className="submit-area">
                            <button className="submit-btn" onClick={handleSubmit}>
                                この条件をAIに伝える！       {/*eだけ渡すなら{handleSubmit}でいい(デフォルトで渡される)*/}
                            </button>
                        </div>
                    </div>
                </section>

                {/*レシピ提案部分*/}
                <section className="recipe-area">
                    <div className="recipe-output">
                        <h3>{IngredientTitle}</h3>
                        <p>{IngredientSummary}</p> 
                        <div className="recipe-detail">
                            {/*提案材料*/}
                            <div className="ingredients-output">
                                <h4>材料</h4>
                                <div className="ingredients">
                                    <ul>
                                        {ingredients.map((ingredient,index) => (
                                            <li key={index}>・{ingredient}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {/*提案手順*/}
                            <div className="directions-output">
                                <h4>作り方</h4>
                                <div className="directions">
                                    <ol>
                                        {directions.map((direction,index) => (
                                            <li key={index}>{index+1}.{direction}</li>  //0からの番号を{index+1}にして1からにする
                                        ))}
                                    </ol>
                                </div>
                            </div>
                            {/*調理ポイント*/}
                            <div className="point-output">
                                <h4>作り方のポイント</h4>
                                <div className="recipe-point">
                                    <p>{recipePoint}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*栄養推定部分*/} 
                <section className="nutrition-area">
                    <div className="nutrition-output">
                        <h3>このレシピの栄養バランス</h3>  
                        <div className="nutrition-detail">
                            <div className="nutrition calorie">  {/*spanで左右に分ける*/} 
                                <span className="label">カロリー</span>
                                <span className="value">{calorie}kcal</span>         {/*単位は一旦つけておく*/} 
                            </div>
                            <div className="nutrition protein">
                                <span className="label">タンパク質</span>
                                <span className="value">{protein}g</span>
                            </div>
                            <div className="nutrition lipid">
                                <span className="label">脂質</span>
                                <span className="value">{lipid}g</span>
                            </div>
                            <div className="nutrition carbohydrates">
                                <span className="label">炭水化物</span>
                                <span className="value">{carbohydrates}g</span>
                            </div>
                            <div className="nutrition fiber">
                                <span className="label">食物繊維</span>
                                <span className="value">{fiber}g</span>
                            </div>
                            <div className="nutrition salt">
                                <span className="label">塩分</span>
                                <span className="value">{salt}g</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/*イメージAI画像部分*/}
                <section className="image-area">
                    <div className="image-output">
                        <h3>AIによるイメージ画像</h3>
                        <div className="image">
                            <img src={AIimageURL} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CookingAssistance;