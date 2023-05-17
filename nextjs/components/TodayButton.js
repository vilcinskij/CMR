import React, { useState, useEffect } from "react";

function TodayButton() {

    const [text, setText] = useState();

    function clickHandler() {
        setText('LOOOBAS')
        console.log(text);

    }

    return (
        <>
            <button onClick={clickHandler}>TODAY</button>
        </>
    )
}
export default TodayButton