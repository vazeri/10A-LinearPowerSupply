# 10A-LinearPowerSupply
2 boards designed in Altium Designer 14, with digital volt and amp meters (detailed design process can be read at [Instructables](https://www.instructables.com/id/10Amp-Linear-Power-Supply/) )
---
Why do it for 3 when we can design for 10?! 

Overcomplicating this kind of “simple” projects can make your life a bit harder but way more exiting, and the rewards just have no price, 

![alt text](https://vazeri.github.io/img/portfolio/5.jpg)

A linear power supply takes the 120vCA 60 Hz mains power, steps the voltage down through a transformer, rectifies, filters, and regulates it. It's simple and robust; the main problem is that it's inefficient. You need a big, heavy transformer to handle the current, high current diodes, huge electrolytic capacitors, and lots of thermal dissipation for your Darlington arrays. It can also become prohibitively expensive to build high power linear supplies, even if they're easy to design. (This one was around $6,500 MXN pesos, around 433 USD considering 1 USD = 15 MXN pesos)

Every single file used to make the power supply is in my GitHub Repository feel free to use it at your discretion, hopefully you can do it better, smaller, cheaper, or why not even bigger!

# Schematics

Each component and its purpose is explained to detail in this [Link](https://www.instructables.com/id/10Amp-Linear-Power-Supply/)

![alt text](https://github.com/vazeri/10A-LinearPowerSupply/blob/master/img/5vsch.jpg)

![alt text](https://github.com/vazeri/10A-LinearPowerSupply/blob/master/img/dualsch.jpg)

# Printed Circuit Boards

The power supply is actually 2 separate boards in order to save space and fit them in the case one above the other 

![alt text](https://github.com/vazeri/10A-LinearPowerSupply/blob/master/img/pcb1.jpg)

![alt text](https://github.com/vazeri/10A-LinearPowerSupply/blob/master/img/pcb2.jpg)

# BONUS: Choose your circuit protection!
Pick one of the several schematics prepared to protect your circuit, and don’t forget, no breaker is as fast as a well calculated fuse!

![alt text](https://github.com/vazeri/10A-LinearPowerSupply/blob/master/img/protection.jpg)
