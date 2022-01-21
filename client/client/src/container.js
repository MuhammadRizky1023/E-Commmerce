import { Provider } from 'react-redux'
import { store } from './store'               
import App from './App'
const Conteiner = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export {Conteiner}