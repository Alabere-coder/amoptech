
import Link from 'next/link';

const NavLinks = () => {
  return (
    <div>
      <div>
        <ul className="nav__list">
          <Link href="/"><li className="link">Repaire Phone</li></Link>
          <Link href="/"><li className="link">Sell Phone</li></Link>
          <Link href="/"><li className="link">Buy Phone</li></Link>
          <Link href="/"><li className="link">Articles</li></Link>
          <Link href="/"><li className="link">About us</li></Link>
          <Link href="/"><li className="link">Terms & Condition</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default NavLinks