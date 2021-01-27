import React from "react";
class MainContent extends React.Component{
    constructor(props)
    {
        super(props);
         this.state = {
            mango : {
                serving_size: '30gm',
                colories:89,
                total_fat:['0.3g','0%'],
                saturated_fat:['1.3g','0%'],
                sodium:['1.0g','0%'],
                carbs:['6.0g','0%'],
                dietry_fiber:['0.3g','2%'],
                sugar:['1.3g','9%'],
                protien:['2.0g','8%'],
                vitamin_d:['2.3g','0%'],
                calcium:['0.3g','0%'],
                iron:['0.73g','1%'],
                potassium:['0.3g','8%'],
            }
        } 
    }
    render(){
        const mango = this.state.mango;
        return(
            <div className="row ml-5 mr-5  info-wrapper">
                <div className="col-md-12">
                    <div className="table-responsive p-3">
                    <h4>Nutrition Fact - {"Mango"}</h4>
                        <table className="info-tbl table"> 
                            <tbody>
                            {
                                Object.keys(mango).map((key, index)=>(
                                    <tr key={index}>
                                        <td>{key.charAt(0).toUpperCase() + key.slice(1).replace("_"," ")} {mango[key][0] !== undefined ? mango[key][0]  : ''}</td>
                                        <td className="text-right">{Array.isArray(mango[key]) === true ? mango[key][1] : mango[key]}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContent;