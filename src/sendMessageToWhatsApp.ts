import request_promise from 'request-promise'
const { post } = request_promise

const sendMessageToWhatsApp = (message: string) => {
	post({
		uri: 'https://api.zenvia.com/v2/channels/whatsapp/messages',
		headers: {
			'X-API-TOKEN': 'YOUR_TOKEN_HERE', // Coloque aqui seu token
		},
		body: {
			from: 'YOUR_KEYWORD_HERE', // Coloque aqui sua keyword
			to: 'YOUR_CONTACT_REGISTERED_HERE', // Coloque aqui o contato cadastrado
			contents: [
				{
					type: 'text',
					text: message,
				},
			],
		},
		json: true,
	})
		.then((response) => {
			console.log('Response:', response)
		})
		.catch((error) => {
			console.log('Error:', error)
		})
}

export default sendMessageToWhatsApp
