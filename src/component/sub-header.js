import React from "react";

const SubHeader = ()=>{
    return(
        <div className="row mt-2 mb-2">
            <div className="col-md-1 text-center">
                <span className="fa fa-info-circle"></span>
            </div>
            <div className="col-md-11 title-wrapper">
                <span className="title">Healthy Fruits</span>
            </div>
        </div>
    );
}

export default SubHeader;