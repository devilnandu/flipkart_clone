import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import TemplateProvider  from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from'./components/product/DetailView';
import { Box } from '@material-ui/core';

function App() {
  return (
    <TemplateProvider>
        <ContextProvider>
            <BrowserRouter>
              <Header />
              <Box style={{marginTop: 54}}>
                <Routes>      
                    <Route path='/' element={<Home/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route  path = '/product/:id' element = {<DetailView/>}/>
                    <Route path='/cart' element={<Cart/>} />
                </Routes>
              </Box>
            </BrowserRouter>
        </ContextProvider>
    </TemplateProvider>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/home/Home';
// import Header from './components/header/Header';
// import DetailView from './components/product/DetailView';
// import TemplateProvider  from './templates/TemplateProvider';
// import ContextProvider from './context/ContextProvider';
// import Cart from './components/cart/Cart';
// import { Box } from '@material-ui/core'

// function App() {
//   return (
//     <TemplateProvider>
//       <ContextProvider>
//         <BrowserRouter>
//           <Header />
//           <Box style={{marginTop: 54}}>
//             <Routes>
//               <Route exact path= '/' component={Home} />
//               <Route exact path= '/cart' component={Cart} />
//               {/* <Route exact path= '/product/:id' component={Product} /> */}
//               <Route exact path= '/product/:id' component={DetailView} />
//               {/* <Route component={NotFound} /> */}
//             </Routes>
//           </Box>
//         </BrowserRouter>
//       </ContextProvider>
//     </TemplateProvider>
//   );
// }

// export default App;