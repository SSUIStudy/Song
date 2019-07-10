(function() {
	window.onload=function(){
		var bdy = document.querySelector('body'),
			btnMenu = document.querySelector('.btn__menu'),
			btnCloseMenu = document.querySelector('.btn__close'),
			depth1 = document.querySelectorAll('.gnb .inner > ul > li:not(.no-depth) > a'),
			depth2 = document.querySelectorAll('.gnb .inner > ul > li > .depth2-box > ul > li > a'),
			btnBack = document.querySelectorAll('a.tit__depth'),
			clsName, clsName2, clsName3,
			regExp = function(cls) {
				return new RegExp('(^| )'+ cls +'( |$)');
			},
			depthOneClick = function(idx){				
				clsName2 = 'depth2--open';

				depth1[idx].addEventListener('click', function(){
					var depthOneArr;
					
					depthOneArr = depth1[idx].parentNode.className.split(' ');

					if (depthOneArr.indexOf(clsName2) == -1) {
						depth1[idx].parentNode.className += ' ' + clsName2;
					}

					for(var i = 0; i < depth2.length; i++){								
						depthTwoClick(i);
					}		
					
					depthOneClose(idx);
				});				
			},
			depthTwoClick = function(idx){
				depth2[idx].addEventListener('click', function(){
					var depthTwoArr;
					clsName3 = 'depth3--open';
					
					depthTwoArr = depth2[idx].parentNode.className.split(' ');

					if (depthTwoArr.indexOf(clsName3) == -1) {
						depth2[idx].parentNode.className += ' ' + clsName3;
					}else{
						depth2[idx].parentNode.className = depth2[idx].parentNode.className.replace(regExp(clsName3), '');
					}
				});
			},
			depthOneClose = function(idx){
				btnBack[idx].addEventListener('click', function(){					
					clsName2 = 'depth2--open';
					btnBack[idx].parentNode.parentNode.className = btnBack[idx].parentNode.parentNode.className.replace(regExp(clsName2), '');
				});				
			};
	
			

		btnMenu.addEventListener('click', function(){
			var arr;
			clsName = 'gnb--open';		

			//모든 브라우저
			arr = bdy.className.split(' ');

			if (arr.indexOf(clsName) == -1) {
				bdy.className += ' ' + clsName;
			}					
		});

		btnCloseMenu.addEventListener('click', function(){
			clsName = 'gnb--open';			
			clsName2 = 'depth2--open';			
			clsName3 = 'depth3--open';			
			
			//모든 브라우저
			bdy.className = bdy.className.replace(regExp(clsName), ''); 	
			
			for(var d = 0; d < depth1.length; d++){
				depth1[d].parentNode.className = depth1[d].parentNode.className.replace(regExp(clsName2), ''); 	
				depth2[d].parentNode.className = depth2[d].parentNode.className.replace(regExp(clsName3), ''); 
			}			
		});

		for(var i = 0; i < depth1.length; i++){
			depthOneClick(i);	
		}

		
		
	}
})();

	//layout action
	la = {
		bdy: null, btnMenu: null, btnCloseMenu: null, depth1: null, depth2: null, btnBack: null, btnSrhClose: null, srhLayer: null, lockBody: null, fGnb: null,

		init: function(){
			la.bdy = document.getElementsByTagName('body');
			la.btnMenu = document.querySelector('.btn__menu');
			la.btnCloseMenu = document.querySelector('.btn__close');
			la.depth1 = document.querySelectorAll('.gnb .inner > ul > li:not(.no-depth) > a');
			la.depth2 = document.querySelectorAll('.gnb .inner > ul > li > .depth2-box > ul > li > a');
			la.btnBack = ssq('a.tit__depth');
			la.btnSrhOpen = ssq('#header > .btn__search');
			la.btnSrhClose = ssq('.btn__search--close');
			la.lockBody = function(e){
				e.preventDefault();
				e.stopPropagation();
				return false;
			};
			la.fGnb =  ssq('.gnb__footer');

			la.btnMenu.on('click', la.gnbAction.gnbOpen);
			la.btnCloseMenu.on('click', la.gnbAction.gnbClose);

			la.depth1.on('click', la.gnbAction.depthTwoOpen);
			la.btnBack.on('click', la.gnbAction.depthTwoClose);
			la.depth2.on('click', la.gnbAction.depthThreeOnOff);

			la.btnSrhOpen.on('click', la.srhLayerOpen);
			la.btnSrhClose.on('click', la.srhLayerClose);

			//la.footerGnb();
		},
		gnbAction: {
			gnbOpen: function(){
				ssq('.bg-wrap').on('scroll touchmove mousewheel', la.lockBody);
				la.bdy.addClass('gnb--open');				
			},
			gnbClose: function(){
				ssq('.bg-wrap').off('scroll touchmove mousewheel', la.lockBody);				
				la.depth2.parent('li').removeClass('depth3--open');
				la.depth1.parent('li').removeClass('depth2--open');
				la.bdy.removeClass('gnb--open');
			},
			depthTwoOpen: function(){
				ssq(this).parent('li').addClass('depth2--open');
			},
			depthTwoClose: function(){
				la.depth2.parent('li').removeClass('depth3--open');
				la.depth1.parent('li').removeClass('depth2--open');
			},
			depthThreeOnOff: function(){
				ssq(this).parent('li').toggleClass('depth3--open');
			}
		},
		srhLayerOpen: function(){
			la.bdy.addClass('search-box--open');
		},
		srhLayerClose: function(){
			la.bdy.removeClass('search-box--open');
		},
		footerGnb: function(){
			var didScroll,
				lastScrollTop = 0,
				delta = 50;

			ssq(window).on('scroll', function(){
				var st = ssq(this).scrollTop();
				
				if(Math.abs(lastScrollTop - st) <= delta)
					return;
				
				if (st > lastScrollTop){
					// Scroll Down
							la.fGnb.addClass('gnb__footer--up');
				} else {
					// Scroll Up
					if(st + ssq(window).height() < ssq(document).height()) {
							la.fGnb.removeClass('gnb__footer--up');
					}
				}				
				lastScrollTop = st;		
			});

		}
	}

