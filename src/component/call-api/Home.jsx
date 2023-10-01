import axios from "axios";
import React, { useEffect, useState } from "react";
import CreateData from "./CreateData";

const Home = () => {
  const [data, setData] = useState(null);
  const [isReload, setIsReload] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);

  // CAll api
  const getListData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setData(response.data);
  };

  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  };

  const createData = async (data) => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      data
    );
  };

  const updateData = async (data) => {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${itemEdit._id}`,
      data
    );
  };

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos")
    //   .then((response) => response.json())
    //   .then((json) => setData(json));

    getListData();
  }, [isReload]);

  const handleChangeCheckbox = (id) => {
    console.log(id);
    let newArr = [...data];

    newArr = newArr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });

    setData(newArr);
  };

  const handleDeleteItem = (id) => {
    deleteData(id);
    setIsReload(!isReload);
  };

  const onSubmit = (data) => {
    if (itemEdit) {
      updateData(data);
      setItemEdit(null);
    } else {
      createData(data);
    }
    setIsReload(!isReload);
  };

  return (
    <>
      <CreateData onSubmit={onSubmit} data={itemEdit} />
      <br />
      <br />
      <br />
      <hr />
      {data && data.length > 0 && (
        <div>
          {data.map((item) => (
            <div
              onClick={() => setItemEdit(item)}
              key={item.id}
              style={{ color: item.completed ? "red" : "black" }}
            >
              <div
                style={{
                  display: "flex",
                  width: "35%",
                  justifyContent: "space-between",
                }}
              >
                <h1>{item.title}</h1>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => handleChangeCheckbox(item.id)}
                />
                <span onClick={() => handleDeleteItem(item.id)}>x</span>
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
