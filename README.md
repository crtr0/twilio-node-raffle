# Twilio Node Raffle
This is a simple Node app to run a raffle, powered by [Twilio SMS](http://twilio.com/sms).

###Usage

First, purchase a new Twilio number. This is important, more about this at the bottom.

Next, ask people to enter the raffle by sending an SMS to the phone number you've purchased. 
Last, execute the raffle by running the Node app:

```bash
# Set your account sid and auth token in your environment, so you don't have to
# enter them every time
export TWILIO_ACCOUNT_SID='AC1234'
export TWILIO_AUTH_TOKEN='cdef'

# Run the app and pass your Twilio number
node app.js '+15555551212' 
```
