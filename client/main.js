import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.css';
import { Links } from '../imports/collections/links'

import Header from './components/header'
import LinkCreate from './components/link_create'
import LinkList from './components/link_list'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <LinkCreate />
                <LinkList />
            </div>
        )
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'))
})
