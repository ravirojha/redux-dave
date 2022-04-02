export function getPosts() {
    return (dispatch, getState) => {
        dispatch({ type: "GET_POSTS_BEGIN" })
        fetch('https://www.reddit.com/r/reactjs.json')
            .then(res => res.json())
            .then(json => {
                console.log(json.data.children.map(c => c.data));
                dispatch({
                    type: "GET_POSTS_SUCCESS",
                    posts: json.data.children.map(c => c.data)
                })
            })
            .catch(err => {
                dispatch({ type: 'GET_POSTS_ERROR', err})
            })
    };
}