import Topbar from "./Topbar";

function Main(props) {
    return (
        <main className='flex flex-col p-6 w-full max-w-[600px] mx-auto font-sans text-[#303030]'>
            <Topbar titulo={props.titulo}/>
            <h2 className="text-2xl font-bold text-[#303030] mb-6">{props.subtitulo}</h2>
            <section>
            {props.children}
            </section>
        </main>
    );
}

export default Main;