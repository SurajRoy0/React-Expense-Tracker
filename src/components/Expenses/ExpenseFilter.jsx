import React, { useState } from 'react';
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const { takingStartDate, takingEndDate } = props;

    const filterStartDateHandler = (e) => {
        const startDate = e.target.value;
        takingStartDate(startDate);
      };
      
      const filterEndDateHandler = (e) => {
        const endDate = e.target.value;
        takingEndDate(endDate);
      };

  return (
    <div className='filter-div'>
        <form className="filter-form" action="">
            <div className="filter-date">
                <label htmlFor="">From:</label>
                <input type="date" onChange={filterStartDateHandler}/>
            </div>
            <div className="filter-date">
                <label htmlFor="">To:</label>
                <input type="date" onChange={filterEndDateHandler}/>
            </div>
        </form>
    </div>
  )
}

export default ExpenseFilter;