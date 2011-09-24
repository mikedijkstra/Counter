// Functions
jQuery.fn.countCharWord = function() {
  this.keyup(function() {
    var value = $('#text').val();
    var text = value.replace(/\s+$/, '');    
    var charCount = text.length;
    if (charCount == 0) {
      var wordCount = 0
    }
    else {
     var wordCount = text.split(/[\s\.\?]+/).length; 
    }
    $('#charCount').text(charCount + ' characters');
    $('#wordCount').text(wordCount + ' words');
    return false;
  })
  return this;
};

// remap jQuery to $
(function($){ 

  $('#text, #charLimit, #wordLimit').countCharWord();

})(window.jQuery);