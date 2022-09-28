import "./styles.css";
import React, { useState, useEffect } from "react";

import AutoComplete from "./AutoComplete";
import { getData } from "./dataService";
export default function App() {
  const [list, setList] = useState([]);

  const APICalling = async () => {
    const resp = await getData();
    
    
  const respArr = resp.data.replace(/[\r\n]/gm, '=').split("=")
  
    setList(respArr);
  };
  useEffect(() => {
    APICalling();
  }, []);

  return <AutoComplete suggestions={list} />;
}
