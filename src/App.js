import forca0 from "./assets/forca0.png";

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

function Abertura() {
  return (
    <>
      <div className="background">
        <img className="forca" src={forca0} />
        <button className="botaoInicial">Escolher Palavra</button>
      </div>
      <div className="footer">
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
