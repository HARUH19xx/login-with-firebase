import React from 'react'
import { useDispatch } from 'react-redux'
import {signOut} from '../reducks/users/operatons'

const Home = () => {
    const dispatch = useDispatch()
    return (
    <div>
        <h2>Hello!</h2>
        <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </div>
    )
}

export default Home