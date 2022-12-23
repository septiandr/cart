import './App.css';
import { createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Cart from './container/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cart/>,
  },
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
