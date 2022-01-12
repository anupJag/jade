### SLOT BOOKING MICROSERVICE

Slot booking Microservice allows the user to reserve a slot while proceeding for cart checkout.
The microservice allows the user to first reserve a slot and once the order is confirmed, the slot is updated with the order id for reference.

#### Slot Information:

The slots are currently categorized below:

```typescript
enum SLOT_DATA {
  SLOT_1 = '08:00 - 10:00',
  SLOT_2 = '10:00 - 12:00',
  SLOT_3 = '12:00 - 14:00',
  SLOT_4 = '14:00 - 16:00',
  SLOT_5 = '16:00 - 18:00',
}
```

#### GQL QUERY

```js
fetchSlots(startDate, endDate);
```

The fetchSlots API accepts 2 arguments Date in string format ("YYYY-MM-DD"). The GQL QUERY return an array of available slots within the time frame.

The maximum number of slots currently available per slot is 4 (config)

| GQL Query  | args                         |
| ---------- | ---------------------------- |
| fetchSlots | ("2020-10-24", "2020-10-25") |

```js
Response:
{
 "fetchSlots": [
      {
        "date": "2020-10-19",
        "slots": [
          {
            "name": "SLOT_1",
            "remaining": 4
          },
          {
            "name": "SLOT_2",
            "remaining": 4
          },
          {
            "name": "SLOT_3",
            "remaining": 4
          },
          {
            "name": "SLOT_4",
            "remaining": 4
          },
          {
            "name": "SLOT_5",
            "remaining": 4
          }
        ]
      }
   ]
}
```

#### GQL MUTATION

- `reserveSlot()` Reserves a slot for the user
- `releaseSlot()` Releases a reserved/confirmed slot
- `confirmSlot()` Confirms a slot once an order is placed

#### Reserve Slot Mutation

```js
reserveSlot(details);
```

The reserve slot GQL mutation allows the user to mark a slot as reserved, thereby the slot is not accounted when the fetch slot is called.
The reserve slot mutation creates an entry in the database with no orderId.

**NOTE: date has to be passed as "YYYY-MM-DD" format**

| GQL MUTATION | args                                                |
| ------------ | --------------------------------------------------- |
| reserveSlot  | `{ details: {name: "SLOT_1", date: "2020/10/20"} }` |

```js
Response:
{
    id: "5f92b306c0307716fc09b73e",
    name: "SLOT_1",
    date: "1603411200000",
    orderId: null
}
```

#### Release Slot Mutation

```js
releaseSlot(id);
```

Release slot GQL Mutation allows the system to remove the reserved entry from the system. Since the reserved entry has been expired due to inactivity/failing to complete an order, we remove the entry from the DB and enables the slot availability.

| GQL MUTATION | args                       |
| ------------ | -------------------------- |
| releaseSlot  | "5f92b306c0307716fc09b73e" |

```js
Response:
{
    id: "5f92b306c0307716fc09b73e",
    name: "SLOT_1",
    date: "1603411200000",
    orderId: null
}
```

#### Confirm Slot Mutation

```js
confirmSlot(id, orderId);
```

The Confirm Slot GQL Mutation confirms the slot for a particular order.
The Slot data will hold orderId information for a particular order once the order is submitted.

| GQL MUTATION | args                                                                  |
| ------------ | --------------------------------------------------------------------- |
| confirmSlot  | (id: "5f93028e6d3d1c15b87ae536", orderId: "5f92b314c0307716fc09b740") |

```js
Response:

"confirmSlot": {
   "id": "5f93028e6d3d1c15b87ae536",
   "name": "SLOT_2",
   "date": "1603065600000",
   "orderId": "5f92b314c0307716fc09b740"
}
```
