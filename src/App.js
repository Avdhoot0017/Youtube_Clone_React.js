
import './App.css';
import Head from './componants/head';
import Body from './componants/body'
import store from './componants/utils/store'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './componants/MainContainer';
import WatchPage from './componants/WatchPage';



const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },

      {
        path:"watch",
        element:< WatchPage/>

      },
    ],
  },
]);

function App() {
  return (

    <Provider store = {store} >
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
     
    </div> 
    </Provider>
  );
}

export default App;
