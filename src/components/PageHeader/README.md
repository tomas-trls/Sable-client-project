This is a guide for choosing which header design type you may need for your page

If you want a header with just a heading: headerType = "headingOnly"
These are the pages that use this prop:

- home
- book appointment
- settings
- edit resource
- request resource

If you want a header with a heading and button: headerType = "headingButton"
These are the pages that use this prop:

- clients
- resources
- add client
- edit client

If you want a header with a heading, button and dropdown menu: headerType = "headingButtonDropdown"
These are the pages that use this prop:

- staff

NOTE
When you want to change the options in the dropdown menu give it you desired options in optionsArr prop.

Examples

HeadingOnlyJSX
<PageHeader
heading="Home"
headerType="headingOnly"
/>

HeadingButtonJSX
<PageHeader
heading="resources"
text="edit"
headerType="headingButton"
/>

HeadingButtonDropdownJSX
<PageHeader
heading="staff"
text="edit"
headerType="headingButton"
optionsArr={[option1, option2]}
/>
