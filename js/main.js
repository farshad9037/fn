
var home, about, service, team, project, testimonials, blog, contact, footer, sections,
    constants = {
        HEADER_HEIGHT: 60
    };

$(document).ready(function () {
    _initVariables();
    _loadTemplates();
    footer.hide();
});

function _initVariables() {
    home = $("#home");
    about = $("#about");
    service = $("#service");
    team = $("#team");
    project = $("#project");
    testimonials = $("#testimonials");
    blog = $("#blog");
    contact = $("#contact");
    footer = $('#footer');
}

function _loadTemplates() {
    home.load("partials/home.html");
    about.load("partials/about.html");
    service.load("partials/service.html");
    team.load("partials/team.html");
    project.load("partials/project.html");
    testimonials.load("partials/testimonials.html");
    blog.load("partials/blog.html");
    contact.load("partials/contact.html", function () {
        footer.show()
    });
    footer.load("partials/footer.html");
}

function scrollToSection(section) {
    $("html, body").animate({
        scrollTop: section.offset().top - constants.HEADER_HEIGHT
    }, 'medium');
}

