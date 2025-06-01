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
                <section className="unveiling">
                    <h1>Unveiling The <br /> Extraordinary</h1>
                    <div className="services">
                        <div className="service-item s-item1">
                            <h2>design expertise</h2>
                            <p>With a diverse portfolio of successful projects, <br /> we possess the expertise to handle a wide <br /> range of design challenges</p>
                        </div>
                        <div className="service-item s-item2">
                            <h2>client-centric approach</h2>
                            <p>Your satisfaction is our priotity. We collaborate <br /> closely with you, ensuring your preferences <br /> and needs are integrated seamlessly</p>
                        </div>
                        <div className="service-item s-item3"></div>
                        <div className="service-item s-item4">
                            <h2>innovative solutions</h2>
                            <p>We're committed to staying ahead of design <br /> trends and technology. Our designs combine <br /> timeless elegance.</p>
                        </div>
                        <div className="service-item s-item5">
                            <h2>tailored budgeting</h2>
                            <p>We understand that every project comes with <br /> a unique budget. Our transparent pricing <br /> ensures that you receive the best</p>
                        </div>
                    </div>
                </section>
                <section className="portfolio">
                    <div className="p-head">
                        <h1>where dreams <br /> take shape</h1>
                        <p>
                            Explore our portfolio to witness the magic we've created for our clients. From minimalistic chics to opulent luxury, we've turned dreams into stunning reality.
                        </p>
                    </div>
                    <div className="projects">
                        <div className="project">
                            <div className="p-img p-img1"></div>
                            <h2>contemporary chic apartment</h2>
                            <p>
                                In this project, we were entrusted with the task of turning a mundane urban apartment into a contemporary oasis. We embraced clean lines, subtle colors palettes, and strategic...
                            </p>
                            <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                        <div className="project">
                            <div className="p-img p-img2"></div>
                            <h2>Rustic retreat in the suburbs</h2>
                            <p>
                                Nestled in the heart of nature, this project allowed us to embrace the rustic charm of the countryside while infusing it with a touch of modern comfort. By using natural materials...
                            </p>
                            <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                        <div className="project">
                            <div className="p-img p-img3"></div>
                            <h2>minimalist serenity spa</h2>
                            <p>
                                Our expertise isn't limited to residential spaces; we also excel in commercial design. The Minimalist Serenity Spa project exemplifies our ability to create a serene ambiance that fosters relaxation...
                            </p>
                            <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                        <div className="project">
                            <div className="p-img p-img4"></div>
                            <h2>timeless elegance in a classic home</h2>
                            <p>
                                Preserving the classic charm of a heritage home while infusing it with modern functionalites is an art form we excel in. The Timeless Elegance project was a journey through history and time...
                            </p>
                            <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                    </div>
                    <button className="work-btn">view all works <span><ion-icon name="arrow-forward-outline"></ion-icon></span></button>
                </section>
                {/* <section className="reviews">
                    <h1>Don't just take our <br /> word for it</h1>
                    <div className="review-img">
                        <div className="r-avt"></div>
                        <div className="r-avt"></div>
                        <div className="r-avt"></div>
                    </div>
                    <div className="testimonials">
                        <h2></h2>
                        <p></p>
                        <ul className="stars">
                            <li><ion-icon name="star"></ion-icon></li>
                            <li><ion-icon name="star"></ion-icon></li>
                            <li><ion-icon name="star"></ion-icon></li>
                            <li><ion-icon name="star"></ion-icon></li>
                            <li><ion-icon name="star"></ion-icon></li>
                        </ul>
                        <p></p>
                        <ul className="controller">
                            <li className="nav-btn"><ion-icon name="arrow-back"></ion-icon></li>
                            <li className="nav-selector nav-special"></li>
                            <li className="nav-selector"></li>
                            <li className="nav-selector"></li>
                            <li className="nav-btn"><ion-icon name="arrow-forward"></ion-icon></li>
                        </ul>
                    </div>
                </section> */}
            </main>
        </div>
    )
}