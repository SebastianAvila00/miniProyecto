import React from "react";


function Input({ type, name, value, onChange, onBlur }) {
    return (
        <input
            className="h-[40px] w-[290px] rounded md:mr-5 bg-[#313131] text-white "
            type={type}
            placeholder
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            required
        />
    )
}

export default Input;