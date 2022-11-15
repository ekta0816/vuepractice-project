<template>
    <div class="foodInfo text-center">       
        <ul class="d-md-flex d-block justify-content-center align-items-end">
            <li v-for="food in foods" :key="food">
                <a href="/category">                                                       
                    <img :src="(food.image)" alt="food_item" /> 
                    <h4>{{ food.name }}</h4>    
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            foods:[
                {name:'Breakfast',image: '/src/assets/img/breakfast.png', link:'/categorypage'},
                {name:'Lunch',image:'/src/assets/img/lunch.png', link:'/categorypage'},
                {name:'Dinner',image:'/src/assets/img/dinner.png', link:'/categorypage'},
                {name:'Dessert',image:'/src/assets/img/dessert.png', link:'/categorypage'},
                {name:'Snack',image:'/src/assets/img/snack.png', link:'/categorypage'},
                {name:'Beverage',image:'/src/assets/img/beverage.png', link:'/categorypage'}
            ],
        }
    },
}
</script>