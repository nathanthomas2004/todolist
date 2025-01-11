import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const [listItem, setListItem] = useState([]);

    const filterArray = (num) => {
        setListItem(listItem.filter((element, index) => {
            return index !== num;
        }));
    }

    return (
        <div>
            <h1>To-Do</h1>
            <TodoForm listItem={listItem} setListItem={setListItem} />
            {listItem.map((item, index) => {
                console.log(index);
                return <TodoItem info={item} uniqueKey={index} key={index} deleteElement={filterArray} />
            })}
        </div>
    );
}