
import { legacy_createStore as createStore} from 'redux'
import tasksReducer from './tasksReducer'




export default createStore (tasksReducer)
