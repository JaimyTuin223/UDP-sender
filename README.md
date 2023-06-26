
# UDP sender.

As the name suggests this code sends UDP packets. This code sends the UDP packet you type in the cmd line to the IP and port you set it in the config file.

###### UDP receiver can be found [here](https://github.com/JaimyTuin223/UDP-receiver) 


## Note

Do note that by default UDP only works when both the sending and receiving code are on the same network, If you wish to send packets outside your own network you can set up Port forwarding on both routers.


## Installation

Installing the correct packages can be done with the following npm command:

```bash
  npm i
```
Don't forget to add your Destination IP and Destination Port inside `botconfig.json`:

```json
{
    "hostname": "DESTINATION_IP",
    "port": 2222
}
```
##### To be able to run this code locally your device will need to have Node.JS installed, which can be found [here](https://nodejs.org/en/download)
    
## Deployment

To deploy this project run

```bash
  npm start
```

## Editing the code
If you want to build the code into your own system, I'd suggest removing the ReadLine (RL), so you can set the message variable in your own way.


## Features

- Simple UDP packet sending.
- Code explanation. (W.I.P)


## Feedback

If you have problems, feedback, or have had any other annoying occurrences please join my discord server [here](https://discord.gg/8KxqWAKCPe)

#### If you don't feel like joining the server feel free to dm me on discord (@jaimytuin) or email jaimytuinyt@gmail.com.

