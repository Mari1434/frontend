const API_URL = 'http://localhost:3000/usuarios';

export const loginService = async (email, senha) => {
  try {
    const response = await fetch(`${API_URL}?email=${email}`);
    if (!response.ok) throw new Error('Erro ao conectar ao servidor');

    const usuarios = await response.json();
    const usuario = usuarios[0];

    if (!usuario || usuario.senha !== senha) {
      throw new Error('E-mail ou senha incorretos');
    }

    const tokenSimulado = btoa(Math.random().toString(36).substring(2) + Date.now());

    return {
      usuario: { id: usuario.id, email: usuario.email },
      token: tokenSimulado
    };
  } catch (error) {
    console.error("Erro no loginService:", error);
    throw error;
  }
};