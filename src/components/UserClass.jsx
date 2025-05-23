import React from 'react';
class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
           userInfo:{
            name:'Dummy',
            login:'Default',
            avatar_url:'htp://dummy-photo.com'
           }
        }
        // console.log(this.props.name + "Child Constructor called");
    }
    async componentDidMount(){
        // console.log(this.props.name + "Child ComponentDidMount called");
        const data = await fetch("https://api.github.com/users/coderror420");
        const response = await data.json();;
        console.log(response);    
        this.setState({
            userInfo:response,
        })    
    }
    componentDidUpdate(){
        console.log("component didupdate called");  
    }
    componentWillUnmount(){
        console.log("component willunmount called");
    }
    render(){   
        console.log(this.props.name + "Child Render called");
        const {name,login,avatar_url} = this?.state?.userInfo;
        
        return (
            <div className="user-card">
                <img src={avatar_url}/>
                {/* <h1>Count: {this.state.count}</h1> */}

                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button> */}
                <h2>Name: {name}</h2>
                <h3>UserId: {login}</h3>

                {/* <h4>Contact: @akshaymarch7</h4> */}
            </div>
        )
    }
}
export default UserClass;