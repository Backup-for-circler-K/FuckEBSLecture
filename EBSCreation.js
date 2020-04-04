
$(document).ready(function(e) {
	var validator = $("#joinForm").validate({
		onfocusin: function(element) { 
			if(!($(element).attr( "name" ) == "gender" || $(element).attr( "name" ) == "genderInfoAgreeYn" || $(element).attr( "name" ) == "cellPhoneNoInfoAgreeYn" ) ) {
				$(element).valid();
			}
		},
		onkeyup: function(element, event) { 
			if($(element).attr( "name" ) == "password") {
				var str = $(element).val();
				if(str.length > 12) {
					alert('6-12자의 영문소문자와 숫자 사용.');
					$(element).val(str.substr(0,str.length-1));
				}
			}
		},
		onclick: function(element) { 
			if($(element).attr( "name" ) == "gender"  || $(element).attr( "name" ) == "genderInfoAgreeYn" || $(element).attr( "name" ) == "cellPhoneNoInfoAgreeYn") {
				$(element).valid();
			}
		},
		groups: {
			genderGroup: "gender genderInfoAgreeYn",
			cellPhoneNoGroup: "cellPhoneNo cellPhoneNoInfoAgreeYn"
		},
		rules: {
			userId : {
				required: true,
				minlength: 6,
				maxlength: 12,
				validUserId: true,
				checkUserId: true
			},
			password: {
				required: true,
				minlength: 8,
				maxlength: 12,
				checkPassword1: true,
				checkPassword2: true,
				checkPassword3: true,
				checkPassword4: true
			},
			confirmPassword: {
				required: true,
				equalTo: "#password"
			},
			userName: {
				required: true,
				checkUserName3 : true,
				checkUserName2 : true,
				checkUserName1 : true,
				checkUserName : true
			},
			gender: {
				checkGender : true
			},
			genderInfoAgreeYn: {
				checkGenderInfoAgreeYn : true
			},
			birthdayYear : {
				checkBirthday : true
			},
			birthdayMonth : {
				checkBirthday : true
			},
			birthdayDay : {
				checkBirthday : true
			},
			emailId: {
				checkEmail: true
			},
			emailDomain: {
				checkEmail: true,
				checkIntrcpEmailDomain: true
			},
			cellPhoneNo: {
				//checkCellPhoneNo: true,
				checkCellPhoneNo1 : true
			},
			cellPhoneNoInfoAgreeYn: {
				checkCellPhoneNoInfoAgreeYn: true
			}
		},
		errorPlacement: function(error, element) {
			// Append error within linked label
			if(element.attr( "name" ) == "birthdayYear" || element.attr( "name" ) == "birthdayMonth" || element.attr( "name" ) == "birthdayDay") {
				$( element ).closest( "form" ).find( "#birthDay_desc").html(error);
			}
			else if(element.attr( "name" ) == "emailId" || element.attr( "name" ) == "emailDomain") {
				$( element ).closest( "form" ).find( "#emailAddress_desc").html(error);
			}
			else if(element.attr( "name" ) == "genderInfoAgreeYn") {
				$( element ).closest( "form" ).find( "#gender_desc").html(error);
			}
			else if(element.attr( "name" ) == "cellPhoneNoInfoAgreeYn") {
				$( element ).closest( "form" ).find( "#cellPhoneNo_desc").html(error);
			}
			else {
				$( element ).closest( "form" ).find( "#" + element.attr( "name" )+"_desc").removeClass("status_ok_desc");
				$( element ).closest( "form" ).find( "#" + element.attr( "name" )+"_desc").html(error);
			}
		},
		messages: {
			userId: {
				required: "6-12자의 영문소문자와 숫자 사용.",
				minlength : "6-12자의 영문소문자와 숫자 사용.",
				maxlength : "6-12자의 영문소문자와 숫자 사용.",
				validUserId : "6-12자의 영문소문자와 숫자 사용.",
				checkUserId: "아이디 중복확인을 해 주세요."
			},
			password: {
				required: "8-12자의 영문대소문자, 숫자, 특수문자만 가능",
				minlength : "8-12자의 영문대소문자, 숫자, 특수문자만 가능",
				maxlength : "8-12자의 영문대소문자, 숫자, 특수문자만 가능",
				checkPassword1: "8-12자의 영문대소문자, 숫자, 특수문자만 가능",
				checkPassword2: "비밀번호는 숫자와 영문자를 혼용하여야 합니다.",
				checkPassword3: "비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.",
				checkPassword4: "아이디가 포함된 비밀번호는 사용하실 수 없습니다."
			},
			confirmPassword: {
				required: "비밀번호를 다시 확인해주세요.",
				equalTo: "비밀번호가 일치하지 않습니다."
			},
			userName: {
				required: "이름을 입력해 주세요.",
				checkUserName3 : "이름은 한글 13자, 영문 40자 이하로만  입력 가능합니다.",
				checkUserName2 : "이름은 한글 13자, 영문 40자 이하로만  입력 가능합니다.",
				checkUserName1 : "이름은 한글 13자, 영문 40자 이하로만  입력 가능합니다.",
				checkUserName : "금지된 사용자 이름입니다."
			},
			gender: {
				checkGender : "성별을 입력하려면, 성별 정보제공에 동의해 주세요."
			},
			genderInfoAgreeYn: {
				checkGenderInfoAgreeYn : "성별 정보를 입력해주세요. 정보제공을 원치않으시면 동의를 해제해주세요."
			},
			birthdayYear : {
				checkBirthday: "아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다."
			},
			birthdayMonth : {
				checkBirthday: "아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다."
			},
			birthdayDay : {
				checkBirthday: "아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다."
			},
			emailId: {
				checkEmail: "이메일을 입력해 주세요."
			},
			emailDomain: {
				checkEmail: "이메일을 입력해 주세요.",
				checkIntrcpEmailDomain: "이메일을 정확히 입력해 주세요."
			},
			cellPhoneNo: {
				//checkCellPhoneNo: "아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다.",
				checkCellPhoneNo1: "휴대폰번호를 입력하려면, 휴대폰번호 정보제공에 동의해 주세요."
			},
			cellPhoneNoInfoAgreeYn: {
				checkCellPhoneNoInfoAgreeYn: "휴대폰번호 정보를 입력해주세요. 정보제공을 원치않으시면 동의를 해제해주세요."
			}
		},
		submitHandler: function(form) {
			// do other things for a valid form
			if(!_isAuthenticated) {
				$("#authNo_desc").removeClass("status_ok_desc").html("인증이 필요합니다.");
				if(_guardianAuthResultCode == 3) {
					$("#guardian_auth_yn_desc").removeClass("status_ok_desc").html("보호자(법정대리인)동의 기준이 맞지 않습니다.");
				}else {
					$("#guardian_auth_yn_desc").removeClass("status_ok_desc").html("보호자 동의 확인이 필요합니다.");
				}
				return false;
			}else {
				if($(':input:radio[name=birthdayYear]:checked').val() == ''
					|| $(':input:radio[name=birthdayMonth]:checked').val() == ''
					|| $(':input:radio[name=birthdayDay]:checked').val() == '') {
					
					$.chkBrithDay('아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다.');
					return false;
				}
				form.submit();
			}
		}
	});
	
	$.validator.addMethod("validUserId",function(value, element) {
		return _isValidUserId();
	});
	
	/* 중복체크여부 validate 추가 */
	$.validator.addMethod("checkUserId",function(value, element) {
		return _isValidUserIdValue;
	});
	
	/*
	* 비밀번호 validate 추가
	* 8-12자의 영문대소문자, 숫자, 특수문자만 가능
	*/
	$.validator.addMethod("checkPassword1",function(value, element) {
		var upw = $('#password').val();
		if(!/^[a-zA-Z0-9\^$\(\)\*\+\.\/\?\[\]\\\{\}\|\-,!"#%&':;<=>@_`~]{8,12}$/.test(upw)) {  
			return false;
		}
		return true;
	});
	
	/*
	* 비밀번호 validate 추가
	* 비밀번호는 숫자와 영문자를 혼용.
	*/
	$.validator.addMethod("checkPassword2",function(value, element) {
		var upw = $('#password').val();
		var chk_num = upw.search(/[0-9]/g); 
		var chk_eng = upw.search(/[a-z]/ig);
		if(chk_num < 0 || chk_eng < 0) { 
		    return false;
		}
		return true;
	});
	
	/*
	* 비밀번호 validate 추가
	* 비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.
	*/
	$.validator.addMethod("checkPassword3",function(value, element) {
		var upw = $('#password').val();
		if(/(\w)\1\1\1/.test(upw)) {
			return false;
		}
		return true;
	});
	
	/*
	* 비밀번호 validate 추가
	* 아이디가 포함된 비밀번호는 사용하실 수 없습니다.
	*/
	$.validator.addMethod("checkPassword4",function(value, element) {
		var upw = $('#password').val();
		if(upw.search(jQuery.trim($('#userId').val()))>-1 && jQuery.trim($('#userId').val()) != "") {
		    return false;
		}
		return true;
	});
	
	/*
	* 이름 validate 추가
	* 특수문자 체크 (')만 허용
	*/
	$.validator.addMethod("checkUserName3",function(value, element) {
		$('#userName').val(jQuery.trim($('#userName').val()));
		var name = $('#userName').val();
		
		if(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@#$%&\\\=\(\"]/gi.test(name)) {  
			return false;
		}
		return true;
	});
	
	//유니코드 공백문자 체크 및 제거
	$.validator.addMethod("checkUserName2",function(value, element) {
		var ranges = [
			  '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
			  '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
			  '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
			];
		
		$('#userName').val(jQuery.trim($('#userName').val()));
		var name = $('#userName').val();
		var result = true;
		
		name = decodeURIComponent(encodeURIComponent(name).replace(/%E3%85%A4/g, ''));
		name = name.replace(new RegExp(ranges.join('|'), 'g'), '');
		
		if (name == '') {
			result = false;
		}
		
		$('#userName').val(name);
		return result;
	});
	
	//사용자 이름 byte 체크(40바이트이하) 
	$.validator.addMethod("checkUserName1",function(value, element) {
		$('#userName').val(jQuery.trim($('#userName').val()));
		var name = $('#userName').val();
		var result = true;
		
		var stringByteLength = (function(s,b,i,c){
			for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
			return b
		})(name);
		//console.log('stringByteLength : ' + stringByteLength + ' Byte');
		
	    if(stringByteLength > 40) {
	    	result = false;
	    }
		return result;
	});
	
	//금지된 사용자 이름 체크 
	$.validator.addMethod("checkUserName",function(value, element) {
		$('#userName').val(jQuery.trim($('#userName').val()));
		var name = $('#userName').val();
		var result = true;
		$.ajax({
   			url: '/idp/join/finduserid',
   			type: "POST",
   			data: { 'cmd':'checkUserName', 'name': name},
   			dataType: "text",
   			async: false,
   			success: function(data) {
   				if(data == 'badName'){
   					result = false;
   				}
   			}
   		});
		
		return result;
	});
	
	//성별정보제공동의여부 체크 
	$.validator.addMethod("checkGender",function(value, element) {
		var genderInfoAgreeYn = $("#genderInfoAgreeYn").is(":checked");
		var gender = $("input:radio[name='gender']");
		
		if(!genderInfoAgreeYn) {
			if(gender.is(":checked")) {
				$("input:radio[name='gender']").attr("checked",false); 
				return false;
			}
		}
		return true;
	});
	
	//성별 선택 여부 체크
	$.validator.addMethod("checkGenderInfoAgreeYn",function(value, element) {
		var genderInfoAgreeYn = $("#genderInfoAgreeYn").is(":checked");
		var gender = $("input:radio[name='gender']");
		if(genderInfoAgreeYn) {
			if(!gender.is(":checked")) {
				return false;
			}
		}else {
			$("input:radio[name='gender']").attr("checked",false); 
		}
		return true;
	});
	
	//생년월일 validate
	$.validator.addMethod("checkBirthday",function(value, element) {
		if($(':input:radio[name=birthdayYear]:checked').val() == ''
			|| $(':input:radio[name=birthdayMonth]:checked').val() == ''
			|| $(':input:radio[name=birthdayDay]:checked').val() == '') {
			return false;
		}
		return true;
	});
	
	//이메일 validate
	$.validator.addMethod("checkEmail",function(value, element) {
		var emailAddress = $("#emailId").val() + "@" + $("#emailDomain").val();
		if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailAddress)) {  
			return false;
		}
		return true;
	});
	
	//금지된 이메일 도메인
	$.validator.addMethod("checkIntrcpEmailDomain",function(value, element) {
		var emlDomain = jQuery.trim($('#emailDomain').val());
		var result = true;
		$.ajax({
   			url: '/idp/validate?cmd=checkIntrcpEmailDomain&emlDomain=' + emlDomain,
   			dataType: "text",
   			async: false,
   			success: function(data) {
   				if(data == 'badDomain'){
   					result = false;
   				}
   			}
   		});
		
		return result;
	});
	
	//휴대폰번호 validate
	$.validator.addMethod("checkCellPhoneNo",function(value, element) {
		var authType = $("input[name='general_auth_type']:checked").val();
		var isJunior = getNowAge() < 14;
		if((authType == "M" && !isJunior) || value != "") {
			if(!/^([0-9]{8,13})$/.test(value)) {
				return false;
			}
		}
		return true;
	});
	
	//휴대폰번호 정보제공동의 여부 체크
	$.validator.addMethod("checkCellPhoneNo1",function(value, element) {
		var cellPhoneNoInfoAgreeYn = $("#cellPhoneNoInfoAgreeYn").is(":checked");
		var cellPhoneNo = $('#cellPhoneNo');
		var authType = $("input[name='general_auth_type']:checked").val();
		var isJunior = getNowAge() < 14;

		if(!cellPhoneNoInfoAgreeYn && ( (authType == "M" && !isJunior) || value != "" )) {
			return false;
		}
		return true;
	});
	
	//휴대폰번호 입력여부
	$.validator.addMethod("checkCellPhoneNoInfoAgreeYn",function(value, element) {
		var cellPhoneNoInfoAgreeYn = $("#cellPhoneNoInfoAgreeYn").is(":checked");
		var cellPhoneNo = $('#cellPhoneNo');
		if(cellPhoneNoInfoAgreeYn) {
			if(jQuery.trim(cellPhoneNo.val()) == "") {
				return false;
			}
		} else {
			cellPhoneNo.val("");
		}
		return true;
	});
	
	$("#userId").change(function(){
		_isValidUserIdValue = false;
		//$("#userId_desc").removeClass("status_ok_desc");
	});
	
    $('#password').keyup(function() {
    	pwdStrengthCheck(this.value, '/idp' );
    });
    
    $('#generalAuthBtn').click(function() {
    	var authType = $("input[name='general_auth_type']:checked").val();
    	var authMsg = $("#general_auth_desc");

    	if(checkUser(authMsg)) {
	    	if(authType == "M") {
	    		$.ajax({
	    			url: '/idp/msg/sms/send',
	    			type: 'POST',
	    			data: {},
	    			dataType: "text",
	    		  	success: function(data) {
	    		  		if(data == 'ok') {
	    		  			/**
	    		    		* alert 메세지 및 시간 카운트 다운 추가
	    		    		*/
	    		    		alert('인증번호가 발송되었습니다.\n회원가입 요청이 많아 다소 지연될 수 있습니다.');
	    		    		startCountdown();
	    		    		
	    		  			//가입가능 & sms인증번호 발송
	    		  			authMsg.addClass("status_ok_desc").html("인증번호가 발송되었습니다. 메시지를 확인하신 후 인증번호 입력창에 입력해 주세요.");
	    		  			$('#authNo').focus();
	    		  		}
	    		  		else if (data == 'auth_invoke_exceeded') {
	    		  			authMsg.removeClass("status_ok_desc").html("죄송합니다. 일일 전송 횟수를 초과하였습니다. 다음번에 이용해 주세요.");
	    		  		}
	    		  		else if (data == 'error') {
	    		  			authMsg.removeClass("status_ok_desc").html("오류가 발생하였습니다. 다시 시도해 주세요.");
	    		  		}
	    		  		else {
	    		  			authMsg.removeClass("status_ok_desc").html("필수 정보를 확인해 주세요.");
	    		  		}
	    		  	},
	    		  	error: function() {
	    		  		authMsg.removeClass("status_ok_desc").html("오류가 발생하였습니다. 다시 시도해 주세요.");
	    		  	}
	    		});

	    	}else if(authType == "E") {
	    		$.ajax({
	    			url: '/idp/msg/ems/send',
	    			type: 'POST',
	    			data: { 'type':'join' },
	    			dataType: "text",
	    		  	success: function(data) {
	    		  		if(data == 'ok') {
	    		  			/**
	    		    		* alert 메세지 및 시간 카운트 다운 추가
	    		    		*/
	    		    		alert('인증번호가 발송되었습니다.\n회원가입 요청이 많아 다소 지연될 수 있습니다.');
	    		    		startCountdown();
	    		    		
	    		  			//가입가능 & sms인증번호 발송
	    		  			authMsg.addClass("status_ok_desc").html("인증번호가 발송되었습니다. 메시지를 확인하신 후 인증번호 입력창에 입력해 주세요.");
	    		  			$('#authNo').focus();
	    		  		}
	    		  		else if(data == 'error') {
	    		  			authMsg.removeClass("status_ok_desc").html("오류가 발생하였습니다. 다시 시도해 주세요.");
	    		  		}
	    		  		else {
	    		  			authMsg.removeClass("status_ok_desc").html("필수 정보를 확인해 주세요.");
	    		  		}
	    		  	},
	    		  	error: function() {
	    		  		authMsg.removeClass("status_ok_desc").html("오류가 발생하였습니다. 다시 시도해 주세요.");
	    		  	}
	    		});
	    	}
    	}
    	//validate 검사 실패 시 해당 element focus 추가
    	else {
    		validator.focusInvalid();
    	}
    	
    	return false;
    });
    
    $('#checkAuthBtn').click(function() {
		var authNo = $('#authNo').val();
		var authType = $("input[name='general_auth_type']:checked").val();
		var authMsg = $("#authNo_desc");
		
		if(authNo == null || authNo == "") {
			authMsg.html("인증번호를 입력해 주세요.");
			return false;
		}

    	if(authType == "M") {
			$.ajax({
				url: '/idp/msg/sms/auth',
				type: 'POST',
				data: { 'an': authNo },
				dataType: "text",
			  	success: function(data) {
			  		if (data == 'ok') {
			  			authMsg.addClass("status_ok_desc").html("인증에 성공하였습니다.");
			  			_isAuthenticated = true;
			  			$('#timeArea').html('');
			  			clearInterval(tid);
			  		}
			  		else if(data == "not_match"){
			  			alert('인증번호가 일치하지 않습니다. 다시 확인해 주시거나 새로운 인증번호를 발급 받으시기 바랍니다.');
			  			authMsg.removeClass("status_ok_desc").html("인증번호가 일치하지 않습니다. 다시 확인해 주시거나 새로운 인증번호를 발급 받으시기 바랍니다.");
			  			_isAuthenticated = false;
			  		}
			  		else {
			  			alert('인증번호를 다시 확인해주세요.');
			  			authMsg.removeClass("status_ok_desc").html("인증번호를 다시 확인해주세요.");
			  			_isAuthenticated = false;
			  		}
			  	},
    		  	error: function() {
    		  		authMsg.removeClass("status_ok_desc").html("인증번호를 받은 후 다시 시도하세요.");
    		  		_isAuthenticated = false;
    		  	}
			});
    	}else if(authType == "E") {
			$.ajax({
				url: '/idp/msg/sms/auth',
				type: 'POST',
				data: { 'an': authNo },
				dataType: "text",
			  	success: function(data) {
			  		if (data == 'ok') {
			  			authMsg.addClass("status_ok_desc").html("인증에 성공하였습니다.");
			  			_isAuthenticated = true;
			  			$('#timeArea').html('');
			  			clearInterval(tid);
			  		}
			  		else if(data == "not_match"){
			  			alert('인증번호가 일치하지 않습니다. 다시 확인해 주시거나 새로운 인증번호를 발급 받으시기 바랍니다.');
			  			authMsg.removeClass("status_ok_desc").html("인증번호가 일치하지 않습니다. 다시 확인해 주시거나 새로운 인증번호를 발급 받으시기 바랍니다.");
			  			_isAuthenticated = false;
			  		}
			  		else {
			  			alert('인증번호를 다시 확인해주세요.');
			  			authMsg.removeClass("status_ok_desc").html("인증번호를 다시 확인해주세요.");
			  			_isAuthenticated = false;
			  		}
			  	},
    		  	error: function() {
    		  		authMsg.removeClass("status_ok_desc").html("인증번호를 받은 후 다시 시도하세요.");
    		  		_isAuthenticated = false;
    		  	}
			});
			
    	}
    	
    	return false;
    });
});

   
   //보호자 동의 확인 버튼 클릭
   $('#guardianAuthBtn').click(function() {
   	var authType = $("input[name='guardian_auth_type']:checked").val();
   	var authMsg = $("#guardian_auth_desc");

   	//입력한 회원정보 확인
   	if(checkUser(authMsg)) {
   		//휴대폰인증
    	if(authType == "M") {
     	    var CBA_window = window.open('', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');

    	    if(CBA_window == null){ 
    	        alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
    	    }
    	    
    	    var obj = $("#niceGuardianCellular");
    	    obj.attr('action', '/idp/auth/nice/mobileRequest.jsp');
    	    obj.attr('target', 'popupChk');
    	    obj.submit();
    	    
    	}
    	//IPIN 인증
    	else if(authType == "I") {
    		var ipinWindow = window.open('', 'popupIPIN2', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
            if(ipinWindow == null){ 
    			alert(" ※ 윈도우 XP SP2 또는 인터넷 익스플로러 7 사용자일 경우에는 \n    화면 상단에 있는 팝업 차단 알림줄을 클릭하여 팝업을 허용해 주시기 바랍니다. \n\n※ MSN,야후,구글 팝업 차단 툴바가 설치된 경우 팝업허용을 해주시기 바랍니다.");
            }
            
    	    var obj = $("#niceGuardianIpin");
    	    obj.attr('action', '/idp/auth/nice/ipinRequest.jsp');
    	    obj.attr('target', 'popupIPIN2');
    	    obj.submit(); 
    	}
   	}
   	
   	return false;
   });

var _isValidUserIdValue = false; /* 아이디 중복 체크 여부 flag */
//인증성공여부
var _isAuthenticated = false;
//보호자 인증 결과 코드
var _guardianAuthResultCode = 1;

/* 아이디 중복 확인 */
function _checkId() {
	if(_isValidUserId()) {
		var userId = jQuery.trim($('#userId').val());
		
		$.ajax({
			url: '/idp/validate?cmd=checkId&userId=' + userId,
			dataType: "text",
		  	success: function(data) {
		  		if (data == 'exist') {
		  			_isValidUserIdValue = false;
		  			$("#userId_desc").removeClass("status_ok_desc").html("'" + $('#userId').val() + "' 은(는) 탈퇴한 아이디 이거나, 이미 사용중인 아이디 입니다.");
		  			//$('#userId').focus();
		  		}
		  		else if (data == 'available') {	
		  			_isValidUserIdValue = true;
		  			$("#userId_desc").addClass("status_ok_desc").html("사용 가능한 아이디 입니다.");
		  		}
		  	}
		});
	}
}

/* ID 유효성 체크 */
function _isValidUserId() {
	var userId = jQuery.trim($('#userId').val());
	if(!/^[a-zA-Z0-9]{6,12}$/.test(userId)) {
		$('#userId').val('');
		$('#userId').focus();
		return false;
	}

	return true;
}

//생년월일 필드 클릭
$('.d_tag').click(function(){
	$.chkBrithDay('아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다.');
});

/* 생년월일 체크 */	
function checkBirthday() {
	if(!$.chkBrithDay('아이디나 비밀번호를 찾기위해 사용되오니 정확한 정보로 입력하시기 바랍니다.')) {
		return false;
	} else {
		$( "#birthDay_desc").html('');
	}
	
	//14세 미만 보호자 동의
	showAuthArea(getNowAge() < 14);
}

/* 나이 계산 */
function getNowAge(){
	var year = "2020";
	var month = "04";
	var day = "04";
	var birthYear = new Number($(':input:radio[name=birthdayYear]:checked').val());
	var birthMonth = new Number($(':input:radio[name=birthdayMonth]:checked').val());
	var birthDay = new Number($(':input:radio[name=birthdayDay]:checked').val());
	
	var myAge= Number;
	if (month > birthMonth) {
		myAge = year - birthYear;
	} else if (month == birthMonth) {
		if (day > birthDay) {
			myAge = year - birthYear;
	    } else {
			myAge = year - (birthYear + 1);
	    }
	} else {
		myAge = year - (birthYear + 1);
	}
	return myAge;
}

/* 인증 유형 변경 */
function showAuthArea(isJunior) {
	if(isJunior) {
		$(".generalAuthArea").hide();
		$(".GuardianAuthArea").show();
	}else {
		$(".generalAuthArea").show();
		$(".GuardianAuthArea").hide();
	}
}

/* 숫자만 입력받기 */
function onlyNumber(event){
	event = event || window.event;
	
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 || keyID == 9) 
		return;
	else
		return false;
}

function removeChar(event) {
	event = event || window.event;
	var keyID = (event.which) ? event.which : event.keyCode;
	if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
		return;
	else
		event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

//입력한 회원정보 확인
function checkUser(msgObj) {
	var isOk = false;
	
   	if($("#joinForm").valid()) {
   		
       	var userName = jQuery.trim($('#userName').val());
       	var bYear = $(':input:radio[name=birthdayYear]:checked').val();	
       	var bMonth = $(':input:radio[name=birthdayMonth]:checked').val();	
       	var bDay = $(':input:radio[name=birthdayDay]:checked').val();
       	var emailAddress = $("#emailId").val() + "@" + $("#emailDomain").val();
       	var cellPhoneNo = $('#cellPhoneNo').val();
       	
   		$.ajax({
   			url: '/idp/join/finduserid',
   			type: "POST",
   			data: { 'cmd':'checkUser', 'name': userName, 'birth':bYear+bMonth+bDay,'email': emailAddress, 'cell': cellPhoneNo},
   			dataType: "text",
   			async: false,
   			success: function(data) {
   				if (data == 'ok') {
   					msgObj.addClass("status_ok_desc").html("휴대폰 인증을 위한 인증번호 발송은 1일 최대 3회까지 가능합니다.");
   					isOk = true;
   				} else if(data == 'exists'){
   					msgObj.removeClass("status_ok_desc").html('이미 가입한 회원으로 더 이상 가입이 되지 않습니다.<br/>아이디찾기를 이용해주시기 바랍니다.');
   					isOk = false;
   				} else if(data == 'entResrve'){
   					msgObj.removeClass("status_ok_desc").html('탈퇴 유보 기간(5일)내 동일한 정보로 재가입이 불가합니다.');
   					isOk = false;
   				} else if(data == 'nameSize'){
   					msgObj.removeClass("status_ok_desc").html('이름은 한글 13자, 영문 40자 이하로만  입력 가능합니다.');
   					isOk = false;
   				} else if(data == 'badName'){
   					msgObj.removeClass("status_ok_desc").html('금지된 사용자 이름입니다.');
   					isOk = false;
   				} else if(data == 'badCellPhoneNo'){
   					msgObj.removeClass("status_ok_desc").html('금지된 휴대폰번호 입니다.');
   					isOk = false;
   				} else if(data == 'badEmlAddr'){
   					msgObj.removeClass("status_ok_desc").html('금지된 이메일주소 입니다.');
   					isOk = false;
   				}
   			}
   		});
   	}
   	
   	return isOk;

}

function guardianIpinAuth(isOk, result) {
	if(isOk) {
		$("#guardian_auth_yn_desc").addClass("status_ok_desc").html("인증에 성공하였습니다.");
		_isAuthenticated = true;
	} else {
		if(result == 3) {
			$("#guardian_auth_yn_desc").removeClass("status_ok_desc").html("보호자(법정대리인)동의 기준이 맞지 않습니다.");
		} else {
			$("#guardian_auth_yn_desc").removeClass("status_ok_desc").html("보호자 동의 확인이 필요합니다.");
		}
		$("#authNo_desc").removeClass("status_ok_desc").html("인증이 필요합니다.");
		_isAuthenticated = false;
	}
	_guardianAuthResultCode = result;
}

var tid = null;
var sec = 180;
//카운트다운
function countdown() {
	var mm = (Math.floor(sec / 60) < 10) ? '0' + Math.floor(sec / 60) : Math.floor(sec / 60);
	var ss = ((sec % 60) < 10) ? '0' + (sec % 60) : (sec % 60);
	var mmss = mm + " : " + ss;
	$('#timeArea').html(mmss);
	sec--;
	if (sec < 0) {
		clearInterval(tid);
		sec = 180;
	}
}

function startCountdown() {
	$('#authNo_msg').show();
	tid = setInterval('countdown();', 1000);
}
