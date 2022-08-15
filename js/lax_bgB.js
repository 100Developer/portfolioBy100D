 //product,partner bg 효과
     window.onload = function() {
	lax.setup()

      var update = function() {
        lax.update(window.scrollY)
        window.requestAnimationFrame(update)
      }

      window.requestAnimationFrame(update)
       }