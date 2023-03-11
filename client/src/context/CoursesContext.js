import axios from 'axios';
import { React, createContext} from 'react'
import { useQuery } from 'react-query';

export const CContext = createContext({});

export const CoursesContext = (props) => {

    const fetchCourses = async() => {
        const res = await axios.get(`http://localhost:8000/courses`)
        return res.data
    }

    const { data, error, isLoading } = useQuery(["courses"], fetchCourses)

    if(isLoading) return <>isLoading</>

    let courses = data

    return (
        <CContext.Provider value={{courses}}>
            {props.children}
        </CContext.Provider>
    )
}

