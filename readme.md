# OAuth Lab

Create a Node Application with a basic OAuth login and then
display information about that user.

Work in groups to implement OAuth for one of the following:

- [Google](https://developers.google.com/accounts/docs/OAuth2WebServer)
- [Facebook](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.1)
- [Dropbox](https://www.dropbox.com/developers/reference/oauth-guide)
- [LinkedIn](https://developer.linkedin.com/documents/authentication)
- [Spotify](https://developer.spotify.com/web-api/authorization-guide/)
- [Instagram](https://www.instagram.com/developer/authentication/)
- [Slack](https://api.slack.com/docs/oauth)

First Register for an developer account and read through the Oauth Docs

- What parameters are required to redirect to the Oauth Provider?
- What parameters are sent in the callback url?
- What parameters must be exchanged for an access token?

Handle your Oauth requests inside './routes/auth'

When a user clicks "/auth/login" redirect them to your oauth provider

Handle redirects back to "/auth/callback"

Once you've received an access token redirect to "/profile" and display the user's information

On the profile page include a link to "Logout"

When a user clicks the link "logout", remove the access token and any user data from session and
redirect home.
