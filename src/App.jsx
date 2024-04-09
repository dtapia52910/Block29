import {Routes, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'
import PlayerDetails from './Components/Details'
import Players from "./Components/Players"

function App() {

  return (
    <>
    <NavBar />
       <Routes>
        <Route path="/" element={<Players />} />
        <Route path='/players/:playerId' element={<PlayerDetails />}/>
      </Routes>
      
    </>
  )
}

export default App