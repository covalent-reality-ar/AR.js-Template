<script>

AFRAME.registerComponent('marker', {
	init: function() {
		const redirect = document.getElementById("Logo");

      

		redirect.addEventListener('click', function (evt) {
			window.location.replace("https://covalentreality.co/");
		})

	}
})
</script>