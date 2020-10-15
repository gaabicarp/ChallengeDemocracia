const UserPost = (props) => (
    <div className='post'>
        <h3 className='subtitle users-title'>{props.title}</h3>
        <hr></hr>
        <div className='subtext users-text'>{props.body}</div>
        <div className='users-footer'>
            <div><b>{props.username}</b></div>
            <div><b>{props.email}</b></div>
        </div>
        <style jsx>{`
            .post {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin: 20px;
                padding: 10px;
                width: 40%;
                height: 30em;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 27px 27px 27px 27px;
            }

            .users-footer{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                padding-bottom: 1px;
            }

            .users-title {
                margin-bottom: 8px;
              }

            .users-text {
                margin-top: 5px;
            }
            
            .body {                
                text-align: center;
            }
            
            @media screen and (max-width: 1024px) {
                .users-title {
                    font-size: 1.5rem;
                  }

                .post{
                    margin: 2px;
                    
                  }
            }
        `}
    </style>
    </div>
    
)

export default UserPost