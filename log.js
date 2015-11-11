// Add a log function to the 'window' object
window.log = function log() {
  var $outupt = $('#output');
  var outputStr = '';
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < args.length; i++) {
    var kind = typeof args[i];
    if (kind === 'function') {
      outputStr += '[&nbsp' + kind + '&nbsp]';
    } else {
      outputStr += JSON.stringify(args[i]) + '&nbsp&nbsp';
    }
  }

  var htmlOutput = '<p class="log">' + '<span class="arrow">→&nbsp&nbsp</span>' + outputStr + '</p>';
  $outupt.append(htmlOutput);
}
