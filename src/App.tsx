import React from "react";
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

  console.log("dataapi", dataApi);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Section title="The Rick and Morty API" />
      <Container dataApi={dataApi} />
      <Footer dataApi={dataApi} />
    </>
  );
}

export default App;
