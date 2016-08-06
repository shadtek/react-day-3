import React from 'react';
import Nav from '../../components/Nav/Nav';
import Jumbo from '../../components/Jumbo/Jumbo';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                id:89323,
                name:"Sally Rally",
                date: "today",
                desc:"awesome prop"
            }
        }
    }

    render(){
        return (
            <div>
                <Nav user={this.state.user} />
                <Jumbo />
            </div>
        )
    }
}

export default Home
