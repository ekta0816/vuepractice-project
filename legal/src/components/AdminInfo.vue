<template>
    <div class="adminMain">
        <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i class="fa-solid fa-bars"></i>
        </a>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">    
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
            </div>
            <div class="offcanvas-body">
                <div class="adminInfo">
                    <div class="logo">
                        <a href="/"><img alt="logo" class="hdrlogo" src="../assets/images/logo.png" /></a>
                    </div>
                    <div class="admin_user d-flex align-items-center">
                        <div class="user_img"><img alt="logo" class="hdrlogo" src="../assets/images/user.png" /></div>
                        <div class="user_info"><h5>Alice <br/>Richardson</h5></div>
                    </div>
                </div>
                <div class="admin_urls">
                    <ul>
                        <li v-for="adminLink in adminLinks" :key="adminLink">
                            <a v-bind:href="adminLink.linkPath">
                                <img :src="(adminLink.adminIcon)" alt="menuicon" /> 
                                <span>{{ adminLink.linkText }}</span>
                            </a>
                        </li>
                    </ul>                    
                    <ul class="urlpart2">
                        <li v-for="adminLink2 in adminLink2s" :key="adminLink2">
                            <a v-bind:href="adminLink2.linkPath">
                                <img :src="(adminLink2.adminIcon)" alt="menuicon" /> 
                                <span>{{ adminLink2.linkText }}</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="d-lg-none d-block">
                        <li v-for="navItem in navItems" :key="navItem">
                            <a href="#">{{navItem.navName}}</a>
                        </li>                        
                    </ul> 
                </div>       
             </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    data() {
        return {
            adminLinks: [
                {adminIcon: '/src/assets/images/home-icon.png',linkText:'Home',linkPath:'/'},
                {adminIcon: '/src/assets/images/to-do.png',linkText:'To-do list',linkPath:'/todo'},
                {adminIcon: '/src/assets/images/contact-icon.png',linkText:'Contracts',linkPath:'/contract'},
                {adminIcon: '/src/assets/images/search-icon.png',linkText:'Encyclawpedia',linkPath:'#'},
                {adminIcon: '/src/assets/images/human-icon.png',linkText:'Ask a human',linkPath:'#'},              
            ],
            adminLink2s: [               
                {adminIcon: '/src/assets/images/star-icon.png',linkText:'Membership',linkPath:'#'},
                {adminIcon: '/src/assets/images/company-icon.png',linkText:'My company',linkPath:'#'},
                {adminIcon: '/src/assets/images/alliance-icon.png',linkText:'Alliances',linkPath:'#'},
                {adminIcon: '/src/assets/images/history.png',linkText:'History',linkPath:'#'},
            ],
            navItems: [
                {navName: 'Who are we',navLink:''},
                {navName: 'Legal help',navLink:''},
                {navName: 'Create account',navLink:''},
                {navName: 'Contact us',navLink:''},
            ]
        }
    },
}
</script>