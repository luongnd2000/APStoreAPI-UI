import UserLogin from "./Component/Client/Login/UserLogin";
import NotFound from './Component/NotFound';
import MainContent from './Component/Client/Shop/Shop';
import React from 'react';
import Admin from "./Component/Admin/MainContent/Admin";

const routes = [
    {
        path: '/',
        exact: true,
        main: () =>
            <MainContent />

    },
    {
        path: '/Login',
        exact: false,
        main: () =>
            <UserLogin />

    }
    ,
    {
        path: '/Admin',
        exact: false,
        main: () =>
            <Admin />

    },
    {
        path: '',
        exact: false,
        main: () =>
            <NotFound />

    }
    
];
export default routes;