function abc(){
        console.log("abc"); 
        document.documentElement.scrollTop=0;
} 


                window.onscroll = function ft() {
                        var btn = document.getElementById("bt");
                        if (document.documentElement.scrollTop > 500) {

                                btn.style.display = "block";
                                
                        }
                        else{
                                btn.style.display = "none";
                        }
                        
                }