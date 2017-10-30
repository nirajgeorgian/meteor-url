import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data'
import { Links } from '../../imports/collections/links'

import TableData from './table_data'

class LinkList extends Component {
    render() {
        return (
            <div>
                <TableData data = {this.props.links} />
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links')
    return {
        links: Links.find({}).fetch()
    }
},LinkList)
