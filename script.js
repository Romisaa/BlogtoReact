const like = document.getElementById('like_btn');
        const singleClick = () => {
            like.style.fontWeight = 'bold';
            like.style.background = '#bbe1fa';
            like.style.color = '#1b262c';
            like.innerHTML = "✓ Liked";
        }
        const doubleClick = () => {
            like.style.fontWeight = 'normal';
            like.style.background = '#3282b8';
            like.style.color = '#fff';
            like.innerHTML = "Like";
        }
        var clickCount = 0;
        like.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 1) {
                singleClickTimer = setTimeout(function() {
                    clickCount = 0;
                    singleClick();
                }, 400);
            } else if (clickCount === 2) {
                clearTimeout(singleClickTimer);
                clickCount = 0;
                doubleClick();
            }
        }, false);
        // show and hide the replies
        const reply = (rep) => {
            console.log('hi');
            // debugger;
            var res = document.getElementById(rep);
            console.log(res);
            if (res.className == "replies") {
                res.className = "thapa_show";
                res.style.WebkitTransition = 'all 0.3s ease';
                // res.style.transition = 'all 0.3s ease';
                // console.log(thapa_show);
            } else if (res.className == 'thapa_show') {
                // res.className = " ";
                console.log('thapa show');
                res.className = "replies";
            }
        }


// -----------------------------------------------------------------------------------------

function render(data) {
    var html = "<div class='replies'><div class='reply_img mx-2 align-self-center'><img src='icons8-person-64.png'/></div><span>"+data.name+"</span><div class='date"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>";
    $('#reply1').append(html);
}

$(document).ready(function () {
    var content= [
        {"name": "User", "date": "21 Aug, 2020", "body": "Test"}
    ];
        for (let i = 0; i < array.length; i++) {
            render(content[i]);
        }

    $('Addreply').click(function() {
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyText').val(),
        };
        content.push(addObj);
        render(addObj);
        
    });
    
});