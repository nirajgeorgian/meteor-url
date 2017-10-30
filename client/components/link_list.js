import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data'
import { Links } from '../../imports/collections/links'

class LinkList extends Component {
    render() {
        return (
            <div>dodo</div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('links')
    return {
        links: Links.find({})
    }    
},LinkList)
