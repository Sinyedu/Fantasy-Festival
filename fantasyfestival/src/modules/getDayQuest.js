import { ref } from 'vue'
import image1 from '../assets/img/statuer.png'
import image2 from '../assets/img/paperbuttontext.png'

const getDayQuests = () => {
  const dayQuests = ref([
    {
      id: 1,
      title: 'Familie Quest',
      description: 'Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det handler om at leve sig ind i en anden verden, en magisk historie, hvor I sammen er på en ”quest” – en mission, en opgave, en jagt. ',
      image: image1,
      image2: image2
    },
  ])

  return { dayQuests }
}

export default getDayQuests