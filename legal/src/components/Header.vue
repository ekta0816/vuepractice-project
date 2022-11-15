<template>
   <div>
        <div class="hdrInfo">
            <div class="container">
                <div class="HdrNav d-flex align-items-center">
                    <div class="logo d-lg-none d-block">
                        <a href="/"><img alt="logo" class="hdrlogo" src="../assets/images/logo.png" /></a>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-light p-0 d-lg-block d-none">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item" v-for="navItem in navItems" :key="navItem">
                                    <a class="nav-link active" href="#">{{navItem.navName}}</a>
                                </li>                        
                            </ul>    
                        </div>
                    </nav>
                    <div class="logBtn">
                        <a href="#">Log out</a>
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    data() {
        return {
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