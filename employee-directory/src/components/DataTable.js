import React, {useState, useEffect} from 'react';
import API from "../utils/API";

function DataTable() {
  const [tableState, setTableState] = useState({
    users: []
  })

// takes the data from the API
  useEffect(() => {
   API.getUsers().then((res) => {
      // using the setTableState method to update our users array in this state
      // res.data.results is information that comes from the api that we set to our users array
      setTableState({users: res.data.results});
      console.log("Table State")
      console.log(res.data.results)
    }).catch((err) => {console.log(err)})
    console.log("hello")
  }, []);

  return (
      
    <table className="table table-striped">
      <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone </th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
    <tbody>
      {tableState.users.map(result => (
        <tr key ={result.id}>
          <td><img alt="user" src={result.picture.thumbnail} /></td>
          <td>{result.name.first} {result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date.substring(0, 10)}</td>
        </tr>
      ))}
    </tbody>
    </table>
    ); 
}
  export default DataTable;