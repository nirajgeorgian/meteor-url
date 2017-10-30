import React, { Component } from 'react'
import { Table, Header, Grid } from 'semantic-ui-react'

class TableData extends Component {
    render() {
        const tableData = this.props.data.map((table) => {
            const url = `http://localhost:3000/${table.token}`
            return (
                <Table.Row key = {table._id}>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Header.Content>
                                {table.url}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Header.Content>
                                <a href={url}>{url}</a>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Header.Content>
                                {table.clicks}
                            </Header.Content>
                        </Header>
                    </Table.Cell>
              </Table.Row>
            )
        })
        return (
            <Grid centered columns = {2}>
                <Grid.Column>
                    <Table basic='very' celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>data one</Table.HeaderCell>
                        <Table.HeaderCell>data two</Table.HeaderCell>
                        <Table.HeaderCell>data thr</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tableData}
                </Table.Body>
            </Table>
                </Grid.Column>
            </Grid>
        )
    }
}

export default TableData
