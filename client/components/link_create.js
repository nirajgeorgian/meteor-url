// import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { Form, Button, Grid, Icon, Message, Input } from 'semantic-ui-react'

export default class LinkCreate extends Component {
    state = {
        url: '',
        error: true,
        submit: false,
        errorMessage: ''
    }
    onInputChange = (e) => {
        if(e.target.value === '') {
            this.setState({
                error: true,
                url: e.target.value,
                errorMessage: ''
            })
        } else {
            this.setState({
                url: e.target.value,
                error: false
            })
        }
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        // this.setState({ submit: true })
        Meteor.call('links.insert', this.state.url, (err) => {
            this.setState({ submit: false })
            // error message here
            if(err) {
                // do stuff with error here
                this.setState({
                    errorMessage: 'Enter a valid URL'
                })
            } else {
                // you have successfully save to database
                this.setState({ url: '' , error: true, submit: false, errorMessage: '' })
            }
        })
    }
    render() {
        const errorDiv = <Message info>
                            <Message.Header>{this.state.errorMessage}</Message.Header>
                        </Message>
        return (
            <Grid centered columns = {2}>
                <Grid.Column>
                    <Form onSubmit = {this.onFormSubmit} loading = {this.state.submit}>
                        <Form.Field>
                            <label>Link to shorten</label>
                            {this.state.errorMessage ? errorDiv : ""}
                            <Input placeholder = 'Enter your long url to shorten' onChange = {this.onInputChange} value = {this.state.url}/>
                        </Form.Field>
                        <Button type='submit' disabled = {this.state.error}>
                            Submit
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
