import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname])

    return null;   //何も描写するものがないという合図(※エラーを起こさないため)
}

export default ScrollToTop;