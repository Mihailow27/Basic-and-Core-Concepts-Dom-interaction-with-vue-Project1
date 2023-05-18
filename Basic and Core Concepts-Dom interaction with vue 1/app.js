const app= Vue.createApp({
    data(){
        return {
             courseGoalsA:'<h2>Finish the course and learn Vue!</h2>',
             courseGoalsB: 'Master Vue and build amazing Apps!' ,
             vueLink:'https://vuejs.org/'
        }
    },
    
    methods:{
        outputGoal (){
            const randomNumber=Math.random()
            if (randomNumber<0.5) {
                return this.courseGoalsA
            }else{
              return this.courseGoalsB
            }
        }
    }
})
app.mount('#user-goal')