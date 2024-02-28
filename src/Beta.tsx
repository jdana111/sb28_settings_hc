import React from "react";

const myFunction = (myParam: string) => {
  console.log(myParam);
};
const Beta: React.FC = () => {
  myFunction("Hello");
  return (
    <div>
      <h1>Beta</h1>
    </div>
  );
};

export default Beta;
