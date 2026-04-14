import logo from "../assets/learn.svg";
import FormLogin from "../components/FormLogin";

function Login(props) {

    return <>
    <img src={logo} alt="Imagem da logo" className="w-25 h-25"/>
    <h1 className="font-bold text-lg">Aluno Online</h1>
    <FormLogin navegaPara={props.navegaPara}/>
    </>;
}

export default Login;