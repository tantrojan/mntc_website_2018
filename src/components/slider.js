import React, { Component } from 'react';
import './css/slider.css';

class Slider extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            activeImage : 0
        }
    }
    componentDidMount(){
        this.myInterval = setInterval(()=>{
            if(this.state.activeImage<this.slideImages.length-1)
            {
                this.setState({
                    activeImage : this.state.activeImage + 1
                });
            }
            else{
                this.setState({
                    activeImage : 0
                });
            }
            console.log(this.state.activeImage);
        },5000);
    }
    componentWillUnmount(){
        clearInterval(this.myInterval);
    }
    componentWillMount(){
        this.slideImages=this.props.images;
    }
    render(){
        return (
                <div className="event-slider">
    
                    <div className='slider-image'>
                        <img src={this.slideImages[this.state.activeImage].src}/>
                    </div>
                    <div className='slider-toggler'>
                    {                        
                        this.slideImages.map((item,index)=>(    
                                <div className={'image-button ' + ((this.slideImages[this.state.activeImage].src  === item.src)?'active':'')} key={index} onClick={(e) => { e.preventDefault(); this.setState({ activeImage : index }) }}>
                                    <img src={item.src} width="100"/>
                                </div>
                        ))
                    }
                    </div>
                </div>
        )
    }
}

export default Slider;