import { Provider } from 'react-redux';
import store from '../../store/index';
import './App.css';
import { MainPage } from '../pages/MainPage/MainPage';

function App() {
  return (
    <Provider store={store}>
        <MainPage />
    </Provider>
  );
}

export default App;
