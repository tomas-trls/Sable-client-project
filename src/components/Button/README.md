
This encompasses all of the Apps button stylings which you can access with the buttonStyle prop

-For the Headers on each page: buttonStyle = "isHeader", if there is a plus, add isPlus = {true}
-For the Login page:   buttonStyle = "isLogin"
-For the Home page:  No buttonStyle required, it is the default
-For the NavBar page:  No buttonStyle for Save, Cancel button is buttonStyle = "isCancel--grey"
-For Staff page:  Cancel button is buttonStyle = "isCancel--grey", No buttonStyle for Save, and follow Header styling on line 2.
-For Clients page:  Follow Header styling on line 2 for head buttons, for Cancel buttons buttonStyle = "isCancel--purple", for purple save buttons add buttonStyle = "isPurple", 
-For Clients page(cont): For upload button buttonStyle = "isUpload", for delete client buttons buttonStyle = "isDelete--cancel" and buttonStyle = "isDelete--confirm"
-For Clients page(cont): For disabling save button styling add isinputIncomplete = true and change it via state. 
-For Resources page: Follow Header styling on line 2 for header buttons, for Save buttons buttonStyle = "isResourceSave", for request complete popup buttonStyle = "isRequestComplete"
-For Settings page: "Apply" button is the default no need for buttonStyle, Header buttons follow line 2 guidance.