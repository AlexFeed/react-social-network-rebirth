const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {name: "Mitya", id: 1},
        {name: "Savva", id: 2}
    ],

    messages: [
        {
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, nisl eget sagittis egestas, lorem mi dictum augue, ut lacinia enim massa in metus. Fusce maximus vehicula augue",
            id: 1
        },
        {
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, nisl eget sagittis egestas, lorem mi dictum augue, ut lacinia enim massa in metus. Fusce maximus vehicula augue,\n",
            id: 2
        }
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newMessage = {
                message: action.newDialogText,
                likes: 0,
                id: state.messages.length + 1
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }

        default :
            return state;
    }
}

export const addMessageAC = (newDialogText) => ({type: ADD_MESSAGE, newDialogText});

export default dialogReducer;