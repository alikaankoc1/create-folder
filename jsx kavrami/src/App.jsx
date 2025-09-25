import "./App.css";

function App() {
  let vize1 = 48;
  let vize2 = 59;
  let vize3 = 71;
  let sonuc = (vize1 + vize2 + vize3) / 3.0;
  sonuc = Math.round(sonuc);
  return (
    <div>
      {sonuc > 50 ? (
        <p>Sınavdan Geçtiniz: {sonuc}</p>
      ) : (
        <p>Sınavdan Kaldınız: {sonuc}</p>
      )}
    </div>
  );
}
export default App;
