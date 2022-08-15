 //product,partner bg 효과
     window.onload = function() {
	lax.setup()

      const update = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(update)
      }

      window.requestAnimationFrame(update)
       }