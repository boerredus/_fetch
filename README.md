# _fetch

This is a proxy function. It uses the same simple-to-read complex as the `fetch` API but works on the good ol' `XMLHttpRequest` under the hood.<br>
This was an attempt to help my friend [@ericklaus16](https://github.com/ericklaus16) on the [mobile](https://github.com/alfachat/alfachatmobile) version of [AlfaChat](https://github.com/alfachat).

I hope it helps!


## Syntax

As previously mentioned, it follows the same syntax as the `fetch` JavaScript API.

Request example:
```javascript
_fetch("https://google.com", {
    mode: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: null
});
```

It returns a promise which is resolved as soon as the XMLHttpRequest response loads.
Response example:
```javascript
_fetch().then(res => {
    console.log(this);  // XMLHttpRequest object
    console.log(res);   // Response from the server
});
```


**Note #1**: there's no way of getting the original's fetch API responses (e.g Response.ok or Response.status) since it isn't a fetch call.
However, it is possible to access the XMLHttpRequest object properties through the `this` keyword.<br><br>
**Note #2**: one can _include_ Headers on the options parameter (the second one) as when using the fetch API.