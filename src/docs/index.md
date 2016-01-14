---
layout: default
title: Dropmenu for Bootstrap
name: Dropmenu
description: Dropmenu is a set of extensions, which enhances Bootstrap dropdown component, your fellow companion when creating a web application. These extensions add more structure and usability features.

---

### Dropmenu Structure

Basic Bootstrap dropdown allows you tu use only one `.dropdown-menu` class applied to an unordered list. Dropmenu adds `.dropdown-container`, which serves as a wrapper for more elements. You can use toolbar (`.dropdown-toolbar`),footer (`.dropdown-footer`) and even more `ul.dropdown-menu` elements. Basically, all you've ever needed. 

<div class="sw-example" id="dropdown-structure">
  <div class="btn-group dropdown sw-open" style="margin-right:20px">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      <i class="glyphicon glyphicon-user"></i>
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
        <li><a href="#">Log out</a></li>
      </ul>

      <div class="dropdown-footer">
        <a href="#"><i class="glyphicon glyphicon-cog"></i> Account Settings</a>
      </div><!-- /dropdown-footer -->

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->
</div>

~~~html
<div class="btn-group dropdown">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <i class="glyphicon glyphicon-user"></i>
    <span class="caret"></span>
  </button>

  <div class="dropdown-container">

    <div class="dropdown-toolbar">
      Signed in as<br>
      <strong>Martin Staněk</strong>
    </div><!-- /dropdown-toolbar -->

    <ul class="dropdown-menu">
      <li><a href="#">Your profile</a></li>
      <li><a href="#">Your stars</a></li>
      <li><a href="#">Explore</a></li>
      <li><a href="#">Integrations</a></li>
      <li><a href="#">Help</a></li>
      <li><a href="#">Log out</a></li>
    </ul>

    <div class="dropdown-footer">
      <i class="glyphicon glyphicon-cog"></i> Settings
    </div><!-- /dropdown-footer -->

  </div><!-- /dropdown-container -->
</div><!-- /dropdown -->
~~~

### Scrolling 

Customize height of the menu by setting `@dropmenu-max-height` variable. If maximum height is set, dropdown menu becomes scrollable. Change the variable to fit your application.

<div class="sw-example" id="">
  <div class="btn-group dropdown sw-open" style="margin-right:20px">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      Scrollable menu
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

      <div class="dropdown-toolbar">
        <strong>List of states (47)</strong>
      </div><!-- /dropdown-toolbar -->

      <div class="dropdown-divider"></div>

      <ul class="dropdown-menu">
        <li><a href="#">Alabama </a></li>
        <li><a href="#">Alaska </a></li>
        <li><a href="#">Arizona </a></li>
        <li><a href="#">Arkansas </a></li>
        <li><a href="#">California </a></li>
        <li><a href="#">Colorado </a></li>
        <li><a href="#">Connecticut </a></li>
        <li><a href="#">Delaware </a></li>
        <li><a href="#">Florida </a></li>
        <li><a href="#">Georgia </a></li>
        <li><a href="#">Hawaii </a></li>
        <li><a href="#">Idaho </a></li>
        <li><a href="#">Illinois Indiana </a></li>
        <li><a href="#">Iowa </a></li>
        <li><a href="#">Kansas </a></li>
        <li><a href="#">Kentucky </a></li>
        <li><a href="#">Louisiana </a></li>
        <li><a href="#">Maine </a></li>
        <li><a href="#">Maryland </a></li>
        <li><a href="#">Massachusetts </a></li>
        <li><a href="#">Michigan </a></li>
        <li><a href="#">Minnesota </a></li>
        <li><a href="#">Mississippi </a></li>
        <li><a href="#">Missouri </a></li>
        <li><a href="#">Montana Nebraska </a></li>
        <li><a href="#">Nevada </a></li>
        <li><a href="#">New Hampshire </a></li>
        <li><a href="#">New Jersey </a></li>
        <li><a href="#">New Mexico </a></li>
        <li><a href="#">New York </a></li>
        <li><a href="#">North Carolina </a></li>
        <li><a href="#">North Dakota </a></li>
        <li><a href="#">Ohio </a></li>
        <li><a href="#">Oklahoma </a></li>
        <li><a href="#">Oregon </a></li>
        <li><a href="#">Pennsylvania Rhode Island </a></li>
        <li><a href="#">South Carolina </a></li>
        <li><a href="#">South Dakota </a></li>
        <li><a href="#">Tennessee </a></li>
        <li><a href="#">Texas </a></li>
        <li><a href="#">Utah </a></li>
        <li><a href="#">Vermont </a></li>
        <li><a href="#">Virginia </a></li>
        <li><a href="#">Washington </a></li>
        <li><a href="#">West Virginia </a></li>
        <li><a href="#">Wisconsin </a></li>
        <li><a href="#">Wyoming</a></li>
      </ul>

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->

</div>

### Truncated Items 

Not only height, but also width of the menu can be limited. Set `@dropmenu-max-width` to desired value and overflowing menu items will be truncated. You can also set `@dropmenu-min-width` to get rid of very narrow menus.

<div class="sw-example" style="overflow:auto">
  <div class="btn-group dropdown sw-open" style="margin-right:20px">
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
      News
      <span class="caret"></span>
    </button>

    <div class="dropdown-container">

      <ul class="dropdown-menu">
        <li><a href="#">New item</a></li>
        <li><a href="#">Search...</a></li>
      </ul>

      <ul class="dropdown-menu">
        <li class="dropdown-header">Recently added news (47)</li>
        <li><a href="#">Li-fi 100 times faster than wi-fi'</a></li>
        <li><a href="#">Shrinking to Zero: The Raspberry Pi gets smaller</a></li>
        <li><a href="#">Pirate makes film to avoid being sued</a></li>
        <li><a href="#">The truth about Facebook quizzes</a></li>
        <li><a href="#">Cyber-thieves 'target Black Friday'</a></li>
      </ul>

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->
</div>


### Keyboard Shortcuts

Keyboard shortcuts can really speed up your daily work with any web application. Libraries like <a href="https://craig.is/killing/mice">Mousetrap</a> simplify implementation of event handling. Use dropmenu to expose shortcuts in dropdown menus to make them easily remembered.  

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

~~~html
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
~~~

### Dropdown Positioning

Twitter Bootstrap allows you to change position of the dropdown menu, however,for top left or top right position, you need to add `.dropup` class, which is not very convenient. Dropmenu provides all uitility classes to force position of your dropdown menu. Just add appropriate class to the dropdown container:

<div class="sw-example" id="dropdown-positioning" style="text-align:center">

<div class="btn-group dropdown" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Top right
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-topright">
    <ul class="dropdown-menu">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
    </ul>
  </div>
</div>

<div class="btn-group dropdown" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Top left
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-topleft">
    <ul class="dropdown-menu">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
    </ul>
  </div>
</div>

<br>

<div class="btn-group dropdown" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Bottom Right
    <span class="caret"></span>
  </button>
  
  <div class="dropdown-container dropdown-position-bottomright">
    <ul class="dropdown-menu">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
    </ul>
  </div>
</div>


<div class="btn-group dropdown" style="margin: 20px;">
  <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    Bottom Left
    <span class="caret"></span>
  </button>

  <div class="dropdown-container">
    <ul class="dropdown-menu">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
    </ul>
  </div>
</div>
</div>

~~~html
<!-- Top right: Aligns with the top right corner of the button. -->
<div class="dropdown-container dropdown-position-topright"></div>

<!-- Top left: Aligns with the top left corner of the button. -->
<div class="dropdown-container dropdown-position-topleft"></div>

<!-- Bottom left: Aligns with the bottom left corner of the button. -->
<div class="dropdown-container dropdown-position-bottomleft"></div>

<!-- Bottom right: Aligns with the bottom right corner of the button. -->
<div class="dropdown-container dropdown-position-bottomright"></div>
~~~

### Inversed Theme

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
        <li class="active"><a href="#">Explore</a></li>
        <li><a href="#">Integrations</a></li>
        <li class="disabled"><a href="#">Help</a></li>
        <li class="divider"></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Log out</a></li>
      </ul>

    </div><!-- /dropdown-container -->
  </div><!-- /dropdown -->
</div>

~~~html
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
~~~

## Dropmenu Overview

### <span class="text-muted">Module: </span>Dropmenu Structure

This table gives you a quick overview of elements and variables.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 200px">Name</th>
       <th style="width: 200px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Container</strong></td>
        <td><code>.dropdown-container</code></td>
        <td>Abstracted wrapper for dropdown menu.</td>
      </tr>

      <tr>
        <td><strong>Toolbar</strong></td>
        <td><code>.dropdown-toolbar</code></td>
        <td>Fixed header can hold text, specific actions, filters and even a search field.</td>
      </tr>

      <tr>
        <td><strong>Menu</strong></td>
        <td><code>.dropdown-menu</code></td>
        <td>
          <p>Dropmenu adds more variables to play with. You can limit dimensions, make it scrollable or truncate text in list items.</p>

          <strong>Variables:</strong>
          <ul>
            <li><code>@dropdown-menu-max-height: 330px;</code><br><span class="text-muted">Limits height of the menu, so it can be scrollable</span></li>
            <li><code>@dropdown-menu-min-width: 150px;</code><br><span class="text-muted">Minimal width prevents very narrow dropdowns</span></li>
            <li><code>@dropdown-menu-max-width: 330px;</code><br><span class="text-muted">Maximal width prevents very wide dropdowns</span></li>
            <li><code>@dropdown-menu-truncate: true</code><br><span class="text-muted">If true, menu items are truncated when wider than '@dropdown-menu-max-width'</span></li>
          </ul>
        </td>
      </tr>

      <tr>
        <td><strong>Footer</strong></td>
        <td><code>.dropdown-footer</code></td>
        <td>Stays fixed to the bottom of the Dropmenu, useful for context information or links.</td>
      </tr>

    </tbody>
  </table>
</div>

### <span class="text-muted">Module: </span>Dropmenu Item

This table gives you a quick overview of elements and variables.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 150px">Name</th>
       <th style="width: 250px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Item</strong></td>
        <td><code>.dropdown-item</code></td>
        <td>Apply this class to &lt;li> element of the dropdown menu.</td>
      </tr>

      <tr>
        <td><strong>Item label</strong></td>
        <td><code>.dropdown-item-label</code></td>
        <td>Wraps text of the item.</td>
      </tr>

      <tr>
        <td><strong>Item content</strong></td>
        <td><code>.dropdown-item-content</code></td>
        <td>Additional content of the list item, f.e. keyboard shortcuts.</td>
      </tr>

    </tbody>
  </table>
</div>

### <span class="text-muted">Module: </span>Dropmenu Inverse

This table gives you a quick overview of elements and variables.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 150px">Name</th>
       <th style="width: 250px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Inverse modifier</strong> <span class="text-muted">(applies to .dropdown)</span></td>
        <td><code>.dropdown-inverse</code></td>
        <td>
          <p>Inverse color variant of the dropdown menu.</p>

          <strong>Variables:</strong>
          <ul>
            <li>Dropmenu provides set of variables with namespace <code>@dropdown-inverse-</code> to change the theme of the menu. For more information, see <em>dropdown-variables.less</em></li>
            </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>

### <span class="text-muted">Module: </span>Dropmenu Positioning

This table gives you a quick overview of positioning utility classes.

<div class="table-responsive sw-table">
  <table class="table table-bordered">
    <thead>
     <tr>
       <th style="width: 150px">Name</th>
       <th style="width: 250px">Class</th>
       <th>Usage</th>
     </tr>
    </thead>
    <tbody>

      <tr>
        <td><strong>Position Top Right</strong></td>
        <td><code>.dropdown-position-topright</code></td>
        <td>Aligns with the top right corner of the trigger button.</td>
      </tr>

      <tr>
        <td><strong>Position Top Left</strong></td>
        <td><code>.dropdown-position-topleft</code></td>
        <td>Aligns with the top left corner of the trigger button.</td>
      </tr>

      <tr>
        <td><strong>Position Bottom Left</strong></td>
        <td><code>.dropdown-position-bottomleft</code></td>
        <td>Aligns with the bottom left corner of the trigger button.</td>
      </tr>

       <tr>
        <td><strong>Position Bottom Right</strong></td>
        <td><code>.dropdown-position-bottomright</code></td>
        <td>Aligns with the bottom right corner of the trigger button.</td>
      </tr>
   
    </tbody>
  </table>
</div>