import {DatePicker, Form} from "antd";
import React from "react";

export const DateInputFilter = ({value, fieldName, label, onChange, style, setFilterState}) => {

    const inputChange = (date, dateString) => {
        setFilterState((prevState) => ({
            ...prevState,
            [fieldName]: dateString
        }))

        if (onChange) {
            onChange(date, dateString)
        }
    }

    return (
        <>
            <Form.Item style={style}>
                <DatePicker  style={{ width: '100%' }} placeholder={label} onChange={inputChange} />
            </Form.Item>
        </>
    );
}
