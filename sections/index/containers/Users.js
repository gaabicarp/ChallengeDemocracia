
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import UserPost from '../components/UserPost'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile: false,
            posts: []
        }
    }

    componentDidMount(){
        this.updatePosts()
    }

    updatePosts(){
        const apiUrl = 'api/publicaciones-user'
        fetch(apiUrl)
            .then( res => res.json())
            .then( data => {
                console.log(data);
                this.setState({posts: data})
            })
    }

    render() {
        return(
            <section className='users-section' id='users'>
                <h2 className='section-title'>Usuarios</h2>
                <div className="userposts-container">
                    {this.state.posts.map((post, i)=>
                        <UserPost
                            key={i}
                            title={post.title}
                            body={post.body} />
                    )}
                </div>

                <style jsx>{`
                    .users-section {
                        display: flex;
                        flex-wrap: wrap;
                        padding-bottom: 85px;
                        overflow-x: hidden;
                    }
                    .userposts-container {
                        margin-top: 43px;
                        width: 100%
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        align-items: center;

                    }

                    @media (max-width:1024px){
                        .users-section {
                            padding-bottom: 42px;
                        }
                        .userposts-container {
                            margin: 24px 0 33px;
                            display: block;
                            overflow: hidden;
                            width: 100%;
                            height: 229px;
                        }
                    }
                    @media (max-width: 475px) {
                        .users-section {
                          padding-right: 0px;
                          padding-bottom: 42px;
                        }
                        .userposts-container {
                          margin-right: -24px;
                        }
                      }

                `}
                </style>
            </section>
        )
    }
}

export default Users