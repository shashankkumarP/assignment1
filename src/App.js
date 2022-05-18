import logo from './logo.svg';
import './App.css';

function App() {

  let list1 = ["Android","Blackberry","iphone","WindowPhone"];
  let list2 = ["Samsung","Htc","Micromax","Apple"];
  return (
    <div >
      <h1>Mobile operating system</h1>
      {list1.map((el)=>{
        return <li>{el}</li>
      })}
      <br></br>
      <br></br>
     <h1>Mobile Manufacturers</h1>
     {list2.map((el)=>{
       return <li>{el}</li>
     })}



    </div>
  );
}

export default App;
