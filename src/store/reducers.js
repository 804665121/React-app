const defaultState = {
    list: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "loadDate":
            return {
                list: action.data
            }
            break;
        default:
            return state
            break;
    }
}