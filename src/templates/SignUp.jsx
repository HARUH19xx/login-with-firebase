import { push } from 'connected-react-router'
import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { PrimaryButton, TextInput } from '../components/UIKit'
import { signUp } from '../reducks/users/operatons'

const SignUp = () => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("")

    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    }, [setUsername])

    // メモ化しない場合はこう？
    // const inputUsername = (event) => {
    //     setUsername(event.target.value)
    // }

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail])
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword])
    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    }, [setConfirmPassword])

    return (
        <div>
            <h2>ユーザー登録</h2>
            <TextInput
                fullWidth={true}
                label={"ユーザー名"}
                multiline={false}
                required={true}
                rows={1}
                value={username}
                type={"text"}
                onChange={inputUsername}
            />
            <TextInput
                fullWidth={true}
                label={"メールアドレス"}
                multiline={false}
                required={true}
                rows={1}
                value={email}
                type={"email"}
                onChange={inputEmail}
            />
            <TextInput
                fullWidth={true}
                label={"パスワード"}
                multiline={false}
                required={true}
                rows={1}
                value={password}
                type={"password"}
                onChange={inputPassword}
            />
            <TextInput
                fullWidth={true}
                label={"パスワード(確認)"}
                multiline={false}
                required={true}
                rows={1}
                value={confirmPassword}
                type={"password"}
                onChange={inputConfirmPassword}
            />
            <div>
                <PrimaryButton
                label={"アカウントを登録する"}
                onClick={() => {dispatch(signUp(username, email, password, confirmPassword))}}
                />
                <p onClick={() => {dispatch(push('/signin'))}}>アカウントをお持ちの方はこちら</p>
            </div>
        </div>
    )
}

export default SignUp