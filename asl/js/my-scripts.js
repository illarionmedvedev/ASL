      $("#navbar").click(function(){
       $(".sidebar").toggleClass('none');
        console.log("click");
        
    });
    $("#search").click(function(){
        console.log("click");
        $("#search_input").removeClass('none');
        $("#search").addClass('none');
        $(".navigation").css({
      "background-color": "white",
    });
        $(".navigation_title").css({
      "color": "#00539b"
    });
    $("#navbar").attr('src','img/blue/menu.png');
    $("#close_search").attr('src','img/blue/arrow.png');

  });
   
     $("#close_search").click(function(){
        console.log("click");
        $("#search_input").addClass('none');
        $("#search").removeClass('none');
              $(".navigation").css({
      "background-color": "#00539b",
    });
        $(".navigation_title").css({
      "color": "white"
    });
    $("#navbar").attr('src','img/white/menu.png');
    $("#close_search").attr('src','img/white/arrow.png');
    });
    $("#search-mob").click(function(){
        console.log("click");
        $("#search_input-mob").removeClass('none');
        $("#search-mob").addClass('none');
    });
     $("#close_search-mob").click(function(){
        console.log("click");
        $("#search_input-mob").addClass('none');
        $("#search-mob").removeClass('none');
    });

  $(".performance_part").on({
   mouseenter: function(){
    $(".performance").attr('src','img/white/performance.png');
  },
  mouseleave: function(){
    $(".performance").attr('src','img/gray/performance.png');
  }
  });
  $(".routes_part").on({
   mouseenter: function(){
    $(".route2").attr('src','img/white/routes.png');
  },
  mouseleave: function(){
    $(".route2").attr('src','img/gray/routes.png');
  }
  });
  $(".mayfly_part").on({
   mouseenter: function(){
    $(".mayfly").attr('src','img/white/maylfy.png');
  },
  mouseleave: function(){
    $(".mayfly").attr('src','img/gray/maylfy.png');
  }
  });
 $(".contact_part").on({
   mouseenter: function(){
    $(".contacts").attr('src','img/white/contact.png');
  },
  mouseleave: function(){
    $(".contacts").attr('src','img/gray/contact.png');
  }
  });
 $(".setting_part").on({
   mouseenter: function(){
    $(".settings").attr('src','img/white/settings-icon@3x.png');
  },
  mouseleave: function(){
    $(".settings").attr('src','img/gray/settings-icon@3x.png');
  }
  });
 $(".danger_part").on({
   mouseenter: function(){
    $(".danger").attr('src','img/white/danger.png');
  },
  mouseleave: function(){
    $(".danger").attr('src','img/gray/danger.png');
  }
  });
 $(".bottom_performance").on({
   mouseenter: function(){
    $(".bottom_performance").attr('src','img/blue/performance.png');
  },
  mouseleave: function(){
    $(".bottom_performance").attr('src','img/gray/performance.png');
  }
  });
$(".bottom_route2").on({
   mouseenter: function(){
    $(".bottom_route2").attr('src','img/blue/routes.png');
  },
  mouseleave: function(){
    $(".bottom_route2").attr('src','img/gray/routes.png');
  }
  });
$(".bottom_mayfly").on({
   mouseenter: function(){
    $(".bottom_mayfly").attr('src','img/blue/maylfy.png');
  },
  mouseleave: function(){
    $(".bottom_mayfly").attr('src','img/gray/maylfy.png');
  }
  });
$(".bottom_contacts").on({
   mouseenter: function(){
    $(".bottom_contacts").attr('src','img/blue/contact.png');
  },
  mouseleave: function(){
    $(".bottom_contacts").attr('src','img/gray/contact.png');
  }
  });
$(".bottom_navbar").on({
   mouseenter: function(){
    $(".bottom_navbar").attr('src','img/blue/menu.png');
  },
  mouseleave: function(){
    $(".bottom_navbar").attr('src','img/gray/menu.png');
  }
  });