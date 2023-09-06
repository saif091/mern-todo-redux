import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));


        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <div class="input-group mb-3">
                <input type="text" className="input form-control" placeholder="Enter Task" onChange={onInputChange} value={text} />
                <button class="btn btn-success" type="button" id="button-addon2" onClick={onFormSubmit}>Submit</button>
            </div>

        </form>
    )
}

export default TodoForm;