<template>
    <div class="footer_info text-center">
        <div class="container">
             <div class="d-lg-flex d-block justify-content-between align-items-center">
                <div class="ftr_logo d-lg-flex order-1 d-inline-block">
                    <img src="../assets/img/footer-logo.png" />
                </div>     
                <div class="hdrSocial my-lg-0 my-3">
                    <ul>
                        <li v-for="socialIcon in socialIcons" :key="socialIcon">
                            <a href="#"><SocialIcon :iconClass="socialIcon.class" /></a>
                        </li>
                    </ul>
                </div>                       
                <div class="ftr_right d-lg-flex order-3">                        
                     <ul class="navbar-nav nav_format">
                        <li class="nav-item" v-for="hdrNav in hdrNavs" :key="hdrNav">
                             <a :href="hdrNav.navlink" class="nav-link p-lg-0"><Navigation :navigation="hdrNav.navItem" /></a>
                        </li>
                    </ul>
                </div>
             </div>
            <div class="ftr_btm mt-3 pt-4 d-md-flex justify-content-between align-items-center">
                <div class="copyright pb-md-0 pb-3">
                    <p>Copyright ©  2021 Company Name  |  All Rights Reserved</p>
                </div>
                <div>
                    <ul class="nav_format">
                        <li><a href="#">Terms & Conditions</a></li> 
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SocialIcon from '../components/SocialIcon.vue'
import Navigation from '../components/Navigation.vue'
export default {
    components:{
        SocialIcon, 
        Navigation,
    },
    data() {
        return {
            socialIcons: [
                {class: "fa-facebook-f"},
                {class: "fa-instagram"},
                {class: "fa-regular fa-envelope"},
                {class: "fa-whatsapp"},
            ],
             hdrNavs: [
                {navItem: "Home", navlink:'/'},
                {navItem: "About us", navlink:'/about'},
                {navItem: "Login", navlink:'/login'},
                {navItem: "Contact Us" ,navlink:'/contact-us'},               
            ],
        };  
    },
}
</script>