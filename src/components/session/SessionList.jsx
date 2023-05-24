import React, {useState} from 'react';
import {Table} from 'antd';
// import ListFilter from "./ListFilter";
import useListFetch from '../../shared/hooks/listHook/useListFetch';
// import SkeletonBar from "../../../Common/SkeletonBar";
import useTableHead from "./useTableHead";

import { SESSION_LIST } from '../../api/admin';

const filterInitState = {
    country: '',
    city: '',
    status: null,
    page: 1
};

export default function SessionList ()  {
    const tableHead = useTableHead();

    const [filter, setFilter] = useState(filterInitState);

    // call list api
    const fetchList = useListFetch({
        url: SESSION_LIST
    });

    const changePage = (page) => {
        fetchList.loadData({
            ...filter,
            page: page
        })
    };



    // map data
    const items = fetchList?.data?.session_list?.map((element, sl)=> {
       return {
           key: sl,
           sl: ++sl,
           action: element,
           session_for: element.session_for,
           invoice_status: element.invoice_status,
           session_medium: element.session_medium,
           status: element.status,
       }
    }) || [];

    let scroll = {};
    if (fetchList?.data?.session_list?.total > 0) {
        scroll = { x: "calc(100vh - 30rem)"}
    }

    return (
        <>
            {/* <ListFilter
                filterInitState={filterInitState}
                setFilter={setFilter}
                loadData={fetchList}
            /> */}
            { fetchList.isLoading && <h3>Loading</h3> }
            {!fetchList.isLoading &&
                <Table
                    columns={tableHead}
                    size="middle"
                    bordered 
                    dataSource={items}
                    scroll={scroll}
                    pagination={{
                        position: ["bottomCenter"],
                        current: fetchList?.data?.session_list?.current_page || 1,
                        total: fetchList?.data?.session_list?.total,
                        onChange: (page) => changePage(page),
                        pageSize: 10
                    }}
                />
            }
        </>
    );
};