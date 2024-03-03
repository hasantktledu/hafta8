import UrunKart from "./UrunKart";

function App() {



  return (
    <div className="container">
      <h2>Ürün Listesi</h2>
      <div className="row">

        <UrunKart urunBilgi={ {baslik: "Ürün başlığı 1", fotoNo: 12} } />
        <UrunKart urunBilgi={ {baslik: "Ürün başlığı 2", fotoNo: 22} } />
        <UrunKart urunBilgi={ {baslik: "Ürün başlığı 3", fotoNo: 32} } />
        <UrunKart urunBilgi={ {baslik: "Ürün başlığı 4", fotoNo: 42} } />
        <UrunKart />


      </div>
    </div>
  );
}

export default App;
