import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ChatPage from './pages/Chatpage';
function App() {
  return (
    <div className="App">
      {/* Routers */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChatPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
