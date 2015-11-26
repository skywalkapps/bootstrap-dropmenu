---
layout: demo
title: Bootstrap Application Navbar
name: Dropmenu
description: Use Dropmenu to create better navigation.

---

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Task Manager</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Cases</a></li>
        <li><a href="#">Accounts</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Opportunities <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
            <i class="glyphicon glyphicon-user"></i> <span class="caret"></span>
          </a>
          <div class="dropdown-container dropdown-position-bottomright">

            <div class="dropdown-toolbar">
              Signed in as<br>
              <strong>Martin Staněk</strong>
            </div><!-- /dropdown-toolbar -->

            <div class="dropdown-divider"></div>

            <ul class="dropdown-menu">
              <li><a href="#">Your profile</a></li>
              <li><a href="#">Your stars</a></li>
              <li><a href="#">Explore</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Help</a></li>
              <li class="divider"></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Log out</a></li>
            </ul>

          </div><!-- /dropdown-container -->

        </li>
        <li><a href="#">Help</a></li>
      </ul>

      <form class="navbar-form navbar-right" role="search">
        <div class="form-group">
          <input type="search" class="form-control" placeholder="Search">
        </div>
      </form>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


