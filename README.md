A newbie to use Marionette with JQuery-Mobile (JQM).
Here is the question that is posted in stackoverflow: 
http://stackoverflow.com/questions/14638258/a-newbie-to-use-marionette-with-jquery-mobile-jqm

Just to put together a simple boilerplate app to learn how to construct a multi-page JQM app using Marionette.
Obviously, this is more of for me to understand more about JQM and Marionette.
The app is very simple and not doing much by design since the focus is on the structure of the different components.

#Packages used in this app#
* Backbone
* jQuery & JQM
* JQM router - not backbone router (It is just my preference)
** In the current version, it is not really being utilized.
* lodash
* requirejs

#App flow user prospective#
* It has three JQM pages: "Landing, About, Login"
* When it launches, it goes to the Landing page.
* From the landing page, user can go to either the "About" or the "Login page."
* From either the “About/Login” page, it can go back to other two pages.

# App structure #
* All modules are loaded in using requirejs
* There is one Marionette Application instance acting as the central hub
* Each JQM page is modeled as a Marionette Layout, which has three Regions: Header, Content, and Footer. This matches how a JQM page is divided to.
* Each of these Regions (Header, Content, and Footer) contains its Marionette view (Item, Composite, Collection or Layout view). The views can be nested to construct any complex view for your needs.
* The rest are just Backbone/JQM stuffs.
* That is it!

