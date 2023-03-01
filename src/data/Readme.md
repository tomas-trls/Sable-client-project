# 🌟 DATABASE 🌟

This is the mock data that will be used for now.

The mock data is an object with multiple array.

- Clients
- Resources
- Staff Members
- Resource Requests
- Bookings

To access the data, import the datafile in your page and use `mockData.ARRAY_NEEDED`. (ie. mockData.clients to get all the clients)
You can then, use the data depending on your needs. (ie for the client name: `mockData.clients[0].firstName` <!--output = Mariah --> )

This is a table that summarizes how to call each key.
the `[i]` is the object in the array. either use a loop or call the specific object needed.

|        Staff        |        Resources        |        Clients        |        Bookings        |        ResourcesRequest        |
| :---:               | :---:                   | :---:                 | :---:                 | :---:                         |
| `mockData.staff[i]` | `mockData.resources[i]` | `mockData.clients[i]` | `mockData.bookings[i]` | `mockData.resourcesRequest[i]` |
