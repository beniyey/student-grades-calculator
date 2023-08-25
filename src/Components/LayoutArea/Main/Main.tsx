import CircularProgressBarWithLabel from "../../Controls/CircularProgressBarWithLabel/CircularProgressBarWithLabel";
import GradesDashboard from "../../Controls/GradesDashboard/GradesDashboard";
import Suggestions from "../../Controls/Suggestions/Suggestions";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
            <div>
                <GradesDashboard />
            </div>
            <div>
                <Suggestions />
            </div>
        </div>
    );
}

export default Main;
