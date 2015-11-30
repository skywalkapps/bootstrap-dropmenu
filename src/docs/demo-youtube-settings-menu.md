---
layout: demo
title: Bootstrap Complex Dropmenu Example
name: Dropmenu
description: Use Dropmenu to create better navigation.

---

<div class="sw-example">

  <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Nationality</th>
          <th>Age</th>
          <th class="col-actions">
            <div class="btn-group dropdown"> 
            <!-- dropdown-inverse -->
              <a href="#" class="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i class="glyphicon glyphicon-cog"></i><span class="caret"></span>
              </a>

              <div class="dropdown-container dropdown-position-bottomright dropdown-container-slidemorph">
                <ul class="dropdown-menu">

                  <li class="dropdown-submenu">
                    <a data-toggle="slideMorph" href="#" class="dropmenu-item">
                      <span class="dropmenu-item-label">Displayed items</span>
                      <span class="dropmenu-item-content">5</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu--selectable">
                      <li><a href="#">5</a></li>
                      <li class="selected"><a href="#">10</a></li>
                      <li><a href="#">20</a></li>
                      <li><a href="#">50</a></li>
                    </ul>
                  </li>

                  <li class="dropdown-submenu">
                    <a data-toggle="slideMorph" href="#" class="dropmenu-item">
                      <span class="dropmenu-item-label">Columns</span>
                      <span class="dropmenu-item-content">&hellip;</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu--selectable">
                      <li class="selected"><a href="#">Name</a></li>
                      <li class="selected"><a href="#">Occupation</a></li>
                      <li class="selected"><a href="#">Nationality</a></li>
                      <li class="selected"><a href="#">Age</a></li>
                    </ul>
                  </li>

                  <li class="dropdown-submenu">
                    <a data-toggle="slideMorph" href="#" class="dropmenu-item">
                      <span class="dropmenu-item-label">Default order</span>
                      <span class="dropmenu-item-content">Name</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu--selectable">
                      <li class="selected"><a href="#">Name</a></li>
                      <li><a href="#">Occupation</a></li>
                      <li><a href="#">Nationality</a></li>
                      <li><a href="#">Age</a></li>
                    </ul>
                  </li>

                  <li class="dropdown-submenu">
                    <a data-toggle="slideMorph" href="#" class="dropmenu-item">
                      <span class="dropmenu-item-label">View</span>
                      <span class="dropmenu-item-content">Normal</span>
                    </a>

                    <ul class="dropdown-menu dropdown-menu--selectable">
                      <li><a href="#">Condensed</a></li>
                      <li class="selected"><a href="#">Normal</a></li>
                      <li><a href="#">Large</a></li>
                    </ul>
                  </li>

                  <li>
                    <a data-toggle="slideMorph" href="#" class="dropmenu-item">
                      <span class="dropmenu-item-label">Table settings&hellip;</span>
                    </a>
                  </li>
                </ul>

              </div><!-- /dropdown-container -->

            </div><!-- /dropdown -->
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Martin Freeman</td>
          <td>Actor</td>
          <td>United Kingdom</td>
          <td>32</td>
          <td class="col-actions">
          </td>
        </tr>

        <tr>
          <td>Dave Lister</td>
          <td>Technician</td>
          <td>United Kingdom</td>
          <td>26</td>
          <td class="col-actions">
          </td>
        </tr>

        <tr>
          <td>Martin Staněk</td>
          <td>Webdesigner</td>
          <td>Czech Republic</td>
          <td>29</td>
          <td class="col-actions">
          </td>
        </tr>

        <tr>
          <td>Nikola Tesla</td>
          <td>Genius</td>
          <td>Austrian Empire</td>
          <td>87</td>
          <td class="col-actions">
          </td>
        </tr>

        <tr>
          <td>James Bond</td>
          <td>Ornithologist</td>
          <td>American</td>
          <td>89</td>
          <td class="col-actions">
          </td>
        </tr>

        <tr>
          <td>Richard Feynman</td>
          <td>Theoretical physics</td>
          <td>American</td>
          <td>69</td>
          <td class="col-actions">
          </td>
        </tr>
      </tbody>
    </table>

</div>