
var steps_form = {
    options: {
        wrapper: '.dart-quiz',
        attr: 'data-step',
        prev_button: 'a.dart-quiz_prev',
        next_button: 'a.dart-quiz_next',
        success_button: 'button.dart-quiz_success',
        counter_current: '.dart-quiz__current-step',
        counter_all: '.dart-quiz__all-steps',
        step: '.dart-quiz__step',
        start_step: '.start-step',
        reset_step: '.reset-step',
        active_class: 'active',
        progress: '.dart-quiz__progress-bar .progress .progress-bar'
    },
    initialize: function () {
        this.setDefault();
        $('.dart-quiz__slider-one').each(function(){
            var slider = $(this).find('.dart-quiz__slider');
            var min = slider.data('min');
            var max = slider.data('max');
            var def = slider.data('def');
            var step = slider.data('step');
            var handle = slider.find('.ui-slider-handle');
            slider.slider({
                range: 'min',
                min: min,
                max: max,
                value: def,
                step: step,
                create: function() {
                    handle.text($(this).slider("value"));
                },
                slide: function(event, ui){
                    handle.text( ui.value );
                    var parent = $(this).closest('.dart-quiz__slider-wrap');
                    var input = parent.find('.slider-value');
                    input.val(ui.value);
                    console.log(input.val());
               }
           });
        });
        $('.dart-quiz__slider-two').each(function(){
            var slider = $(this).find('.dart-quiz__slider');
            var min = slider.data('min');
            var max = slider.data('max');
            //var def = slider.data('def');
            var step = slider.data('step');
            var handle = slider.find('.ui-slider-handle');
            slider.slider({
                range: true,
                min: min,
                max: max,
                values: [min, max],
                step: step,
                slide: function(event, ui){
                    var parent = $(this).closest('.dart-quiz__slider-wrap');
                    var input_0 = parent.find('.dart-quiz__slider-two-min');
                    var input_1 = parent.find('.dart-quiz__slider-two-max');
                    input_0.val(ui.values[0]);
                    input_1.val(ui.values[1]);
                    //console.log(input.val());
               }
           });
        })
        $(this.options.step+" input[name=contact]").change(function(){
            var pls = $(steps_form.options.step+" input[name=contact]:checked").data("placeholder");
            if($(steps_form.options.step+" input[name=contact]").val() != 'Email'){
                $(steps_form.options.step+" input[name=email]").addClass('hidden');
                $(steps_form.options.step+" input[name=phone]").removeClass('hidden');
                $(steps_form.options.step+" input[name=phone]").attr("placeholder", pls);
            }else{
                $(steps_form.options.step+" input[name=email]").removeClass('hidden');
                $(steps_form.options.step+" input[name=phone]").addClass('hidden');
            }
            
        });
        $(this.options.step+' input[type=radio]:not([name=contact])').change(function(e){
            e.preventDefault();
            steps_form.stepChange('inc');
        });
        $(this.options.prev_button).click(function(e){
            e.preventDefault();
            steps_form.stepChange('dec');
        });
        $(this.options.next_button).click(function(e){
            e.preventDefault();
            steps_form.stepChange('inc');
        });
        $(this.options.start_step).click(function(e){
            e.preventDefault();
            steps_form.stepChange('inc');
        });
        $(this.options.reset_step).click(function(e){
            e.preventDefault();            
            $(this).closest(steps_form.options.wrapper).removeClass("step_success_1");
            steps_form.setDefault();
        });
        // file inputs handler
        this.fileInputs();
    },
    fileInputs: function(){
        var inputs = document.querySelectorAll(this.options.wrapper + ' .inputfile' );
        Array.prototype.forEach.call( inputs, function( input )
        {
            var label	 = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener( 'change', function( e )
            {
                var fileName = '';
                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else
                    fileName = e.target.value.split('\\').pop();

                if( fileName )
                    label.querySelector( 'span' ).innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
		    input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		    input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
        });
        
    },
    setDefault: function(){
        // установливаем шаг по умолчанию
        var start_step = 1;
        $(this.options.wrapper).attr(this.options.attr, start_step);
        $(this.options.wrapper).find(this.options.step).removeClass(this.options.active_class);
        var step = $(this.options.wrapper).attr(this.options.attr);
        $(this.options.wrapper).find(this.options.step+"_"+step).addClass(this.options.active_class);  
        // при условии, что нет стартового экрана заполняем            
        this.changeProgress();
        this.buttonsCheck();
    },
    getTotalSteps: function(){
        return $(this.options.wrapper).find(this.options.step).length;
    },
    stepChange: function(type){
        var parent = $(this.options.wrapper);
        this.options.error = false;
        var current_step = parent.find(this.options.step+'.'+this.options.active_class);
        current_step.find("input.required,textarea.required").each(function(){
            if (!$(this).val()){
                if(type == 'inc'){
                    steps_form.options.error = true;
                    $(this).parent().addClass('error');
                }                
            }else{
                $(this).parent().removeClass('error');
            }
        });
        if (!this.options.error){
            parent.find(this.options.step).removeClass(this.options.active_class);
            if(type == 'inc'){
                var next = Number($(this.options.wrapper).attr(this.options.attr)) + 1;
                if(!parent.hasClass('init')){
                    parent.addClass("init");
                }
            }else{
                var next = Number($(this.options.wrapper).attr(this.options.attr)) - 1;
                if(!next){
                    parent.removeClass("init");
                }  
            }    
            if(next < 0){
                next = 0;
            }    
            parent.attr(this.options.attr, next);
            var step = parent.attr(this.options.attr);
            parent.find(this.options.step+"_"+step).addClass(this.options.active_class);
            this.changeProgress();
            this.buttonsCheck();
        }  
    },
    changeProgress: function(){
        var total_steps = this.getTotalSteps();
        var active = Number($(this.options.wrapper).attr(this.options.attr)) - 1;
        var active_fact = active + 1;
        var percent = Math.round(active * 100 / total_steps);
        var percent_fact = Math.round(active_fact * 100 / total_steps);
		$(this.options.progress).text('Пройдено '+percent+'%');
        $(this.options.progress).css("width", percent+'%');
        $(this.options.progress).attr("aria-valuenow", percent);
        $(this.options.wrapper).find(this.options.counter_current).text(active+1);
        $(this.options.wrapper).find(this.options.counter_all).text(total_steps);
        if(percent_fact == 100){
            $(this.options.wrapper).addClass('last');
        }else{
            $(this.options.wrapper).removeClass('last');
        }
    },
    buttonsCheck: function(){
        var total_steps = this.getTotalSteps();
        var active = Number($(this.options.wrapper).attr(this.options.attr));
        var percent = Math.round(active * 100 / total_steps);
        if(active == 1){
            $(this.options.wrapper).find(this.options.prev_button).addClass('hide');
        }else{
            $(this.options.wrapper).find(this.options.prev_button).removeClass('hide');
        }
        if(percent == 100){
            $(this.options.wrapper).find(this.options.next_button).addClass('hidden');
            $(this.options.wrapper).find(this.options.success_button).removeClass('hidden');
        }else{
            $(this.options.wrapper).find(this.options.next_button).removeClass('hidden');
            $(this.options.wrapper).find(this.options.success_button).addClass('hidden');
        }
    }
};

$(document).ready(function(){
    steps_form.initialize();
});