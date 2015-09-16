var announce_timeout;

function announce(message, manner) {
  var announcer, clear_announcer;
   manner = manner || 'polite';
   announcer = document.getElementById('a11y-toolkit-announcer');
    
   if (announcer === null) {
     console.warn('Page does not implement an element with id `a11y-toolkit-announcer`. This message will not be announced.');
     return
   }

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

module.exports = {
  announce: announce
};
