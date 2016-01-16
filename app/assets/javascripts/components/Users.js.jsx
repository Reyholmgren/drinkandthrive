class Users extends React.Component{
  constructor(props){
    super(props);
    this.state={users: [], userForm: true};
    this.submitUser= this.submitUser.bind(this);
    this.toggleUserForm= this.toggleUserForm.bind(this);
  }

  componentDidMount(){
    $.ajax({
      url: "/users",
      type: "GET"
    }).success( data => {
      this.setState({users: data.users});
    });
  }

  toggleUserForm(){

    this.setState({ userForm: !this.state.userForm });
  }
  submitUser(e){
    e.preventDefault();
    $.ajax({
      url: "/users/" + this.props.current_user.id,
      type: "PUT",
      data: {id: this.props.current_user.id, user: { name: this.refs.name.value, gender: this.refs.gender.value, weight: this.refs.weight.value}}
    }).success(data => {
      let users = this.state.users;
      users.push(data.user);
      this.refs.name.value = null;
      this.refs.gender.value = null;
      this.refs.weight.value = null;
      this.setState({users: users, userForm: false});
      {this.toggleUserForm};
    });
  }

  addUserForm(){
    if (this.state.userForm)
    {
    return( <div className='container'>
              <form  onSubmit= {this.submitUser}>
                <input placeholder= "Your name" ref= "name" />
                <input placeholder = "Gender" ref = "gender" />
                <input placeholder = "Weight in pounds" ref = "weight" />
                <button type = 'submit' className= "btn">
                Start Drinking!
                </button>
                <p> *By continuing on you agree that you are over 21 and that you will drink responsibly* </p>
              </form>
            
            </div>);      
    }
  }



  render(){
        return(
          <div>
          {this.addUserForm()}
          </div>);
  }





}