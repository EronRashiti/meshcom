import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import DotsBtn from '../Assets/dots_btn.svg'

function Showandhide() {
    const [show1, setShow1]=useState(false)
    const [show2, setShow2]=useState(false)
    const [show3, setShow3]=useState(false)
    const [show4, setShow4]=useState(false)
    const [show5, setShow5]=useState(false)
    const [show6, setShow6]=useState(false)
    
    return (
        <div>
            <div className="elements-show">
                <button onClick={()=>setShow1(!show1)} className="elements">
                    <h1 id="elements-title">IT Service</h1>
                    <button className="show-btn" onClick={()=>setShow1(!show1)}><img src={DotsBtn}></img></button>
                </button>
                {
                    show1? <p id="elements-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. <br/>
                    <br/>
                    Est ultricies integer quis auctor elit sed.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.</p>:null
                }
            </div>

            <div className="elements-show">
                <button onClick={()=>setShow2(!show2)} className="elements">
                    <h1 id="elements-title">Web Design</h1>
                    <button className="show-btn" onClick={()=>setShow2(!show2)}><img src={DotsBtn}></img></button>
                </button>
                {
                    show2? <h1 id="elements-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.</h1>:null
                }
            </div>

            <div className="elements-show">
                <button onClick={()=>setShow3(!show3)} className="elements">
                    <h1 id="elements-title">Web Development</h1>
                    <button className="show-btn" onClick={()=>setShow3(!show3)}><img src={DotsBtn}></img></button>
                </button>
                {
                   show3? <h1 id="elements-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.</h1>:null
                }
            </div>

            <div className="elements-show">
                <button onClick={()=>setShow4(!show4)} className="elements">
                    <h1 id="elements-title">APP Development</h1>
                    <button className="show-btn" onClick={()=>setShow4(!show4)}><img src={DotsBtn}></img></button>
                </button>
                {
                    show4? <h1 id="elements-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.</h1>:null
                }
            </div>
            
            <div className="elements-show">
                <button onClick={()=>setShow5(!show5)} className="elements">
                    <h1 id="elements-title">Graphic Design</h1>
                    <button className="show-btn" onClick={()=>setShow5(!show5)}><img src={DotsBtn}></img></button>
                </button>
                {
                    show5? <h1 id="elements-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.</h1>:null
                }
            </div>

            <div className="elements-show">
                <button onClick={()=>setShow6(!show6)} className="elements">
                    <h1 id="elements-title">UI/UX Design</h1>
                    <button className="show-btn" onClick={()=>setShow6(!show6)}><img src={DotsBtn}></img></button>
                </button>
                {
                    show6? <h1 id="elements-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Egestas sed tempus urna et pharetra. Est ultricies integer quis auctor elit sed.</h1>:null
                }
            </div>

        </div>
    )
}

export default Showandhide;
