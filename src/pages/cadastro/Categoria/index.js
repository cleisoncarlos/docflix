 // eslint-disable-next-line
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';



function CadastroCategoria() {

const [nomeDaCategoria, setNomeDaCategoria]  = useState('Nome da Categoria'); 


const [categorias, setcategorias]  = useState([]); 



  return (
    <PageDefault>,
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function enviaSubmit(infoSubmit){
        infoSubmit.preventDefault();
      //  console.log('form enviado');

        setcategorias([
          ...categorias,
          nomeDaCategoria
        ])
      }}>

       <div>
       <label>
          <h4>Nome da Categoria:   <small>{nomeDaCategoria}</small></h4> 
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function mudaCategoria(infoEvento){
              setNomeDaCategoria(infoEvento.target.value);
            }}
          />
        </label>
       </div>

       <div>
       <label>
          <h4>Descrição: </h4> 
          <textarea
            type="text"
            value={nomeDaCategoria}
            onChange={function mudaCategoria(infoEvento){
              setNomeDaCategoria(infoEvento.target.value);
            }}
          />
        </label>
       </div>

       <div>
       <label>
          <h4>Cor:</h4> 
          <input
            type="color"
            value={nomeDaCategoria}
            onChange={function mudaCategoria(infoEvento){
              setNomeDaCategoria(infoEvento.target.value);
            }}
          />
        </label>
       </div>

        <button>
          Cadastrar
        </button>
      </form>



      <ul>
{categorias.map((categoria, indice) => {
  return (
    <li key={`${categoria} ${indice}`}>
      {categoria}
    </li>
  )
})}

      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;