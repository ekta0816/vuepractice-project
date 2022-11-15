<template>
    <div>
        <Header />        
        <div class="banner">
            <div class="container">
                <div class="bnrInfo">
                    <h1>Great Recipe Doesn’t<br />
                        Need to Be Complicated</h1>
                    <p>Our company aims to promote healthy lifestyle by <br />sharing recipes that can be easily followed</p>
                    <div class="bnrSearch input-group mt-4">
                        <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Enter Keyword">
                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All Categories <i class="fa-solid fa-angle-down"></i></button>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>                        
                        <button type="button" class="btn btnsearch">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="foodNeed sec_space">
            <div class="container">
                 <h2 class="text-center">What do you need help with</h2>
                <FoodNeed />
            </div>
        </div>            
        <div class="allrecipes sec_space">
            <div class="container">
                <div class="recipes_info row justify-content-center"> 
                    <div class="rank_categories col-xl-3 col-lg-4 col-12">
                        <div class="rank_info">
                            <h2>Rankings</h2>   
                            <RankingDetails/>                         
                        </div>
                        <div class="categories_info">
                             <h2>Categories</h2>
                             <FoodNeed />
                        </div>
                    </div>
                    <div class="reciepes_details col-xl-8 col-lg-8 col-12">
                        <div class="d-sm-flex d-block justify-content-between">
                            <h2>All Recipes</h2>
                            <div class="dropdown mt-sm-0 mt-3">
                                <label>Sort By :</label>
                                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    New Arrivals
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/CategoryPage">New Arrivals</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="recipes_all">
                            <recipes />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import FoodNeed from "../components/FoodNeed.vue";
import RankingDetails from "../components/RankingDetails.vue";
import recipes from "../components/recipes.vue";
import Footer from "../components/Footer.vue";


export default{
    name: "HomePage",
     components:{
        Header,
        FoodNeed,
        RankingDetails,
        recipes,
        Footer,        
    },
}
</script>