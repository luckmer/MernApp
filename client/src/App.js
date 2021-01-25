import { useEffect } from "react";
import * as api from "./api/Api";
import { Main, NavBar } from "./export";
import { useDispatch } from "react-redux";
import { displayData } from "./reducers/DataControl";

import styled from "styled-components";

const Article = styled.article`
font-family: "Roboto", sans-serif;
padding: 10em 10em 10em;
display:flex;
justify-content:space-between;
`



const App = () =>{
    const dispatch = useDispatch()
    useEffect(() =>{
        const Reducer = async () =>{
            try {
                const { data } = await api.LoadItems();
                dispatch(displayData(data));
            } catch (err) {
                console.log(err)
            }
        }
        Reducer();
    }, [dispatch]);
    

    return (
        <Article>   
            <Main />
            <NavBar/>
        </Article>
    )
}
export default App;

