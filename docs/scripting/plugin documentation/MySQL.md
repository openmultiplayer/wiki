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
	* [mysql_close](#mysql_close) 
	* [mysql_unprocessed_queries](#mysql_unprocessed_queries) 
	* [mysql_global_options](#mysql_global_options) 
	* [mysql_init_options](#mysql_init_options) 
	* [mysql_set_option](#mysql_set_option)  
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
##mysql_connect_file
==========
**Description:**
>Connects to a MySQL server and database using a INI-like file where all connection credentials and options are specified.

**Parameters:**
```bash
(const file_name[] = "mysql.ini")
```
`const file_name[]`	Name for the connection file (optional).

**Return Values:**
>Connection handle or MYSQL_INVALID_HANDLE on error.
>
>> - **You can't specify any directories in the file name, the connection file has to be in the SA-MP server root folder.**

**Available fields**
| Field			| Type                                  			| Description                                  						|
| ------------- 	| ------------------------------------------------------------- |-------------------------------------------------------------------------------	|
| hostname		| string 							| The IP/hostname.									|
| username	        | string 							| The name of the user.									|
| password		| string                   					| The password of the user.								|
| database	 	| string 							| The database to use.									|
| auto_reconnect	| boolean (optional, true by default) 				| Whether automatically reconnect to the server on connection loss or not.		|
| multi_statements	| boolean (optional, false by default)                   	| Allow/Disallow executing multiple SQL statements in one query.			|
| pool_size		| unsigned integer (optional, 2 by default)	                | Size of connection pool for [mysql_pquery](#mysql_pquery).				|
| server_port		| unsigned integer (optional, 3306 by default)	 		| Server port.										|
| ssl_enable		| boolean (optional, false by default) 				| Enable/disable SSL.									|
| ssl_key_file		| string (optional)                  				| Path to key file.									|
| ssl_cert_file		| string (optional)                   				| Path to certificate file.								|
| ssl_ca_file		| string (optional)                   				| Path to certificate authority file.							|
| ssl_ca_path		| string (optional) 						| Path name to a directory that contains trusted SSL CA certificates in PEM format. 	|
| ssl_cipher		| string (optional) 						| List of permissible ciphers to use for SSL encryption.				|

**Valid connection file example:**

```c
hostname	= 127.0.0.1	 ; this is a comment
username    = tester  		# this is also a comment
password	= 1234	
database	= test	
# auto_reconnect = false
multi_statements = true
# pool_size = 3
; server_port = 3306
```
```pawn
new MySQL:g_Sql;
// ...
public OnGameModeInit()
{
	g_Sql = mysql_connect_file();
	// ...
	return 1;
}
```
---------
##mysql_close
==========
**Description:**
>Closes the MySQL connection.
>
>> - **mysql_close will always wait until all queued queries are executed, thus halting the server.**

**Parameters:**
```bash
(MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`MySQL:handle`	The connection handle to close (optional).


**Return Values:**
>1 on success, 0 on fail.

------------
```pawn
public OnGameModeExit()
{
	mysql_tquery(g_Sql, "UPDATE `players` SET `is_online` = '0'");
 
	mysql_close(g_Sql); //mysql_close will now halt the server until the query we just sent is executed.
	return 1;
}
```
---------
##mysql_unprocessed_queries
==========
**Description:**
>Returns the number of unprocessed (threaded) queries.

**Parameters:**
```bash
(MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`MySQL:handle`		The connection handle this will be processed on (optional).

**Return Values:**
>Number of unprocessed queries or -1 on error.

```pawn
printf("There are %d unprocessed queries.", mysql_unprocessed_queries());
```
---------
##mysql_global_options
==========
**Description:**
>Sets global options regarding the MySQL plugin.

**Parameters:**
```bash
(E_MYSQL_OPTION:type, value)
```
`E_MYSQL_OPTION:type`	Option to change.
<br/>
`value`	Value the option should be set to.

**Return Values:**
>1 on success, 0 on failure


**Options**
| Option			| Type				| Description								|
| ------------- 		| -------------			|-------------								|
| DUPLICATE_CONNECTIONS		| boolean (false by default)	| Allows to create multiple connections to the same database and server.|
| DUPLICATE_CONNECTION_WARNING	| boolean (true by default)	| Controls whether to print a warning when a duplicate connection is detecte Used only if DUPLICATE_CONNECTIONS is false. |

```pawn
public OnGameModeInit()
{
	mysql_global_options(DUPLICATE_CONNECTIONS, true); //allows the use of dupl. connections
 
	new MySQL:g_Sql1 = mysql_connect("127.0.0.1", "root", "mypass", "mydatabase");
	new MySQL:g_Sql2 = mysql_connect("127.0.0.1", "root", "mypass", "mydatabase");
 
	printf("connection 1 and connection 2 are %s.", g_Sql1 == g_Sql2 ? "the same" : "not the same");
 
	//output: "connection 1 and connection 2 are the same."
 
	return 1;
}
```
---------
##mysql_init_options
==========
**Description:**
>Creates a MySQL connection options instance with default values.

**Parameters:**
```bash
This function has no parameters
```

**Return Values:**
>MySQL connection options id.

```pawn
new MySQLOpt:options = mysql_init_options();
```
---------
##mysql_set_option
==========
**Description:**
>Sets an option to the specified value.

**Parameters:**
```bash
(MySQLOpt:option_id, E_MYSQL_OPTION:type, ...)
```
`MySQLOpt:option_id`	The MySQL connection options id.
<br/>
`E_MYSQL_OPTION:type`	The option to change.
<br/>
`...`	The new (single) value to set the option to.

**Return Values:**
>1 if option was successfully set, 0 otherwise.

**Available options**

| Option		| Type                                  			| Description                                  						|
| ------------- 	| ------------------------------------------------------------- |-------------------------------------------------------------------------------	|
| AUTO_RECONNECT	| boolean (optional, true by default) 				| Whether automatically reconnect to the server on connection loss or not.		|
| MULTI_STATEMENTS	| boolean (optional, false by default)                   	| Allow/Disallow executing multiple SQL statements in one query.			|
| POOL_SIZE		| unsigned integer (optional, 2 by default)	                | Size of connection pool for [mysql_pquery](#mysql_pquery).				|
| SERVER_PORT		| unsigned integer (optional, 3306 by default)	 		| Server port.										|
| SSL_ENABLE		| boolean (optional, false by default) 				| Enable/disable SSL.									|
| SSL_KEY_FILE		| string (optional)                  				| Path to key file.									|
| SSL_CERT_FILE		| string (optional)                   				| Path to certificate file.								|
| SSL_CA_FILE		| string (optional)                   				| Path to certificate authority file.							|
| SSL_CA_PATH		| string (optional) 						| Path name to a directory that contains trusted SSL CA certificates in PEM format. 	|
| SSL_CIPHER		| string (optional) 						| List of permissible ciphers to use for SSL encryption.				|

```pawn
new MySQLOpt:options = mysql_init_options();
 
mysql_set_option(options, AUTO_RECONNECT, false); //disable auto-reconnect
mysql_set_option(options, POOL_SIZE, 0); //disable connection pool (and thus mysql_pquery)
 
g_Sql = mysql_connect("127.0.0.1", "root", "mypass", "mydatabase", options);
```
---------
##mysql_pquery
==========
**Description:**
>Sends a query which will be executed in another thread concurrently and calls the callback (if there is one) when the execution is finished.

> - If you are not sure which query native to use, use [mysql_tquery](#mysql_tquery).

> - The difference between this native and [mysql_tquery](#mysql_tquery) is, that multiple queries sent with this native at once can be processed in parallel, thus it may be faster in some cases, depending on the connection pool size. There may be also cases where executing queries in parallel will result in worse performance than with [mysql_tquery](#mysql_tquery).
> - The size of the connection pool can be specified through [mysql_set_option](#mysql_set_option) with the POOL_SIZE parameter. Each connection in the pool resembles a thread.

> - **Queries sent with this native may be executed out of order.**

> - **Queries sent with this native don't support transactions.**

**Parameters:**
```bash
(MySQL:handle, const query[], const callback[] = "", const format[] = "", {Float,_}:...)
```
`MySQL:handle`	The connection handle this will be processed on.
<br/>
`const query[]`	The query to be executed.
<br/>
`const callback[]`	The result callback to call after the query successfully executed (optional).
<br/>
`const format[]`	The format specifier string for the result callback (optional).
<br/>
`{Float,_}:...`	Indefinite number of arguments (optional).


**Return Values:**
>1 if the query was successfully queued for execution, 0 otherwise.


> - **The callback must be a public function. That means it has to be forwarded.**


| Specifier		| Meaning                                  	|
| ------------- 	| ---------------------------------------------	|
| d/i	| integer number 						|
| s	| string  			|
| f	| floating point number 				|
| b	| boolean  			|
| a	| array (has to be followed by 'd'/'i' with the array length; the array length is also passed as a callback argument) |
| r	| reference  			|

```pawn
forward OnPlayerDataLoaded(playerid);
 
public OnPlayerConnect(playerid)
{
	new query[128], pname[MAX_PLAYER_NAME];
	new array[10] = {1, 2, ...};
 
	GetPlayerName(playerid, pname, MAX_PLAYER_NAME);
 
	mysql_format(MySQL, query, sizeof(query), "SELECT * FROM `players` WHERE `name` LIKE '%e'", pname);
	mysql_pquery(MySQL, query, "OnPlayerDataLoaded", "dad", playerid, array, sizeof array);
	return 1;
}
 
public OnPlayerDataLoaded(playerid, array[], array_size)
{
	//Query processed, you can now execute cache functions (like cache_get_value_index) here.
	printf("There are %d players with the same name.", cache_num_rows());
	return 1;
}
```
---------
##mysql_tquery
==========
**Description:**
>Sends a query which will be executed in another thread and call a callback (if there was one specified) when the execution is successfully finished.

**Parameters:**
```bash
(MySQL:handle, const query[], const callback[] = "", const format[] = "", {Float,_}:...)
```
`MySQL:handle`	The connection handle this will be processed on.
<br/>
`const query[]`	The query you want to execute.
<br/>
`const callback[]`	The query you want to process (optional).
<br/>
`const format[]`	The format specifier string (optional).
<br/>
`{Float,_}:...`	Indefinite number of arguments (optional).


**Return Values:**
>1 if the query was successfully queued for execution, 0 otherwise.


> - **The callback must be a public function. That means it has to be forwarded.**


| Specifier		| Meaning                                  	|
| ------------- 	| ---------------------------------------------	|
| d/i	| integer number 						|
| s	| string  			|
| f	| floating point number 				|
| b	| boolean  			|
| a	| array (has to be followed by 'd'/'i' with the array length; the array length is also passed as a callback argument) |
| r	| reference  			|

```pawn
enum E_PLAYER
{
	Id,
	Name[MAX_PLAYER_NAME],
	Stuff
};
new Players[MAX_PLAYERS][E_PLAYER]
 
forward OnPlayerDataLoaded(playerid);
 
public OnPlayerConnect(playerid)
{
	new query[128], pname[MAX_PLAYER_NAME];
 
	GetPlayerName(playerid, pname, sizeof(pname));
 
	mysql_format(MySQL, query, sizeof(query), "SELECT * FROM `players` WHERE `Name` LIKE '%e'", pname);
	mysql_tquery(MySQL, query, "OnPlayerDataLoaded", "r", Players[playerid]);
	return 1;
}
 
public OnPlayerDataLoaded(player[E_PLAYER])
{
	//Query processed, you can now execute cache functions (like cache_get_value_index) here.
	printf("There are %d players with the name %s.", cache_num_rows(), player[Name]);
	return 1;
}
}
 
public OnPlayerDataLoaded(playerid, array[], array_size)
{
	//Query processed, you can now execute cache functions (like cache_get_value_index) here.
	printf("There are %d players with the same name.", cache_num_rows());
	return 1;
}
```
---------
##mysql_tquery_file
==========
**Description:**
>This native reads all queries from the specified file and executes them in a threaded manner.

**Parameters:**
```bash
(MySQL:handle, const file_path[], const callback[] = "", const format[] = "", {Float,_}:...)
```
`MySQL:handle`	The connection handle this will be processed on.
<br/>
`const file_path[]`	The file to read the queries from.
<br/>
`const callback[]`	The query you want to process (optional).
<br/>
`const format[]`	The format specifier string (optional).
<br/>
`{Float,_}:...`	Indefinite number of arguments (optional).


**Return Values:**
>1 if the query was successfully queued for execution, 0 otherwise.

> - Only files inside the scriptfiles directory are considered.

> - The file path has to be absolute (relative to the scriptfiles directory), e.g. folder1/../file.sql is invalid.

> - All queries have to end with a semicolon.

> - Comments (starting with # or -- ) are ignored (except C-style comments).

> - Queries can be written over multiple lines.

> - The callback must be a public function. That means it has to be forwarded.

```pawn
public OnGameModeInit()
{
    mysql_tquery_file(db_handle, "my_tables.sql", OnDatabaseTablesChecked);
    return 1;
}
 
forward OnDatabaseTablesChecked();
public OnDatabaseTablesChecked()
{
    LoadHouses();
    LoadVehicles();
    return 1;
}

```
---------
##mysql_query
==========
**Description:**
>This native sends a non-threaded query to the MySQL server. The SA:MP server (the main PAWN thread) waits until the query has been executed and then returns the stored cache handle.

> - Never send unthreaded queries unless you **really** know what you are doing.
> - Use [cache_delete](#cache_delete) if you don't need the query's result anymore or you will experience memory leaks.

**Parameters:**
```bash
(MySQL:handle, const query[], bool:use_cache = true)
```
`MySQL:handle`	The connection handle this will be processed on.
<br/>
`const query[]`	The query you want to execute.
<br/>
`bool:use_cache`	Set to true if you intend to use the cache/result mysql_query returns (optional).

**Return Values:**
>A valid cache-id if use_cache was set to true, MYSQL_INVALID_CACHE otherwise

> - **If use_cache is set to false, there won't be any valid cache to use, so all cache-related natives wont work. You also don't need to call [cache_delete](#cache_delete)  in this case.**

```pawn
new registered_players, Cache:result = mysql_query(MySQL, "SELECT COUNT(*) FROM `players`");
cache_get_value_int(0, 0, registered_players);
printf("There are %d players in the database.", registered_players);
cache_delete(result);
```
---------
##mysql_query_file
==========
**Description:**
>This native reads all queries from the specified file and executes them in an unthreaded manner.

> - Don't send unthreaded queries unless you **really** know what you are doing.

**Parameters:**
```bash
(MySQL:handle, const file_path[]
```
`MySQL:handle`	The connection handle this will be processed on.
<br/>
`const file_path[]`	The file to read the queries from.

**Return Values:**
>1 on success, 0 on failure.

> - Only files inside the scriptfiles directory are considered.

> - The file path has to be absolute (relative to the scriptfiles directory), e.g. folder1/../file.sql is invalid.

> - All queries have to end with a semicolon.

> - Comments (starting with # or -- ) are ignored (except C-style comments).

> - Queries can be written over multiple lines.

```pawn
mysql_query_file(g_Sql, "players.sql");
```
---------
