import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
    return (
        <>
            <Sidebar />
            <main>
                <Topbar />
                    <h2>Minhas Notas</h2>
            </main>
        </>
    );
}

export default Notas;