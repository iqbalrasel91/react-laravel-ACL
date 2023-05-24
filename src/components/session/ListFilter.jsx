import React, {useState} from 'react';
import {Button, Col, Form, Row} from "antd";
import {InputFilter} from "../../../../shared/filterInputs/input";
import {SelectFilter} from "../../../../shared/filterInputs/select";

export default function ListFilter ({filterInitState, setFilter, loadData}) {

    const [initFilterState, setInitFilterState] = useState(filterInitState);

    const filterOnSubmit = () => {
        loadData.loadData({
            ...initFilterState,
            page: 1
        });
        setFilter({
            initFilterState
        })
    }

    const resetFilter = () => {
        setInitFilterState(filterInitState);
        setFilter(filterInitState)
        loadData.loadData(filterInitState);
    };

    return (
        <>
            <Row gutter={16}>
                <Col xl={6} lg={7} md={8} sm={24} xs={24} className="gutter-row">
                    <InputFilter
                        value={initFilterState.country}
                        fieldName={'country'}
                        setFilterState={setInitFilterState}
                        label='Search by country'
                    />
                </Col>
                <Col xl={6} lg={7} md={8} sm={24} xs={24} className="gutter-row">
                    <InputFilter
                        value={initFilterState.city}
                        fieldName={'city'}
                        setFilterState={setInitFilterState}
                        label='Search by city'
                    />
                </Col>
                <Col xl={6} lg={7} md={8} sm={24} xs={24} className="gutter-row">
                    <SelectFilter
                        value={initFilterState.status}
                        fieldName={'status'}
                        setFilterState={setInitFilterState}
                        label='Status'
                        options={[
                            {
                                value: 'Active',
                                label: 'Active',
                            },
                            {
                                value: 'Inactive',
                                label: 'Inactive',
                            }
                        ]}
                    />
                </Col>
                <Col xl={6} lg={7} md={8} sm={24} xs={24} className="gutter-row">
                    <Form.Item>
                        <Button type="danger" htmlType="button" onClick={() => resetFilter()}>
                            Reset
                        </Button>
                        &nbsp;
                        <Button type="primary" htmlType="button" onClick={() => filterOnSubmit()}>
                            Filter
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </>
    );
};