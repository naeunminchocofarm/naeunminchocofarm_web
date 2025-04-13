import React, { useState } from "react";

const SignUpInput = ({ label, name, type, value, onChange, validate }) => {
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        const val = e.target.value;
        const errorMsg = validate ? validate(val) : "";
        setError(errorMsg || "");
        onChange(e);
    };
    
    return (
        <div className="space-y-1">
        <label className="text-sm">{label}</label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg ${error ? "border-red-400" : "border-gray-300"}`}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
    };

export default SignUpInput;