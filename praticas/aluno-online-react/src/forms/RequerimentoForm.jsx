import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createRequerimento } from '../services/requerimentoService';

const RequerimentoForm = () => {
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm();

  const dataAtual = new Date().toLocaleDateString('pt-BR');

  const nomesTipos = {
    revisao: "Revisão de Menção",
    dispensa: "Dispensa de Disciplina",
    trancamento: "Trancamento de Matrícula",
    mudanca: "Mudança de Turno"
  };

  const onSubmit = async (data) => {
    try {
      const tipoFormatado = nomesTipos[data.tipoRequerimento] || "Outro";
      
      const novoRequerimento = {
        tipoRequerimento: tipoFormatado,
        descricao: data.descricao,
        dataRequerimento: dataAtual,
        situacao: "Em análise"
      };

      await createRequerimento(novoRequerimento);

      reset();
      navigate('/requerimentos');

    } catch (error) {
      console.error("Erro ao cadastrar requerimento:", error);
      alert("Houve um erro ao enviar seu requerimento. Tente novamente.");
    }
  };

  return (
    <div className="font-sans text-black">
      <h2 className="text-2xl font-bold mb-4">Novo Requerimento</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="mb-3">
          <label className="block mb-1 text-base">Tipo de Requerimento</label>
          <select 
            className="border border-gray-400 text-base p-0.5 outline-none"
            {...register("tipoRequerimento", { 
              required: "Tipo é obrigatório" 
            })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="revisao">Revisão de Menção</option>
            <option value="dispensa">Dispensa de Disciplina</option>
            <option value="trancamento">Trancamento de Matrícula</option>
            <option value="mudanca">Mudança de Turno</option>
          </select>
          {errors.tipoRequerimento && (
            <div className="text-red-600 text-[15px] mt-1">
              {errors.tipoRequerimento.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="block mb-1 text-base">Descrição</label>
          <textarea
            rows="5"
            className="w-[450px] border border-gray-400 text-base p-0.5 resize outline-none"
            {...register("descricao", {
              required: "Descrição é obrigatório",
              minLength: {
                value: 10,
                message: "A descrição deve ter no mínimo 10 caracteres"
              }
            })}
          />
          {errors.descricao && (
            <div className="text-red-600 text-[15px] mt-1">
              {errors.descricao.message}
            </div>
          )}
        </div>

        <div className="mb-4 flex items-center">
          <label className="text-base mr-2">Data do Requerimento</label>
          <input
            type="text"
            value={dataAtual}
            readOnly
            {...register("dataRequerimento")}
            className="border border-gray-400 bg-gray-100 text-base p-0.5 w-[100px] outline-none cursor-not-allowed"
          />
        </div>

        <div className="flex gap-2">
          <button 
            type="button" 
            onClick={() => navigate('/requerimentos')}
            className="border border-gray-500 bg-gray-200 text-base px-2 py-0.5 cursor-pointer hover:bg-gray-300 active:bg-gray-400"
          >
            Cancelar
          </button>
          <button 
            type="submit"
            className="border border-gray-500 bg-gray-200 text-base px-2 py-0.5 cursor-pointer hover:bg-gray-300 active:bg-gray-400"
          >
            Salvar
          </button>
        </div>

      </form>
    </div>
  );
};

export default RequerimentoForm;