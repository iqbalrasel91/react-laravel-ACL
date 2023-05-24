import {Form, Select} from "antd";
import React from "react";

export const SelectFilter = ({value, fieldName, label, onChange, style, setFilterState, options=[]}) => {

    const selectChange = (value) => {
        setFilterState((prevState) => ({
            ...prevState,
            [fieldName]: value
        }));

        if (onChange) {
            onChange(value)
        }
    };

    return (
        <>
            <Form.Item style={style}>
                <Select
                    value={value}
                    placeholder={label}
                    showSearch
                    style={{
                        width: '100%',
                    }}
                    onChange={selectChange}
                    options={options}
                />
            </Form.Item>
        </>
    );
}
