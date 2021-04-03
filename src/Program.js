import React from 'react';
import "./Program.css";

function Program() {

    return (
        <div className="program">
            <div className="program__imgcontainer">
                <img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="program" className="program__image"/>    
            </div> 
            <div className="program__details">
                <h3>FalconSat #1</h3>

                <table>
                    <tr>
                        <td>Mission IDs: </td>
                        <td>list Mission IDs</td>
                    </tr>
                    <tr>
                        <td>Launch Year: </td>
                        <td>2006</td>
                    </tr>
                    <tr>
                        <td>Successful Launch: </td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>Successful Landing: </td>
                        <td>launch_landing</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Program;