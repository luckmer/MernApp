import {useState} from 'react'
import { useDispatch,useSelector } from "react-redux";
import { displayData } from "../reducers/DataControl";
import * as api from "../api/Api";
import styled from "styled-components";

const Section = styled.section`
    background-color:#fff;
    padding:40px;
    form{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    header{
        max-width: 90%;
        margin:auto;
        padding:10px;
        color:#fff;
    }
    input{
        width:15vw;
        height:3vh;
        margin:2px;
        color:#fff;
        background-color:#fff;
        border:1px solid grey;
    }
    `



const NavBar = () => {
    const test = useSelector(state => state.data.todoData);
    const dispatch = useDispatch()
    const [state, setState] = useState({ title: "", description: "" });
    const handleChange = (e) =>setState({ ...state, [e.target.name]: e.target.value });
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const { title, description } = state
            const post = { title, description }
            const { data } = await api.AddItems(post)
            dispatch(displayData([...test, data]));
        } catch (err) {
            console.log(err)
        };
    };
    
    
    return (
        <Section>
            <header>
                <p>Create New Card</p>
            </header>
            <form onSubmit  = {handleSubmit}>
                <input onChange ={handleChange } name ="title"  />
                <input onChange={handleChange} name="description" />
                <button type ="submit">Submit</button>
            </form>
        </Section>
    )
}

export default NavBar
