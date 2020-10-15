
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import UserPost from '../components/UserPost'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            mobile: false,
            posts: [],
            postsFiltrados: [],
            buscar: ''
        }
    }

    //Llamo a la funcion updatePosts cuando el componente se monta
    componentDidMount(){
        this.updatePosts()
    }

    onChange = e =>{
        this.setState({buscar: e.target.value})
        if(e.target.value.length < 3){
            this.setState({postsFiltrados: this.state.posts})
            return
        } 
        let a = this.state.posts.filter(post=>{
            return post.title.toLowerCase().includes(this.state.buscar.toLowerCase())
        })
        console.log(a)
        this.setState({postsFiltrados: a})
    }

    //Hago el pedido a la api para traer los post de los usuarios y los guardo en el estado
    updatePosts(){
        fetch('api/publicaciones-user')
            .then( res => res.json())
            .then( data => {
                // console.log(data)
                data.map( post => {
                    //console.log(post)
                    const a = {
                        userId: post.userId
                    }
                    fetch('api/user-info',{
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(a)
                      })
                        .then( res => res.json())
                        .then( user => {
                            //console.log(user.userInfo)
                            post.usuario = user.userInfo;
                        })
                    })
                this.setState({posts: data})
                this.setState({postsFiltrados: data})
                console.log(this.state.posts)
            })
    }

    render() {
        return(
            <section className='users-section' id='users'>
                <h2 className='section-title'>Usuarios</h2>
                <div className='section-title'>
                    <input type="text" name="buscador" placeholder="Buscar..." onChange={this.onChange}></input>
                </div>
                <div className="userposts-container">
                    {this.state.postsFiltrados.map((post, i)=>
                        <UserPost
                          key={i}
                          title={post.title}
                          body={post.body} 
                          username={post.usuario.username}
                          name={post.usuario.name}
                          email={post.usuario.email}
                        />
                    )}
                </div>

                <style jsx>{`
                    .users-section {
                        display: flex;
                        flex-wrap: wrap;
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
                            width: 100%;
                            
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