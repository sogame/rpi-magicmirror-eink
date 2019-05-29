var config = {
  "magicmirror_port": 3000, // magic mirror port
  "display_width": 640, // eink display height in px
  "display_height": 384, // eink display width in px
  "wait_to_load": 15, // wait seconds to load the site and display all data
  // "refresh_interval": "0 */1 * * * *", // update eink every 1 minute
  "refresh_interval": "1 * * * * *", // update eink every second "1"
  // https://github.com/kelektiv/node-cron#cron-ranges
  "timezone": "Europe / Berlin" // https://www.inmotionhosting.com/support/website/general-server-setup/tz-ref-table
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
