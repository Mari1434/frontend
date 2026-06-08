const url = 'http://localhost:3000/requerimentos';

export const getRequerimentos = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Falha ao buscar requerimentos');
        return await response.json();
    } catch (error) {
        console.error("Erro no getRequerimentos:", error);
        throw error;
    }
};

export const createRequerimento = async (requerimento) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requerimento),
        });
        if (!response.ok) throw new Error('Falha ao criar requerimento');
        return await response.json();
    } catch (error) {
        console.error("Erro no createRequerimento:", error);
        throw error;
    }
};