import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Layout from "./pages/1_Layout/Layout.jsx";   //※文字の最初は大文字にしたら出来た
import TopPage from "./pages/topPage/topPage.jsx";
import CookingAssistance from "./pages/CookingAssistance/cooking.jsx";
import ScrollToTop from "./component/ScrollToTop.jsx"

function App() {  //※functionを忘れずに
    return(
        <BrowserRouter>
            <ScrollToTop />  {/*ページ遷移時にページの一番上に行くようにする*/}
            <Routes>
                {/*ヘッダー + 各ルート*/}
                <Route element = {<Layout/>}>       {/*pathとelementを意識 (pathは小文字意識 elementはimport意識)*/}
                    {/*トップページ*/}
                    <Route path='/'  element = {<TopPage/>}/>
                    <Route path='/top'  element = {<TopPage/>}/>

                    {/*料理アシスタントページ*/}
                    <Route path='/cooking'  element = {<CookingAssistance/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;