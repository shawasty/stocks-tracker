
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow'


function App() {
  return (
    <div className="App">
    <div className="container">
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Ticker </th>
            <th>price</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
      <tbody>
        <StockRow ticker ="aapl" />
        <StockRow ticker ="goog" />
        <StockRow ticker ="nsft" />
        <StockRow ticker ="nsft" />
      </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;
