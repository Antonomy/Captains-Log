const React = require('react')

class New extends React.Component {
    render() {
        return(
            <>
                <form action="/logs" method="POST">
                    Title: <input type="text" name='title' /> <br />
                    Entry: <input type="text" name='entry' /> <br />
                    Ship is Broken: <input type="checkbox" name='shipIsBroken' />
                    <input type="submit" value= "Submit Log"/> <br />
                </form>
            </>
        )
    }
}

module.exports = New