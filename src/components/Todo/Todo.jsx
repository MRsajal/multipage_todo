import React, { useState, useEffect } from "react";
import "./Todo.css";

export default function Todo() {
  const [mainPoint, setMainPoint] = useState(() => {
    return JSON.parse(localStorage.getItem("p")) || 0;
  });
  useEffect(() => {
    console.log(mainPoint);
    localStorage.setItem("p", JSON.stringify(mainPoint));
  }, [mainPoint]);
  return (
    <div
      style={{ backgroundColor: "#615041", color: "#EFDCAB", height: "100vh" }}
    >
      <h1 className="show-point">Points: {mainPoint}</h1>
      <div className="main-cls">
        <Positive setMainPoint={setMainPoint} />
        <Negative setMainPoint={setMainPoint} />
      </div>
    </div>
  );
}

function Positive({ setMainPoint }) {
  const [List, setList] = useState([]);
  const [description, setDescription] = useState("");
  const [point, setPoint] = useState(0);
  function handleAddList(listItem) {
    setList((list) => [...list, listItem]);
    console.log(List);
  }
  function handleDescription(e) {
    e.preventDefault();
    if (!description && !point) return;
    const newItem = { description, point, done: false, id: Date.now() };
    handleAddList(newItem);
    setDescription("");
    setPoint(0);
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want ot delete all items?"
    );
    if (confirmed) {
      setList([]);
      setMainPoint(0);
    }
  }
  function handleToggleItem(id) {
    let addPoint = 0;
    setList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );

    for (let i = 0; i < List.length; i++) {
      if (List[i].id === id) {
        if (List[i].done === false) {
          addPoint = List[i].point;
        } else {
          addPoint = -List[i].point;
        }
        setMainPoint((s) => s + addPoint);
      }
    }
    // console.log(addPoint);
  }
  function handleDeleteItem(id) {
    setList((items) => items.filter((item) => item.id !== id));
  }

  useEffect(() => {
    const List = JSON.parse(localStorage.getItem("posList"));
    if (List && List.length > 0) {
      setList(List);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posList", JSON.stringify(List));
  }, [List]);

  return (
    <>
      <div className="todo">
        <div className="form">
          <h1>Positive Todo-List</h1>
          <form onSubmit={handleDescription}>
            <input
              style={{ width: "50px" }}
              type="number"
              placeholder="point"
              value={point}
              onChange={(e) => setPoint(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="todo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="todo-list">
          <ul>
            {List.map((item) => (
              <li key={item.key}>
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => handleToggleItem(item.id)}
                />
                <span
                  style={item.done ? { textDecoration: "line-through" } : {}}
                >
                  {item.description} - for points {item.point}
                </span>
                <button onClick={() => handleDeleteItem(item.id)}>❌</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </>
  );
}

function Negative({ setMainPoint }) {
  const [List, setList] = useState([]);
  const [description, setDescription] = useState("");
  const [point, setPoint] = useState(0);
  function handleAddList(listItem) {
    setList((list) => [...list, listItem]);
    console.log(List);
  }
  function handleDescription(e) {
    e.preventDefault();
    if (!description && !point) return;
    const newItem = { description, point, done: false, id: Date.now() };
    handleAddList(newItem);
    setDescription("");
    setPoint(0);
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want ot delete all items?"
    );
    if (confirmed) setList([]);
  }
  function handleToggleItem(id) {
    let addPoint = 0;
    setList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    for (let i = 0; i < List.length; i++) {
      if (List[i].id === id) {
        if (List[i].done === true) {
          addPoint = List[i].point;
        } else {
          addPoint = -List[i].point;
        }
        setMainPoint((s) => s + addPoint);
      }
    }
  }
  function handleDeleteItem(id) {
    setList((items) => items.filter((item) => item.id !== id));
  }
  useEffect(() => {
    const List = JSON.parse(localStorage.getItem("negList"));
    if (List && List.length > 0) {
      setList(List);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("negList", JSON.stringify(List));
  }, [List]);
  return (
    <>
      <div className="todo">
        <div className="form">
          <h1>Negative Todo-List</h1>
          <form onSubmit={handleDescription}>
            <input
              style={{ width: "50px" }}
              type="number"
              placeholder="point"
              value={point}
              onChange={(e) => setPoint(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="todo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="todo-list">
          <ul>
            {List.map((item) => (
              <li key={item.key}>
                <input
                  value={item.done}
                  type="checkbox"
                  onChange={() => handleToggleItem(item.id)}
                />
                <span
                  style={item.done ? { textDecoration: "line-through" } : {}}
                >
                  {item.description} - for points {item.point}
                </span>
                <button onClick={() => handleDeleteItem(item.id)}>❌</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </>
  );
}
