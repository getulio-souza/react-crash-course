import { useContext, useState } from "react"
import { UserContext } from "../../layouts/MainLayout";
import "./SubscribeUser.css"
import { useNavigate } from "react-router";
import * as Yup from 'yup'
import {useFormik} from 'formik'

const SubscribeUser = () => {

    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const userContext = useContext(UserContext);

    const navigate = useNavigate();

    if(!userContext) return null;

    const {isLoggedIn, setIsLoggedIn} = userContext;


    // form validation with yup
    const SignUpSchema = Yup.object().shape({
        
        // username
        userName: Yup.string()
        .min(4, 'username should have at least 4 caracters')
        .max(20, 'Username cannot exceed 20 characters')
        .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores').required('username is required'),

        // email
        email: Yup.string()
        .email('Invalid Email format')
        .required('Email is required'),

        // password
        password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(16, 'Password cannot exceed 16 characters')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase char')
        .required('Password is required'),
    }) 

        console.log('SignUpSchema:', SignUpSchema)


    // formik logic
    const formik = useFormik({
        initialValues: {userName: '', email: '', password: ''},
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
          console.log('submitted values:', values)
        }
    })

    console.log('formik:', formik)

    return (
      <>
        <section>
          <h1>Welcome Back</h1>
          <form onSubmit={formik.handleSubmit}>
            
            
            {/* userName */}
            <div className="input-container">
              <label htmlFor="">User Name</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.userName}
                type="text"
                name="userName"
                id="userName"
                placeholder="type your name"
              />
            </div>

            {/* email */}
            <div className="input-container">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="type your email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>

            {/* password */}
            <div className="input-container">
              <label htmlFor="">Password</label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="type your password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <button type="submit">Subscribe</button>
          </form>
        </section>
      </>
    );
}

export default SubscribeUser