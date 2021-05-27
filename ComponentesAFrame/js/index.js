AFRAME.registerComponent('random-color', {
    dependencies: ['material'],

    init: function () {
        var el = this.el
        this.getRandomColor = setInterval(function () {
            var color;
            var colores = ["red", "yellow", "blue", "green", "orange"]
            color = colores[Math.floor(Math.random() * 5)]
            
            el.setAttribute('color', color);
        }, 600)
        console.log(this.el)
    }
});
