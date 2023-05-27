import React from 'react'
import { toast } from "react-toastify";

const Toast = () => {
    const onClick = () => toast('Toast is good', { hideProgressBar: true, autoClose: 2000, type: 'success' })

    return (<button onClick={onClick}> Click Me</button>)
}

export default Toast