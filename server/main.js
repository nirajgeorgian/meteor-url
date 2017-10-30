import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import ConnectRoute from 'connect-route'
import { Links } from '../imports/collections/links'

Meteor.startup(() => {
    Meteor.publish('links', function() {
        return Links.find({})
    })
})

const middleware = ConnectRoute(function(route) {
    route.get('/:token', function(req, res, next) {
        const link = Links.findOne({ token: req.params.token})
        if(link) {
            Links.update(link, { $inc: {clicks: 1}})
            res.writeHead(307, { 'Location': link.url})
            res.end()
        } else {
            // res.writeHead(301, {'Location': `http://${req.headers}/`})
            // res.end()
            next()
        }
    })
})

WebApp.connectHandlers
    .use(middleware)
