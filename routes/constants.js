/**
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at http://mozilla.org/MPL/2.0/. OpenMRS is also distributed under
 * the terms of the Healthcare Disclaimer located at http://openmrs.org/license.
 */
module.exports = {
  OPENMRS_BAMBOO_URL: "https://ci.openmrs.org",
  SHIELDS_IO_BASE: "https://img.shields.io/badge/", // https://img.shields.io/badge/<SUBJECT>-<STATUS>-<COLOR>.svg

  OPENMRS_MODULUS_URL: "https://modules.openmrs.org/modulus/api/modules/",
  OPENMRS_MODULUS_ARGS: "?order=desc&sort=dateCreated&max=1",

  OPENMRS_VERSION_BADGE_COLOR: "009384",

  DEFAULT_STYLE: "flat-square",
  LOGO_STYLE: "flat", // see this issue: https://github.com/badges/shields/issues/671

  OPENMRS_LOGO_DATA:
    "data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NyIgaGVpZ2h0PSI4NyIgdmlld0JveD0iMCAwIDg3IDg3Ij48cGF0aCBkPSJNMjMuNjEgMjMuNTI4YzUuMDg1LTUuMDY4IDEyLjExMy04LjIwNCAxOS44NzUtOC4yMDQgNy43NDMgMCAxNC43NTIgMy4xMiAxOS44MzUgOC4xNjdsLjAyLTE4LjY1NEM1Ny4zOSAxLjc4IDUwLjY0LjA1NiA0My40ODYuMDU2Yy03LjE1NSAwLTEzLjk0MyAxLjk0Mi0xOS44OTYgNWwuMDIgMTguNDcyeiIgZmlsbD0iI2YyNjUyMiIvPjxwYXRoIGQ9Ik02My4zNCA2My4xMmMtNS4wODYgNS4wNjctMTIuMTEgOC4yMDItMTkuODcyIDguMjAyLTcuNzQyIDAtMTQuNzUyLTMuMTItMTkuODM2LTguMTY2bC0uMDIgMTguNjU2YzUuOTUyIDMuMDU1IDEyLjcwMiA0Ljc4IDE5Ljg1NyA0Ljc4IDcuMTU0IDAgMTMuOTA2LTEuNzI2IDE5Ljg1NS00Ljc4bC4wMTMtMTguNjkzeiIgZmlsbD0iI2VlYTYxNiIvPjxwYXRoIGQ9Ik0yMy42NDggNjMuMTQyYy01LjA4NC01LjA2OC04LjIzLTEyLjA2OC04LjIzLTE5LjgwNyAwLTcuNzE3IDMuMTMtMTQuNzA1IDguMTkyLTE5Ljc3M2wtMTguNzE2LS4wMkMxLjgzIDI5LjQ3NS4xIDM2LjIwMi4xIDQzLjMzNWMwIDcuMTMzIDEuNzMgMTMuODYzIDQuNzk2IDE5Ljc5NWwxOC43NTIuMDEyeiIgZmlsbD0iIzViNTdhNiIvPjxwYXRoIGQ9Ik02My4zMyAyMy40OWM1LjA4MyA1LjA2OCA4LjIzIDEyLjA3MyA4LjIzIDE5LjgxIDAgNy43MTgtMy4xMyAxNC43MDYtOC4xOTQgMTkuNzdsMTguNzE2LjAyYzMuMDY1LTUuOTMgNC43OTUtMTIuNjYgNC43OTUtMTkuNzg4IDAtNy4xMzQtMS43My0xMy44NjUtNC43OTYtMTkuNzk4bC0xOC43NS0uMDE0eiIgZmlsbD0iIzAwOTM4NCIvPjwvc3ZnPg%3D%3D",
  ESAUDE_LOGO_DATA:
    "data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAC%2BlBMVEUAAAAQgkvE%2BKD%2FUC361TbfMTlPo28khE0AXhgOgkvQBxQVg00Tg0z20jUAfUT51DqUxKru8urcthX%2F0GX51DQgg0zQERobhE1AkGINgkpdm3ZwpoZ4rI2KvKCt1L%2Fy8vIyjlr%2F2jMBilb%2B3jj61jgviFUrhlH51DZGkGP%2B31BKk2dinXpVmHBooX%2FcSEl2qYtLlWp9sJLeWFfleHePvqTymJrF69r61TXRGxU7jlwOgEbbHCXRDRjQFAXQFx40iVgSg0vQACXZQUPQChcAg1s%2FjV1Qk2naQ0TeOkJPlWpkm3j03nb%2F5VraQkPbbW3v3nxBkmNWmnJZm3L%2B4VitnYm5l4ntsHnh2IVbnXZipH7ia2lipYB9tphOmG7ohYXolJSdybPqenjti4v4tbWk1Lrum8X%2F%2F%2B%2F71SEAeEzQABjTADXRDBcHgUkGgEjOAAvXACnZIS%2F%2B30MciWJYmG8Ajlr%2F2kfbKzoAkWAxi2PeWl4emGVCkWI2j2oAi2aDp3UKi2fULkvMyoHc0n5HlHT%2F51RXmXH7120qkWzV0YGZsnwbl2f%2F4l6KnoI6lnX%2B3k35tHXj1XtXnXrut3V0qInbenfaWF5%2FoID44XTSgXj72W7gfWrhYW7%2F4W1spofCmIfkcHTHhIbdUVNenHb05Hzv4YDmjnY%2BmYDnXWXWwZp0rYj61XzilpPqnX3utIL%2F5Wlion395Gx7s5P83oBrp4Tmg4HRmpHlcnHheHJrqITheHT97Ipwp4f%2F6XiMvaTsioxwqoj%2F5oH%2F6nxtqIZ4rI2BsJPne3v85IaOvaL%2F6I6ayq%2F%2Fu8H%2F%2BKz%2F8KoCgUcAfz8AfD4Af0IAf0X%2F2icLgUUAgEIAfkHRAADOAAAcgUcWgEcAgkX50zHTAAAdjlIBh0n%2F4j%2F%2F1yHYAAU%2Bj18XjFALiEsMgkn%2F3kcAhUb%2F2S%2F71Sz%2F2CveKSvkICv%2F2iHPDAFGlmdAmWQnjVcPkVAQi07jREYAhT%2F%2F6T3cODb%2F4jT%2F3zH30i%2FcEhzsFRbcCRLvySCDAAAAzXRSTlMA%2FgEB%2FgMD%2FQP%2B%2Fvz%2B%2Fv38OgsEA%2F79%2FPv6%2Bezj2DkgBP79%2FPz8%2B%2Fv78%2FLv7u7p5uTd09BpRjAU%2Fv79%2Ff39%2Ffv6%2Bvr5%2Bfj29PLt6%2Bbm5uTi39%2Fe2tbT0tHMwaSim4hxUD4vLyofHRUH%2Fv39%2FPz7%2B%2Fv6%2BPf29fX08%2FLw8O%2Fv7u3r6%2Bvq6unp6Ofl4eHh4eDg4N%2Fd3d3c3Nzb2tjY2NfX1NTT0dDPzszLysrJyMfExL6vrKOgmpmWlZORjYiFgH94eHJva2diYV9dTU0wKSUhj33VJAAAAttJREFUeAGtjVVUI0kUQF86JA3xQIiECO7u7i4ssrgsvu7u7u7u7u7ustvd8RDBXWDHfc6ZShMIM59z5n5UV%2FW95z04aTAM2%2FZgMpnYcdaXiU4%2FzP3ypj%2Fe7E3t54uOEbEWKdoDiPvUfWKUYBse4N%2BfP2h%2BoPk7%2Bo5B%2BleJWYHyxC4RHYMv%2FPdR1MTBxaDFfZ8MAwtA0zRj1xN6%2B%2Bz0p2JgI%2F9X1AFHRERoqPDMO57tB4D2cQWXx%2BNxCwW7X0lH%2Fo%2F55QgvRIbQ8M45yVpIDTyfx6DhKhaaNPDTvEPo5UI4Wfu6dX8v9IwpGG58ZHvf%2BGZCIsxAOlSydtv7RXk5X0PPjGLT%2B5PX3zXBX3JIJI4lQ8hz7xWtlxz%2BEn7ZeZ7b4%2BR1DwXxl%2B%2B9PCTk4tqnWx%2B35OVesJICf8v13A1P3XqagW948u23Hnyk9ZmbznZmnptrLU4D%2BHC8kJ5PKV3%2B1Yepq1660GqxZEo5nJKjnQCgiTZxfRgys7Jmkm947X4KN13zQs56PofDkTrjBwHYkDqt4%2FJGS2%2BZPBTUdicZXqA3XtlykVXKkVqKzwAWgDf8KTfJjJfUrEW13UjiREAsZbus5QprvrOC9q4iVW7E9TfcfHepKYwgslExGnx65VR8Gu3pQnSPyV9wlmCUiHzUSJgDlCQq3uynPQ0bPr%2BUDMfxOUJ3u4ogqLgYKju42%2BNZkLL6VCyJ62Mizboq1RxBxsWRgsDfgL0VdB6Zerea9A9LiNTpopNkBBUTwNjVgXZvwISBLz6rrK8mbYyEcjMqcMKs%2FLhDjcTWiME6q%2FOx5002Y0K5zlymKiB0iZqtDSjEkqcsFS%2FWP2G3GVVVdkFZUph%2BoR3AE2iTV%2BN%2FqLNcfd84Ff59wyzV0H3tWOOIZwUGAynDaXtWXv6nK%2Bt%2F9VDj2A7R0LdqwLbPQFXv72IAkQgg%2Fcdfte6fnoJF52y6pIei64mw%2FJhIYC7JhlPIMfn1%2BtlTo94qAAAAAElFTkSuQmCC",

  buildQueryParams: function (logo, style) {
    if (logo === "openmrs") {
      return (
        "logoWidth=14&style=" +
        this.LOGO_STYLE +
        "&logo=" +
        this.OPENMRS_LOGO_DATA
      );
    } else if (logo === "esaude") {
      return (
        "logoWidth=14&style=" +
        this.LOGO_STYLE +
        "&logo=" +
        this.ESAUDE_LOGO_DATA
      );
    } else {
      return "style=" + (style ? style : this.DEFAULT_STYLE);
    }
  },

  sanitize: function (str) {
    return str.replace(new RegExp("-", "g"), "--");
  },
};
