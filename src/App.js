
import './App.css';
import UserContext from './components/context/context';

import MainComponents from './components/mainComponents';
import Test from './components/test';

 


function App() {

  const user={
                id:1 ,
                name:'ovinafas',
                role :'admin',
                address : 'Gonbad'
 }
  return (
    <div className="App">
      <h2>ovinafas</h2>

      <UserContext.Provider   value={{user}}>
 
      <MainComponents />

      <Test   />
     

      </UserContext.Provider>
    </div>
  );
}

export default App;
