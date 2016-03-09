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

  <div class="remodal-bg">
    <div class="remodal" data-remodal-id="modal">
      <button data-remodal-action="close" class="remodal-close"></button>
      <h1>Remodal</h1>
      <p>
        Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
      </p>
      <br>
      <button data-remodal-action="cancel" class="remodal-cancel">Cancel</button>
      <button data-remodal-action="confirm" class="remodal-confirm">OK</button>
    </div>
  </div>

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
          </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">

          <!-- Right Side Of Navbar -->
          <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
            @if (Auth::guest())
            <li><a href="{{ url('/login') }}">Login</a></li>
            <li><a href="{{ url('/register') }}">Register</a></li>
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
          <div class="col-md-5">
            <h1>Save Your Links Online!</h1>
            <p>
              Tired of having your bookmarks bar full of links you rarely use?
            </p>
            <p><a class="btn btn-primary btn-lg" href="{{ url('/register') }}" role="button">Signup for free</a></p>
          </div>
          <div class="col-md-7">
            <div class="browser-mockup">
              <!-- <img src="images/screenshot.png" /> -->
              <img src="images/ss1000x600.png" />
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
            <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Export to HTML</a></li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane active" id="home">
              <div class="row">
                <div class="col-md-6">
                  <h1>Title & Description</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div class="col-md-6">
                  <img src="images/screenshot.png" alt="">
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="profile">
              <div class="row">
                <div class="col-md-6">
                  <h1>Tagging</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div class="col-md-6">
                  <img src="images/screenshot.png" alt="">
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="messages">
              <div class="row">
                <div class="col-md-6">
                  <h1>Link search</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div class="col-md-6">
                  <img src="images/screenshot.png" alt="">
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane" id="settings">
              <div class="row">
                <div class="col-md-6">
                  <h1>Export to HTML</h1>

                </div>
                <div class="col-md-6">
                  <img src="images/screenshot.png" alt="">
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
      <p>© Url-Project. All rights reserved</p>
      <p>Proudly hosted with DigitalOcean.</p>
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



