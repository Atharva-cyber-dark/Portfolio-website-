DarkModeJS
Pure Javascript, without any plugins and jQuery

Light & Simple
DarkModeJS helps you to auto detect user's time or system scheme and switch to right mode.

Just copy-paste this code to end of body tag:

<script src="darkmode.js"></script>
<script>var DarkMode = new DarkMode();</script>
Or use it with options:

<script src="darkmode.js"></script>
<script>
  var options = {
    light: "light.css",
    dark: "dark.css",
    startAt: "23:00",
    endAt: "06:00",
    checkSystemScheme: true,
    saveOnToggle: true
  };
  var DarkMode = new DarkMode(options);
</script>
If you use separate theme-files...
To display light theme for non-javascript user copy-paste it to head:

<noscript>
  <link rel="stylesheet" type="text/css" href="light.css">
</noscript>
