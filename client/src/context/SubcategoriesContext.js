import axios from 'axios';
import { React, createContext} from 'react'
import { useQuery } from 'react-query';

export const SContext = createContext({});

export const SubcategoriesContext = (props) => {

    const fetchSubcategories = async() => {
        const res = await axios.get(`http://localhost:8000/subcategories`)
        return res.data
    }

    const { data, error, isLoading } = useQuery(["subcategories"], fetchSubcategories)

    if(isLoading) return <>isLoading</>

    let subcategories = data

    return (
        <SContext.Provider value={{subcategories}}>
            {props.children}
        </SContext.Provider>
    )
}
