import { ref } from 'vue'
import image1 from '../assets/img/malice.png'
import image5 from '../assets/img/malice.png'

const getQuestsItems = () => {
  const questItems = ref([
    {
      id: 1,
      title: 'Familie Quest',
      description: 'Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det handler om at leve sig ind i en anden verden, en magisk historie, hvor I sammen er på en ”quest” – en mission, en opgave, en jagt. ',
      image: image1
    },
    {
      id: 2,
      title: 'Aften Quest',
      description: 'Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i Aften Questen op. Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.',
      image: image5
    },
  ])

  return { questItems }
}

export default getQuestsItems
