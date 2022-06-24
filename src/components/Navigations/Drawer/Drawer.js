import React, {Component} from "react";
import './Drawer.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom";

const Links = [
    {to: '/', label: 'Список', exact: 'true'},
    {to: '/auth', label: 'Авторизация', exact: 'false'},
    {to: '/quiz-creator', label: 'Создать тест', exact: 'false'},
]

class Drawer extends Component  {

    renderList = () => {
        return Links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeclassname='active'
                        onClick={this.props.onClose}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }



    render() {
        const cls = [
            'Drawer',
        ]
        if(!this.props.isOpen) {
            cls.push('close')
        }

        return (
           <>
               <nav className={cls.join(' ')}>
                   <ul>
                       {this.renderList()}
                   </ul>
               </nav>
               {this.props.isOpen? <BackDrop
                   onClick={this.props.onClose}
               /> : null}
           </>
        )
    }
}

export default Drawer;