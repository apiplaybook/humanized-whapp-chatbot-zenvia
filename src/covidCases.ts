import request_promise from 'request-promise'
import sendMessageToWhatsApp from './sendMessageToWhatsApp2'
const { get } = request_promise

const covidCases = () => {
	get({
		uri: 'https://covid19-brazil-api.now.sh/api/report/v1/brazil',
	})
		.then((response) => {
			const covid = JSON.parse(response)
			const { confirmed, deaths } = covid.data
			sendMessageToWhatsApp(
				`No Brasil, há ${confirmed} casos confirmados e ${deaths} mortes.`
			)
		})
		.catch((error) => {
			console.log('Error:', error)
		})
}

export default covidCases
