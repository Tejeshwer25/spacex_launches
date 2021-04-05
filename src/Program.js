import React from 'react';
import "./Program.css";

function Program(prop) {

    var mission_id = prop.data.mission_id;     

    return (
        
        <div className="program">
            <div className="program__imgcontainer">
                <img src={prop.data.links.mission_patch} alt="program" className="program__image"/>    
            </div> 
            <div className="program__details">
                <h3>{prop.data.mission_name} #{prop.data.flight_number}</h3>

                <table>
                    <tr>
                        <td>Mission IDs: </td>
                        <td>
                            {mission_id.length ? mission_id.map(mission => (
                                <li>{mission ? mission : "Not Available" }</li>
                            )) : "unknown"}
                        </td>
                    </tr>
                    <tr>
                        <td>Launch Year: </td>
                        <td>{prop.data.launch_year}</td>
                    </tr>
                    <tr>
                        <td>Successful Launch: </td>
                        <td>{prop.data.launch_success ? "Successful" : "Unsuccessful"}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Program;