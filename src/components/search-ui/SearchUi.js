import { useEffect, useState } from "react";

const SearchUi = () => {
  const [text, setText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const fetchResults = async () => {
      if (cache[text]) {
        setSearchResults(cache[text]);
      } else {
        const response = await fetch(
          `https://www.google.co.in/complete/search?client=firefox&q=${text}`
        );
        const results = await response.json();
        cache[text] = results[1];
        setCache(cache);
        setSearchResults(results[1]);
      }
    };

    const timeout = setTimeout(() => {
      fetchResults();
    }, 200);
    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h3>SearchUi</h3>

      <div
        id="searchContainer"
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          style={{
            height: "30px",
            borderRadius: "3px",
            border: "1px solid #000",
            paddingLeft: "10px",
          }}
          value={text}
          onChange={(e) => setText((text) => e.target.value)}
        />
        <div
          style={{
            flex: 1,
            border: "1px solid #000",
            paddingLeft: "10px",
            minHeight: "200px",
          }}
        >
          <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
            {searchResults?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchUi;
