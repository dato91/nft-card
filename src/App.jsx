import "./App.css";

function App() {
  return (
    <div className="card">
      <img src="./rectangle.png" alt="" />
      <h1 className="text">Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <div className="contentdiv">
        <div className="content1">
          <img src="./shape.png" alt="" className="iconshape" />
          <p className="text1">0.041 ETH</p>
        </div>

        <div className="content2">
          <img src="Clock.png" alt="" className="iconclock" />
          <p className="text2">3 days left</p>
        </div>
      </div>
      <hr />
      <div className="avatardiv">
        <img src="./Oval.png" alt="" className="avatar"/>
        <span className="spann">Creation of Jules Wyvern</span>
      </div>
    </div>
  );
}

export default App;
