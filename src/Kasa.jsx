import { useState } from "react";

function Kasa({sayi}) {
  const [kasa, kasaGuncelle] = useState(0);

  console.log("Kasa re-render");

  function kasaIslem() {
    kasaGuncelle((eskiDeger) => eskiDeger + 20);
  }

  return (
    <>
      <h2>KASA: {kasa}TL</h2>
      <button onClick={kasaIslem}>+</button>
      <p>Araç başına gelir: {kasa && kasa/sayi}TL</p>
    </>
  );
}

export default Kasa;
