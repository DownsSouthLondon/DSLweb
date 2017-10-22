function myFunction(xx) {
    alert(xx.id);
    //document.getElementById(xx.id).innerHTML = 'Welcome dobbo.';
    document.getElementById('videomain').style.width = "300px";
    document.getElementById('videomain').style.height = "300px";
    document.getElementById('videomain').style.zIndex = 10;
}

function playVideo(xx) {
    document.getElementById('videomain').style.width = "270px";
    document.getElementById('videomain').style.height = "260px";
    document.getElementById('videomain').style.zIndex = 10;
    document.getElementById('testing').style.width = "0px"; document.getElementById('testing').style.height = "0px";
    document.getElementById('v1').style.width = "0px"; document.getElementById('v1').style.height = "0px"; document.getElementById('v1').style.visibility = 'hidden';
    document.getElementById('v2').style.width = "0px"; document.getElementById('v2').style.height = "0px"; document.getElementById('v2').style.visibility = 'hidden';
    document.getElementById('v3').style.width = "0px"; document.getElementById('v3').style.height = "0px"; document.getElementById('v3').style.visibility = 'hidden';
    document.getElementById('v4').style.width = "0px"; document.getElementById('v4').style.height = "0px"; document.getElementById('v4').style.visibility = 'hidden';
    document.getElementById('v5').style.width = "0px"; document.getElementById('v5').style.height = "0px"; document.getElementById('v5').style.visibility = 'hidden';
    document.getElementById('v6').style.width = "0px"; document.getElementById('v6').style.height = "0px"; document.getElementById('v6').style.visibility = 'hidden';
    document.getElementById('v7').style.width = "0px"; document.getElementById('v7').style.height = "0px"; document.getElementById('v7').style.visibility = 'hidden';
    document.getElementById('v8').style.width = "0px"; document.getElementById('v8').style.height = "0px"; document.getElementById('v8').style.visibility = 'hidden';
    document.getElementById('v9').style.width = "0px"; document.getElementById('v9').style.height = "0px"; document.getElementById('v9').style.visibility = 'hidden';
    document.getElementById('v10').style.width = "0px"; document.getElementById('v10').style.height = "0px"; document.getElementById('v10').style.visibility = 'hidden';
    document.getElementById('v11').style.width = "0px"; document.getElementById('v11').style.height = "0px"; document.getElementById('v11').style.visibility = 'hidden';
    document.getElementById('v12').style.width = "0px"; document.getElementById('v12').style.height = "0px"; document.getElementById('v12').style.visibility = 'hidden';
    document.getElementById('v13').style.width = "0px"; document.getElementById('v13').style.height = "0px"; document.getElementById('v13').style.visibility = 'hidden';
    document.getElementById('v14').style.width = "0px"; document.getElementById('v14').style.height = "0px"; document.getElementById('v14').style.visibility = 'hidden';
    document.getElementById('v15').style.width = "0px"; document.getElementById('v15').style.height = "0px"; document.getElementById('v15').style.visibility = 'hidden';
    document.getElementById('v16').style.width = "0px"; document.getElementById('v16').style.height = "0px"; document.getElementById('v16').style.visibility = 'hidden';
    document.getElementById('v17').style.width = "0px"; document.getElementById('v17').style.height = "0px"; document.getElementById('v17').style.visibility = 'hidden';
    document.getElementById('v18').style.width = "0px"; document.getElementById('v18').style.height = "0px"; document.getElementById('v18').style.visibility = 'hidden';
    document.getElementById('v19').style.width = "0px"; document.getElementById('v19').style.height = "0px"; document.getElementById('v19').style.visibility = 'hidden';
    document.getElementById('v20').style.width = "0px"; document.getElementById('v20').style.height = "0px"; document.getElementById('v20').style.visibility = 'hidden';
    document.getElementById('v21').style.width = "0px"; document.getElementById('v21').style.height = "0px"; document.getElementById('v21').style.visibility = 'hidden';
    document.getElementById('v22').style.width = "0px"; document.getElementById('v22').style.height = "0px"; document.getElementById('v22').style.visibility = 'hidden';
    document.getElementById('v23').style.width = "0px"; document.getElementById('v23').style.height = "0px"; document.getElementById('v23').style.visibility = 'hidden';
    document.getElementById('v24').style.width = "0px"; document.getElementById('v24').style.height = "0px"; document.getElementById('v24').style.visibility = 'hidden';
    document.getElementById('v25').style.width = "0px"; document.getElementById('v25').style.height = "0px"; document.getElementById('v25').style.visibility = 'hidden';
    var player = document.getElementById('video1');
    //var mp4Vid = document.getElementById('mp4Source');
    //var webmVid = document.getElementById('webmSource');
    //var oggVid = document.getElementById('oggSource');
    // Now simply set the 'src' attribute of the mp4Vid variable!!!!
    // (...using the jQuery library in this case)
    //$(mp4Vid).attr('src', "/Videos/Hello.m4v");
    //$(webmVid).attr('src', "/Videos/Hello.m4v");
    //$(oggVid).attr('src', "/Videos/Hello.m4v");
    //player.load(); mepg
    player.play();
}

function playVideoNew(xx) {

    var videocontainer = document.getElementById('videoclip');
    var a1 = 'http://localhost:49417/Videos/';
    var a2 = '.MOV';
    var a3 = a1.concat(xx);
    var newmp4 = a3.concat(a2);
    videocontainer.pause();
    plugins: ['flash', 'silverlight'],
    videocontainer.setAttribute('src', newmp4);
    //videocontainer.setAttribute('type', 'video/quicktime');    
    //videocontainer.setAttribute('src', 'http://localhost:49417/Videos/9.mov');
    videocontainer.load();
    videocontainer.pause();
    videocontainer.play();

    //var player = document.getElementById('videoclip');
    //var mp4Vid = document.getElementById('mp4video');
    //player.pause();
    //// Now simply set the 'src' attribute of the mp4Vid variable!!!!
    //// (...using the jQuery library in this case)
    //$(mp4Vid).attr('src', "/Videos/11.Mov");
    //player.load();
    //player.play();

    //var videocontainer = document.getElementById('videoclip');
    //var videosource = document.getElementById('mp4video');
    //var a1 = 'http://localhost:49417/Videos/';
    //var a2 = '.MOV';
    //var a3 = a1.concat(xx);
    //var newmp4 = a3.concat(a2);
    //var newposter = 'http://localhost:49417/images/videoimages/Blank.png';
    //var videobutton = document.getElementById("videolink1");
    //videocontainer.pause;
    //videocontainer.setAttribute('poster', newposter);
    ////videosource.setAttribute('src', newmp4);
    //videosource.setAttribute('src', 'http://localhost:49417/Videos/1.MOV');    
    //videocontainer.setAttribute("src", 'http://localhost:49417/Videos/1.MOV');
    //videocontainer.load();
    //videocontainer.play();
}

function ShowEmail() {
    var cont = document.getElementById('EmailAdd');
    cont.style.width = "510px"; 
    cont.style.height = "60px";
    var text = document.getElementById('EmailText');
    text.innerHTML = 'Enter Email & Submit:';
    text.style.background = '#DFDFDF';
    var submit = document.getElementById('EmailSubmit');
    submit.innerHTML = '&nbsp&nbsp ... ';
}

function HideEmail() {
    var cont = document.getElementById('EmailAdd');
    cont.style.width = "0px";
    cont.style.height = "0px";
    var text = document.getElementById('EmailText');
    text.innerHTML = '';
    text.style.background = 'white';
    var submit = document.getElementById('EmailSubmit');
    submit.innerHTML = '';
}

function RotateImages() {
    if (document.getElementById('1').style.backgroundImage == "url('../gfx/1.png')") {
        document.getElementById('1').style.backgroundImage = "url('../gfx/4.png')";
    } else {
        document.getElementById('1').style.backgroundImage = "url('../gfx/1.png')";
    };
}

function RotateText() {
    str = document.getElementById('DonateBox').innerHTML;
    var res = str.substring(0, 3);
    switch(res){
        case '£10':
            document.getElementById('DonateBox').innerHTML = '£15 a month buys a Makaton (signing language) training pack.';
            document.getElementById('TestimonialBox').innerHTML = "Along with all the medical complications, Down's syndrome makes it much harder for children like my son to do the basic things like walking and talking. In addition, he is also deaf. I was feeling pretty desperate about his future until we joined DSL... <BR><BR>9 months later and my son is now crawling and making his first attempts at speaking. <BR><BR>Mel Rosenvinge";
            break;
        case '£15':
            document.getElementById('DonateBox').innerHTML = "£20 buys 'My First Makaton Symbols & Signs' set for a family.";
            document.getElementById('TestimonialBox').innerHTML = 'I am writing to thank you for giving our son Jack a place with your weekly therapy sessions at Down South, at the leisure centre in Peckham.<BR><BR>It is absolutely the best thing we have ever done for Jack and he literally lights up every time we go, because your therapists free him from his heavy sack-like body and get him up and walking and talking......<BR><BR>Tish Simonnet';
            break;
        case '£20':
            document.getElementById('DonateBox').innerHTML = '£50 a month buys a specialist therapist for a term (11 weeks).';
            document.getElementById('TestimonialBox').innerHTML = 'Due to funding cuts there was very little help from the NHS after our son was born. We were told that we would have to wait for a year for any speech and language therapy, and the physio therapy was non-existent. <BR><BR>As such the specialist service DSL has provided has proved invaluable, with it Oscar has made huge leaps in both his language and physical development.<BR><BR>Andrew Dobson';
            break;
        case '£50':
            document.getElementById('DonateBox').innerHTML = '£65 buys one hour of a specialist therapist for three children.';
            document.getElementById('TestimonialBox').innerHTML = "Along with all the medical complications, Down's syndrome makes it much harder for children like my son to do the basic things like walking and talking. In addition, he is also deaf. I was feeling pretty desperate about his future until we joined DSL... <BR><BR>9 months later and my son is now crawling and making his first attempts at speaking. <BR><BR>Mel Rosenvinge";
            break;
        case '£65':
            document.getElementById('DonateBox').innerHTML = "£10 buys a specialist 'See and Learn First Steps' resource pack.";
            document.getElementById('TestimonialBox').innerHTML = 'I am writing to thank you for giving our son Jack a place with your weekly therapy sessions at Down South, at the leisure centre in Peckham.<BR><BR>It is absolutely the best thing we have ever done for Jack and he literally lights up every time we go, because your therapists free him from his heavy sack-like body and get him up and walking and talking......<BR><BR>Tish Simonnet';
            break;
    };
}






