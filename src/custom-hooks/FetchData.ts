import React, { useState, useEffect } from 'react';
import { server_calls } from '../api';

export const useGetData = () => {
    const [ smashData, setData ] = useState<any>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    // Intro the useEffect hook to add our data to react State
    useEffect( () => {
        handleDataFetch()
    }, [])
    return {smashData, getData:handleDataFetch}
}