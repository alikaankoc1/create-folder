import "./App.css";

function App() {
  
  let isimler = ["ali", "ayşe", "fatma"];
  return (
    <div>
      {isimler.map((isim) =>(
        <div>{isim}</div>
      
      ))
      }
    </div>
  )
}
export default App;
