import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Zach Taylor's Website</title>
                <meta name="description" content="Welcome to my portfolio."/>
            </Head>
            <div id="navbar">
                <span>Zach Taylor</span>
            </div>
            <div id="container"> 
                <div id="top-section">
                    <img src="ZachHeadshot.png" id="prof-pic"/>
                    <h1>Hi, I'm Zach!<br/>Nice to meet you :)</h1>
                </div>
                    <div id="profile-description">
                        <p>
                        I'm a Senior at Claremont McKenna College studying Economics and Data Science. My passion is building tech solutions that make people's lives better.
                        </p>
                        <p>
                        I have previous Product Management experience at Gopuff, Rocket, Hireflow, and Parachute List. Check out my <a href="https://www.linkedin.com/in/zacharyroberttaylor/">LinkedIn</a> for more information.
                        </p>
                        <hr/>
                        <p>Some projects I've worked on</p>
                    </div>
            </div>
            <div id="horizontal-scroll-elements">
                        <div className="project-box">
                            <img src="CPR.png"/>
                            <h2>CPR Wristband</h2>
                            <p>As a volunteer ski patroller, part of my job was to respond to dangerous accidents. While few people have the medical knowledge to perform CPR correctly, immediate CPR can double or triple a person's chance of survival. My experience as a ski patroller inspired me to build a device that would teach anyone how to perform CPR correctly. The image above is a functional prototype that uses pressure sensors to provide live feedback.</p>
                        </div>
                    <a href="https://www.productspaceclaremont.com" className="BoxLink">
                        <div className="project-box">
                            <img src="ProductSpace.png"/>
                            <h2>Product Space</h2>
                            <p>Eda, Charles, Ciara, Allison, and I launched the Claremont Colleges' first holistic product management, design, and technology fellowship. <a href="https://www.productspaceclaremont.com/for-students">Product Space</a> empowers first and second year students to explore their interest in technology through skill-building workshops, career mentorship, and in-semester internship opportunities. Most importantly, Product Space gives students a community of fellow tech-enthusiasts. </p>
                        </div>
                    </a>
                    <a href="https://parachutelist.com" className="BoxLink">   
                        <div className="project-box">
                            <img src="Parachute.png"/>
                            <h2>Parachute List</h2>
                            <p>During the COVID pandemic, my colleagues and I at <a href="https://getrocket.com">Rocket</a> built a technology solution to help technology workers displaced by layoffs. <a href="https://parachutelist.com">Parachute</a> is a talent list used by Apple, Amazon, Coinbase, and many more to hire the best talent impacted by layoffs. Today, roughly 15,000 laid off folks have joined the site. I was closely involved in product development, band conceptualization, and product marketing. Check out our <a href="https://www.producthunt.com/posts/parachute-all-layoff-lists-together">Product Hunt</a> feature.</p>
                        </div>
                    </a>
                    <a href="https://hireflow.ai" className="BoxLink">
                        <div className="project-box">
                            <img src="Hireflow.png"/>
                            <h2>Hireflow</h2>
                            <p>While interning at <a href="https://getrocket.com">Rocket</a>, I worked closely with Rocket’s CPO to launch <a href="https://www.hireflow.ai">Hireflow</a>, an outbound recruiting platform. I was personally responsible for iterating the product’s FTUE and I shipped multiple product updates that reduced drop-off rates. I also worked with the product marketing team where I focused on building Hireflow's LinkedIn audience, partnering with VCs, and improving our marketing website.</p>
                        </div>
                    </a>
            </div>
            
        </>
    );
}
