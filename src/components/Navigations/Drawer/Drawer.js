import React, {Component} from "react";
import './Drawer.css'
import BackDrop from "../../UI/BackDrop/BackDrop";

const Links = [1,2,3]

class Drawer extends Component  {

    renderList = () => {
        return Links.map((link, index) => {
            return (
                <li key={index}>
                    <a>Link {link}</a>
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