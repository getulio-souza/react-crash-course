import "./LoginUser.css"
import { useNavigate } from "react-router";
import * as Yup from 'yup'
import {useFormik} from 'formik'

const LoginUser = () => {

    const navigate = useNavigate();

    // form validation with yup
    const SignUpSchema = Yup.object().shape({

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
        initialValues: {email: '', password: ''},
        validationSchema: SignUpSchema,
        onSubmit: (values) => {
          console.log('submitted values:', values)

          // navegando para a pagina home
          navigate("/")
        }
    })

    console.log('formik:', formik)

    return (
      <>
        <section>
          <h1>Welcome Back</h1>
          <form onSubmit={formik.handleSubmit}>

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

            <button type="submit">Login</button>
            <span>Ainda não possui conta? <button>Faça seu cadastro</button></span>
          </form>
        </section>
      </>
    );
}

export default LoginUser;