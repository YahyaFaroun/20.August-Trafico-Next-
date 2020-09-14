import Link from 'next/link'

const Hero = () => {
    return (
        <div id="hero">
            <nav>
                <div className="logo">
                    <Link href="/">
                        <img src="/logo.png" alt="" />
                    </Link>
                </div>
                <ul>
                    <li><a href="#about">About</a>  </li>
                    <li><a href="#howTo">How To</a></li>
                    <li>
                        <Link href="/faq">
                            <a>Faqs</a>
                        </Link>
                    </li>
                    <li><a href="">Contact Us</a></li>
                </ul>

            </nav>
            <h1>
                Your awesome <br /> traffic permit <br /> consultant.
                </h1>
            <button>Get started</button>
            <style jsx>{
                `
                #hero{
                    height:100vh;
                    background:url(/Scene.png) center/cover no-repeat;
                    position:relative
                }
                nav{
                    display:flex;
                    justify-content:space-around;
                }
                ul{
                    display:flex;
                    list-style:none
                }
                li{
                    margin-left:20px
                }
                h1{
                    position:absolute;
                    top:30%;
                    left:20%;
                    transform:translateX(-50%);
                    color:#fff;
                    font-size:4em
                }
                button{
                    position:absolute;
                    top:60%;
                    left:20%;
                    transform:translateX(-50%);
                    font-size:2em
                }
                `
            }
            </style>
        </div>
    );
}

export default Hero;