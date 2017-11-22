Excercise
========================
##Complete demo is running on

http://track-my-goods.azurewebsites.net/

### Login Details:
username: testuser

password: testuser

## Problem:
Your client, Transport Plus Ltd., have requested a new web application to track their vehicle fleet in real time. All their vehicles have been fitted with GPS and the vehicle configuration, i.e. tracking id, is stored in a SQL Server database. Transport Plus Ltd. want the new web app to provide secure login for their traffic controllers so they can view the position of each vehicle on a map.
The goal of this exercise is to design a skeletal code solution for this problem. Please also provide details on technical choices made, i.e. frameworks usage, model structures, etc. The provided code does not have to be functional.
It doesn’t have to be fully functional. You are free to use any resource available, i.e. technical books, internet, The objective is to evaluate your problem solving skills and technical proficiencies

## Solution:
Quick, requirement set
- User can login to the system
- User can logout of the system
- User is able to get list of available trucks from database
- User can get location of the truck on the map
- User can view historical information

## Technologies will be used

I will use c9 IDE (unfortunatley it has no support for TS, but it should be fine),
at the end application will be deployed to MS Azure..

For the fast, rapid development I will use:
### Frontend: 
Angular2 Application

Google maps API will be used to display the map
### Styling: 
Bootstrap / Metro.css
## Backend: 
Node.js as API

My Angualr2 / Node.js Start repo will be used: https://github.com/DenMantm/angular2-node-quickstart

SQL Server Database will be used (Azure)

## Necesarry models from DB side
(I will not define models on frontend because of time constrains, but i normally do that)

Database Tables:

1. User

2. TransportFleet

3. RouteRecords
