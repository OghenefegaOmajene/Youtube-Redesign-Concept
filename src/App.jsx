import './App.css';
import AppRouter from './AppRouter';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  return (
    <>
      <div className="App">
        <Sidebar/>
        <AppRouter/>
      </div>
    </>
  )
}

export default App;
