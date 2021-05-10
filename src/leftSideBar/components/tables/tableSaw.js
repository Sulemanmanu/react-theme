import React, { Component } from 'react'
import RightSide from '../../../common/home/rightSide'
import Footer from '../../../common/home/footer'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'

export default class Tablesaw extends Component {
  render() {
    return (
      <div>
<div id="wrapper">
 
  <Topbar/>
  <Sidebar/>
  
        <div className="content-page">
          <div className="content">

            {/* <!-- Start Content--> */}
                    <div className="container-fluid">

              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Stack Table</b></h4>
                    <p className="text-muted font-13">
                      The Stack Table stacks the table headers to a two column layout with headers on the left. Resize your viewport to across the 40em (640px) breakpoint to see the change.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="stack">
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>



              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Sortable Table</b></h4>
                    <p className="text-muted font-13">
                      Default appearance (with optional sortable-switch)
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-sortable data-tablesaw-sortable-switch>
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Swipe Table</b></h4>
                    <p className="text-muted font-13">
                      Your awesome text goes here.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="swipe">
                      <thead>
                        <tr>
                          <th className="title" scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Swipe Table with Mini Map</b></h4>
                    <p className="text-muted font-13">
                      Your awesome text goes here.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="swipe" data-tablesaw-minimap>
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Column Toggle Table</b></h4>
                    <p className="text-muted font-13">
                      The Column Toggle Table allows the user to select which columns they want to be visible.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="columntoggle">
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Column Toggle Table with Mini Map</b></h4>
                    <p className="text-muted font-13">
                      The Column Toggle Table allows the user to select which columns they want to be visible.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="columntoggle" data-tablesaw-minimap>
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Mode Switch Table</b></h4>
                    <p className="text-muted font-13">
                      The mode switcher allows the user to select which tablesaw view to use.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="swipe" data-tablesaw-mode-switch data-tablesaw-minimap>
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


              <div className="row">
                <div className="col-sm-12">
                  <div className="card-box">

                    <h4 className="mt-0 header-title"><b>Bare Table</b></h4>
                    <p className="text-muted font-13">
                      Your awesome text goes here.
                                    </p>

                    <table className="tablesaw table mb-0" data-tablesaw-mode="swipe" data-tablesaw-sortable data-tablesaw-sortable-switch data-tablesaw-minimap data-tablesaw-mode-switch>
                      <thead>
                        <tr>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="persist">Movie Title</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-sortable-default-col data-tablesaw-priority="3">Rank</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="2">Year</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="1">Rating</th>
                          <th scope="col" data-tablesaw-sortable-col data-tablesaw-priority="4">Gross</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Avatar</td>
                          <td>1</td>
                          <td>2009</td>
                          <td>83%</td>
                          <td>$2.7B</td>
                        </tr>
                        <tr>
                          <td>Titanic</td>
                          <td>2</td>
                          <td>1997</td>
                          <td>88%</td>
                          <td>$2.1B</td>
                        </tr>
                        <tr>
                          <td>The Avengers</td>
                          <td>3</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.5B</td>
                        </tr>
                        <tr>
                          <td>Harry Potter and the Deathly Hallows—Part 2</td>
                          <td>4</td>
                          <td>2011</td>
                          <td>96%</td>
                          <td>$1.3B</td>
                        </tr>
                        <tr>
                          <td>Frozen</td>
                          <td>5</td>
                          <td>2013</td>
                          <td>89%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Iron Man 3</td>
                          <td>6</td>
                          <td>2013</td>
                          <td>78%</td>
                          <td>$1.2B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Dark of the Moon</td>
                          <td>7</td>
                          <td>2011</td>
                          <td>36%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>The Lord of the Rings: The Return of the King</td>
                          <td>8</td>
                          <td>2003</td>
                          <td>95%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Skyfall</td>
                          <td>9</td>
                          <td>2012</td>
                          <td>92%</td>
                          <td>$1.1B</td>
                        </tr>
                        <tr>
                          <td>Transformers: Age of Extinction</td>
                          <td>10</td>
                          <td>2014</td>
                          <td>18%</td>
                          <td>$1.0B</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>


            </div>
            </div>

          </div>
<Footer/>
        </div>
        <RightSide/>
        </div>

        )
    }
}
