import { Button, TextField } from "@mui/material";
import React from "react";
import Course from "../../Models/Course";
import Grade from "../../Models/Grade";
import CourseAverage from "../CourseAverage/CourseAverage";
import GradeInput from "../GradeInput/GradeInput";
import "./CourseInput.css";

interface Props {
    course: Course
}

function CourseInput(props: Props): JSX.Element {

    const [displayGrades, setDisplayGrades] = React.useState<boolean>(false);

    function addGrade() {

    }

    function toggleDisplayGrades() {
        setDisplayGrades(!displayGrades);
    }

    return (
        <div className="CourseInput">
            <div className="course-info">
                {
                    displayGrades === false &&
                    <Button onClick={toggleDisplayGrades} variant="contained" color="success">
                        הצג ציונים
                    </Button>
                }
                {
                    displayGrades === true &&
                    <Button onClick={toggleDisplayGrades} variant="outlined" color="success">
                        הסתר ציונים
                    </Button>
                }
                <TextField label="שם קורס" id="outlined-size-normal" value={props.course.name} />
                <TextField label="מספר נק״ז" id="outlined-size-normal" value={props.course.credits} />
            </div>

            {
                displayGrades === true &&
                <>
                {
                    props.course.grades &&
                    props.course.grades.map((element: Grade, index: number) => {
                        return <GradeInput grade={element} key={index} readonly={true} />
                    })
                }
                {
                    <CourseAverage grades={props.course.grades} />
                }
                </>
            }

            <Button sx={{ width: "fit-content" }} fullWidth={false} onClick={addGrade} variant="contained" color="success">
                הוסף ציון
            </Button>

        </div>
    );
}
export default CourseInput;

