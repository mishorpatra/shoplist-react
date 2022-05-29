import './App.css';
import { Box } from '@material-ui/core';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//components
import Header from './components/Header'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {

  
  return (
    <BrowserRouter>
      <Header />
      <Box style={{marginTop: 65}}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/add' element={<Add />} />
          <Route exact path='/edit/:id' element={<Edit />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App;