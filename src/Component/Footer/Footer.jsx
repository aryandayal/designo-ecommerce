import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = ()=> {
    return(
        <footer>
<div class="footer">
<div class="row">
<Link to="https://github.com/aryandayal" ><i class="fa fa-github"></i></Link>
<Link to="https://in.linkedin.com/in/aryandayal" ><i class="fa fa-linkedin"></i></Link>
<Link to="https://www.instagram.com/code_with_aryan/" ><i class="fa fa-instagram"></i></Link>
<Link to="https://twitter.com/rndayal" ><i class="fa fa-twitter"></i></Link>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
</ul>
</div>

<div class="row">
Designo Copyright © 2023 - All rights reserved || Designed By: Aryan Dayal
</div>
</div>
</footer>
    )
}

export {Footer};