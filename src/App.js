import logo from "./logo.svg";
import "./App.css";
import { TestFile } from "./components/TestFIle";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import About from "./components/About";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";
import { MainComp } from "./utils/RootReducer";
import Header from "./components/Header";
import Infinite from "./components/Infinite";
import Accordian from "./components/Accordian";
import NestedComments from "./components/NestedComments";
import ImageSlider from "./components/ImageSlider";
import Pagination from "./components/Pagination";
import LiveChat from "./components/livechat/LiveChat";
import SearchUi from "./components/search-ui/SearchUi";
import PaginationCopy from "./components/ssr";

function App() {
  const [lang, setLang] = useState("en");
  return (
    <div className="App">
      {/* <TestFile /> */}
      <section
        style={{
          backgroundColor: "tomato",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h1>This is a staic Header</h1>
        <select
          onChange={(e) => {
            setLang(e.target.value);
          }}
          value={lang}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="ru">Russian</option>
        </select>
      </section>
      {/* <MainComp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>home page</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/livechat" element={<LiveChat />} />
          <Route path="/infinite" element={<Infinite />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/paginationcopy" element={<PaginationCopy />} />
          <Route path="/accordian" element={<Accordian />} />
          <Route path="/nestedcomments" element={<NestedComments />} />
          <Route path="/imageslider" element={<ImageSlider />} />
          <Route path="/searchui" element={<SearchUi />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
