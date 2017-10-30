// import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Form, Button, Grid, Icon, Message } from 'semantic-ui-react'

export default class LinkCreate extends Component {
    state = {
        url: '',
        error: true,
        submit: false
    }
    onInputChange = (e) => {
        this.setState({
            url: e.target.value,
            error: false
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        if(this.state.url === '') {
            return false;
        } else {
            this.setState({ submit: true })
            Meteor.call('links.insert', this.state.url, (err) => {
                this.setState({ submit: false })
                // error message here
                if(err) {
                    // do stuff with error here

                } else {
                    // you have successfully save to database
                    this.setState({ url: '' })
                }
            })
        }
    }
    render() {
        return (
            <Grid centered columns = {2}>
                <Grid.Column>
                    <Form onSubmit = {this.onFormSubmit} loading = {this.state.submit}>
                        <Form.Field>
                            <label>Link to shorten</label>
                            <input placeholder = 'Enter your long url to shorten' onChange = {this.onInputChange} value = {this.state.url}/>
                        </Form.Field>
                        <Button type='submit' animated disabled = {this.state.error}>
                            <Button.Content visible>Shorten</Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
