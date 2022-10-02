@charset "utf-8";
@charset "utf-8";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 6
   Case Problem 2

   LHT Reset Style Sheet

   Filename: lht_reset.css

*/


/* Basic styles to be used with all devices and under all conditions */

article, aside, figcaption, figure,
footer, header, main, nav, section {
   display: block;
}

address, article, aside, blockquote, body, cite,
div, dl, dt, dd, em, figcaption, figure, footer,
h1, h2, h3, h4, h5, h6, header, html, img,
li, main, nav, nav a, ol, p, section, span, ul,
table, tr, td, th, col, colgroup {
   margin: 0;
   padding: 0;
   border: 0;
   font-size: 100%;
   background: transparent;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
}


/* Set the default page element styles */

body {
   line-height: 1.5em;
}

ul, ol {
   list-style: none;
}

nav ul {
   list-style: none;
   list-style-image: none;
}

nav a {
   text-decoration: none;
}

img#navicon {
   display: none;
}

img#logoimg
{
   display: block;
   width: 300px;
   margin: auto;
}

@font-face
{
    font-family: 'Raleway', sans-serif;
    src: url('amerType.woff') format('woff'),
        url('amerType.ttf') format('truetype');
}

header
{
  background:  #2F4858;
}

body
{
   background-color: #daf7dc;
   min-height: 100%;
   margin: 0px auto 60px auto;
   width: 100%;
   color: #2F4858;
}

h1
{
 font-family: 'Raleway', sans-serif;
 margin: 30px auto 20px auto;
 font-size: 52px;
 text-align: center;
 text-transform: uppercase;
}

h2
{
   font-family: 'Raleway', sans-serif;
   color: #2F4858;
   font-weight: normal;
   text-align: center;
   font-size: 38px;
   line-height: 13px;
   margin: 38px auto 13px auto;
}

h3, h4
{
   padding: 10px;
   margin-top: 25px;
   margin-bottom: 0px;
   font-family: 'Raleway', sans-serif;
   color: #2F4858;
   text-align: center;
   font-size: 23px;
   line-height: 38px;
   column-span: all;
}
h4
{
 line-height: 13px;
 padding-bottom:  0px;
}

.tab {
  overflow: hidden;
  text-align: left;
  margin: 38px auto 0px auto;
}

/* Style the buttons that are used to open the tab content */
.tab button {
   font-family: 'Raleway', sans-serif;
   text-align: center;
   font-size: 1.3em;
   text-transform: uppercase;
   background-color: #f0e9e0;
   color: #2F4858;
   border: none;
   outline: none;
   cursor: pointer;
   padding: 13px 13px;
   margin: 10px;
   transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover
{
 text-decoration: underline;
}

/* Create an active/current tablink class */
.tab button.active
{
   background-color: #2F4858;
   color: white;
}

/* Style the tab content */
.tabcontent
{
  display: none;
  border: 1px solid #ccc;
  border-top: none;
}
p, table.tabcontent td p
{
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding: 8px;
  line-height: 13px;
  font-size: 18px;
}

button, select
{
 font-family: 'Raleway', sans-serif;
 font-size: 18px;
 margin: 18px;
 padding: 8px;
 border-style: none;
 background-color: #2F4858;
 color:white;
 border-radius: 3px;
}

button:hover, select:hover{
  text-decoration: underline;
  cursor: pointer;
}

input{
  padding:8px;
  font-size: 18px;
  border-style: none;
  border-radius:3px;
  color: #2f4858;
}


label
{
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  padding: 18px;
  width: 38px;
  display: inline-block;
  min-width: 83px;
}
select
{
 min-width: 183px;
}

footer
{
    font-family: 'Raleway', sans-serif;
    text-align: center;
    color: white;
    position: fixed;
    bottom: 0px;
    height: 50px;
    width: 100%;
    text-align:center;
    background-color: #2F4858;
    padding-top: 10px;
    opacity: 0.75;
}

h9
{
 font-family: 'Raleway', sans-serif;
 font-size: 20px;
}

li{
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding: 8px;
  line-height: 13px;
  font-size: 18px;
}

li:hover{
  text-decoration: line-through;
  cursor: pointer;
}
