import {Form, Input} from "antd";
import React from "react";

export const InputFilter = ({value, fieldName, label, onChange, type = 'text', style, setFilterState}) => {

    const inputChange = (event) => {
        const value = event.target.value;
        setFilterState((prevState) => ({
            ...prevState,
            [fieldName]: value
        }))

        if (onChange) {
            onChange(event)
        }
    }

    return (
        <>
            <Form.Item style={style}>
                <Input type={type} name={fieldName} value={value} placeholder={label}
                       onChange={(e) => inputChange(e)}/>
            </Form.Item>
        </>
    );
}
