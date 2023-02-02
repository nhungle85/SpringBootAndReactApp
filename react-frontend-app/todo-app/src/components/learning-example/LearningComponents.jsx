import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import {FourthComponent} from "./ThirdComponent";

export default function LearningComponent () {
    return (
        <div>
            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
            <FourthComponent />
        </div>
    )
}