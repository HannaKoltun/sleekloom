import '../LogInPage/LogInPage.css';
import Inputs from '../../components/SignUpInput/SignUpInput';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogIn } from '../../slice/LogInSlice';
// import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom'

export default function LogInPage() {

    const navigate = useNavigate()


    const [inputName, setInputName] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [inputPassword, setinputPassword] = useState('')
    const [inputConfirmPassword, setinputConfirmPassword] = useState('')

    const dispatch = useDispatch<any>();

    function authObj() {
        return {
            'username': inputName,
            'password': inputPassword,
        }
    }

    function sendData() {
        dispatch(fetchLogIn(authObj()))
    }

    const auth = useSelector((state: any) => state.authUser)
    console.log(auth)

    useEffect(() => {
        if (auth.status === 'resolved') {
            navigate('/');
        } else if (auth.status === 'rejected') {
            navigate('/errorpage');
        }
    }, [auth.status, navigate]);



    return (
        <>
            <div className={`mainContainerUp`}>
                <div className={`containerUp`}>

                    {auth.status === 'loading' ? 'LOADING' : null}

                    {auth.status === null ? <>
                        <div className={`inputsContainerUp`}>
                            <Inputs
                                id="1"
                                legend="Name"
                                type="text"
                                typeInput={`default focus active`}
                                isDisabled={false}
                                placeholder="Your name"
                                inputValue={inputName}
                                setInputValue={e => setInputName(e.target.value)}
                            ></Inputs>
                            <Inputs
                                id="3"
                                legend="Password"
                                type="password"
                                typeInput={`default focus active`}
                                isDisabled={false}
                                placeholder="Your password"
                                inputValue={inputPassword}
                                setInputValue={e => setinputPassword(e.target.value)}
                            ></Inputs>
                            <button onClick={sendData} className={`signUpButton`}>Log In</button>
                        </div>
                    </> : null}
                </div>
            </div>
        </>
    )
}