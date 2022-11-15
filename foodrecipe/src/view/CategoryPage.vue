<template>
    <div>                
        <Header />     
        <div class="category_page">
            <div class="foodNeed sec_space">
                <div class="foodInfo text-center"> 
                    <div class="container">    
                         <h2 class="text-center">Select The Category Below To View Recipes</h2>                  
                        <ul class="nav d-md-flex d-block justify-content-center align-items-end" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                    <a href="#">                                                       
                                        <img src="/src/assets/img/breakfast.png" alt="food_item" /> 
                                        <h4>Breakfast</h4>    
                                    </a>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                    <a href="#">                                                       
                                        <img src="/src/assets/img/lunch.png" alt="food_item" /> 
                                        <h4>lunch</h4>    
                                    </a>
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                    <a href="#">                                                       
                                        <img src="/src/assets/img/dinner.png" alt="food_item" /> 
                                        <h4>Dinner</h4>    
                                    </a>
                                </button>
                            </li> 
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-dessert-tab" data-bs-toggle="pill" data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert" aria-selected="false">
                                    <a href="#">                                                       
                                        <img src="/src/assets/img/dessert.png" alt="food_item" /> 
                                        <h4>Dessert</h4>    
                                    </a>
                                </button>
                            </li> 
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-snack-tab" data-bs-toggle="pill" data-bs-target="#pills-snack" type="button" role="tab" aria-controls="pills-snack" aria-selected="false">
                                    <a href="#">                                                       
                                        <img src="/src/assets/img/snack.png" alt="food_item" /> 
                                        <h4>Snack</h4>    
                                    </a>
                                </button>
                            </li> 
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-beverage-tab" data-bs-toggle="pill" data-bs-target="#pills-beverage" type="button" role="tab" aria-controls="pills-beverage" aria-selected="false">
                                    <a href="#">                                                       
                                        <img src="/src/assets/img/beverage.png" alt="food_item" /> 
                                        <h4>Beverage</h4>    
                                    </a>
                                </button>
                            </li>                    
                        </ul>
                    </div>
                </div>
            </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
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
                                            <h2>BreakFast</h2>
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
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
                                            <h2>Lunch</h2>
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
                    </div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
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
                                            <h2>Dinner</h2>
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
                    </div>
                    <div class="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab">
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
                                            <h2>Dessert</h2>
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
                    </div>
                    <div class="tab-pane fade" id="pills-snack" role="tabpanel" aria-labelledby="pills-snack-tab">
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
                                            <h2>Snack</h2>
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
                    </div>
                    <div class="tab-pane fade" id="pills-beverage" role="tabpanel" aria-labelledby="pills-beverage-tab">
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
                                            <h2>Beverage</h2>
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
                    </div>
                </div>
           </div>
         <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header.vue";
import RankingDetails from "../components/RankingDetails.vue";
import FoodNeed from "../components/FoodNeed.vue";
import recipes from "../components/recipes.vue";
import Footer from "../components/Footer.vue";

export default {
    components: {
        Header,
        RankingDetails,
        FoodNeed,
        recipes,   
        Footer,
    }
}
</script>