$(function () {
    $('#introduce_btn').click(function () {
        $('.introduce').css('display', 'block');
        $('.education').css('display', 'none');
        $('.hobbies').css('display', 'none');
        $('.sas').css('display', 'none');
        $('#li_introduce').addClass('active');
        $('#li_education').removeClass('active');
        $('#li_hobbies').removeClass('active');
        $('#li_sas').removeClass('active');

    })

    $('#education_btn').click(function () {
        $('.introduce').css('display', 'none');
        $('.education').css('display', 'block');
        $('.hobbies').css('display', 'none');
        $('.sas').css('display', 'none');
        $('#li_introduce').removeClass('active');
        $('#li_education').addClass('active');
        $('#li_hobbies').removeClass('active');
        $('#li_sas').removeClass('active');
    })

    $('#hobbies_btn').click(function () {
        $('.introduce').css('display', 'none');
        $('.education').css('display', 'none');
        $('.hobbies').css('display', 'block');
        $('.sas').css('display', 'none');
        $('#li_introduce').removeClass('active');
        $('#li_education').removeClass('active');
        $('#li_hobbies').addClass('active');
        $('#li_sas').removeClass('active');
    })

    $('#sas_btn').click(function () {
        $('.introduce').css('display', 'none');
        $('.education').css('display', 'none');
        $('.hobbies').css('display', 'none');
        $('.sas').css('display', 'block');
        $('#li_introduce').removeClass('active');
        $('#li_education').removeClass('active');
        $('#li_hobbies').removeClass('active');
        $('#li_sas').addClass('active');
    })
});