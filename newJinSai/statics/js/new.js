$(function () {
  $('.hi-text2>input').click(function () {
    var arr = []
    $('.hi-text1>input').each(function () {
      if (!$(this).val()) {
        arr.push($(this))
      }
    })
    if (arr.length > 0) {
      $('.block').css('display', 'block')
    } else {
      $('.block').css('display', 'none')
    }
  })

  $('.uesr_name').blur(function () {
    if ($(this).val().length < 2) {
      $('.hintname').css('display', 'block');
    } else {
      $('.hintname').css('display', 'none');
    }
  })

  $('.phone').blur(function () {
    if (!$(this).val()) {
      $('.hintphone').css('display', 'block');
    } else {
      $('.hintphone').css('display', 'none');
    }
  })


  $(".email").blur(function () {
    if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($(this).val())) {
      $(".hintemail").css('display', 'block');
    } else {
      $(".hintname").css('display', 'none');
    }
  })

  // 简历填写
  $('.re_submit').click(function () {
    var arr1 = []
    $('.re-text1>input').each(function () {
      if (!$(this).val()) {
        arr1.push($(this))
      }
    })
    $('.txt').each(function () {
      if (!$(this).val()) {
        arr1.push($(this))
      }
    })
    if (arr1.length > 0) {
      $('.sub').css('display', 'block')
    } else {
      $('.sub').css('display', 'none')
    }
  })

  $('.user_name2').blur(function () {
    if ($(this).val().length < 2) {
    	console.log(2134)
      $('.resumename').css('display', 'block');
    } else {
      $('.resumename').css('display', 'none');
    }
  })

  $('.jl_phone').blur(function () {
    if (!/^1[3|4|5|8][0-9]\d{4,8}$/.test($(this).val())) {
      $('.resumephone').css('display', 'block');
    } else {
      $('.resumephone').css('display', 'none');
    }
  })


  $(".jl_email").blur(function () {
    if (!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($(this).val())) {
      $(".resumeemail").css('display', 'block');
    } else {
      $(".resumeemail").css('display', 'none');
    }
  })
})
