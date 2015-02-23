
var LIB = {

  distX : function(v, ball_angle, time){
	  
	ax_u = 0;

    // Hastighet
    vx_u = v * Math.cos( ball_angle * Math.PI / 180 );

    // Position
    x_u = vx_u *time + 0.5*ax_u*Math.pow(time,2);
   
	//Calculate trajetory with gravity
	//x = v * Math.cos( ball_angle * Math.PI / 180 ) * time;
	  
	return(x_u)
  },
  
  distY : function(v, ball_angle, time, gravity){

  	  var ay_u = -gravity;

  	  //vy_u + 
  	  var vy_u = v * Math.sin(ball_angle * Math.PI/ 180);
	  //var vy_u = ay_u *time;

	  //y_u + 
	  var y_u = vy_u*time + 0.5*ay_u*Math.pow(time,2);
	  
	  //Calculate trajetory with gravity
	  //y = v * Math.sin(ball_angle * Math.PI/ 180) * time - ( gravity * Math.pow(time,2) * 0.5);
	  
	  return(y_u)
  },

  distX_vind : function(x_pos, v, ball_angle, time){
	

	//luftmotstånd parametrar
	var D = 0.001;
	var m = 0.5;

	//vind parametrar  
  	var angle = 180;              		  //Vinkel  [grader]
	var Uang = (angle*Math.PI / 180);      //Vinkel  [radianer]
  	var U = 10;

  	// Hastighet komponenter
    vx_v = v * Math.cos( ball_angle * Math.PI / 180 );
    vy_v = v * Math.sin( ball_angle * Math.PI / 180 );

    // vind 
    vf2 = Math.pow((vx_v + U*Math.cos(Uang)),2) + Math.pow((vy_v + U*Math.cos(Uang)),2);     
    vf_ang = Math.atan((vy_v + U*Math.cos(Uang))/(vx_v + U*Math.cos(Uang))); 
  	
  	// Accelerationen
	ax = -(D/m)*vf2*Math.cos(vf_ang);

    // Hastighet
    vx = v * Math.cos( ball_angle * Math.PI / 180 );

    // Position
    x = vx * time + 0.5*ax*Math.pow(time,2);
     
	return(x)
  },
  
  distY_vind : function(y_pos, v, ball_angle, time, gravity){

	//luftmotstånd parametrar
	var D = 0.001;
	var m = 0.5;
  	
  	//vind parametrar 
  	var angle = 180;              		  //Vinkel  [grader]
	var Uang = (angle*Math.PI / 180);      //Vinkel  [radianer]
  	var U = 10;

	// Hastighet komponenter
	vx_v = v * Math.cos( ball_angle * Math.PI / 180 );
	vy_v = v * Math.sin( ball_angle * Math.PI / 180 );

	// vind
	vf2 = Math.pow((vx_v + U*Math.cos(Uang)),2) + Math.pow((vy_v + U*Math.cos(Uang)),2);     
	vf_ang = Math.atan((vy_v + U*Math.cos(Uang))/(vx_v + U*Math.cos(Uang))); 

  	//accelerationen
	var ay = -gravity -(D/m) * vf2*Math.cos(vf_ang);
	  //var ay = -gravity;

	//vy_u + 
	var vy = v * Math.sin(ball_angle * Math.PI/ 180);
	//var vy_u = ay_u *time;

	//y_u + 
	var y = vy*time + 0.5*ay*Math.pow(time,2);


	return(y)
  }



};