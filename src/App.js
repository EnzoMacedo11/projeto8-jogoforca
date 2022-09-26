import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import React from "react";

let tentativas = 6;
let erros = 0;
let forca = [forca0,forca1, forca2, forca3, forca4, forca5, forca6];

export default function App() {
  return (
    <>
      <Abertura />
    </>
  );
}

function Abertura() {
  let [randomizar, setRandomizar] = React.useState("");
  let [listaDinamica, setListaDinamica] = React.useState([]);
  let underline = underlineLength(randomizar);
  //let [palavraInicial, setPalavraInicial] = React.useState(underline);
  

  function Random() {
    document.querySelector(".footer").classList.add("Ligar");
    let listaAuxiliar = []
    const listaPalavras = [...palavras];
    let randomizar = String(
      listaPalavras[Math.floor(Math.random() * listaPalavras.length)]
    );
      for(let i = 0; i <randomizar.length;i++){
        listaAuxiliar.push(" _ ");
      }
    setListaDinamica([...listaAuxiliar]);
    setRandomizar(randomizar);
  }

  function underlineLength(str) {
    let under = "";
    for (let i = 0; i < str.length; i++) {
      under += " _ ";
    }
    console.log("str",str)
    return under;

  }

  function verificaLetra(letra) {
    document.querySelector(".letraAlfabeto" + letra).disabled=true
    if (randomizar.includes(letra) === true) {
      document.querySelector(".letraAlfabeto" + letra).classList.add("Certa");
      comparalistas(letra);
     
    } else {
      document.querySelector(".letraAlfabeto" + letra).classList.add("Errada");
      comparalistas(letra);
    }
    
  }

  function comparalistas(letra) {
    
    let listaAuxiliar = [...listaDinamica];
    let pos = randomizar.indexOf(letra); 
    if (pos < 0) { 
      tentativas--; 
      erros++ 
    } else {
      for (let i = 0; i < randomizar.length; i++) {
        if (randomizar[i] === letra) {
          listaAuxiliar[i] = letra;
        }
      }
    }
    setListaDinamica([...listaAuxiliar]);
    let palavraCerta = listaDinamica.join("").trim()
    if(!listaAuxiliar.includes(" _ ")){
      alert("Você descobriu a palavra!")
      window.location.reload()
    }
    if(erros === 6){
      alert("Você perdeu o jogo!")
      window.location.reload()
    }
    console.log(tentativas);
    console.log("palavra certa", palavraCerta)
    console.log(palavraCerta===randomizar)
    
  }
  
  function chutar(){
    let chutado = document.querySelector(".input1").value;
    if(chutado === randomizar){
    
      alert("Bom chute, você ganhou o jogo!")
      window.location.reload()
    }
  }
  console.log("lista dinamica", listaDinamica);
  
  
  
  return (
    <>
      <div className="background">
        <img data-identifier="game-image" className="forca" src={forca[erros]} alt="Jogo da forca" />
        <button data-identifier="choose-word" onClick={Random} className="botaoInicial">
          Escolher Palavra
        </button>
      </div>
      <div className="footer">
        <div data-identifier="word" className="palavra">{listaDinamica}</div>
        <ul className="alfabeto">
          {alfabeto.map((letra, index) => (
            <button
              data-identifier="letter"
              id="botao"
              onClick={() => verificaLetra(letra)}
              key={index}
              className={"letraAlfabeto" + letra}
              
            >
              {letra}
            </button>
          ))}
        </ul>
        <div className="finalizador">
          <h1>Já sei a palavra!</h1>
          <input data-identifier="type-guess" className="input1" />
          <button data-identifier="guess-button" onClick={chutar} className="botaoChute">Chutar</button>
        </div>
      </div>
    </>
  );
}
