# What?

Simple repo implementing angularfire2 to reproduce the issue described here:

https://github.com/angular/angularfire2/issues/556

# How?

 - git clone
 - npm install
 - fill in firebase creds in app.module.ts
 - npm start
 - http://localhost:8000
 - fill in email and password
 - click "create user"
 - open console
 - click "Set random display name"
 - see error:
 

```
No Firebase App '[DEFAULT]' has been created - call Firebase App.initializeApp
```

# Why?

I would have used plunker but angularfire2 wasn't working on it (because of an issue with Facebook oAuth).
