const App = () => {

  const random : number = Math.random();
  const getal1: number = Math.floor(Math.random()* 10);
  const getal2: number = Math.floor(Math.random()* 10);

  function add(a: number, b: number): number {
    return a + b;
  }

    function multiply(a: number, b: number): number {
    return a * b;
  }


return (
<div>
<h1>Labo 1</h1>
<p>Random waarde: {random}</p>
<p>Getal 1: {getal1}</p>
<p>Getal 2: {getal2}</p>
{ random < 0.5 ? (
  <p>Som: {add(getal1, getal2)}</p>
) : (
  <p>Vermenigvuldiging: {multiply(getal1, getal2)}</p>
)}
</div>
);
};

export default App;