import { Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Hearder from './component/Hearder'

const App = () => {
  return (
    <Container  maxW="620px">
        <Hearder/>
      <Routes>
        <Route path='/:username' element={<UserPage />}/>
        <Route path='/:username/post/:pid' element={<PostPage />} />
      </Routes>
       
    </Container>
  )
}

export default App
