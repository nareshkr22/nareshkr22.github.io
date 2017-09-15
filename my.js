$(function() {
  /**
   * @return {undefined}
   */
  function shim() {
    $('#console').append('<br><span id="a">naresh@codelancer</span>:<span id="b">~</span> <input type="text" name="command" id="command" autofocus>');
    $('input').focus();
  }
  /**
   * @param {Array} val
   * @return {undefined}
   */
  
  

  function exist(val) {
    $($('input').last()).after($('#command').val());
    $('#command').last().remove();
    $('#console').append('<br><span id="a">naresh@codelancer</span>:<span id="b">~</span><br><span class="element"></span>'	);
    $('.element').last().typed({
      strings : val,
      typeSpeed : 0 , 


      onStringTyped : function() {
        $('.typed-cursor').remove();
        shim();
      }
    });
    
  }
  if (screen.width <= 830) {
    window.location = 'mobile.html';
  } else {
    $('body').css('display', 'block');
  }
  var arr2 = {
    "education" : "<b><h3>Education</h3></b><pre>+----------------------------------------------------------------+------------------+<br>| <b>[1] Masters Of Engineering</b>                                     | 2017 - Till Now  |<br>+----------------------------------------------------------------+------------------+<br>| GTU PG School                                                                     |<br>+-----------------------------------------------------------------------------------+<br>| Cyber Security                                                                    |<br>+----------------------------------------------------------------+------------------+<br>| <b>[1] Bachelors Of Engineering</b>                                   | 2013 - 2017      |<br>+----------------------------------------------------------------+------------------+<br>| Shankersinh Vaghela Bapu Institute of Technology                                  |<br>+-----------------------------------------------------------------------------------+<br>| Information Technology , 7.71 CPI                                                 |<br>+-----------------------------------------------------------------------------------+<br>| <b>[2] Higher Secondary School</b>                                    | 2012 - 2013      |<br>+----------------------------------------------------------------+------------------+<br>| Kendriya Vidyalaya, Ahmedabad                                                     |<br>+-----------------------------------------------------------------------------------+<br>| 65%                                                                               |<br>+-----------------------------------------------------------------------------------+<br>| <b>[3] Senior Secondary School</b>                                    | 2012 - 2013      |<br>+----------------------------------------------------------------+------------------+<br>| Kendriya Vidyalaya, Ahmedabad                                                     |<br>+-----------------------------------------------------------------------------------+<br>| CGPA 9.2                                                                          |<br>+-----------------------------------------------------------------------------------+<br></pre>",
    "work" : "<b><h3>Work History</h3></b>Need Experience for Job, Need Job for Experience<pre>+----------------------------------------------------------------+------------------+<br>| <b>[1] Back-End Developer</b>                                         | 2015 - 2016      |<br>+----------------------------------------------------------------+------------------+<br>| BackBencher Developers                                                            |<br>+-----------------------------------------------------------------------------------+<br>| Worked as a back end developer. We were engaged in 360 solution to the user       |<br>| problem. I used to work on core PHP and Laravel framework.                        |<br>+-----------------------------------------------------------------------------------+<br></pre>",
    "portfolio" : "<b><h3>Portfolio</h3></b><pre>+-----------------------+---------------------------------------------------------------+<br>| <b>[1] Attendance System</b> |Python based Attendance system which allow,a student to        |<br>|                       |analyzethe attendance on the basis of daily,monthly and        |<br>|                       |subject-wise.                                                  |<br>+-----------------------+---------------------------------------------------------------+<br>| <u>Technology</u>            | #python #terminal #api                                        |<br>+-----------------------+---------------------------------------------------------------+<br>| <b>[2] Garden Watering</b>   |An Arduino microcontroller based garden watering system works  |<br>| <b>System</b>                |only when plants are thirsty, turning on supplemental lights   |<br>|                       |based on how much natural sunlight is received, and alerting   |<br>|                       |the user if the temperature drops below a plant-healthy level. |<br>+-----------------------+---------------------------------------------------------------+<br>| <u>Technology</u>            | #cloud #ardiuno #android #iot                                 |<br>+-----------------------+---------------------------------------------------------------+<br>| <b>[3] Agricultural</b>      |A online system for the peanut farmer for the improvement      |<br>| <b> Portal</b>               |of the agriculture. Co-ordination with Mars,Inc, America       |<br>+-----------------------+---------------------------------------------------------------+<br>| <u>Technology</u>            | #python #terminal #api                                        |<br>+-----------------------+---------------------------------------------------------------+<br>| <b>[4] Facebook Page</b>     |This system gives you a dedicated space for you and your groups|<br>|          <b>&</b>            |and page.See all of your Facebook group and pages in one place.|<br>|    <b>Group Manager</b>      |Discuss, plan and collaborate easily and without distractions. |<br>+-----------------------+---------------------------------------------------------------+<br>| <u>Technology</u>            | #html #css3 #php #mysql #jquery #facebook-api                 |<br>+-----------------------+---------------------------------------------------------------+<br>| <b>[5] Event Management</b>  |A registration system for the zonal tech fest of GTU. With     |<br>| <b>System</b>                |functionality of registration, tracking of money, tracking of  |<br>|                       |events,participants count and various other resources.         |<br>+-----------------------+---------------------------------------------------------------+<br>| <u>Technology</u>            | #html #css3 #php #mysql #jquery                               |<br>+-----------------------+---------------------------------------------------------------+<br></pre>",
    "certification": "<pre>+-----+--------------------------------------------------------------------------+------+<br>| [1] | <b>Programming for Everybody (Python) by University of Michigan on Coursera</b> | 2015 |<br>+-----+--------------------------------------------------------------------------+------+<br>| [2] | <b>Introduction to Linux by LinuxFoundationX - LFS101x.2</b>                    | 2015 |<br>+-----+--------------------------------------------------------------------------+------+<br>| [3] | <b>Diploma in Multilingual Computer Programming</b>                             | 2015 |<br>+-----+--------------------------------------------------------------------------+------+<br></pre>",
    "help" : "<b>About<br>Profile<br>Education<br>Work<br>Portfolio<br>Certification<br>Contact<br>exit",
    "whoami" : " Hello Mr. X !!!!",
    "contact" : "You can contact me : <br> <b>[1] </b><a href='@mailto:nareshkr.22@gmail.com'>nareshkr.22@gmail.com</a> <br> <b>[2]</b> 9099056681<br><b>[3]</b> <a target='_blank' href='https://www.facebook.com/nareshkr.22'>Facebook</a>",
    "about" : "<b><u>The best thing about a boolean is even if you are wrong, you are only off by a bit.</u></b><br>Hello, I'm a Computer engineer and passionate to work and learn about cutting edge technologies.<br>In web domain, I have been involved in developing web applications in <b>Python</b>, <b>AngularJS</b>, <b>JavaScript</b>, <b>HTML/CSS</b>, <b>JQuery</b>, <b>AJAX</b>, <b>Bootstrap</b> <br> In Desktop development, I have worked in <b>Python</b>, <b>C/C++</b>, <b>Java</b>, <b>C#</b>",
    "profile" : "You can find my work me at following places .... <br><b>[1]</b> <a target='_blank' href='http://stackoverflow.com/users/4934883/naresh-kumar'>Stackoverflow</a><br><b>[2]</b> <a target='_blank' href='https://github.com/nareshkr22'>Github</a> <br><br>Click on the link below<br><b>[1]</b> Bitcoin Wallet <br><b>[2]</b> Venue Selector <br><b>[3]</b> Event Management System <br><b>[4]</b> Garden Watering System <br><b>[5]</b> Agricultural Portal",
    "clear" : "asd",
    "refresh" : " ",
    "exit" : " "
  };
  /**
   * @return {undefined}
   */
  window.onload = function() {
    shim();
    $('input').val(" ");
    $('input').focus();
  };
  $('#console').keypress(function(dataAndEvents) {
    /** @type {Array} */
    var indents = new Array;
    if (dataAndEvents.which == 13) {
      
   if( $('#command').val().toLowerCase().match(/^[0-9a-zA-Z]{1,16}$/)){
   console.log('done');
     
  var i = $('#command').val().toLowerCase();
}
else{
  console.log('illegal');
  var i = '';
}
      
      
     
 
      if (i in arr2) {
        switch(i) {
          case "refresh":
            location.reload();
            break;
          case "":
            indents.push("Sorry Please Type help to get command list");
            exist(indents);
            break;
          case  "exit":
            window.location.href = "thankyou.html";
            break;
          case "clear":
            location.reload();
            break;
          default:
            indents.push(arr2[i]);
            exist(indents);
        }
      } else {
        indents.push("Sorry Please Type help to get command list");
        exist(indents);
      }
    }
  });
});
