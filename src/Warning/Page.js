import { useState } from "react";
import WarningBanner from "./WarningBanner";

function Page() {
    const [showWarning, setShowWarning] = useState(true);
    
    function handleToggleClick() {
        setShowWarning(!showWarning)
    }

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    )

}

export default Page;