import logo from "../assets/learn.svg";
import FormLogin from "../components/FormLogin";

function Login() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-white p-4">

            <section className="w-full max-w-sm border border-gray-200 rounded-lg p-10 flex flex-col items-center">
                <img src={logo} alt="Imagem da logo" className="w-20 h-20 mb-4" />
                <h1 className="font-bold text-2xl mb-8 text-[#1a1a1a]">Aluno Online</h1>
                
                <FormLogin />
            </section>

            <p className="mt-8 text-sm text-[#1a1a1a]">
                © 2026. Todos os direitos reservados.
            </p>
        </main>
    );
}

export default Login;