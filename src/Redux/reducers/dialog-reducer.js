const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {name: "Mitya", id: 1},
        {name: "Savva", id: 2}
    ],

    messages: [
        {
            fromOwner: false,
            message: "Hello! This is my first message! How are you?",
            avaUrl: null,
            id: 1
        },
        {
            fromOwner: false,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus, nisl eget sagittis egestas, lorem mi dictum augue, ut lacinia enim massa in metus. Fusce maximus vehicula augue",
            avaUrl: null,
            id: 2
        }
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            const newMessage = {
                fromOwner: true,
                message: action.newDialogText,
                avaUrl: action.avaUrl,
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

export const addMessageAC = (newDialogText, avaUrl) => ({type: ADD_MESSAGE, newDialogText, avaUrl});

export default dialogReducer;