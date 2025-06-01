export default function HomePage() {
    return (
        <div className="home-page">
            <header className="hero">
                <section className="hero-item hero-bg h-one">
                    <div className="bg-year">
                        <p>2025</p>
                        <sub className="line"></sub>
                    </div>
                    <div className="bg-one"></div>
                </section>
                <section className="hero-item hero-txt h-two">
                    <h1>Design your <br /> dream space</h1>
                    <p>
                        We believe that a well-designed space can have a profound effect on your lifestyle and well-being. <br /> Our skilled interior designers are dedicated to turning your vision into a reality.
                    </p>
                    <div className="btns">
                        <button className="st-btn">Start a Project</button>
                        <button>view recent work</button>
                    </div>
                </section>
                <section className="hero-item hero-txt h-tres">
                    <div className="h-extra extra-one">
                        <ul>
                            <li className="play-btn"><ion-icon name="play"></ion-icon></li>
                            <li>watch video</li>
                        </ul>
                    </div>
                    <div className="h-extra extra-two">
                        <ul>
                            <li className="h-big">100+</li>
                            <li>successful projects</li>
                        </ul>
                    </div>
                    <div className="h-extra extra-tres">
                        <ul>
                            <li className="h-big">97%</li>
                            <li>clients satisfaction</li>
                        </ul>
                    </div>
                </section>
                <section className="hero-item h-four"></section>
            </header>
        </div>
    )
}