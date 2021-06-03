import profileReducer, {addPostAC, deletePostAC} from "../profile-reducer";

const state = {
    postsData: [
        {
            message: "1 message Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dapibus eget sem eget eleifend.",
            likes: 32,
            id: 1
        },

        {message: "2 message", likes: 14, id: 2}
    ]
}

it('posts length should be incremented after add post', () => {
    const action = addPostAC("hi");

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});

it('posts length should be decremented after delete post', () => {
    const action = deletePostAC(1);

    let newState = profileReducer(state, action);

    expect(newState.postsData.length).toBe(3);
});

it('message of new post should be correct', () => {
    const action = addPostAC("hi");

    let newState = profileReducer(state, action);

    expect(newState.postsData[2].message).toBe('hi');
});
