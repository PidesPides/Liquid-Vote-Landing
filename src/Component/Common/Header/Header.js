import React, {Component}  from 'react';
import {Offcanvas, Nav} from 'react-bootstrap';
import Scroll from 'react-scroll';
import {AiOutlineMenu} from "react-icons/ai";


//NO OFFCANVAS FAZER MENU EM QUE VAI PARA CADA UMA DAS SECCOES
//MENU COM CADA UMA DAS CARDS(fazer link!!!!) -> FAZ JUMP PARA CADA UMA DELAS COM "ANIMAÇÃO"
//
function Header(){
    return(
        <div className="header-background">   
            <div className="header-title">
                <h2> Liquid Vote </h2>
            </div>
        </div>  
    );
}
export default Header;