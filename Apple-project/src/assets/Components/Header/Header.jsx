import React from 'react'
import Applelogo from "../../../../public/icons/logo.png"
import Cart from "../../../../public/icons/cart.png"
import SearchIcon from "../../../../public/icons/search-icon.png"


function Header() {
  return (
    <div>
      <header className="header-wrapper">
			<div className="internal-wrapper"> 
				<div className="header-links-wrapper">
					<ul>
						<li className="logo-link"><a href="/"><img src={Applelogo} /></a></li>
						<li><a href="/mac/">Mac</a></li>
						<li><a href="#">iphone</a></li>
						<li><a href="#">ipad</a></li>
						<li><a href="#">watch</a></li>
						<li><a href="#">tv</a></li>
						<li><a href="#">Music</a></li>
						<li><a href="#">Support</a></li>
						<li className="search-link"><a href="/search/"><img src={Cart} /></a></li>
						<li className="cart-link"><a  href="/cart/"><img src={SearchIcon} /></a></li>
					</ul>					
				</div>
			</div>
		</header>
    </div>
  )
}

export default Header
