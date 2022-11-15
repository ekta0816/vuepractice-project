<template>
    <div>
        <div class="contracts">                                             
            <div class="page_details">
                <div class="container">
                    <div class="page_title">
                        <h1>Create contracts</h1>                       
                    </div>
                    <div class="conStep">
                        <ul class="d-flex flex-md-nowrap flex-wrap justify-content-center text-center">
                            <li v-for="conStep in conSteps" :key="conStep">
                                <img :src="(conStep.stepImg)" alt="steps" /> 
                                <h2>{{conStep.stepName}}</h2>
                                <p v-html="conStep.stepInfo"></p>
                            </li>
                        </ul>
                    </div>
                    <div class="powerdby mt-3 d-flex justify-content-end align-items-center">
                        <p>Powered by</p>
                        <img src="../assets/images/bitmap.png" alt="map">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contract',
    data() {
        return {
            conSteps:[
                {
                    stepImg:'/src/assets/images/step1.png',
                    stepName: 'Step 1',
                    stepInfo:'Choose a contract and answer the <br/>questions to customise it'
                },
                {
                    stepImg:'/src/assets/images/step2.png',
                    stepName: 'Step 2',
                    stepInfo:'Purchase and Download your <br/>customised contract'
                },
                {
                    stepImg:'/src/assets/images/step3.png',
                    stepName: 'Step 3',
                    stepInfo:'Our legal partners can check, explain <br/>and ensure you’re 100% good to go.'
                }
            ]
        }
    },
}
</script>