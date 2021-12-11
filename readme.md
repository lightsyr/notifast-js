# Notifast - A tiny javascript library for notifications

## Instalation

to install Notifast you just need to add the following files to your html page.

```
    <html>
        <head>
            <title>Notifast Test</title>
            <link rel="stylesheet" href="path/to/notifast.min.css">
        </head>
        <body>
        </body>
        <script src="path/to/notifast.min.js">
    </html>


```

## Use exemple

```
    //notifast initialization
    
    const notificationApp = notifast({
        position : "bottom-right"
    })

    //emiting a new notification

    notificationApp.emitNotification({
        title: 'Here we go!',
        description: 'Look how easy it is'
    })

```

## Notifast API
Notifast has a very simple API to control all your notifications,  you
just need to call some functions passing the correct arguments and all work its done for you.



## Emitting a new notification
```
    // notification object example

    let notification = {
        title: 'put your title here',
        description: 'try to write anything here',
        icon: '<i class="fas fa-bell"></i>',
        backgroundColor: '#FFF',
        fontColor: '#0F73FA',
        link: 'https://youtu.be/dQw4w9WgXcQ',
        soundEffect: 'path/to/yourAudio.mp3',
        canBeClosed: true
    }

    notificationApp.emitNotification(notification)
```
## Get all notifications elements id's
```
    //Return an array of all notifications id's like: 
    //['notifast-notification-1, 'notifast-notification-2']
    
    notificationApp.getAllNotificationsId()

```

## Delete a notification
to delete a notification by code instead closing it, you just need to call an notifast API function and pass the notification id in parameters

```

    notificationApp.deleteNotification('notifast-notification-1')

```

## Deleting all notifications
you can delete all notifications with this API Function

``` 
    notificationApp.deleteAllNotifications()
```

## License
MIT
