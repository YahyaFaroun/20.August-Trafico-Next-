
const About = () => {
    return (
        <section>
            How To
            <img src="/Scene.png.svg" alt="" />
            <style jsx>{`
                section{
                    height:50vh;
                    display:grid;
                    grid-template-columns:repeat(2,1fr);
                    padding:50px 10%
                }
            `}
            </style>
        </section>
    );
}
export default About;