// ============================================================================
// JS/PORTFOLIO.JS
// ----------------------------------------------------------------------------
// Sitewide custom scripting
// 
// Author: Ben Collord
// ============================================================================

$(document).ready(function () {
  
  //
  // Logo Lettering
  // 
  
  $('#logo').lettering();

  $("#logo .char1, #logo .char12").css({
    'font-size' : '30px',
    'font-weight' : '500',
    'color' : '#f8f8f8'
  });

  $("#logo .char2, #logo .char3, #logo .char4").css({
    'color' : '#74fdd2',
    'font-weight' : 600
  });

  $('#logo .char5').css({
    'font-size' : '25px',
    'color' : '#f8f8f8'
  });

  $("#logo .char1").css('padding-right', '5px');
  $("#logo .char12").css('padding-left', '4px');
  
});