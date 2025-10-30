import {Outlet,Link} from 'react-router-dom';
import './Layout.css'

function Layout(){
    return( 
        <div>     {/*全体をdivで囲む意識*/}
            <header>
                <h1>
                    <span className='h1-React'>React</span> + <span className='h1-mjs'>Node.js</span>
                    で<span className='h1-AI'>AI</span>を活用
                </h1>
                <nav>   {/*navとLinkを意識*/}
                    <Link to='/top'>TOP</Link>
                    <Link to='/cooking'>①料理AIアシスタント</Link>
                    <Link to='/' onClick={(e) => e.preventDefault()}>②未定</Link>
                    <Link to='/' onClick={(e) => e.preventDefault()}>③未定</Link>
                </nav>
            </header>
            <main>   {/*jsxはbodyじゃなくてmain*/}
                <Outlet />  {/*mainはOutletに任せる*/}
            </main>
        </div>
    )
}

export default Layout;