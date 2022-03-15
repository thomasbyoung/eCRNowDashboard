import React from 'react'

class Status extends React.Component {
    constructor() {
        super();
        this.state = {
            backend: '',
            frontend: '',
            time: ''
        }
    }   


    

    componentDidMount() {
        fetch('http://172.17.50.135:5000/api/check', {
            //mode: "no-cors",
            method: "GET",
            headers: {
            "Accept": "application/json"
            }
        })
        .then((res) => res.json() )
        .then((data) => {
            this.setState({
                backend: data[0].backend.toString(),
                frontend: data[0].frontend.toString(),
                time: data[0].time.toString()

            }) 
            console.log(data[0].time)

        })
        .catch(error => {
            return error;
        });
    }


    render(){
        return (
            <div>
                <h2>Localhost:8981 status: {this.state.backend}</h2>
                <p>Time: {this.state.time}</p><button className="btn btn-primary">Start</button><button className="btn btn-danger">Shut Down</button>
                <h2>Localhost:3901 status: {this.state.frontend}</h2>
                <p>Time: {this.state.time}</p><button className="btn btn-primary">Start</button><button className="btn btn-danger">Shut Down</button>

            </div>
        )
    }

}

export default Status;