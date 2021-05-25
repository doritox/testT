/* eslint-disable no-unused-vars */
import './App.css';
import react from 'react';
import {HashRouter as Router,Switch,Route,Link} from 'react-router-dom';

function App() {
//   let collag = 0;
//   const calc = ()=> {respons.forEach(((item)=>{
    
//     collag += item.id;
     
//   }
//   )) 
//  return collag; 
// }
// const [respons,setRespons] = useState([])
//    useEffect(() => {
   
    
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((respons)=>{return respons.json()})
// .then((respons)=>{setRespons(respons)})

//    })

  return (
    <div className="App">
      <Router>
        <Link to='/'>Home</Link>
        <Link to='/page2'>2</Link>
        <Switch>
          <Route exact path='/' component={()=> {return <h1>HomePage</h1>}}/>
          <Route exact path='/page2' component={()=> {return <h1>Page 2</h1>}}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
