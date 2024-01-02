import React from 'react';


function List ({name, done}) {
    return <li className={"todolist"}>{name} {done && "done"}</li>
}
const ToDoList = () => {
    return (
        <div>
            <h2 className={"headertodo"}>To Do List</h2>
            <List done={true} name={"Cleaning"}/>
            <List done={true} name={"Education"}/>
            <List done={false} name={"Meditation"}/>
            <List done={false} name={"Education"}/>
            <List done={false} name={"Training"}/>
        </div>
    );
};

export default ToDoList;