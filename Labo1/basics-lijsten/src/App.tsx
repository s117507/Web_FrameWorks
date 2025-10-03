interface Student {
  id: number;
  naam: string;
  leeftijd: number;
}
function App() {
  
  const numbers : number[] = [1,2,3,4,1,3,5];

  const students : Student[] = [
    {id: 0, naam: "Jef", leeftijd: 33},
    {id: 1, naam: "Jan", leeftijd: 31},
    {id: 2, naam: "Joris", leeftijd: 34},
    {id: 3, naam: "Andie", leeftijd: 35},
    {id: 4, naam: "Senne", leeftijd: 30},
  ]

  return (
    <div>
      <h1>lijsten</h1>
      <ul>
        {numbers.map((num, index) => (
        <li key={index}>{num}</li>
        ))}
      </ul>
      <ol>
        {students.map((student) => (
        <li key={student.id}>{student.naam}</li>
        ))}
      </ol>
      <ol>
        {students.filter(student => student.naam.startsWith("J")).map((student) => (
        <li key={student.id}>{student.naam}</li>
        ))}
      </ol>
      <select>
        {students.map((student) => (
          <option>{student.naam}</option>
        ))}
      </select>
      <table>
        <thead>
          <th>Naam</th>
          <th>Leeftijd</th>
        </thead>
        <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.naam}</td>
                <td>{student.leeftijd}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
