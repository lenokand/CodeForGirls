import React,  { useState, useEffect } from "react";
import Item from './Item';


function Vitrina () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
       
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="vitrina-block container">
        {items.map(item => (
          <Item key={item.id} url={item.avatar_url} title={item.login}/>
        ))}
      </div>
    );
  }
}
export default Vitrina;