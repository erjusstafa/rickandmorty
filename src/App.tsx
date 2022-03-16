import React, { ChangeEvent, useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import { fetchApi } from "./redux/features/homeSlice";
import { useReduxDispatch, useReduxSelector } from "./redux/hooks";

function App() {
  const dispatch = useReduxDispatch();
  const { dataApi } = useReduxSelector((state) => state.home);

  
  const [valSearch, setValSearch] = useState<string>("");

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

    console.log("dataApi",dataApi);

  return (
    <>
      <Header />
      <Section
        title="The Rick and Morty API"
        dataApi={dataApi}
        valSearch={valSearch}
        setValSearch={setValSearch}
      />
      <Container dataApi={dataApi}  valSearch={valSearch}/>
      <Footer dataApi={dataApi} />
    </>
  );
}

export default App;
