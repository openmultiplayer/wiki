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
	* [mysql_tquery](#mysql_tquery) 
	* [mysql_tquery_file](#mysql_tquery_file) 
	* [mysql_query](#mysql_query) 
	* [mysql_query_file](#mysql_query_file) 
	* [mysql_errno](#mysql_errno) 
	* [mysql_error](#mysql_error) 
	* [mysql_escape_string](#mysql_escape_string) 
	* [mysql_format](#mysql_format) 
	* [mysql_set_charset](#mysql_set_charset) 
	* [mysql_get_charset](#mysql_get_charset) 
	* [mysql_stat](#mysql_stat)
* Cache functions
	* [cache_get_row_count](#cache_get_row_count)
	* [cache_get_field_count](#cache_get_field_count)
	* [cache_get_result_count](#cache_get_result_count)
	* [cache_get_field_name](#cache_get_field_name)
	* [cache_get_field_type](#cache_get_field_type)
	* [cache_set_result](#cache_set_result)
	* [cache_get_value_index](#cache_get_value_index)
	* [cache_get_value_index_int](#cache_get_value_index_int)
	* [cache_get_value_index_float](#cache_get_value_index_float)
	* [cache_is_value_index_null](#cache_is_value_index_null)
	* [cache_get_value_name](#cache_get_value_name)
	* [cache_get_value_name_int](#cache_get_value_name_int)
	* [cache_get_value_name_float](#cache_get_value_name_float)
	* [cache_is_value_name_null](#cache_is_value_name_null)
	* [cache_save](#cache_save)
	* [cache_delete](#cache_delete)
	* [cache_set_active](#cache_set_active)
	* [cache_unset_active](#cache_unset_active)
	* [cache_is_any_active](#cache_is_any_active)
	* [cache_is_valid](#cache_is_valid)
	* [cache_affected_rows](#cache_affected_rows)
	* [cache_warning_count](#cache_warning_count)
	* [cache_insert_id](#cache_insert_id)
	* [cache_get_query_exec_time](#cache_get_query_exec_time)
	* [cache_get_query_string](#cache_get_query_string)
* Plugin callbacks
	* [OnQueryError](#OnQueryError)
	
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
(MySQL:handle, const file_path[])
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
##mysql_errno
==========
**Description:**
>Returns the error code of the error message from the previous MySQL operation.

**Parameters:**
```bash
(MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`MySQL:handle`	The connection handle this will be processed on (optional).

**Return Values:**
>Error code, 0 if no error occurred, -1 otherwise.

> **Only these natives can set an error code:**
> - mysql_connect
> - mysql_connect_file
> - mysql_close
> - mysql_escape_string
> - mysql_format (uses mysql_escape_string internally if the %e specifier is used)
> - mysql_query
> - mysql_stat
> - mysql_get_charset
> - mysql_set_charset

```pawn
mysql_connect("127.0.0.1", "root", "mypass", "mydatabase");
if(mysql_errno() != 0) 
	print("Could not connect to database!");
```
---------
##mysql_error
==========
**Description:**
>Retrieves the error message of the last unthreaded MySQL command

**Parameters:**
```bash
(destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`destination[]`	The string to store the data into.
<br/>
`max_len`	The max. size of the destination string (optional).
<br/>
`MySQL:handle`	The connection handle this will be processed on (optional).

**Return Values:**
>1 on success, 0 on error.

```pawn
new MySQL: handle, errno;
 
handle = mysql_connect("127.0.0.1", "root", "mypass", "mydatabase");
errno = mysql_errno(handle);
 
if (errno != 0) 
{
    new error[100];
 
    mysql_error(error, sizeof (error), handle);
    printf("[ERROR] #%d '%s'", errno, error);
```
---------
##mysql_escape_string
==========
**Description:**
>Escapes special characters in a string for the use in a SQL statement. It prepends backslashes to the following characters: \x00, \n, \r, \, ', " and \x1a.
>
>>Always use this function (if you don't use [mysql_format](#mysql_format) with the '%e' specifier) before inserting user inputs in a query. You can be victim of a [SQL injection](//en.wikipedia.org/wiki/SQL_injection) if you do not do so.
**Parameters:**
```bash
(const source[], destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`const source[]`	The string you want to be escaped.
<br/>
`destination[]`	The string to store escaped data in.
<br/>
`max_len`	The size of the destination (optional).
<br/>
`MySQL:handle`	The connection handle this will be processed on (optional).

**Return Values:**
>Length of escaped string, -1 on error.
>% and _ are not escaped. These are wildcards in MySQL if combined with LIKE, GRANT, or REVOKE.
> - You have to provide the size (max_len) by yourself if you use an enum-array as destination.
> - If the destination cannot hold the whole text escaped, the function will return -1 and leave destination unchanged.
```pawn
new MySQL: handle, errno;
 
handle = mysql_connect("127.0.0.1", "root", "mypass", "mydatabase");
errno = mysql_errno(handle);
 
if (errno != 0) 
{
    new error[100];
 
    mysql_error(error, sizeof (error), handle);
    printf("[ERROR] #%d '%s'", errno, error);
```
---------
##mysql_format
==========
**Description:**
>Allows you to format a string which you can safely use in a query.

**Parameters:**
```bash
(MySQL:handle, output[], len, format[], {Float,_}:...)
```
`MySQL:handle`	The connection handle this will be processed on.
<br/>
`output[]`	The string to save the result to.
<br/>
`len`	The size of the output.
<br/>
`format[]`	The format string.
<br/>
`{Float,_}:...`	Indefinite number of arguments.

**Return Values:**
>Length of the formatted string.

**Format strings**
| Placeholder  	|	Meaning
| ------------ 	| ----------------------------										|
|%%		|	Literal %.											|
|%e		|	Escaped string (escapes directly without the need to call mysql_escape_string() before).	|
|%s		|	Normal string.											|
|%d / %i	|	Decimal number.											|
|%o		|	Octal number.											|
|%f		|	Floating point number (will print INF and NAN in lowercase).					|
|%F		|	Floating point number (will print INF and NAN in uppercase).					|
|%X		|	Hexadecimal number in uppercase.								|
|%x		|	Hexadecimal number in lowercase.								|
|%b		|	Binary number.											|
|%u		|	Unsigned decimal number.									|
|%a / %A	|	Hexadecimal floating point number (lowercase/uppercase)						|
|%g / %g	|	Floating point number in scientific notation (lowercase/uppercase, like %f/%F)			|

The values for the placeholders follow in the exact same order as parameters in the call.

```pawn
new query[128];
mysql_format(MySQL, query, sizeof(query), "SELECT * FROM `%s` WHERE `bar` = '%e' AND `foobar` = '%f' LIMIT %d", "foobar", "escape'me\"please", 1.2345, 1337);
// the variable 'query' contains now the formatted query (including the escaped string)
mysql_tquery(MySQL, query, "OnStuffSelected");
```
---------
##mysql_set_charset
==========
**Description:**
>Use this function to change the character set the connection uses. Very useful for servers which often process data with foreign characters.

**Parameters:**
```bash
(const charset[], MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`const charset[]`	Character set you want to use.
<br/>
`MySQL:handle`	The connection handle this will be processed on (optional).

**Return Values:**
>1 on success, 0 on fail

```pawn
mysql_set_charset("utf8");
```
---------
##mysql_get_charset
==========
**Description:**
>Use this function to get the current character set in use.

**Parameters:**
```bash
(destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`destination[]`	The string to store extracted data in.
<br/>
`max_len`	The size of the destination string (optional).
<br/>
`MySQL:handle`	The connection handle this will be processed on (optional).

**Return Values:**
>1 on success, 0 on fail

```pawn
new charset[20];
mysql_get_charset(charset);

```
---------
##mysql_stat
==========
**Description:**
>Use this function to retrieve the status of the MySQL server.

**Parameters:**
```bash
(destination[], max_len = sizeof(destination), MySQL:handle = MYSQL_DEFAULT_HANDLE)
```
`destination[]`	The string to store extracted data in.
<br/>
`max_len`	The size of the destination string (optional).
<br/>
`MySQL:handle`	The connection handle this will be processed on (optional).

**Return Values:**
>1 on success, 0 on fail

```pawn
new stats[150]; 
mysql_stat(stats); 
print(stats);
 
//Output would be something like:
// Uptime: 380  Threads: 1  Questions: 3  Slow queries: 0  Opens: 12  Flush tables: 1  
// Open tables: 6  Queries per second avg: 0.008
```
---------
Cache functions
==========
>Make sure you use these functions (except cache_delete(), cache_set_active(), cache_unset_active(), cache_is_any_active() and cache_is_valid()) only if there is an active cache available.

##cache_get_row_count
==========
**Description:**
>Returns the number of rows.

**Parameters:**
```bash
(&destination)
```
`&destination`	Variable to store the number of rows into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new row_count;
if(!cache_get_row_count(row_count))
	printf("couldn't retrieve row count");
else
	printf("There are %d rows in the current result set.", row_count);
```
---------
##cache_get_field_count
==========
**Description:**
>Returns the number of fields.

**Parameters:**
```bash
(&destination)
```
`&destination`	Variable to store the number of fields into.Variable to store the number of fields into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new field_count;
if(!cache_get_field_count(field_count))
	printf("couldn't retrieve field count");
else
	printf("There are %d fields in the current result set.", field_count);
```
---------
##cache_get_result_count
==========
**Description:**
>Returns the number of available results.

**Parameters:**
```bash
(&destination)
```
`&destination`	Variable to store the number of results into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new result_count;
if(!cache_get_result_count(result_count))
	return printf("couldn't retrieve result count");
 
printf("we will now go through all %d results:", result_count);
for(new r; r < result_count; r++)
{
	cache_set_result(r);
	new rows = cache_num_rows();
	printf("\t%d rows in %d. result", rows, r+1);
}
```
---------
##cache_get_field_name
==========
**Description:**
>Retrieves a fields name specified by its index.

**Parameters:**
```bash
(field_index, destination[], max_len = sizeof(destination))
```
`field_index`	The index of the field whose name to retrieve.
<br/>
`destination[]`	The string to store the name into.
<br/>
`max_len`	The size of the destination string (optional).


**Return Values:**
>1 on success, 0 on failure.

```pawn
new field_name[32];
cache_get_field_name(0, field_name);
printf("The first field name in the current result set is '%s'.", field_name);
```
---------
##cache_get_field_type
==========
**Description:**
>Returns a fields type specified by its index.

**Parameters:**
```bash
(field_index)
```
`field_index`	The index of the field whose type to return.

**Return Values:**
>Field type or MYSQL_TYPE_INVALID on error.

```pawn
new E_MYSQL_FIELD_TYPE:type = cache_get_field_type(0);
if(type == MYSQL_TYPE_VAR_STRING)
	printf("The first field is of type VARCHAR.");
```
---------
##cache_set_result
==========
**Description:**
>Sets an result as active, specified by an index.

**Parameters:**
```bash
(result_index)
```
`result_index`	The index of the result to set active.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new result_count;
if(!cache_get_result_count(result_count))
	return printf("couldn't retrieve result count");
 
printf("we will now go through all %d results:", result_count);
for(new r; r < result_count; r++)
{
	cache_set_result(r);
	new rows = cache_num_rows();
	printf("\t%d rows in %d. result", rows, r+1);
}
```
---------
##cache_get_value_index
==========
**Description:**
>Retrieves a value from the result set as a string.

**Parameters:**
```bash
(row_idx, column_idx, destination[], max_len = sizeof(destination))
```
`row_idx`	The row index (starts at '0').
<br/>
`column_idx`	The column index (starts at '0').
<br/>
`destination[]`	The string to store the data into.
<br/>
`max_len`	The max. size of the destination string (optional).

**Return Values:**
>1 on success, 0 on failure.
>
>> - You have to provide the size (max_len) by yourself if you use an enum-array as destination.
```pawn
new dest[128];
cache_get_value_index(0, 0, dest);
printf("The very first value in the current result set is '%s'.", dest);
```
---------
##cache_get_value_index_int
==========
**Description:**
>Retrieves a value from the result set as a decimal number.

**Parameters:**
```bash
(row_idx, column_idx, &destination)
```
`row_idx`	The row index (starts at '0').
<br/>
`column_idx`	The column index (starts at '0').
<br/>
`&destinationnew Float:float_dest;
cache_get_row_float(3, 4, float_dest);
printf("The floating point number stored in the fourth row and fifth column is '%f'.", float_dest);`		The variable to store the number into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new int_dest;
cache_get_value_index_int(3, 0, int_dest);
printf("The number stored in the fourth row and first column is '%d'.", int_dest);
```
---------
##cache_get_value_index_float
==========
**Description:**
>Retrieves a value from the result set as a floating point number.

**Parameters:**
```bash
(row_idx, column_idx, &Float:destination)
```
`row_idx`	The row index (starts at '0').
<br/>
`column_idx`	The column index (starts at '0').
<br/>
`&Float:destination`		The variable to store the number into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new Float:float_dest;
cache_get_row_float(3, 4, float_dest);
printf("The floating point number stored in the fourth row and fifth column is '%f'.", float_dest);
```
---------
##cache_is_value_index_null
==========
**Description:**
>Retrieve a boolean value on whether the specified column is NULL or not.

**Parameters:**
```bash
(row_idx, column_idx, &bool:destination)
```
`row_idx`	The row index (starts at '0').
<br/>
`column_idx`	The column index (starts at '0').
<br/>
`&bool:destination`	The variable to set to true/false, whether the value is NULL or not.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new bool:is_null;
cache_is_value_index_null(3, 4, is_null);
printf("The value in the fourth row and fifth column %s 'NULL'.", is_null ? "is" : "is not");
```
---------
##cache_get_value_name
==========
**Description:**
>Retrieves a value from the result set as a string.

**Parameters:**
```bash
(row_idx, const column_name[], destination[], max_len = sizeof(destination))
```
`row_idx`	The row index (starts at '0').
<br/>
`const column_name[]`	The column name..
<br/>
`destination[]`	The string to store the data into.
<br/>
`max_len`	The size of the destination string (optional).

**Return Values:**
>1 on success, 0 on failure.

> - You have to provide the size (max_len) by yourself if you use an enum-array as destination.
```pawn
new dest[128];
cache_get_value_name(0, "name", dest);
printf("The value in the column 'name' is '%s'.", dest);
```
---------
##cache_get_value_name_int
==========
**Description:**
>Retrieves a value from the result set as a decimal number.

**Parameters:**
```bash
(row_idx, const column_name[], &destination)
```
`row_idx`	The row index (starts at '0').
<br/>
`const column_name[]`	The column name.
<br/>
`&destination`	The variable to store the number into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new int_dest;
cache_get_value_name_int(2, "money", int_dest);
printf("The value in the third row and in the column 'money' is '%d'.", int_dest);
```
---------
##cache_get_value_name_float
==========
**Description:**
>Retrieves a value from the result set as an floating point number.

**Parameters:**
```bash
(row_idx, const column_name[], &Float:destination)
```
`row_idx`	The row index (starts at '0').
<br/>
`const column_name[]`	The column name.
<br/>
`&Float:destination`	The variable to store the float into.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new Float:float_dest;
cache_get_value_name_float(3, "pos_x", float_dest);
printf("The value in the fourth row and in the column 'pos_x' is '%f'.", float_dest);
```
---------
##cache_is_value_name_null
==========
**Description:**
>Retrieve a boolean value on whether the specified column is NULL or not.

**Parameters:**
```bash
(row_idx, const column_name[], &bool:destination)
```
`row_idx`	The row index (starts at '0').
<br/>
`const column_name[]`	The column name.
<br/>
`&bool:destination`	The variable to set to true/false, whether the value is NULL or not.

**Return Values:**
>1 on success, 0 on failure.

```pawn
new bool:is_null;
cache_is_value_name_null(3, "date", is_null);
printf("The value in the fourth row and in the column 'date' %s 'NULL'.", is_null ? "is" : "is not");
```
---------
##cache_save
==========
**Description:**
>Saves the active cache in the memory and returns an cache-id to access it for later use.

**Parameters:**
```bash
This function has no parameters
```

**Return Values:**
>Valid cache-id on success or MYSQL_INVALID_CACHE on failure.

```pawn
enum E_PLAYER {
	ID,
	Name[MAX_PLAYER_NAME],
	Cache:Data,
	// ...
};
new Player[MAX_PLAYERS][E_PLAYER];
 
 
public OnPlayerConnect(playerid)
{
	new query[128];
	GetPlayerName(playerid, Player[playerid][Name], MAX_PLAYER_NAME);
 
	mysql_format(MySQL, query, sizeof(query), "SELECT * FROM `players` WHERE `name` = '%e' LIMIT 1", Player[playerid][Name]);
	mysql_tquery(MySQL, query, "OnPlayerDataLoaded", "d", playerid);
	return 1;
}
 
forward OnPlayerDataLoaded(playerid);
public OnPlayerDataLoaded(playerid)
{
	if(cache_num_rows() == 1)
	{
		//save the cache for later use
		Player[playerid][Data] = cache_save();
 
		//show login dialog
		// ShowPlayerDialog(playerid, ...
	}
	// else //show register dialog
		// ShowPlayerDialog(playerid, ...
	return 1;
}
```
---------
##cache_delete
==========
**Description:**
>Deletes the specified cache from the memory.

**Parameters:**
```bash
(Cache:cache_id)
```
`Cache:cache_id`	The cache-id which should be deleted.

**Return Values:**
>1 on success, 0 on fail.

```pawn
enum E_PLAYER {
	ID,
	Name[MAX_PLAYER_NAME],
	Cache:Data,
	// ...
};
new Player[MAX_PLAYERS][E_PLAYER];
 
 
public OnPlayerDisconnect(playerid, reason)
{
	cache_delete(Player[playerid][Data]);
	// ...
	return 1;
}
```
---------
##cache_set_active
==========
**Description:**
>Sets the specified cache as the active cache.

**Parameters:**
```bash
(Cache:cache_id)
```
`Cache:cache_id`	The cache-id which should be set as active.

**Return Values:**
>1 on success, 0 on fail.

```pawn
enum E_PLAYER {
	ID,
	Name[MAX_PLAYER_NAME],
	Cache:Data,
	Money,
	Float:PosX,
	// ...
};
new Player[MAX_PLAYERS][E_PLAYER];
 
 
public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
	switch(dialogid)
	{
		// ...
		case DIALOG_LOGIN:
		{
			//if password matches
			cache_set_active(Player[playerid][Data]);
 
			cache_get_value_int(0, "money", Player[playerid][Money]);
			cache_get_value_float(0, "pos_x", Player[playerid][PosX]);
			// ...
			cache_unset_active(); 
		}
		// ...
		default:
			return 0;
	}
	return 1;
}
```
---------
##cache_unset_active
==========
**Description:**
>Unsets the active cache.

**Parameters:**
```bash
This function has no parameters
```

**Return Values:**
>This function does not return any specific values.

```pawn
cache_set_active(Player[playerid][Data]);
 
cache_get_value_int(0, "money", Player[playerid][Money]);
cache_unset_active(); 
if(cache_get_value_float(0, "pos_x", Player[playerid][PosX]))
	printf("data was successfully retrieved, this should NOT happen!");
else
	printf("there is no active cache, because we just unset it.");
```
---------
##cache_is_any_active
==========
**Description:**
>Checks whether there is an active cache.

**Parameters:**
```bash
This function has no parameters
```

**Return Values:**
>1 if there is an active cache, 0 otherwise.

```pawn
cache_set_active(Player[playerid][Data]);
assert(cache_is_any_active() == true);
cache_unset_active(); 
assert(cache_is_any_active() == false);
```
---------
##cache_is_valid
==========
**Description:**
>Checks if the specified cache is valid.

**Parameters:**
```bash
(Cache:cache_id)
```
`Cache:cache_id`	The cache-id which should be checked.

**Return Values:**
>1 if valid, 0 if invalid.

```pawn
enum E_PLAYER {
	ID,
	Name[MAX_PLAYER_NAME],
	Cache:Data,
	// ...
};
new Player[MAX_PLAYERS][E_PLAYER];
 
public OnPlayerUpdate(playerid)
{
	//if random event...
	cache_delete(Player[playerid][Data]);
 
	return 1;
}
 
public OnPlayerDisconnect(playerid, reason)
{
	if(cache_is_valid(Player[playerid][Data]))
		cache_delete(Player[playerid][Data]);
	// ...
 
	return 1;
}
```
---------
##cache_affected_rows
==========
**Description:**
>Returns the number of affected rows if the query was an INSERT, UPDATE, REPLACE or DELETE query.

**Parameters:**
```bash
This function has no parameters
```
> - If the last query was a DELETE query with no WHERE clause, all of the records will be deleted from the table but this function will return zero.

**Return Values:**
>Number of affected rows, -1 on error

```pawn
mysql_tquery(MySQL, "DELETE FROM mylogs WHERE log_id > 10", "OnLogsDeleted");
// ...
public OnLogsDeleted()
{
	printf("%d logs deleted!", cache_affected_rows());
	return 1;
}
```
---------
##cache_warning_count
==========
**Description:**
>Returns the number of warnings the sent query generated.

**Parameters:**
```bash
This function has no parameters
```

**Return Values:**
>Number of warnings, -1 on error

```pawn
mysql_tquery(MySQL, "DROP TABLE IF EXISTS `nope`", "OnStuffHappened");
// ...
public OnStuffUpdated()
{
	if(cache_warning_count())
		printf("table 'nope' doesn't exist.");
 
	return 1;
}
```
---------
##cache_insert_id
==========
**Description:**
>Retrieves the ID generated for an AUTO_INCREMENT column by the sent query (usually INSERT).

**Parameters:**
```bash
This function has no parameters
```

**Return Values:**
>new ID generated for an AUTO_INCREMENT column, -1 on error.

```pawn
mysql_tquery(MySQL, "INSERT INTO `players` (`name`, `password`) VALUES ('Ownage', MD5('mypass'))", "OnPlayerRegister", "d", playerid);
// ...
public OnPlayerRegister(playerid)
{
	printf("New player registered with ID '%d'.", cache_insert_id());
	return 1;
}
```
---------
##cache_get_query_exec_time
==========
**Description:**
>Returns the time the query took to be executed.

**Parameters:**
```bash
(E_EXECTIME_UNIT:unit = UNIT_MICROSECONDS)
```
`E_EXECTIME_UNIT:unit`	Time unit which should be used for the execution time (optional).

**Return Values:**
>Execution time as positive number, -1 on error.

> - Buffer overflows may occur if using microseconds as unit in combination with long queries.

**Time units**
| 	  Unit 		|
| --------------------- |
|   UNIT_MILLISECONDS	|
|   UNIT_MICROSECONDS	|

```pawn
mysql_tquery(MySQL, "SELECT * FROM `data`", "OnDataRetrieved");
// ...
public OnDataRetrieved()
{
	printf("The query \"SELECT * FROM `data`\" took %d milliseconds / %d microseconds to execute.",
		cache_get_query_exec_time(UNIT_MILLISECONDS), cache_get_query_exec_time(UNIT_MICROSECONDS));
 
	//output:
	//	The query "SELECT * FROM `data`" took 9 milliseconds / 9311 microseconds to execute.
	return 1;
}
```
---------
##cache_get_query_string
==========
**Description:**
>Returns the query which was executed as string.

**Parameters:**
```bash
(destination[], max_len = sizeof(destination))
```
`destination[]`	The string to store the query into.
<br/>
`max_len`	The maximal size of the destination string (optional).


**Return Values:**
>1 on success, 0 on error.

```pawn
mysql_tquery(MySQL, "SELECT * FROM `data`", "OnDataRetrieved");
// ...
public OnDataRetrieved()
{
	new query[64];
	cache_get_query_string(query);
	printf("Executed query: \"%s\"", query);
	//output:
	//	Executed query: "SELECT * FROM `data`"
	return 1;
}
```
---------
#Plugin callbacks
==========
##OnQueryError
==========
**Description:**
>This callback is called when an error occurs while processing a query.

**Parameters:**
```bash
(errorid, const error[], const callback[], const query[], MySQL:handle)
```
`errorid`	ID of the error.
<br/>
`const error[]`	Error message.
<br/>
`const callback[]`	Name of the result callback. Will be empty if there was none.
<br/>
`const query[]`	Query which was executed.
<br/>
`MySQL:handle`	The connection handle this was processed on.

**Return Values:**
>This callback does not handle returns.

```pawn
public OnQueryError(errorid, const error[], const callback[], const query[], MySQL:handle)
{
	switch(errorid)
	{
		case CR_SERVER_GONE_ERROR:
		{
			printf("Lost connection to server");
		}
		case ER_SYNTAX_ERROR:
		{
			printf("Something is wrong in your syntax, query: %s",query);
		}
	}
	return 1;
}
```
---------
