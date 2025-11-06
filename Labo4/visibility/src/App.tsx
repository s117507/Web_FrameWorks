import {useState} from "react";

function App() {
    const [showDiv, setShowDiv] = useState(false);
  return (
    <div>
        <label>
        <input type="checkbox" onChange={(event) => setShowDiv(event.target.checked) } checked={showDiv}/>
            Show/Hide
        </label>
        {showDiv && <div style={{border: "1px solid black", height: 400, padding: 5, backgroundRepeat: "repeat", backgroundImage: "url('https://www.google.com/imgres?q=troll%20image&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71-vL7rKtDL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com.be%2F-%2Fen%2FPoster-Troll-Face-Ugly-30x25cmB%2Fdp%2FB09X67YCHZ&docid=wqv1LQwHAFs62M&tbnid=06St1tzlo1QAwM&vet=12ahUKEwi27fSP_NuQAxUkNPsDHZ7tBqYQM3oECB8QAA..i&w=1500&h=1500&hcb=2&ved=2ahUKEwi27fSP_NuQAxUkNPsDHZ7tBqYQM3oECB8QAA')"}}>
        </div>}
    </div>
  )
}

export default App
