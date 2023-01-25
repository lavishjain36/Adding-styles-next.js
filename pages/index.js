import Link from "next/link";

function Home(){
  return(
    <div>
      <Link href="/about">
        <div>About</div>
      </Link>

      <Link href="/home">
        <div>Home</div>
      </Link>
      <Link href="/contact">
        <div>Contact</div>
      </Link>

      <p>Home Page</p>
    </div>
  )
}

export default Home;