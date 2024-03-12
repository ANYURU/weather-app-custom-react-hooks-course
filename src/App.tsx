import "./App.css";
import useFetch from "./useFetch";

function App() {
  const URL = "https://apis.is/weather/observations/is?stations=1";

  const { data, loading, errors } = useFetch(URL);

  if (loading) return <p>loading...</p>;

  if (errors) return <p>{errors}</p>;

  return (
    <div className="App">
      <h1>Weather in Uganda</h1>
      <div>
        <p>Location: {data.location}</p>
        <p>Temperature: {data.temperature}</p>
      </div>
    </div>
  );
}

export default App;
