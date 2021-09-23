import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listenAuthState } from './reducks/users/operatons'
import { getIsSignedIn } from './reducks/users/selectors'

const Auth = ({children}) => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state)
    const isSignedIn = getIsSignedIn(selector)

    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, [])

    //'if (!isSignedIn) {return (<></>)} else {return(children)}'とすると、子要素を読み込む必要がなくなるため軽くなるような気がしたが、サインインしていても子要素にいかなくなったため断念した。
    return(children)
}

export default Auth