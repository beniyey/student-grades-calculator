import { TextField } from "@mui/material";
import React from "react";
import Course from "../../Models/Course";
import CircularProgressBarWithLabel from "../CircularProgressBarWithLabel/CircularProgressBarWithLabel";
import CourseInput from "../CourseInput/CourseInput";
import "./GradesDashboard.css";


function GradesDashboard(): JSX.Element {

    const [courses, setCourses] = React.useState<Course[]>(null)

    React.useEffect(() => {
        if (localStorage.getItem("degree")) {
            setCourses(JSON.parse(localStorage.getItem("degree") as string))
        }
    }, []);

    return (
        <div className="GradesDashboard">
            <div>
                <CircularProgressBarWithLabel size={200} thickness={5} value={100} />
            </div>

            <div>
                <TextField
                    helperText="נקודות זיכוי לתואר"
                    id="demo-helper-text-aligned"
                    label="נק״ז"
                />
                <TextField
                    helperText="שם תואר"
                    id="demo-helper-text-aligned"
                    label="שם תואר"
                />
            </div>

            {courses &&
                courses.map((element: Course, index: number) => {
                    return <CourseInput key={index} course={element} />
                })
            }
        </div>
    );
}

export default GradesDashboard;
