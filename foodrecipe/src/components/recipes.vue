<template>
    <div>
        <ul>
            <li v-for="recipe in recipes" :key="recipe">
                <div class="recipe_img">
                    <img :src="(recipe.recipe_image)" alt="food_item" /> 
                </div>
                <div class="py-3 recipe_details">
                    <h4>{{recipe.recipe_title}}</h4>
                    <p v-html="recipe.recipe_time"></p>
                    <span v-html="recipe.recipe_rank"></span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recipes: [
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
               {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
                {
                    recipe_image:'/src/assets/img/recipes-img.jpg',
                    recipe_title: 'Recipe Name Here',
                    recipe_time:'<i class="fa-regular fa-clock"></i> 0.5 H &nbsp;&nbsp;&nbsp; |   &nbsp;&nbsp;&nbsp; <i class="fa-regular fa-clock"></i> 1.5 H<br/><span>(Prep Time)</span><span>(Cook Time)</span>',
                    recipe_rank: '<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'
                },
            ]
        }
    },
}
</script>