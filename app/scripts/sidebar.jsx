const React = require('react');

module.exports = class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="sidebar">
                 <h3>Users</h3>
                 <ul id="users">
                     {this.props.users.map(function(user, i){
                         return <li key={i}>{user}</li>;
                     })}
                 </ul>
                 <form id="name">
                     <input type="text" placeholder="Name" autofocus autocomplete="off"/>
                     <button>Update</button>
                 </form>
             </div>
        );
    }

};
