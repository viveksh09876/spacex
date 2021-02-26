import React from 'react';
import { YEARS, SUCCESS_TYPES, LANDING_TYPES } from '../../constants';
import './filters.css';

const Filters = (props) => {
    const { filters } = props;
    const updateFilter = (type, value) => {
         filters[type] = value;
         props.updateFilters(filters);
    }

    return(
        <div className="left-sidebar">
            <div className="filterbox">
                <h4>Launch Year</h4>
                <ul className="filter-options">
                    { YEARS.map((item, index) => {
                        return <li key={`year_${index}`}><input type="radio" name="year" onClick={() => updateFilter('launchYear', item)} /><span>{item}</span></li>
                      })
                    }
                </ul>
            </div>
            <div className="filterbox">
                <h4>Successful Launch</h4>
                <ul className="filter-options">
                    { SUCCESS_TYPES.map((item, index) => {
                        return <li key={`launch_${index}`}><input type="radio" name="success" onClick={() => updateFilter('successLaunch', item)} /><span>{item.toString()}</span></li>
                      })
                    }
                </ul>
            </div>
            <div className="filterbox">
                <h4>Successful Landing</h4>
                <ul className="filter-options">
                    { LANDING_TYPES.map((item, index) => {
                        return <li key={`landing_${index}`}><input type="radio" name="landing" onClick={() => updateFilter('landingSuccess', item)} /><span>{item.toString()}</span></li>
                      })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Filters;