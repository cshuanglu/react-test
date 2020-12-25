import React, { useState, useEffect } from "react";
function FunctionComponent(props) {
    const  [date, setDate ] = useState(new Date())
    useEffect(() => {  // 相当于componentDidMount, componentDidUpdate, componnetWillUnmount
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, []);
    return (<div>
        <h4>function componnet</h4>
        <p>{ date.toLocaleTimeString()}</p>
    </div>)
}
export default FunctionComponent