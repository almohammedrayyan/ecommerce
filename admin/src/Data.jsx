import React, { useEffect, useState } from "react";

const Data = () => {
  const fruits = [
    {
      name: "apple",
    },
    {
      name: "apple",
    },
    {
      name: "apple",
    },
  ];
  const [data, setData] = useState(fruits);

  useEffect(() => {
    setData();
  }, []);
  return <div>Data</div>;
};

export default Data;
