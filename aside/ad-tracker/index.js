/*
Challenge
1. Create a new class called AdvertisingChannel.
2. Inside the body of the class, set up a constructor method that 
   takes data as a parameter.
3. Inside the constructor method, set up name, adViews, adClicks 
   and conversion properties on "this".     
4. Set up a property called conversionRate to hold the percentage of 
   clicks that resulted in someone subscribing. Set conversionRate 
   equals to conversions/clicks * 100.
5. Create a method called getAdvertisingChannelHtml wich returns HTML 
   using the template string provided.
6. Set up an instance of AdvertisingChannel for each channel and make 
   them render their html to the page. I have grabbed the divs for
   you!

Warning: the conversion rate might be very long! Figure out how to display 
it to 1 decimal place - feel free to use Google.

Html string:
    <div class="site-name"> **change this** </div>
    <div>Views: **change this** </div>
    <div>Clicks: **change this** </div>
    <div>Conversions: **change this** </div>
    <div>Conv. Rate: <span class="highlight"> **change this** %</span></div>  
*/

const adData = {
  facebook: {
    site: "Facebook",
    adViews: 23400,
    clicks: 210,
    conversions: 5,
  },
  twitter: {
    site: "Twitter",
    adViews: 23400,
    clicks: 192,
    conversions: 9,
  },
  instagram: {
    site: "Instagram",
    adViews: 23400,
    clicks: 200,
    conversions: 2,
  },
};

class AdvertisingChannel {
  constructor(data) {
    Object.assign(this, data);
    this.conversionRate = ((this.conversions / this.clicks) * 100).toFixed(1);
  }

  getAdvertisingChannelHtml() {
    return `
        <div class="site-name"> ${this.site} </div>
        <div>Views: ${this.adViews} </div>
        <div>Clicks: ${this.clicks} </div>
        <div>Conversions: ${this.conversions} </div>
        <div>Conv. Rate: <span class="highlight"> ${this.conversionRate} %</span></div>
    `;
  }
}

const facebook = new AdvertisingChannel(adData.facebook);
const twitter = new AdvertisingChannel(adData.twitter);
const instagram = new AdvertisingChannel(adData.instagram);

document.getElementById("fb").innerHTML = facebook.getAdvertisingChannelHtml();
document.getElementById("twit").innerHTML = twitter.getAdvertisingChannelHtml();
document.getElementById("insta").innerHTML =
  instagram.getAdvertisingChannelHtml();
