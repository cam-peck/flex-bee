import React from "react";

export default function End() {
  return (
    <div className="flex column ac-c">
     <h1 className="font-c1 font-white">Thanks for visiting FlexBees!</h1>
     <h2 className="font-c1 font-white">There's a lot more to do and learn when it comes to layout but it means a lot to us for you to check us out.</h2>
     <div className="end-images">
        <img className="bee" src="/images/bee1.webp" />
        <img className="bee" src="/images/bee2.webp" />
        <img className="bee" src="/images/bee3.webp" />
     </div>
     <h2 className="font-c1 font-white">Check us out!</h2>
     <div className="full flex jc-c text-center">
       <div className="half">
          <h3 className="font-c1 font-white">Check out Brandon's GitHub</h3>
            <a className="link font-consolas" href="https://github.com/brandon-moy">
              brandon-moy
            </a>
          <h3 className="font-c1 font-white">Connect with Brandon on LinkedIn</h3>
          <a className="link font-consolas" href="https://www.linkedin.com/in/brandon-k-moy/">
            brandon-k-moy
          </a>
       </div>
       <div className="half">
          <h3 className="font-c1 font-white">Check out Cameron's GitHub</h3>
          <a className="link font-consolas" href="https://github.com/cam-peck">
            cam-peck
          </a>
          <h3 className="font-c1 font-white">Connect with Cameron on LinkedIn</h3>
          <a className="link font-consolas" href="https://www.linkedin.com/in/cameronjpeck/">
            cameronjpeck
          </a>
       </div>
     </div>
    </div>
  )
}
