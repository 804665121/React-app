import { createStore } from 'redux'

// 导入构建好的reducer
import { reducer } from '../reducer'


// 构建store

export  const store = createStore(reducer)




