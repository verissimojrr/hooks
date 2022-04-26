import { createRoot } from 'react-dom/client';
import App from './views/App';

//import DataContext, {data} from './data/DataContext';

/*const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// eslint-disable-next-line react/jsx-no-undef
root.render(
    <DataContext.Provider value={data}>
        <App/>
    </DataContext.Provider>
    );*/

createRoot(document.getElementById('root'))
    .render(
        //<DataContext.Provider value={data}>
            <App/>
        //</DataContext.Provider>
    );