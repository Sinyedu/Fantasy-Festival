import { ref } from 'vue'

const getDayDetails = () => {
  const dayDetails = ref(
    {
      questTitle: "Familie Quest",
      headliner2: "Deltag i en eventyrlig oplevelse",
      maintext: "Familieudgaven af Fantasy Quest Esbjerg er et oplevelsesløb for hele familien, med tryk på oplevelse. For det er ikke et klassisk løb. Det handler om at leve sig ind i en anden verden, en magisk historie, hvor I sammen er på en ”quest” – en mission, en opgave, en jagt.<br /><br />Her møder I magiske væsner, der stiller jer nogle opgaver og udfordringer undervejs mod målet, som I skal løse sammen for at gennemføre Questen.<br /><br />Sværhedsgraden er sænket, så børnene kan være med til at løse opgaverne. Men tag ikke fejl, der er brug for alle gode kræfter og samarbejdsevner, hvis I skal være med til at redde Esbjerg.<br /><br />Som en ekstra bonus kan I møde YouTuberen Lakserytteren undervejs i Questen rundt i Esbjergs gader.",
      title: 'Generel info',
      date: 'Lørdag d. 14 September',
      time: 'Kl. 10.00 - 14.30',
      location: 'På Torvet i Esbjerg',
      duration: 'Varighed: 1 time og 15 minutter',
    },
  )

  return { dayDetails }
}

export default getDayDetails