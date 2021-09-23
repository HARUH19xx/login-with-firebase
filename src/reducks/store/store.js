import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux"
import { connectRouter, routerMiddleware } from "connected-react-router"
import { UsersReducer } from "../users/reducers"
import thunk from "redux-thunk"
// import logger, { createLogger } from "redux-logger"

const createStore = (history) => {
    // ここにメモとしてloggerも設定しておくが、このアプリは最低限の機能だけを用いるため、今回は使わない
    // const logger = createLogger({
    //     diff: true,
    //     collapsed: true,
    // })
    return (
        reduxCreateStore(
            combineReducers({
                router: connectRouter(history),
                users: UsersReducer,
            }),
            applyMiddleware(
                // logger,
                routerMiddleware(history),
                thunk,
            )
        )
    )
}

export default createStore