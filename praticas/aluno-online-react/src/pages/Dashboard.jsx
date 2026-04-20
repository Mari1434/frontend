import Card from '../components/Card';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar';

function Dashboard(props) {
    const avisos = ["Inscrição para projeto de extensão","Eleição para representante de turma"];
    const datas = ["23/02 - Início do período letivo 2026-1", "25/04 - Prazo final para aplicação da P1", "23/06 - Prazo final para aplicação da P2", "04/07 - Fim do período letivo 2026-1"];
    const disciplinas = ["Construção de FrontEnd", "BI e Data Warehousing", "Manutenção de Software e DevOps", "Governança de TI", "Direitos Humanos e Ambientais"];
    
    return (
        <section className="flex min-h-screen w-full">
        <Sidebar navegaPara={props.navegaPara} />
        <Main titulo="Olá, Aluno!" subtitulo="Bem-vindo ao portal do aluno">
            <Card titulo="Mural de Avisos" itens={avisos}/>
            <Card titulo="Calendário Acadêmico" itens={datas}/>
            <Card titulo="Minhas Disciplinas" itens={disciplinas}/>
        </Main>
        </section>
    );
}

export default Dashboard;