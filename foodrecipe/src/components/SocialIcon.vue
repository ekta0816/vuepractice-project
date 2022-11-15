<template>                                              
    <span>
        <i class="fa-brands" :class="iconClass"></i>
    </span>           
</template>

<script>
export default {
    props: {
        iconClass : String
    }
}
</script>