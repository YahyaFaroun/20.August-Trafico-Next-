const HowTo = () => {
    return (
        <section id="howTo">
            <img src="" alt="" />
            How To

            <style jsx>{`
                section{
                    height:50vh;
                    display:grid;
                    grid-template-columns:repeat(2,1fr);
                    padding:50px 10%
                }
                img{
                    width:100%
                }
            `}

            </style>
        </section>
    );
}

export default HowTo;