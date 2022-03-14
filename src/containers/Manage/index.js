import React from "react";
import { useState, useEffect } from "react";
const SecondPage = () => {
  const [posts, setPosts] = useState([]);
  const getData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    const res = await response.json();
    setPosts(res);
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
              <th scope="col">Post ID</th>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Body </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.postId}</td>
                  <td>{elem.id}</td>
                  <td>{elem.name}</td>
                  <td>{elem.email}</td>
                  <td style={{ width: "470px" }}>{elem.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Second table */}
        <table
          className="table "
          style={{ width: "700px", margin: "30px auto" }}
        >
          <thead>
            <tr>
              <th scope="col">App ID</th>
              <th scope="col">App Name</th>
              <th scope="col">LOB</th>
              <th scope="col">State </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>16513</td>
              <td>CCAP - Banking(MTS,BTR,CTS)</td>
              <td>CIB</td>
              <td>Operate</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SecondPage;
