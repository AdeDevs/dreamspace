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
            <main className="home-main">
                <section className="creating">
                    <h1>Creating Environments <br /> Tailored to You</h1>
                    <div className="create-item c-item1">
                        <div className="create-txt">
                            <h2>Commercial Design</h2>
                            <p>
                                Impress clients and boost productivity with our <br /> innovative commercial design solutions.
                            </p>
                        </div>
                        <div className="create-img c-img1"></div>
                    </div>
                    <div className="create-item c-item2">
                        <div className="create-txt">
                            <h2>Residential Design</h2>
                            <p>
                                From living rooms to bedrooms, kitchens to bathrooms, <br /> we'll curate designs that resonate with your style.
                            </p>
                        </div>
                        <div className="create-img c-img2"></div>
                    </div>
                    <div className="create-item c-item3">
                        <div className="create-txt">
                            <h2>Interior Styling</h2>
                            <p>
                                Our team will breathe life into your existing decor, <br /> making subtle yet impactful changes.
                            </p>
                        </div>
                        <div className="create-img c-img3"></div>
                    </div>
                </section>
            </main>
        </div>
    )
}