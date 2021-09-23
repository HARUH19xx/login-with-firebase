import { push } from 'connected-react-router'
import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { PrimaryButton, TextInput } from '../components/UIKit'
import { signIn } from '../reducks/users/operatons'

const SignIn = () => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail])
    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword])

    return (
        <div>
            <h2>サインイン</h2>
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
            <div>
                <PrimaryButton
                label={"サインイン"}
                onClick={() => {dispatch(signIn(email, password))}}
                />
                <p onClick={() => {dispatch(push('/signup'))}}>パスワードをお持ちでない方はこちら</p>
                <p onClick={() => {dispatch(push('/signin/reset'))}}>パスワードをお忘れの方はこちら</p>
            </div>
        </div>
    )
}

export default SignIn