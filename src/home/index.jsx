import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    //https://coursesnodejs.herokuapp.com/user/category?page=1&limit=5

    fetch("https://coursesnodejs.herokuapp.com/user/category?page=1&limit=5")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      });
  }, []);
  const onNavigate = (id) => {
    navigate(`/home/${id}`);
  };
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div>
            {" "}
            <h1>{item.name}</h1>
            <div>
              {item.books?.map((value) => {
                return (
                  <img
                    onClick={() => onNavigate(item._id)}
                    className="books"
                    src={`https://coursesnodejs.herokuapp.com/${item.imgUrl}`}
                    alt="not found"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
