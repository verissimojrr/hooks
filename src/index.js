import { createRoot } from 'react-dom/client';
import App from './views/App';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// eslint-disable-next-line react/jsx-no-undef
root.render(
    <App/>
    );