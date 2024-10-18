import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
const data = [{id:1, name:"Ravi", eng:34, mth:29, sci:36},
              {id:2, name:"Reena", eng:31, mth:26, sci:31},
              {id:3, name:"Amar", eng:25, mth:19, sci:22},
              {id:4, name:"Nisha", eng:31, mth:39, sci:34}
]

function DataRow({rowData}){
  const {id, name, eng,mth,sci} = rowData;
  const total = eng + mth + sci;
  const isFailed = Math.min(eng, mth,sci) < 20

  return (
    <tr {...(isFailed && { className: "bg-red" })}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{eng}</td>
      <td>{mth}</td>
      <td>{sci}</td>
      <td>{total}</td>
    </tr>
  );
}
function App({details=data}) {
 
  return (
   <table>
    <thead>
      <th>Roll No</th>
      <th>Name</th>
      <th>English</th>
      <th>Maths</th>
      <th>Science</th>
      <th>Total</th>
    </thead>
    <tbody>
      {details.map(detail => <DataRow key={detail.id} rowData={detail}/>)}
    </tbody>
   </table>
  );
}
export default App;
