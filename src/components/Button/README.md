
This encompasses all of the Apps button stylings which you can access with the buttonStyle prop

-For the Headers on each page: buttonStyle = "isHeader", if there is a plus, add isPlus = {true}
-For the Login page:   buttonStyle = "isLogin"
-For the Home page:  No buttonStyle required, it is the default
-For the Book Appointment page:  No buttonStyle for Save, Cancel button is buttonStyle = "isCancel--grey"
-For Staff page:  Cancel button is buttonStyle = "isCancel--grey", No buttonStyle for Save, and follow Header styling on line 2.
-For Clients page:  Follow Header styling on line 2 for head buttons, for Cancel buttons buttonStyle = "isCancel--purple", for purple save buttons add buttonStyle = "isPurple", 
-For Clients page(cont): For upload button buttonStyle = "isUpload", for delete client buttons buttonStyle = "isDelete--cancel" and buttonStyle = "isDelete--confirm"
-For Clients page(cont): For disabling save button styling add isinputIncomplete = true and change it via state. 
-For Resources page: Follow Header styling on line 2 for header buttons, for Save buttons buttonStyle = "isResourceSave", for request complete popup buttonStyle = "isRequestComplete"
-For Settings page: "Apply" button is the default no need, Header buttons follow line 2 guidance.


MOBILE DISPLAY
-For the Login page: Login button scales so no extra steps required
-For the Home page: create a new button with buttonStyle = "isMobileDefault"
-For Book Appointment: create a new button with buttonStyle = "isMobileDefault" and for the Popup create new button with buttonStyle = "isMobilePopup"
-For Staff page: no buttons
-For Client page: create new buttons with buttonStyle = "isMobileDefault" for all of them and the upload buttons remain the same so buttonStyle = "isUpload"
-For Resource page: create new buttons with buttonStyle = "isMobileDefault" and for the booking confirmed popup button buttonStyle = "isMobilePopup"
-For Settings page: the apply button scales; no need to create new button, for logout button buttonStyle = "isLogout", for the "are you sure you want to logout" popup buttons add buttonStyle = "isLogoutPopup--logout" and buttonStyle = "isLogoutPopup--back" respectively, for the "back to login" button add buttonStyle = "isMobilePopup"
