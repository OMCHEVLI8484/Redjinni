<template >
    <div class="menubar">
        <div class="logo">
            <img src="../assets/logo.jpg" alt="">
        </div>
        <div class="menu">
            <ul>
                <li> <a href="#">HOME</a></li>
                <li> <a href="#">WHO WE ARE</a></li>
                <li> <a href="#">SERVICES</a></li>
                <li>
                    <router-link to="/contactus" class="views">Contact-Us</router-link>
                </li>
            </ul>
        </div>
    </div>
    <div class="contact-us">
        <div class="col5">
            <h1 class="reach">Reach us</h1>
            <h3 class="ads">There's never been a better time to be in adverting.</h3>
            <div class="line2">
                <div class="col25">
                    <h2 class="like">What would you like to talk about today?</h2>
                </div>
                <div class="col25">
                    <form class="flex">
                        <select name="" id="" class="text">
                            <option value="" disabled selected>Select one option</option>
                            <option value="markting"> Digital Marketing</option>
                            <option value="consultancy">Consultancy</option>
                        </select>
                        <input type="text" class="text" placeholder="NAME">
                        <input type="email" class="text" placeholder="EMAIL">
                        <input type="telephone" class="text" placeholder="PHONE NUMBER">
                        <textarea cols="20" rows="15" class="text1" placeholder="MESSAGE"></textarea>
                        <button class="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col5">
            <img src="../assets/phone.png" alt="">
            <h2 class="free">Schedule a free consultation with our genius team and get ideas which makes your brand
                glow like a star. It's much easier to double your business by doubling your conversion rate then
                by doubling your traffic
            </h2>
        </div>
    </div>
    <div class="location">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1358602750643!2d72.75752791424746!3d21.14699088910896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04c2ce45738cd%3A0x2995c9ae54073ee1!2sRedjinni.com!5e0!3m2!1sen!2sin!4v1665204002315!5m2!1sen!2sin"
            width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
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
    name: "ContactUs"
}
</script>
<style >
.location {
    margin: 30px 5px;
}
</style>