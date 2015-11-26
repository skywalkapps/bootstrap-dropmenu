---
layout: default
title: Dropmenu for Bootstrap
name: Dropmenu
description: Dropdown module is your fellow companion when creating a web application. Dropmenu gives Twitter Bootstrap dropdown more capabilities and rich structure.

---

<a name="code"></a>
## Give your dropdown menu richer structure

### <span class="text-muted">Plugin: </span>Dropdown Structure

Sometimes just simple unordered list is not enough for a dropdown menu. If you want to give it more structure, use this extension. Dropmenu adds elements like toolbar (`.dropdown-toolbar`) and footer (`.dropdown-header`). You can even use more `.dropdown-menu` elements. Basically, all you've even needed. 

<div class="sw-example" id="dropdown-structure">
  <div class="btn-group dropdown sw-open" style="margin-right:20px">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Account
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

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
  </div><!-- /dropdown -->

  <div class="btn-group dropdown sw-open" style="margin-right:20px">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Statuses: All
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

      <ul class="dropdown-menu">
        <li><a href="#">Open</a></li>
        <li><a href="#">In-progress</a></li>
        <li><a href="#">Reopened</a></li>
        <li><a href="#">Implemented</a></li>
        <li><a href="#">Closed</a></li>
        <li><a href="#">Done</a></li>
        <li><a href="#">Todo</a></li>
        <li><a href="#">Approved</a></li>
        <li><a href="#">Released</a></li>
      </ul>

      <div class="dropdown-footer">
        <a href="#"><i class="glyphicon glyphicon-cog"></i> Workflow settings</a>
      </div><!-- /dropdown-footer -->

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->

  <div class="btn-group dropdown sw-open">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Support
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

      <div class="dropdown-table">
        <ul class="dropdown-menu">
          <li class="dropdown-header">By Resource</li>
          <li><a href="#">Ask the experts</a></li>
          <li><a href="#">Chat or call</a></li>
          <li><a href="#">Knowledge base</a></li>
          <li><a href="#">Research</a></li>
        </ul>

        <ul class="dropdown-menu">
          <li class="dropdown-header">By Audience</li>
          <li><a href="#">For home users</a></li>
          <li><a href="#">For small business</a></li>
          <li><a href="#">For IT professionals</a></li>
          <li><a href="#">For developers</a></li>
        </ul>
      </div><!-- /dropdown-table -->

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->
</div>

```html
<div class="btn-group dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Button title
    <span class="caret"></span>
  </button>

  <div class="dropdown-container">

    <div class="dropdown-toolbar">
      <!-- Put desired header information here -->
    </div><!-- /dropdown-toolbar -->

    <ul class="dropdown-menu">
      <li><a href="#">List item 1</a></li>
      <li><a href="#">List item 2</a></li>
      <li><a href="#">List Item 2</a></li>
    </ul>

    <div class="dropdown-footer">
      <!-- Put links or just simple text information here -->
    </div><!-- /dropdown-footer -->

  </div><!-- /dropdown-container -->
</div><!-- /dropdown -->
```

### Plugin Overview

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 200px">Name</th>
       <th style="width: 200px">Class</th>
       <th style="width: 20px">Required</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Container</strong></td>
        <td><code>.dropdown-container</code></td>
        <td><i class="glyphicon glyphicon-ok text-muted"></i></td>
        <td>Wrapper for different dropdown submodules.</td>
      </tr>

      <tr>
        <td><strong>Toolbar</strong></td>
        <td><code>.dropdown-toolbar</code></td>
        <td></td>
        <td>Useful for search field, specific actions, filters.</td>
      </tr>

      <tr>
        <td><strong>Menu</strong></td>
        <td><code>.dropdown-menu</code></td>
        <td></td>
        <td>Dropmenu adds more variables to play with (max-height, scrollbar, etc.).</td>
      </tr>

      <tr>
        <td><strong>Footer</strong></td>
        <td><code>.dropdown-footer</code></td>
        <td></td>
        <td>Stays fixed to the bottom of the Dropmenu. You can use it for context information or links.</td>
      </tr>

    </tbody>
  </table>
</div>

## Keyboard shortcuts

### <span class="text-muted">Plugin: </span>Dropdown Item

Web applications have become more complex over the years. Especially JavaScript front-end apps can benefit from smart keyboard shortcuts.

<div class="sw-example" id="dropdown-shortcuts">
  <div class="btn-group dropdown sw-open">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      File
      <span class="caret"></span>
    </button>


      <ul id="list-1" class="dropdown-menu">
        <li><a href="#" class="dropmenu-item">
          <span class="dropmenu-item-label">New</span>
          <small class="dropmenu-item-content">Ctrl+N</small>
        </a></li>
        <li><a href="#" class="dropmenu-item">
          <span class="dropmenu-item-label">Edit</span>
          <small class="dropmenu-item-content">Ctrl+E</small>
        </a></li>
        <li><a href="#" class="dropmenu-item">
          <span class="dropmenu-item-label">Delete</span>
          <small class="dropmenu-item-content">Ctrl+D</small>
        </a></li>
      </ul>

  </div><!-- /dropdown -->

</div>

```html
<div class="btn-group dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    File
    <span class="caret"></span>
  </button>

  <ul class="dropdown-menu">
    <li><a href="#" class="dropmenu-item">
      <span class="dropmenu-item-label">New</span>
      <span class="dropmenu-item-content">Ctrl+N</span>
    </a></li>
    <li><a href="#" class="dropmenu-item">
      <span class="dropmenu-item-label">Edit</span>
      <span class="dropmenu-item-content">Ctrl+E</span>
    </a></li>
    <li><a href="#" class="dropmenu-item">
      <span class="dropmenu-item-label">Delete</span>
      <span class="dropmenu-item-content">Ctrl+D</span>
    </a></li>
  </ul>

</div><!-- /dropdown -->
```

### Plugin Overview

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 150px">Name</th>
       <th style="width: 250px">Class</th>
       <th style="width: 20px">Required</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Item</strong></td>
        <td><code>.dropdown-item</code></td>
        <td><i class="glyphicon glyphicon-ok text-muted"></i></td>
        <td></td>
      </tr>

      <tr>
        <td><strong>Item label</strong></td>
        <td><code>.dropdown-item-label</code></td>
        <td><i class="glyphicon glyphicon-ok text-muted"></i></td>
        <td></td>
      </tr>

      <tr>
        <td><strong>Item content</strong></td>
        <td><code>.dropdown-item-content</code></td>
        <td></td>
        <td></td>
      </tr>

    </tbody>
  </table>
</div>

## Choose any menu position

### <span class="text-muted">Plugin: </span>Dropdown Positioning

Twitter Bootstrap allows you to change position of the dropdown menu, however,for top left or top right position, you need to add `.dropup` class, which is not very convenient. Dropmenu provides all uitility classes to force position of your dropdown menu. Just add appropriate class to the dropdown container:

<div class="sw-example" id="dropdown-positioning" style="text-align:center;padding: 260px 40px 240px;">

<div class="btn-group dropdown sw-open" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    World
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-topright has-meta" data-meta="Top right" style="position:absolute">
    <ul class="dropdown-menu">
      <li><a href="#">Africa</a></li>
      <li><a href="#">America</a></li>
      <li><a href="#">Antarctica</a></li>
      <li><a href="#">Asia</a></li>
      <li><a href="#">Australia</a></li>
      <li><a href="#">Europe</a></li>
      <li><a href="#">South America</a></li>
    </ul>
  </div>
</div>

<div class="btn-group dropdown sw-open" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    World
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-topleft has-meta" data-meta="Top left" style="position:absolute">
    <ul class="dropdown-menu">
      <li><a href="#">Africa</a></li>
      <li><a href="#">America</a></li>
      <li><a href="#">Antarctica</a></li>
      <li><a href="#">Asia</a></li>
      <li><a href="#">Australia</a></li>
      <li><a href="#">Europe</a></li>
      <li><a href="#">South America</a></li>
    </ul>
  </div>
</div>

<br>

<div class="btn-group dropdown sw-open" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    World
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-bottomright has-meta" data-meta="Bottom right" style="position:absolute">
    <ul class="dropdown-menu">
      <li><a href="#">Africa</a></li>
      <li><a href="#">America</a></li>
      <li><a href="#">Antarctica</a></li>
      <li><a href="#">Asia</a></li>
      <li><a href="#">Australia</a></li>
      <li><a href="#">Europe</a></li>
      <li><a href="#">South America</a></li>
    </ul>
  </div>
</div>


<div class="btn-group dropdown sw-open" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    World
    <span class="caret"></span>
  </button>

  <div class="dropdown-container has-meta meta-right" data-meta="Default: Bottom left" style="position:absolute">
    <ul class="dropdown-menu">
      <li><a href="#">Africa</a></li>
      <li><a href="#">America</a></li>
      <li><a href="#">Antarctica</a></li>
      <li><a href="#">Asia</a></li>
      <li><a href="#">Australia</a></li>
      <li><a href="#">Europe</a></li>
      <li><a href="#">South America</a></li>
    </ul>
  </div>
</div>
</div>

```html
<div class="btn-group dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    World
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-bottomright">
    <ul class="dropdown-menu">
      <li><a href="#">Africa</a></li>
      <li><a href="#">America</a></li>
      <li><a href="#">Antarctica</a></li>
      <li><a href="#">Asia</a></li>
      <li><a href="#">Australia</a></li>
      <li><a href="#">Europe</a></li>
      <li><a href="#">South America</a></li>
    </ul>
  </div><!-- /dropdown-container -->
</div><!-- /dropdown -->
```

### Positioning Overview

This table gives you a quick overview of all utility classes you can use.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 200px">Name</th>
       <th style="width: 300px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Top right</strong></td>
        <td><code>.dropdown-position-topright</code></td>
        <td>Aligns with the top right corner of the button.</td>
      </tr>

      <tr>
        <td><strong>Top left</strong></td>
        <td><code>.dropdown-position-topleft</code></td>
        <td>Aligns with the top left corner of the button.</td>
      </tr>

      <tr>
        <td><strong>Bottom left</strong></td>
        <td><code>.dropdown-position-bottomleft</code></td>
        <td>Aligns with the bottom left corner of the button.</td>
      </tr>

      <tr>
        <td><strong>Bottom right</strong></td>
        <td><code>.dropdown-position-bottomright</code></td>
        <td>Aligns with the bottom right corner of the button.</td>
      </tr>

    </tbody>
  </table>
</div>

## Inversed menu

### <span class="text-muted">Plugin: </span>Dropdown Inverse

In some cases, you may want to use inversed color version of the menu. Dropmenu extends basic Twitter Bootstrap dropdown component with `.dropdown-inverse`, which changes its appereance. It works exactly the same like inversed navbar. Use it with or without the container element.

<div class="sw-example">
  <div class="btn-group dropdown dropdown-inverse sw-open" style="margin-right:20px">
    <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Account
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

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
  </div><!-- /dropdown -->

  <div class="btn-group dropdown dropdown-inverse sw-open" style="margin-right:20px">
    <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Statuses: All
      <span class="caret"></span>
    </button>

    <ul class="dropdown-menu">
      <li><a href="#">Open</a></li>
      <li><a href="#">In-progress</a></li>
      <li><a href="#">Reopened</a></li>
      <li><a href="#">Implemented</a></li>
      <li><a href="#">Closed</a></li>
      <li><a href="#">Done</a></li>
      <li><a href="#">Todo</a></li>
      <li><a href="#">Approved</a></li>
      <li><a href="#">Released</a></li>
    </ul>

  </div><!-- /dropdown -->

  <div class="btn-group dropdown dropdown-inverse sw-open">
    <button class="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Support
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

      <div class="dropdown-table">
        <ul class="dropdown-menu">
          <li class="dropdown-header">By Resource</li>
          <li><a href="#">Ask the experts</a></li>
          <li><a href="#">Chat or call</a></li>
          <li><a href="#">Knowledge base</a></li>
          <li><a href="#">Research</a></li>
        </ul>

        <ul class="dropdown-menu">
          <li class="dropdown-header">By Audience</li>
          <li><a href="#">For home users</a></li>
          <li><a href="#">For small business</a></li>
          <li><a href="#">For IT professionals</a></li>
          <li><a href="#">For developers</a></li>
        </ul>
      </div><!-- /dropdown-table -->

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->
</div>

```html
<div class="btn-group dropdown dropdown-inverse">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Button title
    <span class="caret"></span>
  </button>

  <div class="dropdown-container">

    <div class="dropdown-toolbar">
      <!-- Put desired header information here -->
    </div><!-- /dropdown-toolbar -->

    <ul class="dropdown-menu">
      <li><a href="#">List item 1</a></li>
      <li><a href="#">List item 2</a></li>
      <li><a href="#">List Item 2</a></li>
    </ul>

    <div class="dropdown-footer">
      <!-- Put links or just simple text information here -->
    </div><!-- /dropdown-footer -->

  </div><!-- /dropdown-container -->
</div><!-- /dropdown -->
```

### Plugin Overview

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 200px">Name</th>
       <th style="width: 200px">Class</th>
       <th style="width: 20px">Required</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Container</strong></td>
        <td><code>.dropdown-inverse</code></td>
        <td><i class="glyphicon glyphicon-ok text-muted"></i></td>
        <td>Inverse color variant of the dropdown menu.</td>
      </tr>

    </tbody>
  </table>
</div>