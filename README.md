amt-timezone
=============

A node module for Google Time Zone API.

## Usage

```js
    var timezone = require('amt-timezone');
    timezone.amtTimeZone(
                    latitude, // Latitude coordinate
                    longitude, // Longitude coordinate
                    function (err, data) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    }
                );
```
More details can be found on docs of [Google TimeZone API](https://developers.google.com/maps/documentation/timezone).

## License

(c) 2013 Justin John Mathews[amt.in], MIT license.


