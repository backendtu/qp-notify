Notification = {
  Icons: {
     ['success']: {
        ['color']: 'lightgreen', 
     },

     ['error']: {
        ['color']: 'lightcoral', 
     },

     ['info']: {
        ['color']: 'lightblue', 
     },
   }
}; 

const sendNoti = function(event) {
    const data = event.data
    var id = $(`.notification .notify`).length;

    if (data.type) {
        data.type = Notification.Icons[data.type]['color']; 
    } else {
        data.type = 'lightblue'
    }

    $('.notification').show(); 

    $('.notification').append(`
        <div class="notify" id=${id} style="border-top: 2px solid ${data.type}">
            <div class="title">
                <span style="padding: 3px;">${data.title}</span>
            </div>

            <div class="msg">
                <span style="padding: 3px;">${data.message}</span>
            </div>
        </div>
    `)

    setTimeout(function () {
       var $this = $(`.notification .notify[id=${id}]`);

       $this.fadeOut(400)
    }, data.sec || 5000)
}

window.addEventListener('message', sendNoti)