let table;

$(document).ready(function () {

	table = $("#myDataTable").DataTable({
		"responsive": true,
		"lengthChange": false,
		"autoWidth": false,
		"buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
	});
	

	$('#btnSave').on('click', function (e) {

		e.preventDefault();

		const rend = $('#exampleModal #rend').val();
		const brow = $('#exampleModal #brow').val();
		const plat = $('#exampleModal #plat').val();
		const engi = $('#exampleModal #engi').val();
		const grad = $('#exampleModal #grad').val();

		if (!rend || !brow || !plat || !engi || !grad) {
			if (!rend) {
				$('#rend').css('border','2px solid red')
			} else {
				$('#rend').removeAttr('style');
			}
			if (!brow) {
				$('#brow').css('border', '2px solid red')
			} else {
				$('#brow').removeAttr('style');
			}
			if (!plat) {
				$('#plat').css('border', '2px solid red')
			} else {
				$('#plat').removeAttr('style');
			}
			if (!engi) {
				$('#engi').css('border', '2px solid red')
			} else {
				$('#engi').removeAttr('style');
			}
			if (!grad) {
				$('#grad').css('border', '2px solid red')
			} else {
				$('#grad').removeAttr('style');
			}
			return;
		}

	
		table = new DataTable('#myDataTable');
		table.destroy();

		var resultRow = `<tr>
		<td>${rend}</td>
		<td>${brow}</td>
		<td>${plat}</td>
		<td>${engi}</td>
		<td>${grad}</td>
		<td>
			<button class='btn btn-danger' id='dele'>Delete </button>
		</td>
		</tr>
		`


		$('#myDataTable').append(resultRow);
		table = new DataTable('#myDataTable');
		
	});


	$(document).on('click', '#dele', function () {

		

		const row = this;
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then((result) => {
			if (result.isConfirmed) {
				table.destroy();
				$(row).closest('tr').remove();
				const Toast = Swal.mixin({
					toast: true,
					position: "top-center",
					showConfirmButton: false,
					timer: 1000,
					timerProgressBar: true,
					didOpen: (toast) => {
						toast.onmouseenter = Swal.stopTimer;
						toast.onmouseleave = Swal.resumeTimer;
					}
				});

				Toast.fire({
					icon: "success",
					title: "Deleted is successfully"
				});
				table = new DataTable('#myDataTable');
			}
			else {
				Swal.fire({
					title: "Cancled!",
					text: "Your file has been deleted.",
					icon: "success"
				});
			}
		});
	})

});

