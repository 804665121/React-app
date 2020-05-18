const defaultState = {
     show:true
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "changeState":
            return {
                list: action.data
            }
        default:
            return state
    }
}