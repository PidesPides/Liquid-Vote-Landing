import React, {Component} from 'react';
import {Button, Offcanvas} from 'react-bootstrap';
import { AiOutlineMenu } from "react-icons/ai";


//NO OFFCANVAS FAZER MENU EM QUE VAI PARA CADA UMA DAS SECCOES

class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            show: false
        }
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow(e){
        this.setState({show: !this.state.show})
    }

    handleClose(e){
        this.setState({show: !this.state.show})
    }

    menu(){
        return (
            <>
            <AiOutlineMenu size={40} color={"#0fded5"} onClick={this.handleShow} />

            <Offcanvas id="offcanvas-spec" show={this.state.show} onHide={this.handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body  styles={{backgroundColor: "#0fded5"}}>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body>
            </Offcanvas>
            </>  
        );
    }
    

    render(){
        return(
            <div className="card-background">   
                {this.menu()}
                <div className="header-title">
                    <h2> Liquid Vote </h2>
                </div>
            </div>
            
        );
    }
}
export default Header;