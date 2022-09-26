import Table from "./components/Table";
import SearchAndFilter from './components/SearchAndFilter'

function App() {
  return (
    <div className="container">
      <h1>Advance Table</h1>
      <SearchAndFilter />
      <Table />     
    </div>
  );
}

export default App;
