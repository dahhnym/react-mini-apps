import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinTracker from './routes/CoinTracker';
import Home from './routes/Home';
import ToDoList from './routes/ToDoList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todo" element={<ToDoList />}></Route>
          <Route path="/cointracker" element={<CoinTracker />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
