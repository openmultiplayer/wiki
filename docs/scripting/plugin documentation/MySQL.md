---
title: MySQL
description: Documentation for BlueG's MySQL plugin version R41-4
sidebar_label: MySQL
---

#MySQL/R41-4
==========

Documentation for BlueG's MySQL plugin version R41-4
==========

* ORM functions
	* [orm_create](#orm_create) 
	* [orm_destroy](#orm_destroy)
	* [orm_errno](#orm_errno)
	* [orm_apply_cache](#orm_apply_cache)
	* [orm_select](#orm_select)
	* [orm_update](#orm_update)
	* [orm_insert](#orm_insert)
	* [orm_delete](#orm_delete)
	* [orm_load](#orm_load)
	* [orm_save](#orm_save) 
	* [orm_addvar_int](#orm_addvar_int)
	* [orm_addvar_float](#orm_addvar_float)
	* [orm_addvar_string](#orm_addvar_string)
	* [orm_delvar](#orm_delvar)
	* [orm_clear_vars](#orm_clear_vars)
	* [orm_setkey](#orm_setkey)
* MySQL functions
	* [mysql_log](#mysql_log) 
	* [mysql_connect](#mysql_connect) 
	* [mysql_connect_file](#mysql_connect_file) 
	* [Available fields](#Available_fields) 
	* [mysql_close](#mysql_close) 
	* [mysql_unprocessed_queries](#mysql_unprocessed_queries) 
	* [mysql_global_options](#mysql_global_options) 
	* [Options](#Options) 
	* [mysql_init_options](#mysql_init_options) 
	* [mysql_set_option](#mysql_set_option) 
	* [Available options](#Available options) 
	* [mysql_pquery](#mysql_pquery) 
	* [Format specifiers](#Format specifiers) 
	* [mysql_tquery](#mysql_tquery) 
	* [Format specifiers](#Format specifiers) 
	* [mysql_tquery_file](#mysql_tquery_file) 
	* [mysql_query](#mysql_query) 
	* [mysql_query_file](#mysql_query_file) 
	* [mysql_errno](#mysql_errno) 
	* [mysql_error](#mysql_error) 
	* [mysql_escape_string](#mysql_escape_string) 
	* [mysql_format](#mysql_format) 
	* [Format strings](#Format strings) 
	* [mysql_set_charset](#mysql_set_charset) 
	* [mysql_get_charset](#mysql_get_charset) 
	* [mysql_stat](#mysql_stat) 
	
#ORM functions
==========
##orm_create
==========
**Description:**
>Creates an ORM instance and returns its id.

**Parameters:**
```bash
(const table[], MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`const table[]` The name of the table you wish to control.

`MySQL:handle`  The connection handle this will be processed on (optional).

**Return Values:**
>ORM id on success, 0 on failure.
------------
```pawn
public OnPlayerConnect(playerid)
{
	new ORM:orm = Player[playerid][ORM_ID] = orm_create("players");
	return 1;
}
```
------------
##orm_destroy
==========
**Description:**
>Destroys an ORM instance.

**Parameters:**
```bash
(ORM:id)
```
`ORM:id	` 	The id of the ORM instance.

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
public OnPlayerDisconnect(playerid, reason)
{
	orm_destroy(Player[playerid][ORM_ID]);
	return 1;
}
```
------------
##orm_errno
==========
**Description:**
>Returns the error-id of the result application in the current ORM result callback.

**Parameters:**
```bash
(ORM:id)
```
`ORM:id	` 	The id of the ORM instance.

**Return Values:**
>Error id.

**Available errors**
| Error	   	| Meaning                                  			|
| ------------- | ------------------------------------------------------------- |
| ERROR_INVALID | An error happened while executing orm_errno (invalid ORM id). |
| ERROR_OK      | No error happened. 						|
| ERROR_NO_DATA | No data has been found in the table.                   	|

------------
```pawn
orm_select(Player[playerid][ORM_ID], "OnStuffSelected", "d", playerid);
 
public OnStuffSelected(playerid)
{
	switch(orm_errno(Player[playerid][ORM_ID])
	{
		case ERROR_INVALID:
			printf("Invalid ORM id.");
			break;
		case ERROR_OK:
			printf("There is no error.");
			break;
		case ERROR_NO_DATA:
			printf("No data in the table found.");
			break;
	}
	return 1;
}
```
------------
##orm_apply_cache
==========
**Description:**
>Applies the data of the active cache to an ORM instance.

**Parameters:**
```bash
(ORM:id, row_idx, result_idx = 0)
```
`ORM:id ` 	The id of the ORM instance.
<br/>
`row_idx ` 	The row index to take the cache data from.
<br/>
`result_idx `	The result index to use (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
new query[128];
format(query, sizeof(query), "SELECT * FROM `players` WHERE `id` = %d", Player[playerid][ID]);
mysql_tquery(MySQL, query, "OnStuffSelected", "d", playerid);
 
public OnStuffSelected(playerid)
{
	orm_apply_cache(Player[playerid][ORM_ID], 0);
	printf("Player %s has %d Money and is on PosX with %f.", Player[playerid][Name], Player[playerid][Money], Player[playerid][PosX]);
	return 1;
}
```
------------
##orm_select
==========
**Description:**
>Sends a SELECT query and applies the retrieved data to the previously registered variables.

**Parameters:**
```bash
(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const callback[]`	The name of the callback to call when the operation is done (optional).
<br/>
`const format[]`	The format specifier for the callback (optional).
<br/>
`{Float, _}:...`	Indefinite number of parameters to pass to the callback (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
orm_select(Player[playerid][ORM_ID], "OnPlayerDataLoaded", "d", playerid);
 
public OnPlayerDataLoaded(playerid)
{
	printf("Player %s has %d Money and is on PosX with %f.", Player[playerid][Name], Player[playerid][Money], Player[playerid][PosX]);
	return 1;
}
```
---------
##orm_update
==========
**Description:**
>Sends an UPDATE query with the current values of the registered variables.

**Parameters:**
```bash
(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const callback[]`	The name of the callback to call when the operation is done (optional).
<br/>
`const format[]`	The format specifier for the callback (optional).
<br/>
`{Float, _}:...`	Indefinite number of parameters to pass to the callback (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
orm_update(Player[playerid][ORM_ID]);
//this generates a query like "UPDATE `players` SET ´name´='PlayerName', `money`='23141', `pos_x`='231.432' WHERE `id`='42'" and executes it
```
---------
##orm_insert
==========
**Description:**
>Sends an INSERT query with the current values of the registered variables.

**Parameters:**
```bash
(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const callback[]`	The name of the callback to call when the operation is done (optional).
<br/>
`const format[]`	The format specifier for the callback (optional).
<br/>
`{Float, _}:...`	Indefinite number of parameters to pass to the callback (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
orm_insert(Player[playerid][ORM_ID], "OnPlayerRegistered", "d", playerid);
 
public OnPlayerRegistered(playerid)
{
	printf("Player %s has registered with id %d.", Player[playerid][Name], Player[playerid][ID]);
	return 1;
}
```
---------
##orm_delete
==========
**Description:**
>Sends a DELETE query.

**Parameters:**
```bash
(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const callback[]`	The name of the callback to call when the operation is done (optional).
<br/>
`const format[]`	The format specifier for the callback (optional).
<br/>
`{Float, _}:...`	Indefinite number of parameters to pass to the callback (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
orm_delete(Player[playerid][ORM_ID]);
//this generates a query like "DELETE FROM `players` WHERE `id`='42'" and executes it
```
---------
##orm_load
==========
**Description:**
>Fetches data from a table and applies it to the previously registered variables. This function is the same as [orm_select](#orm_select).
**Parameters:**
```bash
(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const callback[]`	The name of the callback to call when the operation is done (optional).
<br/>
`const format[]`	The format specifier for the callback (optional).
<br/>
`{Float, _}:...`	Indefinite number of parameters to pass to the callback (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
orm_load(Player[playerid][ORM_ID], "OnPlayerDataLoaded", "d", playerid);
 
public OnPlayerDataLoaded(playerid)
{
	printf("Player %s has %d Money and is on PosX with %f.", Player[playerid][Name], Player[playerid][Money], Player[playerid][PosX]);
	return 1;
}
```
---------
##orm_save
==========
**Description:**
>Saves data to a table. This function is a combination of [orm_insert](#orm_insert) and [orm_update](#orm_update). If the previously specified key variable has a valid value (not 0 for integers and not empty for strings), orm_save calls [orm_update](#orm_update), else [orm_insert](#orm_insert).

**Parameters:**
```bash
(ORM:id, const callback[] = "", const format[] = "", {Float, _}:...)
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const callback[]`	The name of the callback to call when the operation is done (optional).
<br/>
`const format[]`	The format specifier for the callback (optional).
<br/>
`{Float, _}:...`	Indefinite number of parameters to pass to the callback (optional).

**Return Values:**
>1 on success, 0 on failure.
------------
```pawn
Player[playerid][Money] = GetPlayerMoney(playerid);
orm_save(Player[playerid][ORM_ID]);
```
---------
##orm_addvar_int
==========
**Description:**
>Registers an integer variable to an ORM instance and links it to the specified column.

**Parameters:**
```bash
(ORM:id, &var, const columnname[])
```
`ORM:id` 	The id of the ORM instance.
<br/>
`&var`	The variable to register.
<br/>
`const columnname[]`	The name of the column in the MySQL table.

**Return Values:**
>1 if successfully added, 0 if not.
------------
```pawn
new ORM:ormid = orm_create("players");
 
orm_addvar_int(ormid, Player[playerid][ID], "id");
orm_addvar_int(ormid, Player[playerid][Money], "money");
```
---------
##orm_addvar_float
==========
**Description:**
>Registers a floating point variable to an ORM instance and links it to the specified column.

**Parameters:**
```bash
(ORM:id, &Float:var, const columnname[])
```
`ORM:id` 	The id of the ORM instance.
<br/>
`&Float:var`	The variable to register.
<br/>
`const columnname[]`	The name of the column in the MySQL table.

**Return Values:**
>1 if successfully added, 0 if not.
------------
```pawn
new ORM:ormid = orm_create("players");
 
orm_addvar_float(ormid, Player[playerid][PosX], "pos_x");
orm_addvar_float(ormid, Player[playerid][PosY], "pos_y");
```
---------
##orm_addvar_string
==========
**Description:**
>Registers a string variable to an ORM instance and links it to the specified column.

**Parameters:**
```bash
(ORM:id, var[], var_maxlen, const columnname[])
```
`ORM:id` 	The id of the ORM instance.
<br/>
`var[]`		The variable to register.
<br/>
`var_maxlen`	The size of the registered variable.
<br/>
`const columnname[]`	The name of the column in the MySQL table.

**Return Values:**
>1 if successfully added, 0 if not.
------------
```pawn
enum E_PLAYER {
	// ...
	Name[MAX_PLAYER_NAME],
	Password[129]
};
new Player[MAX_PLAYERS][E_PLAYER];
 
// ...
 
new ORM:ormid = orm_create("players");
 
orm_addvar_string(ormid, Player[playerid][Name], MAX_PLAYER_NAME, "name");
orm_addvar_string(ormid, Player[playerid][Password], 129, "passwd");
```
---------
##orm_delvar
==========
**Description:**
>Removes a previously registered variable from the specified ORM instance by its column name.

**Parameters:**
```bash
(ORM:id, const columnname[])
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const columnname[]`	The name of the column.

**Return Values:**
>1 if successfully added, 0 if not.
------------
```pawn
new ORM:ormid = orm_create("players");
 
orm_addvar_int(ormid, Player[playerid][ID], "id");
// ...
orm_delvar(ormid, "id"); //returns true, variable "Player[playerid][ID]" has been removed
orm_delvar(ormid, "id"); //returns false, because the variable couldn't be found as it was already removed
```
---------
##orm_clear_vars
==========
**Description:**
>Sets all variables registered in the specified ORM instance to zero.

**Parameters:**
```bash
(ORM:id)
```
`ORM:id` 	The id of the ORM instance.

**Return Values:**
>1 if successfully added, 0 if not.
------------
```pawn
new ORM:ormid = orm_create("players");
 
Player[playerid][Money] = GetPlayerMoney(playerid);
GetPlayerHealth(playerid, Player[playerid][Health]);
 
orm_addvar_int(ormid, Player[playerid][Money], "money");
orm_addvar_float(ormid, Player[playerid][Health], "Health");
 
orm_clear_vars(ormid); //the money and health variables are now set to '0'
```
---------
##orm_setkey
==========
**Description:**
>Sets a previously registered variable as key specified by the column name the variable has been linked to.

**Parameters:**
```bash
(ORM:id, const columnname[])
```
`ORM:id` 	The id of the ORM instance.
<br/>
`const columnname[]`	The name of the column in the MySQL table.

**Return Values:**
>1 if successfully added, 0 if not.
------------
```pawn
new ORM:ormid = orm_create("players");
 
orm_addvar_int(ormid, Player[playerid][ID], "id");
orm_addvar_float(ormid, Player[playerid][PosX], "pos_x");
// ...
orm_setkey(ormid, "id");
```
---------
MySQL functions
==========
##mysql_log
==========
**Description:**
>Controls what information will be logged.
>
>> - **Logging is always enabled by default, even if you don't call mysql_log.**

**Parameters:**
```bash
(E_LOGLEVEL:loglevel = ERROR | WARNING)
```
`E_LOGLEVEL:loglevel`	Specifies what type of log messages will be logged (optional).

**Return Values:**
>This function does not return any specific values.

**Log levels**
| Log type	| Description                                  			|
| ------------- | ------------------------------------------------------------- |
| NONE	 	| Logs absolutely nothing. 					|
| ERROR	        | Logs errors. 							|
| WARNING	| Logs warnings.                   				|
| INFO	 	| Logs informational messages 					|
| DEBUG	        | Logs debug messages. 						|
| ALL		| Logs everything.                   				|

------------
```pawn
public OnGameModeInit()
{
	mysql_log(ALL); //logs everything (errors, warnings and debug messages)
	return 1;
}
```
---------
##mysql_connect
==========
**Description:**
>Connects to a MySQL server and database.

**Parameters:**
```bash
(const host[], const user[], const password[], const database[], MySQLOpt:option_id = MySQLOpt:0)
```
`const host[]`	IP or hostname of the MySQL server.
`const user[]`	Username of the account you want to connect to.
`const password[]`	Password of the account you want to connect to.
`const database[]`	Name of the database you want to connect to.
`MySQLOpt:option_id`	MySQL connection options instance, see [mysql_init_options](#mysql_init_options)() and [mysql_set_option](#mysql_set_option)() (optional).

**Return Values:**
>Connection handle or MYSQL_INVALID_HANDLE on error.
>
>> - **If no option id is specified, the default options will be used.**
------------
```pawn
new MySQL:g_Sql;
// ...
public OnGameModeInit()
{
	g_Sql = mysql_connect("127.0.0.1", "root", "mypass", "mydatabase");
	// ...
	return 1;
}
```
---------
