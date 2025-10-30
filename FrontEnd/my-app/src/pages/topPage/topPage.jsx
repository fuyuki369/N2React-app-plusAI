import { useState } from "react";
import { Link } from "react-router-dom";
import './topPage.css'

function topPage(){

    return(
        <div className="topPage-container">
            <div className="topPage-intro">
                <div className="intro-title">
                <h1>自分にあるWeb技術にAIを！</h1>
                </div>
                <div className="intro-subText">
                    <p>
                        ReactとNode.jsを活用してフロントからバックエンドのweb開発技術を積み上げています。
                    </p>
                    <p>
                        これまで学んできた知識をもとに、AIを取り入れた作品づくりに挑戦し、<br />
                        AIをどのように活用すればいいかを模索しながら新しい経験を形にしています。
                    </p>
                </div>
            </div>
            <div className="projects">
                <Link to='/cooking' className="project project-cooking" >
                    <h2>料理AIアシスタント</h2>
                    <p className="topP">
                        あなたのお望みの条件に合わせ、<br />
                        AIがレシピ・作り方・ポイントを生成！<br />
                        栄養測定とイメージ画像生成でもっとわかりやすく！
                    </p>
                    <h3>できること!</h3>
                    <ul>
                        <li>好みの条件に合わせてAIがレシピを提案</li>
                        <li>栄養バランスや糖分・塩分等を自動で推定</li>
                        <li>提案レシピのイメージ画像を生成</li>
                    </ul>
                    <p className="bottomP">
                        毎日の料理がAIと共にもっと便利に！<br />
                        AIがあなたの食生活を支えます！
                    </p>
                </Link>
                <Link className="project">
                    <h2>未定</h2>
                    <p className="topP">（制作中または制作未定の作品です。）</p>
                </Link>
                <Link className="project">
                    <h2>未定</h2>
                    <p className="topP">（制作中または制作未定の作品です。）</p>
                </Link>
            </div>
        </div>
    )
}

export default topPage;