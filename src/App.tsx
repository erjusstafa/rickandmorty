import React, { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";
import { fetchApi } from "./redux/features/homeSlice";
import { useReduxDispatch, useReduxSelector } from "./redux/hooks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDetails from "./components/PageDetails";

function App() {
  const dispatch = useReduxDispatch();
  const { dataApi, show } = useReduxSelector((state) => state.home);

  const [valSearch, setValSearch] = useState<string>("");
  const [showSection, setShowSection] = useState<boolean>(true);

  const goToDetails = () => {
    setShowSection(false);
  };

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Header />
        {showSection ? (
          <Section
            title="The Rick and Morty API"
            dataApi={dataApi}
            valSearch={valSearch}
            setValSearch={setValSearch}
          />
        ) : null}
        <Routes>
          <Route
            path={"/"}
            element={
              <Container
                dataApi={dataApi}
                valSearch={valSearch}
                goToDetails={goToDetails}
              />
            }
          />
          <Route path={"character/:id"} element={<PageDetails />} />
        </Routes>
        <Footer count={dataApi?.info?.count} pages={dataApi?.info?.pages} />
      </BrowserRouter>
    </>
  );
}

export default App;
