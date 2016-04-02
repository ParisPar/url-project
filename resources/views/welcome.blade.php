<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Url Project</title>

  <!-- Fonts -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
  <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>

  <!-- Styles -->
  <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
  <link rel="stylesheet" href="/css/libs.css">

</head>
<body id="app-layout">

  <header>
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">

          <!-- Collapsed Hamburger -->
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
            <span class="sr-only">Toggle Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <!-- Branding Image -->
          <a class="navbar-brand" href="{{ url('/') }}">
            Url Project
            <span class="beta-text">beta</span>
          </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">

          <!-- Right Side Of Navbar -->
          <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
            @if (Auth::guest())
            <li><a href="{{ url('/login') }}">Login</a></li>
            <li><a href="{{ url('/register') }}" id="signup">Sign Up</a></li>
            @else
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                {{ Auth::user()->name }} <span class="caret"></span>
              </a>

              <ul class="dropdown-menu" role="menu">
                <li><a href="{{ url('/logout') }}"><i class="fa fa-btn fa-sign-out"></i>Logout</a></li>
              </ul>
            </li>
            @endif
          </ul>
        </div>
      </div>
    </nav>

    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-5">
            <h1>Save & Organize Your Links Online!</h1>
            <p>
              No more overfilling your bookmarks toolbar!
            </p>
            <p><a class="btn btn-primary btn-lg" href="{{ url('/register') }}" role="button">Sign Up for free</a></p>
          </div>
          <div class="col-xs-7">
            <div class="browser-mockup">
              <img src="/images/preview.gif" />
            </div>
          </div>
        </div>
      </div>
    </div>

  </header>

  <hr>

  <main>
    <div class="container">
      <div class="features">

        <h1>Features</h1>

        <div>

          <!-- Nav tabs -->
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Title & Description</a></li>
            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Tagging</a></li>
            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Link search</a></li>
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Export to PDF</a></li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
              <div class="row">
                <div class="col-xs-6">
                  <h1>Title & Description</h1>
                  <p>
                    When creating a link, you will be asked to give a title,
                    that will serve as the displayed text for that link.
                    You can optionally add a description. Both the title 
                    and the description terms are taken into account when
                    searching for a particular link.
                  </p>
                </div>
                <div class="col-xs-6">
                  <img class="feature-image" src="/images/createlink.jpg" alt="">
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
              <div class="row">
                <div class="col-xs-6">
                  <h1>Tagging</h1>
                  <p>
                    You can organize your links by creating tags and adding them to your
                    links. You can instantly view all links associated with a tag by clicking
                    on the tag name.
                  </p>
                </div>
                <div class="col-xs-6">
                  <img class="feature-image" src="/images/tags.jpg" alt="">
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="messages">
              <div class="row">
                <div class="col-xs-6">
                  <h1>Link search</h1>
                  <p>
                    The application features an instant search that updates the link list
                    as soon as you start typing. Both the link title and description are taken into account
                    when searching though the links. Search results are also combined with
                    the current active tag filters.
                  </p>
                </div>
                <div class="col-xs-6">
                  <img class="feature-image" src="/images/search.jpg" alt="">
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="settings">
              <div class="row">
                <div class="col-xs-6">
                  <h1>Export to PDF</h1>
                  <p>
                    Finally, you can also export all your links in a PDF file. Just click
                    the "Export to PDF" button and you will be prompted with a file download
                    that contains all your links.
                  </p>
                </div>
                <div class="col-xs-6">
                  <img class="feature-image" src="/images/pdf2.jpg" alt="">
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  </main>

  <footer>
    <div class="container">
      <p>
      © Url-Project<br>
      Created By <a href="http://www.paraskevas.info">Paris Paraskevas</a>
      </p>
      
    </div>
  </footer>

  <!-- JavaScripts -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.js"></script>
  <script src="/js/libs.js"></script>
  {{-- <script src="{{ elixir('js/app.js') }}"></script> --}}
</body>
</html>



