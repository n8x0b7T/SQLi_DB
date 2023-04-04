drop database if exists shop;
create database shop;
use shop;

create table ShopItem (
    itemID integer primary key,
    itemName text not null,
    itemPrice integer not null,
    itemStock integer not null
);

create table ShopUser(
    userID integer primary key,
    userName text not null,
    userHash text not null
);

insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(0, "Bananas", 5, 23);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(1, "Apples", 1, 36);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(2, "Oranges", 2, 24);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(3, "Carrots", 2, 15);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(4, "Pears", 3, 38);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(5, "Lettuce", 1, 2);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(6, "Kale", 1, 1);
insert into ShopItem(itemID, itemName, itemPrice, itemStock)
values(7, "Watermelons", 6, 13);

insert into ShopUser(userID, userName, userHash)
values(0, "fred", "365d38c60c4e98ca5ca6dbc02d396e53")