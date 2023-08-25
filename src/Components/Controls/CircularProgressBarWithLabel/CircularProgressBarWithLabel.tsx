import "./CircularProgressBarWithLabel.css";
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';

function CircularProgressBarWithLabel(props: CircularProgressProps & { value: number }): JSX.Element {
    return (
        <div className="CircularProgressBarWithLabel">
            <CircularProgress variant="determinate" {...props} />
            <div className="CircularProgressBarWithLabel__label">
                הממוצע שלך
                &nbsp;
                {`${Math.round(props.value,)}%`}
            </div>
        </div>
    );
}

export default CircularProgressBarWithLabel;
