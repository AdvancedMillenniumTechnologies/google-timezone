/**
 * googleTimeZone
 * @Author Justin John Mathews
 * Copyright www.amt.in
 */


var googleTimeZone = function () {

    /**
     * Module Dependencies
     */

    var https = require('https'),
        querystring = require('querystring'),

        /**
         * Makes request to Google Time Zone API and passes result to a cb
         *
         * @param {Object} options, required
         * @param {Function} cb, required
         * @api private
         */
         request = function (options, cb) {
            https
                .get(options, function (res) {
                    res.on('data', function (d) {
                        return cb(null, JSON.parse(d));
                    });
                })
                .on('error', function (e) {
                    return cb(e);
                });
         },

        /**
         * Request timezone of given cordinates from Google
         *
         * @param {String} lat, required
         * @param {String} lng, required
         * @param {Function} cb, required
         * @api public
         */
        getTimeZone = function (lat, lng, cb) {

            if (lat === '' || lng === '') {
                return cb(new Error("Timezone requires a location cordinates."));
            }

            var timestamp = Math.round((new Date()).getTime() / 1000),
                options = {sensor: false, timestamp:timestamp, location:lat+','+lng},
                params = {
                    hostname: 'maps.googleapis.com',
                    port: 443,
                    path: '/maps/api/timezone/json?' + querystring.stringify(options)
                };

            return request(params, cb);
        };

    return {
        googleTimeZone: getTimeZone
    };

}();

/**
 * Export
 */
module.exports = googleTimeZone;
