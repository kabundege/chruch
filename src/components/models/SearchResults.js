import React from 'react';
import '../../scss/components/modal.scss';
import Loader from "react-spinners/HashLoader";

const getData = (data,type,searchContent) =>{
    let firstDate = 15;
    let firstMonth = 11;
    let firstYear = 2020;

    const lastDate = new Date().getDay() === 7 ? new Date().getDate() : new Date().getDate() + 7 - new Date().getDay();
    
    const lastMonth =  () => {
        let result;
            if(new Date().getDate() <= 7 ){
                if(new Date().getMonth() === 0){
                    result = 11;
                }else{
                    result = new Date().getMonth() - 1 ;
                }
            }else{ 
                result = new Date().getMonth();
            }
        return result + 1 ;
    }
    const lastYear = () => {
        let result;
            if(new Date().getDate() <= 7 && new Date().getMonth() === 0){
                result = new Date().getFullYear() - 1;
            }else{ 
                result = new Date().getFullYear();
            }
        return result ;
    }
    const prevMonth = (month) => {
        let result = 0;
        if(month === 1){
            result = 31;
        }else if(month === 2){
            result = 28
        }else if(month === 3){
            result = 31
        }else if(month === 4){
            result = 30
        }else if(month === 5){
            result = 31
        }else if(month === 6){
            result = 30
        }else if(month === 7){
            result = 31
        }else if(month === 8){
            result = 31
        }else if(month === 9){
            result = 30
        }else if(month === 10){
            result = 31
        }else if(month === 11){
            result = 30
        }else if(month === 12){
            result = 31
        }
        return result;
    }
     
    const result = [];

    for(let i=0;i<=3;i++){
        let serviceOne = 0 ;
        let serviceTwo = 0 ;
        let found = false;

        for(const element of data){
            if(
                element.date === firstDate && 
                element.month === firstMonth &&
                element.year === firstYear &&
                element[type].includes(searchContent)
            ){
                found = true;
                if(element.service === 1){
                    serviceOne++;
                }else{
                    serviceTwo++;
                }
            }
        }

        if(found){
            result.push({date:firstDate, month:firstMonth, year:firstYear, serviceOne, serviceTwo});
        }

        const month = lastMonth();
        const year = lastYear();
        if(
            firstDate >= lastDate &&
            firstMonth ===  month &&
            firstYear === year
        ){
            break;
        }else{
            let newDate,newMonth,newYear;

            if(firstDate + 7 > prevMonth(month)){
                newDate = firstDate + 7 - prevMonth(month);           
                 if(firstMonth === 12){
                    newMonth = 1;
                    newYear = firstYear + 1;
                }else{
                    newMonth = firstMonth + 1;  
                    newYear = firstYear;
                }
            }else if(firstDate + 7 === prevMonth(month)){
                newDate = 1;            
                if(firstMonth === 12){
                    newMonth = 1;
                    newYear = firstYear + 1;
                }else{
                    newMonth = firstMonth + 1;  
                    newYear = firstYear;
                }
            }else{
                newDate = firstDate + 7 ;
                newMonth = firstMonth ;  
                newYear = firstYear;
            }

            firstDate = newDate || firstDate;
            firstMonth = newMonth || firstMonth;
            firstYear = newYear || firstYear;
        }
    }

    return result;
}

const Search = ({ searchContent,type,data,loading,closer }) => {
    const results = getData(data,type,searchContent);
    return !loading ?
        <div className="search">
        <h3 style={{color:"#333",textShadow:"1px 5px 10px lightgrey",letterSpacing:"2px"}}>{searchContent}</h3>
        <span className="closer" onClick={()=>closer()}>x</span>
        <div className="container">
            <div style={{fontWeight:"bold",color:"grey"}}className="NavBar">
                <span style={{position:"relative",top:"-15%"}}>{type === "paruwasi" ? '🔢' : '👥'}</span>
                <span>📅 Itariki</span>
                <span>⛪ rya { window.screen.width > 700 ? 'Mbere' : 1}</span>
                <span>🏡 rya { window.screen.width > 700 ? 'kabiri' : 2}</span>
            </div>
            {
                results[0] ? results.map((day,index)=>
                        <div className="NavBar" key={index}>
                            <span>{index+1}</span>
                            <span>{ day.date+'/'+day.month+'/'+day.year}</span>
                            <span> {day.serviceOne}</span>
                            <span> {day.serviceTwo}</span>
                        </div>
                    ):<h3> <i className="fas fa-mask"></i> Ntacyo Ishakiro Ribonye</h3>
            }
            </div> 
        </div>: <div className="loader"> <Loader/>  </div>;
    
}

export default Search;
