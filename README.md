
A simple boilerplate app for learning how to use Marionette to construct a JQuery-Mobile (JQM) app .
This app is very simple and not doing much by design since the focus is on the structure of the different components.
See stackoverflow posting:
[A newbie to use Marionette with JQuery-Mobile (JQM)](http://stackoverflow.com/questions/14638258/a-newbie-to-use-marionette-with-jquery-mobile-jqm)

#Packages used#
* Marionette
* Backbone
* jQuery & JQM
* JQM router - not backbone router (It is just my preference)
	- In the current version, it is not really being utilized.
* lodash
* requirejs

#App flow user prospective#
* It has three JQM pages: "Landing, About, Login"
* Each page has the *cool* panel menu which comes for free by using JQM
* When it launches, it goes to the Landing page.
* From the landing page, user can go to either the "About" or the "Login page."
* From either the "About/Login" page, it can go back to other two pages.
* From panel menu, it can go to any page.

# App structure #
* All modules are loaded in using requirejs
* There is one Marionette Application instance acting as the central hub
* Each JQM page is modeled as a Marionette Layout, which has four Regions: Panel, Header, Content, and Footer.
	- This matches how a JQM page is divided to.
* Each of these Regions (Panel, Header, Content, and Footer) contains its Marionette view (Item, Composite, Collection or Layout view). The views can be nested to construct any complex view for your needs.
* The rest are just Backbone/JQM stuffs.
* That is it!

