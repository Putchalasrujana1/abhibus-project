import { useState } from "react";

function AddBuses(props) {
    const [busName,setBusName]=useState('')
    const [from,setBusFrom]=useState('')
    const [to,setBusTo]=useState('')
    const [date,setBusDate]=useState('')
    const [avaliableBuses,setBuses]=useState([])
    const buses=[
        {busName:'vishak express' ,from:'vizianagaram',to:"hyderabad",date:'21-12-22'},
        {busName:'vishaka' ,from:'vizianagaram',to:"hyderabad",date:'21-12-22'},
        {busName:'golden temple',from:'hyderabad',to:"hyderabad",date:'22-12-22'},
        {from:'punjab mail',to:"vijayawada",date:'23-12-22'}
    ]

    function handleSubmit(){
        const avaliable=buses.find((bus)=>{
            return bus.date === date
        })
        setBuses(avaliable)
    }
    function handleSelect(){
      
    }

  return (
    <div>
      <table>
        <tr>
        <td><input placeholder="From" value={(e)=>setBusFrom(e.target.value)}></input></td>
        <td><input placeholder="To" value={(e)=>setBusTo(e.target.value)}></input></td>
        <td><input type='date' placeholder="Date(dd-mm-yy)" value={(e)=>setBusDate(e.target.value)}></input></td>
        <td><button onClick={handleSubmit}>Search</button></td>
        </tr>
      </table>
      <table>
        {avaliableBuses?.map((bus)=>(
            <table border='1'>
                <tr key={bus.id}>
                    <td>{bus.id}</td>
                    <td>{bus.name}</td>
                    <td>{bus.date}</td>
                    <td><button onClick={handleSelect}>Select</button></td>
                </tr>
            </table>
        ))}
      </table>
    </div>
  );
}
export default AddBuses;