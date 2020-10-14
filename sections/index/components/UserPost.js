const UserPost = (props) => (
    <div className='post'>
        <h3 className='subtitle users-title'>{props.title}</h3>
        <hr></hr>
        <div className='subtext users-text'>{props.body}</div>
        <style jsx>{`
            .post {
                margin: 20px;
                padding: 10px;
                width: 40%;
                height: 200px;
                text-align: center;
                
                border-radius: 27px 27px 27px 27px;
            }

            .users-title {
                margin-bottom: 8px;
              }

            .users-text {
                margin-top: 10px
            }
            
            .body {                
                text-align: center;
            }
            
            @media screen and (max-width: 1024px) {
                .users-title {
                    font-size: 1.5rem;
                  }
            }
        `}
    </style>
    </div>
    
)

export default UserPost