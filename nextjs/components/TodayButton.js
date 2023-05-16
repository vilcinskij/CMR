import React, { useState, useEffect } from "react";

function TodayButton() {

    const [text, setText] = useState('BABAS');

    function clickHandler() {
        console.log(text);
        setText('LOOOBAS')

    }

    return (
        <>
            <button onClick={clickHandler}>TODAY</button>
        </>
    )
}
export default TodayButton