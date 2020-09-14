import Link from 'next/link'

const Navigation = () => {
    return (
        <section>
            <nav>
                <img src="/logo.png" alt=""/>
                <ul>
                    <li>
                        <Link href="/About">
                            <a>ABOUT</a></li>
                        </Link>
                    </li>
                    <li>
                        <Link href="HOWTO">
                        <a>HOW TO</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                        </Link>
                    </li>
                    <li><a href="">FAQS</a>
                </ul>
                <button className="btn">CONTACT US</button>
            </nav>
            <h1>Your awesome <br/> traffic permit <br/> consultant.</h1>
            <button id="btnGet" className="btn">GET STARTED</button>
            
            <style jsx>{`
            section{
                background: url("/Scene.png");
                padding-top: 50px;
                height; 100vh
            }
            nav{
                display: flex;
                justify-content: space-around;
            }
            nav ul{
                display: flex;
                list-style: none;
                
            }
            nav ul li a{
                text-decoration: none;
                color: white;
                margin-right: 50px
            }
            h1{
                font-size: 7em;
                color: white;
                margin: 100px auto auto 10%;
                font-weight: 500;
            }
            .btn{
                background-color:#EE4D47;
                color: white;
                border-radius: 5px;
                padding: 10px 20px;
            }
            button:first-of-type{
                transform: translateX(40%);
            }
            #btnGet{
                margin-left: 5%;
                display: inline;
            }

        `}</style>
        </section>
        
       
            

        
      );
}
 
export default Navigation;