import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
    return <div>Loading...</div>;
}

const ReadExpense = Loadable({
    loader: () => import('./ExpensePage/ReadExpense'),
    loading: Loading,

});

const CreateExpense = Loadable({
    loader: () => import('./ExpensePage/CreateExpense'),
    loading: Loading,
});



let routes = [
    { path: '/read-expense', name: 'ReadExpense', component: ReadExpense },
    { path: '/create-expense', name: 'CreateExpense', component: CreateExpense },
    { path: '/edit-expense/:id', name: 'EditExpense', component: CreateExpense }
];
export default routes;