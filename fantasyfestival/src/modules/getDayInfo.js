import { ref } from 'vue'

const getDayDetails = () => {
  const dayDetails = ref([
    {
      id: 1,
      title: 'Generel info',
      date: 'Lørdag d. 14 September',
      time: 'Kl. 10.00 - 14.30',
      location: 'På Torvet i Esbjerg',
      duration: 'Varighed: 1 time og 15 minutter',
    },
  ])

  return { dayDetails }
}

export default getDayDetails