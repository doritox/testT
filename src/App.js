/* eslint-disable no-unused-vars */
import './App.css';
import react,{useState,useEffect} from 'react';

function App() {
  let collag = 0;
  const calc = ()=> {respons.forEach(((item)=>{
    
    collag += item.id;
     
  }
  )) 
 return collag; 
}
const [respons,setRespons] = useState([])
   useEffect(() => {
   
    
fetch('https://jsonplaceholder.typicode.com/users')
.then((respons)=>{return respons.json()})
.then((respons)=>{setRespons(respons)})

   })

  return (
    <div className="App">
      {calc()}
    </div>
  );
}

export default App;
