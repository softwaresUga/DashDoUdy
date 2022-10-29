import { HttpGet } from "../../Util/Http"
import React, { useEffect, useState } from "react"

const ListAsset = () => {
  const [ _resGet, setResGet ] = useState() 
  const [ _load, setLoad ] = useState()
  const [ _resName, setName] = useState()

  // salva o nome do ativo
  const handleChange = (e) => {
    setName(e.target.value)
  }

  // grava o favorito
  const confirmFav = () => {
    const arr = [localStorage.getItem('Array')];

    localStorage.setItem('Array', [_resName, arr]);
  }

  // remove o favorito
  const RemoveFav = (iten) => {
    let str = [localStorage.getItem('Array')];

    const arr = str[0].split(',')
    
    localStorage.setItem('Array', [arrayRemove(arr, iten)]);
  }
  
  // trata o array antes de apagar
  const arrayRemove = (arr, value) => { 
    
    return arr.filter((ele) => { 
        return ele !== value; 
    });
  }


  useEffect(() => {
    //HttpGet('https://fii-api.infomoney.com.br/api/v1/fii/cotacao/historico', 'grafico?Ticker=AFHI11&DataInicio=28-10-2022&DataFim=28-10-2022', setResGet, setLoad)
  },[])

  return (
    <div className="App">
      <header className="ListAsset">
        <input name="firstName" onChange={handleChange} />
        <button onClick={confirmFav}>Salvar</button>
        <button onClick={RemoveFav}>Remove</button>
      </header>
    </div>
  );
}

export default ListAsset;
