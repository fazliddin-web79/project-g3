import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";

export const Book = () => {
  const params = useParams();
  const [url, setUrl] = useState([]);
  console.log(params);
  useEffect(() => {
    fetch(`https://coursesnodejs.herokuapp.com/user/category/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.imgUrl);
        setUrl(`https://coursesnodejs.herokuapp.com/${res.data?.imgUrl}`);
      });
  });
  return (
    <Container>
      Book
      <img className="books" src={url} />
    </Container>
  );
};

export default Book;
