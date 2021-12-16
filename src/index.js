import ReactDOM from 'react-dom';
import App from './page/home/App';
import './assets/style/index.scss';

ReactDOM.render(<App />, document.getElementById('root'), () => { 
    console.log('Page has been rendered');
});