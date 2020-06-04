import React from 'react'
import './Urlshortbox.css'
const InputComponent = ({ value, onChange, type }) => (

    <div className="col-lg-6">
        <input type={type}
            value={value} 
            onChange={(event) => onChange(event.target.value)}
        />
    </div>



);

export default InputComponent