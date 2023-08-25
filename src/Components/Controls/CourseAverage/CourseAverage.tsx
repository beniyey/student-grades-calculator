import React from "react";
import Grade from "../../Models/Grade";
import calculateService from "../../Services/CalculateService";
import "./CourseAverage.css";

interface Props{
    grades: Grade[]
}

function CourseAverage(props:Props): JSX.Element {

    React.useEffect(()=>{
        console.log(props.grades, calculateService.calculateAverage(props.grades))
    }, [props.grades])

    return (
        <div className="CourseAverage">
			
        </div>
    );
}

export default CourseAverage;
