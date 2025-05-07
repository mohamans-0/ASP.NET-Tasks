$(document).ready(function () {


  	// fill data in the form 
	$('#fill').on('click', function (e) {
		// to keep the data in the form 
		e.preventDefault();

		// to set the values in $('#id').val('moha')--> to set value (moha) in (#id)
		$('#email').val('mohmadmans29@gmail.com');
		$('#password').val('123');
		$('#age').val('23');
		$('#salary').val('35000');


	})


	// to send the data in the form to the table
	$('#submit').on('click', function (e) {

		e.preventDefault(e);
		var email = $('#email').val();
		var pass = $('#password').val();
		var age = $('#age').val();
		var salary = $('#salary').val();

		var tableReslut = `<tr>
			<td>${email}</td>
			<td>${pass}</td>
			<td>${age}</td>
			<td>${salary}</td>
			<td>
				<button class='btn btn-danger'>Delete </button>
			</td>

		</tr>
		`;

		var cardResult = `
		<div class="card col-12 mx-1 mt-3 ">
  
			<h2 class="list-group-item">The E-mail : ${email}</h2>
		    <h3 class="list-group-item">The Age is ${age}</h3>
		    <h4 class="list-group-item">The Salary ${salary}$</h4>
 
		</div>
		`



		$('#cardsDiv').append(cardResult)
		$('#dataDable tbody').append(tableReslut);

	})

			$('#dataDable tbody').on('click', '.del', function () {
		$(this).closest('tr').remove();
		// $('#cardsDiv').remove();
	});

	
	})
