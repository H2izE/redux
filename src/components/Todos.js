import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" onClick={() => onToggle(todo.id)} />
            <span>{todo.text}</span>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
        </div>
    );
};

const Todos = ({
    input, //인풋에 입력되는 값
    todos, //할 일 목록이 있는 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput("");
    };

    const onChange = (e) => onChangeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <TodoItem todo={todo} onToggle={onToggle} onRemove={onRemove} />
                ))}
            </div>
        </div>
    );
};

export default Todos;
