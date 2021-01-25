import React from 'react'
import * as api from "../api/Api";
import { MapData } from "../export";
import { useDispatch, useSelector } from "react-redux";
import { displayData, ShippingView } from "../reducers/DataControl";

const Main = () =>{
    const data = useSelector(ShippingView);
    const dispatch = useDispatch()

    const DeleteData = async (test) =>{
        try {
            if (test) {
                await api.DeleteItems(test);
                const newList = data.filter(item => item._id !== test);
                dispatch(displayData(newList));
            };
        } catch (err) {
            console.log(err);
        };
    };

    const editTask = async(id, newTask) =>{
        const editedTask = data.map((task) =>{
            if (id === task._id) {
                return {
                    ...task,
                    title: newTask.title,
                    description: newTask.description,
                }
            }
            return task
        });
        await api.UpdateItems(id, newTask);
        dispatch(displayData(editedTask));
    }


    return (
        <article>
            {data.map((post) => (
                <MapData
                key ={post._id}
                id={post._id}
                title={post.title}
                description={post.description}
                editTask={editTask}
                DeleteData={DeleteData}
                    
                />
            ))}
        </article>
    )
}

export default Main
