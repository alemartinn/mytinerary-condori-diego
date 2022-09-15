import FormSignUp from '../components/FormSignUp';
import SignUpGoogle from '../components/SignUpGoogle';

const SignUp = () => {
    let client = localStorage.getItem("client")
    let userLocal = JSON.parse(client)

    let roleLocal = ""

    if(userLocal && userLocal.role === "admin") {
        roleLocal = "admin"
    } else {
        roleLocal = "user"
    }

    return (  
        <div className='SignUp-container'>
            <FormSignUp role={roleLocal}/>
            <SignUpGoogle/>
        </div>
    );
}
 
export default SignUp;