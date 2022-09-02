import './App.css'; 
import Profile from './Components/Profile';

function App() {
  const pro ={
  
    fullname:'dawser_ghzel',
     profession :'etudiant',
      bio:'!!!!'  
  
};
  return (
    <div className="App">
     <Profile pro={pro}/>
    </div>
  );
}

  


export default App;
