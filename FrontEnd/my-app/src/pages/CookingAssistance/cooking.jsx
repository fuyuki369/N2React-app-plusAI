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
                                    value={meinIngredient}
                                    onChange={(e) =>setMeinIngredient(e)}   //valueとonChangeはセット意識
                                />
                                <label htmlFor="sub-ingredient">追加したい食材</label>
                                <input 
                                    type="text" 
                                    id="sub-ingredient"
                                    value={subIngredient}
                                    onChange={(e) =>setSubIngredient(e)}
                                />
                                <label htmlFor="avoid-ingredient">避けたい食材</label>
                                <input 
                                    type="text"
                                    id="avoid-ingredient"
                                    value={avoidIngredient}
                                    onChange={(e) =>setAvoidIngredient(e)}
                                />
                            </div>
                        </div>
                        {/*ジャンル・分類*/}
                        <div className="genre">
                            <h4>ジャンル・分類</h4>
                            <div className="selection genre-selection">
                                <label htmlFor="cuisine-type">料理ジャンル</label> 
                                <select id="cuisine-type" value={cuisineType} onChange={(e) =>setCuisineType(e)}>
                                    <option value="">指定無し</option>
                                    <option value="japanese-cuisine">和食</option>
                                    <option value="western-cuisine">洋食</option>
                                    <option value="chinese-cuisine">中華</option>
                                    <option value="italian-cuisine">イタリアン</option>
                                    <option value="korean-cuisine">韓国料理</option>
                                </select>
                                <label htmlFor="category">分類</label> 
                                <select id="category" value={category} onChange={(e) =>setCategory(e)}>
                                    <option value="">指定無し</option>
                                    <option value="main-dish">主菜</option>
                                    <option value="side-dish">副菜</option>
                                    <option value="soup">スープ</option>
                                    <option value="dessert">デザート</option>
                                    <option value="drink">ドリンク</option>
                                </select>
                                <label htmlFor="season">シーズン</label> 
                                <select id="season" value={season} onChange={(e) =>setSeason(e)}>
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
                                <select id="cook-time" value={cookTime} onChange={(e) =>setCookTime(e)}>
                                    <option value="">指定無し</option>
                                    <option value="5min">5分以内</option>
                                    <option value="15min">15分以内</option>
                                    <option value="30min">30分以内</option>
                                    <option value="60min">1時間以内</option>
                                </select>
                                <label htmlFor="difficulty">難易度</label>
                                <select id="difficulty" value={difficulty} onChange={(e) =>setDifficulty(e)}>
                                    <option value="">指定無し</option>
                                    <option value="easy">簡単</option>
                                    <option value="medium">普通</option>
                                    <option value="hard">手の込んだ料理</option>
                                </select>
                                <label htmlFor="cost">予算</label>
                                <select id="const" value={cost} onChange={(e) =>setCost(e)}>
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
                                <select id="whom" value={whom} onChange={(e) =>setWhom(e)}>
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
                                    onChange={(e) =>setMood(e)}
                                />
                            </div>
                        </div>
                        {/*テイスト・雰囲気・目的*/}
                        <div className="taste">
                            <h4>テイスト・栄養・雰囲気を自由に</h4>
                            <div className="selection taste-selection">
                                <input 
                                    type="text"
                                    placeholder="おしゃれ/家庭的/さっぱり/濃い味/ダイエット"
                                    value={taste}
                                    onChange={(e) =>setTaste(e)}
                                />
                            </div>
                        </div>
                        {/*送信ボタン*/}
                    </div>
                </section>
                {/*レシピ等提案部分*/}
                <section className="recipe-area"></section>
                {/*栄養推定部分*/}
                <section className="nutrition-area"></section>
                {/*イメージAI画像部分*/}
                <section className="image-area"></section>
            </div>
        </div>
    )
}

export default CookingAssistance;