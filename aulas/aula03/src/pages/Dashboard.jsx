import Card from '../components/Card';
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

function Dashboard(props) {
    const avisos = ["Inscrição para projeto de extensão","Eleição para representante"];
    const datas = ["27/04 - Avaliação A1"];
    const disciplinas = ["Construção de FrontEnd", "Devops", "Business Intelligence"];

    return (
        <>
        <Sidebar navegaPara={props.navegaPara}/>
        <Main titulo="Olá, Aluno!" subtitulo="Bem-vindo ao portal do aluno">
            <Card titulo="Mural de Avisos" itens={avisos}/>
            <Card titulo="Calendário Acadêmico" itens={datas}/>
            <Card titulo="Minhas Disciplinas" itens={disciplinas}/>
        </Main>
        </>
    );
}

export default Dashboard;