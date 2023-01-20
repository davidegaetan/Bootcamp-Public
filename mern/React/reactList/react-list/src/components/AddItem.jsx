import React, { useState } from "react";

const AddItem = () => {
    const [itemsList, setItemsList] = useState([])
    const [text, setText] = useState("")

    const addNewItem = (e) => {
        e.preventDefault()
        const updateItems = [
            ...itemsList,
            {
                id: itemsList.length,
                text: text,
                completed: false,
                remove: false
            }
        ];
        setItemsList(updateItems)
        setText("")
    }

    const complete = (e) => {
        const id = parseInt(e.target.value)
        const updatedItem = itemsList.find(item => item.id === id);
        updatedItem.completed ? updatedItem.completed = false : updatedItem.completed = true;
        const updatedList = itemsList.map((item) => {
            if (item.id === id) {
                return updatedItem
            } else {
                return item
            }
        });
        setItemsList(updatedList)
    }

    const remove = (e) => {
        const id = parseInt(e.target.value)
        const updatedList = itemsList.filter(item => item.id !== id);
        console.log(updatedList)
        setItemsList(updatedList)
    }

    return (
        <div className="container">
            <form onSubmit={addNewItem} className="form-floating d-flex flex-row align-items-center">
                <input className="form-control" type="text" value={text}
                    onChange={e => setText(e.target.value)} />
                <label className="mt-2 m-2">Add to your list!</label>
                <button className="btn btn-primary p-2 ms-2">Add Item</button>
            </form>
            {itemsList.map((item, id) =>
                <div className="d-flex p-2 mt-2 bg-light border rounded align-items-center" key={"section" + id}>
                    <div className={item.completed ? "completedTodoText w-100 me-auto" : "me-auto"} key={id}>
                        {item.text}
                    </div>
                    <input className="form-check-input m-2 " type="checkbox" onChange={complete} value={item.id} key={"input" + id} />
                    <button className="btn btn-outline-danger" onClick={remove} value={item.id} key={"removeBtn" + id}>x</button>
                </div>
            )}
        </div>
    );
}
export default AddItem;