amt-timezone
=============

A node module for Google Time Zone API.

## Install
    npm install git@github.com:AdvancedMillenniumTechnologies/amt-timezone.git

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

Copyright (c) 2013 Justin John Mathews www.amt.in, MIT license.



