<template>
  <div>    
    <div class="home">                                             
      <div class="page_details">
        <div class="container">
          <div class="page_title">
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="hmContent secSpace">
              <div class="row row-cols-md-2 gx-xl-5 gx-3 text-center">
                <div class="homeLinks col" v-for="homeLink in homeLinks" :key="homeLink">
                  <img :src="(homeLink.listImg)" alt="links" /> 
                  <h2>{{homeLink.listName}}</h2>
                  <p v-html="homeLink.listText"></p>
                  <a v-bind:href="homeLink.listLink">{{homeLink.listLinktxt}}</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>        
  </div>
</template>

  

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      homeLinks:[
        {
          listImg: '/src/assets/images/legal-todo.png',
          listName:'Legal to-do list',
          listText:'Learn, manage and implement all the legal parts<br/> of your business in one place.',
          listLinktxt: 'Go',
          listLink: '/todo'
        },
        {
          listImg: '/src/assets/images/legal-contracts.png',
          listName:'Create contracts',
          listText:'Auto-create custom contracts based on our<br/> templates. No experience required!',
          listLinktxt: 'Get started',
          listLink: '/contract'
        },
        {
          listImg: '/src/assets/images/legal-encyclawpedia.png',
          listName:'Encyclawpedia',
          listText:'Explore our Encyclawpedia of legal guides,<br/> templates and resources.',
          listLinktxt: 'Explore',
          listLink: ''
        },
        {
          listImg: '/src/assets/images/legal-expert.png',
          listName:'Ask an expert',
          listText:'Reach out to our legal partners for bespoke,<br/> on-demand legal support.',
          listLinktxt: 'Ask now',
          listLink: ''
        },
      ]
    }
  },
  components: {
    
  }
}
</script>

