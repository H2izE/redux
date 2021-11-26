import { createAction, handleAction } from "redux-actions";
import produce from 'immer';

const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 3;
export const insert = createAction(INSERT, (text) => ({ id: id++, text, done: false }));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
    input: "",
    todos: [
        { id: 1, text: "a", done: false },
        { id: 2, text: "b", done: false }
    ]
};

const deepObject = {
    modal: {
        open: false,
        content: {
            title: '알림',
            body: '성공',
            buttons: {
                confirm: '확인',
                cancel: '취소',
            },
        },
    },
    waiting: false,
    settings: {
        theme: 'dark',
        zoomLevel: 5,
    },
};


const shallowObject = {
    modal: {
        open: false,
        title: '알림',
        body: '성공',
        confirm: '확인',
        cancel: '취소',
    },
    waiting: false,
    theme: 'dark',
    zoomLevel: 5
}

const todos = handleAction({
    [CHANGE_INPUT]: (state, { payload: input }) =>
        produce(state, draft => {
            draft.input = input;
        }),
    [INSERT]: (state, { payload: todo }) =>
        produce(state, draft => {
            draft.todos.push(todo);
        }),
    [TOGGLE]: (state, { payload: id }) =>
        produce(state, draft => {
            const todo = draft.todos.find(todo => todo.id === id);
            todo.done = !todo.done;
        }),
    [REMOVE]: (state, { payload: id }) =>
        produce(state, draft => {
            const index = draft.todos.findIndex(todo => todo.id === id);
            draft.todos.splice(index, 1);
        }),
}, initialState)

export default todos;