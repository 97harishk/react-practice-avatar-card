import React,{Component} from 'react';
import reactDom from 'react-dom';
import Avatarlist from './Avatarlist';
import './Avatar.css';
import 'tachyons';
class Avatar extends Component{
        constructor(){
            super();
            this.state = {
                name: "Welcome to Avatar World!"
            }
            
        }
        namechange(){
            this.setState({
                name: "Subscribe to my first page"
            })
        }
    render(){
        const AvatarListArray = [
            {
                id: 1,
                name:"Harish Kumar",
                work:"Full Stack"
            },
            {
                id: 2,
                name:"Amit Kumar",
                work:"Backend"
            },
            {
                id: 3,
                name:"Vishal Kumar",
                work:"Front End"
            },
            {
                id: 4,
                name:"Anish Kumar",
                work:"Full Stack"
            }
        ]
        const AvatarCard = AvatarListArray.map( (avatarcard, i) =>{
            return (
                <Avatarlist id={avatarcard.id} name={avatarcard.name} work={avatarcard.work} />
            )
        })
        return   (
            <div className="main-page">
                <h1>{this.state.name}</h1>
                    {AvatarCard}
                 <button onClick={ () => this.namechange() }>Subscribe</button>
            </div>
        )
    }
}


export default Avatar;