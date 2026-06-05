import "./LoginUser.css"
import { useNavigate } from "react-router";
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { useContext } from "react";
import {UserStatusContext} from '../../layouts/MainLayout'

type UserContextStatus = {
  setIsUserOnLoginPage: () => void;
  setIsUserOnSubscribePage: () => void;
}

const LoginUser = () => {

  //recebendo o contexto de subscribe e login criado no main layout
  const userAuthContext = useContext<UserContextStatus>(UserStatusContext)

  // fazendo a destruturando do userAuthContext
  const { setIsUserOnLoginPage, setIsUserOnSubscribePage } = userAuthContext;

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
          console.log(`chegou no submit `)
          console.log('submitted values:', values)          
          navigate("/")
        }
    })

    console.log('formik:', formik)

  function goToSubscribeUser() {
    //PRECISO OCULTAR O FORMULARIO DE LOGIN SE NAO ESTIVER LOGADO E NAVEGAR PARA A ROTA QUE LEVA PARA O COMPONENTE DE CADASTRO
    setIsUserOnLoginPage(false);
    setIsUserOnSubscribePage(true);
    // navigate("/subscribe-user")
  }
    
    return (
      <>
        <section>
          <h1>Welcome Back</h1>
          <form onSubmit={formik.handleSubmit}>

            <article style={{marginBottom: "10px"}}>
            {/* email */}
            <div className="input-container" style={{marginBottom: "10px"}}>
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="type your email"
                onChange={formik.handleChange}
                value={formik.values.email}
                />
                {formik.errors.email ? (<span style={{color: "red"}}>{formik.errors.email}</span>) : null}
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
              {formik.errors.email ? (<span style={{color: "red"}}>{formik.errors.email}</span>) : null}
            </div>
            </article>

            <button type="submit">Login</button>
            <div style={{display: "flex", flexDirection: 'row', marginTop: '10px'}}>
           <span style={{color: 'black', marginRight: "10px"}}>Ainda não possui conta?</span>
            <span style={{color: "red", textDecoration: "underline", cursor: "pointer"}} onClick={goToSubscribeUser}>faça seu cadastro</span>
            </div>
          </form>
        </section>
        
      </>
    );
}

export default LoginUser;