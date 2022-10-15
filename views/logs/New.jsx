const React = require('react')
const Default = require('../layouts/Default.jsx')


class New extends React.Component {
    render() {
        return(
            <Default title="Create A New Log">
                <form action="/logs" method="POST">
                    Title: <input type="text" name='title' /> <br />
                    Entry: <input type="text" name='entry' /> <br />
                    Ship is Broken: <input type="checkbox" name='shipIsBroken' />
                    <input type="submit" value= "Submit Log"/> <br />
                </form>
            </Default>
        )
    }
}

module.exports = New