$(document).ready(function () {
    var home, about, service, team, project, testimonials, blog, contact, documentBody, sections;

    home = $("#home");
    about = $("#about");
    service = $("#service");
    team = $("#team");
    project = $("#project");
    testimonials = $("#testimonials");
    blog = $("#blog");
    contact = $("#contact");
    documentBody = $('body');

    home.load("partials/home.html");
    about.load("partials/about.html");
    service.load("partials/service.html");
    team.load("partials/team.html");
    project.load("partials/project.html");
    testimonials.load("partials/testimonials.html");
    blog.load("partials/blog.html");
    contact.load("partials/contact.html");

});

