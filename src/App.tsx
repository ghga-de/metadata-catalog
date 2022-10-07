import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Browse from "./components/browse/browse";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import "./App.scss";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home/home";
import AboutUs from "./components/aboutUs/aboutUs";
import SingleDatasetView from "./components/browse/singleDatasetView/singleDatasetView";
import Download from "./components/download/download"
import Upload from "./components/upload/upload"
import MetadataModel from "./components/metadataModel/metadataModel";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/about-us">
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="/browse">
          <Route index element={<Browse />} />
          <Route path="?p=:page" element={<Browse />} />
          <Route path="?q=:search&p=:page" element={<Browse />} />
          <Route path="?f=:filter&p=:page" element={<Browse />} />
          <Route path="?q=:search&f=:filter&p=:page" element={<Browse />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/browse/:id">
          <Route index element={<SingleDatasetView />} />
        </Route>
        <Route path="/download">
          <Route index element={<Download />} />
        </Route>
        <Route path="/upload">
          <Route index element={<Upload />} />
        </Route>
        <Route path="/metadata-model">
          <Route index element={<MetadataModel />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
