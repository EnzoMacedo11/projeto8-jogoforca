
export default function App() {
    return (
      <>
        <Abertura/>
      </>
    );
  }

  function Abertura(){
    return(
        <>
            <div className="background">
                <img className ="forca"src="assets/forca0.png"/>
                <button className="botaoInicial">Escolher Palavra</button>
            </div>
            <div className="footer">

            </div>
        </>
    )
  }