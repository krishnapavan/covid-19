import React, { Component } from 'react';
import styles from './App.module.css';

import { Cards,Chart,CountryPicker} from './components'
import { fectchdata } from './api';
import image from './images/image.png';

class App extends Component{

    state={
        data:{},
        country:''
    }

    async componentDidMount() {
        const fetcheddata = await fectchdata();
        this.setState({data:fetcheddata})
    }
    

    handleCountryChange= async (country)=>{
        const fectchData = await fectchdata(country);
        this.setState({data:fectchData,country:country})

    }
    render(){
        
        return (
            
            <div className={styles.container}>
                
                <img className={styles.image} src={image} alt="COVID-19" />
                <Cards data ={this.state.data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/> 
                <Chart data={this.state.data} country={this.state.country}/>
                               

            </div>
        )
    }
}

export default App;
