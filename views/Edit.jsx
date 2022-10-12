const React = require('react')

class Edit extends React.Component {
    render() {
        const {title, entry, shipIsBroken, _id} = this.props.log
        return (
            <>
            <form method="POST" action={`/captains_log/${_id}?_method=PUT`}>
                Title: <input type="text" name="title" defaultValue={title} /> <br />
                Entry: <input type="text" name="entry" defaultValue={entry} /> <br />
                Ship is Broken: <input type="checkbox" name-="shipIsBroken" defaultChecked={shipIsBroken} /> <br />
                <input type="submit" value="Edit Log" />
            </form>
            </>
        )
    }
}

module.exports = Edit