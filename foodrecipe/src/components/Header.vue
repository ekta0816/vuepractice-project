<template>
  <div class="hdrInfo">
    <div class="container">
      <div class="hdrDetails d-flex justify-content-between align-items-center">
        <div class="logo">
          <a href="/"><img alt="logo" class="hdrlogo" src="../assets/img/logo.png" /></a>
        </div>
        <div class="hdrRgt d-flex align-items-center">
          <div class="hdrNav">
            <nav class="navbar navbar-expand-lg m-0 p-0">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fa-solid fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="hdrNav in hdrNavs" :key="hdrNav">
                        <a v-bind:href="hdrNav.navlink" class="nav-link p-lg-0"><Navigation :navigation="hdrNav.navItem" /></a>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="hdrSocial">
            <ul>
                <li v-for="socialIcon in socialIcons" :key="socialIcon">
                    <a href="#"><SocialIcon :iconClass="socialIcon.class" /></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcon from "../components/SocialIcon.vue";
import Navigation from "../components/Navigation.vue";

export default {
  components: {
    SocialIcon,
    Navigation,
  },
  data() {
    return {
      socialIcons: [
        {class: "fa-facebook-f"},
        {class: "fa-instagram"},
        {class: "fa-whatsapp"},
      ],
      hdrNavs: [
        {navItem: "Home", navlink:'/'},
        {navItem: "About us", navlink:'/about'},
        {navItem: "Login", navlink:'/login'},
      ],
    };
  },  
};
</script>
