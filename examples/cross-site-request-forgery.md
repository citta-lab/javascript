# Cross Site Request Forgery (CSRF)

Attack makes use of authenticated application and forces the end user to execute unwanted script/transaction etc.
CSRF, attacks can make transactional peformance and/or update email address etc. If the authenticated user is an admin
then hacker can make use of this to bring down the web applications.

CSRF attacks makes use of browser's inherant requests property. Like browser requests automatically include any credentials 
associated with the site, such as the user’s session cookie, IP address, Windows domain credentials, and so forth. So once
compomised web server cannot make diffrentiation between HACKED request vs actual request.

# How to prevent 
- Use framework which supports CSRF out of the box
- Use XSS validation 
- Verify origin with standard headers
- Make use of custom request headers 
- DONT use GET for state changing operations 