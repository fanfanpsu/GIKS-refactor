import Management from "../containers/Management/Management";
import Demo from "../containers/Demo/Demo";
import Login from "../containers/Auth/Login";
import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";
import Logout from "../containers/Auth/Logout/Logout";


export default [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/faq",
        component: FaqPage,
        someKey: "Test"
    }
];

let routes = (
    <Switch childProps={childProps}>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/management" component={Management}/>
        <Route path="/demo" component={Demo}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound} />
        <Redirect to="/"/>
    </Switch>
);

if (this.props.isAuthenticated) {
    routes = (
        <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/auth" component={asyncAuth} />

            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
            <Redirect to="/" />
        </Switch>
    );
}

class Body extends Component {
    render() {
        return (
            <div className="main-body">
                <Switch>
                    {routes.map(({component: Cmp, ...route}, i) => {
                        // HOW DO I PASS THE 'someKey' PROP HERE?
                        return (<Route
                            key={i}
                            {...route}
                            render={props => <Cmp {...props} someKey="someValue" />}
                        />);
                    })}
                </Switch>
            </div>
        );
    }
}

export default Body;

export default ({ component: C, props: cProps, ...rest }) =>
    <Route {...rest} render={props => <C {...props} {...cProps} />} />;