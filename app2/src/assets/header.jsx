import { Nav } from "./navBar";
import './header.css'

export function Header() {
  return (
    <>
      <header>
        <div className="part1">
          <h1 className="logo">XANDR</h1>
        </div>
        <Nav />
        </header>
    </>
  );
}
