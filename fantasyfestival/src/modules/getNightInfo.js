import { ref } from 'vue'

const getInfoDetails = () => {
  const infoDetails = ref(
    {
      questTitle: "Aften Quest",
      headliner2: "Er du til uhygge og svære gåder?",
      maintext: "Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op.<br /><br />Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg.<br /><br />Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse.<br /><br />Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten.",
    
      title: 'Generel info',
      date: 'Lørdag d. 14 September',
      time: 'Kl. 18.00 - 22.00',
      location: 'På Torvet i Esbjerg',
      duration: 'Varighed: 1 time og 15 minutter',
      ages: 'Anbefales fra 7 år og op',
    },
  )

  return { infoDetails }
}

export default getInfoDetails