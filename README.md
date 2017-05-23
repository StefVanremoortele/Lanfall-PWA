# Lanfall PWA
#### Lanfall v5.0 Progressive Web app
<hr/>
<p align="center"><b>What is this?</b></p>
<hr/>

<em>
An application that (hopefully) will serve during the weekend of Lanfall's LAN-party Edition 5 which:
<br/>
<ul>
	<li>Shows <b>details about the available competitions</b> (Prizes, Rules, Teams, ...)</li>
	<li>makes <b>users vote</b> on other players</li>
	<li>Lets users <b>order food & drinks </b>at their table</b>(not yet implemented)</li>
	<li>Uses <b>QR codes</b> to <b>identify users</b>(not yet implemented)</li>
</ul>

</em>
<hr/>
<p align="center"><b>But how?</b></p>
<hr/>
<p>
  This application is built with 
  <a href="https://cli.angular.io">Angular 4</a> and 
  <a href="https://material.angular.io" >Angular material </a>
</p>
<p>
  It makes use of
  <a href="https://developers.google.com/web/fundamentals/getting-started/primers/service-workers">Service Worker</a> and
  <a href="https://github.com/GoogleChrome/sw-toolbox" >SW toolbox</a>
</p>
<p>
  <a href="https://github.com/angular/in-memory-web-api" >angular-in-memory-web-api</a> for back-end data

</p>
</em>

<hr/>
<p align="center"><b>And how do I install it?</b></p>
<hr/>
<p style="font-size: 12px"><i> ( make sure you have npm installed ) </i> <p>

- clone the project
- step into the folder
<b>
- npm install
- npm install -g @angular/cli
- npm install -g angular-compiler
</b>

Run the project: <b>ng serve</b> 

<hr/>
<p align="center"><b>I little more detail?</b></p>
<hr/>


<em>
<u>Rate players:</u>

Users will be able to rate each other based on their <b>brains, talent and respect</b>.<br/>
At the end of the LAN, the <b>Man Of The Lan</b> will receive a prize/applause

</em>

<em>
<u>Identification:</u>

The <b>goal</b> here is to <b>give a QR code to each player</b> (and visitor). <br/>
With this <b>QR Code</b> they can <b>register their app</b>.

</em>

<u>Food & Beverage:</u><br/>
Users will be able to <b>order foods & drinks</b>.
Those will be <b>served at their seat</b>.
<br/>
Payment stays the same: pay cash @ delivery


<hr/>

<p align="center"><b>What's still under construction?</b></p>
<hr/>

- i've setup the ajax functions in player service but haven't had the time to add functionalities that uses them
- implement indexedDb
- secure player rate component
- implement QR code
- order@seat component

<hr/>

<p align="center"><b>So what have I learned??</b></p>

<hr/>

<b>Material:</b> by using material2 together with angular flex layout I've learned it's eazy to give a nice mobile look to your app

<b>Service Worker, sw toolbox, sw precache:</b> gives a nice offline experience. Kind of contests with native apps.

<b>Manifest:</b> Used to make an app shell => the basics of your app...

<b>Protractor:</b> Handy for testing your angular app. I see it as the JUnit testing in java.


<b>Angular:</b> I've learned the fundamentals of angular:

* I now understand angular modules, providers, declarations, decorators, services, pipes, ..
* I now understand angular binding, two way binding, ..
* I've learned routing and navigation 
* I've discovered <a href="https://github.com/angular/in-memory-web-api" >angular-in-memory-web-api</a> for back-end data
* Typescript: OOP in javascript yeaay

<b>Webpack:</b> Module packer

<b>Git:</b> Not every aspect of git was clear to me before this project. By using git for this app I now master the git-techniques.

<b>npm:</b> By having some trouble (<b>read: enormous amounts of trouble</b>) with different angular and material versions, I now have more control of npm.


<hr/>

<p align="center"><b>Versions</b></p>

<hr/>
<div  align="center">

  **NAME:**    | NodeJS | TypeScript | Angular CLI | Angular | Angular Material
  ------------ | ------ | ---------- | ----------- | ------- | ----------------
  **VERSION:** | `6.10.3`  | `2.2`      | `1.0.0`       | `4.0`   | `2.0.0-beta3`

</div>