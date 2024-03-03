import { useState } from "react";

function App() {

  const [ad, adGuncelle] = useState("Okan")

  console.log("Canavar monte edilmek üzere..")


  return (
    <div>
      Merhaba! {ad}

      <button onClick={ ()=> {  adGuncelle("Buket")   } }>Adı Değiştir</button>
      
    </div>
  );

}

export default App;
