const tafels : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



function App() {

  return (
    <>
        <h1>Maaltafels</h1>
        <thead>
        <tr>
            <th></th>
            {tafels.map(tafel => (
                <th>{tafel}</th>
            ))}
        </tr>
        </thead>
        <tbody>
            {tafels.map(row => (
            <tr>
            <th>{row}</th>
            {tafels.map(col => (
            <td>{row * col}</td>
            ))}
            </tr>
        ))}
        </tbody>
    </>
  )
}

export default App
