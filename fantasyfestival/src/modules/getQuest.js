import { ref } from 'vue'
import image1 from '../assets/img/malice.png'
import image5 from '../assets/img/statuer.png'

const getQuestsItems = () => {
  const questItems = ref([
          {
            id: 1,
            title: 'Familie Quest',
            description: 'First Semester Project built in HTML, CSS and Bootstrap!',
            image: image1,
            link: 'https://museum-trapholt.dk',
            category: 'Web'
        
          },
          {
            id: 2,
            title: 'Aften Quest',
            description: 'A freetime project made for understanding the basics of JavaScript!',
            image: image5,
            link: 'https://github.com/Sinyedu/Dice-Game'
          },
        ])
  
          return { questItems }
  }
  export default getQuestsItems