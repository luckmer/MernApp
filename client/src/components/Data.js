import { useState } from "react";
import styled from "styled-components"

const Main = styled.div``
const Card = styled.div``
const Padding = styled.div``
const ImgPanel = styled.div``
const TextPanel = styled.div``
const Text =styled.div ``

const MapData = (props) =>{
    const [newName, setNewName] = useState({title: "",description:""});
    const [open, setOpen] = useState(false)
    const handleChange = (e) =>setNewName({ ...newName, [e.target.name]: e.target.value });

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.editTask(props.id, newName)
        setNewName("");
        setOpen(!open)
    }

    return (
        open ? (
            <form onSubmit ={handleSubmit}>
                <input
                    id={props.id}
                    className="todo-text"
                    type="text"
                    name="title"
                    onChange={handleChange}
                />
                <input
                    id={props.id}
                    className="todo-text"
                    type="text"
                    name="description"
                    onChange={handleChange}
                />
                <button onClick ={() =>setOpen(!open)} >Cancel</button>
                <button type ="submit">Submit</button>
            </form>
        ) :(
            <Main>
                <Card>
                    <Padding>
                        <div>
                            <ImgPanel>
                            </ImgPanel>
                        </div>
                        <TextPanel>
                            <Text>
                                <div>
                                    <h3>{props.title}</h3>
                                </div>
                                <div>
                                    <h3 onClick={() => props.DeleteData(props.id)}>{ props.description}</h3>
                                </div>
                            </Text>
                        </TextPanel>
                    </Padding>
                </Card>
            </Main>
            )
    )
}

export default MapData