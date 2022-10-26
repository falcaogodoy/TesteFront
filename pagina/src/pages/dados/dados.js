import React from "react";




function Dados() {
    return (
      <div className="card">
     <form>
        <label>
             Name:
         <input type="text" name="name" />
        </label>
        <label>
             Email:
         <input type="email" name="email" />
        </label>
        <label>
             Telefone:
         <input type="text" name="telefone" />
        </label>
        <label>
             Cpf:
         <input type="text" name="cpf" />
        </label>
        <button>enviar</button>
    
        </form>
  
      </div>
    );
  }
  
  export default Dados;