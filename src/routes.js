import React from 'react';
import Loadable from 'react-loadable';
function Loading() {
    return <div>Loading...</div>;
}
const ReadExpense = Loadable({
    loader: () => import('./ExpensePage/ReadExpense'),
    loading: Loading,
});
let routes = [{ path: '/read-expense', name: 'ReadExpense', component: ReadExpense },
];
export default routes;