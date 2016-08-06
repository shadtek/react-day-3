import React from 'react';
import Nav from '../../components/Nav/Nav';
import Posts from '../../components/Posts/Posts';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [
            {
                'name':"Sally Rally",
                'post': "I am super excited about life",
                'likeCount':12


        },
            {
                'name':"Bill Rally",
                'post': "I am super sad about life",
                'likeCount':19

            },
            {
                'name':"Chris Rally",
                'post': "Suppppppp!",
                'likeCount':0

            }
        ]
    }
    }

    render(){
        return (
            <div>
                <Nav />
                <Posts posts={this.state.posts}/>
                <h1> Hello From Profile </h1>
            </div>
        )
    }
}

export default Profile
