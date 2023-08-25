import { Button, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React from "react";
import Grade from "../../Models/Grade";
import { GradeType } from "../../Models/GradeType";
import "./GradeInput.css";

interface Props {
    grade: Grade,
    readonly: boolean
}

function GradeInput(props: Props): JSX.Element {

    const [readonly, setReadonly] = React.useState<boolean>(props.readonly);
    const [gradeType, setGradeType] = React.useState<GradeType>(props.grade.type);
    const [gradeValue, setGradeValue] = React.useState<number>(props.grade.value);
    const [gradeWeight, setGradeWeight] = React.useState<number>(props.grade.weight);

    function toggleReadonly() {
        setReadonly(!readonly);
    }

    function saveChanges() {
        props.grade.type = gradeType;
        props.grade.value = gradeValue;
        props.grade.weight = gradeWeight;
        toggleReadonly();
    }

    function handleTypeChange(event: SelectChangeEvent) {
        setGradeType(event.target.value as GradeType);
    }
    function handleValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGradeValue(Number(event.target.value));
    }
    function handleWeightChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGradeWeight(Number(event.target.value));
    }

    return (
        <div className="GradeInput">
            {
                readonly === true &&
                <Button onClick={toggleReadonly} variant="contained" >
                    ערוך
                </Button>
            }
            {
                readonly === false &&
                <Button onClick={saveChanges} variant="outlined" color="warning">
                    שמור
                </Button>
            }

            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gradeType}
                label="סוג הציון"
                required
                onChange={handleTypeChange}
                inputProps={{
                    readOnly: readonly,
                }}
            >

                {
                    Object.values(GradeType).map((element, index) => {
                        return <MenuItem key={index} value={element}>{element}</MenuItem>
                    })
                }
            </Select>

            <TextField
                id="outlined-number"
                label="ציון"
                type="number"
                value={gradeValue}
                onChange={handleValueChange}
                required
                InputLabelProps={{
                    shrink: true,
                }}

                InputProps={{
                    readOnly: readonly,
                    inputProps: {
                        min: 0,
                        max: 100
                    }
                }}
            />

            <TextField
                id="grade-weight"
                label="משקל הציון"
                aria-readonly
                type="number"
                value={gradeWeight}
                onChange={handleWeightChange}
                required
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                    readOnly: readonly,
                    inputProps: {
                        min: 0,
                        max: 100
                    }
                }}
            />



        </div>
    );
}

export default GradeInput;






