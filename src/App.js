import foto from './assets/bx-logo.png';
import img from './assets/photo-base.jpg';
import './App.css';

function App() {
  return (
     <div className="container">
      <div className="header">
        <img
          src={foto}
          className="bx-logo"
        />
      </div>
      <div className="container-form">
        <div className="box-foto">
          <img src={img} alt="Foto de Plublicação" />
        </div>
        <div>
          <input className="input" placeholder="Seu Nome" />
        </div>
        <div>
          <textarea className="input-text" name="text" rows="10"></textarea>
        </div>
        <div className="btn">
          <a href="#" className="descartar">Descartar</a>
          <button className="btn-active">
            <span className="Publicar"> Publicar </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
