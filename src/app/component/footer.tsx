import Link from "next/link"
export default function Footer(){
    return(
      <div className="footer">
        <ul className="footer-button">
          <Link href="Help Center"> 
          <li>Help Center</li>
          </Link>
          <Link href="/Our_Team">
          <li>Our Team</li>
          </Link>
          <Link href="/Timings">
          <li>Timings</li>
          </Link>
          <Link href="/Adress">
          <li>Adress</li>
          </Link>
          <Link href="/OverView">
          <li>OverView</li>
          </Link>        
        </ul>
      </div>
    )
  } 