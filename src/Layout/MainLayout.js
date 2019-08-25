import React from 'react';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import FooterComponent from './FooterComponent';
import ReadExpense from '../ExpensePage/ReadExpense';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div id="page-top">
                <HeaderComponent />
                <div id="wrapper">
                    <SidebarComponent />
                    <div id="content-wrapper">
                        <div class="container-fluid">


                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index.html">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item active">Blank Page</li>
                            </ol>



                            <hr />
                            <div className="btn-group">
                                <a href="#" className='btn btn-sm btn-primary m-r-1em'>
                                    <span className='fa fa-plus'></span>เพิ่มใหม่
                                </a>

                            </div>

                            <p>
                                <br />
                                <ReadExpense />
                                {/* <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (<Route
                                            key={idx} path={route.path}
                                            exact={route.exact} name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )}
                                        />)
                                            : (null);
                                    },
                                    )}
                                    <Redirect from="/" to="/read-expense" />
                                </Switch> */}
                            </p>

                        </div>
                        <FooterComponent />
                    </div>
                </div>
            </div>
        )
    }
}