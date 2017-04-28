$(document).ready(function () {

	$('#sendEmail').click((e) => {
		e.preventDefault();

		let name = $('#name').val();
		let email = $('#email').val();
		let message = $('#message').val();

		$.get("http://localhost:3000/send", {name: name, email: email, message: message})
		.done(() => {
			console.log('workd!');
			$('#contact').css('display', 'none');
			$('#success').append('Your email was sent successfully!');
		})
		.fail(() => {
			console.log('did not work');
			$('#failure').append('Your email was not sent. Please try again');
		})
  })
})
