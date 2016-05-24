$(function () {



      var cmds = {
        "help"    : "<b>whoami<br>about<br>profile<br>contact<br>exit",
        "whoami"  :"Hello Mr. X !!!!",
        "about"   :"<b><u>The best thing about a boolean is even if you are wrong, you are only off by a bit.</u></b><br>Hello, I'm a Computer engineer and passionate to work and learn about cutting edge technologies.<br>In web domain, I have been involved in developing web applications in <b>Python</b>, <b>AngularJS</b>, <b>JavaScript</b>, <b>HTML/CSS</b>, <b>JQuery</b>, <b>AJAX</b>, <b>Bootstrap</b> <br> In Desktop development, I have worked in <b>Python</b>, <b>C/C++</b>, <b>Java</b>, <b>C#</b>",
        "profile" :"You can found me at following places .... <br><b>[1]</b> <a target='_blank' href='http://stackoverflow.com/users/4934883/naresh-kumar'>Stackoverflow</a><br><b>[2]</b> <a target='_blank' href='https://github.com/nareshkr22'>Github</a><br><b>[3]</b> <a target='_blank' href='https://www.facebook.com/nareshkr.22'>Facebook</a><br><b>[4]</b> <a target='_blank' href='mailto:nareshkr.22@gmail.com'>Gmail</a>"
      
        };

         window.onload =  function () {
            load_input();
            $('input').val("");
            $('input').focus();
        };
        //load identifier and input field
        function load_input()
        {   
            
            $("#console").append('<br><span id="a">naresh@codelancer</span>:<span id="b">~</span> <input type="text" name="command" id="command" autofocus>');
            $('input').focus();
        }
        //load the output in formatted way
        function load_output(output)
        {   
            $($('input').last()).after($('#command').val());
            $('#command').last().remove();
            $("#console").append('<br><span id="a">naresh@codelancer</span>:<span id="b">~</span><br><span class="element"></span>');
           
           $('.element').last().typed({
                strings: output,
                typeSpeed:  0,
                onStringTyped: function() {  
                    $('.typed-cursor').remove();
                        load_input();
                      
                    }
                });     
            
        }
        //track the keyevents

        $('#console').keypress(function(e) {
            var output = new Array();          
           
            if(e.which == 13) {              
                var cmd = $('#command').val();
                if(cmd in cmds){  
                   output.push(cmds[cmd]);             
                   load_output(output);        
                } else  if(cmd == "refresh")
                {
                    location.reload();
                }
                else{                  
                output.push("sorry");
                load_output(output);
                }           
            }
            

        });
});
