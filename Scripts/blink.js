
var i = 0;

	function getColor(){	    
		i++;	    
		switch(i){ 	    
			case 1:return "#ff0000";	    
			case 2:return "#ff6600";	    
			case 3:return "#3366cc";	    
			default:return "black";	    
		}	    
	}
	    
	function colorful(){	    
		var o =document.getElementById('actext');	    
		o.style.color=getColor();	    
		if(i==3)i=0;	    
		setTimeout('colorful()',1000);	    
	}
	    
	colorful();
