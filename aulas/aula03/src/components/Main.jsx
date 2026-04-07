import Topbar from "./Topbar";

function Main(props) {
    return (
        <main className='flex flex-col max-w-screen'>
            <Topbar titulo={props.titulo} />
            <h2>{props.subtitulo}</h2>
            <section>
            {props.children}
            </section>
        </main>
    );
}

export default Main;