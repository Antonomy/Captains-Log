const React = require('react')

class Show extends React.Component {
    render() {
        const {title, entry, shipIsBroken, _id} = this.props.log
        const {log} = this.props
        return(
            <p>Title:{title} <br />
            Entry:{entry} <br />
            {shipIsBroken? "Ship is broken.":"Ship is not broken."} <br />
            <a href={`/logs/${log._id}/edit`}> Edit</a> <br />
            <a href={"/logs"}>Back to Index Page</a></p>
        )
    }
}

module.exports = Show