import React, { Component } from 'react';
import '../styles/buttons.css';

export default class buttons extends Component {
    render() {
        function clickMe(){

            let messages=['Hey!','Stop Touching Me!',
             'Come on now I know I am made of buttons but wtf man!',
              'hey stop!', 
              'okay no dont do that!', 'Oh that actually felt good.'];
           
           
            alert(messages[Math.floor(Math.random() * messages.length)]);
       
        }
        return (
            <div className="buttonMan">
                <h1> Button Man </h1>
               <div className="buttonCharacter">
                <button onClick={clickMe}  className="Man buttonHead"         >Button</button>
                <button onClick={clickMe}  className="Man buttonChest"        >Button</button>
                <button onClick={clickMe}  className="Man buttonLeftUpperArm" >Button</button>
                <button onClick={clickMe}  className="Man buttonLeftLowerArm ">Button</button>
                <button onClick={clickMe}  className="Man buttonLeftHand     ">Button</button>
                <button onClick={clickMe}  className="Man buttonRightUpperArm">Button</button>
                <button onClick={clickMe}  className="Man buttonRightLowerArm">Button</button>
                <button onClick={clickMe}  className="Man buttonRightHand">button</button>
                <button onClick={clickMe}  className="Man buttonTorso">button</button>
                <button onClick={clickMe}  className="Man buttonWaist">button</button>
                <button onClick={clickMe}  className="Man buttonLeftThigh">button</button>
                <button onClick={clickMe}  className="Man buttonRightThigh">button</button>
                <button onClick={clickMe}  className="Man buttonLeftKnee">button</button>
                <button onClick={clickMe}  className="Man buttonRightKnee">button</button>
                <button onClick={clickMe}  className="Man buttonLeftShin">button</button>
                <button onClick={clickMe}  className="Man buttonRightShin">button</button>
                <button onClick={clickMe}  className="Man buttonLeftFoot">button</button>
                <button onClick={clickMe}  className="Man buttonRightFoot">button</button>
                  </div>

            </div>
           
        )
    }
}
