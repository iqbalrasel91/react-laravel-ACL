import { useState, useEffect } from "react";

import axiosServer from "../../../utils/server/axiosServer";
import errorHandler from "../../../utils/errorHanlder";


const useListFetch = ({ url, server= axiosServer, filter={} }) => {
    const [data, setData] = useState({
        isLoading: true,
        hasError: false,
        isComplete: false,
        data: null,
    });

    useEffect(() => {
        loadData(filter);
    }, []);

    const loadData = (filter) => {
        setData( {
            isLoading: true,
            hasError: false,
            isComplete: false,
            data: null,
        });
        const params = {...filter };
        axiosServer.get(url, { params })
            .then((res) => {
                setData( {
                    isLoading: false,
                    hasError: false,
                    isComplete: true,
                    data: res.data,
                });
            }).catch((error)=>{
                setData( ({
                    isLoading: false,
                    hasError: true,
                    isComplete: false,
                    data: null,
                }))
            errorHandler(error)
        });
    }
    return {
        ...data, loadData, setData
    };
};

export default useListFetch;