import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {


  const appRouter = createBrowserRouter([{

    path: "/",
    element: <Body />,
    children: [{
      path: "/",
      element: <MainContainer />,
    },
    {

      path: '/watch',
      element: <WatchPage />
    }

    ]
  }])
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
