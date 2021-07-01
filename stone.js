class Stone{
	constructor(x,y){
	    var options = {
			'density':4,
			'friction': 0.9,
			'restitution':0.8
		  };
		this.body = Bodies.rectangle(110,30, 50, 50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);

	}
	display()
	{
        push();
      
        strokeWeight(3);
        stroke('grey')
        fill('grey')

        rect(100, 560, this.width, this.height);
        pop();
      }

}