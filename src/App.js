import { useEffect, useState } from "react";
import "./App.css";
import { SwipeAble } from "./components/SwipeAble";
import { MainSection } from "./components/MainSection";

function App() {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const data = await fetch(
        `https://inshorts.deta.dev/news?category=${category}`
      );
      const res = await data.json();
      setData(res.data);
      console.log(res.data);
    }
    fetchdata();
  }, [category]);

  return (
    <div className="App">
      <SwipeAble setCategory = { setCategory } />
      <MainSection data={data} />
    </div>
  );
}

export default App;
