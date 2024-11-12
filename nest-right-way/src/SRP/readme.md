SRP
Single Responsibility Principe 

module
controller
service

service manage one thing, sendMail
    service : orderService
                other
controller to handle multiple things
    controller : createOrder - sendMail
