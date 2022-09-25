import FormSignUp from '../components/FormSignUp';
import SignUpGoogle from '../components/SignUpGoogle';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SignUp = () => {
    
    const userRedux = useSelector(state => state.user.u);

    return (  
        <>
            {
                userRedux
                ?
                (
                    userRedux.role === "admin" 
                    ?
                    <div className='SignUp-container'>
                        <FormSignUp role={userRedux.role}/>
                    </div>
                    :
                    <Navigate to="/"/>
                )
                :
                <div className='SignUp-container'>
                    <FormSignUp role={"user"}/>
                    <SignUpGoogle/>
                </div>
            }
        </>
    );
}
 
export default SignUp;