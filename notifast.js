/**
 * Notifast
 * Author: Leandro Campos
 * Version: 0.1
 * License: MIT 
 * Library Github repo: 
 */
function notifast(args){

     //private variables
     let notificationTotal = 0

    //notifast api
    let notifastApplication = {
        mountContainer : mountContainer(args.position),
        emitNotification : (props) => emitNotification(props),
        clearAllNotifications : () => clearAllNotifications(),
        deleteNotification: (id) => deleteNotification(id),
    }
    
    //create a div container for all notifications in document body
    function mountContainer(position){

        let containerPosition

        if(position === 'bottom-right'){
            containerPosition = "notifast-bottom-right"
        }

        let notificationContainerTemplate = `<div class='notifast-container ${containerPosition}'></div>`
        
        return document.body.insertAdjacentHTML("beforeend", notificationContainerTemplate)
    }

    function emitNotification(props){
        
        notificationTotal += 1
        
        let notification = {
            title : props.title !== undefined ? props.title : '',
            id: `notifast-notification-${notificationTotal}`,
            icon: props.icon !== undefined ? props.icon : '<i></i>',
            description: props.description !== undefined ? props.description : '',
            fontColor: props.fontColor !== undefined ? props.fontColor : '',
            backgroundColor: props.backgroundColor,
            link: props.link !== undefined ? props.link : '',
            soundEffect: props.soundEffect !== undefined ? props.soundEffect : '',
            canBeClosed: props.canBeClosed !== undefined ? props.canBeClosed : true,
        }


        let notificationTemplate = `
            <div id='${notification.id}' class='notifast-notification' style='background-color: ${notification.backgroundColor}'>
                <a href=${notification.link} target='_blank' style='color: ${notification.fontColor}'>
                    ${notification.icon}
                    <div>
                        <span>${notification.title}</span>
                        <p>${notification.description}</p>
                    </div>
                </a>
            </div>
        `

        document.querySelector('.notifast-container').insertAdjacentHTML('beforeend', notificationTemplate)
        
        if(notification.canBeClosed){
            console.log(notification.canBeClosed)
            document.querySelector(`#${notification.id}`).insertAdjacentHTML('afterbegin',`<i class="fas fa-times-circle notifast-notification-close-button"></i>`)


            document.querySelector(`#${notification.id} .notifast-notification-close-button`).addEventListener('click',()=>{
                deleteNotification(notification.id)
            })
        }

        if(notification.soundEffect !== ''){
            let sfx = new Audio(`${notification.soundEffect}`)
            sfx.play()
        }
    }

    function clearAllNotifications(){
        document.querySelector('.notifast-container').innerHTML = ''
    }
    
    function deleteNotification(id){
        document.querySelector(`#${id}`).remove()
    }

    return notifastApplication
}