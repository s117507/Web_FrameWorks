import { useState } from 'react'
import { ColorRing } from "react-loader-spinner";
import './App.css'

const LoadingIndicator = () => {
  return(
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
  )
}

function App() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }

  return (
    <div>
      {loading ? <LoadingIndicator/> : <button onClick={startLoading}>Start Loading</button>}
    </div>
  )
}

export default App
