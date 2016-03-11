@extends('layouts.app')

@section('content')
<div class="container">

  <div class="row">
    <div class="col-md-3">
      <button id="new-button" class="btn btn-primary"><i class="fa fa-plus"></i>New Link</button>
    </div>
    <div class="col-md-9">
      <div id="search-box-custom">
        <span class="icon">
          <i class="fa fa-search"></i>
        </span>
        <input type="search" placeholder="Search Links...">
      </div>
    </div>
  </div>

  <div class="row links-main">
    <div class="col-md-3">
      <div class="tag-list">
        <h2>TAGS<a href=""><i class="fa fa-plus"></i></a></h2>

        <hr>
        <ul>
          <li><a href="#"><i class="fa fa-tags"></i>All Tags</a></li>
          <li><a href="#"><i class="fa fa-tag"></i>Programming</a></li>
          <li><a href="#"><i class="fa fa-tag"></i>Sports</a></li>
          <li><a href="#"><i class="fa fa-tag"></i>Food</a></li>
        </ul>
      </div>
    </div>
    <div class="col-md-9">
      <div class="app-main">
        <ul class="links-list">
          <li>
            <h3>
              <a href="#">An AngularJS Tutorial</a>
              <a href="#"><i class="fa fa-trash-o"></i></a>
              <a href="#"><i class="fa fa-pencil"></i></a>
            </h3>

            <hr>
            <p>
              This tutorial shows how to create a SPA application.
            </p>
          </li>
          <li>
            <h3>
              <a href="#">A ReactJS Tutorial</a>
              <a href="#"><i class="fa fa-trash-o"></i></a>
              <a href="#"><i class="fa fa-pencil"></i></a>
            </h3>
            <hr>
            <p>
              This tutorial shows how to create a web app based on components.
            </p>
          </li>
          <li>
            <h3>
              <a href="#">Lorem Ipsum</a>
              <a href="#"><i class="fa fa-trash-o"></i></a>
              <a href="#"><i class="fa fa-pencil"></i></a>
            </h3>
            <hr>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
        </ul>
        <ul class="pagination-list">
          <li><a href="#"><i class="fa fa-arrow-left"></i></a></li>
          <li><a href="#">1</a></li>
          <li><a href="#"><i class="fa fa-arrow-right"></i></a></li>
        </ul>



      </div>

    </div>
  </div>

</div>
@endsection
