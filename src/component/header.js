import React, { Fragment } from "react";
import Slide from "./common/slide";

const Header = ()=>{
    return(
        <Fragment>
            <Slide cls="bg1" />
            <Slide cls="bg2" />
            <Slide cls="bg3" />        
        </Fragment>
    );
}

export default Header;