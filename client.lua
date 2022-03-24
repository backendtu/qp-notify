function sendNotification(message, title, color, sec)
    SendNUIMessage({
        title = title or 'This is the title of the notification', 
        message = message or 'This is the message you receive under the title', 
        type = color, 
        seconds = sec or 4000
    })
end

exports('sendNotification', function(...)
    sendNotification(...)
end)
