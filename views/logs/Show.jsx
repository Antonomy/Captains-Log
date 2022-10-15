const React = require('react')
const Default = require('../layouts/Default.jsx')


class Show extends React.Component {
    render() {
        const { title, entry, shipIsBroken, _id } = this.props.log
        const { log } = this.props
        return (
            <Default title={`${title} Show Page`} log={this.props.log}>
                <p>Title:{title} <br />
                    Entry:{entry} <br />
                    {shipIsBroken ? "Ship is broken." : "Ship is not broken."} <br />
                    <a href={`/logs/${log._id}/edit`}> Edit</a> <br />
                    <a href={"/logs"}>Back to Index Page</a></p>
            </Default>
        )
    }
}

module.exports = Show