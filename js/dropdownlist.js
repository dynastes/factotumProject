//(function(){
    //setup an object fully of arrays
    //alternativly it could be something like
    //{"yes":[{value:sweet, text:Sweet}.....]}
    //so you could set the label of the option tag something different than the name
    var bOptions = {"saluto":["sweet","wohoo","yay"], "paura":["you suck!","common son"]};

    var A = document.getElementById('A');
    var B = document.getElementById('B');

    //on change is a good event for this because you are guarenteed the value is different
    A.onchange = function(){
    	window.alert("casdbifbsi");
        //clear out B
        B.length = 0;
        //get the selected value from A
        var _val = this.options[this.selectedIndex].value;
        //loop through bOption at the selected value
        for ( var i in bOptions[_val]){
            //create option tag
            var op = document.createElement('option');
            //set its value
            op.value = bOptions[_val][i];
            //set the display label
            op.text = bOptions[_val][i];
            //append it to B
            B.appendChild(op);
        }
    };
    //fire this to update B on load
    A.onchange();
//})();