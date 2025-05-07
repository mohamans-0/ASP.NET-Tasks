$(document).ready(function () {

	$('#fill').on('click', function (e) {
		e.preventDefault(e);
		$('#email').val('mohmadmans29@hmail.com');
		$('#password').val('123');
		$('#age').val('23');
		$('#salary').val('20000');

	})

	$('#submit').on('click', function (e) {
		e.preventDefault(e);

		var email = $('#email').val();
		var pass = $('#password').val();
		var salary = $('#salary').val();
		var age = $('#age').val();

		var result = `
		<tr>
		<td>${email}</td>
		<td>${pass}</td>
		<td>${age}</td>
		<td>${salary}</td>
		<td> <button class='btn btn-danger del' >Delete </button> </td>
		</tr>`


		var card = `

		<div class="card col-3 mx-2 mt-2 " >
		   <p class="list-group-item">The Email is :${email} </p>
			<p class="list-group-item">The Salary is : ${age}</p>
			<p class="list-group-item">The Age is :${salary} </p>
		</div>

		`

		$('#cardsDiv').append(card);
		$('#dataDable tbody').append(result);
	})

	$('#change').on('click', function (e) {
		$('.lblChange').css({
			'background-color': 'blue',
			'color': 'white'
		});
		//$('.lblChange').css('background-color', 'red');
	})

	$('.btn btn-danger del').on('click', '.del', function () {
		$(this).closest('tr').remove();
	})




})
	
