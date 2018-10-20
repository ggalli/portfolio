import Component from '@ember/component';
import Ember from 'ember';

const $ = Ember.$;

export default Component.extend({
    open: false,

    actions: {
        toggleMenu() {
            if(!this.open){
                this.openMenu();
                this.set('open', true)
            }else{
                this.closeMenu();
                this.set('open', false)
            }
        }
    },


    openMenu() {
        $('.circle').addClass('expand');
        $('.x, .y, .z').addClass('collapse');
        $('.menu li').addClass('animate');
        $('body').css('overflow', 'hidden')

        setTimeout(function () {
            $('.y').hide();
            $('.x').addClass('rotate30');
            $('.z').addClass('rotate150');
        }, 70);
        setTimeout(function () {
            $('.x').addClass('rotate45');
            $('.z').addClass('rotate135');
        }, 120);
    },

    closeMenu() {
        $('.x').removeClass('rotate45').addClass('rotate30');
        $('.z').removeClass('rotate135').addClass('rotate150');
        $('.circle').removeClass('expand');
        $('.menu li').removeClass('animate');
        $('body').css('overflow', 'auto')

        setTimeout(function () {
            $('.x').removeClass('rotate30');
            $('.z').removeClass('rotate150');
        }, 50);
        setTimeout(function () {
            $('.y').show();
            $('.x, .y, .z').removeClass('collapse');
        }, 70);
    }
});
