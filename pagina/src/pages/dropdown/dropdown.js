import React from "react";
import { usePais } from "../../hooks/usePais";
import { Multiselect } from 'multiselect-react-dropdown';




export default function Dropdown() {
  const { pais } = usePais();

  console.log(pais);
 

    return (
      <div className="container">
        <div className="estado">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="municipio">
        <Multiselect options={pais} displayValue={pais.code}/>
        </div>
  
      </div>
    );
  }
  
  