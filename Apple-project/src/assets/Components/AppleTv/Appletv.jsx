import React from 'react'
import  WatchSerious from "../../../../public/icons/watch-serious5-logo.png"
import AppleCard from "../../../../public/icons/apple-card-logo.png"
function Appletv() {
  return (
    <div>
      <section classname="fourth-heghlight-wrapper">
			<div classname="left-side-wrapper">
				<div classname="top-logo-wrapper">
					<div classname="logo-wrapper">
						<img src={WatchSerious} />
					</div>
				</div>
				<div classname="description-wraper">
					With the new Always-On Retina display.<br />
					You’ve never seen a watch like this.
				</div>
				<div classname="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>
			<div classname="right-side-wrapper">
				<div classname="top-logo-wrapper">
					<div classname="logo-wrapper">
						<img src={AppleCard} />
					</div>
				</div>
				<div classname="description-wraper">
					Get 3% Daily Cash on purchases from Apple using Apple Card.
				</div>
				<div classname="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>
    </div>
  )
}

export default Appletv
