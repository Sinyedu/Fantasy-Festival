import { ref } from 'vue'
import image3 from '../assets/img/Malice-copy.jpg'
import image4 from '../assets/img/paperbuttontext.png'

const getQuestsItems = () => {
  const questItems = ref([
    {
      id: 2,
      title: 'Aften Quest',
      description: 'Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i Aften Questen op. Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.',
      image: image3,
      image2: image4
    },
  ])

  return { questItems }
}

export default getQuestsItems
