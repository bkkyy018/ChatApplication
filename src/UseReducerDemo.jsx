import { useEffect, useReducer } from "react";

const red = (state, action) => {
  console.log(state);
  console.log(action);

  if (action.mode == "ADD") {
    console.log("ADD");
    state.push(action.data);
    console.log(state);
  } else if (action.mode == "SUB") {
    console.log("SUB");
    console.log("state", state);
    state.pop();
    console.log(state);
  }

  return state; // note don't forget to return state at the end
};

const val = ["A", "B", "c"];

const Demo = () => {
  const [todo, myFunc] = useReducer(red, val);
  // const [count, setCount] = useState(0);

  const handleONclick = (type) => {
    // setCount(count + 1);
    myFunc({ mode: type, data: "10" });
  };

  useEffect(() => {}, [todo, myFunc]);
  return (
    <div>
      <button
        className="py-2 px-10 bg-green-500"
        onClick={() => handleONclick("ADD")}
      >
        {" "}
        ADD
      </button>
      <button
        className="py-2 ml-3 px-10 bg-green-500"
        onClick={() => handleONclick("SUB")}
      >
        {" "}
        SUB
      </button>

      {todo.map((item, index) => {
        return <h2 key={index}>{item}</h2>;
      })}
    </div>
  );
};

export default Demo;
