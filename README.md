
# Charand
> A simple node package that generates random character of any given length

## install

install with [npm](https://npmjs.com/ "Node package Manager"):

` $ npm install charand --save `


## usage

``` javascript
//require the package
var random = require('charand');
```


## methods

``` javascript
//random lowercase alphanumeric characters
lowGen(length);

//random uppercase alphanumeric characters
highGen(length);

//random alphanumeric characters(both uppercase and lowercase)
allGen(length);

//random characters in various forms, special characters inclusive
charGen(length);
```
+ **length{_Number_}: (optional) The default value is 15**.

## example

1. Calling a method without any parameter:
``` javascript 
random.lowGen();
//returns the default 15 random characters
//=>"hjuekshg35hst61" 
```
2. Calling a method with a parameter{length}:
``` javascript
random.allGen(9);
//returns 9 random characters
//=>"xc@#RA_l8"
```

### password
> This node package can also be utilized in the creation of strong passwords. By making use of the **allGen** method

### what next?
lets meet on [twitter](https://twitter.com/alphakoder) for more updates
