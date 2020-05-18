// reducer 函数  专门用来处理发送过来的action




const initState = {
    value: "默认值"
}
// state如果有传值 则使用传递的值 否则则使用默认值
const reducer = (state = initState, action) => {

    console.log(state,action)
    //    如果传递过来的不是action修改的对象则直接返初始化的值
    //    反之则返回合并后的新的对象
    switch (action.type) {
        case "send_type":
            return Object.assign({}, state, action);
        default: return state;
    }



}


module.exports = {
    reducer
}