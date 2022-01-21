import React from 'react';

export const FormErrors = ({ formErrors }) =>
    <div className="formErrors absolute top-0 left-0">
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <p className="text-red-600 text-sm font-medium leading-5 mt-2" key={i}>
                        <span className="capitalize">{fieldName} </span>
                        {formErrors[fieldName]}
                        </p>
                )
            } else {
                return '';
            }
        })}
    </div>