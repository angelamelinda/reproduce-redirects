
## Pre-Requisite

- Using chrome as the browser
- Install [modheader](https://chromewebstore.google.com/detail/modheader-modify-http-hea/idgpnmonknjnojddfkpgkljpfnnfcklj) extention on chrome

## How to Reproduce
- Open modheader and add header **partnerid** with value **a**
  <img width="634" alt="image" src="https://github.com/angelamelinda/reproduce-redirects/assets/19211116/988a66b5-e42d-4d87-9205-9a0734a77cba">
- Run the app with command **yarn dev**
- Open the localhost:3000, it should go to page /b
- Inspect the page, and open network tab and **uncheck disable cache**
  <img width="725" alt="image" src="https://github.com/angelamelinda/reproduce-redirects/assets/19211116/b3bf5746-fc1b-4ce0-8e6b-1393b49e62d5">

- Change the partnerid value to **b** in modheader, and open the localhost:3000, it should go to page /a, but sometimes it shows **ERR_TOO_MANY_REDIRECTS** first before go to /a and it only happens if the disable cache is turn off
- If you are still not face **ERR_TOO_MANY_REDIRECTS**, please change the partnerid value to **a** in modheader, or otherwise to reproduce the issue.

https://github.com/angelamelinda/reproduce-redirects/assets/19211116/af276b42-0923-4c59-9a64-b28ea4399380

