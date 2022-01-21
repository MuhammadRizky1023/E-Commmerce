import { Provider } from 'react-redux'           
import App from './App'
import { store } from './states/store';
const Container = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export {Container}