<template>
    <div>
        <ul>
            <li v-for="ranking in rankings" :key="ranking">
                <h5>{{ranking.rank_no}}</h5>
                <h3>{{ranking.rank_name}}</h3>
                <span v-html="ranking.rank_star"></span>
            </li>            
        </ul>
    </div>
</template>

<script>
export default {
   data() {
    return {
        rankings: [
            {rank_no:'1', rank_name:'Recipe Name (4.9)',rank_star:'<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'},
            {rank_no:'2', rank_name:'Recipe Name (4.9)',rank_star:'<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'},
            {rank_no:'3', rank_name:'Recipe Name (4.9)',rank_star:'<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'},
            {rank_no:'4', rank_name:'Recipe Name (4.9)',rank_star:'<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'},
            {rank_no:'5', rank_name:'Recipe Name (4.9)',rank_star:'<i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star color_white"></i>'}
        ]
    }
   },
}
</script>