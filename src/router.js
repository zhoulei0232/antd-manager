import React from 'react'
import {HashRouter ,Route ,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons  from './pages/ui/buttons'
import Modals  from './pages/ui/modals'
import Loadings  from './pages/ui/Loadings'
import Notification  from './pages/ui/notification'
import Tab  from './pages/ui/tabs'
import Messages  from './pages/ui/messages'
import Gallery  from './pages/ui/gallery'
import Carousels  from './pages/ui/carousel'
import FormLogin  from './pages/form/login'
import FormRegister  from './pages/form/register'
import BasicTable  from './pages/table/basicTable'
import HighTable  from './pages/table/highTable'
import City  from './pages/city'
import NoMatch  from './pages/nomatch'

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                <Route   path="/admin/ui/buttons" component={Buttons} />
                                <Route   path="/admin/ui/modals" component={Modals} />
                                <Route   path="/admin/ui/loadings" component={Loadings} />
                                <Route   path="/admin/ui/notification" component={Notification} />
                                <Route   path="/admin/ui/messages" component={Messages} />
                                <Route   path="/admin/ui/tabs" component={Tab} />
                                <Route   path="/admin/ui/gallery" component={Gallery} />
                                <Route   path="/admin/ui/carousel" component={Carousels} />
                                <Route   path="/admin/form/login" component={FormLogin} />
                                <Route   path="/admin/form/reg" component={FormRegister} />
                                <Route   path="/admin/table/basic" component={BasicTable} />
                                <Route   path="/admin/table/high" component={HighTable} />
                                <Route   path="/admin/city" component={City} />
                                <Route  component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    <Route path="/order/detail" component={Login} />
                </App>
            </HashRouter>
        )
    }
}