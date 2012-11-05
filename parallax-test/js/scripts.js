/*
Elevation Church - 2011 Annual Report - Digital Interactive Version
Original work except where noted. Thanks to all who inspired the interactions we developed, 
specifically http://davegamache.com/, http://nikebetterworld.com/, and http://www.iutopi.com/en/.

NBW Tutorial code shared from: http://www.ianlunn.co.uk/

Glory to God for all He did at Elevation Church in 2011. The best is yet to come.

Dev note: mobile support is messy at best. I hope to refactor! @elevationsarge
*/

$(function() {
	var $window = $(window);
	
	$('#nav').find('a').each(function() {
		//$(this).attr('title', $(this).text())
	}).bind('click', function() {
		$.scrollTo($(this).data('target'), constrainMax(constrainMin(Math.abs($window.scrollTop()-$(this).data('target'))*1.25, 500), 3500));
		return false;
	}).bind('mouseover', function() {
		$('<div class="navlabel">').text($(this).text()).prependTo($(this).parent()).show('slide', { direction: 'right' });
	}).bind('mouseout', function() {
		$('.navlabel', $(this).parent()).remove();
	});
	
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	}

	function constrainMin(formula, constraint) {
		return formula >= constraint ? formula : constraint;
	}
	
	function constrainMax(formula, constraint) {
		return formula <= constraint ? formula : constraint;
	}
	
	$.fn.effectRange = function(effectIn, effectOut, effectOff, pos, startPos, midPos, outPos) {
		if (pos > startPos && pos < outPos) {
			if (pos < midPos) {
				$(this).css(effectIn);
			} else {
				$(this).css(effectOut);
			}
		} else {
			$(this).css(effectOff);
		}
	}
	
	function opacityShift(pos, bsInPos, distance, direction) {
		return direction == 'in' ? constrainMax(0+((pos-(bsInPos))/(distance)), 1) : constrainMin(1-((pos-(bsInPos))/(distance)), 0);
	}
	
	//TEMP
	var $pos = $('#pos');

	/* Fades */
	$('.sectionheader').each(function() {
		$('<div class="element fade">').insertBefore($(this));
	});
		
	/* cached selectors for Move() _________________________________________________________________________________________________________________________________________________________ */
	window.eVideoPlayed = false;
	var $page1 = $('#page1')
		, $page2 = $('#page2')
		, $page3 = $('#page3')
		, $page4 = $('#page4')
		, $page5 = $('#page5')
		, $page6 = $('#page6')
		, $page7 = $('#page7')
		, $page8 = $('#page8')
		
		, $introcircle = $('#intro-circle')
		, $introprompt = $('#intro-prompt')
		, $page1divider = $('#page1divider')
		, $salbaptheader = $('#salbapt .sectionheader')
		, $salheader = $('#salheader')
		, $salcircle = $('#salcircle')
		, $saltotal = $('#saltotal')
		, $salchartbars = $('#salchart .element')
		, $salvids = $('#salvids')
		, $baptheader = $('#baptheader')
		, $bapttotal = $('#bapttotal')
		, $baptdroplet = $('#baptdroplet')
		, $baptchart = $('#baptchart')
		, $baptchartbars = $('#baptchart .element')
		, $followvid = $('#followvid')
		, $baptgrandtotalheader = $('#baptgrandtotalheader')
		
		, $page2header = $('#page2 .sectionheader')
		, $page2divider = $('#page2divider')
		, $page2tab = $('#page2tab')
		, $egheader = $('#egheader')
		, $egtotal = $('#egtotal')
		, $egyearchart = $('#egyearchart')
		, $egstudentchart = $('#egstudentchart')
		, $egvidintro = $('#egvidintro')
		, $egvid = $('#egvid')
		, $egcatheader = $('#egcatheader')
		, $egcattotal = $('#egcattotal')
		, $egcatcircle = $('#egcatcircle')
		, $egcatarrow = $('#egcatarrow')
		, $egcatchart = $('#egcatchart')
		, $egcatchartbars = $('#egcatchart .element')
		, $egcatbtn = $('#egcatbtn')
		, $etheader = $('#etheader')
		, $etnew = $('#etnew')
		, $ettotal = $('#ettotal')
		, $etcircle = $('#etcircle')
		, $etarrow = $('#etarrow')
		, $etchart = $('#etchart')
		, $etbtn = $('#etbtn')
		, $ekaheader = $('#ekaheader')
		, $ekalogo = $('#ekalogo')
		, $ekachart = $('#ekachart')
		, $ekalegend = $('#ekalegend')
		, $ekavidintro = $('#ekavidintro')
		, $ekavid = $('#ekavid')
		, $ekabtn = $('#ekabtn')
		, $ekgheader = $('#ekgheader')
		, $ekgtotal = $('#ekgtotal')
		, $ekgchart = $('#ekgchart')
		, $ekvheader = $('#ekvheader')
		, $ekvtotal = $('#ekvtotal')
		, $ekvgrid = $('#ekvgrid')
		, $ekvdata = $('#ekvdata')

		, $page3far = $('#page3far')
		, $page3mid = $('#page3mid')
		, $page3near = $('#page3near')
		, $page3divider = $('#page3divider')
		, $page3tab = $('#page3tab')
		, $page3header = $('#page3 .sectionheader')
		, $aaheader = $('#aaheader')
		, $aatotal = $('#aatotal')
		, $aachart = $('#aachart')
		, $aaup = $('#aaup')
		, $asheader = $('#asheader')
		, $asetotal = $('#asetotal')
		, $asechart = $('#asechart')
		, $asctotal = $('#asctotal')
		, $ascchart = $('#ascchart')
		, $alheader = $('#alheader')
		, $alchart = $('#alchart')
		, $allegend = $('#allegend')
		, $allegendbars = $('#allegend .element')
		, $aoheader = $('#aoheader')
		, $aochart = $('#aochart')

		, $page4far = $('#page4far')
		, $page4near = $('#page4near')
		, $page4divider = $('#page4divider')
		, $page4tab = $('#page4tab')
		, $page4header = $('#page4 .sectionheader')
		, $gdheader = $('#gdheader')
		, $gdtotal = $('#gdtotal')
		, $gdcircle = $('#gdcircle')
		, $gdarrow = $('#gdarrow')
		, $gdlegend = $('#gdlegend')
		, $gdlegendbars = $('#gdlegend .element')
		, $gdtwelve = $('#gdtwelve')
		, $lwheader = $('#lwheader')
		, $lwlogo = $('#lwlogo')
		, $lwtotal = $('#lwtotal')
		, $lwpartner = $('#lwpartner')
		, $lwvid = $('#lwvid')

		, $pmintro = $('#pmintro')
		, $pmdiamond = $('#pmdiamond')
		, $pmupperbarsleft = $('#pmupperbarsleft .pmbar')
		, $pmupperflagsleft = $('#pmupperflagsleft .pmflag')
		, $pmupperbarsright = $('#pmupperbarsright .pmbar')
		, $pmupperflagsright = $('#pmupperflagsright .pmflag')
		, $pmlowerbarsleft = $('#pmlowerbarsleft .pmbar')
		, $pmlowerflagsleft = $('#pmlowerflagsleft .pmflag')
		, $pmlowerbarsright = $('#pmlowerbarsright .pmbar')
		, $pmlowerflagsright = $('#pmlowerflagsright .pmflag')
		, $pmupperleftlabel = $('#pmupperleftlabel')
		, $pmlowerleftlabel = $('#pmlowerleftlabel')
		, $pmlowerrightlabel = $('#pmlowerrightlabel')

		, $pllefttop = $('#pllefttop')
		, $plleftmid = $('#plleftmid')
		, $plleftbot = $('#plleftbot')
		, $plrighttop = $('#plrighttop')
		, $plrightmid = $('#plrightmid')
		, $plrightbot = $('#plrightbot')

		, $pvheader = $('#pvheader')
		, $pvvid1 = $('#pvvid1')
		, $pvvid2 = $('#pvvid2')
		, $pvvid3 = $('#pvvid3')
		, $pvvid4 = $('#pvvid4')
		, $pvvid5 = $('#pvvid5')
		, $pvvid6 = $('#pvvid6')
		, $pvvid7 = $('#pvvid7')
		, $pvvid8 = $('#pvvid8')
		, $pvvid9 = $('#pvvid9')
		, $dvheader = $('#dvheader')
		, $dvvid = $('#dvvid')
		, $plbtn = $('#plbtn')

		, $page5far1 = $('#page5far1')
		, $page5far2 = $('#page5far2')
		, $page5far3 = $('#page5far3')
		, $page5near = $('#page5near')
		, $page5divider = $('#page5divider')
		, $page5tab = $('#page5tab')
		, $page5header = $('#page5 .sectionheader')

		, $ecmheader = $('#ecmheader')
		, $ecmmap = $('#ecmmap')
		, $ecmtab1 = $('#ecmtab1')
		, $ecmtab2 = $('#ecmtab2')
		, $ecmtab3 = $('#ecmtab3')
		, $ecmtab4 = $('#ecmtab4')
		, $ecmtab5 = $('#ecmtab5')
		, $ecmtab6 = $('#ecmtab6')
		, $ecmtab7 = $('#ecmtab7')
		, $ecmtab8 = $('#ecmtab8')
		, $ecmtab9 = $('#ecmtab9')
		, $ecmtab10 = $('#ecmtab10')
		, $ecmtotal = $('#ecmtotal')
		, $ecmlegend = $('#ecmlegend')
		, $ecmcountries = $('#ecmcountries')

		, $wsruletop = $('#wsruletop')
		, $wsrulevert = $('#wsrulevert')
		, $wsrulemid = $('#wsrulemid')
		, $wsvheader = $('#wsvheader')
		, $wsvtotal = $('#wsvtotal')
		, $wsvchart = $('#wsvchart')
		, $wssheader = $('#wssheader')
		, $wssclock = $('#wssclock')
		, $wsstime = $('#wsstime')
		, $wsstotal = $('#wsstotal')
		, $sfbox = $('#sfbox')
		, $sftotal = $('#sftotal')
		, $sfchart = $('#sfchart')
		, $sfviews = $('#sfviews')
		
		, $ewheader = $('#ewheader')
		, $ewtotal = $('#ewtotal')
		, $ewfth = $('#ewfth')
		, $ewkc = $('#ewkc')
		, $ewgwu = $('#ewgwu')
		, $ewwaa = $('#ewwaa')
		, $ewinst = $('#ewinst')
		
		, $ewfirsts = $('#ewfirsts')
		, $ewbillboard = $('#ewbillboard')
		, $ewvid1 = $('#ewvid1')
		, $ewvid2 = $('#ewvid2')
		, $ewvid3 = $('#ewvid3')
		, $ewvid4 = $('#ewvid4')
		
		, $ewheight = $('#ewheight')
		, $ewbrad = $('#ewbrad')
		, $ewchris = $('#ewchris')
		, $ewwade = $('#ewwade')
		, $ewmack = $('#ewmack')
		, $ewlondon = $('#ewlondon')
		, $ewjane = $('#ewjane')
		, $ewheightlegend = $('#ewheightlegend')

		, $spheader = $('#spheader')
		, $spsubhead = $('#spsubhead')
		, $splogo = $('#splogo')
		, $spchart = $('#spchart')
		, $spvodviews = $('#spvodviews')
		, $spinst = $('#spinst')
		, $spaudio = $('#spaudio')
		, $spvideo = $('#spvideo')
		, $sphdvid = $('#sphdvid')

		, $tvheader = $('#tvheader')
		, $tvicon = $('#tvicon')
		, $tvviewers = $('#tvviewers')

		, $saheader = $('#saheader')
		, $saicon = $('#saicon')
		, $salaunches = $('#salaunches')
		, $sainstalls = $('#sainstalls')
		, $sadownload = $('#sadownload')

		, $page6divider = $('#page6divider')
		, $page6tab = $('#page6tab')
		, $page6header = $('#page6 .sectionheader')
		, $emintro = $('#emintro')
		, $emheader = $('#emheader')
		, $emmap = $('#emmap')
		, $emlines1 = $('#emlines1')
		, $emlines2 = $('#emlines2')
		, $emlegend = $('#emlegend')

		, $evheader = $('#evheader')
		, $evvid = $('#evvid')

		, $esrule1 = $('#esrule1')
		, $essites = $('#essites')
		, $esrule2 = $('#esrule2')
		, $esatt = $('#esatt')
		, $esppl = $('#esppl')
		, $esbapt = $('#esbapt')
		, $essal = $('#essal')
		, $eslink = $('#eslink')

		, $expmheader = $('#expmheader')
		, $expmmap = $('#expmmap')
		, $expmloc1 = $('#expmloc1')
		, $expmloc2 = $('#expmloc2')
		, $expmloc3 = $('#expmloc3')
		, $expmloc4 = $('#expmloc4')
		, $expmloc5 = $('#expmloc5')
		, $expmloc6 = $('#expmloc6')
		, $expmdetail = $('#expmdetail')
		, $expmlegend = $('#expmlegend')
		, $expmavg = $('#expmavg')

		, $expvheader = $('#expvheader')
		, $expvvid = $('#expvvid')

		, $expsheader = $('#expsheader')
		, $expsland = $('#expsland')
		, $expswh = $('#expswh')
		, $expspl = $('#expspl')
		, $expsbc = $('#expsbc')

		, $page7divider = $('#page7divider')
		, $page7tab = $('#page7tab')
		, $page7header = $('#page7 .sectionheader')

		, $becircle = $('#becircle')
		, $bearrow = $('#bearrow')
		, $bechart = $('#bechart')
		, $beasterisk = $('#beasterisk')

		, $biheader = $('#biheader')
		, $bibreakdown = $('#bibreakdown')
		, $bicompare = $('#bicompare')
		, $birule = $('#birule')
		, $binote = $('#binote')

		, $bgheader = $('#bgheader')
		, $bgincrease = $('#bgincrease')
		, $bgavg = $('#bgavg')
		, $bgchart = $('#bgchart')

		, $boheader = $('#boheader')
		, $bochart = $('#bochart')
		, $boincrease = $('#boincrease')

		, $blheader = $('#blheader')
		, $blchart = $('#blchart')
		, $bllegend = $('#bllegend')
		, $blaudit = $('#blaudit')

		, $fltext = $('#fltext')
		, $flbio = $('#flbio')
		, $flphoto = $('#flphoto')

		, $page8divider = $('#page8divider')
		, $fctitle = $('#fctitle')
		, $fcshare = $('#fcshare')
		, $fcdownload = $('#fcdownload')
		, $fcfooter = $('#fcfooter')

		, $page1fade = $('#page1').find('.fade')
		, $page2fade = $('#page2').find('.fade')
		, $page3fade = $('#page3').find('.fade')
		, $page4fade = $('#page4').find('.fade')
		, $page5fade = $('#page5').find('.fade')
		, $page6fade = $('#page6').find('.fade')
		, $page7fade = $('#page7').find('.fade')
		;
	
	//function to be called whenever the window is scrolled or resized
	function Move(pos){ 
		
		$pos.text(pos);

		var globalPos = pos;
		var sIn = 1400
			, sLen = 200;
		
		if (globalPos <= 0) {
			$('.sectionheader, .bg, .divider, .tab, .fade').css({'position': 'absolute'});
		}
		
		//if (!mobileDetection.ismobile) {
			if (globalPos < $page1.height()+1500) { //$page1
				pos = globalPos; //set scroll offset for this page
				
if (!mobileDetection.ismobile) {
				$page1.css({'backgroundPosition': '50% ' + Math.floor(-(pos/12)+100) + 'px'});
				
				/* Intro */
				if (pos < 300) {
					$introcircle.css({'position': 'fixed', 'opacity': opacityShift(pos, 0, 300, 'out')});
				} else {
					$introcircle.css({'position': 'absolute', 'opacity': 0});
				}
}
				$page1fade.css({'background-image': 'url(../images/fadetile-home.png)'});
				
				$page1divider.effectRange(
					{'position': 'fixed', 'opacity': opacityShift(pos, 500, 200, 'in')}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3290, 10, 'out')}
					, {'opacity': 0}
					, pos
					, 500
					, 3290
					, 3300); //slide left and fade in to fixed position, fade out
					
				if (window.scrollPrompt) { $introprompt.css({'opacity': opacityShift(pos, 100, 50, 'out')}); }
				
if (!mobileDetection.ismobile) {
				clearTimeout(window.eVideoAutoplay);
				if (pos > 500 && pos < 1300) {
					if (jwplayer('pastorvid-target').getState() == 'PAUSED') { window.eVideoAutoplay = setTimeout(function() {jwplayer('pastorvid-target').play(); window.eVideoPlayed = true;}, 150); }
					else if (jwplayer('pastorvid-target').getState() == 'IDLE') { if (!window.eVideoPlayed) { window.eVideoAutoplay = setTimeout(function() {jwplayer('pastorvid-target').play(); window.eVideoPlayed = true;}, 150); } }
				} else if (pos < 500 || (pos > 1300 && pos < 1600)) {
					if (jwplayer('pastorvid-target').getState() == 'PLAYING' || jwplayer('pastorvid-target').getState() == 'BUFFERING') { jwplayer('pastorvid-target').pause(); }
				}
}
				
				/* Salvations */
				$salbaptheader.effectRange(
					{'position': 'fixed', 'opacity': opacityShift(pos, sIn, sLen, 'in')}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3250, 20, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3250
					, 3270); //fade in to fixed position, fade out
				$page1fade.effectRange(
					{'position': 'fixed', 'opacity': opacityShift(pos, sIn, sLen, 'in')}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3250, 20, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3250
					, 3270); //fade in to fixed position, fade out

if (!mobileDetection.ismobile) {
				$salheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$salcircle.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos*3)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos*3)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$saltotal.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in'), 'margin-top': Math.floor(pos>sIn+100 && pos<sIn+sLen ? (sLen-100)-((sLen-100)*((pos-(sIn+100))/(sLen-100))) : 0)}); //slide up and fade in
				$salchartbars.each(function(idx) {
					$(this).css({'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -100+(100*((pos-sIn)/sLen)) : 0), 'opacity': opacityShift(pos, sIn, sLen, 'in')}); //moving left-to-right
				});
				$salvids.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				/* Baptisms */
				sIn = 1800
				, sLen = 200;

				$baptheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$bapttotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide up and fade in
				
				$baptdroplet.effectRange(
					pos < sIn+100 ? {'position': 'absolute', 'opacity': 0} : {'position': 'fixed', 'opacity': opacityShift(pos, sIn+100, sLen-100, 'in'), 'margin-top': Math.floor(pos>sIn+100 && pos<sIn+sLen ? -(sLen*(1-((pos-(sIn+100))/100))) : 0), 'height': '580px'}
					, {'position': 'absolute', 'opacity': 1, 'margin-top': 0, 'height': '280px'}
					, {'position': 'absolute', 'opacity': 1, 'margin-top': 0, 'height': '280px'}
					, pos
					, sIn-500
					, sIn+200
					, sIn+300); //slide down fixed and fade in, switch to absolute
				
				$baptchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? 75-(75*((pos-sIn)/sLen)) : 0)}); //moving right-to-left
				$baptchartbars.each(function(idx) {
					$(this).css({ 'left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMin((sLen-((4-idx)*50))-((sLen-((4-idx)*50))*((pos-sIn)/sLen)), 0) : 0)}); //moving right-to-left
				});

				sIn = 2000;

				$followvid.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in')}); //fade in

				sIn = 2200;

				$baptgrandtotalheader.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in')}); //fade in
}

			} //$page1
			
			if (globalPos > 2000 && pos < $page2.offset().top+$page2.height()+1500) { //$page2
				pos = globalPos-$page2.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				if (pos < 1199) {
					$page2.stop().animate({'background-color': '#b10e2b'}).css({'background-image': 'url(../images/2011AR-connected-1-bkgd-egroups.png), url(../images/2011AR-connected-1-bkgd-plugin.png)', 'background-position': '100% ' + Math.floor(-(pos/8)) + 'px, -40% ' + Math.floor(-(pos/8)+600) + 'px'});
					$page2fade.css({'background-image': 'url(../images/fadetile-red.png)'});
				} else if (pos >= 1200) {
					$page2.stop().animate({'background-color': '#f9f2f2'}).css({'background-image': 'url(../images/2011AR-connected-2-bkgd-ekidz.png)', 'background-position': '20% ' + Math.floor(-(pos/8)+400) + 'px'});
					$page2fade.css({'background-image': 'url(../images/fadetile-lightpink.png)'});
				}
} else {
				if (pos < 1199) {
					$page2.css({'background-color': '#b10e2b'}).css({'background-image': 'url(../images/2011AR-connected-1-bkgd-egroups.png), url(../images/2011AR-connected-1-bkgd-plugin.png)', 'background-position': '100% 20%, -40% 60%'});
					$page2fade.css({'background-image': 'url(../images/fadetile-red.png)'});
				} else if (pos >= 1200) {
					$page2.css({'background-color': '#f9f2f2'}).css({'background-image': 'url(../images/2011AR-connected-2-bkgd-ekidz.png)', 'background-position': '20% 20%'});
					$page2fade.css({'background-image': 'url(../images/fadetile-lightpink.png)'});
				}
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page2divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				$page2tab.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				$page2header.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				$page2fade.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out

if (!mobileDetection.ismobile) {
				/* eGroups */
				sIn = -400;

				$egheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$egtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$egstudentchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-sIn)/sLen)) : 0)}); //moving right-to-left
				$egyearchart.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in'), 'width': Math.floor(pos>sIn+100 && pos<sIn+sLen ? (407*((pos-(sIn+100))/100)) : 407)}); //reveal left-to-right

				sIn = -200;

				$egvidintro.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$egvid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* eGroup Categories */
				sIn = 300;

				$egcatheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$egcattotal.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in'), 'margin-top': Math.floor(pos>sIn+100 && pos<sIn+sLen ? 100-(100*((pos-(sIn+100))/100)) : 0)}); //slide up and fade in
				$egcatcircle.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos*2)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos*2)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$egcatarrow.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(sLen*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$egcatchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(75*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$egcatchartbars.each(function(idx) {
					$(this).css({ 'left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMax(-((sLen-((5-idx)*35))*(1-((pos-sIn)/sLen))), 0) : 0)}); //moving left-to-right
				});
				$egcatbtn.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* eTeams */
				sIn = 700;

				$etheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$etnew.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$ettotal.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in'), 'margin-top': Math.floor(pos>sIn+100 && pos<sIn+sLen ? 100-(100*((pos-(sIn+100))/100)) : 0)}); //slide up and fade in
				$etcircle.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos*2)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos*2)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$etarrow.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(sLen*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$etchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(100*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$etbtn.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* eKidz Attendance */
				sIn = 1300;

				$ekaheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$ekalogo.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$ekachart.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in'), 'margin-top': Math.floor(pos>sIn+100 && pos<sIn+sLen ? 100-(100*((pos-(sIn+100))/100)) : 0)}); //slide up and fade in
				$ekalegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(100*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				
				sIn = 1500;

				$ekavidintro.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$ekavid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$ekabtn.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* eKidz Growth */
				sIn = 2250;

				$ekgheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$ekgtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$ekgchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (470*((pos-(sIn))/sLen)) : 470)}); //reveal left-to-right

				/* eKidz Volunteers */
				sIn = 2500;

				$ekvheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$ekvtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$ekvgrid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$ekvdata.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (470*((pos-(sIn))/sLen)) : 470)}); //reveal left-to-right
}
				
			} //$page2
			
			if (globalPos > 5500 && pos < $page3.offset().top+$page3.height()+1500) { //$page3
				pos = globalPos-$page3.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				if (pos < 399) {
					$page3.stop().animate({'background-color': '#f8fdb8'});
					$page3divider.stop().animate({'background-color': '#231F20'});
					$page3far.css({'position': 'fixed', 'left': '60%', 'top': Math.floor(300-(pos/12)), 'opacity': opacityShift(pos, -500, 100, 'in')});
					$page3mid.css({'position': 'fixed', 'left': '60%', 'top': Math.floor(350-(pos/6)), 'opacity': opacityShift(pos, -500, 100, 'in')});
					$page3near.css({'position': 'fixed', 'left': '60%', 'top': Math.floor(400-(pos/3)), 'opacity': opacityShift(pos, -500, 100, 'in')});
					$page3fade.css({'background-image': 'url(../images/fadetile-yellow.png)'});
				} else if (pos >= 400 && pos <= 1199) {
					$page3.stop().animate({'background-color': '#dedfe0'});
					$page3divider.stop().animate({'background-color': '#f8fdb8'});
					$page3far.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(300-(pos/12))});
					$page3mid.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(450-(pos/6))});
					$page3near.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(600-(pos/3))});
					$page3fade.css({'background-image': 'url(../images/fadetile-lightgray.png)'});
				} else if (pos >= 1200 && pos <= 1400) {
					$page3far.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(300-(pos/12)), 'opacity': opacityShift(pos, 1300, 100, 'out')});
					$page3mid.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(450-(pos/6)), 'opacity': opacityShift(pos, 1300, 100, 'out')});
					$page3near.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(600-(pos/3)), 'opacity': opacityShift(pos, 1300, 100, 'out')});
					$page3fade.css({'background-image': 'url(../images/fadetile-lightgray.png)'});
				} else if (pos >= 1301) {
					$page3far.css({'position': 'absolute', 'opacity': 0});
					$page3mid.css({'position': 'absolute', 'opacity': 0});
					$page3near.css({'position': 'absolute', 'opacity': 0});
				}
} else {
				if (pos < 399) {
					$page3.css({'background-color': '#f8fdb8'});
					$page3divider.css({'background-color': '#231F20'});
					$page3fade.css({'background-image': 'url(../images/fadetile-yellow.png)'});
				} else if (pos >= 400 && pos <= 1199) {
					$page3.css({'background-color': '#dedfe0'});
					$page3divider.css({'background-color': '#f8fdb8'});
					$page3fade.css({'background-image': 'url(../images/fadetile-lightgray.png)'});
				}
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page3divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 1900, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 1900
					, 1950); //fade in to fixed position, fade out
				$page3tab.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 1900, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 1900
					, 1950); //fade in to fixed position, fade out
				$page3header.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 1900, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 1900
					, 1950); //fade in to fixed position, fade out
				$page3fade.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 1900, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 1900
					, 1950); //fade in to fixed position, fade out

if (!mobileDetection.ismobile) {
				/* Weekly Attendance */
				sIn = -400;

				$aaheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$aachart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (520*((pos-(sIn))/sLen)) : 520)}); //reveal left-to-right

				sIn = -200;

				$aatotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$aaup.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in

				/* CEO Attendance */
				sIn = 100;

				$asheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$asetotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$asechart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'clip': 'rect(' + Math.floor(pos>sIn && pos<sIn+sLen ? 233-(233*((pos-(sIn))/sLen)) : 0) + 'px auto 233px auto)', 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				$asctotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$ascchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'clip': 'rect(' + Math.floor(pos>sIn && pos<sIn+sLen ? 255-(255*((pos-(sIn))/sLen)) : 0) + 'px auto 255px auto)', 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top

				/* Average Attendance */
				sIn = 600;

				$alheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$alchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$allegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMin(100-(100*((pos-sIn)/sLen)), 0) : 0)}); //moving right-to-left
				$allegendbars.each(function(idx) {
					$(this).css({ 'left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMin((sLen-((6-idx)*30))-((sLen-((6-idx)*30))*((pos-sIn)/sLen)), 0) : 0)}); //moving right-to-left
				});

				/* Average Offering */
				sIn = 1100;

				$aoheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$aochart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (647*((pos-(sIn))/sLen)) : 647)}); //reveal left-to-right
}
				
			} //$page3
			
			if (globalPos > 7500 && pos < $page4.offset().top+$page4.height()+1500) { //$page4
				pos = globalPos-$page4.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				if (pos < 799) {
					$page4.stop().animate({'background-color': '#fbc37c'});
					$page4divider.stop().animate({'background-color': '#db7b00'});
					$page4far.css({'position': 'fixed', 'left': '10%', 'top': Math.floor(500-(pos/6)), 'opacity': opacityShift(pos, 100, 100, 'in')});
					$page4near.css({'position': 'fixed', 'left': '70%', 'top': Math.floor(400-(pos/3)), 'opacity': opacityShift(pos, 100, 100, 'in')});
					$page4tab.css({'background-image': 'url(../images/2011AR-outreach-1-tab.png)'});
					$page4header.css({'background-image': 'url(../images/2011AR-outreach-1-header_outreachgiving.png)', 'width': 352, 'height': 18});
					$page4fade.css({'background-image': 'url(../images/fadetile-orange.png)'});
				} else if (pos >= 800) {
					$page4.stop().animate({'background-color': '#000'});
					$page4divider.stop().animate({'background-color': '#db7b00'});
					$page4far.css({'position': 'absolute', 'opacity': 0});
					$page4near.css({'position': 'absolute', 'opacity': 0});
					$page4tab.css({'background-image': 'url(../images/2012AR-outreach-2-tab.png)'});
					$page4header.css({'background-image': 'url(../images/2012AR-outreach-2-header.png)', 'width': 365, 'height': 17});
					$page4fade.css({'background-image': 'url(../images/fadetile-black.png)'});
				}
} else {
				if (pos < 799) {
					$page4.css({'background-color': '#fbc37c'});
					$page4divider.css({'background-color': '#db7b00'});
					$page4tab.css({'background-image': 'url(../images/2011AR-outreach-1-tab.png)'});
					$page4header.css({'background-image': 'url(../images/2011AR-outreach-1-header_outreachgiving.png)', 'width': 352, 'height': 18});
					$page4fade.css({'background-image': 'url(../images/fadetile-orange.png)'});
				} else if (pos >= 800) {
					$page4.css({'background-color': '#000'});
					$page4divider.css({'background-color': '#db7b00'});
					$page4tab.css({'background-image': 'url(../images/2012AR-outreach-2-tab.png)'});
					$page4header.css({'background-image': 'url(../images/2012AR-outreach-2-header.png)', 'width': 365, 'height': 17});
					$page4fade.css({'background-image': 'url(../images/fadetile-black.png)'});
				}
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page4divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3550, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3550
					, 3600); //fade in to fixed position, fade out
				$page4tab.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3550, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3550
					, 3600); //fade in to fixed position, fade out
				$page4header.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3550, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3550
					, 3600); //fade in to fixed position, fade out
				$page4fade.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3550, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3550
					, 3600); //fade in to fixed position, fade out

if (!mobileDetection.ismobile) {
				/* Distribution */
				sIn = -400;

				$gdheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$gdtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$gdcircle.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$gdarrow.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(sLen*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$gdlegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMin(100-(100*((pos-sIn)/sLen)), 0) : 0)}); //moving right-to-left
				$gdlegendbars.each(function(idx) {
					$(this).css({ 'left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMin((sLen-((4-idx)*30))-((sLen-((4-idx)*30))*((pos-sIn)/sLen)), 0) : 0)}); //moving right-to-left
				});
				$gdtwelve.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in

				/* Love Week */
				sIn = 100;

				$lwheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$lwlogo.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(sLen*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$lwtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$lwpartner.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-sIn)/sLen)) : 0)}); //moving right-to-left
				$lwvid.css({'opacity': opacityShift(pos, sIn+100, sLen-100, 'in')}); //fade in

				/* Partner Map */
				/* Intro */
				sIn = 850
				, sLen = 50;
				
				$pmintro.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* Diamond */
				sIn = 900
				, sLen = 100;
				
				$pmdiamond.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* Upper Bars */
				sIn = 950
				, sLen = 100;

				$pmupperbarsleft.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 100, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (219*((pos-(sIn))/sLen)) : 219), 'left': Math.floor(pos>sIn && pos<sIn+sLen ? 219-(219*((pos-(sIn))/sLen)) : 0), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (219*((pos-(sIn))/sLen)) : 219), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 219-(219*((pos-(sIn))/sLen)) : 0)}); //reveal right-to-left, diagonally from bottom-to-top
				});
				$pmupperbarsright.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 100, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (219*((pos-(sIn))/sLen)) : 219), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (219*((pos-(sIn))/sLen)) : 219), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 219-(219*((pos-(sIn))/sLen)) : 0)}); //reveal left-to-right, diagonally from bottom-to-top
				});
				
				/* Upper Flags */
				sIn = 1050
				, sLen = 150;

				$pmupperflagsleft.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? ($(this).data('initWidth')*((pos-(sIn))/sLen)) : $(this).data('initWidth'))}); //reveal left-to-right
				});
				$pmupperflagsright.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? ($(this).data('initWidth')*((pos-(sIn))/sLen)) : $(this).data('initWidth'))
					, 'left': Math.floor(pos>sIn && pos<sIn+sLen ? (304-$(this).data('initLeft'))-((304-$(this).data('initLeft'))*((pos-(sIn))/sLen))+$(this).data('initLeft') : $(this).data('initLeft'))}); //reveal right-to-left
				});
				$pmupperleftlabel.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (183*((pos-(sIn))/sLen)) : 183)}); //reveal bottom-to-top
				$pmlowerrightlabel.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+200 ? (637*((pos-(sIn))/200)) : 637)}); //reveal bottom-to-top

				/* Lower Bars */
				sIn = 1000
				, sLen = 100;

				$pmlowerbarsleft.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 100, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (281*((pos-(sIn))/sLen)) : 281), 'left': Math.floor(pos>sIn && pos<sIn+sLen ? 281-(281*((pos-(sIn))/sLen)) : 0), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (281*((pos-(sIn))/sLen)) : 281), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? -281+(281*((pos-(sIn))/sLen)) : 0)}); //reveal right-to-left, diagonally from top-to-bottom
				});
				$pmlowerbarsright.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 100, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (237*((pos-(sIn))/sLen)) : 237), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (281*((pos-(sIn))/sLen)) : 281), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? -237+(237*((pos-(sIn))/sLen)) : 0)}); //reveal left-to-right, diagonally from top-to-bottom
				});
				
				/* Lower Flags */
				sIn = 1100
				, sLen = 150;

				$pmlowerflagsleft.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? ($(this).data('initWidth')*((pos-(sIn))/sLen)) : $(this).data('initWidth'))}); //reveal left-to-right
				});
				$pmlowerflagsright.each(function(idx) {
					$(this).css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? ($(this).data('initWidth')*((pos-(sIn))/sLen)) : $(this).data('initWidth'))
					, 'left': Math.floor(pos>sIn && pos<sIn+sLen ? (281-$(this).data('initLeft'))-((281-$(this).data('initLeft'))*((pos-(sIn))/sLen))+$(this).data('initLeft') : $(this).data('initLeft'))}); //reveal right-to-left
				});
				$pmlowerleftlabel.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (188*((pos-(sIn))/sLen)) : 188)}); //reveal bottom-to-top

				/* Line Left */
				sIn = 1400
				, sLen = 50;
				$pllefttop.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (49*((pos-(sIn))/sLen)) : 49), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? 49-(49*((pos-(sIn))/sLen)) : 0)}); //reveal right-to-left
				
				sIn = sIn + sLen
				, sLen = 1000;
				$plleftmid.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (1098*((pos-(sIn))/sLen)) : 1098)}); //reveal top-to-bottom
				
				sIn = sIn + sLen
				, sLen = 50;
				$plleftbot.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (124*((pos-(sIn))/sLen)) : 124)}); //reveal left-to-right
				
				/* Line Right */
				sIn = 1400
				, sLen = 50;
				$plrighttop.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (43*((pos-(sIn))/sLen)) : 43)}); //reveal left-to-right
				
				sIn = sIn + sLen
				, sLen = 470;
				$plrightmid.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (517*((pos-(sIn))/sLen)) : 517)}); //reveal top-to-bottom
				
				sIn = sIn + sLen
				, sLen = 50;
				$plrightbot.css({'opacity': opacityShift(pos, sIn, 1, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (135*((pos-(sIn))/sLen)) : 135), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? 135-(135*((pos-(sIn))/sLen)) : 0)}); //reveal right-to-left
				
				/* Partner Vids */
				sIn = 1700
				, sLen = 100;
				$pvheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in

				sIn = sIn + sLen
				, sLen = 100;
				$pvvid1.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				sIn = sIn + sLen/2
				, sLen = 100;
				$pvvid2.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$pvvid4.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				sIn = sIn + sLen/2
				, sLen = 100;
				$pvvid3.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$pvvid5.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$pvvid7.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				sIn = sIn + sLen/2
				, sLen = 100;
				$pvvid6.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$pvvid8.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				sIn = sIn + sLen/2
				, sLen = 100;
				$pvvid9.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				/* Disaster Vid */
				sIn = 2250
				, sLen = 100;
				$dvheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in

				sIn = sIn + 150
				, sLen = 150;
				$dvvid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //slide up and fade in

				sIn = sIn + 200
				, sLen = 100;
				$plbtn.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
}
				
			} //$page4
			
			if (globalPos > 11000 && pos < $page5.offset().top+$page5.height()+1500) { //$page5
				pos = globalPos-$page5.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				if (pos < 600) {
					$page5far1.css({'position': 'fixed', 'left': '50%', 'top': Math.floor(500-(pos/6)), 'opacity': opacityShift(pos, -499, 100, 'in')});
					$page5far2.css({'position': 'fixed', 'left': '-20%', 'top': Math.floor(600-(pos/6)), 'opacity': opacityShift(pos, 600, 100, 'in')});
					$page5far3.css({'opacity': 0});
					$page5near.css({'opacity': 0});
					$page5fade.css({'background-image': 'url(../images/fadetile-blue.png)'});
				} else if (pos >= 600 && pos < 2100) {
					$page5far1.css({'position': 'fixed', 'left': '50%', 'top': Math.floor(500-(pos/6)), 'opacity': opacityShift(pos, 650, 50, 'out')});
					$page5far2.css({'position': 'fixed', 'left': '-20%', 'top': Math.floor(600-(pos/6)), 'opacity': opacityShift(pos, 600, 100, 'in')});
					$page5far3.css({'position': 'fixed', 'left': '60%', 'top': Math.floor(600-(pos/6)), 'opacity': opacityShift(pos, 2100, 100, 'in')});
					$page5near.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(750-(pos/6)), 'opacity': opacityShift(pos, 2100, 100, 'in')});
					$page5fade.css({'background-image': 'url(../images/fadetile-blue.png)'});
				} else if (pos >= 2100 && pos < 3300) {
					$page5far1.css({'opacity': 0});
					$page5far2.css({'position': 'fixed', 'left': '-20%', 'top': Math.floor(600-(pos/6)), 'opacity': opacityShift(pos, 2150, 50, 'out')});
					$page5far3.css({'position': 'fixed', 'left': '60%', 'top': Math.floor(600-(pos/6)), 'opacity': opacityShift(pos, 2100, 100, 'in')});
					$page5near.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(750-(pos/6)), 'opacity': opacityShift(pos, 2100, 100, 'in')});
					$page5fade.css({'background-image': 'url(../images/fadetile-blue.png)'});
				} else if (pos >= 3300 && pos < 3750) {
					$page5far1.css({'opacity': 0});
					$page5far2.css({'opacity': 0});
					$page5far3.css({'position': 'fixed', 'left': '60%', 'top': Math.floor(600-(pos/6)), 'opacity': opacityShift(pos, 3300, 50, 'out')});
					$page5near.css({'position': 'fixed', 'left': '20%', 'top': Math.floor(750-(pos/6)), 'opacity': opacityShift(pos, 3300, 50, 'out')});
					$page5fade.css({'background-image': 'url(../images/fadetile-blue.png)'});
				} else if (pos >= 3750) {
					$page5far1.css({'position': 'absolute', 'opacity': 0});
					$page5far2.css({'position': 'absolute', 'opacity': 0});
					$page5far3.css({'position': 'absolute', 'opacity': 0});
					$page5near.css({'position': 'absolute', 'opacity': 0});
				}
} else {
				$page5fade.css({'background-image': 'url(../images/fadetile-blue.png)'});
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page5divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3750, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3750
					, 3800); //fade in to fixed position, fade out
				$page5tab.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3750, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3750
					, 3800); //fade in to fixed position, fade out
				$page5header.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3750, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3750
					, 3800); //fade in to fixed position, fade out
				$page5fade.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3750, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3750
					, 3800); //fade in to fixed position, fade out

if (!mobileDetection.ismobile) {
				/* EC.org Map */
				sIn = -400
				, sLen = 100;

				$ecmheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$ecmmap.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$ecmtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$ecmlegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -(sLen*(1-((pos-sIn)/sLen))) : 0)}); //moving left-to-right
				$ecmcountries.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? constrainMin(100-(100*((pos-sIn)/sLen)), 0) : 0)}); //moving right-to-left

				sIn = -300
				, sLen = 50;
				$ecmtab1.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 75-(75*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab2.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 75-(75*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab3.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab4.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab5.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab6.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab7.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab8.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab9.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+20;
				$ecmtab10.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in

				/* EC.org Stats */
				sIn = 150
				, sLen = 100;
				$wsruletop.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$wsvheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -100+(100*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$wsvtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$wsvchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (245*((pos-(sIn))/sLen)) : 245), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 245-(245*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top

				sIn = 200
				, sLen = 100;
				$wsrulevert.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$wssheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$wssclock.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$wsstime.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$wsstotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in

				sIn = 250
				, sLen = 100;
				$wsrulemid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$sfbox.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$sftotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$sfchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (215*((pos-(sIn))/sLen)) : 215)}); //reveal left-to-right
				$sfviews.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in

				/* Worship Albums */
				sIn = 800
				, sLen = 100;
				$ewheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$ewtotal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				sIn = sIn+50;
				$ewfth.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+25;
				$ewkc.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+25;
				$ewgwu.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+25;
				$ewwaa.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+75;
				$ewinst.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* Worship Firsts */
				sIn = 1200
				, sLen = 100;
				$ewfirsts.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? -50+(50*((pos-(sIn))/sLen)) : 0)}); //slide down and fade in
				sIn = sIn+50;
				$ewbillboard.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+25;
				$ewvid1.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$ewvid2.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$ewvid3.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$ewvid4.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in

				/* Worship Leaders */
				sIn = 1700
				, sLen = 100;
				$ewheight.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$ewheightlegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+50;
				$ewbrad.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (224*((pos-(sIn))/sLen)) : 224), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 224-(224*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				sIn = sIn+20;
				$ewchris.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (207*((pos-(sIn))/sLen)) : 207), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 207-(207*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				sIn = sIn+20
				, sLen = 200;
				$ewwade.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (185*((pos-(sIn))/sLen)) : 185), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 185-(185*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				sIn = sIn+20
				, sLen = 100;
				$ewmack.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (203*((pos-(sIn))/sLen)) : 203), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 203-(203*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				sIn = sIn+20;
				$ewlondon.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (191*((pos-(sIn))/sLen)) : 191), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 191-(191*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				sIn = sIn+20;
				$ewjane.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (193*((pos-(sIn))/sLen)) : 193), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 193-(193*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top

				/* Sermons */
				sIn = 2200
				, sLen = 100;
				$spheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$spsubhead.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$splogo.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$spchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (336*((pos-(sIn))/sLen)) : 336)}); //reveal left-to-right
				$spvodviews.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				
				sIn = sIn+sLen;
				$spinst.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+33;
				$spaudio.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+33;
				$spvideo.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+33;
				$sphdvid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				/* TV */
				sIn = 2600;
				$tvheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$tvicon.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$tvviewers.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				
				/* App */
				sIn = 2900;
				$saheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? -50+(50*((pos-(sIn))/sLen)) : 0)}); //slide down and fade in
				$saicon.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$salaunches.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$sainstalls.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+sLen;
				$sadownload.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
}

			} //$page5
			
			if (globalPos > 15000 && pos < $page6.offset().top+$page6.height()+1500) { //$page6
				pos = globalPos-$page6.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				if (pos < 1300) {
					$page6.stop().animate({'background-color': '#000'});
					$page6header.css({'background-image': 'url(../images/2011AR-extension-header.png)', 'width': 234, 'height': 16});
					$page6fade.css({'background-image': 'url(../images/fadetile-black.png)'});
				} else if (pos >= 1300) {
					$page6.stop().animate({'background-color': '#fff'});
					$page6header.css({'background-image': 'url(../images/2011AR-expansion-header.png)', 'width': 243, 'height': 17});
					$page6fade.css({'background-image': 'url(../images/fadetile-white.png)'});
				}
} else {
				if (pos < 1300) {
					$page6.css({'background-color': '#000'});
					$page6header.css({'background-image': 'url(../images/2011AR-extension-header.png)', 'width': 234, 'height': 16});
					$page6fade.css({'background-image': 'url(../images/fadetile-black.png)'});
				} else if (pos >= 1300) {
					$page6.css({'background-color': '#fff'});
					$page6header.css({'background-image': 'url(../images/2011AR-expansion-header.png)', 'width': 243, 'height': 17});
					$page6fade.css({'background-image': 'url(../images/fadetile-white.png)'});
				}
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page6divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3700, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3700
					, 3750); //fade in to fixed position, fade out
				$page6tab.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3700, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3700
					, 3750); //fade in to fixed position, fade out
				$page6header.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3700, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3700
					, 3750); //fade in to fixed position, fade out
				$page6fade.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3700, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3700
					, 3750); //fade in to fixed position, fade out
				
if (!mobileDetection.ismobile) {
				/* Extension Map */
				sIn = -400
				, sLen = 100;
				$emintro.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+100
				, sLen = 200;
				$emheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$emmap.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$emlegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				sIn = sIn+sLen
				, sLen = 100;
				$emlines1.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': pos>sIn && pos<sIn+sLen ? (138*((pos-(sIn))/sLen)) : 138, 'margin-left': pos>sIn && pos<sIn+sLen ? 136-(136*((pos-sIn)/sLen)) : 0, 'background-position': pos>sIn && pos<sIn+sLen ? -136+(136*((pos-sIn)/sLen)) : 0 + 'px top'}); //reveal left-to-right, static bg
				$emlines2.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (570*((pos-(sIn))/sLen)) : 570)}); //reveal right-to-left, static bg
				
				/* Ext Vid */
				sIn = 350
				, sLen = 200;
				$evheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$evvid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				/* Ext Site Stats */
				sIn = 850
				, sLen = 100;
				$esrule1.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$essites.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				sIn = sIn+sLen;
				$esrule2.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$esatt.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+25;
				$esppl.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+25;
				$esbapt.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+25;
				$essal.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? -50+(50*((pos-(sIn))/sLen)) : 0)}); //slide down and fade in
				sIn = sIn+sLen;
				$eslink.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				/* Expansion Map */
				sIn = 1350
				, sLen = 100;
				$expmheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+sLen;
				$expmmap.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+50;
				$expmloc1.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$expmloc2.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$expmloc3.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$expmloc4.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$expmloc5.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = sIn+25;
				$expmloc6.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				sIn = 1550;
				$expmdetail.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$expmlegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				sIn = 1600;
				$expmavg.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				
				/* Exp Vid */
				sIn = 2150;
				$expvheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$expvvid.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				/* Exp Strats */
				sIn = 2700
				, sLen = 100;
				$expsheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				sIn = sIn+sLen
				, sLen = 200;
				$expsland.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$expswh.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -100+(100*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$expspl.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$expsbc.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
}

			} //$page6
			
			if (globalPos > 18000 && pos < $page7.offset().top+$page7.height()+1500) { //$page7
				pos = globalPos-$page7.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				if (pos < 2500) {
					$page7.stop().animate({'background-color': '#eff2b5'});
					$page7header.css({'background-image': 'url(../images/2011AR-financial-1-header.png)', 'width': 364, 'height': 18});
					$page7fade.css({'background-image': 'url(../images/fadetile-green.png)'});
				} else if (pos >= 2500) {
					$page7.stop().animate({'background-color': '#fff'});
					$page7header.css({'background-image': 'url(../images/2011AR-financial-2-header.png)', 'width': 315, 'height': 18});
					$page7fade.css({'background-image': 'url(../images/fadetile-white.png)'});
				}
} else {
				if (pos < 2500) {
					$page7.css({'background-color': '#eff2b5'});
					$page7header.css({'background-image': 'url(../images/2011AR-financial-1-header.png)', 'width': 364, 'height': 18});
					$page7fade.css({'background-image': 'url(../images/fadetile-green.png)'});
				} else if (pos >= 2500) {
					$page7.css({'background-color': '#fff'});
					$page7header.css({'background-image': 'url(../images/2011AR-financial-2-header.png)', 'width': 315, 'height': 18});
					$page7fade.css({'background-image': 'url(../images/fadetile-white.png)'});
				}
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page7divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				$page7tab.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				$page7header.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				$page7fade.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 1} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': opacityShift(pos, 3300, 50, 'out')}
					, {'opacity': 0}
					, pos
					, sIn
					, 3300
					, 3350); //fade in to fixed position, fade out
				
if (!mobileDetection.ismobile) {
				/* Expenses */
				sIn = -400
				, sLen = 200;
				$becircle.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$bearrow.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$bechart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$beasterisk.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 50-(50*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				
				/* Income */
				sIn = 100
				, sLen = 200;
				$biheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$bibreakdown.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (330*((pos-(sIn))/sLen)) : 330), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 330-(330*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				$bicompare.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (325*((pos-(sIn))/sLen)) : 325), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 325-(325*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				$birule.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$binote.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				
				/* Giving */
				sIn = 650
				, sLen = 200;
				$bgheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$bgincrease.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? -sLen+(sLen*((pos-sIn)/sLen)) : 0)}); //slide right and fade in
				$bgavg.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$bgchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'width': Math.floor(pos>sIn && pos<sIn+sLen ? (615*((pos-(sIn))/sLen)) : 615)}); //reveal left-to-right
				
				/* Online Giving */
				sIn = 1100
				, sLen = 200;
				$boheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$bochart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (386*((pos-(sIn))/sLen)) : 386), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 386-(386*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				$boincrease.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'height': Math.floor(pos>sIn && pos<sIn+sLen ? (333*((pos-(sIn))/sLen)) : 333), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 333-(333*((pos-(sIn))/sLen)) : 0)}); //reveal bottom-to-top
				
				/* Loans */
				sIn = 1650
				, sLen = 200;
				$blheader.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				$blchart.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), '-webkit-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)', '-moz-transform': 'rotate('+ (pos>sIn && pos<sIn+sLen ? 360*((pos)/(sIn+sLen)) : 0) +'deg)'}); //spin and fade in
				$bllegend.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-left': Math.floor(pos>sIn && pos<sIn+sLen ? sLen-(sLen*((pos-sIn)/sLen)) : 0)}); //slide left and fade in
				
				sIn = 1950
				, sLen = 200;
				$blaudit.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				
				/* Letter */
				sIn = 2500
				, sLen = 200;
				$fltext.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$flbio.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
				$flphoto.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? 100-(100*((pos-(sIn))/sLen)) : 0)}); //slide up and fade in
}

			} //$page7
			
			if (globalPos > 22000 && pos < $page8.offset().top+$page8.height()+1500) { //$page8
				pos = globalPos-$page8.offset().top; //set scroll offset for this page
//$('#diag').text(pos);
				
if (!mobileDetection.ismobile) {
				$page8.css({'backgroundPosition': '50% ' + Math.floor(-(pos/9)+200) + 'px'});
}

				/* page headings */
				sIn = -1000
				, sLen = 200;

				$page8divider.effectRange(
					pos < 0 ? {'position': 'absolute', 'opacity': 0} : {'position': 'fixed', 'opacity': 1}
					, {'position': 'fixed', 'opacity': 1}
					, {'opacity': 0}
					, pos
					, sIn
					, 3750
					, 3800); //fade in to fixed position, fade out
				
if (!mobileDetection.ismobile) {
				/* Closing */
				sIn = -200
				, sLen = 200;
				$fctitle.css({'opacity': opacityShift(pos, sIn, sLen, 'in'), 'margin-top': Math.floor(pos>sIn && pos<sIn+sLen ? -100+(100*((pos-(sIn))/sLen)) : 0)}); //slide down and fade in
				$fcshare.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				$fcdownload.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
				
				sIn = -100
				, sLen = 100;
				$fcfooter.css({'opacity': opacityShift(pos, sIn, sLen, 'in')}); //fade in
}

			} //$page8

			
		//} //!mobileDetection.ismobile
	} //Move()
	
	//run at load
	$(window).scroll();
	Move($window.scrollTop());
	/* end Move() _________________________________________________________________________________________________________________________________________________________ */
	
	/* Pre-set attrs of flags */
	$('.pmflag').each(function(idx) { $(this).data({'initWidth': $(this).width(), 'initLeft': $(this).position().left}); });
	
	RepositionNav();
	
	$window.resize(function() {
		Move($window.scrollTop());
		if (!mobileDetection.ismobile) { RepositionNav(); }
	});		
	$window.bind('scroll', function() {
		Move($window.scrollTop());
	});
	
	$('.vidthumb').on('click', function(e) {
		$(this).parent().animate({'opacity': 0});
		$('#'+$(this).parent().data('vidtarget')).html('<iframe src="http://player.vimeo.com/video/'+$(this).data('vidsrc')+'?title=0&amp;byline=0&amp;portrait=0&amp;color=ff9933&amp;autoplay=1" width="640" height="360" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><div class="close" />').css('z-index', 99).animate({'opacity': 1});
	});
	$('.vidtarget .close').live('click', function(e) {
		$(this).parent().css('z-index', 1).animate({'opacity': 0}, function() {$(this).html('');});
		$('#'+$(this).parent().data('vidsource')).animate({'opacity': 1});
		_gaq.push(['_trackEvent', 'Closed Video Overlay', 'SectionID: ' + $(this).closest('section').attr('id'), 'VideoGroupID: ' + $('#'+$(this).parent().data('vidsource')).attr('id')]);
	})
	$('#salvations .vidthumb').on('click', function(e) {
		$('#salcircle, #saltotal').animate({'opacity': 0});
	});
	$('#salvations .close').live('click', function(e) {
		$('#salcircle, #saltotal').animate({'opacity': 1});
	});
	setTimeout(function() { $('#intro-prompt').animate({'opacity': 1}, 1500); window.scrollPrompt=true; }, 6000);
	
	
	//Setup GA actions
	/*$('.vid').on('click', function(e) {
		_gaq.push(['_trackEvent', 'Played Video', 'SectionID: ' + $(this).closest('section').attr('id'), 'VideoID: ' + $(this).parent().attr('id')]);
	});*/
	$('.vidthumb').on('click', function(e) {
		_gaq.push(['_trackEvent', 'Played Video - From Thumbnail', 'SectionID: ' + $(this).closest('section').attr('id'), 'VideoID: ' + $(this).attr('id')]);
	});
	$('.btn').on('click', function(e) {
		_gaq.push(['_trackEvent', 'Clicked Content Link', 'SectionID: ' + $(this).closest('section').attr('id'), 'Link Text: ' + $(this).find('a').text()]);
	});
	$('#fcshare .btn').on('click', function(e) {
		_gaq.push(['_trackEvent', 'Clicked Share Link', 'SectionID: ' + $(this).closest('section').attr('id'), 'Share Network: ' + $(this).find('a').text().replace('Share on ','')]);
	});
	$('#nav li a').on('click', function(e) {
		_gaq.push(['_trackEvent', 'Clicked Navigation Link', 'ScrollPos: ' + $('#pos').text(), 'Title: ' + $(this).text()]);
	});

}); //end document.ready

//video embeds
var embedJWPlayer = function(objID, width, height, file, duration, autoplay) {
	
	if (mobileDetection.ismobile) {
		$('#' + objID).replaceWith('<video id="' + objID + '" controls autobuffer width="'+width+'" height="'+height+'"><source src="'+file+'" type="video/mp4" /></video>');
	} else {
		$('#' + objID).replaceWith('<div id="' + objID + '" />');
	}
	
	if (!mobileDetection.ismobile) {
		var embedstreamer = !(/multicastmedia\.com/i.test(file)) || $.browser.webkit ? '' : 'rtmp://cp23245.edgefcs.net/ondemand/';
		var embedfile = $.browser.webkit ? file : /\.mp4/gi.test(file) ? "mp4:23245" + file.replace('http://vidego-http.multicastmedia.com', '') : /multicastmedia\.com/gi.test(file) ? "23245" + file.replace('http://vidego-http.multicastmedia.com', '') : file;
		var embedimage = /multicastmedia\.com/gi.test(file) && !autoplay ? 'http://mediasuite.multicastmedia.com/thumb.php?' + file.substr(file.indexOf('aid=')) + '&w=' + width + '&h=' + height : '';
		var jwembed = function() {
			jwplayer(objID).setup({
					streamer: embedstreamer,
					file: embedfile,
					flashplayer: "js/jwplayer/player.swf",
					width: width,
					height: height,
					image: embedimage,
					duration: duration,
					autostart: autoplay,
					controlbar: 'none'
				});
			};
		jwembed();
	}
	
	return false;
}

//mobile overrides
var mobileDetection = {
	isipad: /ipad/gi.test(navigator.userAgent),
	isiphone: /iphone/gi.test(navigator.userAgent),
	isipod: /ipod/gi.test(navigator.userAgent),
	isandroid: /android/gi.test(navigator.userAgent),
	
	init: function() {
		var self=this;
		if (self.isipad || self.isiphone || self.isipod) {
			$('body').addClass('ismobile iOS');
			self.isios = true;
			if (self.isipad) {$('body').addClass('iPad');}
			if (self.isiphone) {$('body').addClass('iPhone');}
			if (self.isipod) {$('body').addClass('iPod');}
		}
		if (self.isandroid) {
			$('body').addClass('ismobile android');
		}
		self.ismobile = (self.isipad || self.isiphone || self.isipod || self.isandroid);
	}
}
mobileDetection.init();
