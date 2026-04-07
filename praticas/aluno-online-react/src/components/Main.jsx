import Topbar from "./Topbar";
import Card from "./Card";

function Main() {
    return (
        <main className='flex flex-col p-6 w-full max-w-[600px] mx-auto font-sans text-[#303030]'>
            <Topbar />
            <h2 className="text-2xl font-bold text-[#303030] mb-6">Bem-vindo ao portal do aluno</h2>
            <Card />
        </main>
    );
}

export default Main;