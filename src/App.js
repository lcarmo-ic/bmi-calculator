import './App.css';
import { Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import RouterComponent from './components/router/router.component';

const App = () => (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterComponent/>
      </PersistGate>
    </Provider>

);
export default App;
