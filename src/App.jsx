import { useState } from "react";
import AracSayim from "./AracSayim";
import Kasa from "./Kasa";

function App() {
  const [sayi, sayiGuncelle] = useState(0);

  function sayacIslem() {
    sayiGuncelle((eskiDeger) => eskiDeger + 1);
  }

  console.log("App re-render");
  
  return (
    <div>

      <AracSayim sayi={sayi} sayacIslem={sayacIslem} />
      <Kasa sayi={sayi} />
      
    </div>
  );
}

export default App;
