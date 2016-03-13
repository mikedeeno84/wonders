app.factory('shapeFactory', function(){
	var shapeFactory = {};

	shapeFactory.drawRectangle = function(gameCard, width, height, x, y, color){
		
		var ctx = gameCard.ctx;
		
		ctx.beginPath();
		ctx.rect(x, y, width, height);
		ctx.fillStyle = color;
		ctx.fill();
		ctx.closePath();
	}

	shapeFactory.drawHalfRound = function(gameCard, width, height, x, y, radius, color){
		var ctx = gameCard.ctx;
		
		ctx.beginPath();

		ctx.moveTo(x + radius,y);
		ctx.lineTo(x + width - radius, y);
  	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  	ctx.lineTo(x + width, y + height)
  	ctx.lineTo(x, y + height);
  	ctx.lineTo(x, y + radius);
  	ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.fillStyle = color;
		ctx.fill();
  	ctx.closePath();

	}

	shapeFactory.drawRounded = function(gameCard, width, height, x, y, radius, color){
		
		var ctx = gameCard.ctx;
		// console.log(ctx)
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
  	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  	ctx.lineTo(x + width, y + height - radius);
  	ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  	ctx.lineTo(x + radius, y + height);
  	ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  	ctx.lineTo(x, y + radius);
  	ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.fillStyle = color;
		ctx.fill();
  	ctx.closePath();

	}

	return shapeFactory;
})