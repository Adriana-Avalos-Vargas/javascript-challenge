# javascript-challenge

In this repository two different web pages are created. One is inside the UFO-level-1 directory where only one filtering is applied. Indeed, the user can select the date of interest, and then render a table with all the UFO's sightings in such a date. If no data is obtaines a message with a warning is presented. In the next figure is presented the web page functionality.

![alt text](images\ufo_1.png "UFO first web page")

The second web page allows to make a multiple filtering considering the variables:

1. Date

2. City

3. State

4. Country

5. Shape

This is achieved modifing the html throug the appending of new *li* items, with their corresponding *label* tag and *input* tag. It is important to note that this is done through the app.js and not directly in the index.html file.
The result is  a table with the desired data. If there is not a cooresponding case a warning is displayed. The result is shown is in the next image.

![alt text2](images\ufo_2.png "UFO second web page")

Finaly, it has to be noted that in both cases, in order to apply the filter the filter table button must be clicked.