# Multiple angular elements
The project shows how multiples angular elements works together. 

Projects my-element-a and my-element-b are angular elements. 

Have a look at the following websites for how to build web component using angular.

## How to build web components using Angular
https://angular.io/guide/elements

https://www.telerik.com/blogs/getting-started-with-angular-elements

## Webpack : Output jsonpFuntion and library

https://webpack.js.org/configuration/output/#outputjsonpfunction

> It turns out that we ran into an issue with the global variable 'webpackJsonp' when loading multiple angular elements from different microapps. When we loaded the first angular element, it created “webpackJsonp” variable inside window object. The second microapp should have overridden the first microapp’s content declared on this variable but that didn’t happen and this was all because of a simple issue — both microapps were using the same variable name!

> To avoid the conflict, we just had to override the default 'webpackJsonp' variable name with some unique variable name specific to the angular app or element.

https://medium.com/@sri1980/multiple-angular-elements-apps-loading-in-one-window-7bcc95887ff4

## Build
Go to my-element-a and my-element-b
> npm run build

deploy my-element-a/dist/my-element-a.js to demo-multi-elements/my-element-a-dist

deploy my-element-b/dist/my-element-b.js to demo-multi-elements/my-element-b-dist

## Run
Go to demo-mutli-elements
> npm run start

