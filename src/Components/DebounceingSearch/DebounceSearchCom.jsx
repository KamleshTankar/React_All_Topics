import React, { useState, useEffect } from "react";

const DebounceSearchCom = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 2) {
        fetch(`https://api.example.com/search?q=${query}`)
          .then((res) => res.json())
          .then((data) => setResult(data.items || []));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <h2>Debounce Search(performance)</h2>

      <input
        type="text"
        placeholder="Type to search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {result.map((r) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebounceSearchCom;
