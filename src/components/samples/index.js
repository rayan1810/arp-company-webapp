import react from "react";

export function Sample(props) {
  // component name always start with Capital Letter
  return (
    <div style={{ backgroundColor: "red", padding: "100 200" }}>
      <h1 style={{ color: "whitesmoke" }}>{props.data}</h1>
    </div>
  );
}

export default Sample;
