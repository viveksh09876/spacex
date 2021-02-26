import React from 'react';
import './programs.css';

const Programs = (props) => {
    const { data } = props;
    return(
        <div className="right-sidebar">
            <div className="productListing">
                { 
                    data.map((item, index) => {
                        const landSuccess = item.rocket.first_stage.cores[0].land_success;
                        return(
                            <div key={`program_${index}`} className="productbox">
                                <img src={item.links.mission_patch_small} alt={item.mission_name} />
                                <h3><a href="/">{item.mission_name}</a></h3>
                                <ul>
                                    <li>
                                        <strong>Mission Ids:</strong>
                                        <ul className="innerliist">
                                            { item.mission_id.map((mid, i) => {
                                               return(
                                                <li key={`mid_${i}`}>{mid}</li>
                                               )
                                            })}
                                        </ul>
                                    </li>
                                    <li><strong>Launch Year:</strong> {item.launch_year}</li>
                                    <li><strong>Successful Launch:</strong> {item.launch_success.toString()}</li>
                                    <li><strong>Successful Landing:</strong> {landSuccess? 'True': 'False'}</li>
                                </ul>
                            </div>
                        );
                   })
                }
            </div>
        </div>
    );
};

export default Programs;