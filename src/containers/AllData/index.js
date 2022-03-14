import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await response.json();
    setUsers(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.username}</td>
                  <td>{elem.email}</td>
                  <td style={{ height: "80px" }}>
                    {elem.address.street}&nbsp;&#x2c; {elem.address.suite}
                    &nbsp;&#x2c; {elem.address.city}.
                    <br />
                    zipcode: {elem.address.zipcode}&nbsp;&#x2c; latitude :
                    &nbsp;
                    {elem.address.geo.lat}&nbsp;&#x2c; longitude:&nbsp;
                    {elem.address.geo.lng}
                  </td>
                  <td>{elem.phone}</td>
                  <td>{elem.website}</td>
                  <td>{elem.company.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;
