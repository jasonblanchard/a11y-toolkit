var announce_timeout;

function announce(message, manner) {
  var announcer, clear_announcer;
   manner = manner || 'polite';
   announcer = document.getElementById('a11y-general-announcer');
   announcer.setAttribute('aria-live', 'off');
   clear_announcer = function() {
     announcer.innerHTML = '';
     announce_timeout = null;
   };
   announcer.setAttribute('aria-live', manner);
   announcer.innerHTML = message;
   clearTimeout(announce_timeout);
   announce_timeout = setTimeout(clear_announcer, 500);
}

module.exports = announce;
