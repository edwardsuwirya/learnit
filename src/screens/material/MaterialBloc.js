import {useState, useEffect} from 'react';

export const MaterialBloc = (repo) => {
    const [materialData, setMaterialData] = useState([]);
    const [isLoading, setShowLoading] = useState(false);
    const {getMaterialList} = repo();
    // useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.
    // useEffect => needs to do something after render
    useEffect( () => {
        onGetMaterialList();
    },[]);
    const onGetMaterialList = async () => {
        handleShowLoadingChange(true);
        const result = await getMaterialList();
        setMaterialData(result);
        handleShowLoadingChange(false);
    }

    const handleShowLoadingChange = (isLoadingValue) => {
        setShowLoading(isLoadingValue);
    };

    return {
        materialData,
        isLoading
    };
};
