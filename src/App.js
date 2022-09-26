import Table from "./components/Table";
import SearchAndFilter from './components/SearchAndFilter'
import Header from "./components/Header";

function App() {

  return (
    <div className="container">
      <Header />
      <SearchAndFilter />
      <Table />     
    </div>
  );
}

export default App;
