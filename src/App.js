import forca0 from "./assets/forca0.png";
import palavras from "./palavras"

let palavraRandom = "goias"

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function App() {
  return (
    <>
      <Abertura />
    </>
  );
}

function random(){
  const listaPalavras = [...palavras]
  let palavraRandom = String(listaPalavras[Math.floor((Math.random() * listaPalavras.length))])
  console.log(1,palavraRandom)
  

}

function Abertura() {
  console.log(palavraRandom)
  return (
    <>
      <div className="background">
        <img className="forca" src={forca0} />
        <button onClick={random}className="botaoInicial">Escolher Palavra</button>
      </div>
      <div className="footer">
        <div className="palavra">
        {palavraRandom}
        </div>
        <ul className="alfabeto">
          {alfabeto.map((letra, index) => (
            <button className="letra">{letra}</button>
          ))}
        </ul>
        <div className="finalizador">
          <h1>Já sei a palavra!</h1>
          <input className="input1" />
          <button className="botaoChute">Chutar</button>
        </div>
      </div>
    </>
  );
}

