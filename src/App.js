import React, { useState, useEffect } from "react";

const App = () => {
  let [publications, setPublications] = useState([]);

  useEffect(() => {
    getPublications();
  }, []);
  const getPublications = async () => {
    let url = "http://127.0.0.1:8000/publications/";
    let response = await fetch(url);
    let res = await response.json();
    setPublications((prev) => res);
  };
  return (
    <div className="App">
      <div className="container">
        {publications.map((publication) => {
          return (
            <div className="col-md-4 m-2 text-center" key={publication.author}>
              <div className="card bg-dark text-light">
                <div className="card-body">
                  <h5 className="card-title"> {publication.content}</h5>
                  <p> {publication.author}</p>
                  <p> {publication.likes}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
