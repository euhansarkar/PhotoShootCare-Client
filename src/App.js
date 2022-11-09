import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routers/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="App w-10/12 mx-auto">
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
