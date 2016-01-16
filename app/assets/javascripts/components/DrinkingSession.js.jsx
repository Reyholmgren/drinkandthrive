class DrinkingSession extends React.Component{
  constructor(props){
    super(props);
    this.setState = {drinking_session: [] };
  }

  componentDidMount(){
    $.ajax({
      url: '/drinking_session',
      type: ''
    })
  }

}