var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
,   und = require('underscore')
,   twilioNum = process.argv[2];

console.log('Looking for all SMS messages made to ', twilioNum);
client.listSms({
   to: twilioNum,
}, function (err, responseData) {
     var winner = und.sample(und.uniq(und.pluck(responseData.smsMessages, 'from')));
     console.log('The winner is ', winner); 
     client.makeCall({
       to: winner, 
       from: twilioNum, 
       url: 'http://twimlbin.com/external/f45a1c49d44942ca' // URL to your TwiML
     
     }, function(err, responseData) {
         console.log('Giving them a call. <ring> <ring>');
     });
});

