# component ts boilerplate
>you can replace the `<component-name>` in the files and folders name with the name of your reusable component as a prefix.

## Install

you can install this package with npm

1. go to root directory of your project

2. update npmrc config file

    2.1 open npmrc file 

        vim ~/.npmrc

    2.2 add following lines to npmrc file for setting private and default npm registry

        registry=http://registry.npmjs.org/

        @eluci:registry=http://54.245.179.143:81/


3. install 

    3.1 install its dependencies

        npm install angular --save

    3.2 install package

        npm install @eluci/components-ts-boilerplate --save
        

4. require('@eluci/components-ts-boilerplate') from your code and add as a dependency for your app

        const component = require('@eluci/components-ts-boilerplate');

        angular.module('myModule',[component]);


## How to use


you can use sample directive in your html template as

```html
<sample data="Sample Data"></sample>
```
1. **data**

    string data to be displayed 
# My project's README
