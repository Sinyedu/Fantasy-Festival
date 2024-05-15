import { ref } from 'vue'

const getInfoDetails = () => {
  const infoDetails = ref([
    {
      id: 1,
      title: 'Generel info',
      date: 'Lørdag d. 14 September',
      time: 'Kl. 18.00 - 22.00',
      location: 'På Torvet i Esbjerg',
      duration: 'Varighed: 1 time',
      ages: 'Anbefales fra 7 år og op',
    },
  ])

  return { infoDetails }
}

export default getInfoDetails