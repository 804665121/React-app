// action 构建函数


const sendAction = () => {

    // 返回一个action的对象
    return {
        type: 'send_type',
        value:"这是一个action"
    }
}


module.exports={
    sendAction
}