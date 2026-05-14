import Counter from "./Counter";
import Stopwatch from "./Stopwatch";
import JokeApp from "./JokeApp";
import Login from "./Login";
import ProductList from "./ProductList";
import CartDemo from "./CartDemo";
import RemoveCart from "./RemoveCart";
import AppContext from "./AppContext";
import CartReducer from "./CartReducer";
import SearchProducts from "./SearchProducts";

import TodoApp from "./TodoApp";
import WeatherApp from "./WeatherApp";
import FileUpload from "./FileUpload";

function App() {
  return (
    <div>
      <h1>React Practicals</h1>

      <Counter />
      <hr />

      <Stopwatch />
      <hr />

      <JokeApp />
      <hr />

      <Login />
      <hr />

      <ProductList />
      <hr />

      <CartDemo />
      <hr />

      <RemoveCart />
      <hr />

      <AppContext />
      <hr />

      <CartReducer />
      <hr />

      <SearchProducts />
      <hr />

      <TodoApp />
      <hr />

      <WeatherApp />
      <hr />

      <FileUpload />
      <hr />
    </div>
  );
}

export default App;