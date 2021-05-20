import React, { Component } from 'react'
import Topbar from '../../../common/home/topBar'
import Sidebar from '../../../common/home/sidebar'
import Footer from '../../../common/home/footer'
import RightSide from '../../../common/home/rightSide'


export default  class Advance extends Component {
 render() {
  return (
   <div>
    <div id="wrapper">
     <Topbar/>
     <Sidebar/>
    <div  className="content-page">
     <div  className="content">

      {/* <!-- Start Content--> */}
                    <div  className="container-fluid">

       <div  className="row">
        <div  className="col-lg-6">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-4">Tags Input</h4>

          <h5>Input Tags</h5>
          <p  className="text-muted font-13">
           Just add <code>data-role="tagsinput"</code> to your input field to automatically change it to a tags input field.
                                    </p>
          <div  className="tags-default">
           <input type="text" defaultValue="Amsterdam,Washington,Sydney" data-role="tagsinput" placeholder="add tags" />
          </div>

          <h5  className="mt-4">True multi value</h5>
          <p  className="text-muted font-13">
           Use a <code>&lt;select multiple /&gt;</code> as your input element for a tags input, to gain true multivalue support.
                                        Instead of a comma separated string, the values will be set in an array. Existing <code>&lt;option /&gt;</code>
                                        elements will automatically be set as tags. This makes it also possible to create tags containing a comma.
                                    </p>
          <div  className="mb-0">
           <select multiple data-role="tagsinput">
            <option defaultValue="Amsterdam">Amsterdam</option>
            <option defaultValue="Washington">Washington</option>
            <option defaultValue="Sydney">Sydney</option>
           </select>
          </div>
         </div>
        </div>

        <div  className="col-lg-6">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-4">Switchery</h4>

          <h5>Basic</h5>
          <p  className="text-muted font-13">
           Add an attribute <code>
            data-plugin="switchery" data-color="@colors"</code>
                                        to your input element and it will be converted into switch.
                                    </p>

          <div  className="switchery-demo">
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#00b19d" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#ffaa00" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#3bafda" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#3DDCF7" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#7266ba" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#f76397" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#4c5667" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#98a6ad" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#ef5350" />
          </div>

          <h5  className="mt-4">Sizes & Secondary color</h5>
          <p  className="text-muted font-13">
           Add an attribute <code>
            data-size="small",data-size="large"</code>,<code>
            data-color="@color" data-secondary-color="@color"</code>
                                        to your input element and it will be converted into switch.
                                    </p>

          <div  className="">
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#00b19d" data-size="small" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#3DDCF7" />
           <input type="checkbox" defaultChecked data-plugin="switchery" data-color="#4c5667" data-size="large" />
           <input type="checkbox" data-plugin="switchery" data-color="#1AB394" data-secondary-color="#ED5565" />
           <input type="checkbox" data-plugin="switchery" data-color="#fb6d9d" data-secondary-color="#7266ba" />
          </div>

         </div>
        </div>
       </div>


       <div  className="row">
        <div  className="col-xl-6">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-4">Multiple Select</h4>

          <h5>Default</h5>
          <p  className="text-muted font-13">
           Use a <code>
            &lt;select multiple /&gt;</code>
                                        as your input element for a tags input, to gain true multivalue support.
                                    </p>

          <select multiple="multiple"  className="multi-select" id="my_multi_select1" name="my_multi_select1[]" data-plugin="multiselect">
           <option>Dallas Cowboys</option>
           <option>New York Giants</option>
           <option selected>Philadelphia Eagles</option>
           <option selected>Washington Redskins</option>
           <option>Chicago Bears</option>
           <option>Detroit Lions</option>
           <option>Green Bay Packers</option>
           <option>Minnesota Vikings</option>
           <option selected>Atlanta Falcons</option>
           <option>Carolina Panthers</option>
           <option>New Orleans Saints</option>
           <option>Tampa Bay Buccaneers</option>
           <option>Arizona Cardinals</option>
           <option>St. Louis Rams</option>
           <option>San Francisco 49ers</option>
           <option>Seattle Seahawks</option>
          </select>

          <h5  className="mt-3">Grouped Options</h5>
          <p  className="text-muted font-13">
           Use a <code>
            &lt;select multiple /&gt;</code>
                                        as your input element for a tags input, to gain true multivalue support.
                                    </p>

          <select multiple="multiple"  className="multi-select" id="my_multi_select2" name="my_multi_select2[]" data-plugin="multiselect" data-selectable-optgroup="true">
           <optgroup label="NFC EAST">
            <option>Dallas Cowboys</option>
            <option>New York Giants</option>
            <option>Philadelphia Eagles</option>
            <option>Washington Redskins</option>
           </optgroup>
           <optgroup label="NFC NORTH">
            <option>Chicago Bears</option>
            <option>Detroit Lions</option>
            <option>Green Bay Packers</option>
            <option>Minnesota Vikings</option>
           </optgroup>
           <optgroup label="NFC SOUTH">
            <option>Atlanta Falcons</option>
            <option>Carolina Panthers</option>
            <option>New Orleans Saints</option>
            <option>Tampa Bay Buccaneers</option>
           </optgroup>
           <optgroup label="NFC WEST">
            <option>Arizona Cardinals</option>
            <option>St. Louis Rams</option>
            <option>San Francisco 49ers</option>
            <option>Seattle Seahawks</option>
           </optgroup>
          </select>

          <h5  className="mt-3">Searchable</h5>
          <p  className="text-muted font-13">
           Use a <code>
            &lt;select multiple /&gt;</code>
                                        as your input element for a tags input, to gain true multivalue support.
                                    </p>

          <select name="country"  className="multi-select" multiple="" id="my_multi_select3" >
           <option defaultValue="AF">Afghanistan</option>
           <option defaultValue="AL">Albania</option>
           <option defaultValue="DZ">Algeria</option>
           <option defaultValue="AS">American Samoa</option>
           <option defaultValue="AD">Andorra</option>
           <option defaultValue="AO">Angola</option>
           <option defaultValue="AI">Anguilla</option>
           <option defaultValue="AQ">Antarctica</option>
           <option defaultValue="AR">Argentina</option>
           <option defaultValue="AM">Armenia</option>
           <option defaultValue="AW">Aruba</option>
           <option defaultValue="AU">Australia</option>
           <option defaultValue="AT">Austria</option>
           <option defaultValue="AZ">Azerbaijan</option>
           <option defaultValue="BS">Bahamas</option>
           <option defaultValue="BH">Bahrain</option>
           <option defaultValue="BD">Bangladesh</option>
           <option defaultValue="BB">Barbados</option>
           <option defaultValue="BY">Belarus</option>
           <option defaultValue="BE">Belgium</option>
           <option defaultValue="BZ">Belize</option>
           <option defaultValue="BJ">Benin</option>
           <option defaultValue="BM">Bermuda</option>
           <option defaultValue="BT">Bhutan</option>
           <option defaultValue="BO">Bolivia</option>
           <option defaultValue="BA">Bosnia and Herzegowina</option>
           <option defaultValue="BW">Botswana</option>
           <option defaultValue="BV">Bouvet Island</option>
           <option defaultValue="BR">Brazil</option>
           <option defaultValue="IO">British Indian Ocean Territory</option>
           <option defaultValue="BN">Brunei Darussalam</option>
           <option defaultValue="BG">Bulgaria</option>
           <option defaultValue="BF">Burkina Faso</option>
           <option defaultValue="BI">Burundi</option>
           <option defaultValue="KH">Cambodia</option>
           <option defaultValue="CM">Cameroon</option>
           <option defaultValue="CA">Canada</option>
           <option defaultValue="CV">Cape Verde</option>
           <option defaultValue="KY">Cayman Islands</option>
           <option defaultValue="CF">Central African Republic</option>
           <option defaultValue="TD">Chad</option>
           <option defaultValue="CL">Chile</option>
           <option defaultValue="CN">China</option>
           <option defaultValue="CX">Christmas Island</option>
           <option defaultValue="CC">Cocos (Keeling) Islands</option>
           <option defaultValue="CO">Colombia</option>
           <option defaultValue="KM">Comoros</option>
           <option defaultValue="CG">Congo</option>
           <option defaultValue="CD">Congo, the Democratic Republic of the</option>
           <option defaultValue="CK">Cook Islands</option>
           <option defaultValue="CR">Costa Rica</option>
           <option defaultValue="CI">Cote d'Ivoire</option>
           <option defaultValue="HR">Croatia (Hrvatska)</option>
           <option defaultValue="CU">Cuba</option>
           <option defaultValue="CY">Cyprus</option>
           <option defaultValue="CZ">Czech Republic</option>
           <option defaultValue="DK">Denmark</option>
           <option defaultValue="DJ">Djibouti</option>
           <option defaultValue="DM">Dominica</option>
           <option defaultValue="DO">Dominican Republic</option>
           <option defaultValue="EC">Ecuador</option>
           <option defaultValue="EG">Egypt</option>
           <option defaultValue="SV">El Salvador</option>
           <option defaultValue="GQ">Equatorial Guinea</option>
           <option defaultValue="ER">Eritrea</option>
           <option defaultValue="EE">Estonia</option>
           <option defaultValue="ET">Ethiopia</option>
           <option defaultValue="FK">Falkland Islands (Malvinas)</option>
           <option defaultValue="FO">Faroe Islands</option>
           <option defaultValue="FJ">Fiji</option>
           <option defaultValue="FI">Finland</option>
           <option defaultValue="FR">France</option>
           <option defaultValue="GF">French Guiana</option>
           <option defaultValue="PF">French Polynesia</option>
           <option defaultValue="TF">French Southern Territories</option>
           <option defaultValue="GA">Gabon</option>
           <option defaultValue="GM">Gambia</option>
           <option defaultValue="GE">Georgia</option>
           <option defaultValue="DE">Germany</option>
           <option defaultValue="GH">Ghana</option>
           <option defaultValue="GI">Gibraltar</option>
           <option defaultValue="GR">Greece</option>
           <option defaultValue="GL">Greenland</option>
           <option defaultValue="GD">Grenada</option>
           <option defaultValue="GP">Guadeloupe</option>
           <option defaultValue="GU">Guam</option>
           <option defaultValue="GT">Guatemala</option>
           <option defaultValue="GN">Guinea</option>
           <option defaultValue="GW">Guinea-Bissau</option>
           <option defaultValue="GY">Guyana</option>
           <option defaultValue="HT">Haiti</option>
           <option defaultValue="HM">Heard and Mc Donald Islands</option>
           <option defaultValue="VA">Holy See (Vatican City State)</option>
           <option defaultValue="HN">Honduras</option>
           <option defaultValue="HK">Hong Kong</option>
           <option defaultValue="HU">Hungary</option>
           <option defaultValue="IS">Iceland</option>
           <option defaultValue="IN">India</option>
           <option defaultValue="ID">Indonesia</option>
           <option defaultValue="IR">Iran (Islamic Republic of)</option>
           <option defaultValue="IQ">Iraq</option>
           <option defaultValue="IE">Ireland</option>
           <option defaultValue="IL">Israel</option>
           <option defaultValue="IT">Italy</option>
           <option defaultValue="JM">Jamaica</option>
           <option defaultValue="JP">Japan</option>
           <option defaultValue="JO">Jordan</option>
           <option defaultValue="KZ">Kazakhstan</option>
           <option defaultValue="KE">Kenya</option>
           <option defaultValue="KI">Kiribati</option>
           <option defaultValue="KP">Korea, Democratic People's Republic of</option>
           <option defaultValue="KR">Korea, Republic of</option>
           <option defaultValue="KW">Kuwait</option>
           <option defaultValue="KG">Kyrgyzstan</option>
           <option defaultValue="LA">Lao People's Democratic Republic</option>
           <option defaultValue="LV">Latvia</option>
           <option defaultValue="LB">Lebanon</option>
           <option defaultValue="LS">Lesotho</option>
           <option defaultValue="LR">Liberia</option>
           <option defaultValue="LY">Libyan Arab Jamahiriya</option>
           <option defaultValue="LI">Liechtenstein</option>
           <option defaultValue="LT">Lithuania</option>
           <option defaultValue="LU">Luxembourg</option>
           <option defaultValue="MO">Macau</option>
           <option defaultValue="MK">Macedonia, The Former Yugoslav Republic of</option>
           <option defaultValue="MG">Madagascar</option>
           <option defaultValue="MW">Malawi</option>
           <option defaultValue="MY">Malaysia</option>
           <option defaultValue="MV">Maldives</option>
           <option defaultValue="ML">Mali</option>
           <option defaultValue="MT">Malta</option>
           <option defaultValue="MH">Marshall Islands</option>
           <option defaultValue="MQ">Martinique</option>
           <option defaultValue="MR">Mauritania</option>
           <option defaultValue="MU">Mauritius</option>
           <option defaultValue="YT">Mayotte</option>
           <option defaultValue="MX">Mexico</option>
           <option defaultValue="FM">Micronesia, Federated States of</option>
           <option defaultValue="MD">Moldova, Republic of</option>
           <option defaultValue="MC">Monaco</option>
           <option defaultValue="MN">Mongolia</option>
           <option defaultValue="MS">Montserrat</option>
           <option defaultValue="MA">Morocco</option>
           <option defaultValue="MZ">Mozambique</option>
           <option defaultValue="MM">Myanmar</option>
           <option defaultValue="NA">Namibia</option>
           <option defaultValue="NR">Nauru</option>
           <option defaultValue="NP">Nepal</option>
           <option defaultValue="NL">Netherlands</option>
           <option defaultValue="AN">Netherlands Antilles</option>
           <option defaultValue="NC">New Caledonia</option>
           <option defaultValue="NZ">New Zealand</option>
           <option defaultValue="NI">Nicaragua</option>
           <option defaultValue="NE">Niger</option>
           <option defaultValue="NG">Nigeria</option>
           <option defaultValue="NU">Niue</option>
           <option defaultValue="NF">Norfolk Island</option>
           <option defaultValue="MP">Northern Mariana Islands</option>
           <option defaultValue="NO">Norway</option>
           <option defaultValue="OM">Oman</option>
           <option defaultValue="PK">Pakistan</option>
           <option defaultValue="PW">Palau</option>
           <option defaultValue="PA">Panama</option>
           <option defaultValue="PG">Papua New Guinea</option>
           <option defaultValue="PY">Paraguay</option>
           <option defaultValue="PE">Peru</option>
           <option defaultValue="PH">Philippines</option>
           <option defaultValue="PN">Pitcairn</option>
           <option defaultValue="PL">Poland</option>
           <option defaultValue="PT">Portugal</option>
           <option defaultValue="PR">Puerto Rico</option>
           <option defaultValue="QA">Qatar</option>
           <option defaultValue="RE">Reunion</option>
           <option defaultValue="RO">Romania</option>
           <option defaultValue="RU">Russian Federation</option>
           <option defaultValue="RW">Rwanda</option>
           <option defaultValue="KN">Saint Kitts and Nevis</option>
           <option defaultValue="LC">Saint LUCIA</option>
           <option defaultValue="VC">Saint Vincent and the Grenadines</option>
           <option defaultValue="WS">Samoa</option>
           <option defaultValue="SM">San Marino</option>
           <option defaultValue="ST">Sao Tome and Principe</option>
           <option defaultValue="SA">Saudi Arabia</option>
           <option defaultValue="SN">Senegal</option>
           <option defaultValue="SC">Seychelles</option>
           <option defaultValue="SL">Sierra Leone</option>
           <option defaultValue="SG">Singapore</option>
           <option defaultValue="SK">Slovakia (Slovak Republic)</option>
           <option defaultValue="SI">Slovenia</option>
           <option defaultValue="SB">Solomon Islands</option>
           <option defaultValue="SO">Somalia</option>
           <option defaultValue="ZA">South Africa</option>
           <option defaultValue="GS">South Georgia and the South Sandwich Islands</option>
           <option defaultValue="ES">Spain</option>
           <option defaultValue="LK">Sri Lanka</option>
           <option defaultValue="SH">St. Helena</option>
           <option defaultValue="PM">St. Pierre and Miquelon</option>
           <option defaultValue="SD">Sudan</option>
           <option defaultValue="SR">Suriname</option>
           <option defaultValue="SJ">Svalbard and Jan Mayen Islands</option>
           <option defaultValue="SZ">Swaziland</option>
           <option defaultValue="SE">Sweden</option>
           <option defaultValue="CH">Switzerland</option>
           <option defaultValue="SY">Syrian Arab Republic</option>
           <option defaultValue="TW">Taiwan, Province of China</option>
           <option defaultValue="TJ">Tajikistan</option>
           <option defaultValue="TZ">Tanzania, United Republic of</option>
           <option defaultValue="TH">Thailand</option>
           <option defaultValue="TG">Togo</option>
           <option defaultValue="TK">Tokelau</option>
           <option defaultValue="TO">Tonga</option>
           <option defaultValue="TT">Trinidad and Tobago</option>
           <option defaultValue="TN">Tunisia</option>
           <option defaultValue="TR">Turkey</option>
           <option defaultValue="TM">Turkmenistan</option>
           <option defaultValue="TC">Turks and Caicos Islands</option>
           <option defaultValue="TV">Tuvalu</option>
           <option defaultValue="UG">Uganda</option>
           <option defaultValue="UA">Ukraine</option>
           <option defaultValue="AE">United Arab Emirates</option>
           <option defaultValue="GB">United Kingdom</option>
           <option defaultValue="US">United States</option>
           <option defaultValue="UM">United States Minor Outlying Islands</option>
           <option defaultValue="UY">Uruguay</option>
           <option defaultValue="UZ">Uzbekistan</option>
           <option defaultValue="VU">Vanuatu</option>
           <option defaultValue="VE">Venezuela</option>
           <option defaultValue="VN">Viet Nam</option>
           <option defaultValue="VG">Virgin Islands (British)</option>
           <option defaultValue="VI">Virgin Islands (U.S.)</option>
           <option defaultValue="WF">Wallis and Futuna Islands</option>
           <option defaultValue="EH">Western Sahara</option>
           <option defaultValue="YE">Yemen</option>
           <option defaultValue="ZM">Zambia</option>
           <option defaultValue="ZW">Zimbabwe</option>
          </select>
         </div>
        </div>

        <div  className="col-xl-6">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-4">Select2</h4>

          <h5>Single Select</h5>

          <select  className="form-control select2">
           <option>Select</option>
           <optgroup label="Alaskan/Hawaiian Time Zone">
            <option defaultValue="AK">Alaska</option>
            <option defaultValue="HI">Hawaii</option>
           </optgroup>
           <optgroup label="Pacific Time Zone">
            <option defaultValue="CA">California</option>
            <option defaultValue="NV">Nevada</option>
            <option defaultValue="OR">Oregon</option>
            <option defaultValue="WA">Washington</option>
           </optgroup>
           <optgroup label="Mountain Time Zone">
            <option defaultValue="AZ">Arizona</option>
            <option defaultValue="CO">Colorado</option>
            <option defaultValue="ID">Idaho</option>
            <option defaultValue="MT">Montana</option>
            <option defaultValue="NE">Nebraska</option>
            <option defaultValue="NM">New Mexico</option>
            <option defaultValue="ND">North Dakota</option>
            <option defaultValue="UT">Utah</option>
            <option defaultValue="WY">Wyoming</option>
           </optgroup>
           <optgroup label="Central Time Zone">
            <option defaultValue="AL">Alabama</option>
            <option defaultValue="AR">Arkansas</option>
            <option defaultValue="IL">Illinois</option>
            <option defaultValue="IA">Iowa</option>
            <option defaultValue="KS">Kansas</option>
            <option defaultValue="KY">Kentucky</option>
            <option defaultValue="LA">Louisiana</option>
            <option defaultValue="MN">Minnesota</option>
            <option defaultValue="MS">Mississippi</option>
            <option defaultValue="MO">Missouri</option>
            <option defaultValue="OK">Oklahoma</option>
            <option defaultValue="SD">South Dakota</option>
            <option defaultValue="TX">Texas</option>
            <option defaultValue="TN">Tennessee</option>
            <option defaultValue="WI">Wisconsin</option>
           </optgroup>
           <optgroup label="Eastern Time Zone">
            <option defaultValue="CT">Connecticut</option>
            <option defaultValue="DE">Delaware</option>
            <option defaultValue="FL">Florida</option>
            <option defaultValue="GA">Georgia</option>
            <option defaultValue="IN">Indiana</option>
            <option defaultValue="ME">Maine</option>
            <option defaultValue="MD">Maryland</option>
            <option defaultValue="MA">Massachusetts</option>
            <option defaultValue="MI">Michigan</option>
            <option defaultValue="NH">New Hampshire</option>
            <option defaultValue="NJ">New Jersey</option>
            <option defaultValue="NY">New York</option>
            <option defaultValue="NC">North Carolina</option>
            <option defaultValue="OH">Ohio</option>
            <option defaultValue="PA">Pennsylvania</option>
            <option defaultValue="RI">Rhode Island</option>
            <option defaultValue="SC">South Carolina</option>
            <option defaultValue="VT">Vermont</option>
            <option defaultValue="VA">Virginia</option>
            <option defaultValue="WV">West Virginia</option>
           </optgroup>
          </select>

          <h5  className="mt-3">Multiple Select</h5>

          <select  className="select2 select2-multiple" multiple="multiple" multiple data-placeholder="Choose ...">
           <optgroup label="Alaskan/Hawaiian Time Zone">
            <option defaultValue="AK">Alaska</option>
            <option defaultValue="HI">Hawaii</option>
           </optgroup>
           <optgroup label="Pacific Time Zone">
            <option defaultValue="CA">California</option>
            <option defaultValue="NV">Nevada</option>
            <option defaultValue="OR">Oregon</option>
            <option defaultValue="WA">Washington</option>
           </optgroup>
           <optgroup label="Mountain Time Zone">
            <option defaultValue="AZ">Arizona</option>
            <option defaultValue="CO">Colorado</option>
            <option defaultValue="ID">Idaho</option>
            <option defaultValue="MT">Montana</option>
            <option defaultValue="NE">Nebraska</option>
            <option defaultValue="NM">New Mexico</option>
            <option defaultValue="ND">North Dakota</option>
            <option defaultValue="UT">Utah</option>
            <option defaultValue="WY">Wyoming</option>
           </optgroup>
           <optgroup label="Central Time Zone">
            <option defaultValue="AL">Alabama</option>
            <option defaultValue="AR">Arkansas</option>
            <option defaultValue="IL">Illinois</option>
            <option defaultValue="IA">Iowa</option>
            <option defaultValue="KS">Kansas</option>
            <option defaultValue="KY">Kentucky</option>
            <option defaultValue="LA">Louisiana</option>
            <option defaultValue="MN">Minnesota</option>
            <option defaultValue="MS">Mississippi</option>
            <option defaultValue="MO">Missouri</option>
            <option defaultValue="OK">Oklahoma</option>
            <option defaultValue="SD">South Dakota</option>
            <option defaultValue="TX">Texas</option>
            <option defaultValue="TN">Tennessee</option>
            <option defaultValue="WI">Wisconsin</option>
           </optgroup>
           <optgroup label="Eastern Time Zone">
            <option defaultValue="CT">Connecticut</option>
            <option defaultValue="DE">Delaware</option>
            <option defaultValue="FL">Florida</option>
            <option defaultValue="GA">Georgia</option>
            <option defaultValue="IN">Indiana</option>
            <option defaultValue="ME">Maine</option>
            <option defaultValue="MD">Maryland</option>
            <option defaultValue="MA">Massachusetts</option>
            <option defaultValue="MI">Michigan</option>
            <option defaultValue="NH">New Hampshire</option>
            <option defaultValue="NJ">New Jersey</option>
            <option defaultValue="NY">New York</option>
            <option defaultValue="NC">North Carolina</option>
            <option defaultValue="OH">Ohio</option>
            <option defaultValue="PA">Pennsylvania</option>
            <option defaultValue="RI">Rhode Island</option>
            <option defaultValue="SC">South Carolina</option>
            <option defaultValue="VT">Vermont</option>
            <option defaultValue="VA">Virginia</option>
            <option defaultValue="WV">West Virginia</option>
           </optgroup>
          </select>

          <h5  className="mt-3">Limiting the number of selections</h5>

          <select  className="select2-limiting" multiple="multiple">
           <optgroup label="Alaskan/Hawaiian Time Zone">
            <option defaultValue="AK">Alaska</option>
            <option defaultValue="HI">Hawaii</option>
           </optgroup>
           <optgroup label="Pacific Time Zone">
            <option defaultValue="CA">California</option>
            <option defaultValue="NV">Nevada</option>
            <option defaultValue="OR">Oregon</option>
            <option defaultValue="WA">Washington</option>
           </optgroup>
           <optgroup label="Mountain Time Zone">
            <option defaultValue="AZ">Arizona</option>
            <option defaultValue="CO">Colorado</option>
            <option defaultValue="ID">Idaho</option>
            <option defaultValue="MT">Montana</option>
            <option defaultValue="NE">Nebraska</option>
            <option defaultValue="NM">New Mexico</option>
            <option defaultValue="ND">North Dakota</option>
            <option defaultValue="UT">Utah</option>
            <option defaultValue="WY">Wyoming</option>
           </optgroup>
           <optgroup label="Central Time Zone">
            <option defaultValue="AL">Alabama</option>
            <option defaultValue="AR">Arkansas</option>
            <option defaultValue="IL">Illinois</option>
            <option defaultValue="IA">Iowa</option>
            <option defaultValue="KS">Kansas</option>
            <option defaultValue="KY">Kentucky</option>
            <option defaultValue="LA">Louisiana</option>
            <option defaultValue="MN">Minnesota</option>
            <option defaultValue="MS">Mississippi</option>
            <option defaultValue="MO">Missouri</option>
            <option defaultValue="OK">Oklahoma</option>
            <option defaultValue="SD">South Dakota</option>
            <option defaultValue="TX">Texas</option>
            <option defaultValue="TN">Tennessee</option>
            <option defaultValue="WI">Wisconsin</option>
           </optgroup>
           <optgroup label="Eastern Time Zone">
            <option defaultValue="CT">Connecticut</option>
            <option defaultValue="DE">Delaware</option>
            <option defaultValue="FL">Florida</option>
            <option defaultValue="GA">Georgia</option>
            <option defaultValue="IN">Indiana</option>
            <option defaultValue="ME">Maine</option>
            <option defaultValue="MD">Maryland</option>
            <option defaultValue="MA">Massachusetts</option>
            <option defaultValue="MI">Michigan</option>
            <option defaultValue="NH">New Hampshire</option>
            <option defaultValue="NJ">New Jersey</option>
            <option defaultValue="NY">New York</option>
            <option defaultValue="NC">North Carolina</option>
            <option defaultValue="OH">Ohio</option>
            <option defaultValue="PA">Pennsylvania</option>
            <option defaultValue="RI">Rhode Island</option>
            <option defaultValue="SC">South Carolina</option>
            <option defaultValue="VT">Vermont</option>
            <option defaultValue="VA">Virginia</option>
            <option defaultValue="WV">West Virginia</option>
           </optgroup>
          </select>
         </div>

         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Input Masks</h4>

          <div  className="row">
           <div  className="col-md-6">
            <form action="#">
             <div  className="form-group">
              <label>Date</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000" />
              <span  className="font-13 text-muted">e.g "DD/MM/YYYY"</span>
             </div>
             <div  className="form-group">
              <label>Hour</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="00:00:00" />
              <span  className="font-13 text-muted">e.g "HH:MM:SS"</span>
             </div>
             <div  className="form-group">
              <label>Date & Hour</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="00/00/0000 00:00:00" />
              <span  className="font-13 text-muted">e.g "DD/MM/YYYY HH:MM:SS"</span>
             </div>
             <div  className="form-group">
              <label>ZIP Code</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="00000-000" />
              <span  className="font-13 text-muted">e.g "xxxxx-xxx"</span>
             </div>
             <div  className="form-group">
              <label>Crazy Zip Code</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="0-00-00-00" />
              <span  className="font-13 text-muted">e.g "x-xx-xx-xx"</span>
             </div>
             <div  className="form-group">
              <label>Money</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="000.000.000.000.000,00" data-reverse="true" />
              <span  className="font-13 text-muted">e.g "Your money"</span>
             </div>
             <div  className="form-group">
              <label>Money 2</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="#.##0,00" data-reverse="true" />
              <span  className="font-13 text-muted">e.g "#.##0,00"</span>
             </div>

            </form>
           </div>

           <div  className="col-md-6">
            <form action="#">
             <div  className="form-group">
              <label>Telephone</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="0000-0000" />
              <span  className="font-13 text-muted">e.g "xxxx-xxxx"</span>
             </div>
             <div  className="form-group">
              <label>Telephone with Code Area</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="(00) 0000-0000" />
              <span  className="font-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
             </div>
             <div  className="form-group">
              <label>US Telephone</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="(000) 000-0000" />
              <span  className="font-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
             </div>
             <div  className="form-group">
              <label>São Paulo Celphones</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="(00) 00000-0000" />
              <span  className="font-13 text-muted">e.g "(xx) xxxxx-xxxx"</span>
             </div>
             <div  className="form-group">
              <label>CPF</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="000.000.000-00" data-reverse="true" />
              <span  className="font-13 text-muted">e.g "xxx.xxx.xxxx-xx"</span>
             </div>
             <div  className="form-group">
              <label>CNPJ</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="00.000.000/0000-00" data-reverse="true" />
              <span  className="font-13 text-muted">e.g "xx.xxx.xxx/xxxx-xx"</span>
             </div>
             <div  className="form-group">
              <label>IP Address</label>
              <input type="text"  className="form-control" data-toggle="input-mask" data-mask-format="099.099.099.099" data-reverse="true" />
              <span  className="font-13 text-muted">e.g "xxx.xxx.xxx.xxx"</span>
             </div>

            </form>
           </div>
          </div>


         </div>

        </div>
       </div>



       <div  className="row">
        <div  className="col-sm-12">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Bootstrap TouchSpin</h4>

          <div  className="row">
           <div  className="col-md-6">
            <div  className="p-2">
             <form>
              <div  className="form-group">
               <label  className="control-label">Vertical button alignment</label>
               <input  className="vertical-spin" type="text" defaultValue="" name="vertical-spin" />
              </div>
              <div  className="form-group">
               <label  className="control-label">Using data attributes</label>
               <input id="demo0" type="text" defaultValue="55" name="demo0" data-bts-min="0" data-bts-max="100" data-bts-init-val="" data-bts-step="1" data-bts-decimal="0" data-bts-step-interval="100" data-bts-force-step-divisibility="round" data-bts-step-interval-delay="500" data-bts-prefix="" data-bts-postfix="" data-bts-prefix-extra- className="" data-bts-postfix-extra- className="" data-bts-booster="true" data-bts-boostat="10" data-bts-max-boosted-step="false" data-bts-mousewheel="true" data-bts-button-down- className="btn btn-default" data-bts-button-up- className="btn btn-default" />
              </div>
              <div  className="form-group">
               <label  className="control-label">Example with postfix (large)</label>
               <input id="demo1" type="text" defaultValue="55" name="demo1" />
              </div>
              <div  className="form-group mb-0">
               <label  className="control-label">With prefix </label>
               <input id="demo2" type="text" defaultValue="0" name="demo2"  className=" form-control" />
              </div>

             </form>
            </div>
           </div>

           <div  className="col-md-6">
            <div  className="p-2">
             <form>

              <div  className="form-group">
               <label  className="control-label">Init with empty value:</label>
               <input id="demo3" type="text" defaultValue="" name="demo3" />
              </div>
              <div  className="form-group">
               <label  className="control-label">Value attribute is not set (applying settings.initval)</label>
               <input id="demo3_21" type="text" defaultValue="" name="demo3_21" />
              </div>
              <div  className="form-group">
               <label  className="control-label">Value is set explicitly to 33 (skipping settings.initval) </label>
               <input id="demo3_22" type="text" defaultValue="33" name="demo3_22" />
              </div>
              <div  className="form-group mb-0">
               <label  className="control-label">Button group</label>
               <div  className="input-group">
                <input id="demo5" type="text"  className="form-control" name="demo5" defaultValue="50" />
                <div  className="input-group-append">
                 <button type="button"  className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                  <i  className="mdi mdi-chevron-down"></i>
                  <span  className="sr-only">Toggle Dropdown</span>
                 </button>
                 <div  className="dropdown-menu dropdown-menu-right">

                  <a href="javascript:void(0);"  className="dropdown-item">Action</a>

                  <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

                  <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

                  <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
                 </div>
                </div>
               </div>
              </div>
             </form>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>


       <div  className="row">
        <div  className="col-lg-6">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Timepicker</h4>

          <div  className="form-group">
           <label>Default Time Picker</label>
           <div  className="input-group">
            <input id="timepicker" type="text"  className="form-control" />
            <div  className="input-group-append">
             <span  className="input-group-text"><i  className="mdi mdi-clock-outline"></i></span>
            </div>
           </div>
          </div>

          <div  className="form-group">
           <label>24 Hour Mode Time Picker</label>
           <div  className="input-group">
            <input id="timepicker2" type="text"  className="form-control" />
            <div  className="input-group-append">
             <span  className="input-group-text"><i  className="mdi mdi-clock-outline"></i></span>
            </div>
           </div>
          </div>

          <div  className="form-group mb-0">
           <label>Specify a step for the minute field</label>
           <div  className="input-group">
            <input id="timepicker3" type="text"  className="form-control" />
            <div  className="input-group-append">
             <span  className="input-group-text"><i  className="mdi mdi-clock-outline"></i></span>
            </div>
           </div>
          </div>


         </div>
        </div>

        <div  className="col-lg-6">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Colorpicker</h4>

          <div  className="">
           <form action="#">
            <div  className="form-group">
             <label>Default</label>
             <input type="text"  className="colorpicker-default form-control" defaultValue="#8fff00" />
            </div>
            <div  className="form-group">
             <label>RGBA</label>
             <input type="text"  className="colorpicker-rgba form-control" defaultValue="rgb(0,194,255,0.78)" data-color-format="rgba" />
            </div>
            <div  className="form-group mb-0">
             <label>As Component</label>
             <div data-color-format="rgb" data-color="rgb(255, 146, 180)"  className="colorpicker-default input-group">
              <input type="text" readonly="readonly" defaultValue=""  className="form-control" />
              <span  className="input-group-append add-on">
               <button  className="btn btn-light" type="button">
                <i style={{backgroundColor: "rgb(124, 66, 84)" ,marginTop: "2px"}}></i>
               </button>
              </span>
             </div>
            </div>
           </form>
          </div>
         </div>

        </div>
       </div>



       <div  className="row">
        <div  className="col-sm-12">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Date Picker</h4>

          <div  className="row">
           <div  className="col-lg-8">

            <div  className="p-2">
             <form action="#"  className="form-horizontal">
              <div  className="form-group row mb-3">
               <label  className="col-form-label col-lg-3">Default Functionality</label>
               <div  className="col-lg-9">
                <div  className="input-group">
                 <input type="text"  className="form-control" placeholder="mm/dd/yyyy" id="datepicker" />
                 <div  className="input-group-append">
                  <span  className="input-group-text"><i  className="ti-calendar"></i></span>
                 </div>
                </div>
               </div>
              </div>

              <div  className="form-group row mb-3">
               <label  className="col-form-label col-lg-3">Auto Close</label>
               <div  className="col-lg-9">
                <div  className="input-group">
                 <input type="text"  className="form-control" placeholder="mm/dd/yyyy" id="datepicker-autoclose" />
                 <div  className="input-group-append">
                  <span  className="input-group-text"><i  className="ti-calendar"></i></span>
                 </div>
                </div>
               </div>
              </div>

              <div  className="form-group row mb-3">
               <label  className="col-form-label col-lg-3">Multiple Date</label>
               <div  className="col-lg-9">
                <div  className="input-group">
                 <input type="text"  className="form-control" placeholder="mm/dd/yyyy" id="datepicker-multiple-date" />
                 <div  className="input-group-append">
                  <span  className="input-group-text"><i  className="ti-calendar"></i></span>
                 </div>
                </div>
               </div>
              </div>

              <div  className="form-group row mb-3">
               <label  className="col-form-label col-lg-3">Date Range</label>
               <div  className="col-lg-9">
                <div  className="input-daterange input-group" id="date-range">
                 <input type="text"  className="form-control" name="start" />
                 <input type="text"  className="form-control" name="end" />
                </div>
               </div>
              </div>

             </form>
            </div>
           </div>

           <div  className="col-lg-4">
            <div  className="p-2">
             <label>Display Inline</label>
             <div  className="input-group">
              <div id="datepicker-inline"></div>
             </div>
            </div>
           </div>

          </div>
         </div>
        </div>
       </div>



       <div  className="row">
        <div  className="col-sm-12">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Date Range Picker</h4>

          <div  className="row">
           <div  className="col-lg-9">
            <div  className="p-2">
             <form  className="form-horizontal">
              <div  className="form-group row">
               <label  className="col-lg-3 col-form-label">With all options</label>
               <div  className="col-lg-9">
                <div id="reportrange"  className="float-right form-control">
                 <i  className="fa fa-calendar"></i>
                 <span></span>
                </div>
               </div>
              </div>
              <div  className="form-group row">
               <label  className="col-lg-3 col-form-label">Date Range Pick</label>
               <div  className="col-lg-9">
                <input  className="form-control input-daterange-datepicker" type="text" name="daterange" defaultValue="01/01/2015 - 01/31/2015" />
               </div>
              </div>
              <div  className="form-group row">
               <label  className="col-lg-3 col-form-label">Date Range With Time</label>
               <div  className="col-lg-9">
                <input type="text"  className="form-control input-daterange-timepicker" name="daterange" defaultValue="01/01/2015 1:30 PM - 01/01/2015 2:00 PM" />
               </div>
              </div>
              <div  className="form-group row mb-0">
               <label  className="col-lg-3 col-form-label">Limit Selectable Dates</label>
               <div  className="col-lg-9">
                <input  className="form-control input-limit-datepicker" type="text" name="daterange" defaultValue="06/01/2015 - 06/07/2015" />
               </div>
              </div>
             </form>

            </div>

           </div>

          </div>
         </div>
        </div>
       </div>



       <div  className="row">
        <div  className="col-sm-12">
         <div  className="card-box">
          <div  className="dropdown float-right">
           <a href="#"  className="dropdown-toggle arrow-none card-drop" data-toggle="dropdown" aria-expanded="false">
            <i  className="mdi mdi-dots-vertical"></i>
           </a>
           <div  className="dropdown-menu dropdown-menu-right">

            <a href="javascript:void(0);"  className="dropdown-item">Action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Another action</a>

            <a href="javascript:void(0);"  className="dropdown-item">Something else</a>

            <a href="javascript:void(0);"  className="dropdown-item">Separated link</a>
           </div>
          </div>

          <h4  className="header-title mt-0 mb-3">Bootstrap MaxLength</h4>

          <div  className="row">
           <div  className="col-md-6">
            <div  className="p-2">
             <h5>Default usage</h5>
             <input type="text"  className="form-control" maxlength="25" name="defaultconfig" id="defaultconfig" />

             <div  className="mt-2">
              <input type="text" maxlength="25" name="thresholdconfig"  className="form-control" id="thresholdconfig" />
             </div>

             <div  className="mt-3">
              <h5>Few options</h5>
              <input type="text"  className="form-control" maxlength="25" name="moreoptions" id="moreoptions" />
             </div>
            </div>
           </div>

           <div  className="col-md-6">
            <div  className="p-2">
             <h5>All the options</h5>
             <input type="text"  className="form-control" maxlength="25" name="alloptions" id="alloptions" />

             <div  className="mt-3">
              <h5>position</h5>
              <input type="text"  className="form-control" maxlength="25" name="placement" id="placement" />
             </div>
             <div  className="mt-3">
              <h5>textareas</h5>
              <textarea id="textarea"  className="form-control" maxlength="225" rows="3" placeholder="This textarea has a limit of 225 chars."></textarea>
             </div>
            </div>
           </div>
          </div>
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
