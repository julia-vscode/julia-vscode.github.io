// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
    if (!location.hash){
    $(modal).modal('hide');
    }
    }
});

// interactive-image setup
var items = {
    main: [
        {
            title: "Workspace View",
            description: "The Workspace panel summarizes all variables defined in "+
                         "the currently active module.",
            position: {
                left: 9,
                top: 50
            }
        },
        {
            title: "Dynamic Autocompletion",
            description: "Suggestions are created dynamically based on the currently loaded "+
                         "packages and show docs.",
            position: {
                left: 28,
                top: 23
            }
        },
        {
            title: "Inline Results",
            description: "Interactive inline results allow for notebook-like evaluation.",
            position: {
                left: 38,
                top: 45
            }
        },
        {
            title: "Integrated REPL",
            description: "Seamless integration of the Julia REPL.",
            position: {
                left: 40,
                top: 85
            }
        },
        {
            title: "Plot Pane",
            description: "In-editor display of plots, complete with history and "+
                         "interactivity.",
            position: {
                left: 80,
                top: 25
            }
        },
        {
            title: "Outline",
            description: "Definitions and other interesting POIs in the file.",
            position: {
                left: 9,
                top: 75
            }
        },
    ],
    debugger: [
        {
            title: "Steppin' through code",
            description: "Easily step into/out of functions or to the next line/call.",
            position: {
                left: 9,
                top: 1
            }
        },
        {
            title: "Workspace View",
            description: "The Workspace is automatically updated to show the values "+
                         "of variables in the current (function specific) local scope.",
            position: {
                left: 9,
                top: 20
            }
        },
        {
            title: "Breakpoints",
            description: "Easily set breakpoints (conditional, if necessary) in the editor.",
            position: {
                left: 24,
                top: 39.5
            }
        },
        {
            title: "Debug Console",
            description: "Evaluate arbitrary code in the local scope.",
            position: {
                left: 40,
                top: 85
            }
        },
    ],
    remote: [
        {
            title: "Remote File Editing",
            description: "Fully featured SSH-based file editing based on ftp-remote-edit.",
            position: {
                left: 9,
                top: 10
            }
        },
        {
            title: "Remote REPL",
            description: "Start a remote Julia session.",
            position: {
                left: 40,
                top: 85
            }
        },
        {
            title: "Feature-complete on remote machines",
            description: "All Juno features are available on remote machines, too; " +
                         "including the debugger and plotting.",
            position: {
                left: 60,
                top: 40
            }
        },
    ],
};

// Plugin configuration example (all parameters are optional)
var options = {
      fontColor: "#333333",
      backgroundColor: "#FFFFFF",
      debug: false
  };

// Activate the plugin
$(document).ready(function () {
    $('.interactive-image').interactiveImage(items['main'], options)
});

function changeImage(uri, id) {
    $('#image-overlay-container').remove()
    let img = document.createElement('div')
    img.id = 'image-overlay-container'
    img.classList.add('interactive-image')
    document.getElementById('screeny').parentElement.appendChild(img)

    let screeny = document.getElementById('screeny')
    screeny.src = uri;

    $('#image-overlay-container').interactiveImage(items[id], options)
}
