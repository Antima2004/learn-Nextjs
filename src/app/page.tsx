import Link from "next/link";

export default function Home(){
    return (
      <>
    <h1>Home page!</h1>
    <Link href="/blog">Blog</Link>
     <Link href="/products">Products</Link>
      <Link href="articles/breaaking-news-123?lang=en">Read in English</Link>
      <Link href="articles/breaaking-news-123?lang=fr">Read in french</Link>
    </>
    );
}