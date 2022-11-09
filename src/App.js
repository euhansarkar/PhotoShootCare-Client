import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routers/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App w-10/12 mx-auto">
      <Toaster></Toaster>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
