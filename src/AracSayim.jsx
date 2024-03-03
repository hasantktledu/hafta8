function AracSayim( {sayi, sayacIslem} ) {
  
  console.log("AracSayim re-render");

  return (
    <>
      <h1>ARAÇ: {sayi}</h1>
      <button onClick={sayacIslem}>+</button>
    </>
  );
}

export default AracSayim