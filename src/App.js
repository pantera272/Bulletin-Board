import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import Homepage from '../src/components/views/Homepage/Homepage';
import { Post } from './components/views/Post/Post';
import { PostEdit } from './components/views/PostEdit/PostEdit';
import { PostAdd } from './components/views/PostAdd/PostAdd';
import { NotFound } from './components/views/NotFound/NotFound';
import ShowUserAnnoucments from './components/features/ShowUsersAnnoucments/ShowUserAnnoucments';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
  },
});

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Routes>  
              <Route path='/' element={<Homepage /> } />  
              <Route path='*' element={<NotFound />} />
              <Route path='/postadd' element={<PostAdd />} />
              <Route path='/userposts' element={<ShowUserAnnoucments />} />
              <Route path='/postedit/:id' element={<PostEdit />} />
              <Route path='/post/:id' element={<Post />} />
              <Route path='/notfound' element={<NotFound />} />
            </Routes>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  </BrowserRouter>
);

export { App };
