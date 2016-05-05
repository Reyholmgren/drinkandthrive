class Users extends React.Component{
  constructor(props){
    super(props);
    this.state={users: [], userForm: true, drinkList: false };
    this.submitUser= this.submitUser.bind(this);
    this.toggleUserForm= this.toggleUserForm.bind(this);
    this.drinkList = this.drinkList.bind(this);
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

  alcoholCalculator(){
    alert('CHECK THIS OUT');

  }

  drinkList(){
    this.setState({ drinkList: !this.state.drinkList})
  }

  showDrinkList(){
    if (this.state.drinkList){
    return(
          <div className="col s1 offset-s5 grey draken-2 center z-depth-3">
            <ul>
              <li>Alabama Slammer - 2 Drinks
              </li>
              <li>Bloody Mary - 1 Drink
              </li>
              <li>Cosmopolitan  - 1 Drink
              </li>
              <li>Long Island - 2 Drinks
              </li>
              <li>Mai Tai - 1 Drink
              </li>
              <li>Margarita - 1 Drink
              </li>
              <li>Mojito  - 2 Drinks
              </li>
              <li>Sangria - 3 Drinks
              </li>
              <li>Sex on the Beach  - 1 Drink
              </li>
              <li>White Russian - 2 Drinks
              </li>
            </ul>
          </div>
              );
    }
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
    return(<div>
              <div>
              <div className='row '>
                <div className="col s10 offset-s1 l6 offset-l3 grey draken-2 center z-depth-3">
                  <form className= "center" onSubmit= {this.submitUser}>
                  <br/>
                    <input id='user_name' placeholder= 'Your name (optional)' ref= "name" />
                    <br/>
                    <input id='user_gender' placeholder = 'Gender (male or female)' ref = "gender" />
                    <br/>
                    <input id='user_weight' placeholder = 'Weight (in pounds)' ref = "weight" />
                    <br/>
                    <button id='user_info_submit' type = 'submit' className= "btn">
                    Start Drinking!
                    </button>
                    <p className= "center"> *By continuing on you agree that you are over 21 and that you will drink responsibly* </p>
                     <p className= "center"> *This is for entertainment purposes only* </p>
                  </form>  
                </div>
                </div>
              </div>
            </div>);      
    }else{
      return(
          <div className='center-align container'>
            <button onClick={this.drinkList} className= 'btn'>
              Common Drink Info.
            </button>
              {this.showDrinkList()}
          </div>
        )
    }
  }



  render(){
        return(
          <div>
          {this.addUserForm()}
          </div>);
  }





}