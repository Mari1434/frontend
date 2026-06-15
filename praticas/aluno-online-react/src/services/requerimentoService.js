const API_URL = 'http://localhost:3000/requerimentos';

const forcarLogoutImediato = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

export const getRequerimentos = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        forcarLogoutImediato();
        throw { status: 401, message: "Unauthorized" };
    }

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 401) {
            forcarLogoutImediato();
            throw { status: 401, message: "Unauthorized" };
        }

        if (!response.ok) throw new Error('Falha ao buscar requerimentos');
        return await response.json();
    } catch (error) {
        console.error("Erro no getRequerimentos:", error);
        throw error;
    }
};

export const createRequerimento = async (requerimento) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        forcarLogoutImediato();
        throw { status: 401, message: "Unauthorized" };
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requerimento),
        });

        if (response.status === 401) {
            forcarLogoutImediato();
            throw { status: 401, message: "Unauthorized" };
        }

        if (!response.ok) throw new Error('Falha ao criar requerimento');
        return await response.json();
    } catch (error) {
        console.error("Erro no createRequerimento:", error);
        throw error;
    }
};