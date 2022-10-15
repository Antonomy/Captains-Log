const React = require('react')
const Default = require('../layouts/Default.jsx')


class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <Default title="Capitan's Log Index Page">
                <ul>
                    {
                        logs.map((log) => {
                            const { title, entry, shipIsBroken, _id } = log;
                            return (
                                <li key={_id}>
                                    <a href={`/logs/${_id}`}> { title }</a> <br />
                                    {
                                        shipIsBroken?
                                        'The ship is broken':
                                        'The ship is not broken'
                                    }
                                    <form method="POST" action={`/logs/${_id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                    {
                        <a href="/logs/new">New Page</a>
                    }
                </ul>
            </Default>
        )
    }
}


module.exports = Index