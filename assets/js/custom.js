let formName = $('#name-form');
let formControlFile = $('.form-control-file');
let sendComment = $('.send-comment');
let sendMessage = $('.send-message');
   

let exampleForm = $('#exampleFormControlFile1');   


let nowTime = new Date();
let arr = [];
let coun = 0;

sendMessage.on('click', function(e) {
    e.preventDefault();
    let data = {
        name: formName,
        //avatar: exampleForm.files,
        comment: sendComment,
        time: Math.floor(Date.now / 1000)
    };
    arr.push(data);
    validForm(data.name, data.comment);
    document.getElementById("form-comment").reset();
    this.disabled = 'disabled';
});

function validForm (name, comment) {
    if($.Event('click')) {
        if(name.val() != '' && comment.val() != '') {
            newForm ();
            $('.name-form').attr('placeholder', '');
            $('.send-comment').attr('placeholder', '');   
        } else if (name.val() == ''){
            $('.name-form').attr('placeholder', 'Введите ваше имя');
            $('.name-form').addClass('color-red');
            $('.send-comment').attr('placeholder', 'Введите ваш комментарий');
            $('.send-comment').addClass('color-red');
        } else if(comment.val() == '') {
            $('.send-comment').attr('placeholder', 'Введите ваш комментарий');
            $('.send-comment').addClass('color-red');
        } 
    }
}


function newForm () {

    arr.forEach((item) => {

        let newComents = $('<div/>', {
            class: 'new-comments',
            //id: 'comment',  
        });
        let newProfile = $('<div/>', {
            class: 'new-profile'
        });

        let photo  = $('<img/>', {
            class: 'photo-avatar',
            style: 'width: 60px',
            src: 'assets/img/avatar.png'
            //src: item.avatar
        });
    
        let newCommentContent = $('<div/>', {
            class: 'new-comment-content'
        });

        let clr = $('<div/>', {
            class: 'new-clr',
        });     

        let newName = $('<p/>', {
            class: 'new-name',
            style: 'vertical-align: inherit',  
            text: item.name.val(),   
        });
        let newField = $('<p/>', {
            class: 'new-field',
            text: item.comment.val()
        });
        let newCommentStatus = $('<div/>', {
            class: 'new-comment-status'
        });
        let spanLike = $('<span/>', {
            class: 'span-like',
            text: 'Curte·comente'
        });
        let imgLike = $('<img>', {
            class: 'img-like',
            src: 'assets/img/like.png'
        });
        let spanSpace = $('<span/>', {
            class: 'span-space'
        });
        let spanCount = $('<span/>', {
            class: 'span-count'
        });

        
        let lastTime = $('<u/>', {
            class: 'last-time',                                                                                                                 
        });
        
        $('.comments_face').prepend(newComents);
        newComents.append(newProfile, newCommentContent, clr, newCommentStatus);
        
        newProfile.append(photo);
        newCommentContent.append(newName, newField);
        newCommentStatus.append(spanLike, lastTime); 
        spanLike.append(spanSpace, imgLike, spanCount);

        if($(imgLike) != undefined) {
           $(imgLike).on('click', function(e) {
            e.preventDefault();
            countLike($(spanCount));
           }) 
        } else {
            console.log('no imgLike');
        }

    });   

}  
   
function countLike (spanCount) {
    coun += 1;
    $(spanCount).text(coun);
} 


let nowTimes = new Date();

let oldS = nowTimes.getSeconds(); 
let oldM  = nowTimes.getMinutes(); 
let oldH = nowTimes.getHours();
let oldD = nowTimes.getDay();
let oldY = nowTimes.getFullYear();  

 function pastTimes () {
        let c = 0;
        let date = new Date();

        let newS = date.getSeconds();
        let seconds = newS - oldS;

        let newM = date.getMinutes();
        let minutes = newM - oldM;

        let newH = date.getHours();
        let hours = newH - oldH;
        
        let newD = date.getDay();
        let days = newD - oldD;

        let newY = date.getFullYear();
        let years = newY - oldY;
        
        if (newS > oldS && minutes <= 0) {
            c = seconds + ' ' + 'seconds ago';
        } if (newM > oldM && hours <= 0){
            c = minutes + ' ' + 'minutes ago';
        } if (newH > oldH && days <= 0) {
            c = hours + ' ' + 'hours ago';
        } if (newD > oldD && years <= 0) {
            c = days + ' ' + 'days ago';
        } if (newY > oldY) {
            c = years + ' ' + 'years ago';
        }
    
       if($('.last-time')) {
            $('.last-time').text(c); 
       } else {
        console.log ('not last-time');
       } 
       
}

function save () {
    localStorage.setItem('test', pastTimes());
}
setInterval(save,1000);


// function fileRead(photo) {       

//     exampleForm.addEventListener('change', function(event) {
//         let files = event.target.files[0];
//         console.log(files);

//         let reader = new FileReader();
//         reader.onload = function (ev) {
//             console.log(ev.target);
//             if(photo) {
//                 photo.src = ev.target.result;
//                 console.log('yes');
//             } else {
//                 console.log('no');
//             }
            
//         }
//         reader.readAsDataURL(files); 
      
//     });
// }
//fileRead(photo);
      

     //exampleForm.addEventListener('change',  fileRead);


