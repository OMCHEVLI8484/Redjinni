<template>
    <div class="menubar">
        <div class="logo">
            <img src="../assets/logo.jpg" alt="">
        </div>
        <div class="menu">
            <ul>
                <li> <a href="#">HOME</a></li>
                <li> <a href="#">ABOUT US</a></li>
                <li> <a href="#">SERVICES</a></li>
                <li>
                    <router-link to="/contactus" class="views">Contact-Us</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="bg">
        <video autoplay muted loop>
            <source src="../assets/RJ_Digital1.mp4" type="video/mp4">
        </video>
    </div>
    <div class="redjinni">
        <div class="col51">
            <img src="../assets/redjinni.png" alt="">
        </div>
        <div class="col51">
            <div class="red">
                <h2 class="since"> <span>Since 2014</span></h2>
                <h2 class="since">Good is the Enemy of Great and we don't settle for Good things.
                    We create only Great opportunities.
                </h2>
                <div class="line">
                    <div class="redline"></div>
                    <p class="med">
                        Our Team Consists of Big Picture thinkers,
                        Crafty Creators, Distinguished Developers,
                        and Your Vision as the Canvas to Create an Aesthetic Piece of Art.

                    </p>
                </div>
                <p class="small">
                    With Actively Taken Feedback & by Leveraging Smart Frameworks
                    and data-driven insight with our Finest Services, We Provide our
                    Clients Incredibly Satisfying Work to Stand out from Crowd.
                </p>
            </div>
        </div>
    </div>
    <h2 class="offer">THE <span>[SERVICES]</span> WE'RE OFFERING</h2>
    <div class="services">
        <div class="col351">
            <div class="box">
                <img src="../assets/img1.png" alt="pic">
                <h2>Web development & UI/UX</h2>
                <h3>We develop website that User adore & interface that is and we understand what it takes to build a brand from the design perspective.</h3>
            </div>
            <div class="box">
                <img src="../assets/img2.png" alt="pic">
                <h2>Marketing Strategey</h2>
                <h3>Our Significant Strategy will benefit your company to achieve.our ultimate goal of a marketing strategy is to communicate a sustainable competitive advantages.</h3>
            </div>
        </div>
        <div class="col30">
            <div class="box2">
                <img src="../assets/img3.png" alt="pic">
                <h2>SEO</h2>
                <h3>SEO plays a crucial role if your business has a website. SEO stands for the practice of increasing the quantity and quality of traffic to your website through organic search engine results.</h3>
            </div>
            <div class="box2">
                <img src="../assets/img4.png" alt="pic">
                <h2>SMM</h2>
                <h3>we have an extraordinary range of avenues to connect with target audiences from content platforms and social sites to microblogging services.</h3>
            </div>
            <div class="box2">
                <img src="../assets/img5.png" alt="pic">
                <h2>brand marketing</h2>
                <h3>We build brand that customers indulge for and also We establishing and growing a relationship between a brand and consumers.</h3>
            </div>
        </div>
        <div class="col352">
            <div class="box">
                <img src="../assets/img6.png" alt="pic">
                <h2>CONTENT MARKETING & PUBLIC RELATION</h2>
                <h3>Content is a king and we are a king maker and also we build and maintain relationships with the public which is very important factor for us.</h3>
            </div>
            <div class="box">
                <img src="../assets/img7.png" alt="pic">
                <h2>CREATIVE AND WRITING</h2>
                <h3>Creatives on latest events in monetary with effective writing.We do creatively and attractive writing for targetting to audiences.</h3>
            </div>
        </div>
    </div>
    <div class="project">
        <h3 class="h3">OUR PROJECTS</h3>
        <h2 class="h2">Our Ongoing Projects</h2>
        <div class="button">
            <p class="para">By Leveraging Smart Frameworks and Data-driven Insights with our Finest services.
                We have created identities that Stand-out from Crowd. </p>
            <button class="view">VIEW ALL PROJCT</button>
        </div>
        <div class="cont">
            <div class="box5">
                <img src="../assets/restro.png" alt="pic" class="image">
                <h2>Restro World</h2>
            </div>
            <div class="box5">
                <img src="../assets/red.png" alt="pic">
                <h2>REDPRIX</h2>
            </div>
            <div class="box5">
                <img src="../assets/hrms.png" alt="pic">
                <h2>HRMS</h2>
            </div>
            <div class="box5">
                <img src="../assets/garba.png" alt="pic">
                <h2>GARBA JOCKY</h2>
            </div>
        </div>
    </div>
    <div class="client">
        <h2 class="what"> What Our <span> Clients </span> Say.</h2>
        <div class="say">
            <div class="box6">
                <div class="bordertop">
                    <img src="../assets/contact.png" alt="" class="cont-logo">
                </div>
                <img src="../assets/rate.png" alt="logo" class="rate">
                <h3>Very Good Staff, excellent execution of Sample, timely even before promised time</h3>
                <hr />
                <h3 class="customer">Bena sitapara</h3>
            </div>
            <div class="box6">
                <div class="bordertop">
                    <img src="../assets/contact.png" alt="" class="cont-logo">
                </div>
                <img src="../assets/rate.png" alt="logo" class="rate">
                <h3>The Home service was excellent,
                    medical Technican took samples at 7.00 am and returned at 9.30pm after
                    breakfast to take further samples.
                    The Results were sent By email at 6 pm. The experience was good.
                </h3>
                <hr />
                <h3 class="customer">Ami sharikar</h3>
            </div>
            <div class="box6">
                <div class="bordertop">
                    <img src="../assets/contact.png" alt="" class="cont-logo">
                </div>
                <img src="../assets/rate.png" alt="logo" class="rate">
                <h3>Morining given the sample in Ayanavaram branch to get the report by 12.30pm it's fast and efficient
                    delivery by Main and want to tell about the staff the are very professional and friendly definitely
                    i will recommand my friends
                </h3>
                <hr />
                <h3 class="customer">nayak hardik</h3>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <div class="footerimg">
            <img src="../assets/logo.jpg" alt="img">
            <h2>504, Luxuria Bussiness hub,
                Nr VR Mall,vesu,
                Surat,Gujrat 395007
            </h2>
            <div class="font">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>
        <div class="info">
            <div class="about-info">
                <div class="company">
                    <h2>Company</h2>
                    <router-link to="" class="link">About Us</router-link>
                    <router-link to="" class="link">Service</router-link>
                    <router-link to="" class="link">Our Mission</router-link>
                </div>
                <div class="company">
                    <h2>Service</h2>
                    <router-link to="" class="link">How We Work</router-link>
                    <router-link to="" class="link">Our Service</router-link>
                    <router-link to="" class="link">Contact Us</router-link>
                </div>
                <div class="company">
                    <h2>Quick Link</h2>
                    <router-link to="" class="link">Our Project</router-link>
                    <router-link to="" class="link">Privacy Policy</router-link>
                    <router-link to="" class="link">Contact Us</router-link>
                </div>
            </div>
            <div class="last">
                <div class="buttons">
                    <div class="width">
                        <button class="us">EMAIL US</button>
                        <input type="text">
                        <button class="us">SUBMIT</button>
                    </div>
                    <h5>SUBSCRIBE FOR OFFERS AND BLOGPOSTS.</h5>
                </div>
                <div class="copyright">
                    <h4>2022. All rights reserved</h4>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "MenuBar"
}
</script>
<style  scpoed>
.menubar {
    display: flex;
    height: 6vh;
    background-color: black;

}

.logo {
    width: 60%;
    height: 6vh;

}

.logo img {
    width: 12.8%;
    margin-left: 10%;
}

.menu {
    width: 40%;
    height: 6vh;

}

.menu ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6vh;

}

.menu ul li {

    list-style: none;
    color: white;
}

.views {
    border: none;
    background-color: red;
    width: 10%;
    font-weight: 600;
    cursor: pointer;
    padding: 4px;
    margin-right: 40px;
    border-radius: 5px;
}

.menu ul li a {
    color: white;

}

video {
    width: 100%;
    background-size: contain;
}

.redjinni {
    width: 100%;
    height: 90vh;
    display: flex;
}

.col51 {
    width: 50%;
    margin-top: 20px;
    background-color: #e1e1e1;
}

.col51 img {
    width: 66%;
    margin: 50px 100px;
}

.red {
    margin: 50px 0;
    margin-right: 150px;
}

.red .since span {
    color: #eb0e19;
    font-size: 1.5em;

}

.red .since {
    font-size: 1.4em;
    margin-top: 10px;
    width: 60%;
}

.line {
    display: flex;

}

.line .redline {
    background-color: #eb0e19;
    height: inherit;
    width: 3px;
    margin-right: 5px;
    margin-top: 10px;
}


.med {
    width: 70%;
    margin-top: 10px;
    font-size: 1.1em;
    color: rgb(18, 19, 18);
}

.small {
    margin-top: 10px;
    font-size: 1.1em;
    color: rgb(96, 97, 96);
}

.services {
    height: 100vh;
    display: flex;
}

.offer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

span {
    color: #eb0e19;
    font-size: 1.5rem;
}

.col351 {
    width: 34%;
    height: 95vh;

}

.col30 {
    width: 32%;
    height: 100vh;
}

.col352 {
    width: 34%;
    height: 95vh;

}

.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(201, 196, 196);
    width: 86%;
    height: 33%;
    margin-top: 80px;
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffff;
    border-radius: 4px;
}

.box h2 {
    font-size: 1.1em;
}

.box h3 {
    font-size: 1em;
    color: #4e4a4a;
}

.box2 h2 {
    font-size: 1.15em;
}

.box2 h3 {
    font-size: 1em;
    color: #4e4a4a;
}

.box2 {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(201, 196, 196);
    width: 90%;
    height: 26%;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ffff;
}

.box2 img {
    width: 20%;
}

.box img {
    width: 20%;
}

.project {
    height: 80vh;
    background-color: #e1e1e1;
}

.cont {
    display: flex;
}

.box5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(201, 196, 196);
    width: 70%;
    height: 35vh;
    margin-top: 60px;
    margin-left: 40px;
    background-color: #ffff;
    border-radius: 4px;
    z-index: 999;
}

.box5 img {
    width: 50%;
}
.box5 .image {
    width: 150px;
    height: 120px;
}

.project .h3 {
    padding-left: 90px;
    padding-top: 50px;
    padding-bottom: 15px;
    color: red;
    font-size: 1.2rem;
}

.project .h2 {
    padding-left: 86px;
    padding-bottom: 15px;
    font-size: 1.7rem;
}

.button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 35px;
}

.para {
    padding-left: 70px;
    font-size: 18px;
    width: 60%;
}

.view {
    border: 1px solid red;
    background-color: red;
    height: 4vh;
    width: 10%;
    font-weight: 400;
    cursor: pointer;
    color: #e1e1e1;
}

.client {
    height: 70vh;
}

.say {
    display: flex;
}

.box6 {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid rgb(201, 196, 196);
    width: 70%;
    height: 50vh;
    margin: 40px 30px;
    border-radius: 4px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px; 
}

.bordertop .cont-logo {
    width: 100%;
    height: 10vh;
    position: relative;
    bottom: 30px;
    background-color: white;
    border: 1px solid rgb(201, 196, 196);
    border-radius: 50%;
    padding: 5px 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.box6 h3 {
    font-size: 1em;
}


.rate {
    width: 25%;
    position: relative;
    bottom: 30px;
}

hr {
    width: 96%;
    color: black;
    position: absolute;
    bottom: 10%;

}

.customer {
    position: absolute;
    bottom: 2%;
}

.what {
    margin-top: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.contact-us {
    display: flex;
    height: 90vh;
    background-color: #e1e1e1;
}

.col5 {
    width: 50%;
    height: 80vh;
}

.col25 {
    width: 50%;
    height: 60vh;

}

.reach {
    padding-top: 70px;
    padding-left: 50px;
   
}

.ads {
    padding: 10px 50px;
    font-size: 1em;
}

.line2 {
    display: flex;
}

.flex {
    display: flex;
    flex-direction: column;
}

.text {
    height: 4vh;
    margin: 10px 0;
    border: none;
    padding: 0 10px;
}

input:focus {
    border: none;
    outline: none;
}

textarea:focus {
    border: none;
    outline: none;
}

.text1 {
    height: 12vh;
    margin: 10px 0;
    border: none;
    padding: 0 10px;
}

.submit {
    background-color: red;
    border: none;
    width: 50%;
    margin: 15px auto;
    height: 4vh;
    color: white;
    font-weight: 700;
    cursor: pointer;
}

.col5 img {
    width: 60%;
    margin-top: 100px;
    margin-bottom: 10px;
    margin-left: 110px;
}

.free {
    width: 60%;
    margin-bottom: 10px;
    margin-left: 110px;
    font-size: 1.02em;
    text-align: center;
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgb(0, 0, 0);
    height: 60vh;
    color: white;
}

.footerimg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 30%;
    height: 100%;
}

.footerimg img {
    width: 45%;
}

.footerimg h2 {
    width: 65%;
    margin-top: 40px;
}

.footerimg .font {
    margin-top: 40px;
}

.footerimg .font i {
    font-size: 45px;
    margin: 0 10px;
}

.info {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.about-info {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.about-info .company {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.about-info .company .link {
    color: white;
    padding: 6px 0;
}

.last {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 50px;
}

.last .buttons {
    width: 60%;
}

.last .buttons .width {
    width: 100%;
}

.last .buttons h5 {
    margin-top: 10px;
}

.last .buttons input {
    margin: 0 3px;
    height: 4vh;
    border: none;
    outline: none;
}

.last .buttons .us {
    background-color: red;
    border: none;
    width: 12%;
    height: 4vh;
    color: white;
    font-weight: 500;
    cursor: pointer;
    border-radius: 1px;
}

.last .buttons .us1 {
    background-color: red;
    border: none;
    width: 12%;
    height: 4vh;
    color: white;
    font-weight: 500;
    border-radius: 1px;
}
</style>