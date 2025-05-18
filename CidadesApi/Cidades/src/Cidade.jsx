import { useState } from "react";
import { findAll } from "./CidadeApi";

export function Cidade() {
  const [cidades, setCidades] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const consultar = async () => {
    setLoading(true);
    setError(null);
    try {
      const dados = await findAll();
      setCidades(dados);
    } catch (erro) {
      console.error("Erro ao buscar cidades:", erro);
      setError("Não foi possível carregar as cidades.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Lista de Cidades</h2>
      <button onClick={consultar} disabled={loading}>
        {loading ? "Carregando..." : "Consultar Cidades"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && cidades.length > 0 && (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            {cidades.map((cidade) => (
              <tr key={cidade.id}>
                <td>{cidade.id}</td>
                <td>{cidade.nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
